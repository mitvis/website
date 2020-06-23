const hb = require('handlebars'),
    timeF = require('d3-time-format').timeFormat,
    data = require('../src/data');

hb.registerHelper('authorList', function(authors, opts) {
  const delim = opts.hash.delim || ', ';
  return authors.map((a) => opts.fn(data.people[a] || {name: a, url: null}).trim()).join(delim);
});

hb.registerHelper('paperList', function(papers, data, opts) {
  var delim = arguments.length === 4 ? arguments[2] : '\n';
  opts = arguments[arguments.length-1];
  return papers.map((p) => opts.fn(data.papers.find((x) => x.slug === p)))
    .join(delim || '\n');
});

hb.registerHelper('venueName', function(slug, format, year) {
  const prevYear = ['infovis', 'vast', 'scivis'];
  let name = data.venues[slug][format];

  if (year === undefined) return `${name}.`;
  if (format === 'full') return `${name}, ${year}.`;

  return prevYear.includes(slug) ? `${name} ${year-1}.` : `${name} ${year}.`;
});

hb.registerHelper('timeF', function(fmt, str) {
  return timeF(fmt)(new Date(str + ' 00:00:00'));
});

hb.registerHelper('pastTravel', function(travel) {
  return new Date((travel.end || travel.start) + ' 00:00:00') < new Date() ?
    'class="past"' : '';
});

hb.registerHelper('featured', function(papers) {
  return JSON.stringify(papers.filter(p => p.featured !== false));
});

hb.registerHelper('members', function(people, opts) {
  return Object.keys(people).map(handle => Object.assign({handle}, people[handle]))
    .filter(p => p.role !== 'external' && !p.alumni)
    .map(p => opts.fn(p))
    .join('');
});

hb.registerHelper('alumni', function(people, opts) {
  return Object.keys(people).map(handle => Object.assign({handle}, people[handle]))
    .filter(p => p.role !== 'external' && p.alumni)
    .reduce((acc, curr) => {
      const last = acc.length && acc[acc.length - 1].cell;
      return (!last || last.length === 2 ? acc.push({cell: [curr]}) : last.push(curr), acc);
    }, [])
    .map(p => opts.fn(p))
    .join('');
});

hb.registerHelper('bibtex', function() {
  const v = data.venues[this.venue],
        b = v.bibtex,
        authors = this.authors.map(a => bibtex_escape(data.people[a] ? data.people[a].name : a)).join(' AND ');

  return `@${b.type}{${this.year}-${this.slug},\n` +
    ` title = {{${this.title}}},\n` + 
    ` author = {${authors}},\n` + 
    ` ${b.venue} = {${v.full.replace('&', '\\&')}},\n` + 
    (this.volume ? ` volume = {${this.volume}},\n` : '') + 
    (this.number ? ` number = {${this.number}},\n` : '') + 
    ` year = {${this.year}},\n` +
    ` url = {http://vis.csail.mit.edu/pubs/${this.slug}}\n` + 
  `}`
});

function bibtex_escape(str) {
	return !str ? "" :
	  str.replace("&", "\\&")
	     .replace("%", "\\%")
	     .replace("é", "\\'{e}")
	     .replace("Ç", "\\c{C}")
	     .replace("ğ", "\\u{g}");
}
