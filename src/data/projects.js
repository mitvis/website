module.exports = [
  {
    slug: 'reactive-vega',
    name: 'Reactive Vega: Declarative Interaction Design',
    url: 'http://vega.github.io/vega/',
    collaborators: ['jhoffs', 'ryanrussell', 'kanitw', 'jheer'],
    papers: ['reactive-vega-model', 'reactive-vega', 'vega-debugging'],
    videos: ['http://vimeo.com/100936827'],
    talks: [{
      venue: 'openvis',
      year: 2016,
      url: 'https://www.youtube.com/watch?v=Y8Fp9z-9DWc'
    }],
    repo: 'https://github.com/vega/vega',
    abstract: 'Declarative primitives for interaction design, backed by a performant streaming+reactive dataflow architecture.',
    featured: true
  },
  {
    slug: 'vega-lite',
    name: 'Vega-Lite: A Grammar of Interactive Graphics',
    url: 'http://vega.github.io/vega-lite/',
    collaborators: ['domoritz', 'kanitw', 'jheer'],
    papers: ['vega-lite'],
    videos: ['https://vimeo.com/177767802'],
    talks: [{
      venue: 'openvis',
      year: 2017,
      url: 'https://www.youtube.com/watch?v=9uaHRWj04D4'
    }],
    repo: 'https://github.com/vega/vega-lite',
    thumb: 'http://idl.cs.washington.edu/static/images/thumbs/vega-lite.png',
    abstract: 'A high-level visualization grammar that enables rapid specification, and decomposes interaction into enumerable semantic units.',
    featured: true
  },
  {
    slug: 'lyra',
    name: 'Lyra: A Visualization Design Environment',
    url: 'http://idl.cs.washington.edu/projects/lyra/',
    collaborators: ['ryanrussell', 'jheer'],
    papers: ['lyra'],
    videos: ['http://vimeo.com/96104443'],
    talks: [{
      venue: 'eurovis',
      year: 2014,
      url: 'http://vimeo.com/100719873'
    }, {
      venue: 'openvis',
      year: 2014,
      url: 'https://www.youtube.com/watch?v=io7BSu6RIYM'
    }],
    repo: 'https://github.com/vega/lyra',
    abstract: 'Lyra enables constructing D3-calibre visualizations through direct manipulation, no programming required! <span class="try"><a href="http://idl.cs.washington.edu/projects/lyra/app/">Try it »</a></span>',
    featured: true
  },
  {
    slug: 'ellipsis',
    name: 'Ellipsis: Authoring Narrative Visualizations',
    url: 'http://idl.cs.washington.edu/projects/ellipsis/',
    collaborators: ['jheer'],
    papers: ['ellipsis'],
    videos: ['http://vimeo.com/96648854'],
    talks: [{
      venue: 'eurovis',
      year: 2014,
      url: 'http://vimeo.com/100680412'
    }],
    repo: 'https://github.com/uwdata/ellipsis',
    abstract: 'A model of storytelling abstractions, and a graphical interface for authoring narrative visualizations. <span class="try"><a href="http://idl.cs.washington.edu/projects/ellipsis/app/">Try it »</a></span>',
    other: true
  },
  {
    slug: 'webzeitgeist',
    name: 'Webzeitgeist: Design Mining the Web',
    url: 'http://webzeitgeist.stanford.edu/',
    collaborators: ['oranju', 'maxinelim', 'jtalton', 'cearto', 'srk'],
    papers: ['webzeitgeist', 'web-structural-semantics', 'ml-4-design'],
    videos: ['http://www.youtube.com/watch?v=NCc9XudToy8'],
    abstract: 'A platform for scaleable design mining to understand design demographics, and support data-driven design tools.',
    other: true
  },
  {
    slug: 'overlays',
    name: 'An Overlay Interface for Large Displays',
    url: '/papers/2012-Overlays-IUI.pdf',
    collaborators: ['weibel', 'hollan'],
    papers: ['wall-overlays'],
    videos: ['https://www.youtube.com/watch?v=oazCyaTgLdA'],
    repo: 'https://github.com/arvind/cglX-overlay',
    abstract: 'A superimposed interface to constrain interaction, focus attention, and facilitate multiple users with wall-sized displays.',
    other: true
  }
];