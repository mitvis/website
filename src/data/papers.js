module.exports = [
  {
    slug: 'interpretability-building-blocks',
    title: 'The Building Blocks of Interpretability',
    authors: ['colah', 'me', 'enjalot', 'shancarter', 'ludwigschubert', 'kqy', 'znah'],
    venue: 'distill',
    url: 'https://distill.pub/2018/building-blocks/'
  },
  {
    slug: 'insitu-vis-debugging',
    title: 'Augmenting Code with In Situ Visualizations to Aid Program Understanding',
    authors: ['jhoffs', 'me', 'jheer'],
    venue: 'chi',
    year: 2018,
    url: 'http://idl.cs.washington.edu/files/2018-InSituCodeVis-CHI.pdf',
    abstract: 'Programmers must draw explicit connections between their code and runtime state to properly assess the correctness of their programs. However, debugging tools often decouple the program state from the source code and require explicitly invoked views to bridge the rift between program editing and program understanding. To unobtrusively reveal runtime behavior during both normal execution and debugging, we contribute techniques for visualizing program variables directly within the source code. We describe a design space and placement criteria for embedded visualizations. We evaluate our in situ visualizations in an editor for the Vega visualization grammar. Compared to a baseline development environment, novice Vega users improve their overall task grade by about 2 points when using the in situ visualizations and exhibit significant positive effects on their self-reported speed and accuracy.',
    featured: false
  },
  {
    slug: 'vega-lite',
    title: 'Vega-Lite: A Grammar of Interactive Graphics',
    authors: ['me', 'domoritz', 'kanitw', 'jheer'],
    venue: 'infovis',
    year: 2017,
    bestPaper: true,
    url: 'http://idl.cs.washington.edu/files/2017-VegaLite-InfoVis.pdf',
    abstract: 'We present Vega-Lite, a high-level grammar that enables rapid specification of <em>interactive</em> data visualizations. Vega-Lite combines a traditional grammar of graphics, providing visual encoding rules and a composition algebra for layered and multi- view displays, with a novel grammar of interaction. Users specify interactive semantics by composing <em>selections</em>. In Vega-Lite, a selection is an abstraction that defines input event processing, points of interest, and a predicate function for inclusion testing. Selections parameterize visual encodings by serving as input data, defining scale extents, or by driving conditional logic. The Vega-Lite compiler automatically synthesizes requisite data flow and event handling logic, which users can override for further customization. In contrast to existing reactive specifications, Vega-Lite selections decompose an interaction design into concise, enumerable semantic units. We evaluate Vega-Lite through a range of examples, demonstrating succinct specification of both customized interaction methods and common techniques such as panning, zooming, and linked selection.'
  },
  {
    slug: 'vega-debugging',
    title: 'Visual Debugging Techniques for Reactive Data Visualization.',
    featTitle: 'Visual Debugging Techniques',
    authors: ['jhoffs', 'me', 'jheer'],
    venue: 'eurovis',
    year: 2016,
    url: 'http://idl.cs.washington.edu/files/2016-VegaDebugging-EuroVis.pdf',
    abstract: 'Interaction is critical to effective visualization, but can be difficult to author and debug due to dependencies among input events, program state, and visual output. Recent advances leverage reactive semantics to support declarative design and avoid the “spaghetti code” of imperative event handlers. While reactive programming improves many aspects of development, textual specifications still fail to convey the complex runtime dynamics. In response, we contribute a set of visual debugging techniques to reveal the runtime behavior of reactive visualizations. A timeline view records input events and dynamic variable updates, allowing designers to replay and inspect the propagation of values step-by-step. On-demand annotations overlay the output visualization to expose relevant state and scale mappings in-situ. Dynamic tables visualize how backing datasets change over time. To evaluate the effectiveness of these techniques, we study how first-time Vega users debug interactions in faulty, unfamiliar specifications; with no prior knowledge, participants were able to accurately trace errors through the specification.'
  },
  {
    slug: 'reactive-vega',
    title: 'Reactive Vega: A Streaming Dataflow Architecture  for Declarative Interactive Visualization',
    featTitle: 'Reactive Vega: Declarative Interactive Visualization',
    authors: ['me', 'ryanrussell', 'jhoffs', 'jheer'],
    venue: 'infovis',
    year: 2015,
    url: 'http://idl.cs.washington.edu/files/2015-ReactiveVega-InfoVis.pdf',
    abstract: 'We present Reactive Vega, a system architecture that provides the first robust and comprehensive treatment of declarative visual and interaction design for data visualization. Starting from a single declarative specification, Reactive Vega constructs a dataflow graph in which input data, scene graph elements, and interaction events are all treated as first-class streaming data sources. To support expressive interactive visualizations that may involve time-varying scalar, relational, or hierarchical data, Reactive Vega’s dataflow graph can dynamically re-write itself at runtime by extending or pruning branches in a data-driven fashion. We discuss both compile- and run-time optimizations applied within Reactive Vega, and share the results of benchmark studies that indicate superior interactive performance to both D3 and the original, non-reactive Vega system.'
  },
  {
    slug: 'reactive-vega-model',
    title: 'Declarative Interaction Design for Data Visualization',
    authors: ['me', 'kanitw', 'jheer'],
    venue: 'uist',
    year: 2014,
    hidden: true,
    url: 'http://idl.cs.washington.edu/files/2014-DeclarativeInteraction-UIST.pdf',
    abstract: 'Declarative visualization grammars can accelerate development, facilitate retargeting across platforms, and allow language-level optimizations. However, existing declarative visualization languages are primarily concerned with visual encoding, and rely on imperative event handlers for interactive behaviors. In response, we introduce a model of declarative interaction design for data visualizations. Adopting methods from reactive programming, we model low-level events as composable data <em>streams</em> from which we form higher-level semantic <em>signals</em>. Signals feed <em>predicates</em> and <em>scale inversions</em>, which allow us to generalize interactive selections at the level of item geometry (pixels) into interactive queries over the data domain. <em>Production rules</em> then use these queries to manipulate the visualization’s appearance. To facilitate reuse and sharing, these constructs can be encapsulated as named <em>interactors</em>: standalone, purely declarative specifications of interaction techniques. We assess our model’s feasibility and expressivity by instantiating it with extensions to the Vega visualization grammar. Through a diverse range of examples, we demonstrate coverage over an established taxonomy of visualization interaction techniques.',
    featured: false
  },
  {
    slug: 'lyra',
    title: 'Lyra: An Interactive Visualization Design Environment',
    featTitle: 'Lyra: A Visualization Design Environment',
    authors: ['me', 'jheer'],
    venue: 'eurovis',
    year: 2014,
    url: 'http://idl.cs.washington.edu/files/2014-Lyra-EuroVis.pdf',
    abstract: 'We present Lyra, an interactive environment for designing customized visualizations without writing code. Using drag-and-drop interactions, designers can bind data to the properties of graphical marks to author expressive visualization designs. Marks can be moved, rotated and resized using handles; relatively positioned using connectors; and parameterized by data fields using property drop zones. Lyra also provides a data pipeline interface for iterative, visual specification of data transformations and layout algorithms. Visualizations created with Lyra are represented as specifications in Vega, a declarative visualization grammar that enables sharing and reuse. We evaluate Lyra’s expressivity and accessibility through diverse examples and studies with journalists and visualization designers. We find that Lyra enables users to rapidly develop customized visualizations, covering a design space comparable to existing programming-based tools.'
  },
  {
    slug: 'ellipsis',
    title: 'Authoring Narrative Visualizations with Ellipsis',
    authors: ['me', 'jheer'],
    venue: 'eurovis',
    year: 2014,
    url: 'http://idl.cs.washington.edu/files/2014-Ellipsis-EuroVis.pdf',
    abstract: 'Data visualization is now a popular medium for journalistic storytelling. However, current visualization tools either lack support for storytelling or require significant technical expertise. Informed by interviews with journalists, we introduce a model of storytelling abstractions that includes state-based scene structure, dynamic annotations and decoupled coordination of multiple visualization components. We instantiate our model in Ellipsis: a system that combines a domain-specific language (DSL) for storytelling with a graphical interface for story authoring. User interactions are automatically translated into statements in the Ellipsis DSL. By enabling storytelling without programming, the Ellipsis interface lowers the threshold for authoring narrative visualizations. We evaluate Ellipsis through example applications and user studies with award-winning journalists. Study participants find Ellipsis to be a valuable prototyping tool that can empower journalists in the creation of interactive narratives.',
    featured: false
  },
  {
    slug: 'webzeitgeist',
    title: 'Webzeitgeist: Design Mining the Web',
    authors: ['oranju', 'me', 'cearto', 'maxinelim', 'saahmad', 'srk', 'jtalton'],
    venue: 'chi',
    year: 2013,
    bestPaper: true,
    url: 'http://hci.stanford.edu/publications/2013/Webzeitgeist/webzeitgeist.pdf',
    abstract: 'Advances in data mining and knowledge discovery have transformed the way Web sites are designed. However, while visual presentation is an intrinsic part of the Web, traditional data mining techniques ignore render-time page structures and their attributes. This paper introduces <em>design mining</em> for the Web: using knowledge discovery techniques to understand design demographics, automate design curation, and support data-driven design tools. This idea is manifest in Webzeitgeist, a platform for large-scale design mining comprising a repository of over 100,000 Web pages and 100 million design elements. This paper describes the principles driving design mining, the implementation of the Webzeitgeist architecture, and the new class of data-driven design applications it enables.',
    featured: false
  },
  {
    slug: 'chi-schedule',
    title: 'The CHI 2013 Interactive Schedule',
    authors: ['me', 'strazzulla', 'clemens', 'mbl', 'mackay'],
    venue: 'chi-ea',
    year: 2013,
    url: 'http://arvindsatya.com/papers/chi2013-ischedule.pdf',
    abstract: 'CHI 2013 offers over 500 separate events including paper presentations, panels, courses, case studies and special interest groups. Given the size of the conference, it is no longer practical to host live summaries of these events. Instead, a 30-second <em>Video Preview</em> summary of each event is available. The CHI’13 Interactive Schedule helps attendees navigate this wealth of video content in order to identify events they would like to attend. It consists of a number of large display screens throughout the conference venue which cycle through a <em>video playlist</em> of events. Attendees can interact with these displays using their mobile devices by either constructing custom video playlists or adding on-screen content to their personal schedule.',
    featured: false
  },
  {
    slug: 'web-structural-semantics',
    title: 'Learning Structural Semantics for the Web',
    authors: ['maxinelim', 'oranju', 'me', 'cearto', 'jtalton', 'srk'],
    venue: 'stanford-cstr',
    year: '2012-02',
    url: 'http://hci.stanford.edu/cstr/reports/2012-03.pdf',
    abstract: 'Researchers have long envisioned a Semantic Web, where unstructured Web content is replaced by documents with rich semantic annotations. Unfortunately, this vision has been hampered by the difficulty of acquiring semantic metadata for Web pages. This paper introduces a method for automatically “semantifying” structural page elements: using machine learning to train classifiers that can be applied in a post-hoc fashion. We focus on one popular class of semantic identifiers: those concerned with the <em>structure</em> — or information architecture — of a page. To determine the set of structural semantics to learn and to collect training data for the learning, we gather a large corpus of labeled page elements from a set of online workers. We discuss the results from this collection and demonstrate that our classifiers learn structural semantics in a general way.',
    featured: false,
  },
  {
    slug: 'ml4design',
    title: 'A Platform for Large Scale Machine Learning on Web Design',
    authors: ['me', 'maxinelim', 'srk'],
    venue: 'chi-ea',
    year: '2012',
    url: 'http://hci.stanford.edu/publications/2012/ML4WebDesign.pdf',
    abstract: 'The Web is an enormous and diverse repository of design examples. Although people often draw from extant designs to create new ones, existing Web design tools do not facilitate example reuse in a way that captures the scale and diversity of the Web. To do so requires using machine learning techniques to train computational models which can be queried during the design process. In this work-in-progress, we present a platform necessary for doing such large-scale machine learning on Web designs, which consists of a Web crawler and proxy server to harvest and store a lossless and immutable snapshot of the Web; a page segmenter that codifies a page’s visual layout; and an interface for augmenting the segmentations with crowdsourced metadata.',
    featured: false,
  },
  {
    slug: 'wall-overlays',
    title: 'Using Overlays to Support Collaborative Interaction with Display Walls',
    authors: ['me', 'weibel', 'hollan'],
    venue: 'iui',
    year: 2012,
    url: '/papers/2012-Overlays-IUI.pdf',
    abstract: 'Large-scale display walls, and the high-resolution visualizations they support, promise to become ubiquitous. Natural interaction with them, especially in collaborative environments, is increasingly important and yet remains an on-going challenge. Part of the problem is a resolution mismatch between low-resolution input devices and high-resolution display walls. In addition, enabling concurrent use by multiple users is difficult — for example, how would this large workspace be managed for multiple users and what novel collaborative interactions could occur? In this paper, we present an overlay interface element superimposed on wall-display applications to help constrain interaction, focus attention on subsections of a display wall, and facilitate a collaborative multi-user workflow.',
    featured: false,
  }
]
