document.addEventListener('DOMContentLoaded', function() {
  const $  = document.querySelector.bind(document);
  const $$ = document.querySelectorAll.bind(document);
  const allElems = $$('.pub, .year');
  const searchBar = $('#search');

  const index = new FlexSearch.Document({
    index: ['title', 'abstract', 'caption', 'authors'],
    tokenize: 'forward',
    store: ['year', 'type']
  });

  for (const elem of $$('.pub')) {
    index.add(JSON.parse(elem.getAttribute('data-pub')));
  }

  searchBar.addEventListener('input', search);
  for (const t of $$('.tag')) t.addEventListener('click', toggleTag);

  function toggleTag(evt) {
    const el = evt.target;
    const parent = el.parentElement;
    const selected = parent.querySelectorAll('.tag.selected');

    let toggle = evt.ctrlKey || evt.metaKey;
    toggle = toggle || (selected.length === 1 && selected[0] === el)

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
    let results = index.search(searchBar.value, {enrich: true});
    results = [...new Set(results.map(r => r.result).flat())];

    if (!results.length) {
      results = Object.entries(index.store).map(([id, doc]) => ({id, doc}))
    }

    const tags = [...$$('#types > .tag.selected')].map(e => e.innerText.toLowerCase());
    if (tags.length) results = results.filter(r => tags.indexOf(r.doc.type) >= 0);

    for (const e of allElems) e.style.display = 'none';

    for (const res of results) {
      $(`#${res.id}`).style.display = 'block';
      $(`#year-${res.doc.year}`).style.display = 'block';
    }
  }
});
