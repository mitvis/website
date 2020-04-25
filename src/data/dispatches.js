module.exports = [
  {
    slug: 'self-interfaces',
    title: 'Self-Interfaces: Utilizing Real-Time Biofeedback in the Wild to Elicit Subconscious Behavior Change',
    authors: ['navahaghighi', 'arvindsatya'],
    venue: 'tei-wip',
    year: 2020,
    abstract: 'Self-Interfaces are interfaces that intuitively communicate relevant subconscious physiological signals through biofeedback to give the user insight into their behavior and assist them in creating behavior change. The human heartbeat is a good example of an intuitive and relevant haptic biofeedback; does not distract and is only felt when the heart beats fast. In this work, we discuss the design and development of a wearable haptic Self-Interface for Electrodermal Activity (EDA). EDA is a covert physiological signal correlated with high and low arousal affective states. We will evaluate the effectiveness of the EDA Self-Interface based on its intuitiveness, its ability to generate useful insight, whether this insight leads to behavior change, and whether the user can develop an intuitive awareness of their EDA over time when the device is removed. We hope the findings from this study will help us establish a series of guidelines for development of other Self-Interfaces in the future.',
    teaser: 'A variety of design iterations were explored to identify the most desirable design language ranging from more device-like designs to more biologically-inspired typologies. Actuators were linearly arranged to accommodate variation in the sequence of the beats.',
    featured: false
  },
  {
    slug: 'towards-visualive',
    title: 'Visualive: Representing Synchronized Visualization Interactions',
    authors: ['rupayanneogy', 'Emily Hu', 'arvindsatya'],
    venue: 'infovis-posters',
    year: 2019,
    abstract: 'Visualization researchers have begun exploring real-time visualization synchronization, but the focus has been on the technology supporting such synchronizations, and very little research looks at the front-end. In this paper, we present Visualive, an exploration of the representation of real-time users in the space of a visualization. Visualive represents online users by embedding dynamic color-coded widgets within a visualization, allowing viewers to easily identify remote actions being performed without leaving the context of a visualization. Visualive is an initial dive into merging collaboration and synchronization with data visualization without compromising on the latter experience.',
    teaser: 'The Visualive synchronized visualization system. Left: several users are interacting simultaneously with the view, with the current user following another user as they brush and zoom into the visualization. Right: the viewing user has hovered over a remote user’s bubble, resulting in the appearance of the purple tracking window that represents the remote user’s screen area.',
    featured: false
  },
  {
    slug: 'chi2013-schedule',
    title: 'The CHI 2013 Interactive Schedule',
    authors: ['arvindsatya', 'strazzulla', 'clemens', 'mbl', 'mackay'],
    venue: 'chi-ea',
    year: 2013,
    abstract: 'CHI 2013 offers over 500 separate events including paper presentations, panels, courses, case studies and special interest groups. Given the size of the conference, it is no longer practical to host live summaries of these events. Instead, a 30-second <em>Video Preview</em> summary of each event is available. The CHI’13 Interactive Schedule helps attendees navigate this wealth of video content in order to identify events they would like to attend. It consists of a number of large display screens throughout the conference venue which cycle through a <em>video playlist</em> of events. Attendees can interact with these displays using their mobile devices by either constructing custom video playlists or adding on-screen content to their personal schedule.',
    teaser: 'An overview of the system architecture for the CHI 2013 Interactive Schedule system.',
    featured: false
  },
  {
    slug: 'web-structural-semantics',
    title: 'Learning Structural Semantics for the Web',
    authors: ['maxinelim', 'oranju', 'arvindsatya', 'cearto', 'jtalton', 'srk'],
    venue: 'stanford-cstr',
    year: '2012-02',
    abstract: 'Researchers have long envisioned a Semantic Web, where unstructured Web content is replaced by documents with rich semantic annotations. Unfortunately, this vision has been hampered by the difficulty of acquiring semantic metadata for Web pages. This paper introduces a method for automatically “semantifying” structural page elements: using machine learning to train classifiers that can be applied in a post-hoc fashion. We focus on one popular class of semantic identifiers: those concerned with the <em>structure</em> — or information architecture — of a page. To determine the set of structural semantics to learn and to collect training data for the learning, we gather a large corpus of labeled page elements from a set of online workers. We discuss the results from this collection and demonstrate that our classifiers learn structural semantics in a general way.',
    teaser: 'The pipeline for learning structural semantic classifiers for the Web. First, a large set of labeled page elements are collected from online workers. Next, these labels are used to train a set of regularized support vector classification SVMs. These classifiers are then used to identify semantic elements in new pages.',
    featured: false,
  },
  {
    slug: 'ml4-web-design',
    title: 'A Platform for Large Scale Machine Learning on Web Design',
    authors: ['arvindsatya', 'maxinelim', 'srk'],
    venue: 'chi-ea',
    year: '2012',
    abstract: 'The Web is an enormous and diverse repository of design examples. Although people often draw from extant designs to create new ones, existing Web design tools do not facilitate example reuse in a way that captures the scale and diversity of the Web. To do so requires using machine learning techniques to train computational models which can be queried during the design process. In this work-in-progress, we present a platform necessary for doing such large-scale machine learning on Web designs, which consists of a Web crawler and proxy server to harvest and store a lossless and immutable snapshot of the Web; a page segmenter that codifies a page’s visual layout; and an interface for augmenting the segmentations with crowdsourced metadata.',
    teaser: 'An overview of the system architecture for large-scale machine learning on web design.',
    featured: false,
  }
]