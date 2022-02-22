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
    if (!evt.ctrlKey && !evt.metaKey) {
      for (const tag of el.parentElement.querySelectorAll('.tag')) {
        if (tag === el) continue;
        tag.classList.remove('selected');
      }
    }

    el.classList.toggle('selected');
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
