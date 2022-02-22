document.addEventListener('DOMContentLoaded', function() {
  const pubElems = document.querySelectorAll('.pub');
  const data = [];
  const years = new Set();
  
  for (const elem of pubElems) {
    const d = JSON.parse(elem.getAttribute('data-pub'));
    d.elem = elem;
    years.add(d.year);
    data.push(d);
  }

  const items = itemsjs(data, {
    searchableFields: ['title', 'abstract', 'caption']
  });

  document.getElementById('search').addEventListener('input', function(evt) {
    const results = items.search({
      query: evt.target.value,
      per_page: data.length,
      sort: 'year_desc'
    });
    
    for (const pub of pubElems) {
      pub.style.display = 'none';
    }

    for (const y of years) {
      document.getElementById(`year-${y}`).style.display = 'none';
    }

    for (const item of results.data.items) {
      document.getElementById(item.id).style.display = 'block';
      document.getElementById(`year-${item.year}`).style.display = 'block';
    }
  });
});
