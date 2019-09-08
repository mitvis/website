var reload = require('require-reload')(require);

module.exports = {
  people: reload('./people'),
  venues: reload('./venues'),
  news: reload('./news'),
  papers: reload('./papers'),
  dispatches: reload('./dispatches')
};
