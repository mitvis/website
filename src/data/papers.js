module.exports = [
  {
    slug: 'viral-visualizations',
    title: 'Viral Visualizations: How Coronavirus Skeptics Use Orthodox Data Practices to Promote Unorthodox Science Online',
    authors: ['crystallee', 'tanyang', 'Gabrielle Inchoco', 'Graham M. Jones', 'arvindsatya'],
    venue: 'chi',
    year: 2021,
    abstract: 'Controversial understandings of the coronavirus pandemic have turned data visualizations into a battleground. Defying public health officials, coronavirus skeptics on US social media spent much of 2020 creating data visualizations showing that the government\'s pandemic response was excessive and that the crisis was over. This paper investigates how pandemic visualizations circulated on social media, and shows that people who mistrust the scientific establishment often deploy the same rhetorics of data-driven decision-making used by experts, but to advocate for radical policy changes. Using a quantitative analysis of how visualizations spread on Twitter and an ethnographic approach to analyzing conversations about COVID data on Facebook, we document an epistemological gap that leads pro- and anti-mask groups to draw drastically different inferences from similar data. Ultimately, we argue that the deployment of COVID data visualizations reflect a deeper sociopolitical rift regarding the place of science in public life.',
    teaser: ' Sample counter-visualizations from the anti-mask user network. While there are meme-based visualizations, anti-maskers on Twitter adopt the same visual vocabulary as visualization experts and the mainstream media.',
    featured: true,
    materials: [
      {name: 'Interactive Narrative', url: '/covid-story/', type: 'book-open'},
      {name: 'Supplementary Dataset & Analysis Scripts', url: 'viral-visualizations-supplementary-material.zip', type: 'file'}
    ],
    videos: [
      {name: 'Video Preview', youtube: true, key: 'oLvlWG9cmXc'}
    ]
  },
  {
    slug: 'beyond-expertise-roles',
    title: 'Beyond Expertise and Roles: A Framework to Characterize the Stakeholders of Interpretable Machine Learning and their Needs',
    authors: ['harinisuresh', 'Steven R. Gomez', 'Kevin K. Nam', 'arvindsatya'],
    venue: 'chi',
    year: 2021,
    abstract: 'To ensure accountability and mitigate harm, it is critical that diverse stakeholders can interrogate black-box automated systems and find information that is understandable, relevant, and useful to them. In this paper, we eschew prior expertise- and role-based categorizations of interpretability stakeholders in favor of a more granular framework that decouples stakeholders\' knowledge from their interpretability needs. We characterize stakeholders by their formal, instrumental, and personal knowledge and how it manifests in the contexts of machine learning, the data domain, and the general milieu. We additionally distill a hierarchical typology of stakeholder needs that distinguishes higher-level domain goals from lower-level interpretability tasks. In assessing the descriptive, evaluative, and generative powers of our framework, we find our more nuanced treatment of stakeholders reveals gaps and opportunities in the interpretability literature, adds precision to the design and comparison of user studies, and facilitates a more reflexive approach to conducting this research.',
    teaser: 'A state of the <a href="/pubs/beyond-expertise-roles/framework-connections/">interactive figure</a> that visualizes the results of the analysis of ourframework’s descriptive power. We see how the two halves of the framework (knowledge-contexts and goals-objectives-tasks) provide a more granular and composable vocabulary with which to describe 58 papers from the literature on ML interpretability. Light grey links represent the set of all papers, and connect codes that appear together. The width of the link correspondsto the number of papers it represents. We use "code undetermined" to indicate cases where we were not able to code a particular category (e.g., if a paper did not explicitly specify a knowledge-context). In the interactive figure, hovering over a code selects all papers that contain the code, and highlights links to visualize the co-occurrence of other codes (e.g., "O2" shown here).',
    featured: true,
    materials: [
      {name: 'Interactive Figure of Framework Connections', url: 'http://vis.csail.mit.edu/pubs/beyond-expertise-roles/framework-connections/', type: 'file'}
    ],
    videos: []
  },
  {
    slug: 'lyra2',
    title: 'Lyra 2: Designing Interactive Visualizations by Demonstration',
    authors: ['jzong', 'dhiraj', 'rupayanneogy', 'arvindsatya'],
    venue: 'infovis',
    year: 2021,
    abstract: 'Recent graphical interfaces offer direct manipulation mechanisms for authoring visualizations, but are largely restricted to static output. To author interactive visualizations, users must instead turn to textual specification, but such approaches impose a higher technical burden. To bridge this gap, we introduce Lyra 2, a system that extends a prior visualization design environment with novel methods for authoring interaction techniques by demonstration. Users perform an interaction (e.g., button clicks, drags, or key presses) directly on the visualization they are editing. The system interprets this performance using a set of heuristics and enumerates suggestions of possible interaction designs. These heuristics account for the properties of the interaction (e.g., target and event type) as well as the visualization (e.g., mark and scale types, and multiple views). Interaction design suggestions are displayed as thumbnails; users can preview and test these suggestions, iteratively refine them through additional demonstrations, and finally apply and customize them via property inspectors. We evaluate our approach through a gallery of diverse examples, and evaluate its usability through a first-use study and via an analysis of its cognitive dimensions. We find that, in Lyra 2, interaction design by demonstration enables users to rapidly express a wide range of interactive visualizations.',
    teaser: 'Creating a brush with labeled extents in Lyra 2. (1) A brushing interaction authored via demonstrations. (2) Binding signals that represent the brush’s start and end extents to the content of two text marks respectively. (3) Positioning the text marks by their horizontal position to the brush’s start andend x-coordinates. (4) The completed design: an interval selection with labeled extents.',
    featured: true,
    materials: [
      {name: 'Live Demo', url: 'https://vega.github.io/lyra', type: 'cube'},
      {name: 'Code', url: 'https://github.com/vega/lyra', type: 'code'}
    ],
    videos: [
      {name: 'Video Preview', vimeo: true, key: '453645616'},
    ]
  },
  {
    slug: 'b2',
    title: 'B2: Bridging Code and Interactive Visualization in Computational Notebooks',
    authors: ['Yifan Wu', 'Joseph M. Hellerstein', 'arvindsatya'],
    venue: 'uist',
    year: 2020,
    abstract: 'Data scientists have embraced computational notebooks to author analysis code and accompanying visualizations within a single document. Currently, although these media may be interleaved, they remain siloed: interactive visualizations must be manually specified as they are divorced from the analysis provenance expressed via dataframes, while code cells have no access to users’ interactions with visualizations, and hence no way to operate on the results of interaction. To bridge this divide, we present B2, a set of techniques grounded in treating data queries as a shared representation between the code and interactive visualizations. B2 instruments data frames to track the queries expressed in code and synthesize corresponding visualizations. These visualizations are displayed in a dashboard to facilitate interactive analysis. When an interaction occurs, B2 reifies it as a data query and generates a history log in a new code cell. Subsequent cells can use this log to further analyze interaction results and, when marked as reactive, to ensure that code is automatically recomputed when new interaction occurs. In an evaluative study with data scientists, we find that B2 promotes a tighter feedback loop between coding and interacting with visualizations. All participants frequently moved from code to visualization and vice-versa, which facilitated their exploratory data analysis in the notebook.',
    teaser: 'An analyst\'s workflow with B2. They start by (1) importing the library which creates (2) a resizable dashboard pane to the right of the traditional notebook. The analyst can (3) click on the columns, which creates (4) code that computes and (5) visualizes corresponding distributions. The analyst can also write (6) a custom data frame query to create (7) the scatter plot. (8) B2\'s <em>reactive cells</em> automatically recompute when new interactions occur on visualizations. Interactions involve (9) <em>selections</em> of marks, which link or cross-filter the other visualizations in the dashboard, and are reified in code cells as either (10) an interaction history or by (11) copying their composed predicate definitions.',
    featured: true,
    materials: [
      // {name: 'Supplementary Material', url: 'https://osf.io/jwbn2/', type: 'file'}
    ],
    videos: [
      // {name: 'EuroVis 2020 Talk', vimeo: true, key: '431838603'}
    ]
  },
  {
    slug: 'multi-user-cursors',
    title: 'Representing Real-Time Multi-User Collaboration in Visualizations',
    authors: ['rupayanneogy', 'jzong', 'arvindsatya'],
    venue: 'vis-short',
    year: 2020,
    abstract: 'Establishing common ground and maintaining shared awareness amongst participants is a key challenge in collaborative visualization. For real-time collaboration, existing work has primarily focused on synchronizing constituent visualizations — an approach that makes it difficult for users to work independently, or selectively attend to their collaborators’ activity. To address this gap, we introduce a design space for representing synchronous multi-user collaboration in visualizations defined by two orthogonal axes: <em>situatedness</em>, or whether collaborators’ interactions are overlaid on or shown outside of a user’s view, and <em>specificity</em>, or whether collaborators are depicted through abstract, generic representations or through specific means customized for the given visualization. We populate this design space with a variety of examples including generic and custom synchronized <em>cursors</em>, and <em>user legends</em> that collect these cursors together or reproduce collaborators’ views as thumbnails. To build common ground, users can interact with these representations by <em>peeking</em> to take a quick look at a collaborator’s view, <em>tracking</em> to follow along with a collaborator in real-time, and <em>forking</em> to independently explore the visualization based on a collaborator’s work. We present a reference implementation of a wrapper library that converts interactive Vega-Lite charts into collaborative visualizations. We find that our approach affords synchronous collaboration across an expressive range of visual designs and interaction techniques.',
    teaser: 'Example gallery of user representations on collaborative visualizations. Inset views show the result of the peeking hover interaction for each example. A) Generic cursors overlay each visualization, indicating remote interaction. B) Specific cursors provide more visualization-specific information about remote user interaction. C) Cursor legends provide an external, minimal representation of remote users. D) Thumbnail legends visually communicate a specific overview of the remote interaction state.',
    featured: true,
    materials: [
      // {name: 'Supplementary Material', url: 'https://osf.io/jwbn2/', type: 'file'}
    ],
    videos: [
      {name: 'Video Preview', vimeo: true, key: '453645832'},
    ]
  },
  {
    slug: 'visualint',
    title: 'VisuaLint: Sketchy In Situ Annotations of Chart Construction Errors',
    authors: ['aspenhopkins', 'correll', 'arvindsatya'],
    venue: 'eurovis',
    year: 2020,
    abstract: 'Chart construction errors, such as truncated axes or inexpressive visual encodings, can hinder reading a visualization, or worse, imply misleading facts about the underlying data. These errors can be caught by critical readings of visualizations, but readers must have a high level of data and design literacy and must be paying close attention. To address this issue, we introduce VisuaLint: a technique for surfacing chart construction errors in situ. Inspired by the ubiquitous red wavy underline that indicates spelling mistakes, visualization elements that contain errors (e.g., axes and legends) are sketchily rendered and accompanied by a concise annotation. VisuaLint is unobtrusive — it does not interfere with reading a visualization — and its direct display establishes a close mapping between erroneous elements and the expression of error. We demonstrate five examples of VisualLint and present the results of a crowdsourced evaluation (N = 62) of its efficacy. These results contribute an empirical baseline proficiency for recognizing chart construction errors, and indicate near-universal difficulty in error identification. We find that people more reliably identify chart construction errors after being shown examples of VisuaLint, and prefer more verbose explanations for unfamiliar or less obvious flaws.',
    teaser: 'Examples of VisuaLint for six types of chart construction errors: (a) inexpressive size encodings; (b) dual axis charts with differing scales; (c) perceptually ineffective color encodings; (d) missing legends; and, (e) truncated axes.',
    featured: true,
    materials: [
      {name: 'Supplementary Material', url: 'https://osf.io/jwbn2/', type: 'file'}
    ],
    videos: [
      {name: 'EuroVis 2020 Talk', vimeo: true, key: '431838603'}
    ]
  },
  {
    slug: 'sociotechnical-vis-access',
    title: 'Sociotechnical Considerations for Accessible Visualization Design',
    authors: ['alundgard', 'crystallee', 'arvindsatya'],
    venue: 'vis-short',
    year: 2019,
    abstract: 'Accessibility – the process of designing for people with disabilities (PWD) — is an important but under-explored challenge in the visualization research community. Without careful attention, and if PWD are not included as equal participants throughout the process, there is a danger of perpetuating a vision-first approach to accessible design that marginalizes the lived experience of disability (e.g., by creating overly simplistic “sensory translations” that map visual to non-visual modalities in a one-to-one fashion). In this paper, we present a set of sociotechnical considerations for research in accessible visualization design, drawing on literature in disability studies, tactile information systems, and participatory methods. We identify that using state-of-the-art technologies may introduce more barriers to access than they remove, and that expectations of research novelty may not produce outcomes well-aligned with the needs of disability communities. Instead, to promote a more inclusive design process, we emphasize the importance of clearly communicating goals, following existing accessibility guidelines, and treating PWD as equal participants who are compensated for their specialized skills. To illustrate how these considerations can be applied in practice, we discuss a case study of an inclusive design workshop held in collaboration with the Perkins School for the Blind.',
    teaser: 'As part of an inclusive design workshop at the Perkins School for the Blind, we created a 3D printed tactile translation of a time-series chart by William Playfair. In this paper, we show how these one-to-one translations, while based on existing best-practice guidelines for tactile graphics, can be pedagogically ineffective and incur prohibitive costs.',
    featured: true,
    videos: [
      {name: 'Video Preview', vimeo: true, key: '363041501'}
    ]
  },
  {
    slug: 'critical-reflections',
    title: 'Critical Reflections on Visualization Authoring Systems',
    authors: ['arvindsatya', 'Bongshin Lee', 'Donghao Ren', 'jheer', 'John Stasko', 'John Thompson', 'Matthew Brehmer', 'Zhicheng Liu'],
    venue: 'infovis',
    year: 2020,
    abstract: 'An emerging generation of visualization authoring systems support expressive information visualization without textual programming. As they vary in their visualization models, system architectures, and user interfaces, it is challenging to directly compare these systems using traditional evaluative methods. Recognizing the value of contextualizing our decisions in the broader design space, we present critical reflections on three systems we developed-Lyra, Data Illustrator, and Charticulator. This paper surfaces knowledge that would have been daunting within the constituent papers of these three systems. We compare and contrast their (previously unmentioned) limitations and trade-offs between expressivity and learnability. We also reflect on common assumptions that we made during the development of our systems, thereby informing future research directions in visualization authoring systems.',
    teaser: 'Data binding via dropzones in Lyra (left), via the binding icon in Data Illustrator (middle), and via either approach in Charticulator (right).',
    featured: true,
    materials: [
      {name: 'Supplementary Material', url: 'https://vis-tools-reflections.github.io/', type: 'file'}
    ],
    videos: [
      {name: 'Video Preview', vimeo: true, key: '360484371'},
      {name: 'InfoVis 2019 Talk', vimeo: true, key: '372529109'}
    ]
  },
  {
    slug: 'sherlock',
    title: 'Sherlock: A Deep Learning Approach to Semantic Data Type Detection',
    authors: ['Madelon Hulsebos', 'Kevin Hu', 'Michiel Bakker', 'Emanuel Zgraggen', 'arvindsatya', 'Tim Kraska', 'Çağatay Demiralp', 'César Hidalgo'],
    venue: 'kdd',
    year: 2019,
    abstract: 'Correctly detecting the semantic type of data columns is crucial for data science tasks such as automated data cleaning, schema matching, and data discovery. Existing data preparation and analysis systems rely on dictionary lookups and regular expression matching to detect semantic types. However, these matching-based approaches often are not robust to dirty data and only detect a limited number of types. We introduce Sherlock, a multi-input deep neural network for detecting semantic types. We train Sherlock on 686,765 data columns retrieved from the VizNet corpus by matching 78 semantic types from DBpedia to column headers. We characterize each matched column with 1,588 features describing the statistical properties, character distributions, word embeddings, and paragraph vectors of column values. Sherlock achieves a support-weighted F1 score of 0.89, exceeding that of machine learning baselines, dictionary and regular expression benchmarks, and the consensus of crowdsourced annotations.',
    teaser: 'Data processing and analysis flow, starting from (1) a corpus of real-world datasets, proceeding to (2) feature extraction, (3) mapping extracted features to ground truth semantic types, and (4) model training and prediction.',
    featured: false,
    materials: [
      {name: 'Code', url: 'https://github.com/madelonhulsebos/sherlock', type: 'code'}
    ],
    videos: [
      {name: 'Video Preview', youtube: true, key: 'vUPnez9ZFIA'}
    ]
  },
  {
    slug: 'viznet',
    title: 'VizNet: Towards A Large-Scale Visualization Learning and Benchmarking Repository',
    authors: ['Kevin Hu', 'Neil Gaikwad', 'Madelon Hulsebos', 'Michiel Bakker', 'Emanuel Zgraggen', 'César Hidalgo', 'Tim Kraska', 'Guoliang Li', 'arvindsatya', 'Çağatay Demiralp'],
    venue: 'chi',
    year: 2019,
    abstract: 'Researchers currently rely on ad hoc datasets to train automated visualization tools and evaluate the effectiveness of visualization designs. These exemplars often lack the characteristics of real-world datasets, and their one-off nature makes it difficult to compare different techniques. In this paper, we present VizNet: a large-scale corpus of over 31 million datasets compiled from open data repositories and online visualization galleries. On average, these datasets comprise 17 records over 3 dimensions and across the corpus, we find 51% of the dimensions record categorical data, 44% quantitative, and only 5% temporal. VizNet provides the necessary common baseline for comparing visualization design techniques, and developing benchmark models and algorithms for automating visual analysis. To demonstrate VizNet\'s utility as a platform for conducting online crowdsourced experiments at scale, we replicate a prior study assessing the influence of user task and data distribution on visual encoding effectiveness, and extend it by considering an additional task: outlier detection. To contend with running such studies at scale, we demonstrate how a metric of perceptual effectiveness can be learned from experimental results, and show its predictive power across test datasets.',
    teaser: 'VizNet enables data scientists and visualization researchers to aggregate data, enumerate visual encodings, and crowdsource efectiveness evaluations.',
    featured: false,
    materials: [
      {name: 'Code', url: 'https://github.com/mitmedialab/viznet', type: 'code'}
    ],
    videos: [
      {name: 'Video Preview', youtube: true, key: 's7vKysUvQuI'}
    ]
  },
  {
    slug: 'interpretability-building-blocks',
    title: 'The Building Blocks of Interpretability',
    authors: ['colah', 'arvindsatya', 'enjalot', 'shancarter', 'ludwigschubert', 'kqy', 'znah'],
    venue: 'distill',
    volume: 3,
    number: 3,
    year: 2018,
    url: 'https://distill.pub/2018/building-blocks/'
  },
  {
    slug: 'insitu-vis-debugging',
    title: 'Augmenting Code with In Situ Visualizations to Aid Program Understanding',
    authors: ['jhoffs', 'arvindsatya', 'jheer'],
    venue: 'chi',
    year: 2018,
    abstract: 'Programmers must draw explicit connections between their code and runtime state to properly assess the correctness of their programs. However, debugging tools often decouple the program state from the source code and require explicitly invoked views to bridge the rift between program editing and program understanding. To unobtrusively reveal runtime behavior during both normal execution and debugging, we contribute techniques for visualizing program variables directly within the source code. We describe a design space and placement criteria for embedded visualizations. We evaluate our in situ visualizations in an editor for the Vega visualization grammar. Compared to a baseline development environment, novice Vega users improve their overall task grade by about 2 points when using the in situ visualizations and exhibit significant positive effects on their self-reported speed and accuracy.',
    teaser: 'Code augmentations visualize the runtime state of program variables in a Vega specification. A histogram shows the distribution of variables containing set data. Interacting with the year histogram filters all other histograms to only show the data values where the year is between 1995 and 2002.',
    featured: false,
    videos: [
      {name: 'Video Preview', youtube: true, key: 'B6LaAUHKiUg'}
    ]
  },
  {
    slug: 'vega-lite',
    title: 'Vega-Lite: A Grammar of Interactive Graphics',
    authors: ['arvindsatya', 'domoritz', 'kanitw', 'jheer'],
    venue: 'infovis',
    year: 2017,
    bestPaper: true,
    abstract: 'We present Vega-Lite, a high-level grammar that enables rapid specification of <em>interactive</em> data visualizations. Vega-Lite combines a traditional grammar of graphics, providing visual encoding rules and a composition algebra for layered and multi-view displays, with a novel grammar of interaction. Users specify interactive semantics by composing <em>selections</em>. In Vega-Lite, a selection is an abstraction that defines input event processing, points of interest, and a predicate function for inclusion testing. Selections parameterize visual encodings by serving as input data, defining scale extents, or by driving conditional logic. The Vega-Lite compiler automatically synthesizes requisite data flow and event handling logic, which users can override for further customization. In contrast to existing reactive specifications, Vega-Lite selections decompose an interaction design into concise, enumerable semantic units. We evaluate Vega-Lite through a range of examples, demonstrating succinct specification of both customized interaction methods and common techniques such as panning, zooming, and linked selection.',
    teaser: 'Example visualizations authored with Vega-Lite. From left-to-right: layered line chart combining raw and average values, dual-axis layered bar and line chart, brushing and linking in a scatterplot matrix, layered cross-filtering, and an interactive index chart.',
    materials: [
      {name: 'Project', url: 'https://vega.github.io/vega-lite', type: 'cube'},
      {name: 'Code', url: 'https://github.com/vega/vega-lite', type: 'code'}
    ],
    videos: [
      {name: 'Video Preview', vimeo: true, key: '177767802'},
      {name: 'InfoVis 2016 Talk', vimeo: true, key: '228919603'},
      {name: 'OpenVis 2017 Talk', youtube: true, key: '9uaHRWj04D4'}
    ]
  },
  {
    slug: 'vega-debugging',
    title: 'Visual Debugging Techniques for Reactive Data Visualization.',
    featTitle: 'Visual Debugging Techniques',
    authors: ['jhoffs', 'arvindsatya', 'jheer'],
    venue: 'eurovis',
    year: 2016,
    abstract: 'Interaction is critical to effective visualization, but can be difficult to author and debug due to dependencies among input events, program state, and visual output. Recent advances leverage reactive semantics to support declarative design and avoid the “spaghetti code” of imperative event handlers. While reactive programming improves many aspects of development, textual specifications still fail to convey the complex runtime dynamics. In response, we contribute a set of visual debugging techniques to reveal the runtime behavior of reactive visualizations. A timeline view records input events and dynamic variable updates, allowing designers to replay and inspect the propagation of values step-by-step. On-demand annotations overlay the output visualization to expose relevant state and scale mappings in-situ. Dynamic tables visualize how backing datasets change over time. To evaluate the effectiveness of these techniques, we study how first-time Vega users debug interactions in faulty, unfamiliar specifications; with no prior knowledge, participants were able to accurately trace errors through the specification.',
    teaser: 'Vega’s visual debugging techniques allow users to inspect relevant data transformations and dependencies within their specification in the context of the visualization and interaction events. Signal updates are populated in a timeline, on which users can view dependencies (in red): brush depends on cell, start_coords, and end_coords, as shown in the specification above. Users can rewind the visualization to view previous states (in green) and inspect scale encodings as a tooltip in-situ.',
    videos: [
      {name: 'EuroVis 2016 Talk', vimeo: true, key: '177270991'}
    ]
  },
  {
    slug: 'reactive-vega',
    title: 'Reactive Vega: A Streaming Dataflow Architecture  for Declarative Interactive Visualization',
    featTitle: 'Reactive Vega: Declarative Interactive Visualization',
    authors: ['arvindsatya', 'ryanrussell', 'jhoffs', 'jheer'],
    venue: 'infovis',
    year: 2016,
    abstract: 'We present Reactive Vega, a system architecture that provides the first robust and comprehensive treatment of declarative visual and interaction design for data visualization. Starting from a single declarative specification, Reactive Vega constructs a dataflow graph in which input data, scene graph elements, and interaction events are all treated as first-class streaming data sources. To support expressive interactive visualizations that may involve time-varying scalar, relational, or hierarchical data, Reactive Vega’s dataflow graph can dynamically re-write itself at runtime by extending or pruning branches in a data-driven fashion. We discuss both compile- and run-time optimizations applied within Reactive Vega, and share the results of benchmark studies that indicate superior interactive performance to both D3 and the original, non-reactive Vega system.',
    teaser: 'The Reactive Vega dataflow graph created from a declarative specification for a interactive index chart of streaming financial data. As streaming data arrives from the Yahoo! Finance API, or as a user moves their mouse pointer across the chart, an update cycle propagates through the graph and triggers an efficient update and re-render of the visualization.',
    materials: [
      {name: 'Project', url: 'https://vega.github.io/vega', type: 'cube'},
      {name: 'Code', url: 'https://github.com/vega/vega', type: 'code'}
    ],
    videos: [
      {name: 'OpenVis 2016 Talk', youtube: true, key: 'Y8Fp9z-9DWc'},
      {name: 'InfoVis 2015 Talk', vimeo: true, key: '236171108'}
    ]
  },
  {
    slug: 'reactive-vega-model',
    title: 'Declarative Interaction Design for Data Visualization',
    authors: ['arvindsatya', 'kanitw', 'jheer'],
    venue: 'uist',
    year: 2014,
    // hidden: true,
    abstract: 'Declarative visualization grammars can accelerate development, facilitate retargeting across platforms, and allow language-level optimizations. However, existing declarative visualization languages are primarily concerned with visual encoding, and rely on imperative event handlers for interactive behaviors. In response, we introduce a model of declarative interaction design for data visualizations. Adopting methods from reactive programming, we model low-level events as composable data <em>streams</em> from which we form higher-level semantic <em>signals</em>. Signals feed <em>predicates</em> and <em>scale inversions</em>, which allow us to generalize interactive selections at the level of item geometry (pixels) into interactive queries over the data domain. <em>Production rules</em> then use these queries to manipulate the visualization’s appearance. To facilitate reuse and sharing, these constructs can be encapsulated as named <em>interactors</em>: standalone, purely declarative specifications of interaction techniques. We assess our model’s feasibility and expressivity by instantiating it with extensions to the Vega visualization grammar. Through a diverse range of examples, we demonstrate coverage over an established taxonomy of visualization interaction techniques.',
    teaser: 'Brushing interaction expressed with our extensions to Vega: signal definitions and usage are in blue, event streams in orange, predicate definition and application in purple, rules in red, and names in green.',
    featured: false,
    videos: [
      {name: 'Video Preview', vimeo: true, key: '100936827'}
    ]
  },
  {
    slug: 'lyra',
    title: 'Lyra: An Interactive Visualization Design Environment',
    featTitle: 'Lyra: A Visualization Design Environment',
    authors: ['arvindsatya', 'jheer'],
    venue: 'eurovis',
    year: 2014,
    abstract: 'We present Lyra, an interactive environment for designing customized visualizations without writing code. Using drag-and-drop interactions, designers can bind data to the properties of graphical marks to author expressive visualization designs. Marks can be moved, rotated and resized using handles; relatively positioned using connectors; and parameterized by data fields using property drop zones. Lyra also provides a data pipeline interface for iterative, visual specification of data transformations and layout algorithms. Visualizations created with Lyra are represented as specifications in Vega, a declarative visualization grammar that enables sharing and reuse. We evaluate Lyra’s expressivity and accessibility through diverse examples and studies with journalists and visualization designers. We find that Lyra enables users to rapidly develop customized visualizations, covering a design space comparable to existing programming-based tools.',
    teaser: 'William Playfair’s classic chart comparing the price of wheat and wages in England recreated in the Lyra visualization design environment (VDE).',
    materials: [
      {name: 'Application', url: 'http://idl.cs.washington.edu/projects/lyra/', type: 'window-maximize'},
      {name: 'Code', url: 'https://github.com/vega/lyra', type: 'code'}
    ],
    videos: [
      {name: 'EuroVis 2014 Talk', vimeo: true, key: '100719873'},
      {name: 'OpenVis 2014 Talk', youtube: true, key: 'io7BSu6RIYM'}
    ]
  },
  {
    slug: 'ellipsis',
    title: 'Authoring Narrative Visualizations with Ellipsis',
    authors: ['arvindsatya', 'jheer'],
    venue: 'eurovis',
    year: 2014,
    abstract: 'Data visualization is now a popular medium for journalistic storytelling. However, current visualization tools either lack support for storytelling or require significant technical expertise. Informed by interviews with journalists, we introduce a model of storytelling abstractions that includes state-based scene structure, dynamic annotations and decoupled coordination of multiple visualization components. We instantiate our model in Ellipsis: a system that combines a domain-specific language (DSL) for storytelling with a graphical interface for story authoring. User interactions are automatically translated into statements in the Ellipsis DSL. By enabling storytelling without programming, the Ellipsis interface lowers the threshold for authoring narrative visualizations. We evaluate Ellipsis through example applications and user studies with award-winning journalists. Study participants find Ellipsis to be a valuable prototyping tool that can empower journalists in the creation of interactive narratives.',
    teaser: 'Crafting narrative visualizations by building scenes and adding annotations to existing visualizations using the Ellipsis interface.',
    featured: false,
    materials: [
      {name: 'Application', url: 'http://idl.cs.washington.edu/projects/ellipsis/', type: 'window-maximize'},
      {name: 'Code', url: 'https://github.com/uwdata/ellipsis', type: 'code'}
    ],
    videos: [
      {name: 'EuroVis 2014 Talk', vimeo: true, key: '100680412'},
    ]
  },
  {
    slug: 'webzeitgeist',
    title: 'Webzeitgeist: Design Mining the Web',
    authors: ['oranju', 'arvindsatya', 'cearto', 'maxinelim', 'saahmad', 'srk', 'jtalton'],
    venue: 'chi',
    year: 2013,
    bestPaper: true,
    abstract: 'Advances in data mining and knowledge discovery have transformed the way Web sites are designed. However, while visual presentation is an intrinsic part of the Web, traditional data mining techniques ignore render-time page structures and their attributes. This paper introduces <em>design mining</em> for the Web: using knowledge discovery techniques to understand design demographics, automate design curation, and support data-driven design tools. This idea is manifest in Webzeitgeist, a platform for large-scale design mining comprising a repository of over 100,000 Web pages and 100 million design elements. This paper describes the principles driving design mining, the implementation of the Webzeitgeist architecture, and the new class of data-driven design applications it enables.',
    teaser: 'Webzeitgeist, a scalable platform for Web design mining, supplements the data used in traditional Web content mining (yellow) with information about the visual appearance and structure of pages (blue) to enable a host of new design applications (green).',
    featured: false,
    videos: [
      {name: 'Video Preview', youtube: true, key: '3d3ZRnuPw-0'}
    ]
  },
  {
    slug: 'display-wall-overlays',
    title: 'Using Overlays to Support Collaborative Interaction with Display Walls',
    authors: ['arvindsatya', 'weibel', 'hollan'],
    venue: 'iui',
    year: 2012,
    abstract: 'Large-scale display walls, and the high-resolution visualizations they support, promise to become ubiquitous. Natural interaction with them, especially in collaborative environments, is increasingly important and yet remains an on-going challenge. Part of the problem is a resolution mismatch between low-resolution input devices and high-resolution display walls. In addition, enabling concurrent use by multiple users is difficult — for example, how would this large workspace be managed for multiple users and what novel collaborative interactions could occur? In this paper, we present an overlay interface element superimposed on wall-display applications to help constrain interaction, focus attention on subsections of a display wall, and facilitate a collaborative multi-user workflow.',
    featured: false,
    videos: [
      {name: 'Video Preview', youtube: true, key: 'oazCyaTgLdA'}
    ]
  }
]
