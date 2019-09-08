var hb = require('handlebars'),
    timeF = require('d3-time-format').timeFormat;

hb.registerHelper('authorList', function(authors, data, opts) {
  return authors.map((a) => opts.fn(data.people[a] || {name: a, url: null}).trim()).join(', ');
});

hb.registerHelper('paperList', function(papers, data, opts) {
  var delim = arguments.length === 4 ? arguments[2] : '\n';
  opts = arguments[arguments.length-1];
  return papers.map((p) => opts.fn(data.papers.find((x) => x.slug === p)))
    .join(delim || '\n');
});

hb.registerHelper('venueName', function(slug, name, data) {
  return data.venues[slug][name];
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
    .filter(p => p.role !== 'external')
    .map(p => opts.fn(p))
    .join('');
});
