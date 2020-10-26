module.exports = [
  {
    slug: 'shared-interest',
    title: 'Shared Interest: Human Annotations vs. AI Saliency',
    authors: ['angieboggust', 'Benjamin Hoover', 'arvindsatya', 'strobelt'],
    venue: 'visxai',
    year: 2020,
    abstract: 'As deep learning is applied to high stakes scenarios, it is increasingly important that a model is not only making accurate decisions, but doing so for the right reasons. Common explainability methods provide pixel attributions as an explanation for a model\'s decision on a single image. However, using these input-level explanations to understand patterns in model behavior is challenging for large datasets as it requires selecting and analyzing an interesting subset of inputs. By utilizing the human generated bounding boxes that represent ground truth object locations, we introduce metrics for scoring and ranking inputs based on the correspondence between the input’s ground truth object location and the explainability method\'s explanation region. Our methodology is agnostic to model architecture, explanation method, and modality allowing it to be applied to many tasks and domains. By aligning model explanations with human annotations, our method surfaces patterns in model behavior when applied to two high profile case studies: a widely used image classification model and a cancer prediction model.',
    teaser: 'Examples of correctly and incorrectly classified images identified by shared interest coverage metrics.',
    featured: false,
    url: 'http://shared-interest.csail.mit.edu/'
  },
  {
    slug: 'data-crafting',
    title: 'Data Crafting: Exploring Data through Craft and Play',
    authors: ['nathalie', 'aspenhopkins', 'arvindsatya'],
    venue: 'visactivities',
    year: 2020,
    abstract: 'In this full-day workshop, we introduced participants to novel, multi-sensory ways of exploring and visualizing their data through Data Crafting. Data Crafting—in which crafting by hand promotes and produces data communication–facilitates creativity through play; by emphasizing crafting, we sought to make data approachable and to build a space where experts can explore new facets of their data. Our participants thoroughly enjoyed being exposed to this new approach and shared that they were likely to apply what they learned to communicate their research, gain new perspectives on data, and build data literacy at home and in classrooms. Here, we provide instructions on how to recreate this workshop as well as strategies for adapting it to larger audiences and/or shorter sessions. Data Crafting activities can be applied across many domains and in many contexts, as shown by the diverse backgrounds of our participants. From graduate students and post-doctoral researchers to first year business undergraduates and journalist fellows, all participants benefited from attending.',
    teaser: 'Example of productions. (a) Boston Weather with Pipe Cleaners by Gaurav P; (b) Ten Hours in Boston by Yue D; (c) Screen Time by Weather by Artemisia L; (d) Highs and Lows by Serena B.',
    featured: false
  },
  {
    slug: 'towards-convivial-info-space',
    title: 'Towards a Dynamic Multiscale Personalized Information Space',
    authors: ['Amy Fox', 'Philip Guo', 'clemens', 'Peter Daalsgard', 'arvindsatya', 'Haijun Xu', 'hollan'],
    venue: 'convivial-salon',
    year: 2020,
    abstract: `The historical moment when a person worked in front of a single computer has passed. Computers
    are now ubiquitous and embedded in virtually every new device and system, ranging from the
    omnipresent cellphone to the complex web of sociotechnical systems that envelop most every
    sphere of personal and professional life. They connect our activities to ever-expanding
    information resources with previously unimaginable computational power. Yet with all the
    increases in capacity, speed, and connectivity, information-based activities too often remain
    difficult, awkward, and frustrating. Even after six decades of design evolution there is
    little of the naturalness and contextual sensitivity required for convivial interaction with
    computer-mediated information.
    
    We envision a future in which the existing world of documents and applications is linked to a
    multiscale personalized information space in which dynamic visual entities behave in
    accordance with cognitively motivated rules sensitive to tasks, personal and group interaction
    histories, and context. As a group of cognitive and computer scientists, we have come together
    jointly committed to this vision and convinced of the crucial importance of questioning the
    presupposition that information is fundamentally passive data disconnected from processes,
    tasks, context, and personal histories. We aim to redesignate the role that computers play in
    human life from devices with which we interact to partners with whom we collaborate.
   
    The heart of the project is to rethink the nature of computer-mediated information as a basis
    to begin to fully realize the potential of computers to assist information-based
    activities. This requires challenging fundamental presuppositions that have led to today’s
    walled gardens and information silos. Our goal is to catalyze an international research
    comunity to rethink the nature of information as a basis for radically advancing the
    human-centered design of information-based work and helping to ensure the future is one of
    convivial, effective, and humane systems. In this paper, we propose a new view of information,
    discuss cognitive requirements for a human-centered information space, and sketch a
    research agenda and approach.`,
    featured: false
  },
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
    slug: 'towards-cognitively-convivial-info-physics',
    title: 'Designing Cognitively Convivial Physics for Dynamic Visual Information Substrates',
    authors: ['hollan', 'arvindsatya'],
    venue: 'chi-ea',
    year: 2018,
    abstract: 'The historical moment in time when people worked in front of a single computer has passed. Computers are now ubiquitous and are being embedded in virtually every new system, with the internet providing connection to ever-expanding information resources with previously unimaginable computational power. Yet with all the increases in capacity, speed, and connectivity, information-based activities too often remain difficult, awkward, and frustrating. Even after six decades of design evolution there is little of the naturalness and contextual sensitivity needed for convivial interaction with information in the myriad areas now intertwined with computers. We propose a dynamic visual information substrate designed to radically ease information-based tasks by operating in accordance with cognitively motivated physics sensitive to tasks, personal and group interaction histories, and context.',
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
