document.addEventListener('DOMContentLoaded', function() {
  const $  = document.querySelector.bind(document);
  const $$ = document.querySelectorAll.bind(document);
  const allElems = $$('.pub, .year');
  const searchBar = $('#search');

  const index = new FlexSearch.Document({
    index: ['title', 'abstract', 'caption', 'authors'],
    tokenize: 'forward',
    store: ['year', 'type', 'tags']
  });

  for (const elem of $$('.pub')) {
    index.add(JSON.parse(elem.getAttribute('data-pub')));
  }

  searchBar.addEventListener('input', search);
  for (const t of $$('.tag')) t.addEventListener('click', toggleTag);

  function toggleTag(evt) {
    const el = evt.target.tagName === 'SPAN' ? evt.target.parentElement : evt.target;
    const parent = el.parentElement;
    const selected = parent.querySelectorAll('.tag.selected');

    toggle = el.classList.contains('toggleable') || 
             evt.ctrlKey || evt.metaKey ||
             (selected.length === 1 && selected[0] === el);

    if (toggle) {
      el.classList.toggle('selected');
    } else {
      parent.querySelectorAll('.tag')
        .forEach(e => e.classList.remove('selected'));
      el.classList.add('selected');
    }
    
    search();
  }

  function search() {
    let results = index.search(searchBar.value);
    results = [...new Set(results.map(r => r.result).flat())];
    
    if (!results.length) {
      results = Object.entries(index.store).map(([id, doc]) => ({id, ...doc}))
    } else {
      results = results.map(id => ({id, ...index.get(id)}));
    }

    const selectedTypes = [...$$('#types .tag.selected')].map(e => e.getAttribute('data-tag').toLowerCase());
    if (selectedTypes.length) {
      results = results.filter(r => selectedTypes.indexOf(r.type) >= 0);
    }

    const selectedTags = [...$$('#tags .tag.selected')].map(e => e.getAttribute('data-tag').toLowerCase());
    if (selectedTags.length) {
      results = results.filter(r => selectedTags.every(t => r.tags.indexOf(t) >= 0));
    }

    for (const e of allElems) {
      e.style.display = 'none';
    }

    const counts = {};
    for (const res of results) {
      $(`#${res.id}`).style.display = 'block';
      $(`#year-${res.year}`).style.display = 'block';
      counts[`type-${res.type}`] = counts[`type-${res.type}`] + 1 || 1;
      for (const tag of res.tags) {
        const t = tag.replaceAll(' ', '-').toLowerCase();
        counts[`tag-${t}`] = counts[`tag-${t}`] + 1 || 1;
      }
    }

    for (const elem of $$('.tag span')) {
      elem.innerText = '(0)';
      elem.parentElement.style.opacity = 0.35;
    }

    for (const [id, count] of Object.entries(counts)) {
      const elem = $(`#${id} span`);
      if (!elem) continue;
      elem.innerText = `(${count})`;
      elem.parentElement.style.opacity = 1;
    }
  }

  // Populate URL tags and tag counts.
  const params = new URLSearchParams(window.location.search);
  for (const [key, value] of params.entries()) {
    $(`#${key}-${value}`).classList.add('selected');
  }

  search();
});
