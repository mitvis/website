const reload = require('require-reload')(require),
  people = reload('./people'),
  venues = reload('./venues'),
  recent = reload('./recent'),
  papers = reload('./papers'),
  dispatches = reload('./dispatches');

const dupe = obj => JSON.parse(JSON.stringify(obj));

function findRecentWork(work, data) {
  for (let i=0, j=0; i<work.length, j<data.length; j++) {
    for (let k=i; k<work.length; k++) {
      if (work[k] === data[j].slug) {
        work[k] = dupe(data[j]);
        i++;
        break;
      }
    }
  }

  return work;
}

module.exports = {
  people,
  venues,
  papers,
  dispatches,
  news: recent.news,
  recentWork: findRecentWork(findRecentWork(dupe(recent.work), papers), dispatches)
};
