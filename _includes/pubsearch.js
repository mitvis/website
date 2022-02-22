document.addEventListener('DOMContentLoaded', function() {
  const pubElems = document.querySelectorAll('.pub');
  const years = new Set();
  const index = new FlexSearch.Document({
    index: ['title', 'abstract', 'caption', 'authors'],
    tokenize: 'forward',
    store: ['year']
  });

  const searchBar = document.getElementById('search');
  
  for (const elem of pubElems) {
    const d = JSON.parse(elem.getAttribute('data-pub'));
    d.elem = elem;
    years.add(d.year);
    index.add(d);
  }

  function search() {
    const results = index.search(searchBar.value);
    const resultIds = new Set(results.map(r => r.result).flat());

    if (!searchBar.value) {
      for (const pub of pubElems)
        pub.style.display = 'block';
  
      for (const y of years)
        document.getElementById(`year-${y}`).style.display = 'block';

      return;
    }

    for (const pub of pubElems) 
      pub.style.display = 'none';

    for (const y of years)
      document.getElementById(`year-${y}`).style.display = 'none';

    for (const id of resultIds) {
      document.getElementById(id).style.display = 'block';
      document.getElementById(`year-${index.get(id).year}`).style.display = 'block';
    }
  }

  searchBar.addEventListener('input', search);
});
