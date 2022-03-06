---
stub: false
title: 'Accessible Visualization via Natural Language Descriptions: A Four-Level Model of Semantic Content'
authors:
  - key: lundgard
  - key: arvindsatya
venue: vis-full
year: 2022
doi: 10.1109/TVCG.2021.3114770
tags:
  - interface
  - accessibility
  - mixed methods
---
<style>
  figure#S4\.T3 tbody {
    font-size: 0.8em;
    line-height: normal;
  }
</style>
<article>
  <figure id="teaser"><img src="x32.png" id="p1.g1" class="ltx_graphics ltx_centering" width="2702" height="588" 
    alt="A three-column horizontal teaser graphic. Column A contains the famous “Flatten the Curve” coronavirus chart. Columns B and C contain different descriptions of that chart. A long description is available at the following link." 
    longdesc="fig-teaser-longdesc.html"/>
    <a href="fig-teaser-longdesc.html" class="ltx_align_center" target="_">Long Description</a>
    <figcaption class="ltx_text ltx_caption ltx_align_center">
      Visualizations like “Flatten the Curve” (A) efficiently communicate critical public health information, while simultaneously excluding people with disabilities&nbsp;<cite class="ltx_cite ltx_citemacro_cite">[<a href="#bib.bib79" title="SARS-CoV-2 Coronavirus" class="ltx_ref">11</a>, <a href="#bib.bib55" title="Vital Coronavirus Information Is Failing the Blind and Visually Impaired" class="ltx_ref">28</a>]</cite>. To promote accessible visualization via natural language descriptions (B, C), we introduce a four-level model of semantic content. Our model categorizes and color codes sentences according to the semantic content they convey.
    </figcaption>
  </figure>
  <section class="ltx_abstract" id="abstract">
    <h2 class="ltx_title ltx_title_abstract" id="H-abstract">Abstract</h2>
    <p class="ltx_p">Natural language descriptions sometimes accompany visualizations to better communicate and contextualize their insights, and to improve their accessibility for readers with disabilities. However, it is difficult to evaluate the usefulness of these descriptions, and how effectively they improve access to meaningful information, because we have little understanding of the semantic content they convey, and how different readers receive this content. In response, we introduce a conceptual model for the semantic content conveyed by natural language descriptions of visualizations. Developed through a grounded theory analysis of 2,147 sentences, our model spans four levels of semantic content: enumerating visualization construction properties (e.g., marks and encodings); reporting statistical concepts and relations (e.g., extrema and correlations); identifying perceptual and cognitive phenomena (e.g., complex trends and patterns); and elucidating domain-specific insights (e.g., social and political context). To demonstrate how our model can be applied to evaluate the effectiveness of visualization descriptions, we conduct a mixed-methods evaluation with 30 blind and 90 sighted readers, and find that these reader groups differ significantly on which semantic content they rank as most useful. Together, our model and findings suggest that access to meaningful information is strongly reader-specific, and that research in automatic visualization captioning should orient toward descriptions that more richly communicate overall trends and statistics, sensitive to reader preferences. Our work further opens a space of research on natural language as a data interface coequal with visualization.</p>
  </section>
  <section id="S1" class="ltx_section">
    <h2 class="ltx_title ltx_title_section" id="H-S1">
      <span class="ltx_tag ltx_tag_section">1 </span>Introduction</h2>
    <div id="S1.p1" class="ltx_para">
      <p class="ltx_p">The proliferation of visualizations during the COVID-19 pandemic has underscored their double-edged potential: efficiently communicating critical public health information — as with the immediately-canonical “Flatten the Curve” chart (Fig.&nbsp;<a href="#teaser" title="Figure Teaser ‣ Accessible Visualization via Natural Language Descriptions: A Four-Level Model of Semantic Content" class="ltx_ref"><span class="ltx_text ltx_ref_tag">Teaser</span></a>) — while simultaneously excluding people with disabilities.
        “<emph class="ltx_emph ltx_font_italic">For many people with various types of disabilities, graphics and the information conveyed in them is hard to read and understand,</emph>” says software engineer Tyler Littlefield&nbsp;<cite class="ltx_cite ltx_citemacro_cite">[<a href="#bib.bib55" title="Vital Coronavirus Information Is Failing the Blind and Visually Impaired" class="ltx_ref">28</a>]</cite>, who built a popular text-based COVID-19 statistics tracker after being deluged with inaccessible infographics&nbsp;<cite class="ltx_cite ltx_citemacro_cite">[<a href="#bib.bib75" title="Accessible Covid-19 Tracker Enables A Way For Visually Impaired To Stay Up To Date" class="ltx_ref">94</a>, <a href="#bib.bib76" title="COVID-19 Statistics Tracker" class="ltx_ref">65</a>]</cite>.
        While natural language descriptions sometimes accompany visualizations in the form of chart captions or alt text (short for “alternative text”), these practices remain rare.
        Technology educator and researcher Chancey Fleet notes that infographics and charts usually lack meaningful and detailed descriptions, leaving disabled people with “<emph class="ltx_emph ltx_font_italic">a feeling of uncertainty</emph>” about the pandemic&nbsp;<cite class="ltx_cite ltx_citemacro_cite">[<a href="#bib.bib55" title="Vital Coronavirus Information Is Failing the Blind and Visually Impaired" class="ltx_ref">28</a>]</cite>.
        For readers with visual disabilities (approximately 8.1 million in the United States and 253 million worldwide&nbsp;<cite class="ltx_cite ltx_citemacro_cite">[<a href="#bib.bib81" title="World Blindness and Visual Impairment" class="ltx_ref">1</a>]</cite>), inaccessible visualizations are, at best, demeaning and, at worst, damaging to health, if not accompanied by meaningful and up-to-date alternatives.</p>
    </div>
    <div id="S1.p2" class="ltx_para">
      <p class="ltx_p">Predating the pandemic, publishers and education specialists have long suggested best practices for accessible visual media, including guidelines for tactile graphics&nbsp;<cite class="ltx_cite ltx_citemacro_cite">[<a href="#bib.bib88" title="Guidelines and Standards for Tactile Graphics" class="ltx_ref">41</a>]</cite> and for describing “complex images” in natural language&nbsp;<cite class="ltx_cite ltx_citemacro_cite">[<a href="#bib.bib47" title="WAI Web Accessibility Tutorials: Complex Images" class="ltx_ref">99</a>, <a href="#bib.bib45" title="Effective Practices for Description of Science Content within Digital Talking Books" class="ltx_ref">39</a>]</cite>.
        While valuable, visualization authors have yet to broadly adopt these practices, for lack of experience with accessible media, if not a lack of attention and resources.
        Contemporary visualization research has primarily attended to color vision deficiency&nbsp;<cite class="ltx_cite ltx_citemacro_cite">[<a href="#bib.bib84" title="Applications of Color in Design for Color-Deficient Users" class="ltx_ref">21</a>, <a href="#bib.bib85" title="Optimizing Colormaps With Consideration For Color Vision Deficiency To Enable Accurate Interpretation Of Scientific Data" class="ltx_ref">77</a>, <a href="#bib.bib86" title="Towards More Accessible Visualizations for Color-Vision-Deficient Individuals" class="ltx_ref">79</a>]</cite>, and has only recently begun to engage with non-visual alternatives&nbsp;<cite class="ltx_cite ltx_citemacro_cite">[<a href="#bib.bib69" title="Visualizing for the Non-Visual: Enabling the Visually Impaired to Use Visualization" class="ltx_ref">25</a>, <a href="#bib.bib24" title="Sociotechnical Considerations for Accessible Visualization Design" class="ltx_ref">67</a>]</cite> and with accessibility broadly&nbsp;<cite class="ltx_cite ltx_citemacro_cite">[<a href="#bib.bib106" title="Accessible Visualization: Design Space, Opportunities, and Challenges" class="ltx_ref">53</a>, <a href="#bib.bib87" title="Understanding Data Accessibility for People with Intellectual and Developmental Disabilities" class="ltx_ref">105</a>]</cite>.
        Parallel to these efforts, computer science researchers have been grappling with the engineering problem of automatically generating chart captions&nbsp;<cite class="ltx_cite ltx_citemacro_cite">[<a href="#bib.bib49" title="Summarizing Information Graphics Textually" class="ltx_ref">27</a>, <a href="#bib.bib54" title="Chart-to-Text: Generating Natural Language Descriptions for Charts by Adapting the Transformer Model" class="ltx_ref">78</a>, <a href="#bib.bib7" title="A Formative Study on Designing Accurate and Natural Figure Captioning Systems" class="ltx_ref">84</a>]</cite>.
        While well-intentioned, these methods usually neither consult existing accessibility guidelines, nor do they evaluate their results empirically with their intended readership.
        As a result, it is difficult to know how useful (or not) the resultant captions are, or how effectively they improve access to meaningful information.</p>
    </div>
    <div id="S1.p3" class="ltx_para">
      <p class="ltx_p">In this paper, we make a two-fold contribution.
        First, we extend existing accessibility guidelines by introducing a conceptual model for categorizing and comparing the semantic content conveyed by natural language descriptions of visualizations.
        Developed through a grounded theory analysis of 2,147 natural language sentences, authored by over 120 participants in an online study&nbsp;(§&nbsp;<a href="#S3" title="3 Constructing the Model: Employing the Grounded Theory Methodology ‣ Accessible Visualization via Natural Language Descriptions: A Four-Level Model of Semantic Content" class="ltx_ref"><span class="ltx_text ltx_ref_tag">3</span></a>), our model spans four levels of semantic content: enumerating visualization construction properties (e.g., marks and encodings); reporting statistical concepts and relations (e.g., extrema and correlations); identifying perceptual and cognitive phenomena (e.g., complex trends and patterns); and elucidating domain-specific insights (e.g., social and political context)&nbsp;(§&nbsp;<a href="#S4" title="4 A Four-Level Model of Semantic Content ‣ Accessible Visualization via Natural Language Descriptions: A Four-Level Model of Semantic Content" class="ltx_ref"><span class="ltx_text ltx_ref_tag">4</span></a>).
        Second, we demonstrate how this model can be applied to evaluate the effectiveness of visualization descriptions, by comparing different semantic content levels and reader groups.
        We conduct a mixed-methods evaluation in which a group of 30 blind and 90 sighted readers rank the usefulness of descriptions authored at varying content levels&nbsp;(§&nbsp;<a href="#S5" title="5 Applying the Model: Evaluating the Effectiveness of Visualization Descriptions ‣ Accessible Visualization via Natural Language Descriptions: A Four-Level Model of Semantic Content" class="ltx_ref"><span class="ltx_text ltx_ref_tag">5</span></a>).
        Analyzing the resultant 3,600 ranked descriptions, we find significant differences in the content favored by these reader groups: while both groups generally prefer mid-level semantic content, they sharply diverge in their rankings of both the lowest and highest levels of our model.</p>
    </div>
    <div id="S1.p4" class="ltx_para">
      <p class="ltx_p">These findings, contextualized by readers’ open-ended feedback, suggest that access to meaningful information is strongly reader-specific, and that captions for blind readers should aim to convey a chart’s trends and statistics, rather than solely detailing its low-level design elements or high-level insights.
        Our model of semantic content is not only <emph class="ltx_emph ltx_font_italic">descriptive</emph> (categorizing what <emph class="ltx_emph ltx_font_italic">is</emph> conveyed by visualizations) and <emph class="ltx_emph ltx_font_italic">evaluative</emph> (helping us to study what <emph class="ltx_emph ltx_font_italic">should</emph> be conveyed to whom) but also <emph class="ltx_emph ltx_font_italic">generative</emph>&nbsp;<cite class="ltx_cite ltx_citemacro_cite">[<a href="#bib.bib60" title="Instrumental Interaction: An Interaction Model For Designing Post-WIMP User Interfaces" class="ltx_ref">7</a>, <a href="#bib.bib61" title="Designing Interaction, Not Interfaces" class="ltx_ref">8</a>]</cite>, pointing toward novel multimodal and accessible data representations&nbsp;(§&nbsp;<a href="#S6.SS1" title="6.1 Natural Language As An Interface Into Visualization ‣ 6 Discussion and Future Work ‣ Accessible Visualization via Natural Language Descriptions: A Four-Level Model of Semantic Content" class="ltx_ref"><span class="ltx_text ltx_ref_tag">6.1</span></a>).
        Our work further opens a space of research on natural language as a data interface coequal with the language of graphics&nbsp;<cite class="ltx_cite ltx_citemacro_cite">[<a href="#bib.bib58" title="Semiology of Graphics" class="ltx_ref">12</a>]</cite>, calling back to the original linguistic and semiotic motivations at the heart of visualization theory and design&nbsp;(§&nbsp;<a href="#S6.SS2" title="6.2 Natural Language As Coequal With Visualization ‣ 6 Discussion and Future Work ‣ Accessible Visualization via Natural Language Descriptions: A Four-Level Model of Semantic Content" class="ltx_ref"><span class="ltx_text ltx_ref_tag">6.2</span></a>).</p>
    </div>
  </section>
  <section id="S2" class="ltx_section">
    <h2 class="ltx_title ltx_title_section" id="H-S2">
      <span class="ltx_tag ltx_tag_section">2 </span>Related Work</h2>
    <div id="S2.p1" class="ltx_para">
      <p class="ltx_p">Multiple visualization-adjacent literatures have studied methods for describing charts and graphics through natural language — including accessible media research,  <a href="#id9"><span href="#id9" title="Human-Computer Interaction" class="ltx_glossaryref"><span class="ltx_text ltx_glossary_long">Human-Computer Interaction</span></span></a> (<a href="#id9"><abbr href="#id9" title="Human-Computer Interaction" class="ltx_glossaryref"><span class="ltx_text ltx_glossary_short">HCI</span></abbr></a>),  <a href="#id26"><span href="#id26" title="Computer Vision" class="ltx_glossaryref"><span class="ltx_text ltx_glossary_long">Computer Vision</span></span></a> (<a href="#id26"><abbr href="#id26" title="Computer Vision" class="ltx_glossaryref"><span class="ltx_text ltx_glossary_short">CV</span></abbr></a>), and  <a href="#id27"><span href="#id27" title="Natural Language Processing" class="ltx_glossaryref"><span class="ltx_text ltx_glossary_long">Natural Language Processing</span></span></a> (<a href="#id27"><abbr href="#id27" title="Natural Language Processing" class="ltx_glossaryref"><span class="ltx_text ltx_glossary_short">NLP</span></abbr></a>). But, these various efforts have been largely siloed from one another, adopting divergent methods and terminologies (e.g., the terms “caption” and “description” are used inconsistently).
        Here, we survey the diverse terrain of literatures intersecting visualization and natural language.</p>
    </div>
    <section id="S2.SS1" class="ltx_subsection">
      <h3 class="ltx_title ltx_title_subsection" id="H-S2.SS1">
        <span class="ltx_tag ltx_tag_subsection">2.1 </span>Automatic Methods for Visualization Captioning</h3>
      <div id="S2.SS1.p1" class="ltx_para">
        <p class="ltx_p">Automatic methods for generating visualization captions broadly fall into two categories: those using <a href="#id26"><abbr href="#id26" title="Computer Vision" class="ltx_glossaryref"><span class="ltx_text ltx_glossary_short">CV</span></abbr></a> and <a href="#id27"><abbr href="#id27" title="Natural Language Processing" class="ltx_glossaryref"><span class="ltx_text ltx_glossary_short">NLP</span></abbr></a> methods when the chart is a rasterized image (e.g., <span class="ltx_text ltx_font_smallcaps">jpeg</span>s or <span class="ltx_text ltx_font_smallcaps">png</span>s); and those using structured specifications of the chart’s construction (e.g., grammars of graphics).
        </p>
      </div>
      <section id="S2.SS1.SSS1" class="ltx_subsubsection">
        <h4 class="ltx_title ltx_title_subsubsection" id="H-S2.SS1.SSS1">
          <span class="ltx_tag ltx_tag_subsubsection">2.1.1 </span>Computer Vision and Natural Language Processing</h4>
        <div id="S2.SS1.SSS1.p1" class="ltx_para">
          <p class="ltx_p">Analogous to the long-standing <a href="#id26"><abbr href="#id26" title="Computer Vision" class="ltx_glossaryref"><span class="ltx_text ltx_glossary_short">CV</span></abbr></a> and <a href="#id27"><abbr href="#id27" title="Natural Language Processing" class="ltx_glossaryref"><span class="ltx_text ltx_glossary_short">NLP</span></abbr></a> problem of automatically captioning photographic images&nbsp;<cite class="ltx_cite ltx_citemacro_cite">[<a href="#bib.bib123" title="Microsoft COCO: Common Objects in Context" class="ltx_ref">64</a>, <a href="#bib.bib74" title="Visual Genome: Connecting Language and Vision Using Crowdsourced Dense Image Annotations" class="ltx_ref">58</a>, <a href="#bib.bib83" title="Deep Visual-Semantic Alignments for Generating Image Descriptions" class="ltx_ref">48</a>]</cite>, recent work on visualization captioning has aimed to automatically generate accurate and descriptive natural language sentences for charts&nbsp;<cite class="ltx_cite ltx_citemacro_cite">[<a href="#bib.bib4" title="Neural Caption Generation Over Figures" class="ltx_ref">22</a>, <a href="#bib.bib8" title="Figure Captioning with Reasoning and Sequence-Level Training" class="ltx_ref">24</a>, <a href="#bib.bib5" title="Figure Captioning with Relation Maps for Reasoning" class="ltx_ref">23</a>, <a href="#bib.bib31" title="Chart-Text: A Fully Automated Chart Image Descriptor" class="ltx_ref">6</a>, <a href="#bib.bib54" title="Chart-to-Text: Generating Natural Language Descriptions for Charts by Adapting the Transformer Model" class="ltx_ref">78</a>, <a href="#bib.bib2" title="Automatic Annotation Synchronizing with Textual Description for Visualization" class="ltx_ref">59</a>, <a href="#bib.bib118" title="Generating Accurate Caption Units for Figure Captioning" class="ltx_ref">83</a>]</cite>.
            Following the encoder-decoder framework of statistical machine translation&nbsp;<cite class="ltx_cite ltx_citemacro_cite">[<a href="#bib.bib124" title="Show and Tell: A Neural Image Caption Generator" class="ltx_ref">98</a>, <a href="#bib.bib6" title="Show, Attend and Tell: Neural Image Caption Generation with Visual Attention" class="ltx_ref">107</a>]</cite>, these approaches usually take rasterized images of visualizations as input to a <a href="#id26"><abbr href="#id26" title="Computer Vision" class="ltx_glossaryref"><span class="ltx_text ltx_glossary_short">CV</span></abbr></a> model (the encoder), which learns the visually salient features for outputting a relevant caption via a language model (the decoder).
            Training data consists of ⟨chart, caption⟩  pairs, collected via web-scraping and crowdsourcing&nbsp;<cite class="ltx_cite ltx_citemacro_cite">[<a href="#bib.bib7" title="A Formative Study on Designing Accurate and Natural Figure Captioning Systems" class="ltx_ref">84</a>]</cite>, or created synthetically from pre-defined sentence templates&nbsp;<cite class="ltx_cite ltx_citemacro_cite">[<a href="#bib.bib25" title="FigureQA: An Annotated Figure Dataset for Visual Reasoning" class="ltx_ref">47</a>]</cite>.
            While these approaches are well-intentioned, in aiming to address the engineering problem of <emph class="ltx_emph ltx_font_italic">how</emph> to automatically generate natural language captions for charts, they have largely sidestepped the complementary (and prior) question: <emph class="ltx_emph ltx_font_italic">which</emph> semantic content should be generated to begin with?
            Some captions may be more or less descriptive than others, and different readers may receive different semantic content as more or less useful, depending on their levels of data literacy, domain-expertise, and/or visual perceptual ability&nbsp;<cite class="ltx_cite ltx_citemacro_cite">[<a href="#bib.bib112" title="Understanding Blind People’s Experiences with Computer-Generated Captions of Social Media Images" class="ltx_ref">69</a>, <a href="#bib.bib17" title="Guiding Novice Web Workers in Making Image Descriptions Using Templates" class="ltx_ref">72</a>, <a href="#bib.bib50" title="Evaluating The Accessibility Of Line Graphs Through Textual Summaries For Visually Impaired Users" class="ltx_ref">71</a>]</cite>.
            To help orient work on automatic visualization captioning, our four-level model of semantic content offers a means of asking and answering these more human-centric questions.
          </p>
        </div>
      </section>
      <section id="S2.SS1.SSS2" class="ltx_subsubsection">
        <h4 class="ltx_title ltx_title_subsubsection" id="H-S2.SS1.SSS2">
          <span class="ltx_tag ltx_tag_subsubsection">2.1.2 </span>Structured Visualization Specifications</h4>
        <div id="S2.SS1.SSS2.p1" class="ltx_para">
          <p class="ltx_p">In contrast to rasterized images of visualizations, chart templates&nbsp;<cite class="ltx_cite ltx_citemacro_cite">[<a href="#bib.bib64" title="Bokeh: Python Library For Interactive Visualization" class="ltx_ref">96</a>]</cite>, component-based architectures&nbsp;<cite class="ltx_cite ltx_citemacro_cite">[<a href="#bib.bib63" title="VTK" class="ltx_ref">38</a>]</cite>, and grammars of graphics&nbsp;<cite class="ltx_cite ltx_citemacro_cite">[<a href="#bib.bib36" title="Vega-Lite: A Grammar of Interactive Graphics" class="ltx_ref">87</a>]</cite> provide not only a structured representation of the visualization’s construction, but typically render the visualization in a structured manner as well.
            For instance, most of these approaches either render the output visualization as  <a href="#id1"><span href="#id1" title="Scalable Vector Graphics" class="ltx_glossaryref"><span class="ltx_text ltx_glossary_long">Scalable Vector Graphics</span></span></a> (<a href="#id1"><abbr href="#id1" title="Scalable Vector Graphics" class="ltx_glossaryref"><span class="ltx_text ltx_glossary_short">SVG</span></abbr></a>) or provide a scenegraph API.
            Unfortunately, these output representations lose many of the semantics of the structured input (e.g., which elements correspond to axes and legends, or how nesting corresponds to visual perception).
            As a result, most present-day visualizations are inaccessible to people who navigate the web using screen readers.
            For example, using Apple’s VoiceOver to read D3 charts rendered as <a href="#id1"><abbr href="#id1" title="Scalable Vector Graphics" class="ltx_glossaryref"><span class="ltx_text ltx_glossary_short">SVG</span></abbr></a> usually outputs an inscrutable mess of screen coordinates and shape rendering properties.
            Visualization toolkits can ameliorate this by leveraging their structured input to automatically add  <a href="#id10"><span href="#id10" title="Accessible Rich Internet Application" class="ltx_glossaryref"><span class="ltx_text ltx_glossary_long">Accessible Rich Internet Application</span></span></a> (<a href="#id10"><abbr href="#id10" title="Accessible Rich Internet Application" class="ltx_glossaryref"><span class="ltx_text ltx_glossary_short">ARIA</span></abbr></a>) attributes to appropriate output elements, in compliance with the  <a href="#id11"><span href="#id11" title="World Wide Web Consortium" class="ltx_glossaryref"><span class="ltx_text ltx_glossary_long">World Wide Web Consortium</span></span></a> (<a href="#id11"><abbr href="#id11" title="World Wide Web Consortium" class="ltx_glossaryref"><span class="ltx_text ltx_glossary_short">W3C</span></abbr></a>)’s  <a href="#id13"><span href="#id13" title="Web Accessibility Initiative" class="ltx_glossaryref"><span class="ltx_text ltx_glossary_long">Web Accessibility Initiative</span></span></a> (<a href="#id13"><abbr href="#id13" title="Web Accessibility Initiative" class="ltx_glossaryref"><span class="ltx_text ltx_glossary_short">WAI</span></abbr></a>) guidelines&nbsp;<cite class="ltx_cite ltx_citemacro_cite">[<a href="#bib.bib47" title="WAI Web Accessibility Tutorials: Complex Images" class="ltx_ref">99</a>]</cite>.
            Moreover, this structured input representation can also simplify automatically generating natural language captions through template-based mechanisms, as we discuss in §&nbsp;<a href="#S4.SS1" title="4.1 Level 1: Elemental and Encoded Properties ‣ 4 A Four-Level Model of Semantic Content ‣ Accessible Visualization via Natural Language Descriptions: A Four-Level Model of Semantic Content" class="ltx_ref"><span class="ltx_text ltx_ref_tag">4.1</span></a>.
          </p>
        </div>
      </section>
    </section>
    <section id="S2.SS2" class="ltx_subsection">
      <h3 class="ltx_title ltx_title_subsection" id="H-S2.SS2">
        <span class="ltx_tag ltx_tag_subsection">2.2 </span>Accessible Media and Human-Computer Interaction</h3>
      <div id="S2.SS2.p1" class="ltx_para">
        <p class="ltx_p">While automatic methods researchers often note accessibility as a worthy motivation&nbsp;<cite class="ltx_cite ltx_citemacro_cite">[<a href="#bib.bib49" title="Summarizing Information Graphics Textually" class="ltx_ref">27</a>, <a href="#bib.bib54" title="Chart-to-Text: Generating Natural Language Descriptions for Charts by Adapting the Transformer Model" class="ltx_ref">78</a>, <a href="#bib.bib7" title="A Formative Study on Designing Accurate and Natural Figure Captioning Systems" class="ltx_ref">84</a>, <a href="#bib.bib118" title="Generating Accurate Caption Units for Figure Captioning" class="ltx_ref">83</a>, <a href="#bib.bib53" title="Exploring And Exploiting The Limited Utility Of Captions In Recognizing Intention In Information Graphics" class="ltx_ref">30</a>, <a href="#bib.bib52" title="A Browser Extension For Providing Visually Impaired Users Access To The Content Of Bar Charts On The Web" class="ltx_ref">31</a>]</cite>, evidently few have collaborated directly with disabled people&nbsp;<cite class="ltx_cite ltx_citemacro_cite">[<a href="#bib.bib69" title="Visualizing for the Non-Visual: Enabling the Visually Impaired to Use Visualization" class="ltx_ref">25</a>, <a href="#bib.bib50" title="Evaluating The Accessibility Of Line Graphs Through Textual Summaries For Visually Impaired Users" class="ltx_ref">71</a>]</cite> or consulted existing accessibility guidelines&nbsp;<cite class="ltx_cite ltx_citemacro_cite">[<a href="#bib.bib24" title="Sociotechnical Considerations for Accessible Visualization Design" class="ltx_ref">67</a>]</cite>.
          Doing so is more common to <a href="#id9"><abbr href="#id9" title="Human-Computer Interaction" class="ltx_glossaryref"><span class="ltx_text ltx_glossary_short">HCI</span></abbr></a> and accessible media literatures&nbsp;<cite class="ltx_cite ltx_citemacro_cite">[<a href="#bib.bib121" title="Rich Representations of Visual Content for Screen Reader Users" class="ltx_ref">73</a>, <a href="#bib.bib122" title="Understanding Screen-Reader Users’ Experiences with Online Data Visualizations" class="ltx_ref">91</a>]</cite>, which broadly separate into two categories corresponding to the relative expertise of the description authors: those authored by experts (e.g., publishers of accessible media) and those authored by non-experts (e.g., via crowdsourcing or online platforms).</p>
      </div>
      <section id="S2.SS2.SSS1" class="ltx_subsubsection">
        <h4 class="ltx_title ltx_title_subsubsection" id="H-S2.SS2.SSS1">
          <span class="ltx_tag ltx_tag_subsubsection">2.2.1 </span>Descriptions Authored by Experts</h4>
        <div id="S2.SS2.SSS1.p1" class="ltx_para">
          <p class="ltx_p">Publishers have developed guidelines for describing graphics appearing in  <a href="#id29"><span href="#id29" title="science, technology, engineering, and math" class="ltx_glossaryref"><span class="ltx_text ltx_glossary_long">science, technology, engineering, and math</span></span></a> (<a href="#id29"><abbr href="#id29" title="science, technology, engineering, and math" class="ltx_glossaryref"><span class="ltx_text ltx_glossary_short">STEM</span></abbr></a>) materials&nbsp;<cite class="ltx_cite ltx_citemacro_cite">[<a href="#bib.bib45" title="Effective Practices for Description of Science Content within Digital Talking Books" class="ltx_ref">39</a>, <a href="#bib.bib94" title="Making Images Accessible" class="ltx_ref">9</a>]</cite>.
            Developed by and for authors with some expert accessibility knowledge, these guidelines provide best practices for conveying visualized content in traditional media (e.g., printed textbooks, audio books, and tactile graphics).
            But, many of their prescriptions — particularly those relating to the <emph class="ltx_emph ltx_font_italic">content</emph> conveyed by a chart, rather than the <emph class="ltx_emph ltx_font_italic">modality</emph> through which the chart is rendered — are also applicable to web-based visualizations.
            Additionally, web accessibility guidelines from <a href="#id11"><abbr href="#id11" title="World Wide Web Consortium" class="ltx_glossaryref"><span class="ltx_text ltx_glossary_short">W3C</span></abbr></a> provide best-practices for writing descriptions of “complex images” (including canonical chart types), either in a short description alt text attribute, or as a long textual description displayed alongside the visual image&nbsp;<cite class="ltx_cite ltx_citemacro_cite">[<a href="#bib.bib47" title="WAI Web Accessibility Tutorials: Complex Images" class="ltx_ref">99</a>]</cite>.
            While some of these guidelines have been adopted by visualization practitioners&nbsp;<cite class="ltx_cite ltx_citemacro_cite">[<a href="#bib.bib46" title="Writing Alt Text for Data Visualization" class="ltx_ref">19</a>, <a href="#bib.bib125" title="Why Accessibility Is at the Heart of Data Visualization" class="ltx_ref">88</a>, <a href="#bib.bib128" title="Chartability" class="ltx_ref">29</a>, <a href="#bib.bib136" title="Creating Accessible SVGs" class="ltx_ref">32</a>, <a href="#bib.bib130" title="Accessible SVG Flowcharts" class="ltx_ref">102</a>, <a href="#bib.bib131" title="Accessible SVG Line Graphs" class="ltx_ref">101</a>, <a href="#bib.bib133" title="An Introduction To Accessible Data Visualizations With D3.js" class="ltx_ref">34</a>]</cite>, we here bring special attention to the empirically-grounded and well-documented guidelines created by the <span class="ltx_text ltx_font_smallcaps">wgbh</span> National Center for Accessible Media&nbsp;<cite class="ltx_cite ltx_citemacro_cite">[<a href="#bib.bib45" title="Effective Practices for Description of Science Content within Digital Talking Books" class="ltx_ref">39</a>]</cite> and by the Benetech Diagram Center&nbsp;<cite class="ltx_cite ltx_citemacro_cite">[<a href="#bib.bib94" title="Making Images Accessible" class="ltx_ref">9</a>]</cite>.</p>
        </div>
      </section>
      <section id="S2.SS2.SSS2" class="ltx_subsubsection">
        <h4 class="ltx_title ltx_title_subsubsection" id="H-S2.SS2.SSS2">
          <span class="ltx_tag ltx_tag_subsubsection">2.2.2 </span>Descriptions Authored by Non-Experts</h4>
        <div id="S2.SS2.SSS2.p1" class="ltx_para">
          <p class="ltx_p">Frequently employed in <a href="#id9"><abbr href="#id9" title="Human-Computer Interaction" class="ltx_glossaryref"><span class="ltx_text ltx_glossary_short">HCI</span></abbr></a> and visualization research, crowdsourcing is a technique whereby remote non-experts complete tasks currently infeasible for automatic methods, with applications to online accessibility&nbsp;<cite class="ltx_cite ltx_citemacro_cite">[<a href="#bib.bib82" title="VizWiz: Nearly Real-time Answers To Visual Questions" class="ltx_ref">13</a>]</cite>, as well as remote description services like <emph class="ltx_emph ltx_font_italic">Be My Eyes</emph>.
            For example, Morash et al. explored the efficacy of two types of non-expert tasks for authoring descriptions of visualizations: non-experts authoring free-form descriptions without expert guidance, versus those filling-in sentence templates pre-authored by experts&nbsp;<cite class="ltx_cite ltx_citemacro_cite">[<a href="#bib.bib17" title="Guiding Novice Web Workers in Making Image Descriptions Using Templates" class="ltx_ref">72</a>]</cite>.
            While these approaches can yield more richly detailed and “natural”-sounding descriptions (as we discuss in §&nbsp;<a href="#S5" title="5 Applying the Model: Evaluating the Effectiveness of Visualization Descriptions ‣ Accessible Visualization via Natural Language Descriptions: A Four-Level Model of Semantic Content" class="ltx_ref"><span class="ltx_text ltx_ref_tag">5</span></a>), and also provide training data for auto-generated captions and annotations&nbsp;<cite class="ltx_cite ltx_citemacro_cite">[<a href="#bib.bib7" title="A Formative Study on Designing Accurate and Natural Figure Captioning Systems" class="ltx_ref">84</a>, <a href="#bib.bib95" title="Extracting References Between Text And Charts Via Crowdsourcing" class="ltx_ref">56</a>]</cite>, it is important to be attentive to potential biases in human-authored descriptions&nbsp;<cite class="ltx_cite ltx_citemacro_cite">[<a href="#bib.bib103" title="“It’s Complicated”: Negotiating Accessibility and (Mis)Representation in Image Descriptions of Race, Gender, and Disability" class="ltx_ref">10</a>]</cite>.</p>
        </div>
      </section>
    </section>
    <section id="S2.SS3" class="ltx_subsection">
      <h3 class="ltx_title ltx_title_subsection" id="H-S2.SS3">
        <span class="ltx_tag ltx_tag_subsection">2.3 </span>Natural Language Hierarchies and Interfaces</h3>
      <div id="S2.SS3.p1" class="ltx_para">
        <p class="ltx_p">Apart from the above methods for generating descriptions, prior work has adopted linguistics-inspired framings to elucidate how natural language is used to describe — as well as interact with — visualizations.</p>
      </div>
      <section id="S2.SS3.SSS1" class="ltx_subsubsection">
        <h4 class="ltx_title ltx_title_subsubsection" id="H-S2.SS3.SSS1">
          <span class="ltx_tag ltx_tag_subsubsection">2.3.1 </span>Using Natural Language to Describe Visualizations</h4>
        <div id="S2.SS3.SSS1.p1" class="ltx_para">
          <p class="ltx_p">Demir et al. have proposed a hierarchy of six syntactic complexity levels corresponding to a set of propositions that might be conveyed by bar charts&nbsp;<cite class="ltx_cite ltx_citemacro_cite">[<a href="#bib.bib49" title="Summarizing Information Graphics Textually" class="ltx_ref">27</a>]</cite>.
            Our model differs in that it orders <emph class="ltx_emph ltx_font_italic">semantic</emph> content — i.e., <emph class="ltx_emph ltx_font_italic">what</emph> meaning the natural language sentence conveys — rather than <emph class="ltx_emph ltx_font_italic">how</emph> it does so syntactically.
            Thus, our model is agnostic to a sentence’s length, whether it contains multiple clauses or conjunctions, which has also been a focus of prior work in automatic captioning&nbsp;<cite class="ltx_cite ltx_citemacro_cite">[<a href="#bib.bib7" title="A Formative Study on Designing Accurate and Natural Figure Captioning Systems" class="ltx_ref">84</a>]</cite>.
            Moreover, whereas Demir et al. speculatively “envision” their set of propositions to construct their hierarchy, we arrive to our model empirically through a multi-stage grounded theory process&nbsp;(§&nbsp;<a href="#S3" title="3 Constructing the Model: Employing the Grounded Theory Methodology ‣ Accessible Visualization via Natural Language Descriptions: A Four-Level Model of Semantic Content" class="ltx_ref"><span class="ltx_text ltx_ref_tag">3</span></a>).
            Perhaps closest to our contribution are a pair of papers by Kosslyn&nbsp;<cite class="ltx_cite ltx_citemacro_cite">[<a href="#bib.bib43" title="Understanding Charts and Graphs" class="ltx_ref">57</a>]</cite> and Livingston &amp; Brock&nbsp;<cite class="ltx_cite ltx_citemacro_cite">[<a href="#bib.bib44" title="Position: Visual Sentences: Definitions and Applications" class="ltx_ref">66</a>]</cite>.
            Kosslyn draws on canonical linguistic theory, to introduce three levels for analyzing charts: the <emph class="ltx_emph ltx_font_italic">syntactic</emph> relationship between a visualization elements; the <emph class="ltx_emph ltx_font_italic">semantic</emph> meaning of these elements in what they depict or convey; and the <emph class="ltx_emph ltx_font_italic">pragmatic</emph> aspects of what these elements convey in the broader context of their reading&nbsp;<cite class="ltx_cite ltx_citemacro_cite">[<a href="#bib.bib43" title="Understanding Charts and Graphs" class="ltx_ref">57</a>]</cite>.
            We seeded our model construction with a similar linguistics-inspired framing, but also evaluated it empirically, to further decompose the semantic levels&nbsp;(§&nbsp;<a href="#S3.SS1" title="3.1 Initial Open Coding ‣ 3 Constructing the Model: Employing the Grounded Theory Methodology ‣ Accessible Visualization via Natural Language Descriptions: A Four-Level Model of Semantic Content" class="ltx_ref"><span class="ltx_text ltx_ref_tag">3.1</span></a>).
            Livingston &amp; Brock adapt Kosslyn’s ideas to generate what they call “visual sentences”: natural language sentences that are the result of executing a single, specific analytic task against a visualization&nbsp;<cite class="ltx_cite ltx_citemacro_cite">[<a href="#bib.bib44" title="Position: Visual Sentences: Definitions and Applications" class="ltx_ref">66</a>]</cite>.
            Inspired by the Sentence Verification Technique (<span class="ltx_text ltx_font_smallcaps">svt</span>)&nbsp;<cite class="ltx_cite ltx_citemacro_cite">[<a href="#bib.bib68" title="A Sentence Verification Technique For Measuring Reading Comprehension" class="ltx_ref">85</a>, <a href="#bib.bib67" title="Developing Reading And Listening Comprehension Tests Based On The Sentence Verification Technique (SVT)" class="ltx_ref">86</a>]</cite>, this work considers visual sentences for assessing graph comprehension, hoping to offer a more “objective” and automated alternative to existing visualization literacy assessments&nbsp;<cite class="ltx_cite ltx_citemacro_cite">[<a href="#bib.bib65" title="Vlat: Development Of A Visualization Literacy Assessment Test" class="ltx_ref">63</a>, <a href="#bib.bib66" title="Graph Literacy: A Cross-cultural Comparison" class="ltx_ref">35</a>]</cite>.
            While we adopt a more qualitative process for constructing our model, Livingston &amp; Brock’s approach suggests opportunities for future work: might our model map to similarly-hierarchical models of analytic tasks&nbsp;<cite class="ltx_cite ltx_citemacro_cite">[<a href="#bib.bib11" title="A Multi-Level Typology of Abstract Visualization Tasks" class="ltx_ref">17</a>, <a href="#bib.bib21" title="Low-level Components Of Analytic Activity In Information Visualization" class="ltx_ref">5</a>]</cite>?</p>
        </div>
      </section>
      <section id="S2.SS3.SSS2" class="ltx_subsubsection">
        <h4 class="ltx_title ltx_title_subsubsection" id="H-S2.SS3.SSS2">
          <span class="ltx_tag ltx_tag_subsubsection">2.3.2 </span>Using Natural Language to Interact with Visualizations</h4>
        <div id="S2.SS3.SSS2.p1" class="ltx_para">
          <p class="ltx_p">Adjacently, there is a breadth of work on  <a href="#id31"><span href="#id31" title="Natural Language Interfaces" class="ltx_glossaryref"><span class="ltx_text ltx_glossary_long">Natural Language Interfaces</span></span></a> (<a href="#id31"><abbr href="#id31" title="Natural Language Interfaces" class="ltx_glossaryref"><span class="ltx_text ltx_glossary_short">NLIs</span></abbr></a>) for constructing and exploring visualizations&nbsp;<cite class="ltx_cite ltx_citemacro_cite">[<a href="#bib.bib90" title="NL4DV: A Toolkit for Generating Analytic Specifications for Data Visualization from Natural Language Queries" class="ltx_ref">75</a>, <a href="#bib.bib91" title="Toward Interface Defaults for Vague Modifiers in Natural Language Interfaces for Visual Analysis" class="ltx_ref">42</a>, <a href="#bib.bib92" title="Inferencing Underspecified Natural Language Utterances In Visual Analysis" class="ltx_ref">90</a>, <a href="#bib.bib1" title="Answering Questions about Charts and Generating Visual Explanations" class="ltx_ref">50</a>]</cite>.
            While our model primarily considers the natural language sentences that are <emph class="ltx_emph ltx_font_italic">conveyed by</emph> visualizations (cf., natural language as <emph class="ltx_emph ltx_font_italic">input</emph> for chart specification and exploration)&nbsp;<cite class="ltx_cite ltx_citemacro_cite">[<a href="#bib.bib105" title="Collecting and Characterizing Natural Language Utterances for Specifying Data Visualizations" class="ltx_ref">93</a>]</cite>, our work may yet have implications for <a href="#id31"><abbr href="#id31" title="Natural Language Interfaces" class="ltx_glossaryref"><span class="ltx_text ltx_glossary_short">NLIs</span></abbr></a>.
            For example, Hearst et al. have found that many users of chatbots prefer <emph class="ltx_emph ltx_font_italic">not</emph> to see charts and graphics alongside text in the conversational dialogue interface&nbsp;<cite class="ltx_cite ltx_citemacro_cite">[<a href="#bib.bib93" title="Would You Like A Chart With That? Incorporating Visualizations into Conversational Interfaces" class="ltx_ref">43</a>]</cite>.
            By helping to decouple visual-versus-linguistic data representations, our model might be applied to offer these users a textual alternative to inline charts.
            Thus, we view our work as complementary to <a href="#id31"><abbr href="#id31" title="Natural Language Interfaces" class="ltx_glossaryref"><span class="ltx_text ltx_glossary_short">NLIs</span></abbr></a>, facilitating multimodal and more accessible data representations&nbsp;<cite class="ltx_cite ltx_citemacro_cite">[<a href="#bib.bib96" title="Facilitating Document Reading by Linking Text and Tables" class="ltx_ref">51</a>]</cite>, while helping to clarify the theoretical relationship between charts and captions&nbsp;<cite class="ltx_cite ltx_citemacro_cite">[<a href="#bib.bib71" title="Towards Understanding How Readers Integrate Charts and Captions: A Case Study with Line Charts" class="ltx_ref">52</a>, <a href="#bib.bib42" title="The Curious Case of Combining Text and Visualization" class="ltx_ref">80</a>]</cite>, and other accompanying text&nbsp;<cite class="ltx_cite ltx_citemacro_cite">[<a href="#bib.bib98" title="The Curse of Knowledge in Visual Data Communication" class="ltx_ref">106</a>, <a href="#bib.bib99" title="Frames and Slants in Titles of Visualizations on Controversial Topics" class="ltx_ref">54</a>, <a href="#bib.bib100" title="Trust and Recall of Information across Varying Degrees of Title-Visualization Misalignment" class="ltx_ref">55</a>, <a href="#bib.bib35" title="Communicative Visualizations as a Learning Problem" class="ltx_ref">2</a>]</cite>.</p>
        </div>
      </section>
    </section>
  </section>
  <section id="S3" class="ltx_section">
    <h2 class="ltx_title ltx_title_section" id="H-S3">
      <span class="ltx_tag ltx_tag_section">3 </span>Constructing the Model: Employing the Grounded Theory Methodology</h2>
    <div id="S3.p1" class="ltx_para">
      <p class="ltx_p">To construct our model of semantic content we conducted a multi-stage process, following the <emph class="ltx_emph ltx_font_italic">grounded theory</emph> methodology.
        Often employed in <a href="#id9"><abbr href="#id9" title="Human-Computer Interaction" class="ltx_glossaryref"><span class="ltx_text ltx_glossary_short">HCI</span></abbr></a> and the social sciences, grounded theory offers a rigorous method for making sense of a domain that lacks a dominant theory, and for constructing a new theory that accounts for diverse phenomena within that domain&nbsp;<cite class="ltx_cite ltx_citemacro_cite">[<a href="#bib.bib39" title="Curiosity, Creativity, and Surprise as Analytic Tools: Grounded Theory Method" class="ltx_ref">74</a>]</cite>.
        The methodology approaches theory construction <emph class="ltx_emph ltx_font_italic">inductively</emph> — through multiple stages of inquiry, data collection, “coding” (i.e., labeling and categorizing), and refinement — as well as <emph class="ltx_emph ltx_font_italic">empirically</emph>, remaining strongly based (i.e., “grounded”) in the data&nbsp;<cite class="ltx_cite ltx_citemacro_cite">[<a href="#bib.bib39" title="Curiosity, Creativity, and Surprise as Analytic Tools: Grounded Theory Method" class="ltx_ref">74</a>]</cite>.
        To construct our model of semantic content, we proceeded in two stages.
        First, we conducted small-scale data collection and initial open coding to establish preliminary categories of semantic content.
        Second, we gathered a larger-scale corpus to iteratively refine those categories, and to verify their coverage over the space of natural language descriptions.</p>
    </div>
    <section id="S3.SS1" class="ltx_subsection">
      <h3 class="ltx_title ltx_title_subsection" id="H-S3.SS1">
        <span class="ltx_tag ltx_tag_subsection">3.1 </span>Initial Open Coding</h3>
      <div id="S3.SS1.p1" class="ltx_para">
        <p class="ltx_p">We began gathering preliminary data by searching for descriptions accompanying visualizations in journalistic publications (including the websites of <emph class="ltx_emph ltx_font_italic">FiveThirtyEight</emph>, the <emph class="ltx_emph ltx_font_italic">New York Times</emph> and the <emph class="ltx_emph ltx_font_italic">Financial Times</emph>), but found that these professional sites usually provided no textual descriptions — neither as a caption alongside the chart, nor as alt text for screen readers.
          Indeed, often these sites were engineered so that screen readers would pass over the visualizations entirely, as if they did not appear on the page at all.
          Thus, to proceed with the grounded theory method, we conducted initial <emph class="ltx_emph ltx_font_italic">open coding</emph> (i.e., making initial, qualitative observations about our data, in an “open-minded” fashion) by studying preliminary data from two sources.
          We collected 330 natural language descriptions from over 100 students enrolled in a graduate-level data visualization class.
          As a survey-design pilot to inform future rounds of data collection&nbsp;(§&nbsp;<a href="#S3.SS2.SSS1" title="3.2.1 Survey Design ‣ 3.2 Gathering A Corpus ‣ 3 Constructing the Model: Employing the Grounded Theory Methodology ‣ Accessible Visualization via Natural Language Descriptions: A Four-Level Model of Semantic Content" class="ltx_ref"><span class="ltx_text ltx_ref_tag">3.2.1</span></a>), these initial descriptions were collected with minimal prompting: students were instructed to simply “describe the visualization” without specifying what kinds of semantic content that might include.
          The described visualizations covered a variety of chart types (e.g., bar charts, line charts, scatter plots) as well as dataset domains (e.g., public health, climate change, and gender equality).
          To complement the student-authored descriptions, from this same set of visualizations, we curated a set of 20 and wrote our (the authors’) own descriptions, attempting to be as richly descriptive as possible.
          Throughout, we adhered to a linguistics-inspired framing by attending to the semantic and pragmatic aspects of our writing: which content could be conveyed through the graphical sign-system alone, and which required drawing upon our individual background knowledge, experiences, and contexts.</p>
      </div>
      <div id="S3.SS1.p2" class="ltx_para">
        <p class="ltx_p">Analyzing these preliminary data, we proceeded to the next stage in the grounded theory method: forming <emph class="ltx_emph ltx_font_italic">axial codes</emph> (i.e., open codes organized into broader abstractions, with more generalized meaning&nbsp;<cite class="ltx_cite ltx_citemacro_cite">[<a href="#bib.bib39" title="Curiosity, Creativity, and Surprise as Analytic Tools: Grounded Theory Method" class="ltx_ref">74</a>]</cite>) corresponding to different content. We began to distinguish between content about a visualization’s construction (e.g., its title, encodings, legends), content about trends appearing in the visualized data (e.g., correlations, clusters, extrema), and content relevant to the visualized data but not represented in the visualization itself (e.g., explanations based on current events and domain-specific knowledge).
          From these axial codes, different <emph class="ltx_emph ltx_font_italic">categories</emph> (i.e., groupings delineated by shared characteristics of the content) began to emerge&nbsp;<cite class="ltx_cite ltx_citemacro_cite">[<a href="#bib.bib39" title="Curiosity, Creativity, and Surprise as Analytic Tools: Grounded Theory Method" class="ltx_ref">74</a>]</cite>, corresponding to a chart’s encoded elements, latent statistical relations, perceptual trends, and context.
          We refined these content categories iteratively by first writing down descriptions of new visualizations (again, as richly as possible), and then attempting to categorize each sentence appearing in that description.
          If we encountered a sentence that didn’t fit within any category, we either refined the specific characteristics belonging to an existing category, or we created a new category, where appropriate.</p>
      </div>
      <figure id="S3.T1" class="ltx_table">
        <figcaption class="ltx_caption ltx_centering"><span class="ltx_tag ltx_tag_table">Table 1: </span>Breakdown of the 50 curated visualizations, across the three dimensions: type, topic, and difficulty. <br> (N.b., each column sums to 50.)</figcaption>
        <table class="ltx_tabular ltx_centering ltx_guessed_headers ltx_align_middle">
          <tbody class="ltx_tbody">
            <tr class="ltx_tr">
              <th class="ltx_td ltx_align_left ltx_th ltx_th_column ltx_border_t"><span class="ltx_text ltx_font_smallcaps">chart type</span></th>
              <th class="ltx_td ltx_th ltx_th_column ltx_border_t"></th>
              <th class="ltx_td ltx_align_left ltx_th ltx_th_column ltx_border_t"><span class="ltx_text ltx_font_smallcaps">topic</span></th>
              <th class="ltx_td ltx_th ltx_th_column ltx_border_t"></th>
              <th class="ltx_td ltx_align_left ltx_th ltx_th_column ltx_border_t"><span class="ltx_text ltx_font_smallcaps">difficulty</span></th>
              <td class="ltx_td ltx_border_t"></td>
            </tr>
            <tr class="ltx_tr">
              <td class="ltx_td ltx_align_left ltx_border_t"><span class="ltx_text ltx_font_typewriter">bar</span></td>
              <td class="ltx_td ltx_align_left ltx_border_t">18</td>
              <td class="ltx_td ltx_align_left ltx_border_t"><span class="ltx_text ltx_font_typewriter">academic</span></td>
              <td class="ltx_td ltx_align_left ltx_border_t">15</td>
              <td class="ltx_td ltx_align_left ltx_border_t"><span class="ltx_text ltx_font_typewriter">easy</span></td>
              <td class="ltx_td ltx_align_left ltx_border_t">21</td>
            </tr>
            <tr class="ltx_tr">
              <td class="ltx_td ltx_align_left"><span class="ltx_text ltx_font_typewriter">line</span></td>
              <td class="ltx_td ltx_align_left">21</td>
              <td class="ltx_td ltx_align_left"><span class="ltx_text ltx_font_typewriter">business</span></td>
              <td class="ltx_td ltx_align_left">18</td>
              <td class="ltx_td ltx_align_left"><span class="ltx_text ltx_font_typewriter">medium</span></td>
              <td class="ltx_td ltx_align_left">20</td>
            </tr>
            <tr class="ltx_tr">
              <td class="ltx_td ltx_align_left ltx_border_b"><span class="ltx_text ltx_font_typewriter">scatter</span></td>
              <td class="ltx_td ltx_align_left ltx_border_b">11</td>
              <td class="ltx_td ltx_align_left ltx_border_b"><span class="ltx_text ltx_font_typewriter">journalism</span></td>
              <td class="ltx_td ltx_align_left ltx_border_b">17</td>
              <td class="ltx_td ltx_align_left ltx_border_b"><span class="ltx_text ltx_font_typewriter">hard</span></td>
              <td class="ltx_td ltx_align_left ltx_border_b">9</td>
            </tr>
          </tbody>
        </table>
      </figure>
    </section>
    <section id="S3.SS2" class="ltx_subsection">
      <h3 class="ltx_title ltx_title_subsection" id="H-S3.SS2">
        <span class="ltx_tag ltx_tag_subsection">3.2 </span>Gathering A Corpus</h3>
      <div id="S3.SS2.p1" class="ltx_para">
        <p class="ltx_p">The prior inductive and empirical process resulted in a set of preliminary content categories.
          To test their robustness, and to further refine them, we conducted an online survey to gather a larger-scale corpus of 582 visualization descriptions comprised of 2,147 sentences.</p>
      </div>
      <section id="S3.SS2.SSS1" class="ltx_subsubsection">
        <h4 class="ltx_title ltx_title_subsubsection" id="H-S3.SS2.SSS1">
          <span class="ltx_tag ltx_tag_subsubsection">3.2.1 </span>Survey Design</h4>
        <div id="S3.SS2.SSS1.p1" class="ltx_para">
          <p class="ltx_p">We first curated a set of 50 visualizations drawn from the MassVis dataset&nbsp;<cite class="ltx_cite ltx_citemacro_cite">[<a href="#bib.bib37" title="What Makes a Visualization Memorable?" class="ltx_ref">16</a>, <a href="#bib.bib38" title="Beyond Memorability: Visualization Recognition and Recall" class="ltx_ref">15</a>]</cite>, Quartz’s Atlas visualization platform&nbsp;<cite class="ltx_cite ltx_citemacro_cite">[<a href="#bib.bib32" title="Reverse-Engineering Visualizations: Recovering Visual Encodings from Chart Images" class="ltx_ref">81</a>]</cite>, examples from the Vega-Lite gallery&nbsp;<cite class="ltx_cite ltx_citemacro_cite">[<a href="#bib.bib36" title="Vega-Lite: A Grammar of Interactive Graphics" class="ltx_ref">87</a>]</cite>, and the aforementioned journalistic publications.
            We organized these visualizations along three dimensions: the visualization <emph class="ltx_emph ltx_font_italic">type</emph> (bar charts, line charts, and scatter plots); the <emph class="ltx_emph ltx_font_italic">topic</emph> of the dataset domain (academic studies, business-related, or non-business data journalism); and their <emph class="ltx_emph ltx_font_italic">difficulty</emph> based on an assessment of their visual and conceptual complexity.
            We labeled visualizations as “easy” if they were basic instances of their canonical type (e.g., single-line or un-grouped bar charts), as ”medium” if they were more moderate variations on canon (e.g., contained bar groupings, overlapping scatterplot clusters, visual embellishments, or simple transforms), and as ”hard” if they strongly diverged from canon (e.g., contained chartjunk or complex transforms such as log scales).
            To ensure robustness, two authors labeled the visualizations independently, and then resolved any disagreement through discussion.
            Table&nbsp;<a href="#S3.T1" title="Table 1 ‣ 3.1 Initial Open Coding ‣ 3 Constructing the Model: Employing the Grounded Theory Methodology ‣ Accessible Visualization via Natural Language Descriptions: A Four-Level Model of Semantic Content" class="ltx_ref"><span class="ltx_text ltx_ref_tag">1</span></a> summarizes the breakdown of the 50 visualizations across these three dimensions.</p>
        </div>
        <div id="S3.SS2.SSS1.p2" class="ltx_para">
          <p class="ltx_p">In the survey interface, participants were shown a single, randomly-selected visualization at a time, and prompted to describe it in complete English sentences.
            In our preliminary data collection&nbsp;(§&nbsp;<a href="#S3.SS1" title="3.1 Initial Open Coding ‣ 3 Constructing the Model: Employing the Grounded Theory Methodology ‣ Accessible Visualization via Natural Language Descriptions: A Four-Level Model of Semantic Content" class="ltx_ref"><span class="ltx_text ltx_ref_tag">3.1</span></a>), we found that without explicit prompting participants were likely to provide only brief and minimally informative descriptions (e.g., sometimes simply repeating the chart title and axis labels).
            Thus, to mitigate against this outcome, and to elicit richer semantic content, we explicitly instructed participants to author descriptions that did not <emph class="ltx_emph ltx_font_italic">only</emph> refer to the chart’s basic elements and encodings (e.g., it’s title, axes, colors) but to also referred to other content, trends, and insights that might be conveyed by the visualization.
            To make these instructions intelligible, we provided participants with a few pre-generated sentences enumerating the visualization’s basic elements and encodings (e.g., the <span class="ltx_text ltx_font_sansserif" style="background-color:#FFD6B3;">color coded sentences</span> in Table&nbsp;<a href="#S4.T3" title="Table 3 ‣ 4.2 Level 2: Statistical Concepts and Relations ‣ 4 A Four-Level Model of Semantic Content ‣ Accessible Visualization via Natural Language Descriptions: A Four-Level Model of Semantic Content" class="ltx_ref"><span class="ltx_text ltx_ref_tag">3</span></a> A.1, B.1, C.1), and prompted them to author semantic content <emph class="ltx_emph ltx_font_italic">apart from</emph> what was already conveyed by those sentences.
            To avoid biasing their responses, participants were <emph class="ltx_emph ltx_font_italic">not</emph> told that they would be read by people with visual disabilities.
            This prompting ensured that the survey captured a breadth of semantic content, and not only the most readily-apparent aspects of the visualization’s construction.</p>
        </div>
        <figure id="S3.F1" class="ltx_figure"><img src="x33.png" id="S3.F1.g1" class="ltx_graphics ltx_centering" width="2699" height="3016"
          alt="A “fingerprint” visualization depicting a grid-like overview of the descriptions comprising 2,147 sentences in our corpus. Each row lists the descriptions collected for a particular visualization. A long description is available at the following link."
          longdesc="fig-fingerprint-longdesc.html"
          />
          <a href="fig-fingerprint-longdesc.html" class="ltx_align_center" target="_">Long Description</a>
          <figcaption class="ltx_caption ltx_centering"><span class="ltx_tag ltx_tag_figure">Figure 1: </span>
            A visual “fingerprint”&nbsp;<cite class="ltx_cite ltx_citemacro_cite">[<a href="#bib.bib89" title="Literature Fingerprinting: A New Method for Visual Literary Analysis" class="ltx_ref">49</a>]</cite> of our corpus, faceted by chart type and difficulty.
            Each row corresponds to a single chart. Each column shows a participant-authored description for that chart, color coded according to our model.
            The first column shows the provided Level 1 prompt.
          </figcaption>
        </figure>
      </section>
      <section id="S3.SS2.SSS2" class="ltx_subsubsection">
        <h4 class="ltx_title ltx_title_subsubsection" id="H-S3.SS2.SSS2">
          <span class="ltx_tag ltx_tag_subsubsection">3.2.2 </span>Survey Results</h4>
        <div id="S3.SS2.SSS2.p1" class="ltx_para">
          <p class="ltx_p">We recruited 120 survey participants through the <emph class="ltx_emph ltx_font_italic">Prolific</emph> platform. In an approximately 30-minute study compensated at a rate of $10-12 per hour, we asked each participant to describe 5 visualizations (randomly selected from the set of 50), resulting in at least 10 participant-authored descriptions per visualization.
            For some visualizations, we collected between 10-15 responses, due to limitations of the survey logic for randomly selecting a visualization to show participants.
            In total, this survey resulted in 582 individual descriptions comprised of 2,147 natural language sentences.
            We manually cleaned each sentence to correct errors in spelling, grammar, punctuation (n.b., we did not alter the semantic content conveyed by each sentence).
            We then labeled each sentence according to the content <emph class="ltx_emph ltx_font_italic">categories</emph> developed through our prior grounded theory process.
            As before, to ensure robustness, two authors labeled each sentence independently, and then resolved any disagreement through discussion.
            This deliberative and iterative process helped us to further distinguish and refine our categories.
            For example, we were able to more precisely draw comparisons between sentences reporting computable “data facts”&nbsp;<cite class="ltx_cite ltx_citemacro_cite">[<a href="#bib.bib27" title="Augmenting Visualizations with Interactive Data Facts to Facilitate Interpretation and Communication" class="ltx_ref">92</a>, <a href="#bib.bib10" title="DataShot: Automatic Generation of Fact Sheets from Tabular Data" class="ltx_ref">100</a>]</cite> through rigid or templatized articulation (such as “<emph class="ltx_emph ltx_font_italic"><span class="ltx_text ltx_font_typewriter">[x-encoding]</span> is positively correlated with <span class="ltx_text ltx_font_typewriter">[y-encoding]</span></emph>”), with sentences conveying the same semantic content through more “natural”-sounding articulation (such as “<emph class="ltx_emph ltx_font_italic">for the most part, as <span class="ltx_text ltx_font_typewriter">[x-encoding]</span> increases, so too does <span class="ltx_text ltx_font_typewriter">[y-encoding]</span></emph>”).</p>
        </div>
        <div id="S3.SS2.SSS2.p2" class="ltx_para">
          <p class="ltx_p">In summary, the entire grounded theory process resulted in four distinct semantic content categories, which we organize into <emph class="ltx_emph ltx_font_italic">levels</emph> in the next section.
            A visual “fingerprint”&nbsp;<cite class="ltx_cite ltx_citemacro_cite">[<a href="#bib.bib89" title="Literature Fingerprinting: A New Method for Visual Literary Analysis" class="ltx_ref">49</a>]</cite> shows how semantic content is distributed across sentences in the corpus (Fig.&nbsp;<a href="#S3.F1" title="Figure 1 ‣ 3.2.1 Survey Design ‣ 3.2 Gathering A Corpus ‣ 3 Constructing the Model: Employing the Grounded Theory Methodology ‣ Accessible Visualization via Natural Language Descriptions: A Four-Level Model of Semantic Content" class="ltx_ref"><span class="ltx_text ltx_ref_tag">1</span></a>).
            Level 1 (consisting of a chart’s basic elements and encodings) represents 9.1% of the sentences in the corpus.
            This is expected, since Level 1 sentences were pre-generated and provided as a prompt to our survey participants, as we previously discussed.
            The distribution of sentences across the remaining levels is as follows: Level 2 (35.1%), Level 3 (42.9%), and Level 4 (12.9%).
            The fairly-balanced distribution suggests that our survey prompting successfully captured natural language sentences corresponding to a breadth of visualized content.</p>
        </div>
      </section>
    </section>
  </section>
  <section id="S4" class="ltx_section">
    <h2 class="ltx_title ltx_title_section" id="H-S4">
      <span class="ltx_tag ltx_tag_section">4 </span>A Four-Level Model of Semantic Content</h2>
    <figure id="S4.T2" class="ltx_table">
      <figcaption class="ltx_caption ltx_centering"><span class="ltx_tag ltx_tag_table">Table 2: </span>A four-level model of semantic content for accessible visualization.
        Levels are defined by the semantic content conveyed by natural language descriptions of visualizations.
        Additionally, we offer computational considerations for generating the semantic content at each level of the model.
      </figcaption>
      <table class="ltx_tabular ltx_centering ltx_guessed_headers ltx_align_middle">
        <thead class="ltx_thead">
          <tr class="ltx_tr">
            <th class="ltx_td ltx_align_center ltx_align_middle ltx_th ltx_th_column ltx_border_t" style="width:5.7pt;padding-top:3.472222222222222px;padding-bottom:3.472222222222222px;"><span class="ltx_text ltx_wrap ltx_font_smallcaps">level number</span></th>
            <th class="ltx_td ltx_align_center ltx_align_middle ltx_th ltx_th_column ltx_border_t" style="width:71.1pt;padding-top:3.472222222222222px;padding-bottom:3.472222222222222px;"><span class="ltx_text ltx_wrap ltx_font_smallcaps">level keywords</span></th>
            <th class="ltx_td ltx_align_center ltx_align_middle ltx_th ltx_th_column ltx_border_t" style="width:156.5pt;padding-top:3.472222222222222px;padding-bottom:3.472222222222222px;"><span class="ltx_text ltx_wrap ltx_font_smallcaps">semantic content</span></th>
            <th class="ltx_td ltx_align_center ltx_align_middle ltx_th ltx_th_column ltx_border_t" style="width:170.7pt;padding-top:3.472222222222222px;padding-bottom:3.472222222222222px;"><span class="ltx_text ltx_wrap ltx_font_smallcaps">computational considerations</span></th>
          </tr>
        </thead>
        <tbody class="ltx_tbody">
          <tr class="ltx_tr">
            <td class="ltx_td ltx_align_center ltx_align_middle ltx_border_t" style="width:5.7pt;padding-top:3.472222222222222px;padding-bottom:3.472222222222222px; background-color:#2B82D4;">
              <span class="ltx_text ltx_wrap ltx_font_typewriter" style="color:#FFFFFF;">Level 4</span>
            </td>
            <td class="ltx_td ltx_align_left ltx_wrap ltx_align_middle ltx_border_t" style="width:71.1pt;padding-top:3.472222222222222px;padding-bottom:3.472222222222222px; background-color:#EDFCFF;">
              <span class="ltx_text ltx_wrap ltx_font_typewriter">contextual and domain-specific</span>
            </td>
            <td class="ltx_td ltx_align_left ltx_wrap ltx_align_middle ltx_border_t" style="width:156.5pt;padding-top:3.472222222222222px;padding-bottom:3.472222222222222px; background-color:#EDFCFF;">
              <emph class="ltx_text ltx_wrap ltx_font_italic">domain-specific insights, current events, social and political context, explanations</emph>
            </td>
            <td class="ltx_td ltx_align_left ltx_wrap ltx_align_middle ltx_border_t" style="width:170.7pt;padding-top:3.472222222222222px;padding-bottom:3.472222222222222px; background-color:#EDFCFF;">
              contextual knowledge and domain-specific expertise (<emph class="ltx_emph ltx_font_italic">perceiver-dependent</emph>)</td>
          </tr>
          <tr class="ltx_tr">
            <td class="ltx_td ltx_align_center ltx_align_middle" style="width:5.7pt;padding-top:3.472222222222222px;padding-bottom:3.472222222222222px; background-color:#FFFFA8;">
             <span class="ltx_text ltx_wrap ltx_font_typewriter">Level 3</span>
            </td>
            <td class="ltx_td ltx_align_left ltx_wrap ltx_align_middle" style="width:71.1pt;padding-top:3.472222222222222px;padding-bottom:3.472222222222222px; background-color:#FFFFDB;">
             <span class="ltx_text ltx_wrap ltx_font_typewriter">perceptual and cognitive</span>
            </td>
            <td class="ltx_td ltx_align_left ltx_wrap ltx_align_middle" style="width:156.5pt;padding-top:3.472222222222222px;padding-bottom:3.472222222222222px; background-color:#FFFFDB;">
              <emph class="ltx_text ltx_wrap ltx_font_italic">complex trends, pattern synthesis, exceptions, commonplace concepts</emph>
            </td>
            <td class="ltx_td ltx_align_left ltx_wrap ltx_align_middle" style="width:170.7pt;padding-top:3.472222222222222px;padding-bottom:3.472222222222222px; background-color:#FFFFDB;">
              reference to the rendered visualization and “common knowledge” (<emph class="ltx_emph ltx_font_italic">perceiver-dependent</emph>)</td>
          </tr>
          <tr class="ltx_tr">
            <td class="ltx_td ltx_align_left ltx_wrap ltx_align_middle" style="width:5.7pt;padding-top:3.472222222222222px;padding-bottom:3.472222222222222px; background-color:#94DE94;">
              <span class="ltx_text ltx_wrap ltx_font_typewriter">Level 2</span>
            </td>
            <td class="ltx_td ltx_align_left ltx_wrap ltx_align_middle" style="width:71.1pt;padding-top:3.472222222222222px;padding-bottom:3.472222222222222px; background-color:#F2FFEB;">
              <span class="ltx_text ltx_wrap ltx_font_typewriter">statistical and relational</span>
            </td>
            <td class="ltx_td ltx_align_left ltx_wrap ltx_align_middle" style="width:156.5pt;padding-top:3.472222222222222px;padding-bottom:3.472222222222222px; background-color:#F2FFEB;">
              <emph class="ltx_text ltx_wrap ltx_font_italic">descriptive statistics, extrema, outliers, correlations, point-wise comparisons</emph>
            </td>
            <td class="ltx_td ltx_align_left ltx_wrap ltx_align_middle" style="width:170.7pt;padding-top:3.472222222222222px;padding-bottom:3.472222222222222px; background-color:#F2FFEB;">
              access to the visualization specification or backing dataset (<emph class="ltx_emph ltx_font_italic">perceiver-independent</emph>)</td>
          </tr>
          <tr class="ltx_tr">
            <td class="ltx_td ltx_align_center ltx_align_middle ltx_border_b" style="width:5.7pt;padding-top:3.472222222222222px;padding-bottom:3.472222222222222px; background-color:#FFD6B3;">
              <span class="ltx_text ltx_wrap ltx_font_typewriter">Level 1</span>
            </td>
            <td class="ltx_td ltx_align_left ltx_wrap ltx_align_middle ltx_border_b" style="width:71.1pt;padding-top:3.472222222222222px;padding-bottom:3.472222222222222px; background-color:#FFF5E0;">
              <span class="ltx_text ltx_wrap ltx_font_typewriter">elemental and encoded</span>
            </td>
            <td class="ltx_td ltx_align_left ltx_wrap ltx_align_middle ltx_border_b" style="width:156.5pt;padding-top:3.472222222222222px;padding-bottom:3.472222222222222px; background-color:#FFF5E0;">
              <emph class="ltx_text ltx_wrap ltx_font_italic">chart type, encoding channels, title, axis ranges, labels, colors</emph>
            </td>
            <td class="ltx_td ltx_align_left ltx_wrap ltx_align_middle ltx_border_b" style="width:170.7pt;padding-top:3.472222222222222px;padding-bottom:3.472222222222222px; background-color:#FFF5E0;">
              access to the visualization specification or rasterized image (<emph class="ltx_emph ltx_font_italic">perceiver-independent</emph>)</td>
          </tr>
          <!-- <tr class="ltx_tr">
            <td class="ltx_td ltx_align_center ltx_align_middle ltx_border_t" style="width:5.7pt;padding-top:3.472222222222222px;padding-bottom:3.472222222222222px;"></td>
            <td class="ltx_td ltx_align_middle ltx_border_t" style="width:71.1pt;padding-top:3.472222222222222px;padding-bottom:3.472222222222222px;"></td>
            <td class="ltx_td ltx_align_middle ltx_border_t" style="width:156.5pt;padding-top:3.472222222222222px;padding-bottom:3.472222222222222px;"></td>
            <td class="ltx_td ltx_align_middle ltx_border_t" style="width:170.7pt;padding-top:3.472222222222222px;padding-bottom:3.472222222222222px;"></td>
          </tr> -->
        </tbody>
      </table>
    </figure>
    <div id="S4.p1" class="ltx_para">
      <p class="ltx_p">Our grounded theory process yielded a four-level model of semantic content for the natural language description of visualizations.
        In the following subsections, we introduce the levels of the model and provide example sentences for each.
        Table&nbsp;<a href="#S4.T2" title="Table 2 ‣ 4 A Four-Level Model of Semantic Content ‣ Accessible Visualization via Natural Language Descriptions: A Four-Level Model of Semantic Content" class="ltx_ref"><span class="ltx_text ltx_ref_tag">2</span></a> summarizes the levels, and Table&nbsp;<a href="#S4.T3" title="Table 3 ‣ 4.2 Level 2: Statistical Concepts and Relations ‣ 4 A Four-Level Model of Semantic Content ‣ Accessible Visualization via Natural Language Descriptions: A Four-Level Model of Semantic Content" class="ltx_ref"><span class="ltx_text ltx_ref_tag">3</span></a> shows example visualizations from our corpus and corresponding descriptions, color coded according to the model’s color scale.
        Additionally, we offer practical <emph class="ltx_emph ltx_font_italic">computational considerations</emph> regarding the feasibility of generating sentences at each level, with reference to the present-day state-of-the-art methods described in Related Work.
        While we present them alongside each other for ease of explication, we emphasize that the model levels and computational considerations are theoretically decoupled: the model is indexed to the semantic content conveyed by natural language sentences, not to the computational means through which those sentences may or may not be generated.</p>
    </div>
    <section id="S4.SS1" class="ltx_subsection">
      <h3 class="ltx_title ltx_title_subsection" id="H-S4.SS1">
        <span class="ltx_tag ltx_tag_subsection">4.1 </span>Level 1: Elemental and Encoded Properties</h3>
      <div id="S4.SS1.p1" class="ltx_para">
        <p class="ltx_p">At the first level, there are sentences whose semantic content refers to elemental and encoded properties of the visualization (i.e., the visual components that comprise a graphical representation’s design and construction).
          These include the chart type (bar chart, line graph, scatter plot, etc.), its title and legend, its encoding channels, axis labels, and the axis scales. Consider the following sentence (Table&nbsp;<a href="#S4.T3" title="Table 3 ‣ 4.2 Level 2: Statistical Concepts and Relations ‣ 4 A Four-Level Model of Semantic Content ‣ Accessible Visualization via Natural Language Descriptions: A Four-Level Model of Semantic Content" class="ltx_ref"><span class="ltx_text ltx_ref_tag">3</span></a>.A.1).</p>
      </div>
      <div id="S4.SS1.p2" class="ltx_para">
        <blockquote class="ltx_quote">
          <p class="ltx_p"><span class="ltx_text ltx_font_sansserif" style="font-size:90%;background-color:#FFD6B3;">Mortality rate is plotted on the vertical y-axis from 0 to 15%. Age is plotted on the horizontal x-axis in bins: 10-19, 20-29, 30-39, 40-49, 50-59, 60-69, 70-79, 80+.</span><span class="ltx_text" style="font-size:90%;"></span></p>
        </blockquote>
      </div>
      <div id="S4.SS1.p3" class="ltx_para ltx_noindent">
        <p class="ltx_p">This sentence “reads off” the axis labels and scales as they appear in the bar chart, with no additional synthesizing or interpretation.
          Sentences such as this are placed at the lowest level in the model because they refer to content that is <emph class="ltx_emph ltx_font_italic">foundational</emph> to visualization construction—comprising the elemental properties of the “language” of graphics&nbsp;<cite class="ltx_cite ltx_citemacro_cite">[<a href="#bib.bib58" title="Semiology of Graphics" class="ltx_ref">12</a>]</cite>.</p>
      </div>
      <div id="S4.SS1.p4" class="ltx_para ltx_noindent">
        <p class="ltx_p"><emph class="ltx_emph ltx_font_bold ltx_font_italic">Computational Considerations.</emph>
          Semantic content at Level 1 is so foundational that it has long been formalized — not only theoretically, as in Bertin’s <emph class="ltx_emph ltx_font_italic">Semiology of Graphics</emph>, but also mathematically and programmatically, as a “grammar of graphics” that precisely defines the algorithmic rules for constructing canonical chart types.&nbsp;<cite class="ltx_cite ltx_citemacro_cite">[<a href="#bib.bib59" title="The Grammar of Graphics" class="ltx_ref">104</a>]</cite>.
          In the case of these construction grammars, Level 1 content is <emph class="ltx_emph ltx_font_italic">directly encoded</emph> in the visualization’s structured specification (i.e., mappings between data fields and visual properties)&nbsp;<cite class="ltx_cite ltx_citemacro_cite">[<a href="#bib.bib36" title="Vega-Lite: A Grammar of Interactive Graphics" class="ltx_ref">87</a>]</cite>.
          Thus, for these grammars, generating sentences at Level 1 can amount to “filling in the blank” for a pre-defined sentence template. For example, given an appropriate template, the following natural language sentence could be trivially computed using the data encoded in the visualization specification.
        </p>
        <blockquote class="ltx_quote ltx_displayquote">
          <p class="ltx_p"><span class="ltx_text ltx_quote">
            “<emph class="ltx_emph ltx_font_italic">This is a <span class="ltx_text ltx_font_typewriter">[chart-type]</span> entitled <span class="ltx_text ltx_font_typewriter">[chart-title]</span>.
                <span class="ltx_text ltx_font_typewriter">[y-encoding]</span> is plotted on the vertical y-axis from <span class="ltx_text ltx_font_typewriter">[y-min]</span> to <span class="ltx_text ltx_font_typewriter">[y-max]</span>. <span class="ltx_text ltx_font_typewriter">[x-encoding]</span> is plotted on the horizontal x-axis from <span class="ltx_text ltx_font_typewriter">[x-min]</span> to <span class="ltx_text ltx_font_typewriter">[x-max]</span></emph>.”
            </span></p>
        </blockquote>
        <p class="ltx_p">And similarly, for other sentence templates and elemental properties encoded in the visualization’s structured specification.
          If the structured specification is not available, however, or if it does not follow a declarative grammar, then <a href="#id26"><abbr href="#id26" title="Computer Vision" class="ltx_glossaryref"><span class="ltx_text ltx_glossary_short">CV</span></abbr></a> and <a href="#id27"><abbr href="#id27" title="Natural Language Processing" class="ltx_glossaryref"><span class="ltx_text ltx_glossary_short">NLP</span></abbr></a> methods have also shown promise when applied to rasterized visualization images (e.g., <span class="ltx_text ltx_font_smallcaps">jpeg</span>s or <span class="ltx_text ltx_font_smallcaps">png</span>s).
          For example, recent work has shown that Level 1 semantic content can be feasibly generated provided an appropriate training dataset of pre-defined sentence templates&nbsp;<cite class="ltx_cite ltx_citemacro_cite">[<a href="#bib.bib25" title="FigureQA: An Annotated Figure Dataset for Visual Reasoning" class="ltx_ref">47</a>]</cite>, or by extracting a visualization’s structured specification from a rasterized visualization image&nbsp;<cite class="ltx_cite ltx_citemacro_cite">[<a href="#bib.bib32" title="Reverse-Engineering Visualizations: Recovering Visual Encodings from Chart Images" class="ltx_ref">81</a>]</cite>.</p>
      </div>
    </section>
    <section id="S4.SS2" class="ltx_subsection">
      <h3 class="ltx_title ltx_title_subsection" id="H-S4.SS2">
        <span class="ltx_tag ltx_tag_subsection">4.2 </span>Level 2: Statistical Concepts and Relations</h3>
      <div id="S4.SS2.p1" class="ltx_para">
        <p class="ltx_p">At the second level, there are sentences whose semantic content refers to abstract statistical concepts and relations that are latent the visualization’s backing dataset.
          This content conveys computable descriptive statistics (such as mean, standard deviation, extrema, correlations) — what have sometimes been referred to as “data facts” because they are “objectively” present within a given dataset&nbsp;<cite class="ltx_cite ltx_citemacro_cite">[<a href="#bib.bib27" title="Augmenting Visualizations with Interactive Data Facts to Facilitate Interpretation and Communication" class="ltx_ref">92</a>, <a href="#bib.bib10" title="DataShot: Automatic Generation of Fact Sheets from Tabular Data" class="ltx_ref">100</a>]</cite> (as opposed to primarily observed via visualization, which affords more opportunities for subjective interpretation).
          In addition to these statistics, Level 2 content includes <emph class="ltx_emph ltx_font_italic">relations</emph> between data points (such as “greater than” or “lesser than” comparisons).
          Consider the following sentences (Table&nbsp;<a href="#S4.T3" title="Table 3 ‣ 4.2 Level 2: Statistical Concepts and Relations ‣ 4 A Four-Level Model of Semantic Content ‣ Accessible Visualization via Natural Language Descriptions: A Four-Level Model of Semantic Content" class="ltx_ref"><span class="ltx_text ltx_ref_tag">3</span></a>.C.2).</p>
        <blockquote class="ltx_quote">
          <p class="ltx_p"><span class="ltx_text ltx_font_sansserif" style="font-size:90%;background-color:#94DE94;">For low income countries, the average life expectancy is 60 years for men and 65 years for women. For high income countries, the average life expectancy is 77 years for men and 82 years for women.</span><span class="ltx_text" style="font-size:90%;"></span></p>
        </blockquote>
      </div>
      <div id="S4.SS2.p2" class="ltx_para ltx_noindent">
        <p class="ltx_p">These two sentences refer to a statistical property: the computed mean of the life expectancy of a population, faceted by gender and country income-level.
          Consider another example (Table&nbsp;<a href="#S4.T3" title="Table 3 ‣ 4.2 Level 2: Statistical Concepts and Relations ‣ 4 A Four-Level Model of Semantic Content ‣ Accessible Visualization via Natural Language Descriptions: A Four-Level Model of Semantic Content" class="ltx_ref"><span class="ltx_text ltx_ref_tag">3</span></a>.A.2).</p>
      </div>
      <div id="S4.SS2.p3" class="ltx_para">
        <blockquote class="ltx_quote">
          <p class="ltx_p"><span class="ltx_text ltx_font_sansserif" style="font-size:90%;background-color:#94DE94;">The highest COVID-19 mortality rate is in the 80+ age range, while the lowest mortality rate is in 10-19, 20-29, 30-39, sharing the same rate.</span><span class="ltx_text" style="font-size:90%;"></span></p>
        </blockquote>
      </div>
      <div id="S4.SS2.p4" class="ltx_para ltx_noindent">
        <p class="ltx_p">Although this sentence is more complex, it nevertheless resides at Level 2. It refers to the <emph class="ltx_emph ltx_font_italic">extrema</emph> of the dataset (i.e., the “highest” and “lowest” mortality rates), and makes two <emph class="ltx_emph ltx_font_italic">comparisons</emph> (i.e., a comparison between the extrema, and another between age ranges sharing the lowest mortality rate).
          All of the above sentences above share the same characteristic, distinguishing them from those at Level 1: they refer to <emph class="ltx_emph ltx_font_italic">relations</emph> between points in the dataset, be they descriptive statistics or point-wise comparisons.
          Whereas Level 1 sentences “read off” the visualization’s elemental properties, Level 2 sentences “report” statistical concepts and relations within the chart’s backing dataset.</p>
      </div>
      <div id="S4.SS2.p5" class="ltx_para">
        <p class="ltx_p"><emph class="ltx_emph ltx_font_bold ltx_font_italic">Computational Considerations.</emph>
          While semantic content at Level 1 requires <emph class="ltx_emph ltx_font_italic">only</emph> reference to the visualization’s specification, content at Level 2 <emph class="ltx_emph ltx_font_italic">also</emph> requires access to the backing dataset.
          Here, the two categories of automatic methods begin to diverge in their computational feasibility.
          For visualizations with a structured specification, generating sentences at Level 2 is effectively as easy as generating sentences at Level 1: it requires little more computation to calculate and report descriptive statistics when the software has access to the backing dataset (i.e., encoded as part of the visualization specification).
          Indeed, many visualization software systems (such as Tableau’s Summary Card, Voder&nbsp;<cite class="ltx_cite ltx_citemacro_cite">[<a href="#bib.bib27" title="Augmenting Visualizations with Interactive Data Facts to Facilitate Interpretation and Communication" class="ltx_ref">92</a>]</cite>, Quill <span class="ltx_text ltx_font_smallcaps">nlg</span> Plug-In for Power BI, and others) automatically compute summary statistics and present them in natural language captions.
          By contrast, for <a href="#id26"><abbr href="#id26" title="Computer Vision" class="ltx_glossaryref"><span class="ltx_text ltx_glossary_short">CV</span></abbr></a> and <a href="#id27"><abbr href="#id27" title="Natural Language Processing" class="ltx_glossaryref"><span class="ltx_text ltx_glossary_short">NLP</span></abbr></a> methods, generating Level 2 sentences from a rasterized image is considerably more difficult — although not entirely infeasible — depending on the chart type and complexity.
          For example, these methods can sometimes report extrema (e.g., which age ranges exhibit the highest and lowest mortality rates in&nbsp;<a href="#S4.T3" title="Table 3 ‣ 4.2 Level 2: Statistical Concepts and Relations ‣ 4 A Four-Level Model of Semantic Content ‣ Accessible Visualization via Natural Language Descriptions: A Four-Level Model of Semantic Content" class="ltx_ref"><span class="ltx_text ltx_ref_tag">3</span></a>.A.2)&nbsp;<cite class="ltx_cite ltx_citemacro_cite">[<a href="#bib.bib54" title="Chart-to-Text: Generating Natural Language Descriptions for Charts by Adapting the Transformer Model" class="ltx_ref">78</a>, <a href="#bib.bib51" title="Generating textual summaries of bar chartsGenerating Textual Summaries Of Bar Charts" class="ltx_ref">26</a>]</cite>.
          Nevertheless, precisely reporting descriptive statistics (e.g., the computed mean of points in a scatter plot) is less tractable, without direct access to the chart’s backing dataset.
        </p>
      </div>
      <figure id="S4.T3" class="ltx_table">
        <figcaption class="ltx_caption ltx_centering"><span class="ltx_tag ltx_tag_table">Table 3: </span>Example visualizations and descriptions from our corpus. Paragraph breaks in rows <span class="ltx_text ltx_font_typewriter">A</span> and <span class="ltx_text ltx_font_typewriter">B</span> indicate a description authored by a unique participant from our corpus gathering survey&nbsp;(§&nbsp;<a href="#S3.SS2.SSS1" title="3.2.1 Survey Design ‣ 3.2 Gathering A Corpus ‣ 3 Constructing the Model: Employing the Grounded Theory Methodology ‣ Accessible Visualization via Natural Language Descriptions: A Four-Level Model of Semantic Content" class="ltx_ref"><span class="ltx_text ltx_ref_tag">3.2.1</span></a>), while row <span class="ltx_text ltx_font_typewriter">C</span> shows an curated exemplar description from our evaluation&nbsp;(§&nbsp;<a href="#S5.SS1" title="5.1 Evaluation Design ‣ 5 Applying the Model: Evaluating the Effectiveness of Visualization Descriptions ‣ Accessible Visualization via Natural Language Descriptions: A Four-Level Model of Semantic Content" class="ltx_ref"><span class="ltx_text ltx_ref_tag">5.1</span></a>).
        </figcaption>
        <table class="ltx_tabular ltx_centering ltx_guessed_headers ltx_align_middle">
          <thead class="ltx_thead">
            <tr class="ltx_tr">
              <th class="ltx_td ltx_align_justify ltx_align_middle ltx_th ltx_th_column ltx_border_t" style="width:8pt;padding-top:3.472222222222222px;padding-bottom:3.472222222222222px;" colspan="2"><span class="ltx_text ltx_font_smallcaps">visualization</span></th>
              <th class="ltx_td ltx_align_justify ltx_align_middle ltx_th ltx_th_column ltx_border_t" style="width:256.1pt;padding-top:3.472222222222222px;padding-bottom:3.472222222222222px;"><span class="ltx_text ltx_wrap ltx_font_smallcaps">description</span></th>
            </tr>
          </thead>
          <tbody class="ltx_tbody">
            <tr class="ltx_tr">
              <td class="ltx_td ltx_align_justify ltx_align_middle ltx_border_t" style="padding-top:3.472222222222222px;padding-bottom:3.472222222222222px;">
                <strong class="ltx_text ltx_wrap ltx_font_typewriter ltx_font_bold">A</strong>
              </td>
              <td class="ltx_td ltx_align_justify ltx_align_middle ltx_border_t" style="padding-top:3.472222222222222px;padding-bottom:3.472222222222222px;">
                <strong class="ltx_text ltx_wrap ltx_font_typewriter ltx_font_bold">[bar, easy, journalism]</strong>
                <img src="x34.png" id="S4.T3.g1" class="ltx_graphics" width="215" height="165" alt="Navigate one column to the right for a description of this chart." />
              </td>
              <td class="ltx_td ltx_align_justify ltx_align_middle ltx_border_t" style="padding-top:3.472222222222222px;padding-bottom:3.472222222222222px;">
                <span class="ltx_text ltx_wrap ltx_font_sansserif">[1, L1]&nbsp;<span class="ltx_text" style="background-color:#FFD6B3;">This is a vertical bar chart entitled “COVID-19 mortality rate by age” that plots Mortality rate by Age. Mortality rate is plotted on the vertical y-axis from 0 to 15%. Age is plotted on the horizontal x-axis in bins: 10-19, 20-29, 30-39, 40-49, 50-59, 60-69, 70-79, 80+.</span>
                  [2, L2]&nbsp;<span class="ltx_text" style="background-color:#94DE94;">The highest COVID-19 mortality rate is in the 80+ age range, while the lowest mortality rate is in 10-19, 20-29, 30-39, sharing the same rate.</span>
                  [3, L3]&nbsp;<span class="ltx_text" style="background-color:#FFFFA8;">COVID-19 mortality rate does not linearly correspond to the demographic age.</span>
                  [4, L3]&nbsp;<span class="ltx_text" style="background-color:#FFFFA8;">The mortality rate increases with age, especially around 40-49 years and upwards.</span>
                  [5, L4]&nbsp;<span class="ltx_text" style="color:#FFFFFF;background-color:#2B82D4;">This relates to people’s decrease in their immunity and the increase of co-morbidity with age.</span>
                  [6, L3]&nbsp;<span class="ltx_text" style="background-color:#FFFFA8;">The mortality rate increases exponentially with older people.</span>
                  [7, L2]&nbsp;<span class="ltx_text" style="background-color:#94DE94;">There is no difference in the mortality rate in the range between the age of 10 and 39.</span>
                  [8, L3]&nbsp;<span class="ltx_text" style="background-color:#FFFFA8;">The range of ages between 60 and 80+ are more affected by COVID-19.</span>
                  [9, L4]&nbsp;<span class="ltx_text" style="color:#FFFFFF;background-color:#2B82D4;">We can observe that the mortality rate is higher starting at 50 years old due to many complications prior.</span>
                  [10, L3]&nbsp;<span class="ltx_text" style="background-color:#FFFFA8;">As we decrease the age, we also decrease the values in mortality by a lot, almost to none.</span></span>
              </td>
            </tr>
            <tr class="ltx_tr">
              <td class="ltx_td ltx_align_justify ltx_align_middle ltx_border_t" style="width:5.7pt;padding-top:3.472222222222222px;padding-bottom:3.472222222222222px;">
                <strong class="ltx_text ltx_wrap ltx_font_typewriter ltx_font_bold">B</strong>
              </td>
              <td class="ltx_td ltx_align_justify ltx_align_middle ltx_border_t" style="width:213.4pt;padding-top:3.472222222222222px;padding-bottom:3.472222222222222px;">
                <strong class="ltx_text ltx_wrap ltx_font_typewriter ltx_font_bold">[line, medium, business]</strong>
                <img src="x35.png" id="S4.T3.g2" class="ltx_graphics" width="222" height="193" alt="Navigate one column to the right for a description of this chart." />
              </td>
              <td class="ltx_td ltx_align_justify ltx_align_middle ltx_border_t" style="width:256.1pt;padding-top:3.472222222222222px;padding-bottom:3.472222222222222px;">
                <span class="ltx_text ltx_wrap ltx_font_sansserif">[1, L1]&nbsp;<span class="ltx_text" style="background-color:#FFD6B3;">This is a multi-line chart entitled “Big Tech Stock Prices” that plots price by date. The corporations include AAPL (Apple), AMZN (Amazon), GOOG (Google), IBM (IBM), and MSFT (Microsoft). The years are plotted on the horizontal x-axis from 2000 to 2010 with an increment of 2 years. The prices are plotted on the vertical y-axis from 0 to 800 with an increment of 200.</span>
                  [2, L2]&nbsp;<span class="ltx_text" style="background-color:#94DE94;">GOOG has the greatest price over time. MSFT has the lowest price over time.</span>
                  [3, L3]&nbsp;<span class="ltx_text" style="background-color:#FFFFA8;">Prices of particular Big Tech corporations seem to fluctuate but nevertheless increase over time. Years 2008-2009 are exceptions as we can see an extreme drop in prices of all given corporations.</span>
                  [4, L4]&nbsp;<span class="ltx_text" style="color:#FFFFFF;background-color:#2B82D4;">The big drop in prices was caused by financial crisis of 2007-2008. The crisis culminated with the bankruptcy of Lehman Brothers on September 15, 2008 and an international banking crisis.</span>
                  [5, L4]&nbsp;<span class="ltx_text" style="color:#FFFFFF;background-color:#2B82D4;">At the beginning of 2008, every of this stock price went down, likely due to the financial crisis.</span>
                  [6, L3]&nbsp;<span class="ltx_text" style="background-color:#FFFFA8;">Then they have risen again and dropped again, more so than previously.</span>
                  [7, L2]&nbsp;<span class="ltx_text" style="background-color:#94DE94;">GOOG has the highest price over the years. MSFT has the lowest price over the years.</span>
                  [8, L3]&nbsp;<span class="ltx_text" style="background-color:#FFFFA8;">GOOG quickly became the richest one of the Big Tech corporations.</span>
                  [9, L4]&nbsp;<span class="ltx_text" style="color:#FFFFFF;background-color:#2B82D4;">GOOG had experienced some kind of a crisis in 2009, because their prices drop rapidly, but then rebounded.</span></span>
              </td>
            </tr>
            <tr class="ltx_tr">
              <td class="ltx_td ltx_align_justify ltx_align_middle ltx_border_b ltx_border_t" style="width:5.7pt;padding-top:3.472222222222222px;padding-bottom:3.472222222222222px;">
                <strong class="ltx_text ltx_wrap ltx_font_typewriter ltx_font_bold">C</strong>
              </td>
              <td class="ltx_td ltx_align_justify ltx_align_middle ltx_border_b ltx_border_t" style="width:213.4pt;padding-top:3.472222222222222px;padding-bottom:3.472222222222222px;">
                <strong class="ltx_text ltx_wrap ltx_font_typewriter ltx_font_bold">[scatter, hard, academic]</strong>
                <img src="x36.png" id="S4.T3.g3" class="ltx_graphics" width="377" height="410" alt="Navigate one column to the right for a description of this chart." />
              </td>
              <td class="ltx_td ltx_align_justify ltx_align_middle ltx_border_b ltx_border_t" style="width:256.1pt;padding-top:3.472222222222222px;padding-bottom:3.472222222222222px;">
                <span class="ltx_text ltx_wrap ltx_font_sansserif">[1, L1]&nbsp;<span class="ltx_text" style="background-color:#FFD6B3;">This is a scatter plot entitled “Born in 2016: Life Expectancy Gap by Gender and Income” that plots Women Life Expectancy at Birth (Years) by Men Life Expectancy at Birth (Years). The Women Life Expectancy at Birth is plotted on the vertical y-axis from 40 to 90 years. The Men Life Expectancy at Birth is plotted on the horizontal x-axis from 40 to 90 years. High Income Countries are plotted in dark green. Low Income Countries are plotted in light green. A 45 degree line from the origin represents Equal Life Expectancy.</span>
                  [2, L2]&nbsp;<span class="ltx_text" style="background-color:#94DE94;">For low income countries, the average life expectancy is 60 years for men and 65 years for women. For high income countries, the average life expectancy is 77 years for men and 82 years for women.</span>
                  [3, L3]&nbsp;<span class="ltx_text" style="background-color:#FFFFA8;">Overall, women have a slightly higher life expectancy than men. Women live around 5 to 10 years longer than men. The low income countries are more scattered than the high income countries. There is a visible gap between high and low income countries, indicated by the Income-Age Divide line.</span>
                  [4, L4]&nbsp;<span class="ltx_text" style="color:#FFFFFF;background-color:#2B82D4;">People living in low-income countries tend to have a lower life expectancy than the people living in high-income countries, likely due to many societal factors, including access to healthcare, food, other resources, and overall quality of life. People who live in lower income countries are more likely to experience deprivation and poverty, which can cause related health problems.</span>
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </figure>
    </section>
    <section id="S4.SS3" class="ltx_subsection">
      <h3 class="ltx_title ltx_title_subsection" id="H-S4.SS3">
        <span class="ltx_tag ltx_tag_subsection">4.3 </span>Level 3: Perceptual and Cognitive Phenomena</h3>
      <div id="S4.SS3.p1" class="ltx_para">
        <p class="ltx_p">At the third level, there are sentences whose semantic content refers to perceptual and cognitive phenomena appearing in the visual representation of the data.
          When compared to, and defended against, other forms of data analysis (e.g., purely mathematical or statistical methods), visualization is often argued to confer some unique benefit to human readers.
          That is, visualizations do not only “report” descriptive statistics of the data (as in Level 2), they also <emph class="ltx_emph ltx_font_italic">show</emph> their readers something <emph class="ltx_emph ltx_font_italic">more</emph>: they surface unforeseen trends, convey complex multi-faceted patterns, and identify noteworthy exceptions that aren’t readily apparent through non-visual methods of analysis (cf., Anscombe’s Quartet or the Datasaurus Dozen&nbsp;<cite class="ltx_cite ltx_citemacro_cite">[<a href="#bib.bib108" title="Same Stats, Different Graphs: Generating Datasets with Varied Appearance and Identical Statistics through Simulated Annealing" class="ltx_ref">70</a>]</cite>).
          Level 3 sentences are comprised of content that refers to these perceptual and cognitive phenomena, usually articulated in “natural”-sounding (rather than templatized) language.
          Consider the following examples (Table&nbsp;<a href="#S4.T3" title="Table 3 ‣ 4.2 Level 2: Statistical Concepts and Relations ‣ 4 A Four-Level Model of Semantic Content ‣ Accessible Visualization via Natural Language Descriptions: A Four-Level Model of Semantic Content" class="ltx_ref"><span class="ltx_text ltx_ref_tag">3</span></a>.B.3 and <a href="#S4.T3" title="Table 3 ‣ 4.2 Level 2: Statistical Concepts and Relations ‣ 4 A Four-Level Model of Semantic Content ‣ Accessible Visualization via Natural Language Descriptions: A Four-Level Model of Semantic Content" class="ltx_ref"><span class="ltx_text ltx_ref_tag">3</span></a>.C.3, respectively).</p>
        <blockquote class="ltx_quote">
          <p class="ltx_p"><span class="ltx_text ltx_font_sansserif" style="font-size:90%;background-color:#FFFFA8;">Prices of particular Big Tech corporations seem to fluctuate but nevertheless increase over time. Years 2008-2009 are exceptions as we can see an extreme drop in prices of all given corporations.</span><span class="ltx_text" style="font-size:90%;"></span></p>
        </blockquote>
      </div>
      <div id="S4.SS3.p2" class="ltx_para">
        <blockquote class="ltx_quote">
          <p class="ltx_p"><span class="ltx_text ltx_font_sansserif" style="font-size:90%;background-color:#FFFFA8;">The low income countries are more scattered than the high income countries. There is a visible gap between high and low income countries, indicated by the Income-Age Divide line.</span><span class="ltx_text" style="font-size:90%;"></span></p>
        </blockquote>
      </div>
      <div id="S4.SS3.p3" class="ltx_para ltx_noindent">
        <p class="ltx_p">These sentences convey the “overall gist” of complex trends and patterns (e.g., stock prices “seem to fluctuate but nevertheless increase”), synthesize multiple trends to identify exceptions (e.g., “years 2008-2009 are exceptions as we can see an extreme drop” of multiple graphed lines at that point in time), and do so in “natural”-sounding language, by referencing commonplace concepts (such as “fluctuate”, “extreme drop”, “visible gap”).
          N.b., “natural”-sounding articulation is necessary but insufficient for Level 3 peoplehip, as it is also possible to articulate Level 1 or 2 content in a non-templatized fashion&nbsp;(§&nbsp;<a href="#S3.SS2.SSS2" title="3.2.2 Survey Results ‣ 3.2 Gathering A Corpus ‣ 3 Constructing the Model: Employing the Grounded Theory Methodology ‣ Accessible Visualization via Natural Language Descriptions: A Four-Level Model of Semantic Content" class="ltx_ref"><span class="ltx_text ltx_ref_tag">3.2.2</span></a>).</p>
      </div>
      <div id="S4.SS3.p4" class="ltx_para">
        <p class="ltx_p"><emph class="ltx_emph ltx_font_bold ltx_font_italic">Computational Considerations.</emph>
          At Level 3, we begin to reach and exceed the limits of present-day state-of-the-art automatic methods.
          While there exist “off-the-shelf” statistical packages for computing basic trends and predictions in a dataset (e.g., correlations, polynomial regressions, statistical inferences), visualizations allow us to perceive and articulate complex trends for which there may exist no line of “best fit”.
          While automatic methods may eventually approach (or exceed) human capabilities on well-defined tasks&nbsp;<cite class="ltx_cite ltx_citemacro_cite">[<a href="#bib.bib54" title="Chart-to-Text: Generating Natural Language Descriptions for Charts by Adapting the Transformer Model" class="ltx_ref">78</a>]</cite>, for now Level 3 semantic content is likely generated via human (rather than machine) perception and cognition&nbsp;<cite class="ltx_cite ltx_citemacro_cite">[<a href="#bib.bib17" title="Guiding Novice Web Workers in Making Image Descriptions Using Templates" class="ltx_ref">72</a>]</cite>.
          Taking inspiration from the “mind-independent” versus “mind-dependent” ontological distinction&nbsp;<cite class="ltx_cite ltx_citemacro_cite">[<a href="#bib.bib137" title="Mind-Dependent Kinds" class="ltx_ref">4</a>]</cite>, we define sentences at Levels 1 and 2 as <emph class="ltx_emph ltx_font_italic">perceiver-independent</emph> (i.e., their content can be generated independently of human or machine perception, without reference to the visualization), while sentences at Level 3 are <emph class="ltx_emph ltx_font_italic">perceiver-dependent</emph> (i.e., their content requires a perceiver of some sort; likely a human, although machine perception may increasingly suffice for generating Level 3 content).
          Table&nbsp;<a href="#S4.T2" title="Table 2 ‣ 4 A Four-Level Model of Semantic Content ‣ Accessible Visualization via Natural Language Descriptions: A Four-Level Model of Semantic Content" class="ltx_ref"><span class="ltx_text ltx_ref_tag">2</span></a> summarizes this distinction.
        </p>
      </div>
    </section>
    <section id="S4.SS4" class="ltx_subsection">
      <h3 class="ltx_title ltx_title_subsection" id="H-S4.SS4">
        <span class="ltx_tag ltx_tag_subsection">4.4 </span>Level 4: Contextual and Domain-Specific Insights</h3>
      <div id="S4.SS4.p1" class="ltx_para">
        <p class="ltx_p">Finally, at the fourth level, there are sentences whose semantic content refers to contextual and domain-specific knowledge and experience.
          Consider the following two examples (Table&nbsp;<a href="#S4.T3" title="Table 3 ‣ 4.2 Level 2: Statistical Concepts and Relations ‣ 4 A Four-Level Model of Semantic Content ‣ Accessible Visualization via Natural Language Descriptions: A Four-Level Model of Semantic Content" class="ltx_ref"><span class="ltx_text ltx_ref_tag">3</span></a>.B.4 and&nbsp;<a href="#S4.T3" title="Table 3 ‣ 4.2 Level 2: Statistical Concepts and Relations ‣ 4 A Four-Level Model of Semantic Content ‣ Accessible Visualization via Natural Language Descriptions: A Four-Level Model of Semantic Content" class="ltx_ref"><span class="ltx_text ltx_ref_tag">3</span></a>.C.4).</p>
        <blockquote class="ltx_quote">
          <p class="ltx_p"><span class="ltx_text ltx_font_sansserif" style="font-size:90%;color:#FFFFFF;background-color:#2B82D4;">The big drop in prices was caused by financial crisis of 2007-2008. The crisis culminated with the bankruptcy of Lehman Brothers on September 15, 2008 and an international banking crisis.</span><span class="ltx_text" style="font-size:90%;"></span></p>
        </blockquote>
      </div>
      <div id="S4.SS4.p2" class="ltx_para">
        <blockquote class="ltx_quote">
          <p class="ltx_p"><span class="ltx_text ltx_font_sansserif" style="font-size:90%;color:#FFFFFF;background-color:#2B82D4;">People living in low-income countries tend to have a lower life expectancy than the people living in high-income countries, likely due to many societal factors, including access to healthcare, food, other resources, and overall quality of life.</span><span class="ltx_text" style="font-size:90%;"></span></p>
        </blockquote>
      </div>
      <div id="S4.SS4.p3" class="ltx_para ltx_noindent">
        <p class="ltx_p">These sentences convey social and political explanations for an observed trend that depends on an individual reader’s subjective knowledge about particular world events: the 2008 financial crisis and global socio-economic trends, respectively.
          This semantic content is characteristic of what is often referred to as “insight” in visualization research.
          Although lacking a precise and agreed-upon definition&nbsp;<cite class="ltx_cite ltx_citemacro_cite">[<a href="#bib.bib34" title="What are Data Insights to Professional Visualization Users?" class="ltx_ref">60</a>, <a href="#bib.bib9" title="Extracting Top-K Insights from Multi-dimensional Data" class="ltx_ref">95</a>, <a href="#bib.bib30" title="Toward Measuring Visualization Insight" class="ltx_ref">76</a>, <a href="#bib.bib29" title="Defining Insight for Visual Analytics" class="ltx_ref">20</a>, <a href="#bib.bib33" title="Characterizing Automated Data Insights" class="ltx_ref">61</a>]</cite>, an insight is often an observation about the data that is complex, deep, qualitative, unexpected, and relevant&nbsp;<cite class="ltx_cite ltx_citemacro_cite">[<a href="#bib.bib3" title="Understanding and Characterizing Insights: How Do People Gain Insights Using Information Visualization?" class="ltx_ref">108</a>]</cite>.
          Critically, insights depend on individual perceivers, their subjective knowledge, and domain-expertise.
          Level 4 is where the breadth of an individual reader’s knowledge and experience is brought to bear in articulating something “insightful” about the visualized data.</p>
      </div>
      <div id="S4.SS4.p4" class="ltx_para">
        <p class="ltx_p"><emph class="ltx_emph ltx_font_bold ltx_font_italic">Computational Considerations.</emph>
          As with Levels 3, we say that Level 4 semantic content is perceiver-dependent, but in a stronger sense.
          This is because (setting aside consideration of hypothetical future “artificial general intelligence”) generating Level 4 semantic content is at-present a uniquely human endeavor.
          Doing so involves synthesizing background knowledge about the world (such as geographic, cultural, and political relationships between countries), contextual knowledge about current events (e.g., the fact that there was a global recession in 2008), and domain-specific knowledge (e.g., expertise in a particular field of research or scholarship).
          However, bespoke systems for narrowly-scoped domains (e.g., those auto-generating stock chart annotations using a corpus of human-authored news articles&nbsp;<cite class="ltx_cite ltx_citemacro_cite">[<a href="#bib.bib107" title="Contextifier: automatic generation of annotated stock visualizations" class="ltx_ref">45</a>]</cite>) suggest that some Level 4 content might be feasibly generated sooner rather than later.</p>
      </div>
      <div id="S4.SS4.p5" class="ltx_para">
        <p class="ltx_p">Lastly, we briefly note that data-driven predictions can belong to either Level 2, 3, or 4, depending on the semantic content contained therein.
          For example: a point-wise prediction at Level 2 (e.g., computing a stock’s future expected price using the backing dataset); a prediction about future overall trends at Level 3 (e.g., observing that a steadily increasing stock price will likely continue to rise); a prediction involving contextual or domain-specific knowledge at Level 4 (e.g., the outcome of an election using a variety of poll data, social indicators, and political intuition).
        </p>
      </div>
    </section>
  </section>
  <section id="S5" class="ltx_section">
    <h2 class="ltx_title ltx_title_section" id="H-S5">
      <span class="ltx_tag ltx_tag_section">5 </span>Applying the Model: Evaluating the Effectiveness of Visualization Descriptions</h2>
    <div id="S5.p1" class="ltx_para">
      <p class="ltx_p">The foregoing conceptual model provides a means of making structured comparisons between different levels of semantic content and reader groups.
        To demonstrate how it can be applied to evaluate the effectiveness of visualization descriptions (i.e., whether or not they effectively convey meaningful information, and for whom), we conducted a mixed-methods evaluation in which 30 blind and 90 sighted readers first ranked the usefulness of descriptions authored at varying levels of semantic content, and then completed an open-ended questionnaire.</p>
    </div>
    <section id="S5.SS1" class="ltx_subsection">
      <h3 class="ltx_title ltx_title_subsection" id="H-S5.SS1">
        <span class="ltx_tag ltx_tag_subsection">5.1 </span>Evaluation Design</h3>
      <div id="S5.SS1.p1" class="ltx_para">
        <p class="ltx_p">We selected 15 visualizations for the evaluation, curated to be representative of the categories from our prior survey&nbsp;(§&nbsp;<a href="#S3" title="3 Constructing the Model: Employing the Grounded Theory Methodology ‣ Accessible Visualization via Natural Language Descriptions: A Four-Level Model of Semantic Content" class="ltx_ref"><span class="ltx_text ltx_ref_tag">3</span></a>).
          Specifically, we selected 5 visualizations for each of the three dimensions: <emph class="ltx_emph ltx_font_italic">type</emph> (bar, line, scatter), <emph class="ltx_emph ltx_font_italic">topic</emph> (academic, business, journalism), and <emph class="ltx_emph ltx_font_italic">difficulty</emph> (easy, medium, hard).
          For every visualization, participants were asked to rank the usefulness of 4 different descriptions, each corresponding to one level of semantic content, presented unlabeled and in random order.
          We piloted this rank-choice interface with 10 sighted readers recruited via <emph class="ltx_emph ltx_font_italic">Prolific</emph> and 1 blind reader, a non-academic collaborator proficient with Apple’s VoiceOver screen reader.
          Based on this pilot, we rewrote the study instructions to be more intelligible to both groups of readers, added an introductory example task to the evaluation, and improved the screen reader accessibility of our interface (e.g., by reordering nested <span class="ltx_text ltx_font_smallcaps">dom</span> elements to be more intuitively traversed by screen reader).</p>
      </div>
      <div id="S5.SS1.p2" class="ltx_para">
        <p class="ltx_p">In addition to curating a representative set of visualizations, we also curated descriptions representative of each level of semantic content.
          Participant-authored descriptions from our prior survey often did not contain content from all 4 levels or, if they did, this content was interleaved in a way that was not cleanly-separable for the purpose of a ranking task (Fig.&nbsp;<a href="#S3.F1" title="Figure 1 ‣ 3.2.1 Survey Design ‣ 3.2 Gathering A Corpus ‣ 3 Constructing the Model: Employing the Grounded Theory Methodology ‣ Accessible Visualization via Natural Language Descriptions: A Four-Level Model of Semantic Content" class="ltx_ref"><span class="ltx_text ltx_ref_tag">1</span></a>).
          Thus, for this evaluation, we curated and collated sentences from multiple participant-authored descriptions to create exemplar descriptions, such that each text chunk contained <emph class="ltx_emph ltx_font_italic">only</emph> content belonging to a single semantic content level.
          Table&nbsp;<a href="#S4.T3" title="Table 3 ‣ 4.2 Level 2: Statistical Concepts and Relations ‣ 4 A Four-Level Model of Semantic Content ‣ Accessible Visualization via Natural Language Descriptions: A Four-Level Model of Semantic Content" class="ltx_ref"><span class="ltx_text ltx_ref_tag">3</span></a>.C shows one such exemplar description, whereas Table&nbsp;<a href="#S4.T3" title="Table 3 ‣ 4.2 Level 2: Statistical Concepts and Relations ‣ 4 A Four-Level Model of Semantic Content ‣ Accessible Visualization via Natural Language Descriptions: A Four-Level Model of Semantic Content" class="ltx_ref"><span class="ltx_text ltx_ref_tag">3</span></a>.A and B show the original un-collated descriptions.
          For each ranking task, readers were presented with a brief piece of contextualizing text, such as the following.
        </p>
        <blockquote class="ltx_quote ltx_displayquote">
          <p class="ltx_p"><span class="ltx_text ltx_quote">
            “<emph class="ltx_emph ltx_font_italic">Suppose that you are reading an academic paper about how life expectancy differs for people of different genders from countries with different levels of income. You encounter the following visualization.</emph> [Table&nbsp;<a href="#S4.T3" title="Table 3 ‣ 4.2 Level 2: Statistical Concepts and Relations ‣ 4 A Four-Level Model of Semantic Content ‣ Accessible Visualization via Natural Language Descriptions: A Four-Level Model of Semantic Content" class="ltx_ref"><span class="ltx_text ltx_ref_tag">3</span></a>.C]
              <emph class="ltx_emph ltx_font_italic">Which content do you think would be most useful to include in a textual description of this visualization?”</emph></span></p>
        </blockquote>
        <p class="ltx_p">Additionally, blind readers were presented with a brief text noting that the hypothetically-encountered visualization was inaccessible via screen reader technology.
          In contrast to prior work, which has evaluated chart descriptions in terms of “efficiency,” “informativeness,” and “clarity”&nbsp;<cite class="ltx_cite ltx_citemacro_cite">[<a href="#bib.bib45" title="Effective Practices for Description of Science Content within Digital Talking Books" class="ltx_ref">39</a>, <a href="#bib.bib54" title="Chart-to-Text: Generating Natural Language Descriptions for Charts by Adapting the Transformer Model" class="ltx_ref">78</a>]</cite>, we intentionally left the definition of “useful” open to the reader’s interpretation.
          We hypothesize that “useful” descriptions may not be necessarily efficient (i.e., they may require lengthy explanation or background context), and that both informativeness and clarity are constituents of usefulness.
          In short, ranking “usefulness” affords a holistic evaluation metric.
          Participants assigned usefulness rankings to each of the 4 descriptions by selecting corresponding radio buttons, labeled 1 (least useful) to 4 (most useful).
          In addition to these 4 descriptions, we included a 5th choice as an “attention check”: a sentence whose content was entirely irrelevant to the chart to ensure participants were reading each description prior to ranking them.
          If a participant did not rank the attention check as least useful, we filtered out their response from our final analysis.
          We include the evaluation interfaces and questions with the Supplemental Material.</p>
      </div>
    </section>
    <section id="S5.SS2" class="ltx_subsection">
      <h3 class="ltx_title ltx_title_subsection" id="H-S5.SS2">
        <span class="ltx_tag ltx_tag_subsection">5.2 </span>Participants</h3>
      <div id="S5.SS2.p1" class="ltx_para">
        <p class="ltx_p">Participants consisted of two reader groups: 90 sighted readers recruited through the <emph class="ltx_emph ltx_font_italic">Prolific</emph> platform, and 30 blind readers recruited through our friends in the blind community and through a call for participation sent out via Twitter (n.b., in accessibility research, it is common to compare blind and sighted readers recruited through these means&nbsp;<cite class="ltx_cite ltx_citemacro_cite">[<a href="#bib.bib56" title="The Effects of ”Not Knowing What You Don’t Know” on Web Accessibility for Blind Web Users" class="ltx_ref">14</a>]</cite>).</p>
      </div>
      <section id="S5.SS2.SSS1" class="ltx_subsubsection">
        <h4 class="ltx_title ltx_title_subsubsection" id="H-S5.SS2.SSS1">
          <span class="ltx_tag ltx_tag_subsubsection">5.2.1 </span>Participant Recruitment</h4>
        <div id="S5.SS2.SSS1.p1" class="ltx_para">
          <p class="ltx_p">For sighted readers qualifications for participation included English language proficiency and no color vision deficiency, and blind readers were expected to be proficient with a screen reader, such as  <a href="#id14"><span href="#id14" title="Job Access With Speech" class="ltx_glossaryref"><span class="ltx_text ltx_glossary_long">Job Access With Speech</span></span></a> (<a href="#id14"><abbr href="#id14" title="Job Access With Speech" class="ltx_glossaryref"><span class="ltx_text ltx_glossary_short">JAWS</span></abbr></a>),  <a href="#id28"><span href="#id28" title="NonVisual Desktop Access" class="ltx_glossaryref"><span class="ltx_text ltx_glossary_long">NonVisual Desktop Access</span></span></a> (<a href="#id28"><abbr href="#id28" title="NonVisual Desktop Access" class="ltx_glossaryref"><span class="ltx_text ltx_glossary_short">NVDA</span></abbr></a>), or Apple’s VoiceOver.
            Sighted readers were compensated at a rate of $10-12 per hour, for an approximately 20-minute task.
            Blind readers were compensated at a rate of $50 per hour, for an approximately 1-hour task.
            This difference in task duration was for two reasons.
            First, participants recruited through <emph class="ltx_emph ltx_font_italic">Prolific</emph> are usually not accustomed to completing lengthy tasks — our prior surveys and pilots suggested that these participants might contribute low-quality responses on “click-through” tasks if the task duration exceeded 15–20 minutes — and thus we asked each participant to rank only 5 of the 15 visualizations at a time.
            Second, given the difficulty of recruiting blind readers proficient with screen readers, we asked each blind participant to rank all 15 visualizations, and compensated them at a rate commensurate with their difficult-to-find expertise&nbsp;<cite class="ltx_cite ltx_citemacro_cite">[<a href="#bib.bib24" title="Sociotechnical Considerations for Accessible Visualization Design" class="ltx_ref">67</a>]</cite>.
            In this way, we recruited sufficient numbers of readers to ensure that each of the 15 visualization ranking tasks would be completed by 30 participants from both reader groups.</p>
        </div>
      </section>
      <section id="S5.SS2.SSS2" class="ltx_subsubsection">
        <h4 class="ltx_title ltx_title_subsubsection" id="H-S5.SS2.SSS2">
          <span class="ltx_tag ltx_tag_subsubsection">5.2.2 </span>Participant Demographics</h4>
        <div id="S5.SS2.SSS2.p1" class="ltx_para">
          <p class="ltx_p">Among the 30 blind participants, 53% (n=16) reported their gender as male, 36% (n=11) as female, and 3 participants “preferred not to say.”
            The most common highest level of education attained was a Bachelor’s degree (60%, n=18), and most readers were between 20 – 40 years old (66%, n=20).
            The screen reader technology readers used to complete the study was evenly balanced: VoiceOver (n=10), <a href="#id14"><abbr href="#id14" title="Job Access With Speech" class="ltx_glossaryref"><span class="ltx_text ltx_glossary_short">JAWS</span></abbr></a> (n=10), <a href="#id28"><abbr href="#id28" title="NonVisual Desktop Access" class="ltx_glossaryref"><span class="ltx_text ltx_glossary_short">NVDA</span></abbr></a> (n=9), and “other” (n=1).
            Among the 90 sighted participants, 69% reported their gender as male (n=62) and 31% as female (n=28).
            The most common highest level of education attained was a high school diploma (42%, n=38) followed by a Bachelor’s degree (40%, n=36), and most sighted readers were between 20 – 30 years old (64%, n=58).</p>
        </div>
        <div id="S5.SS2.SSS2.p2" class="ltx_para">
          <p class="ltx_p">On a 7-point Likert scale [1=strongly disagree, 7=strongly agree], blind participants reported having “a good understanding of data visualization concepts” (<math id="S5.SS2.SSS2.p2.m1" class="ltx_Math" alttext="\mu=6.3" display="inline"><mrow><mi>μ</mi><mo>=</mo><mn>6.3</mn></mrow></math>, <math id="S5.SS2.SSS2.p2.m2" class="ltx_Math" alttext="\sigma=1.03" display="inline"><mrow><mi>σ</mi><mo>=</mo><mn>1.03</mn></mrow></math>) as well as “a good understanding of statistical concepts and terminology” (<math id="S5.SS2.SSS2.p2.m3" class="ltx_Math" alttext="\mu=5.90" display="inline"><mrow><mi>μ</mi><mo>=</mo><mn>5.90</mn></mrow></math>, <math id="S5.SS2.SSS2.p2.m4" class="ltx_Math" alttext="\sigma=1.01" display="inline"><mrow><mi>σ</mi><mo>=</mo><mn>1.01</mn></mrow></math>). Sighted participants reported similar levels of understanding: (<math id="S5.SS2.SSS2.p2.m5" class="ltx_Math" alttext="\mu=6.7" display="inline"><mrow><mi>μ</mi><mo>=</mo><mn>6.7</mn></mrow></math>, <math id="S5.SS2.SSS2.p2.m6" class="ltx_Math" alttext="\sigma=0.73" display="inline"><mrow><mi>σ</mi><mo>=</mo><mn>0.73</mn></mrow></math>) and (<math id="S5.SS2.SSS2.p2.m7" class="ltx_Math" alttext="\mu=5.67" display="inline"><mrow><mi>μ</mi><mo>=</mo><mn>5.67</mn></mrow></math>, <math id="S5.SS2.SSS2.p2.m8" class="ltx_Math" alttext="\sigma=1.06" display="inline"><mrow><mi>σ</mi><mo>=</mo><mn>1.06</mn></mrow></math>), respectively.
            Sighted participants also considered themselves to be “proficient at reading data visualizations” (<math id="S5.SS2.SSS2.p2.m9" class="ltx_Math" alttext="\mu=5.97" display="inline"><mrow><mi>μ</mi><mo>=</mo><mn>5.97</mn></mrow></math>, <math id="S5.SS2.SSS2.p2.m10" class="ltx_Math" alttext="\sigma=0.89" display="inline"><mrow><mi>σ</mi><mo>=</mo><mn>0.89</mn></mrow></math>) and were able to “read and understand all of the visualizations presented in this study” (<math id="S5.SS2.SSS2.p2.m11" class="ltx_Math" alttext="\mu=6.44" display="inline"><mrow><mi>μ</mi><mo>=</mo><mn>6.44</mn></mrow></math>, <math id="S5.SS2.SSS2.p2.m12" class="ltx_Math" alttext="\sigma=0.71" display="inline"><mrow><mi>σ</mi><mo>=</mo><mn>0.71</mn></mrow></math>).</p>
        </div>
        <figure id="S5.T4" class="ltx_table">
          <figcaption class="ltx_caption ltx_centering"><span class="ltx_tag ltx_tag_table">Table 4: </span>
            (Upper Subtable) Rankings [1=least useful, 4=most useful] of semantic content at each level of the model, for blind and sighted readers.
            The scale encodes the number of times a given level was assigned a given rank by a reader.
            Dotted contour lines delineate Regions with a threshold equal to <math id="S5.T4.m2" class="ltx_Math" alttext="\mu+\frac{\sigma}{2}" display="inline"><mrow><mi>μ</mi><mo>+</mo><mfrac><mi>σ</mi><mn>2</mn></mfrac></mrow></math>, each labeled with a capital letter A – F.
            (Lower Subtable)
            Shaded cells indicate significant ranking differences pair-wise between levels.
          </figcaption>
          <table class="ltx_tabular ltx_centering ltx_guessed_headers ltx_align_middle">
            <caption>Upper Subtable</caption>
            <thead class="ltx_thead">
              <tr class="ltx_tr">
                <th class="ltx_td ltx_align_center ltx_th ltx_th_column ltx_border_t" style="padding:3.472222222222222px 2.0pt;"><span class="ltx_text ltx_font_smallcaps" style="background-color:#EDEBFF;">blind readers</span></th>
                <th class="ltx_td ltx_align_center ltx_th ltx_th_column ltx_border_t" style="padding:3.472222222222222px 2.0pt;"><span class="ltx_text ltx_font_smallcaps" style="background-color:#EDEDED;">sighted readers</span></th>
              </tr>
            </thead>
            <tbody class="ltx_tbody">
              <tr class="ltx_tr">
                <td class="ltx_td ltx_align_middle ltx_border_t ltx_border_b" style="padding:3.472222222222222px 2.0pt;"><img src="x37.png" id="S5.T4.g1" class="ltx_graphics" width="238" height="192" alt="Blind readers' rankings heatmap. Visit the following link for a data table containing the heatmap values. Region A corresponds to blind readers ranking Level 1 as least useful. Region B corresponds to blind readers ranking Level 4 as least useful. Region C corresponds to blind readers ranking Level 2 and Level 3 as most useful." />
                  <a class="ltx_align_center" href="./table-blind-rankings.html" target="_">Data Table: Blind Readers' Rankings</a>
                </td>
                <td class="ltx_td ltx_align_middle ltx_border_t ltx_border_b" style="padding:3.472222222222222px 2.0pt;"><img src="x38.png" id="S5.T4.g2" class="ltx_graphics" width="238" height="192" alt="Sighted readers' rankings heatmap. Visit the following link for a data table containing the heatmap values. Region D corresponds to sighted readers ranking Level 1 as least useful. Region E corresponds to sighted readers ranking Level 2 as second least useful. Region F corresponds to sighted readers ranking Level 3 as second most useful and Level 4 as most useful." />
                  <a class="ltx_align_center" href="./table-sighted-rankings.html" target="_">Data Table: Sighted Readers' Rankings</a>
                </td>
              </tr>
            </tbody>
          </table>
          <br>
          <table class="ltx_tabular ltx_centering ltx_align_middle">
            <caption>Lower Subtable</caption>
            <tbody class="ltx_tbody">
              <tr class="ltx_tr">
                <td class="ltx_td ltx_align_center ltx_border_r ltx_border_t" style="padding:3.472222222222222px 2.0pt;"><span class="ltx_text ltx_font_smallcaps">level comparisons</span></td>
                <td class="ltx_td ltx_align_center ltx_border_r ltx_border_t" style="padding:3.472222222222222px 2.0pt;">
                  <!-- <math id="S5.T4.m3" class="ltx_Math" alttext="1\times 2" display="inline"><mrow><mn>1</mn><mo>×</mo><mn>2</mn></mrow></math> -->
                  L1 by L2
                </td>
                <td class="ltx_td ltx_align_center ltx_border_r ltx_border_t" style="padding:3.472222222222222px 2.0pt;">
                  <!-- <math id="S5.T4.m4" class="ltx_Math" alttext="1\times 3" display="inline"><mrow><mn>1</mn><mo>×</mo><mn>3</mn></mrow></math> -->
                  L1 by L3
                </td>
                <td class="ltx_td ltx_align_center ltx_border_r ltx_border_t" style="padding:3.472222222222222px 2.0pt;">
                  <!-- <math id="S5.T4.m5" class="ltx_Math" alttext="1\times 4" display="inline"><mrow><mn>1</mn><mo>×</mo><mn>4</mn></mrow></math> -->
                  L1 by L4
                </td>
                <td class="ltx_td ltx_align_center ltx_border_r ltx_border_t" style="padding:3.472222222222222px 2.0pt;">
                  <!-- <math id="S5.T4.m6" class="ltx_Math" alttext="2\times 3" display="inline"><mrow><mn>2</mn><mo>×</mo><mn>3</mn></mrow></math> -->
                  L2 by L3
                </td>
                <td class="ltx_td ltx_align_center ltx_border_r ltx_border_t" style="padding:3.472222222222222px 2.0pt;">
                  <!-- <math id="S5.T4.m7" class="ltx_Math" alttext="2\times 4" display="inline"><mrow><mn>2</mn><mo>×</mo><mn>4</mn></mrow></math> -->
                  L2 by L4
                </td>
                <td class="ltx_td ltx_align_center ltx_border_t" style="padding:3.472222222222222px 2.0pt;">
                  <!-- <math id="S5.T4.m8" class="ltx_Math" alttext="3\times 4" display="inline"><mrow><mn>3</mn><mo>×</mo><mn>4</mn></mrow></math> -->
                  L3 by L4
                </td>
              </tr>
              <tr class="ltx_tr">
                <td class="ltx_td ltx_align_center ltx_border_r ltx_border_t" style="padding:3.472222222222222px 2.0pt;"><span class="ltx_text ltx_font_smallcaps" style="background-color:#EDEBFF;">blind readers</span></td>
                <td class="ltx_td ltx_align_center ltx_border_r ltx_border_t" style="padding:3.472222222222222px 2.0pt; background-color:#fcfcbf;">
                  <math id="S5.T4.m9" class="ltx_Math" alttext="p&lt;0.001" display="inline"><mrow><mi>p</mi><mo>&lt;</mo><mn>0.001</mn></mrow></math>
                </td>
                <td class="ltx_td ltx_align_center ltx_border_r ltx_border_t" style="padding:3.472222222222222px 2.0pt; background-color:#fcfcbf;">
                  <math id="S5.T4.m10" class="ltx_Math" alttext="p&lt;0.001" display="inline"><mrow><mi>p</mi><mo>&lt;</mo><mn>0.001</mn></mrow></math>
                </td>
                <td class="ltx_td ltx_align_center ltx_border_r ltx_border_t" style="padding:3.472222222222222px 2.0pt;"><math id="S5.T4.m11" class="ltx_Math" alttext="p&lt;0.321" display="inline"><mrow><mi>p</mi><mo>&lt;</mo><mn>0.321</mn></mrow></math></td>
                <td class="ltx_td ltx_align_center ltx_border_r ltx_border_t" style="padding:3.472222222222222px 2.0pt;"><math id="S5.T4.m12" class="ltx_Math" alttext="p&lt;0.148" display="inline"><mrow><mi>p</mi><mo>&lt;</mo><mn>0.148</mn></mrow></math></td>
                <td class="ltx_td ltx_align_center ltx_border_r ltx_border_t" style="padding:3.472222222222222px 2.0pt; background-color:#fcfcbf;">
                  <math id="S5.T4.m13" class="ltx_Math" alttext="p&lt;0.001" display="inline"><mrow><mi>p</mi><mo>&lt;</mo><mn>0.001</mn></mrow></math>
                </td>
                <td class="ltx_td ltx_align_center ltx_border_t" style="padding:3.472222222222222px 2.0pt; background-color:#fcfcbf;">
                  <math id="S5.T4.m14" class="ltx_Math" alttext="p&lt;0.001" display="inline"><mrow><mi>p</mi><mo>&lt;</mo><mn>0.001</mn></mrow></math>
                </td>
              </tr>
              <tr class="ltx_tr">
                <td class="ltx_td ltx_align_center ltx_border_b ltx_border_r ltx_border_t" style="padding:3.472222222222222px 2.0pt;"><span class="ltx_text ltx_font_smallcaps" style="background-color:#EDEDED;">sighted readers</span></td>
                <td class="ltx_td ltx_align_center ltx_border_b ltx_border_r ltx_border_t" style="padding:3.472222222222222px 2.0pt; background-color:#fcfcbf;">
                  <math id="S5.T4.m15" class="ltx_Math" alttext="p&lt;0.001" display="inline"><mrow><mi>p</mi><mo>&lt;</mo><mn>0.001</mn></mrow></math>
                </td>
                <td class="ltx_td ltx_align_center ltx_border_b ltx_border_r ltx_border_t" style="padding:3.472222222222222px 2.0pt; background-color:#fcfcbf;">
                  <math id="S5.T4.m16" class="ltx_Math" alttext="p&lt;0.001" display="inline"><mrow><mi>p</mi><mo>&lt;</mo><mn>0.001</mn></mrow></math>
                </td>
                <td class="ltx_td ltx_align_center ltx_border_b ltx_border_r ltx_border_t" style="padding:3.472222222222222px 2.0pt; background-color:#fcfcbf;">
                  <math id="S5.T4.m17" class="ltx_Math" alttext="p&lt;0.001" display="inline"><mrow><mi>p</mi><mo>&lt;</mo><mn>0.001</mn></mrow></math>
                </td>
                <td class="ltx_td ltx_align_center ltx_border_b ltx_border_r ltx_border_t" style="padding:3.472222222222222px 2.0pt; background-color:#fcfcbf;">
                  <math id="S5.T4.m18" class="ltx_Math" alttext="p&lt;0.001" display="inline"><mrow><mi>p</mi><mo>&lt;</mo><mn>0.001</mn></mrow></math>
                </td>
                <td class="ltx_td ltx_align_center ltx_border_b ltx_border_r ltx_border_t" style="padding:3.472222222222222px 2.0pt; background-color:#fcfcbf;">
                  <math id="S5.T4.m19" class="ltx_Math" alttext="p&lt;0.001" display="inline"><mrow><mi>p</mi><mo>&lt;</mo><mn>0.001</mn></mrow></math>
                </td>
                <td class="ltx_td ltx_align_center ltx_border_b ltx_border_t" style="padding:3.472222222222222px 2.0pt;"><math id="S5.T4.m20" class="ltx_Math" alttext="p&lt;0.059" display="inline"><mrow><mi>p</mi><mo>&lt;</mo><mn>0.059</mn></mrow></math></td>
              </tr>
            </tbody>
          </table>
        </figure>
      </section>
    </section>
    <section id="S5.SS3" class="ltx_subsection">
      <h3 class="ltx_title ltx_title_subsection" id="H-S5.SS3">
        <span class="ltx_tag ltx_tag_subsection">5.3 </span>Quantitative Results</h3>
      <div id="S5.SS3.p1" class="ltx_para">
        <p class="ltx_p">Quantitative results for the individual rankings (1,800 per blind and sighted reader groups) are summarized by the heatmaps in Table&nbsp;<a href="#S5.T4" title="Table 4 ‣ 5.2.2 Participant Demographics ‣ 5.2 Participants ‣ 5 Applying the Model: Evaluating the Effectiveness of Visualization Descriptions ‣ Accessible Visualization via Natural Language Descriptions: A Four-Level Model of Semantic Content" class="ltx_ref"><span class="ltx_text ltx_ref_tag">4</span></a> (Upper Subtable), which aggregate the number of times a given content level was assigned a certain rank.
          Dotted lines in both blind and sighted heatmaps delineate regions exceeding a threshold — calculated by taking the mean plus half a standard deviation (<math id="S5.SS3.p1.m1" class="ltx_Math" alttext="\mu+\frac{\sigma}{2}" display="inline"><mrow><mi>μ</mi><mo>+</mo><mfrac><mi>σ</mi><mn>2</mn></mfrac></mrow></math>) resulting in a value of 139 and 136, respectively — and are labeled with a capital letter A – F.</p>
      </div>
      <div id="S5.SS3.p2" class="ltx_para">
        <p class="ltx_p">These results exhibit significant differences between reader groups.
          For both reader groups, using Friedman’s Test (a non-parametric multi-comparison test for rank-order data) the p-value is <math id="S5.SS3.p2.m1" class="ltx_Math" alttext="p&lt;0.001" display="inline"><mrow><mi>p</mi><mo>&lt;</mo><mn>0.001</mn></mrow></math>, so we reject the null hypothesis that the mean rank is the same for all four semantic content levels&nbsp;<cite class="ltx_cite ltx_citemacro_cite">[<a href="#bib.bib73" title="Advanced Nonparametric Tests For Multiple Comparisons In The Design Of Experiments In Computational Intelligence And Data Mining: Experimental Analysis Of Power" class="ltx_ref">37</a>]</cite>.
          Additionally, in Table&nbsp;<a href="#S5.T4" title="Table 4 ‣ 5.2.2 Participant Demographics ‣ 5.2 Participants ‣ 5 Applying the Model: Evaluating the Effectiveness of Visualization Descriptions ‣ Accessible Visualization via Natural Language Descriptions: A Four-Level Model of Semantic Content" class="ltx_ref"><span class="ltx_text ltx_ref_tag">4</span></a> (Lower Subtable), we find significant ranking differences when making pair-wise comparisons between levels, via Nemenyi’s test (a post-hoc test commonly coupled with Friedman’s to make pair-wise comparisons).
          There appears to be strong agreement among sighted readers that higher levels of semantic content are more useful: Levels 3 and 4 are found to be most useful (Region&nbsp;<a href="#S5.T4" title="Table 4 ‣ 5.2.2 Participant Demographics ‣ 5.2 Participants ‣ 5 Applying the Model: Evaluating the Effectiveness of Visualization Descriptions ‣ Accessible Visualization via Natural Language Descriptions: A Four-Level Model of Semantic Content" class="ltx_ref"><span class="ltx_text ltx_ref_tag">4</span></a>.F), while Levels 1 and 2 are least useful (Regions&nbsp;<a href="#S5.T4" title="Table 4 ‣ 5.2.2 Participant Demographics ‣ 5.2 Participants ‣ 5 Applying the Model: Evaluating the Effectiveness of Visualization Descriptions ‣ Accessible Visualization via Natural Language Descriptions: A Four-Level Model of Semantic Content" class="ltx_ref"><span class="ltx_text ltx_ref_tag">4</span></a>.D and &nbsp;<a href="#S5.T4" title="Table 4 ‣ 5.2.2 Participant Demographics ‣ 5.2 Participants ‣ 5 Applying the Model: Evaluating the Effectiveness of Visualization Descriptions ‣ Accessible Visualization via Natural Language Descriptions: A Four-Level Model of Semantic Content" class="ltx_ref"><span class="ltx_text ltx_ref_tag">4</span></a>.E).
          Blind readers agree with each other to a lesser extent, but strong trends are nevertheless apparent.
          In particular, blind readers rank content and Levels 2 and 3 as most useful (Region&nbsp;<a href="#S5.T4" title="Table 4 ‣ 5.2.2 Participant Demographics ‣ 5.2 Participants ‣ 5 Applying the Model: Evaluating the Effectiveness of Visualization Descriptions ‣ Accessible Visualization via Natural Language Descriptions: A Four-Level Model of Semantic Content" class="ltx_ref"><span class="ltx_text ltx_ref_tag">4</span></a>.C), and semantic content at Levels 1 and 4 as least useful (Regions&nbsp;<a href="#S5.T4" title="Table 4 ‣ 5.2.2 Participant Demographics ‣ 5.2 Participants ‣ 5 Applying the Model: Evaluating the Effectiveness of Visualization Descriptions ‣ Accessible Visualization via Natural Language Descriptions: A Four-Level Model of Semantic Content" class="ltx_ref"><span class="ltx_text ltx_ref_tag">4</span></a>.A and &nbsp;<a href="#S5.T4" title="Table 4 ‣ 5.2.2 Participant Demographics ‣ 5.2 Participants ‣ 5 Applying the Model: Evaluating the Effectiveness of Visualization Descriptions ‣ Accessible Visualization via Natural Language Descriptions: A Four-Level Model of Semantic Content" class="ltx_ref"><span class="ltx_text ltx_ref_tag">4</span></a>.B).</p>
      </div>
      <div id="S5.SS3.p3" class="ltx_para">
        <p class="ltx_p">When faceting these rankings by visualization type, topic, or difficulty we did not observe any significant differences, suggesting that both reader groups rank semantic content levels consistently, regardless of how the chart itself may vary.
          Noteworthy for both reader groups, the distribution of rankings for Level 1 is bimodal —– the only level to exhibit this property.
          While a vast majority of both blind and sighted readers rank Level 1 content as least useful, this level is ranked “most useful” in 101 and 87 instances by blind and sighted readers, respectively. This suggests that both reader groups have a more complicated perspective toward descriptions of a chart’s elemental and encoded properties; a finding we explore further by analyzing qualitative data.</p>
      </div>
    </section>
    <section id="S5.SS4" class="ltx_subsection">
      <h3 class="ltx_title ltx_title_subsection" id="H-S5.SS4">
        <span class="ltx_tag ltx_tag_subsection">5.4 </span>Qualitative Results</h3>
      <div id="S5.SS4.p1" class="ltx_para">
        <p class="ltx_p">In a questionnaire, we asked readers to use a 7-point Likert scale [1=strongly disagree, 7=strongly agree] to rate their agreement with a set of statements about their experience with visualizations.
          We also asked them to offer open-ended feedback about which semantic content they found to be most useful and why.
          Here, we summarize the key trends that emerged from these two different forms of feedback, from both <span class="ltx_text" style="background-color:#EDEBFF;">blind readers</span> (BR) and <span class="ltx_text" style="background-color:#EDEDED;">sighted readers</span> (SR).</p>
      </div>
      <section id="S5.SS4.SSS1" class="ltx_subsubsection">
        <h4 class="ltx_title ltx_title_subsubsection" id="H-S5.SS4.SSS1">
          <span class="ltx_tag ltx_tag_subsubsection">5.4.1 </span>Descriptions Are Important to Both Reader Groups</h4>
        <div id="S5.SS4.SSS1.p1" class="ltx_para">
          <p class="ltx_p">All blind readers reported encountering inaccessible visualizations: either multiple times a week (43%, n=13), everyday (20%, n=6), once or twice a month (20%, n=6), or at most once a week (17%, n=5).
            These readers reported primarily encountering these barriers on social media (30%, n=9), on newspaper websites (13%, n=4), and in educational materials (53%, n=16) — but, most often, barriers were encountered in all of the above contexts (53%, n=16).
            Blind readers overwhelmingly agreed with the statements
            “I often feel that important public information is inaccessible to me, because it is only available in a visual format” (<math id="S5.SS4.SSS1.p1.m1" class="ltx_Math" alttext="\mu=6.1" display="inline"><mrow><mi>μ</mi><mo>=</mo><mn>6.1</mn></mrow></math>, <math id="S5.SS4.SSS1.p1.m2" class="ltx_Math" alttext="\sigma=1.49" display="inline"><mrow><mi>σ</mi><mo>=</mo><mn>1.49</mn></mrow></math>), and “Providing textual descriptions of data visualizations is important to me” (<math id="S5.SS4.SSS1.p1.m3" class="ltx_Math" alttext="\mu=6.83" display="inline"><mrow><mi>μ</mi><mo>=</mo><mn>6.83</mn></mrow></math>, <math id="S5.SS4.SSS1.p1.m4" class="ltx_Math" alttext="\sigma=0.38" display="inline"><mrow><mi>σ</mi><mo>=</mo><mn>0.38</mn></mrow></math>).</p>
        </div>
        <div id="S5.SS4.SSS1.p2" class="ltx_para">
          <blockquote class="ltx_quote ltx_displayquote">
            <p class="ltx_p"><span class="ltx_text ltx_quote">
                <span class="ltx_text" style="color:#000000;background-color:#EDEBFF;"><emph class="ltx_emph ltx_font_italic">“I am totally blind, and virtually all data visualizations I encounter are undescribed, and as such are unavailable. This has been acutely made clear on Twitter and in newspapers around the COVID-19 pandemic and the recent U.S. election.
                    Often, visualizations are presented with very little introduction or coinciding text. I feel very left out of the world and left out of the ability to confidently traverse that world. The more data I am unable to access, the more vulnerable and devalued I feel.”</emph></span> (BR5)</span></p>
          </blockquote>
        </div>
        <div id="S5.SS4.SSS1.p3" class="ltx_para ltx_noindent">
          <p class="ltx_p">By contrast, sighted readers neither agreed nor disagreed regarding the inaccessibility of information conveyed visually (<math id="S5.SS4.SSS1.p3.m1" class="ltx_Math" alttext="\mu=4" display="inline"><mrow><mi>μ</mi><mo>=</mo><mn>4</mn></mrow></math>, <math id="S5.SS4.SSS1.p3.m2" class="ltx_Math" alttext="\sigma=1.57" display="inline"><mrow><mi>σ</mi><mo>=</mo><mn>1.57</mn></mrow></math>).
            Similarly, they were split on whether they ever experienced barriers to reading visualizations, with 52% (n=47) reporting that they sometimes do (especially when engaging with a <emph class="ltx_emph ltx_font_italic">new</emph> topic) and 48% (n=43) reporting that they usually do not.
            Nevertheless, sighted readers expressed support for natural language descriptions of visualizations (<math id="S5.SS4.SSS1.p3.m3" class="ltx_Math" alttext="\mu=5.60" display="inline"><mrow><mi>μ</mi><mo>=</mo><mn>5.60</mn></mrow></math>, <math id="S5.SS4.SSS1.p3.m4" class="ltx_Math" alttext="\sigma=1.27" display="inline"><mrow><mi>σ</mi><mo>=</mo><mn>1.27</mn></mrow></math>).
            A possible explanation for this support is that — regardless of whether the visualization is difficult to read — descriptions can still facilitate comprehension. For instance, SR64 noted that <span class="ltx_text" style="color:#000000;background-color:#EDEDED;"><emph class="ltx_emph ltx_font_italic">“textual description requires far less brainpower and can break down a seemingly complex visualization into an easy to grasp overview.”</emph></span></p>
        </div>
      </section>
      <section id="S5.SS4.SSS2" class="ltx_subsubsection">
        <h4 class="ltx_title ltx_title_subsubsection" id="H-S5.SS4.SSS2">
          <span class="ltx_tag ltx_tag_subsubsection">5.4.2 </span>Reader Groups Disagree About Contextual Content</h4>
        <div id="S5.SS4.SSS2.p1" class="ltx_para">
          <p class="ltx_p">A majority of blind readers (63%, n=19) were emphatic that descriptions should <emph class="ltx_emph ltx_font_italic">not</emph> contain an author’s subjective interpretations, contextual information, or editorializing about the visualized data (i.e., Level 4 content).
            Consistent with blind readers ranking this as among the least useful (Region&nbsp;<a href="#S5.T4" title="Table 4 ‣ 5.2.2 Participant Demographics ‣ 5.2 Participants ‣ 5 Applying the Model: Evaluating the Effectiveness of Visualization Descriptions ‣ Accessible Visualization via Natural Language Descriptions: A Four-Level Model of Semantic Content" class="ltx_ref"><span class="ltx_text ltx_ref_tag">4</span></a>.B), BR20 succinctly articulated a common sentiment: <span class="ltx_text" style="color:#000000;background-color:#EDEBFF;"><emph class="ltx_emph ltx_font_italic">“I want the information to be simply laid out, not peppered with subjective commentary… I just prefer it to be straight facts, not presumptions or guesstimates.”</emph></span> BR4 also noted that an author’s <span class="ltx_text" style="color:#000000;background-color:#EDEBFF;"><emph class="ltx_emph ltx_font_italic">“opinions”</emph></span> about the data <span class="ltx_text" style="color:#000000;background-color:#EDEBFF;"><emph class="ltx_emph ltx_font_italic">“should absolutely be avoided,”</emph></span> and BR14 emphasized agency when interpreting data: <span class="ltx_text" style="color:#000000;background-color:#EDEBFF;"><emph class="ltx_emph ltx_font_italic">“I want to have the time and space to interpret the numbers for myself before I read the analysis.”</emph></span>
            By contrast, many sighted readers 41% (n=37) expressed the opposite sentiment (Region&nbsp;<a href="#S5.T4" title="Table 4 ‣ 5.2.2 Participant Demographics ‣ 5.2 Participants ‣ 5 Applying the Model: Evaluating the Effectiveness of Visualization Descriptions ‣ Accessible Visualization via Natural Language Descriptions: A Four-Level Model of Semantic Content" class="ltx_ref"><span class="ltx_text ltx_ref_tag">4</span></a>.F) noting that, for them, the most useful descriptions often <span class="ltx_text" style="color:#000000;background-color:#EDEDED;"><emph class="ltx_emph ltx_font_italic">“told a story,”</emph></span> communicated an important conclusion, or provided deeper insights into the visualized data.
            As SR64 noted: <span class="ltx_text" style="color:#000000;background-color:#EDEDED;"><emph class="ltx_emph ltx_font_italic">“A description that simply describes the visualization and its details is hardly useful, but a description that tells a story using the data and derives a solution from it is extremely useful.”</emph></span>
            Only 4% (n=4) of sighted readers explicitly stated that a description should exclude Level 4 semantic content.</p>
        </div>
      </section>
      <section id="S5.SS4.SSS3" class="ltx_subsubsection">
        <h4 class="ltx_title ltx_title_subsubsection" id="H-S5.SS4.SSS3">
          <span class="ltx_tag ltx_tag_subsubsection">5.4.3 </span>Some Readers Prefer Non-Statistical Content</h4>
        <div id="S5.SS4.SSS3.p1" class="ltx_para">
          <p class="ltx_p">Overall, blind readers consistently ranked both Levels 2 and 3 as the most useful (Region&nbsp;<a href="#S5.T4" title="Table 4 ‣ 5.2.2 Participant Demographics ‣ 5.2 Participants ‣ 5 Applying the Model: Evaluating the Effectiveness of Visualization Descriptions ‣ Accessible Visualization via Natural Language Descriptions: A Four-Level Model of Semantic Content" class="ltx_ref"><span class="ltx_text ltx_ref_tag">4</span></a>.C). But, some readers explicitly expressed preference for the latter over the former, highlighting two distinguishing characteristics of Level 3 content: that it conveys not only descriptive statistics but overall perceptible trends, and that it is articulated in commonplace or “natural”-sounding language.
            For instance, BR26 remarked that a visualization description is <span class="ltx_text" style="color:#000000;background-color:#EDEBFF;"><emph class="ltx_emph ltx_font_italic">“more useful if it contains the summary of the overall trends and distributions of the data rather than just mentioning some of the extreme values or means.”</emph></span>
            Similarly, BR21 noted that <span class="ltx_text" style="color:#000000;background-color:#EDEBFF;"><emph class="ltx_emph ltx_font_italic">“not everyone who encounters a data visualization needs it for statistical purposes,”</emph></span> and further exclaimed <span class="ltx_text" style="color:#000000;background-color:#EDEBFF;"><emph class="ltx_emph ltx_font_italic">“I want to know how a layperson sees it, not a statistician; I identify more with simpler terminology.”</emph></span>
            These preferences help to further delineate Level 3 from Levels 2 and 4.
            Content at Level 3 is “non-statistical” in the sense that it does only report statistical concepts and relations (as in Level 2), but neither does it do away with statistical “objectivity” entirely, so as to include subjective interpretation or speculation (as content in Level 4 might).
            In short, Level 3 content conveys statistically-grounded concepts in not-purely-statistical terms, a challenge that is core to visualization, and science communication more broadly.
          </p>
        </div>
      </section>
      <section id="S5.SS4.SSS4" class="ltx_subsubsection">
        <h4 class="ltx_title ltx_title_subsubsection" id="H-S5.SS4.SSS4">
          <span class="ltx_tag ltx_tag_subsubsection">5.4.4 </span>Combinations of Content Levels Are Likely Most Useful</h4>
        <div id="S5.SS4.SSS4.p1" class="ltx_para">
          <p class="ltx_p">While roughly 12% readers from both blind and sighted groups indicated that a description should be as concise as possible, among blind readers, 40% (n=12) noted that the most useful descriptions would combine content from multiple levels.
            This finding helps to explain the bimodality in Level 1 rankings we identified in the previous section.
            According to BR9, Level 1 content is only useful if other information is also conveyed: <span class="ltx_text" style="color:#000000;background-color:#EDEBFF;"><emph class="ltx_emph ltx_font_italic">“All of the descriptions provided in this survey which *only* elaborated on x/y and color-coding are almost useless.”</emph></span>
            This sentiment was echoed by BR5, who added that if Level 1 content were <span class="ltx_text" style="color:#000000;background-color:#EDEBFF;"><emph class="ltx_emph ltx_font_italic">“combined with the [Level 2 or Level 3], that’d make for a great description.”</emph></span>
            This finding has implications for research on automatic visualization captioning: these methods should aim to generate not only the lower levels of semantic content, but to more richly communicate a chart’s overall trends and statistics, sensitive to reader preferences.
          </p>
        </div>
      </section>
      <section id="S5.SS4.SSS5" class="ltx_subsubsection">
        <h4 class="ltx_title ltx_title_subsubsection" id="H-S5.SS4.SSS5">
          <span class="ltx_tag ltx_tag_subsubsection">5.4.5 </span>Some Automatic Methods Raise Ethical Concerns</h4>
        <div id="S5.SS4.SSS5.p1" class="ltx_para">
          <p class="ltx_p">Research on automatically generating visualization captions is often motivated by the goal of improving information access for people with visual disabilities&nbsp;<cite class="ltx_cite ltx_citemacro_cite">[<a href="#bib.bib118" title="Generating Accurate Caption Units for Figure Captioning" class="ltx_ref">83</a>, <a href="#bib.bib49" title="Summarizing Information Graphics Textually" class="ltx_ref">27</a>, <a href="#bib.bib54" title="Chart-to-Text: Generating Natural Language Descriptions for Charts by Adapting the Transformer Model" class="ltx_ref">78</a>, <a href="#bib.bib7" title="A Formative Study on Designing Accurate and Natural Figure Captioning Systems" class="ltx_ref">84</a>]</cite>.
            However, when deployed in real-world contexts, these methods may not confer their intended benefits, as one blind reader in our evaluation commented.
          </p>
          <blockquote class="ltx_quote ltx_displayquote">
            <p class="ltx_p"><span class="ltx_text ltx_quote">
                <span class="ltx_text" style="color:#000000;background-color:#EDEBFF;"><emph class="ltx_emph ltx_font_italic">“A.I. attempting to convert these images is still in its infancy. Facebook and Apple auto-descriptions of general images are more of a timewaster than useful. As a practical matter, if I find an inaccessible chart or graph, I just move on.”</emph></span> (BP22)</span></p>
          </blockquote>
          <p class="ltx_p">Similarly, another participant (BR26) noted that if a description were to only describe a visualization’s encodings then <span class="ltx_text" style="color:#000000;background-color:#EDEBFF;"><emph class="ltx_emph ltx_font_italic">“the reader wouldn’t get any insight from these texts, which not only increases the readers’ reading burden but also conveys no effective information about the data.”</emph></span>
            These sentiments reflect some of the ethical concerns surrounding the deployment of nascent <a href="#id26"><abbr href="#id26" title="Computer Vision" class="ltx_glossaryref"><span class="ltx_text ltx_glossary_short">CV</span></abbr></a> and <a href="#id27"><abbr href="#id27" title="Natural Language Processing" class="ltx_glossaryref"><span class="ltx_text ltx_glossary_short">NLP</span></abbr></a> models, which can output accurate but minimally informative content — or worse, can output erroneous content to a trusting audience&nbsp;<cite class="ltx_cite ltx_citemacro_cite">[<a href="#bib.bib112" title="Understanding Blind People’s Experiences with Computer-Generated Captions of Social Media Images" class="ltx_ref">69</a>, <a href="#bib.bib54" title="Chart-to-Text: Generating Natural Language Descriptions for Charts by Adapting the Transformer Model" class="ltx_ref">78</a>]</cite>.
            Facebook’s automatic image descriptions, for example, have been characterized by technology educator Chancey Fleet as “<emph class="ltx_emph ltx_font_italic">famously useless in the Blind community</emph>” while “<emph class="ltx_emph ltx_font_italic">garner[ing] a ton of glowing reviews from mainstream outlets without being of much use to disabled people</emph>”&nbsp;<cite class="ltx_cite ltx_citemacro_cite">[<a href="#bib.bib114" title="Things which garner a ton of glowing reviews from mainstream outlets without being of much use to disabled people. For instance, Facebook’s auto image descriptions, much loved by sighted journos but famously useless in the Blind community" class="ltx_ref">33</a>, <a href="#bib.bib113" title="Computer Vision and Conflicting Values: Describing People with Automated Alt Text" class="ltx_ref">40</a>]</cite>. Such concerns might be mitigated by developing and evaluating automatic methods with disabled readers, through participatory design processes&nbsp;<cite class="ltx_cite ltx_citemacro_cite">[<a href="#bib.bib24" title="Sociotechnical Considerations for Accessible Visualization Design" class="ltx_ref">67</a>]</cite>.</p>
        </div>
      </section>
    </section>
  </section>
  <section id="S6" class="ltx_section">
    <h2 class="ltx_title ltx_title_section" id="H-S6">
      <span class="ltx_tag ltx_tag_section">6 </span>Discussion and Future Work</h2>
    <div id="S6.p1" class="ltx_para">
      <p class="ltx_p">Our four-level model of semantic content — and its application to evaluating the usefulness of descriptions — has practical implications for the design of accessible data representations, and theoretical implications for the relationship between visualization and natural language.</p>
    </div>
    <section id="S6.SS1" class="ltx_subsection">
      <h3 class="ltx_title ltx_title_subsection" id="H-S6.SS1">
        <span class="ltx_tag ltx_tag_subsection">6.1 </span>Natural Language As An Interface Into Visualization</h3>
      <div id="S6.SS1.p1" class="ltx_para">
        <p class="ltx_p">Divergent reader preferences for semantic content suggests that it is helpful to think of natural language — not only as an interface for constructing and exploring visualizations&nbsp;<cite class="ltx_cite ltx_citemacro_cite">[<a href="#bib.bib105" title="Collecting and Characterizing Natural Language Utterances for Specifying Data Visualizations" class="ltx_ref">93</a>, <a href="#bib.bib62" title="DataTone: Managing Ambiguity in Natural Language Interfaces for Data Visualization" class="ltx_ref">36</a>, <a href="#bib.bib101" title="Eviza: A Natural Language Interface for Visual Analysis" class="ltx_ref">89</a>]</cite> — but also as an interface into visualization, for <emph class="ltx_emph ltx_font_italic">understanding</emph> the semantic content they convey.
          Under this framing, we can apply Beaudoin-Lafon’s framework for evaluating interface models in terms of their descriptive, evaluative, and generative powers&nbsp;<cite class="ltx_cite ltx_citemacro_cite">[<a href="#bib.bib60" title="Instrumental Interaction: An Interaction Model For Designing Post-WIMP User Interfaces" class="ltx_ref">7</a>, <a href="#bib.bib61" title="Designing Interaction, Not Interfaces" class="ltx_ref">8</a>]</cite>, to bring further clarity to the practical design implications of our model.
          First, our grounded theory process yielded a model with <emph class="ltx_emph ltx_font_italic">descriptive</emph> power: it categorizes the semantic content conveyed by visualizations.
          Second, our study with blind and sighted readers demonstrated our model’s <emph class="ltx_emph ltx_font_italic">evaluative</emph> power: it offered a means of comparing different levels of semantic content, thus revealing divergent preferences between these different reader groups.
          Third, future work can now begin to study our model’s <emph class="ltx_emph ltx_font_italic">generative</emph> power:
          its implications for novel multimodal interfaces and accessible data representations.
          For instance, our evaluation suggested that descriptions primarily intending to benefit sighted readers might aim to generate higher-level semantic content (§&nbsp;<a href="#S5.SS4.SSS2" title="5.4.2 Reader Groups Disagree About Contextual Content ‣ 5.4 Qualitative Results ‣ 5 Applying the Model: Evaluating the Effectiveness of Visualization Descriptions ‣ Accessible Visualization via Natural Language Descriptions: A Four-Level Model of Semantic Content" class="ltx_ref"><span class="ltx_text ltx_ref_tag">5.4.2</span></a>), while those intending to benefit blind readers might instead focus on affording readers the option to customize and combine different content levels (§&nbsp;<a href="#S5.SS4.SSS4" title="5.4.4 Combinations of Content Levels Are Likely Most Useful ‣ 5.4 Qualitative Results ‣ 5 Applying the Model: Evaluating the Effectiveness of Visualization Descriptions ‣ Accessible Visualization via Natural Language Descriptions: A Four-Level Model of Semantic Content" class="ltx_ref"><span class="ltx_text ltx_ref_tag">5.4.4</span></a>), depending on their individual preferences (§&nbsp;<a href="#S5.SS4.SSS3" title="5.4.3 Some Readers Prefer Non-Statistical Content ‣ 5.4 Qualitative Results ‣ 5 Applying the Model: Evaluating the Effectiveness of Visualization Descriptions ‣ Accessible Visualization via Natural Language Descriptions: A Four-Level Model of Semantic Content" class="ltx_ref"><span class="ltx_text ltx_ref_tag">5.4.3</span></a>).
          This latter path might involve automatically <a href="#id10"><abbr href="#id10" title="Accessible Rich Internet Application" class="ltx_glossaryref"><span class="ltx_text ltx_glossary_short">ARIA</span></abbr></a> tagging web-based charts to surface semantic content at Levels 1 &amp; 2, with human-authors conveying Level 3 content. Or, it might involve applying our model to develop and evaluate the outputs of automatic captioning systems — to probe their technological capabilities and ethical implications — in collaboration with the relevant communities (§&nbsp;<a href="#S5.SS4.SSS5" title="5.4.5 Some Automatic Methods Raise Ethical Concerns ‣ 5.4 Qualitative Results ‣ 5 Applying the Model: Evaluating the Effectiveness of Visualization Descriptions ‣ Accessible Visualization via Natural Language Descriptions: A Four-Level Model of Semantic Content" class="ltx_ref"><span class="ltx_text ltx_ref_tag">5.4.5</span></a>).
          To facilitate this work, we have released our corpus of visualizations and labeled sentences under an open source license:
          <a href="data/" title="" class="ltx_ref ltx_href ltx_font_typewriter">vis.csail.mit.edu/pubs/vis-text-model/data/</a>.</p>
      </div>
    </section>
    <section id="S6.SS2" class="ltx_subsection">
      <h3 class="ltx_title ltx_title_subsection" id="H-S6.SS2">
        <span class="ltx_tag ltx_tag_subsection">6.2 </span>Natural Language As Coequal With Visualization</h3>
      <div id="S6.SS2.p1" class="ltx_para">
        <p class="ltx_p">In closing, we turn to a discussion of our model’s implications for visualization theory.
          Not only can we think of natural language as an interface into visualization (as above), but also as an interface into data itself; coequal with and complementary to visualization.
          For example, some semantic content (e.g., Level 2 statistics or Level 4 explanations) may be best conveyed via language, without any reference to visual modalities&nbsp;<cite class="ltx_cite ltx_citemacro_cite">[<a href="#bib.bib104" title="Examining Visual Semantic Understanding in Blind and Low-Vision Technology Users" class="ltx_ref">82</a>, <a href="#bib.bib93" title="Would You Like A Chart With That? Incorporating Visualizations into Conversational Interfaces" class="ltx_ref">43</a>]</cite>, while other content (e.g., Level 3 clusters) may be uniquely suited to visual representation.
          This coequal framing is not a departure from orthodox visualization theory, but rather a return to its linguistic and semiotic origins.
          Indeed, at the start of his foundational <emph class="ltx_emph ltx_font_italic">Semiology of Graphics</emph>, Jacques Bertin introduces a similar framing to formalize an idea at the heart of visualization theory: content can be conveyed not only through speaking or writing but also through the “language” of graphics&nbsp;<cite class="ltx_cite ltx_citemacro_cite">[<a href="#bib.bib58" title="Semiology of Graphics" class="ltx_ref">12</a>]</cite>.
          While Bertin took natural language as a point of departure for formalizing a language of graphics, we have here pursued the inverse: taking visualization as occasioning a return to language.
          This theoretical inversion opens avenues for future work, for which linguistic theory and semiotics are instructive&nbsp;<cite class="ltx_cite ltx_citemacro_cite">[<a href="#bib.bib15" title="Towards a Semiotics of Data Visualization – an Inventory of Graphic Resources" class="ltx_ref">103</a>, <a href="#bib.bib18" title="Visual Semiotics Uncertainty Visualization: An Empirical Study" class="ltx_ref">68</a>, <a href="#bib.bib19" title="Understanding Visualization: A Formal Approach Using Category Theory and Semiotics" class="ltx_ref">97</a>]</cite>.</p>
      </div>
      <div id="S6.SS2.p2" class="ltx_para">
        <p class="ltx_p">Within the contemporary linguistic tradition, subfields like syntax, semantics, and pragmatics suggest opportunities for further analysis at each level of our model. And, since our model focuses on English sentences and canonical chart types, extensions to other languages and bespoke charts may be warranted.
          Within the semiotic tradition, Christian Metz (a contemporary of Bertin’s) emphasized the <emph class="ltx_emph ltx_font_italic">pluralistic</emph> quality of graphics&nbsp;<cite class="ltx_cite ltx_citemacro_cite">[<a href="#bib.bib78" title="Signs and Sight: Jacques Bertin and the Visual Language of Structuralism" class="ltx_ref">18</a>]</cite>: the semantic content conveyed by visualizations depends not only on their graphical sign-system, but also on various “social codes” such as education, class, expertise, and — we hasten to include — ability.
          Our evaluation with blind and sighted readers (as well as work studying how charts are deployed in particular discourse contexts&nbsp;<cite class="ltx_cite ltx_citemacro_cite">[<a href="#bib.bib14" title="Visualization Rhetoric: Framing Effects in Narrative Visualization" class="ltx_ref">44</a>, <a href="#bib.bib12" title="Content, Context, and Critique: Commenting on a Data Visualization Blog" class="ltx_ref">46</a>, <a href="#bib.bib80" title="Viral Visualizations: How Coronavirus Skeptics Use Orthodox Data Practices to Promote Unorthodox Science Online" class="ltx_ref">62</a>, <a href="#bib.bib16" title="Inventorizing, Situating, Transforming: Social Semiotics And Data Visualization" class="ltx_ref">3</a>]</cite>)
          lends credence to Metz’s conception of graphics as pluralistic: different readers will have different ideas about what makes visualizations meaningful (Fig.&nbsp;<a href="#teaser" title="Figure Teaser ‣ Accessible Visualization via Natural Language Descriptions: A Four-Level Model of Semantic Content" class="ltx_ref"><span class="ltx_text ltx_ref_tag">Teaser</span></a>).
          As a means of revealing these differences, we have here introduced a four-level model of semantic content.
          We leave further elucidation of the relationship between visualization and natural language to future work.</p>
      </div>
      <div class="ltx_acknowledgements">
        <h2 class="ltx_title ltx_title_acknowledgements" id="H-ack">Acknowledgements</h2>
        For their valuable feedback, we thank Emilie Gossiaux, Chancey Fleet, Michael Correll, Frank Elavsky, Beth Semel, Stephanie Tuerk, Crystal Lee, and the MIT Visualization Group.
        This work was supported by National Science Foundation GRFP-1122374 and III-1900991.
      </div>
    </section>
  </section>
  <section id="bib" class="ltx_bibliography">
    <h2 class="ltx_title ltx_title_bibliography" id="H-bib">References</h2>
    <ul id="bib.L1" class="ltx_biblist">
      <li id="bib.bib81" class="ltx_bibitem ltx_bib_article">
        <span class="ltx_tag ltx_bib_key ltx_role_refnum ltx_tag_bibitem">[1]</span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_author">P. Ackland, S. Resnikoff, and R. Bourne</span><span class="ltx_text ltx_bib_year"> (2017)</span>
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_title">World Blindness and Visual Impairment</span>.
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_journal">Community Eye Health</span>.
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_links"><span class="ltx_text issn ltx_bib_external">ISSN 0953-6833</span>,
            <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5820628/" title="" class="ltx_ref ltx_bib_external">Link</a></span>
        </span>
        <span class="ltx_bibblock ltx_bib_cited">Cited by: <a href="#S1.p1" title="1 Introduction ‣ Accessible Visualization via Natural Language Descriptions: A Four-Level Model of Semantic Content" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§1</span></a>.
        </span>
      </li>
      <li id="bib.bib35" class="ltx_bibitem ltx_bib_inproceedings">
        <span class="ltx_tag ltx_bib_key ltx_role_refnum ltx_tag_bibitem">[2]</span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_author">E. Adar and E. Lee</span><span class="ltx_text ltx_bib_year"> (2020)</span>
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_title">Communicative Visualizations as a Learning Problem</span>.
        </span>
        <span class="ltx_bibblock">In <span class="ltx_text ltx_bib_inbook">TVCG</span>,
        </span>
        <span class="ltx_bibblock">(<span class="ltx_text ltx_bib_language">en</span>).
        </span>
        <span class="ltx_bibblock ltx_bib_cited">Cited by: <a href="#S2.SS3.SSS2.p1" title="2.3.2 Using Natural Language to Interact with Visualizations ‣ 2.3 Natural Language Hierarchies and Interfaces ‣ 2 Related Work ‣ Accessible Visualization via Natural Language Descriptions: A Four-Level Model of Semantic Content" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§2.3.2</span></a>.
        </span>
      </li>
      <li id="bib.bib16" class="ltx_bibitem ltx_bib_incollection">
        <span class="ltx_tag ltx_bib_key ltx_role_refnum ltx_tag_bibitem">[3]</span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_author">G. Aiello</span><span class="ltx_text ltx_bib_year"> (2020)</span>
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_title">Inventorizing, Situating, Transforming: Social Semiotics And Data Visualization</span>.
        </span>
        <span class="ltx_bibblock">In <span class="ltx_text ltx_bib_inbook">Data Visualization in Society</span>,  <span class="ltx_text ltx_bib_editor">M. Engebretsen and H. Kennedy (Eds.)</span>,
        </span>
        <span class="ltx_bibblock ltx_bib_cited">Cited by: <a href="#S6.SS2.p2" title="6.2 Natural Language As Coequal With Visualization ‣ 6 Discussion and Future Work ‣ Accessible Visualization via Natural Language Descriptions: A Four-Level Model of Semantic Content" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§6.2</span></a>.
        </span>
      </li>
      <li id="bib.bib137" class="ltx_bibitem ltx_bib_inproceedings">
        <span class="ltx_tag ltx_bib_key ltx_role_refnum ltx_tag_bibitem">[4]</span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_author">K. M. Ali</span><span class="ltx_text ltx_bib_year"> (2016)</span>
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_title">Mind-Dependent Kinds</span>.
        </span>
        <span class="ltx_bibblock">In <span class="ltx_text ltx_bib_inbook">Journal of Social Ontology</span>,
        </span>
        <span class="ltx_bibblock ltx_bib_cited">Cited by: <a href="#S4.SS3.p4" title="4.3 Level 3: Perceptual and Cognitive Phenomena ‣ 4 A Four-Level Model of Semantic Content ‣ Accessible Visualization via Natural Language Descriptions: A Four-Level Model of Semantic Content" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§4.3</span></a>.
        </span>
      </li>
      <li id="bib.bib21" class="ltx_bibitem ltx_bib_inproceedings">
        <span class="ltx_tag ltx_bib_key ltx_role_refnum ltx_tag_bibitem">[5]</span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_author">R. Amar, J. Eagan, and J. Stasko</span><span class="ltx_text ltx_bib_year"> (2005)</span>
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_title">Low-level Components Of Analytic Activity In Information Visualization</span>.
        </span>
        <span class="ltx_bibblock">In <span class="ltx_text ltx_bib_inbook">INFOVIS</span>,
        </span>
        <span class="ltx_bibblock ltx_bib_cited">Cited by: <a href="#S2.SS3.SSS1.p1" title="2.3.1 Using Natural Language to Describe Visualizations ‣ 2.3 Natural Language Hierarchies and Interfaces ‣ 2 Related Work ‣ Accessible Visualization via Natural Language Descriptions: A Four-Level Model of Semantic Content" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§2.3.1</span></a>.
        </span>
      </li>
      <li id="bib.bib31" class="ltx_bibitem ltx_bib_article">
        <span class="ltx_tag ltx_bib_key ltx_role_refnum ltx_tag_bibitem">[6]</span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_author">A. Balaji, T. Ramanathan, and V. Sonathi</span><span class="ltx_text ltx_bib_year"> (2018)</span>
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_title">Chart-Text: A Fully Automated Chart Image Descriptor</span>.
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_journal">arXiv</span>.
        </span>
        <span class="ltx_bibblock ltx_bib_cited">Cited by: <a href="#S2.SS1.SSS1.p1" title="2.1.1 Computer Vision and Natural Language Processing ‣ 2.1 Automatic Methods for Visualization Captioning ‣ 2 Related Work ‣ Accessible Visualization via Natural Language Descriptions: A Four-Level Model of Semantic Content" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§2.1.1</span></a>.
        </span>
      </li>
      <li id="bib.bib60" class="ltx_bibitem ltx_bib_inproceedings">
        <span class="ltx_tag ltx_bib_key ltx_role_refnum ltx_tag_bibitem">[7]</span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_author">M. Beaudouin-Lafon</span><span class="ltx_text ltx_bib_year"> (2000)</span>
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_title">Instrumental Interaction: An Interaction Model For Designing Post-WIMP User Interfaces</span>.
        </span>
        <span class="ltx_bibblock">In <span class="ltx_text ltx_bib_inbook">CHI</span>,
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_links">,
            <a href="https://doi.org/10.1145/332040.332473" title="" class="ltx_ref ltx_bib_external">Link</a></span>
        </span>
        <span class="ltx_bibblock ltx_bib_cited">Cited by: <a href="#S1.p4" title="1 Introduction ‣ Accessible Visualization via Natural Language Descriptions: A Four-Level Model of Semantic Content" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§1</span></a>,
          <a href="#S6.SS1.p1" title="6.1 Natural Language As An Interface Into Visualization ‣ 6 Discussion and Future Work ‣ Accessible Visualization via Natural Language Descriptions: A Four-Level Model of Semantic Content" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§6.1</span></a>.
        </span>
      </li>
      <li id="bib.bib61" class="ltx_bibitem ltx_bib_inproceedings">
        <span class="ltx_tag ltx_bib_key ltx_role_refnum ltx_tag_bibitem">[8]</span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_author">M. Beaudouin-Lafon</span><span class="ltx_text ltx_bib_year"> (2004)</span>
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_title">Designing Interaction, Not Interfaces</span>.
        </span>
        <span class="ltx_bibblock">In <span class="ltx_text ltx_bib_inbook">AVI</span>,
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_links">,
            <a href="https://doi.org/10.1145/989863.989865" title="" class="ltx_ref ltx_bib_external">Link</a></span>
        </span>
        <span class="ltx_bibblock ltx_bib_cited">Cited by: <a href="#S1.p4" title="1 Introduction ‣ Accessible Visualization via Natural Language Descriptions: A Four-Level Model of Semantic Content" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§1</span></a>,
          <a href="#S6.SS1.p1" title="6.1 Natural Language As An Interface Into Visualization ‣ 6 Discussion and Future Work ‣ Accessible Visualization via Natural Language Descriptions: A Four-Level Model of Semantic Content" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§6.1</span></a>.
        </span>
      </li>
      <li id="bib.bib94" class="ltx_bibitem ltx_bib_misc">
        <span class="ltx_tag ltx_bib_key ltx_role_refnum ltx_tag_bibitem">[9]</span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_author">Benetech</span>
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_title">Making Images Accessible</span>.
        </span>
        <span class="ltx_bibblock">(<span class="ltx_text ltx_bib_language">en-US</span>).
        </span>
        <span class="ltx_bibblock">Note: <span class="ltx_text ltx_bib_note">http://diagramcenter.org/making-images-accessible.html/</span>
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_links"><a href="http://diagramcenter.org/making-images-accessible.html/" title="" class="ltx_ref ltx_bib_external">Link</a></span>
        </span>
        <span class="ltx_bibblock ltx_bib_cited">Cited by: <a href="#S2.SS2.SSS1.p1" title="2.2.1 Descriptions Authored by Experts ‣ 2.2 Accessible Media and Human-Computer Interaction ‣ 2 Related Work ‣ Accessible Visualization via Natural Language Descriptions: A Four-Level Model of Semantic Content" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§2.2.1</span></a>.
        </span>
      </li>
      <li id="bib.bib103" class="ltx_bibitem ltx_bib_inproceedings">
        <span class="ltx_tag ltx_bib_key ltx_role_refnum ltx_tag_bibitem">[10]</span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_author">C. L. Bennett, C. Gleason, M. K. Scheuerman, J. P. Bigham, A. Guo, and A. To</span><span class="ltx_text ltx_bib_year"> (2021)</span>
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_title">“It’s Complicated”: Negotiating Accessibility and (Mis)Representation in Image Descriptions of Race, Gender, and Disability</span>.
        </span>
        <span class="ltx_bibblock">In <span class="ltx_text ltx_bib_inbook">CHI</span>,
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_links"></span>
        </span>
        <span class="ltx_bibblock ltx_bib_cited">Cited by: <a href="#S2.SS2.SSS2.p1" title="2.2.2 Descriptions Authored by Non-Experts ‣ 2.2 Accessible Media and Human-Computer Interaction ‣ 2 Related Work ‣ Accessible Visualization via Natural Language Descriptions: A Four-Level Model of Semantic Content" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§2.2.2</span></a>.
        </span>
      </li>
      <li id="bib.bib79" class="ltx_bibitem ltx_bib_misc">
        <span class="ltx_tag ltx_bib_key ltx_role_refnum ltx_tag_bibitem">[11]</span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_author">C. T. Bergstrom</span><span class="ltx_text ltx_bib_year"> (2020)</span>
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_title">SARS-CoV-2 Coronavirus</span>.
        </span>
        <span class="ltx_bibblock">Note: <span class="ltx_text ltx_bib_note">http://ctbergstrom.com/covid19.html</span>
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_links"><a href="http://ctbergstrom.com/covid19.html" title="" class="ltx_ref ltx_bib_external">Link</a></span>
        </span>
        <span class="ltx_bibblock ltx_bib_cited">Cited by: <a href="#teaser" title="Figure Teaser ‣ Accessible Visualization via Natural Language Descriptions: A Four-Level Model of Semantic Content" class="ltx_ref"><span class="ltx_text ltx_ref_tag">Teaser</span></a>.
        </span>
      </li>
      <li id="bib.bib58" class="ltx_bibitem ltx_bib_book">
        <span class="ltx_tag ltx_bib_key ltx_role_refnum ltx_tag_bibitem">[12]</span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_author">J. Bertin</span><span class="ltx_text ltx_bib_year"> (1983)</span>
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_title">Semiology of Graphics</span>.
        </span>
        <span class="ltx_bibblock"> <span class="ltx_text ltx_bib_publisher">University of Wisconsin Press</span>.
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_links"></span>
        </span>
        <span class="ltx_bibblock ltx_bib_cited">Cited by: <a href="#S1.p4" title="1 Introduction ‣ Accessible Visualization via Natural Language Descriptions: A Four-Level Model of Semantic Content" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§1</span></a>,
          <a href="#S4.SS1.p3" title="4.1 Level 1: Elemental and Encoded Properties ‣ 4 A Four-Level Model of Semantic Content ‣ Accessible Visualization via Natural Language Descriptions: A Four-Level Model of Semantic Content" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§4.1</span></a>,
          <a href="#S6.SS2.p1" title="6.2 Natural Language As Coequal With Visualization ‣ 6 Discussion and Future Work ‣ Accessible Visualization via Natural Language Descriptions: A Four-Level Model of Semantic Content" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§6.2</span></a>.
        </span>
      </li>
      <li id="bib.bib82" class="ltx_bibitem ltx_bib_inproceedings">
        <span class="ltx_tag ltx_bib_key ltx_role_refnum ltx_tag_bibitem">[13]</span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_author">J. P. Bigham, C. Jayant, H. Ji, G. Little, A. Miller, R. C. Miller, R. Miller, A. Tatarowicz, B. White, S. White, and T. Yeh</span><span class="ltx_text ltx_bib_year"> (2010)</span>
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_title">VizWiz: Nearly Real-time Answers To Visual Questions</span>.
        </span>
        <span class="ltx_bibblock">In <span class="ltx_text ltx_bib_inbook">UIST</span>,
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_links"></span>
        </span>
        <span class="ltx_bibblock ltx_bib_cited">Cited by: <a href="#S2.SS2.SSS2.p1" title="2.2.2 Descriptions Authored by Non-Experts ‣ 2.2 Accessible Media and Human-Computer Interaction ‣ 2 Related Work ‣ Accessible Visualization via Natural Language Descriptions: A Four-Level Model of Semantic Content" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§2.2.2</span></a>.
        </span>
      </li>
      <li id="bib.bib56" class="ltx_bibitem ltx_bib_inproceedings">
        <span class="ltx_tag ltx_bib_key ltx_role_refnum ltx_tag_bibitem">[14]</span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_author">J. P. Bigham, I. Lin, and S. Savage</span><span class="ltx_text ltx_bib_year"> (2017)</span>
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_title">The Effects of ”Not Knowing What You Don’t Know” on Web Accessibility for Blind Web Users</span>.
        </span>
        <span class="ltx_bibblock">In <span class="ltx_text ltx_bib_inbook">ASSETS</span>,
        </span>
        <span class="ltx_bibblock ltx_bib_cited">Cited by: <a href="#S5.SS2.p1" title="5.2 Participants ‣ 5 Applying the Model: Evaluating the Effectiveness of Visualization Descriptions ‣ Accessible Visualization via Natural Language Descriptions: A Four-Level Model of Semantic Content" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§5.2</span></a>.
        </span>
      </li>
      <li id="bib.bib38" class="ltx_bibitem ltx_bib_inproceedings">
        <span class="ltx_tag ltx_bib_key ltx_role_refnum ltx_tag_bibitem">[15]</span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_author">M. A. Borkin, Z. Bylinskii, N. W. Kim, C. M. Bainbridge, C. S. Yeh, D. Borkin, H. Pfister, and A. Oliva</span><span class="ltx_text ltx_bib_year"> (2016)</span>
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_title">Beyond Memorability: Visualization Recognition and Recall</span>.
        </span>
        <span class="ltx_bibblock">In <span class="ltx_text ltx_bib_inbook">TVCG</span>,
        </span>
        <span class="ltx_bibblock ltx_bib_cited">Cited by: <a href="#S3.SS2.SSS1.p1" title="3.2.1 Survey Design ‣ 3.2 Gathering A Corpus ‣ 3 Constructing the Model: Employing the Grounded Theory Methodology ‣ Accessible Visualization via Natural Language Descriptions: A Four-Level Model of Semantic Content" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§3.2.1</span></a>.
        </span>
      </li>
      <li id="bib.bib37" class="ltx_bibitem ltx_bib_inproceedings">
        <span class="ltx_tag ltx_bib_key ltx_role_refnum ltx_tag_bibitem">[16]</span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_author">M. A. Borkin, A. A. Vo, Z. Bylinskii, P. Isola, S. Sunkavalli, A. Oliva, and H. Pfister</span><span class="ltx_text ltx_bib_year"> (2013)</span>
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_title">What Makes a Visualization Memorable?</span>.
        </span>
        <span class="ltx_bibblock">In <span class="ltx_text ltx_bib_inbook">TVCG</span>,
        </span>
        <span class="ltx_bibblock ltx_bib_cited">Cited by: <a href="#S3.SS2.SSS1.p1" title="3.2.1 Survey Design ‣ 3.2 Gathering A Corpus ‣ 3 Constructing the Model: Employing the Grounded Theory Methodology ‣ Accessible Visualization via Natural Language Descriptions: A Four-Level Model of Semantic Content" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§3.2.1</span></a>.
        </span>
      </li>
      <li id="bib.bib11" class="ltx_bibitem ltx_bib_inproceedings">
        <span class="ltx_tag ltx_bib_key ltx_role_refnum ltx_tag_bibitem">[17]</span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_author">M. Brehmer and T. Munzner</span><span class="ltx_text ltx_bib_year"> (2013)</span>
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_title">A Multi-Level Typology of Abstract Visualization Tasks</span>.
        </span>
        <span class="ltx_bibblock">In <span class="ltx_text ltx_bib_inbook">TVCG</span>,
        </span>
        <span class="ltx_bibblock">(<span class="ltx_text ltx_bib_language">en</span>).
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_links"><a href="http://ieeexplore.ieee.org/document/6634168/" title="" class="ltx_ref ltx_bib_external">Link</a></span>
        </span>
        <span class="ltx_bibblock ltx_bib_cited">Cited by: <a href="#S2.SS3.SSS1.p1" title="2.3.1 Using Natural Language to Describe Visualizations ‣ 2.3 Natural Language Hierarchies and Interfaces ‣ 2 Related Work ‣ Accessible Visualization via Natural Language Descriptions: A Four-Level Model of Semantic Content" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§2.3.1</span></a>.
        </span>
      </li>
      <li id="bib.bib78" class="ltx_bibitem ltx_bib_article">
        <span class="ltx_tag ltx_bib_key ltx_role_refnum ltx_tag_bibitem">[18]</span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_author">A. Campolo</span><span class="ltx_text ltx_bib_year"> (2020)</span>
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_title">Signs and Sight: Jacques Bertin and the Visual Language of Structuralism</span>.
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_journal">Grey Room</span>.
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_links"><a href="https://doi.org/10.1162/grey_a_00286" title="" class="ltx_ref ltx_bib_external">Link</a></span>
        </span>
        <span class="ltx_bibblock ltx_bib_cited">Cited by: <a href="#S6.SS2.p2" title="6.2 Natural Language As Coequal With Visualization ‣ 6 Discussion and Future Work ‣ Accessible Visualization via Natural Language Descriptions: A Four-Level Model of Semantic Content" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§6.2</span></a>.
        </span>
      </li>
      <li id="bib.bib46" class="ltx_bibitem ltx_bib_misc">
        <span class="ltx_tag ltx_bib_key ltx_role_refnum ltx_tag_bibitem">[19]</span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_author">A. Cesal</span><span class="ltx_text ltx_bib_year"> (2020-08)</span>
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_title">Writing Alt Text for Data Visualization</span>.
        </span>
        <span class="ltx_bibblock">(<span class="ltx_text ltx_bib_language">en</span>).
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_links"><a href="https://medium.com/nightingale/writing-alt-text-for-data-visualization-2a218ef43f81" title="" class="ltx_ref ltx_bib_external">Link</a></span>
        </span>
        <span class="ltx_bibblock ltx_bib_cited">Cited by: <a href="#S2.SS2.SSS1.p1" title="2.2.1 Descriptions Authored by Experts ‣ 2.2 Accessible Media and Human-Computer Interaction ‣ 2 Related Work ‣ Accessible Visualization via Natural Language Descriptions: A Four-Level Model of Semantic Content" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§2.2.1</span></a>.
        </span>
      </li>
      <li id="bib.bib29" class="ltx_bibitem ltx_bib_inproceedings">
        <span class="ltx_tag ltx_bib_key ltx_role_refnum ltx_tag_bibitem">[20]</span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_author">R. Chang, C. Ziemkiewicz, T. M. Green, and W. Ribarsky</span><span class="ltx_text ltx_bib_year"> (2009)</span>
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_title">Defining Insight for Visual Analytics</span>.
        </span>
        <span class="ltx_bibblock">In <span class="ltx_text ltx_bib_inbook">CG&amp;A</span>,
        </span>
        <span class="ltx_bibblock ltx_bib_cited">Cited by: <a href="#S4.SS4.p3" title="4.4 Level 4: Contextual and Domain-Specific Insights ‣ 4 A Four-Level Model of Semantic Content ‣ Accessible Visualization via Natural Language Descriptions: A Four-Level Model of Semantic Content" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§4.4</span></a>.
        </span>
      </li>
      <li id="bib.bib84" class="ltx_bibitem ltx_bib_article">
        <span class="ltx_tag ltx_bib_key ltx_role_refnum ltx_tag_bibitem">[21]</span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_author">A. Chaparro and M. Chaparro</span><span class="ltx_text ltx_bib_year"> (2017)</span>
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_title">Applications of Color in Design for Color-Deficient Users</span>.
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_journal">Ergonomics in Design</span> (<span class="ltx_text ltx_bib_language">en</span>).
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_links"><span class="ltx_text issn ltx_bib_external">ISSN 1064-8046</span>,
            <a href="https://doi.org/10.1177/1064804616635382" title="" class="ltx_ref ltx_bib_external">Link</a></span>
        </span>
        <span class="ltx_bibblock ltx_bib_cited">Cited by: <a href="#S1.p2" title="1 Introduction ‣ Accessible Visualization via Natural Language Descriptions: A Four-Level Model of Semantic Content" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§1</span></a>.
        </span>
      </li>
      <li id="bib.bib4" class="ltx_bibitem ltx_bib_inproceedings">
        <span class="ltx_tag ltx_bib_key ltx_role_refnum ltx_tag_bibitem">[22]</span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_author">C. Chen, R. Zhang, S. Kim, S. Cohen, T. Yu, R. Rossi, and R. Bunescu</span><span class="ltx_text ltx_bib_year"> (2019)</span>
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_title">Neural Caption Generation Over Figures</span>.
        </span>
        <span class="ltx_bibblock">In <span class="ltx_text ltx_bib_inbook">UbiComp/ISWC ’19 Adjunct</span>,
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_links"><a href="http://doi.org/10.1145/3341162.3345601" title="" class="ltx_ref ltx_bib_external">Link</a></span>
        </span>
        <span class="ltx_bibblock ltx_bib_cited">Cited by: <a href="#S2.SS1.SSS1.p1" title="2.1.1 Computer Vision and Natural Language Processing ‣ 2.1 Automatic Methods for Visualization Captioning ‣ 2 Related Work ‣ Accessible Visualization via Natural Language Descriptions: A Four-Level Model of Semantic Content" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§2.1.1</span></a>.
        </span>
      </li>
      <li id="bib.bib5" class="ltx_bibitem ltx_bib_inproceedings">
        <span class="ltx_tag ltx_bib_key ltx_role_refnum ltx_tag_bibitem">[23]</span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_author">C. Chen, R. Zhang, E. Koh, S. Kim, S. Cohen, and R. Rossi</span><span class="ltx_text ltx_bib_year"> (2020)</span>
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_title">Figure Captioning with Relation Maps for Reasoning</span>.
        </span>
        <span class="ltx_bibblock">In <span class="ltx_text ltx_bib_inbook">WACV</span>,
        </span>
        <span class="ltx_bibblock">(<span class="ltx_text ltx_bib_language">en</span>).
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_links"></span>
        </span>
        <span class="ltx_bibblock ltx_bib_cited">Cited by: <a href="#S2.SS1.SSS1.p1" title="2.1.1 Computer Vision and Natural Language Processing ‣ 2.1 Automatic Methods for Visualization Captioning ‣ 2 Related Work ‣ Accessible Visualization via Natural Language Descriptions: A Four-Level Model of Semantic Content" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§2.1.1</span></a>.
        </span>
      </li>
      <li id="bib.bib8" class="ltx_bibitem ltx_bib_article">
        <span class="ltx_tag ltx_bib_key ltx_role_refnum ltx_tag_bibitem">[24]</span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_author">C. Chen, R. Zhang, E. Koh, S. Kim, S. Cohen, T. Yu, R. Rossi, and R. Bunescu</span><span class="ltx_text ltx_bib_year"> (2019)</span>
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_title">Figure Captioning with Reasoning and Sequence-Level Training</span>.
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_journal">arXiv</span>.
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_links"><a href="http://arxiv.org/abs/1906.02850" title="" class="ltx_ref ltx_bib_external">Link</a></span>
        </span>
        <span class="ltx_bibblock ltx_bib_cited">Cited by: <a href="#S2.SS1.SSS1.p1" title="2.1.1 Computer Vision and Natural Language Processing ‣ 2.1 Automatic Methods for Visualization Captioning ‣ 2 Related Work ‣ Accessible Visualization via Natural Language Descriptions: A Four-Level Model of Semantic Content" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§2.1.1</span></a>.
        </span>
      </li>
      <li id="bib.bib69" class="ltx_bibitem ltx_bib_inproceedings">
        <span class="ltx_tag ltx_bib_key ltx_role_refnum ltx_tag_bibitem">[25]</span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_author">J. Choi, S. Jung, D. G. Park, J. Choo, and N. Elmqvist</span><span class="ltx_text ltx_bib_year"> (2019)</span>
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_title">Visualizing for the Non-Visual: Enabling the Visually Impaired to Use Visualization</span>.
        </span>
        <span class="ltx_bibblock">In <span class="ltx_text ltx_bib_inbook">CGF</span>,
        </span>
        <span class="ltx_bibblock">(<span class="ltx_text ltx_bib_language">en</span>).
        </span>
        <span class="ltx_bibblock ltx_bib_cited">Cited by: <a href="#S1.p2" title="1 Introduction ‣ Accessible Visualization via Natural Language Descriptions: A Four-Level Model of Semantic Content" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§1</span></a>,
          <a href="#S2.SS2.p1" title="2.2 Accessible Media and Human-Computer Interaction ‣ 2 Related Work ‣ Accessible Visualization via Natural Language Descriptions: A Four-Level Model of Semantic Content" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§2.2</span></a>.
        </span>
      </li>
      <li id="bib.bib51" class="ltx_bibitem ltx_bib_inproceedings">
        <span class="ltx_tag ltx_bib_key ltx_role_refnum ltx_tag_bibitem">[26]</span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_author">S. Demir, S. Carberry, and K. F. McCoy</span><span class="ltx_text ltx_bib_year"> (2008)</span>
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_title">Generating textual summaries of bar chartsGenerating Textual Summaries Of Bar Charts</span>.
        </span>
        <span class="ltx_bibblock">In <span class="ltx_text ltx_bib_inbook">INLG</span>,
        </span>
        <span class="ltx_bibblock">(<span class="ltx_text ltx_bib_language">en</span>).
        </span>
        <span class="ltx_bibblock ltx_bib_cited">Cited by: <a href="#S4.SS2.p5" title="4.2 Level 2: Statistical Concepts and Relations ‣ 4 A Four-Level Model of Semantic Content ‣ Accessible Visualization via Natural Language Descriptions: A Four-Level Model of Semantic Content" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§4.2</span></a>.
        </span>
      </li>
      <li id="bib.bib49" class="ltx_bibitem ltx_bib_inproceedings">
        <span class="ltx_tag ltx_bib_key ltx_role_refnum ltx_tag_bibitem">[27]</span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_author">S. Demir, S. Carberry, and K. F. McCoy</span><span class="ltx_text ltx_bib_year"> (2012)</span>
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_title">Summarizing Information Graphics Textually</span>.
        </span>
        <span class="ltx_bibblock">In <span class="ltx_text ltx_bib_inbook">Computational Linguistics</span>,
        </span>
        <span class="ltx_bibblock ltx_bib_cited">Cited by: <a href="#S1.p2" title="1 Introduction ‣ Accessible Visualization via Natural Language Descriptions: A Four-Level Model of Semantic Content" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§1</span></a>,
          <a href="#S2.SS2.p1" title="2.2 Accessible Media and Human-Computer Interaction ‣ 2 Related Work ‣ Accessible Visualization via Natural Language Descriptions: A Four-Level Model of Semantic Content" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§2.2</span></a>,
          <a href="#S2.SS3.SSS1.p1" title="2.3.1 Using Natural Language to Describe Visualizations ‣ 2.3 Natural Language Hierarchies and Interfaces ‣ 2 Related Work ‣ Accessible Visualization via Natural Language Descriptions: A Four-Level Model of Semantic Content" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§2.3.1</span></a>,
          <a href="#S5.SS4.SSS5.p1" title="5.4.5 Some Automatic Methods Raise Ethical Concerns ‣ 5.4 Qualitative Results ‣ 5 Applying the Model: Evaluating the Effectiveness of Visualization Descriptions ‣ Accessible Visualization via Natural Language Descriptions: A Four-Level Model of Semantic Content" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§5.4.5</span></a>.
        </span>
      </li>
      <li id="bib.bib55" class="ltx_bibitem ltx_bib_article">
        <span class="ltx_tag ltx_bib_key ltx_role_refnum ltx_tag_bibitem">[28]</span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_author">M. Ehrenkranz</span><span class="ltx_text ltx_bib_year"> (2020)</span>
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_title">Vital Coronavirus Information Is Failing the Blind and Visually Impaired</span>.
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_journal">Vice</span>.
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_links"><a href="https://www.vice.com/en/article/4ag9wb/vital-coronavirus-information-is-failing-the-blind-and-visually-impaired" title="" class="ltx_ref ltx_bib_external">Link</a></span>
        </span>
        <span class="ltx_bibblock ltx_bib_cited">Cited by: <a href="#S1.p1" title="1 Introduction ‣ Accessible Visualization via Natural Language Descriptions: A Four-Level Model of Semantic Content" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§1</span></a>,
        <a href="#teaser" title="Figure Teaser ‣ Accessible Visualization via Natural Language Descriptions: A Four-Level Model of Semantic Content" class="ltx_ref"><span class="ltx_text ltx_ref_tag">Teaser</span></a>.
        </span>
      </li>
      <li id="bib.bib128" class="ltx_bibitem ltx_bib_misc">
        <span class="ltx_tag ltx_bib_key ltx_role_refnum ltx_tag_bibitem">[29]</span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_author">F. Elavsky</span><span class="ltx_text ltx_bib_year"> (2021)</span>
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_title">Chartability</span>.
        </span>
        <span class="ltx_bibblock">Note: <span class="ltx_text ltx_bib_note">https://chartability.fizz.studio/</span>
        </span>
        <span class="ltx_bibblock ltx_bib_cited">Cited by: <a href="#S2.SS2.SSS1.p1" title="2.2.1 Descriptions Authored by Experts ‣ 2.2 Accessible Media and Human-Computer Interaction ‣ 2 Related Work ‣ Accessible Visualization via Natural Language Descriptions: A Four-Level Model of Semantic Content" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§2.2.1</span></a>.
        </span>
      </li>
      <li id="bib.bib53" class="ltx_bibitem ltx_bib_inproceedings">
        <span class="ltx_tag ltx_bib_key ltx_role_refnum ltx_tag_bibitem">[30]</span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_author">S. Elzer, S. Carberry, D. Chester, S. Demir, N. Green, I. Zukerman, and K. Trnka</span><span class="ltx_text ltx_bib_year"> (2005)</span>
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_title">Exploring And Exploiting The Limited Utility Of Captions In Recognizing Intention In Information Graphics</span>.
        </span>
        <span class="ltx_bibblock">In <span class="ltx_text ltx_bib_inbook">ACL</span>,
        </span>
        <span class="ltx_bibblock ltx_bib_cited">Cited by: <a href="#S2.SS2.p1" title="2.2 Accessible Media and Human-Computer Interaction ‣ 2 Related Work ‣ Accessible Visualization via Natural Language Descriptions: A Four-Level Model of Semantic Content" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§2.2</span></a>.
        </span>
      </li>
      <li id="bib.bib52" class="ltx_bibitem ltx_bib_inproceedings">
        <span class="ltx_tag ltx_bib_key ltx_role_refnum ltx_tag_bibitem">[31]</span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_author">S. Elzer, E. Schwartz, S. Carberry, D. Chester, S. Demir, and P. Wu</span><span class="ltx_text ltx_bib_year"> (2007)</span>
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_title">A Browser Extension For Providing Visually Impaired Users Access To The Content Of Bar Charts On The Web</span>.
        </span>
        <span class="ltx_bibblock">In <span class="ltx_text ltx_bib_inbook">WEBIST</span>,
        </span>
        <span class="ltx_bibblock ltx_bib_cited">Cited by: <a href="#S2.SS2.p1" title="2.2 Accessible Media and Human-Computer Interaction ‣ 2 Related Work ‣ Accessible Visualization via Natural Language Descriptions: A Four-Level Model of Semantic Content" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§2.2</span></a>.
        </span>
      </li>
      <li id="bib.bib136" class="ltx_bibitem ltx_bib_misc">
        <span class="ltx_tag ltx_bib_key ltx_role_refnum ltx_tag_bibitem">[32]</span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_author">C. Fisher</span><span class="ltx_text ltx_bib_year"> (2019)</span>
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_title">Creating Accessible SVGs</span>.
        </span>
        <span class="ltx_bibblock">(<span class="ltx_text ltx_bib_language">en-US</span>).
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_links"><a href="https://www.deque.com/blog/creating-accessible-svgs/" title="" class="ltx_ref ltx_bib_external">Link</a></span>
        </span>
        <span class="ltx_bibblock ltx_bib_cited">Cited by: <a href="#S2.SS2.SSS1.p1" title="2.2.1 Descriptions Authored by Experts ‣ 2.2 Accessible Media and Human-Computer Interaction ‣ 2 Related Work ‣ Accessible Visualization via Natural Language Descriptions: A Four-Level Model of Semantic Content" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§2.2.1</span></a>.
        </span>
      </li>
      <li id="bib.bib114" class="ltx_bibitem ltx_bib_article">
        <span class="ltx_tag ltx_bib_key ltx_role_refnum ltx_tag_bibitem">[33]</span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_author">C. Fleet</span><span class="ltx_text ltx_bib_year"> (2021)</span>
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_title">Things which garner a ton of glowing reviews from mainstream outlets without being of much use to disabled people. For instance, Facebook’s auto image descriptions, much loved by sighted journos but famously useless in the Blind community</span>.
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_journal">Twitter</span>.
        </span>
        <span class="ltx_bibblock">Note: <span class="ltx_text ltx_bib_note">https://twitter.com/ChanceyFleet/status/1349211417744961536</span>
        </span>
        <span class="ltx_bibblock ltx_bib_cited">Cited by: <a href="#S5.SS4.SSS5.p1" title="5.4.5 Some Automatic Methods Raise Ethical Concerns ‣ 5.4 Qualitative Results ‣ 5 Applying the Model: Evaluating the Effectiveness of Visualization Descriptions ‣ Accessible Visualization via Natural Language Descriptions: A Four-Level Model of Semantic Content" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§5.4.5</span></a>.
        </span>
      </li>
      <li id="bib.bib133" class="ltx_bibitem ltx_bib_misc">
        <span class="ltx_tag ltx_bib_key ltx_role_refnum ltx_tag_bibitem">[34]</span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_author">S. L. Fossheim</span><span class="ltx_text ltx_bib_year"> (2020)</span>
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_title">An Introduction To Accessible Data Visualizations With D3.js</span>.
        </span>
        <span class="ltx_bibblock">(<span class="ltx_text ltx_bib_language">en</span>).
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_links"><a href="https://fossheim.io/" title="" class="ltx_ref ltx_bib_external">Link</a></span>
        </span>
        <span class="ltx_bibblock ltx_bib_cited">Cited by: <a href="#S2.SS2.SSS1.p1" title="2.2.1 Descriptions Authored by Experts ‣ 2.2 Accessible Media and Human-Computer Interaction ‣ 2 Related Work ‣ Accessible Visualization via Natural Language Descriptions: A Four-Level Model of Semantic Content" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§2.2.1</span></a>.
        </span>
      </li>
      <li id="bib.bib66" class="ltx_bibitem ltx_bib_inproceedings">
        <span class="ltx_tag ltx_bib_key ltx_role_refnum ltx_tag_bibitem">[35]</span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_author">M. Galesic and R. Garcia-Retamero</span><span class="ltx_text ltx_bib_year"> (2011)</span>
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_title">Graph Literacy: A Cross-cultural Comparison</span>.
        </span>
        <span class="ltx_bibblock">In <span class="ltx_text ltx_bib_inbook">Medical Decision Making</span>,
        </span>
        <span class="ltx_bibblock ltx_bib_cited">Cited by: <a href="#S2.SS3.SSS1.p1" title="2.3.1 Using Natural Language to Describe Visualizations ‣ 2.3 Natural Language Hierarchies and Interfaces ‣ 2 Related Work ‣ Accessible Visualization via Natural Language Descriptions: A Four-Level Model of Semantic Content" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§2.3.1</span></a>.
        </span>
      </li>
      <li id="bib.bib62" class="ltx_bibitem ltx_bib_inproceedings">
        <span class="ltx_tag ltx_bib_key ltx_role_refnum ltx_tag_bibitem">[36]</span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_author">T. Gao, M. Dontcheva, E. Adar, Z. Liu, and K. G. Karahalios</span><span class="ltx_text ltx_bib_year"> (2015)</span>
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_title">DataTone: Managing Ambiguity in Natural Language Interfaces for Data Visualization</span>.
        </span>
        <span class="ltx_bibblock">In <span class="ltx_text ltx_bib_inbook">UIST</span>,
        </span>
        <span class="ltx_bibblock ltx_bib_cited">Cited by: <a href="#S6.SS1.p1" title="6.1 Natural Language As An Interface Into Visualization ‣ 6 Discussion and Future Work ‣ Accessible Visualization via Natural Language Descriptions: A Four-Level Model of Semantic Content" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§6.1</span></a>.
        </span>
      </li>
      <li id="bib.bib73" class="ltx_bibitem ltx_bib_article">
        <span class="ltx_tag ltx_bib_key ltx_role_refnum ltx_tag_bibitem">[37]</span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_author">S. García, A. Fernández, J. Luengo, and F. Herrera</span><span class="ltx_text ltx_bib_year"> (2010)</span>
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_title">Advanced Nonparametric Tests For Multiple Comparisons In The Design Of Experiments In Computational Intelligence And Data Mining: Experimental Analysis Of Power</span>.
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_journal">Information Sciences</span> (<span class="ltx_text ltx_bib_language">en</span>).
        </span>
        <span class="ltx_bibblock ltx_bib_cited">Cited by: <a href="#S5.SS3.p2" title="5.3 Quantitative Results ‣ 5 Applying the Model: Evaluating the Effectiveness of Visualization Descriptions ‣ Accessible Visualization via Natural Language Descriptions: A Four-Level Model of Semantic Content" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§5.3</span></a>.
        </span>
      </li>
      <li id="bib.bib63" class="ltx_bibitem ltx_bib_article">
        <span class="ltx_tag ltx_bib_key ltx_role_refnum ltx_tag_bibitem">[38]</span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_author">B. Geveci, W. Schroeder, A. Brown, and G. Wilson</span><span class="ltx_text ltx_bib_year"> (2012)</span>
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_title">VTK</span>.
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_journal">The Architecture of Open Source Applications</span>.
        </span>
        <span class="ltx_bibblock ltx_bib_cited">Cited by: <a href="#S2.SS1.SSS2.p1" title="2.1.2 Structured Visualization Specifications ‣ 2.1 Automatic Methods for Visualization Captioning ‣ 2 Related Work ‣ Accessible Visualization via Natural Language Descriptions: A Four-Level Model of Semantic Content" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§2.1.2</span></a>.
        </span>
      </li>
      <li id="bib.bib45" class="ltx_bibitem ltx_bib_report">
        <span class="ltx_tag ltx_bib_key ltx_role_refnum ltx_tag_bibitem">[39]</span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_author">B. Gould, T. O’Connell, and G. Freed</span><span class="ltx_text ltx_bib_year"> (2008)</span>
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_title">Effective Practices for Description of Science Content within Digital Talking Books</span>.
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_type">Technical report</span>
        </span>
        <span class="ltx_bibblock"> <span class="ltx_text ltx_bib_publisher">The WGBH National Center for Accessible Media</span> (<span class="ltx_text ltx_bib_language">en</span>).
        </span>
        <span class="ltx_bibblock">Note: <span class="ltx_text ltx_bib_note">https://www.wgbh.org/foundation/ncam/guidelines/effective-practices-for-description-of-science-content-within-digital-talking-books</span>
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_links"><a href="https://www.wgbh.org/foundation/ncam/guidelines/effective-practices-for-description-of-science-content-within-digital-talking-books" title="" class="ltx_ref ltx_bib_external">Link</a></span>
        </span>
        <span class="ltx_bibblock ltx_bib_cited">Cited by: <a href="#S1.p2" title="1 Introduction ‣ Accessible Visualization via Natural Language Descriptions: A Four-Level Model of Semantic Content" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§1</span></a>,
          <a href="#S2.SS2.SSS1.p1" title="2.2.1 Descriptions Authored by Experts ‣ 2.2 Accessible Media and Human-Computer Interaction ‣ 2 Related Work ‣ Accessible Visualization via Natural Language Descriptions: A Four-Level Model of Semantic Content" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§2.2.1</span></a>,
          <a href="#S5.SS1.p2" title="5.1 Evaluation Design ‣ 5 Applying the Model: Evaluating the Effectiveness of Visualization Descriptions ‣ Accessible Visualization via Natural Language Descriptions: A Four-Level Model of Semantic Content" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§5.1</span></a>.
        </span>
      </li>
      <li id="bib.bib113" class="ltx_bibitem ltx_bib_article">
        <span class="ltx_tag ltx_bib_key ltx_role_refnum ltx_tag_bibitem">[40]</span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_author">M. Hanley, S. Barocas, K. Levy, S. Azenkot, and H. Nissenbaum</span><span class="ltx_text ltx_bib_year"> (2021)</span>
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_title">Computer Vision and Conflicting Values: Describing People with Automated Alt Text</span>.
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_journal">arXiv</span>.
        </span>
        <span class="ltx_bibblock ltx_bib_cited">Cited by: <a href="#S5.SS4.SSS5.p1" title="5.4.5 Some Automatic Methods Raise Ethical Concerns ‣ 5.4 Qualitative Results ‣ 5 Applying the Model: Evaluating the Effectiveness of Visualization Descriptions ‣ Accessible Visualization via Natural Language Descriptions: A Four-Level Model of Semantic Content" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§5.4.5</span></a>.
        </span>
      </li>
      <li id="bib.bib88" class="ltx_bibitem ltx_bib_report">
        <span class="ltx_tag ltx_bib_key ltx_role_refnum ltx_tag_bibitem">[41]</span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_author">L. Hasty, J. Milbury, I. Miller, A. O’Day, P. Acquinas, and D. Spence</span><span class="ltx_text ltx_bib_year"> (2011)</span>
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_title">Guidelines and Standards for Tactile Graphics</span>.
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_type">Technical report</span>
        </span>
        <span class="ltx_bibblock"> <span class="ltx_text ltx_bib_publisher">Braille Authority of North America</span>.
        </span>
        <span class="ltx_bibblock">Note: <span class="ltx_text ltx_bib_note">http://www.brailleauthority.org/tg/</span>
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_links"><a href="http://www.brailleauthority.org/tg/" title="" class="ltx_ref ltx_bib_external">Link</a></span>
        </span>
        <span class="ltx_bibblock ltx_bib_cited">Cited by: <a href="#S1.p2" title="1 Introduction ‣ Accessible Visualization via Natural Language Descriptions: A Four-Level Model of Semantic Content" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§1</span></a>.
        </span>
      </li>
      <li id="bib.bib91" class="ltx_bibitem ltx_bib_inproceedings">
        <span class="ltx_tag ltx_bib_key ltx_role_refnum ltx_tag_bibitem">[42]</span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_author">M. Hearst, M. Tory, and V. Setlur</span><span class="ltx_text ltx_bib_year"> (2019)</span>
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_title">Toward Interface Defaults for Vague Modifiers in Natural Language Interfaces for Visual Analysis</span>.
        </span>
        <span class="ltx_bibblock">In <span class="ltx_text ltx_bib_inbook">VIS</span>,
        </span>
        <span class="ltx_bibblock ltx_bib_cited">Cited by: <a href="#S2.SS3.SSS2.p1" title="2.3.2 Using Natural Language to Interact with Visualizations ‣ 2.3 Natural Language Hierarchies and Interfaces ‣ 2 Related Work ‣ Accessible Visualization via Natural Language Descriptions: A Four-Level Model of Semantic Content" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§2.3.2</span></a>.
        </span>
      </li>
      <li id="bib.bib93" class="ltx_bibitem ltx_bib_inproceedings">
        <span class="ltx_tag ltx_bib_key ltx_role_refnum ltx_tag_bibitem">[43]</span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_author">M. Hearst and M. Tory</span><span class="ltx_text ltx_bib_year"> (2019)</span>
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_title">Would You Like A Chart With That? Incorporating Visualizations into Conversational Interfaces</span>.
        </span>
        <span class="ltx_bibblock">In <span class="ltx_text ltx_bib_inbook">VIS</span>,
        </span>
        <span class="ltx_bibblock ltx_bib_cited">Cited by: <a href="#S2.SS3.SSS2.p1" title="2.3.2 Using Natural Language to Interact with Visualizations ‣ 2.3 Natural Language Hierarchies and Interfaces ‣ 2 Related Work ‣ Accessible Visualization via Natural Language Descriptions: A Four-Level Model of Semantic Content" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§2.3.2</span></a>,
          <a href="#S6.SS2.p1" title="6.2 Natural Language As Coequal With Visualization ‣ 6 Discussion and Future Work ‣ Accessible Visualization via Natural Language Descriptions: A Four-Level Model of Semantic Content" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§6.2</span></a>.
        </span>
      </li>
      <li id="bib.bib14" class="ltx_bibitem ltx_bib_inproceedings">
        <span class="ltx_tag ltx_bib_key ltx_role_refnum ltx_tag_bibitem">[44]</span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_author">J. Hullman and N. Diakopoulos</span><span class="ltx_text ltx_bib_year"> (2011)</span>
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_title">Visualization Rhetoric: Framing Effects in Narrative Visualization</span>.
        </span>
        <span class="ltx_bibblock">In <span class="ltx_text ltx_bib_inbook">TVCG</span>,
        </span>
        <span class="ltx_bibblock">(<span class="ltx_text ltx_bib_language">en</span>).
        </span>
        <span class="ltx_bibblock ltx_bib_cited">Cited by: <a href="#S6.SS2.p2" title="6.2 Natural Language As Coequal With Visualization ‣ 6 Discussion and Future Work ‣ Accessible Visualization via Natural Language Descriptions: A Four-Level Model of Semantic Content" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§6.2</span></a>.
        </span>
      </li>
      <li id="bib.bib107" class="ltx_bibitem ltx_bib_inproceedings">
        <span class="ltx_tag ltx_bib_key ltx_role_refnum ltx_tag_bibitem">[45]</span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_author">J. Hullman, N. Diakopoulos, and E. Adar</span><span class="ltx_text ltx_bib_year"> (2013)</span>
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_title">Contextifier: automatic generation of annotated stock visualizations</span>.
        </span>
        <span class="ltx_bibblock">In <span class="ltx_text ltx_bib_inbook">CHI</span>,
        </span>
        <span class="ltx_bibblock ltx_bib_cited">Cited by: <a href="#S4.SS4.p4" title="4.4 Level 4: Contextual and Domain-Specific Insights ‣ 4 A Four-Level Model of Semantic Content ‣ Accessible Visualization via Natural Language Descriptions: A Four-Level Model of Semantic Content" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§4.4</span></a>.
        </span>
      </li>
      <li id="bib.bib12" class="ltx_bibitem ltx_bib_inproceedings">
        <span class="ltx_tag ltx_bib_key ltx_role_refnum ltx_tag_bibitem">[46]</span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_author">J. Hullman, N. Diakopoulos, E. Momeni, and E. Adar</span><span class="ltx_text ltx_bib_year"> (2015)</span>
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_title">Content, Context, and Critique: Commenting on a Data Visualization Blog</span>.
        </span>
        <span class="ltx_bibblock">In <span class="ltx_text ltx_bib_inbook">CSCW</span>,
        </span>
        <span class="ltx_bibblock ltx_bib_cited">Cited by: <a href="#S6.SS2.p2" title="6.2 Natural Language As Coequal With Visualization ‣ 6 Discussion and Future Work ‣ Accessible Visualization via Natural Language Descriptions: A Four-Level Model of Semantic Content" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§6.2</span></a>.
        </span>
      </li>
      <li id="bib.bib25" class="ltx_bibitem ltx_bib_article">
        <span class="ltx_tag ltx_bib_key ltx_role_refnum ltx_tag_bibitem">[47]</span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_author">S. E. Kahou, V. Michalski, A. Atkinson, A. Kadar, A. Trischler, and Y. Bengio</span><span class="ltx_text ltx_bib_year"> (2018)</span>
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_title">FigureQA: An Annotated Figure Dataset for Visual Reasoning</span>.
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_journal">arXiv</span>.
        </span>
        <span class="ltx_bibblock ltx_bib_cited">Cited by: <a href="#S2.SS1.SSS1.p1" title="2.1.1 Computer Vision and Natural Language Processing ‣ 2.1 Automatic Methods for Visualization Captioning ‣ 2 Related Work ‣ Accessible Visualization via Natural Language Descriptions: A Four-Level Model of Semantic Content" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§2.1.1</span></a>,
          <a href="#S4.SS1.p4" title="4.1 Level 1: Elemental and Encoded Properties ‣ 4 A Four-Level Model of Semantic Content ‣ Accessible Visualization via Natural Language Descriptions: A Four-Level Model of Semantic Content" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§4.1</span></a>.
        </span>
      </li>
      <li id="bib.bib83" class="ltx_bibitem ltx_bib_inproceedings">
        <span class="ltx_tag ltx_bib_key ltx_role_refnum ltx_tag_bibitem">[48]</span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_author">A. Karpathy and L. Fei-Fei</span><span class="ltx_text ltx_bib_year"> (2017-04)</span>
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_title">Deep Visual-Semantic Alignments for Generating Image Descriptions</span>.
        </span>
        <span class="ltx_bibblock">In <span class="ltx_text ltx_bib_inbook">TPAMI</span>,
        </span>
        <span class="ltx_bibblock ltx_bib_cited">Cited by: <a href="#S2.SS1.SSS1.p1" title="2.1.1 Computer Vision and Natural Language Processing ‣ 2.1 Automatic Methods for Visualization Captioning ‣ 2 Related Work ‣ Accessible Visualization via Natural Language Descriptions: A Four-Level Model of Semantic Content" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§2.1.1</span></a>.
        </span>
      </li>
      <li id="bib.bib89" class="ltx_bibitem ltx_bib_inproceedings">
        <span class="ltx_tag ltx_bib_key ltx_role_refnum ltx_tag_bibitem">[49]</span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_author">D. A. Keim and D. Oelke</span><span class="ltx_text ltx_bib_year"> (2007)</span>
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_title">Literature Fingerprinting: A New Method for Visual Literary Analysis</span>.
        </span>
        <span class="ltx_bibblock">In <span class="ltx_text ltx_bib_inbook">VAST</span>,
        </span>
        <span class="ltx_bibblock ltx_bib_cited">Cited by: <a href="#S3.F1" title="Figure 1 ‣ 3.2.1 Survey Design ‣ 3.2 Gathering A Corpus ‣ 3 Constructing the Model: Employing the Grounded Theory Methodology ‣ Accessible Visualization via Natural Language Descriptions: A Four-Level Model of Semantic Content" class="ltx_ref"><span class="ltx_text ltx_ref_tag">Figure 1</span></a>,
          <a href="#S3.SS2.SSS2.p2" title="3.2.2 Survey Results ‣ 3.2 Gathering A Corpus ‣ 3 Constructing the Model: Employing the Grounded Theory Methodology ‣ Accessible Visualization via Natural Language Descriptions: A Four-Level Model of Semantic Content" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§3.2.2</span></a>.
        </span>
      </li>
      <li id="bib.bib1" class="ltx_bibitem ltx_bib_inproceedings">
        <span class="ltx_tag ltx_bib_key ltx_role_refnum ltx_tag_bibitem">[50]</span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_author">D. H. Kim, E. Hoque, and M. Agrawala</span><span class="ltx_text ltx_bib_year"> (2020-04)</span>
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_title">Answering Questions about Charts and Generating Visual Explanations</span>.
        </span>
        <span class="ltx_bibblock">In <span class="ltx_text ltx_bib_inbook">CHI</span>,
        </span>
        <span class="ltx_bibblock">(<span class="ltx_text ltx_bib_language">en</span>).
        </span>
        <span class="ltx_bibblock ltx_bib_cited">Cited by: <a href="#S2.SS3.SSS2.p1" title="2.3.2 Using Natural Language to Interact with Visualizations ‣ 2.3 Natural Language Hierarchies and Interfaces ‣ 2 Related Work ‣ Accessible Visualization via Natural Language Descriptions: A Four-Level Model of Semantic Content" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§2.3.2</span></a>.
        </span>
      </li>
      <li id="bib.bib96" class="ltx_bibitem ltx_bib_inproceedings">
        <span class="ltx_tag ltx_bib_key ltx_role_refnum ltx_tag_bibitem">[51]</span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_author">D. H. Kim, E. Hoque, J. Kim, and M. Agrawala</span><span class="ltx_text ltx_bib_year"> (2018)</span>
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_title">Facilitating Document Reading by Linking Text and Tables</span>.
        </span>
        <span class="ltx_bibblock">In <span class="ltx_text ltx_bib_inbook">UIST</span>,
        </span>
        <span class="ltx_bibblock ltx_bib_cited">Cited by: <a href="#S2.SS3.SSS2.p1" title="2.3.2 Using Natural Language to Interact with Visualizations ‣ 2.3 Natural Language Hierarchies and Interfaces ‣ 2 Related Work ‣ Accessible Visualization via Natural Language Descriptions: A Four-Level Model of Semantic Content" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§2.3.2</span></a>.
        </span>
      </li>
      <li id="bib.bib71" class="ltx_bibitem ltx_bib_inproceedings">
        <span class="ltx_tag ltx_bib_key ltx_role_refnum ltx_tag_bibitem">[52]</span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_author">D. H. Kim, V. Setlur, and M. Agrawala</span><span class="ltx_text ltx_bib_year"> (2021)</span>
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_title">Towards Understanding How Readers Integrate Charts and Captions: A Case Study with Line Charts</span>.
        </span>
        <span class="ltx_bibblock">In <span class="ltx_text ltx_bib_inbook">CHI</span>,
        </span>
        <span class="ltx_bibblock">(<span class="ltx_text ltx_bib_language">en</span>).
        </span>
        <span class="ltx_bibblock ltx_bib_cited">Cited by: <a href="#S2.SS3.SSS2.p1" title="2.3.2 Using Natural Language to Interact with Visualizations ‣ 2.3 Natural Language Hierarchies and Interfaces ‣ 2 Related Work ‣ Accessible Visualization via Natural Language Descriptions: A Four-Level Model of Semantic Content" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§2.3.2</span></a>.
        </span>
      </li>
      <li id="bib.bib106" class="ltx_bibitem ltx_bib_inproceedings">
        <span class="ltx_tag ltx_bib_key ltx_role_refnum ltx_tag_bibitem">[53]</span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_author">N. W. Kim, S. C. Joyner, A. Riegelhuth, and Y. Kim</span><span class="ltx_text ltx_bib_year"> (2021)</span>
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_title">Accessible Visualization: Design Space, Opportunities, and Challenges</span>.
        </span>
        <span class="ltx_bibblock">In <span class="ltx_text ltx_bib_inbook">CGF</span>,
        </span>
        <span class="ltx_bibblock ltx_bib_cited">Cited by: <a href="#S1.p2" title="1 Introduction ‣ Accessible Visualization via Natural Language Descriptions: A Four-Level Model of Semantic Content" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§1</span></a>.
        </span>
      </li>
      <li id="bib.bib99" class="ltx_bibitem ltx_bib_inproceedings">
        <span class="ltx_tag ltx_bib_key ltx_role_refnum ltx_tag_bibitem">[54]</span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_author">H. Kong, Z. Liu, and K. Karahalios</span><span class="ltx_text ltx_bib_year"> (2018-04)</span>
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_title">Frames and Slants in Titles of Visualizations on Controversial Topics</span>.
        </span>
        <span class="ltx_bibblock">In <span class="ltx_text ltx_bib_inbook">CHI</span>,
        </span>
        <span class="ltx_bibblock">(<span class="ltx_text ltx_bib_language">en</span>).
        </span>
        <span class="ltx_bibblock ltx_bib_cited">Cited by: <a href="#S2.SS3.SSS2.p1" title="2.3.2 Using Natural Language to Interact with Visualizations ‣ 2.3 Natural Language Hierarchies and Interfaces ‣ 2 Related Work ‣ Accessible Visualization via Natural Language Descriptions: A Four-Level Model of Semantic Content" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§2.3.2</span></a>.
        </span>
      </li>
      <li id="bib.bib100" class="ltx_bibitem ltx_bib_inproceedings">
        <span class="ltx_tag ltx_bib_key ltx_role_refnum ltx_tag_bibitem">[55]</span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_author">H. Kong, Z. Liu, and K. Karahalios</span><span class="ltx_text ltx_bib_year"> (2019-05)</span>
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_title">Trust and Recall of Information across Varying Degrees of Title-Visualization Misalignment</span>.
        </span>
        <span class="ltx_bibblock">In <span class="ltx_text ltx_bib_inbook">CHI</span>,
        </span>
        <span class="ltx_bibblock">(<span class="ltx_text ltx_bib_language">en</span>).
        </span>
        <span class="ltx_bibblock ltx_bib_cited">Cited by: <a href="#S2.SS3.SSS2.p1" title="2.3.2 Using Natural Language to Interact with Visualizations ‣ 2.3 Natural Language Hierarchies and Interfaces ‣ 2 Related Work ‣ Accessible Visualization via Natural Language Descriptions: A Four-Level Model of Semantic Content" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§2.3.2</span></a>.
        </span>
      </li>
      <li id="bib.bib95" class="ltx_bibitem ltx_bib_inproceedings">
        <span class="ltx_tag ltx_bib_key ltx_role_refnum ltx_tag_bibitem">[56]</span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_author">N. Kong, M. A. Hearst, and M. Agrawala</span><span class="ltx_text ltx_bib_year"> (2014)</span>
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_title">Extracting References Between Text And Charts Via Crowdsourcing</span>.
        </span>
        <span class="ltx_bibblock">In <span class="ltx_text ltx_bib_inbook">CHI</span>,
        </span>
        <span class="ltx_bibblock ltx_bib_cited">Cited by: <a href="#S2.SS2.SSS2.p1" title="2.2.2 Descriptions Authored by Non-Experts ‣ 2.2 Accessible Media and Human-Computer Interaction ‣ 2 Related Work ‣ Accessible Visualization via Natural Language Descriptions: A Four-Level Model of Semantic Content" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§2.2.2</span></a>.
        </span>
      </li>
      <li id="bib.bib43" class="ltx_bibitem ltx_bib_article">
        <span class="ltx_tag ltx_bib_key ltx_role_refnum ltx_tag_bibitem">[57]</span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_author">S. M. Kosslyn</span><span class="ltx_text ltx_bib_year"> (1989)</span>
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_title">Understanding Charts and Graphs</span>.
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_journal">Applied Cognitive Psychology</span> (<span class="ltx_text ltx_bib_language">en</span>).
        </span>
        <span class="ltx_bibblock ltx_bib_cited">Cited by: <a href="#S2.SS3.SSS1.p1" title="2.3.1 Using Natural Language to Describe Visualizations ‣ 2.3 Natural Language Hierarchies and Interfaces ‣ 2 Related Work ‣ Accessible Visualization via Natural Language Descriptions: A Four-Level Model of Semantic Content" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§2.3.1</span></a>.
        </span>
      </li>
      <li id="bib.bib74" class="ltx_bibitem ltx_bib_inproceedings">
        <span class="ltx_tag ltx_bib_key ltx_role_refnum ltx_tag_bibitem">[58]</span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_author">R. Krishna, Y. Zhu, O. Groth, J. Johnson, K. Hata, J. Kravitz, S. Chen, Y. Kalantidis, L. Li, D. A. Shamma, M. S. Bernstein, and L. Fei-Fei</span><span class="ltx_text ltx_bib_year"> (2017)</span>
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_title">Visual Genome: Connecting Language and Vision Using Crowdsourced Dense Image Annotations</span>.
        </span>
        <span class="ltx_bibblock">In <span class="ltx_text ltx_bib_inbook">IJCV</span>,
        </span>
        <span class="ltx_bibblock ltx_bib_cited">Cited by: <a href="#S2.SS1.SSS1.p1" title="2.1.1 Computer Vision and Natural Language Processing ‣ 2.1 Automatic Methods for Visualization Captioning ‣ 2 Related Work ‣ Accessible Visualization via Natural Language Descriptions: A Four-Level Model of Semantic Content" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§2.1.1</span></a>.
        </span>
      </li>
      <li id="bib.bib2" class="ltx_bibitem ltx_bib_inproceedings">
        <span class="ltx_tag ltx_bib_key ltx_role_refnum ltx_tag_bibitem">[59]</span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_author">C. Lai, Z. Lin, R. Jiang, Y. Han, C. Liu, and X. Yuan</span><span class="ltx_text ltx_bib_year"> (2020)</span>
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_title">Automatic Annotation Synchronizing with Textual Description for Visualization</span>.
        </span>
        <span class="ltx_bibblock">In <span class="ltx_text ltx_bib_inbook">CHI</span>,
        </span>
        <span class="ltx_bibblock">(<span class="ltx_text ltx_bib_language">en</span>).
        </span>
        <span class="ltx_bibblock ltx_bib_cited">Cited by: <a href="#S2.SS1.SSS1.p1" title="2.1.1 Computer Vision and Natural Language Processing ‣ 2.1 Automatic Methods for Visualization Captioning ‣ 2 Related Work ‣ Accessible Visualization via Natural Language Descriptions: A Four-Level Model of Semantic Content" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§2.1.1</span></a>.
        </span>
      </li>
      <li id="bib.bib34" class="ltx_bibitem ltx_bib_article">
        <span class="ltx_tag ltx_bib_key ltx_role_refnum ltx_tag_bibitem">[60]</span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_author">P. Law, A. Endert, and J. Stasko</span><span class="ltx_text ltx_bib_year"> (2020-08)</span>
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_title">What are Data Insights to Professional Visualization Users?</span>.
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_journal">arXiv</span>.
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_links"><a href="http://arxiv.org/abs/2008.13057" title="" class="ltx_ref ltx_bib_external">Link</a></span>
        </span>
        <span class="ltx_bibblock ltx_bib_cited">Cited by: <a href="#S4.SS4.p3" title="4.4 Level 4: Contextual and Domain-Specific Insights ‣ 4 A Four-Level Model of Semantic Content ‣ Accessible Visualization via Natural Language Descriptions: A Four-Level Model of Semantic Content" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§4.4</span></a>.
        </span>
      </li>
      <li id="bib.bib33" class="ltx_bibitem ltx_bib_article">
        <span class="ltx_tag ltx_bib_key ltx_role_refnum ltx_tag_bibitem">[61]</span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_author">P. Law, A. Endert, and J. Stasko</span><span class="ltx_text ltx_bib_year"> (2020)</span>
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_title">Characterizing Automated Data Insights</span>.
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_journal">arXiv</span>.
        </span>
        <span class="ltx_bibblock ltx_bib_cited">Cited by: <a href="#S4.SS4.p3" title="4.4 Level 4: Contextual and Domain-Specific Insights ‣ 4 A Four-Level Model of Semantic Content ‣ Accessible Visualization via Natural Language Descriptions: A Four-Level Model of Semantic Content" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§4.4</span></a>.
        </span>
      </li>
      <li id="bib.bib80" class="ltx_bibitem ltx_bib_inproceedings">
        <span class="ltx_tag ltx_bib_key ltx_role_refnum ltx_tag_bibitem">[62]</span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_author">C. Lee, T. Yang, G. Inchoco, G. M. Jones, and A. Satyanarayan</span><span class="ltx_text ltx_bib_year"> (2021)</span>
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_title">Viral Visualizations: How Coronavirus Skeptics Use Orthodox Data Practices to Promote Unorthodox Science Online</span>.
        </span>
        <span class="ltx_bibblock">In <span class="ltx_text ltx_bib_inbook">CHI</span>,
        </span>
        <span class="ltx_bibblock ltx_bib_cited">Cited by: <a href="#S6.SS2.p2" title="6.2 Natural Language As Coequal With Visualization ‣ 6 Discussion and Future Work ‣ Accessible Visualization via Natural Language Descriptions: A Four-Level Model of Semantic Content" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§6.2</span></a>.
        </span>
      </li>
      <li id="bib.bib65" class="ltx_bibitem ltx_bib_inproceedings">
        <span class="ltx_tag ltx_bib_key ltx_role_refnum ltx_tag_bibitem">[63]</span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_author">S. Lee, S. Kim, and B. C. Kwon</span><span class="ltx_text ltx_bib_year"> (2016)</span>
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_title">Vlat: Development Of A Visualization Literacy Assessment Test</span>.
        </span>
        <span class="ltx_bibblock">In <span class="ltx_text ltx_bib_inbook">TVCG</span>,
        </span>
        <span class="ltx_bibblock ltx_bib_cited">Cited by: <a href="#S2.SS3.SSS1.p1" title="2.3.1 Using Natural Language to Describe Visualizations ‣ 2.3 Natural Language Hierarchies and Interfaces ‣ 2 Related Work ‣ Accessible Visualization via Natural Language Descriptions: A Four-Level Model of Semantic Content" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§2.3.1</span></a>.
        </span>
      </li>
      <li id="bib.bib123" class="ltx_bibitem ltx_bib_inproceedings">
        <span class="ltx_tag ltx_bib_key ltx_role_refnum ltx_tag_bibitem">[64]</span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_author">T. Lin, M. Maire, S. Belongie, J. Hays, P. Perona, D. Ramanan, P. Dollár, and C. L. Zitnick</span><span class="ltx_text ltx_bib_year"> (2014)</span>
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_title">Microsoft COCO: Common Objects in Context</span>.
        </span>
        <span class="ltx_bibblock">In <span class="ltx_text ltx_bib_inbook">ECCV</span>,
        </span>
        <span class="ltx_bibblock">(<span class="ltx_text ltx_bib_language">en</span>).
        </span>
        <span class="ltx_bibblock ltx_bib_cited">Cited by: <a href="#S2.SS1.SSS1.p1" title="2.1.1 Computer Vision and Natural Language Processing ‣ 2.1 Automatic Methods for Visualization Captioning ‣ 2 Related Work ‣ Accessible Visualization via Natural Language Descriptions: A Four-Level Model of Semantic Content" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§2.1.1</span></a>.
        </span>
      </li>
      <li id="bib.bib76" class="ltx_bibitem ltx_bib_misc">
        <span class="ltx_tag ltx_bib_key ltx_role_refnum ltx_tag_bibitem">[65]</span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_author">T. Littlefield</span><span class="ltx_text ltx_bib_year"> (2020)</span>
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_title">COVID-19 Statistics Tracker</span>.
        </span>
        <span class="ltx_bibblock">(<span class="ltx_text ltx_bib_language">en</span>).
        </span>
        <span class="ltx_bibblock">Note: <span class="ltx_text ltx_bib_note">https://cvstats.net</span>
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_links"><a href="https://cvstats.net" title="" class="ltx_ref ltx_bib_external">Link</a></span>
        </span>
        <span class="ltx_bibblock ltx_bib_cited">Cited by: <a href="#S1.p1" title="1 Introduction ‣ Accessible Visualization via Natural Language Descriptions: A Four-Level Model of Semantic Content" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§1</span></a>.
        </span>
      </li>
      <li id="bib.bib44" class="ltx_bibitem ltx_bib_inproceedings">
        <span class="ltx_tag ltx_bib_key ltx_role_refnum ltx_tag_bibitem">[66]</span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_author">M. A. Livingston and D. Brock</span><span class="ltx_text ltx_bib_year"> (2020)</span>
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_title">Position: Visual Sentences: Definitions and Applications</span>.
        </span>
        <span class="ltx_bibblock">In <span class="ltx_text ltx_bib_inbook">VIS</span>,
        </span>
        <span class="ltx_bibblock ltx_bib_cited">Cited by: <a href="#S2.SS3.SSS1.p1" title="2.3.1 Using Natural Language to Describe Visualizations ‣ 2.3 Natural Language Hierarchies and Interfaces ‣ 2 Related Work ‣ Accessible Visualization via Natural Language Descriptions: A Four-Level Model of Semantic Content" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§2.3.1</span></a>.
        </span>
      </li>
      <li id="bib.bib24" class="ltx_bibitem ltx_bib_inproceedings">
        <span class="ltx_tag ltx_bib_key ltx_role_refnum ltx_tag_bibitem">[67]</span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_author">A. Lundgard, C. Lee, and A. Satyanarayan</span><span class="ltx_text ltx_bib_year"> (2019-10)</span>
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_title">Sociotechnical Considerations for Accessible Visualization Design</span>.
        </span>
        <span class="ltx_bibblock">In <span class="ltx_text ltx_bib_inbook">VIS</span>,
        </span>
        <span class="ltx_bibblock ltx_bib_cited">Cited by: <a href="#S1.p2" title="1 Introduction ‣ Accessible Visualization via Natural Language Descriptions: A Four-Level Model of Semantic Content" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§1</span></a>,
          <a href="#S2.SS2.p1" title="2.2 Accessible Media and Human-Computer Interaction ‣ 2 Related Work ‣ Accessible Visualization via Natural Language Descriptions: A Four-Level Model of Semantic Content" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§2.2</span></a>,
          <a href="#S5.SS2.SSS1.p1" title="5.2.1 Participant Recruitment ‣ 5.2 Participants ‣ 5 Applying the Model: Evaluating the Effectiveness of Visualization Descriptions ‣ Accessible Visualization via Natural Language Descriptions: A Four-Level Model of Semantic Content" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§5.2.1</span></a>,
          <a href="#S5.SS4.SSS5.p1" title="5.4.5 Some Automatic Methods Raise Ethical Concerns ‣ 5.4 Qualitative Results ‣ 5 Applying the Model: Evaluating the Effectiveness of Visualization Descriptions ‣ Accessible Visualization via Natural Language Descriptions: A Four-Level Model of Semantic Content" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§5.4.5</span></a>.
        </span>
      </li>
      <li id="bib.bib18" class="ltx_bibitem ltx_bib_inproceedings">
        <span class="ltx_tag ltx_bib_key ltx_role_refnum ltx_tag_bibitem">[68]</span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_author">A. M. MacEachren, R. E. Roth, J. O’Brien, B. Li, D. Swingley, and M. Gahegan</span><span class="ltx_text ltx_bib_year"> (2012)</span>
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_title">Visual Semiotics Uncertainty Visualization: An Empirical Study</span>.
        </span>
        <span class="ltx_bibblock">In <span class="ltx_text ltx_bib_inbook">TVCG</span>,
        </span>
        <span class="ltx_bibblock ltx_bib_cited">Cited by: <a href="#S6.SS2.p1" title="6.2 Natural Language As Coequal With Visualization ‣ 6 Discussion and Future Work ‣ Accessible Visualization via Natural Language Descriptions: A Four-Level Model of Semantic Content" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§6.2</span></a>.
        </span>
      </li>
      <li id="bib.bib112" class="ltx_bibitem ltx_bib_inproceedings">
        <span class="ltx_tag ltx_bib_key ltx_role_refnum ltx_tag_bibitem">[69]</span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_author">H. MacLeod, C. L. Bennett, M. R. Morris, and E. Cutrell</span><span class="ltx_text ltx_bib_year"> (2017)</span>
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_title">Understanding Blind People’s Experiences with Computer-Generated Captions of Social Media Images</span>.
        </span>
        <span class="ltx_bibblock">In <span class="ltx_text ltx_bib_inbook">CHI</span>,
        </span>
        <span class="ltx_bibblock ltx_bib_cited">Cited by: <a href="#S2.SS1.SSS1.p1" title="2.1.1 Computer Vision and Natural Language Processing ‣ 2.1 Automatic Methods for Visualization Captioning ‣ 2 Related Work ‣ Accessible Visualization via Natural Language Descriptions: A Four-Level Model of Semantic Content" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§2.1.1</span></a>,
          <a href="#S5.SS4.SSS5.p1" title="5.4.5 Some Automatic Methods Raise Ethical Concerns ‣ 5.4 Qualitative Results ‣ 5 Applying the Model: Evaluating the Effectiveness of Visualization Descriptions ‣ Accessible Visualization via Natural Language Descriptions: A Four-Level Model of Semantic Content" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§5.4.5</span></a>.
        </span>
      </li>
      <li id="bib.bib108" class="ltx_bibitem ltx_bib_inproceedings">
        <span class="ltx_tag ltx_bib_key ltx_role_refnum ltx_tag_bibitem">[70]</span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_author">J. Matejka and G. Fitzmaurice</span><span class="ltx_text ltx_bib_year"> (2017)</span>
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_title">Same Stats, Different Graphs: Generating Datasets with Varied Appearance and Identical Statistics through Simulated Annealing</span>.
        </span>
        <span class="ltx_bibblock">In <span class="ltx_text ltx_bib_inbook">CHI</span>,
        </span>
        <span class="ltx_bibblock">(<span class="ltx_text ltx_bib_language">en</span>).
        </span>
        <span class="ltx_bibblock ltx_bib_cited">Cited by: <a href="#S4.SS3.p1" title="4.3 Level 3: Perceptual and Cognitive Phenomena ‣ 4 A Four-Level Model of Semantic Content ‣ Accessible Visualization via Natural Language Descriptions: A Four-Level Model of Semantic Content" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§4.3</span></a>.
        </span>
      </li>
      <li id="bib.bib50" class="ltx_bibitem ltx_bib_inproceedings">
        <span class="ltx_tag ltx_bib_key ltx_role_refnum ltx_tag_bibitem">[71]</span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_author">P. Moraes, G. Sina, K. McCoy, and S. Carberry</span><span class="ltx_text ltx_bib_year"> (2014)</span>
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_title">Evaluating The Accessibility Of Line Graphs Through Textual Summaries For Visually Impaired Users</span>.
        </span>
        <span class="ltx_bibblock">In <span class="ltx_text ltx_bib_inbook">ASSETS</span>,
        </span>
        <span class="ltx_bibblock ltx_bib_cited">Cited by: <a href="#S2.SS1.SSS1.p1" title="2.1.1 Computer Vision and Natural Language Processing ‣ 2.1 Automatic Methods for Visualization Captioning ‣ 2 Related Work ‣ Accessible Visualization via Natural Language Descriptions: A Four-Level Model of Semantic Content" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§2.1.1</span></a>,
          <a href="#S2.SS2.p1" title="2.2 Accessible Media and Human-Computer Interaction ‣ 2 Related Work ‣ Accessible Visualization via Natural Language Descriptions: A Four-Level Model of Semantic Content" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§2.2</span></a>.
        </span>
      </li>
      <li id="bib.bib17" class="ltx_bibitem ltx_bib_inproceedings">
        <span class="ltx_tag ltx_bib_key ltx_role_refnum ltx_tag_bibitem">[72]</span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_author">V. S. Morash, Y. Siu, J. A. Miele, L. Hasty, and S. Landau</span><span class="ltx_text ltx_bib_year"> (2015)</span>
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_title">Guiding Novice Web Workers in Making Image Descriptions Using Templates</span>.
        </span>
        <span class="ltx_bibblock">In <span class="ltx_text ltx_bib_inbook">TACCESS</span>,
        </span>
        <span class="ltx_bibblock ltx_bib_cited">Cited by: <a href="#S2.SS1.SSS1.p1" title="2.1.1 Computer Vision and Natural Language Processing ‣ 2.1 Automatic Methods for Visualization Captioning ‣ 2 Related Work ‣ Accessible Visualization via Natural Language Descriptions: A Four-Level Model of Semantic Content" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§2.1.1</span></a>,
          <a href="#S2.SS2.SSS2.p1" title="2.2.2 Descriptions Authored by Non-Experts ‣ 2.2 Accessible Media and Human-Computer Interaction ‣ 2 Related Work ‣ Accessible Visualization via Natural Language Descriptions: A Four-Level Model of Semantic Content" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§2.2.2</span></a>,
          <a href="#S4.SS3.p4" title="4.3 Level 3: Perceptual and Cognitive Phenomena ‣ 4 A Four-Level Model of Semantic Content ‣ Accessible Visualization via Natural Language Descriptions: A Four-Level Model of Semantic Content" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§4.3</span></a>.
        </span>
      </li>
      <li id="bib.bib121" class="ltx_bibitem ltx_bib_inproceedings">
        <span class="ltx_tag ltx_bib_key ltx_role_refnum ltx_tag_bibitem">[73]</span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_author">M. R. Morris, J. Johnson, C. L. Bennett, and E. Cutrell</span><span class="ltx_text ltx_bib_year"> (2018)</span>
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_title">Rich Representations of Visual Content for Screen Reader Users</span>.
        </span>
        <span class="ltx_bibblock">In <span class="ltx_text ltx_bib_inbook">CHI</span>,
        </span>
        <span class="ltx_bibblock ltx_bib_cited">Cited by: <a href="#S2.SS2.p1" title="2.2 Accessible Media and Human-Computer Interaction ‣ 2 Related Work ‣ Accessible Visualization via Natural Language Descriptions: A Four-Level Model of Semantic Content" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§2.2</span></a>.
        </span>
      </li>
      <li id="bib.bib39" class="ltx_bibitem ltx_bib_incollection">
        <span class="ltx_tag ltx_bib_key ltx_role_refnum ltx_tag_bibitem">[74]</span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_author">M. Muller</span><span class="ltx_text ltx_bib_year"> (2014)</span>
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_title">Curiosity, Creativity, and Surprise as Analytic Tools: Grounded Theory Method</span>.
        </span>
        <span class="ltx_bibblock">In <span class="ltx_text ltx_bib_inbook">Ways of Knowing in HCI</span>,  <span class="ltx_text ltx_bib_editor">J. S. Olson and W. A. Kellogg (Eds.)</span>,
        </span>
        <span class="ltx_bibblock ltx_bib_cited">Cited by: <a href="#S3.SS1.p2" title="3.1 Initial Open Coding ‣ 3 Constructing the Model: Employing the Grounded Theory Methodology ‣ Accessible Visualization via Natural Language Descriptions: A Four-Level Model of Semantic Content" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§3.1</span></a>,
          <a href="#S3.p1" title="3 Constructing the Model: Employing the Grounded Theory Methodology ‣ Accessible Visualization via Natural Language Descriptions: A Four-Level Model of Semantic Content" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§3</span></a>.
        </span>
      </li>
      <li id="bib.bib90" class="ltx_bibitem ltx_bib_inproceedings">
        <span class="ltx_tag ltx_bib_key ltx_role_refnum ltx_tag_bibitem">[75]</span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_author">A. Narechania, A. Srinivasan, and J. Stasko</span><span class="ltx_text ltx_bib_year"> (2021)</span>
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_title">NL4DV: A Toolkit for Generating Analytic Specifications for Data Visualization from Natural Language Queries</span>.
        </span>
        <span class="ltx_bibblock">In <span class="ltx_text ltx_bib_inbook">TVCG</span>,
        </span>
        <span class="ltx_bibblock">(<span class="ltx_text ltx_bib_language">en</span>).
        </span>
        <span class="ltx_bibblock ltx_bib_cited">Cited by: <a href="#S2.SS3.SSS2.p1" title="2.3.2 Using Natural Language to Interact with Visualizations ‣ 2.3 Natural Language Hierarchies and Interfaces ‣ 2 Related Work ‣ Accessible Visualization via Natural Language Descriptions: A Four-Level Model of Semantic Content" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§2.3.2</span></a>.
        </span>
      </li>
      <li id="bib.bib30" class="ltx_bibitem ltx_bib_inproceedings">
        <span class="ltx_tag ltx_bib_key ltx_role_refnum ltx_tag_bibitem">[76]</span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_author">C. North</span><span class="ltx_text ltx_bib_year"> (2006)</span>
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_title">Toward Measuring Visualization Insight</span>.
        </span>
        <span class="ltx_bibblock">In <span class="ltx_text ltx_bib_inbook">CG&amp;A</span>,
        </span>
        <span class="ltx_bibblock ltx_bib_cited">Cited by: <a href="#S4.SS4.p3" title="4.4 Level 4: Contextual and Domain-Specific Insights ‣ 4 A Four-Level Model of Semantic Content ‣ Accessible Visualization via Natural Language Descriptions: A Four-Level Model of Semantic Content" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§4.4</span></a>.
        </span>
      </li>
      <li id="bib.bib85" class="ltx_bibitem ltx_bib_article">
        <span class="ltx_tag ltx_bib_key ltx_role_refnum ltx_tag_bibitem">[77]</span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_author">J. R. Nuñez, C. R. Anderton, and R. S. Renslow</span><span class="ltx_text ltx_bib_year"> (2018)</span>
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_title">Optimizing Colormaps With Consideration For Color Vision Deficiency To Enable Accurate Interpretation Of Scientific Data</span>.
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_journal">PLOS ONE</span> (<span class="ltx_text ltx_bib_language">en</span>).
        </span>
        <span class="ltx_bibblock ltx_bib_cited">Cited by: <a href="#S1.p2" title="1 Introduction ‣ Accessible Visualization via Natural Language Descriptions: A Four-Level Model of Semantic Content" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§1</span></a>.
        </span>
      </li>
      <li id="bib.bib54" class="ltx_bibitem ltx_bib_article">
        <span class="ltx_tag ltx_bib_key ltx_role_refnum ltx_tag_bibitem">[78]</span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_author">J. Obeid and E. Hoque</span><span class="ltx_text ltx_bib_year"> (2020)</span>
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_title">Chart-to-Text: Generating Natural Language Descriptions for Charts by Adapting the Transformer Model</span>.
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_journal">arXiv</span>.
        </span>
        <span class="ltx_bibblock ltx_bib_cited">Cited by: <a href="#S1.p2" title="1 Introduction ‣ Accessible Visualization via Natural Language Descriptions: A Four-Level Model of Semantic Content" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§1</span></a>,
          <a href="#S2.SS1.SSS1.p1" title="2.1.1 Computer Vision and Natural Language Processing ‣ 2.1 Automatic Methods for Visualization Captioning ‣ 2 Related Work ‣ Accessible Visualization via Natural Language Descriptions: A Four-Level Model of Semantic Content" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§2.1.1</span></a>,
          <a href="#S2.SS2.p1" title="2.2 Accessible Media and Human-Computer Interaction ‣ 2 Related Work ‣ Accessible Visualization via Natural Language Descriptions: A Four-Level Model of Semantic Content" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§2.2</span></a>,
          <a href="#S4.SS2.p5" title="4.2 Level 2: Statistical Concepts and Relations ‣ 4 A Four-Level Model of Semantic Content ‣ Accessible Visualization via Natural Language Descriptions: A Four-Level Model of Semantic Content" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§4.2</span></a>,
          <a href="#S4.SS3.p4" title="4.3 Level 3: Perceptual and Cognitive Phenomena ‣ 4 A Four-Level Model of Semantic Content ‣ Accessible Visualization via Natural Language Descriptions: A Four-Level Model of Semantic Content" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§4.3</span></a>,
          <a href="#S5.SS1.p2" title="5.1 Evaluation Design ‣ 5 Applying the Model: Evaluating the Effectiveness of Visualization Descriptions ‣ Accessible Visualization via Natural Language Descriptions: A Four-Level Model of Semantic Content" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§5.1</span></a>,
          <a href="#S5.SS4.SSS5.p1" title="5.4.5 Some Automatic Methods Raise Ethical Concerns ‣ 5.4 Qualitative Results ‣ 5 Applying the Model: Evaluating the Effectiveness of Visualization Descriptions ‣ Accessible Visualization via Natural Language Descriptions: A Four-Level Model of Semantic Content" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§5.4.5</span></a>.
        </span>
      </li>
      <li id="bib.bib86" class="ltx_bibitem ltx_bib_inproceedings">
        <span class="ltx_tag ltx_bib_key ltx_role_refnum ltx_tag_bibitem">[79]</span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_author">M. M. Oliveira</span><span class="ltx_text ltx_bib_year"> (2013)</span>
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_title">Towards More Accessible Visualizations for Color-Vision-Deficient Individuals</span>.
        </span>
        <span class="ltx_bibblock">In <span class="ltx_text ltx_bib_inbook">CiSE</span>,
        </span>
        <span class="ltx_bibblock ltx_bib_cited">Cited by: <a href="#S1.p2" title="1 Introduction ‣ Accessible Visualization via Natural Language Descriptions: A Four-Level Model of Semantic Content" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§1</span></a>.
        </span>
      </li>
      <li id="bib.bib42" class="ltx_bibitem ltx_bib_inproceedings">
        <span class="ltx_tag ltx_bib_key ltx_role_refnum ltx_tag_bibitem">[80]</span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_author">A. Ottley, A. Kaszowska, R. J. Crouser, and E. M. Peck</span><span class="ltx_text ltx_bib_year"> (2019)</span>
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_title">The Curious Case of Combining Text and Visualization</span>.
        </span>
        <span class="ltx_bibblock">In <span class="ltx_text ltx_bib_inbook">EuroVis</span>,
        </span>
        <span class="ltx_bibblock">(<span class="ltx_text ltx_bib_language">en</span>).
        </span>
        <span class="ltx_bibblock ltx_bib_cited">Cited by: <a href="#S2.SS3.SSS2.p1" title="2.3.2 Using Natural Language to Interact with Visualizations ‣ 2.3 Natural Language Hierarchies and Interfaces ‣ 2 Related Work ‣ Accessible Visualization via Natural Language Descriptions: A Four-Level Model of Semantic Content" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§2.3.2</span></a>.
        </span>
      </li>
      <li id="bib.bib32" class="ltx_bibitem ltx_bib_inproceedings">
        <span class="ltx_tag ltx_bib_key ltx_role_refnum ltx_tag_bibitem">[81]</span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_author">J. Poco and J. Heer</span><span class="ltx_text ltx_bib_year"> (2017)</span>
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_title">Reverse-Engineering Visualizations: Recovering Visual Encodings from Chart Images</span>.
        </span>
        <span class="ltx_bibblock">In <span class="ltx_text ltx_bib_inbook">CGF</span>,
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_links"><a href="https://doi.org/10.1111/cgf.13193" title="" class="ltx_ref ltx_bib_external">Link</a></span>
        </span>
        <span class="ltx_bibblock ltx_bib_cited">Cited by: <a href="#S3.SS2.SSS1.p1" title="3.2.1 Survey Design ‣ 3.2 Gathering A Corpus ‣ 3 Constructing the Model: Employing the Grounded Theory Methodology ‣ Accessible Visualization via Natural Language Descriptions: A Four-Level Model of Semantic Content" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§3.2.1</span></a>,
          <a href="#S4.SS1.p4" title="4.1 Level 1: Elemental and Encoded Properties ‣ 4 A Four-Level Model of Semantic Content ‣ Accessible Visualization via Natural Language Descriptions: A Four-Level Model of Semantic Content" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§4.1</span></a>.
        </span>
      </li>
      <li id="bib.bib104" class="ltx_bibitem ltx_bib_inproceedings">
        <span class="ltx_tag ltx_bib_key ltx_role_refnum ltx_tag_bibitem">[82]</span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_author">V. Potluri, T. E. Grindeland, J. E. Froehlich, and J. Mankoff</span><span class="ltx_text ltx_bib_year"> (2021)</span>
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_title">Examining Visual Semantic Understanding in Blind and Low-Vision Technology Users</span>.
        </span>
        <span class="ltx_bibblock">In <span class="ltx_text ltx_bib_inbook">CHI</span>,
        </span>
        <span class="ltx_bibblock ltx_bib_cited">Cited by: <a href="#S6.SS2.p1" title="6.2 Natural Language As Coequal With Visualization ‣ 6 Discussion and Future Work ‣ Accessible Visualization via Natural Language Descriptions: A Four-Level Model of Semantic Content" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§6.2</span></a>.
        </span>
      </li>
      <li id="bib.bib118" class="ltx_bibitem ltx_bib_inproceedings">
        <span class="ltx_tag ltx_bib_key ltx_role_refnum ltx_tag_bibitem">[83]</span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_author">X. Qian, E. Koh, F. Du, S. Kim, J. Chan, R. A. Rossi, S. Malik, and T. Y. Lee</span><span class="ltx_text ltx_bib_year"> (2021)</span>
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_title">Generating Accurate Caption Units for Figure Captioning</span>.
        </span>
        <span class="ltx_bibblock">In <span class="ltx_text ltx_bib_inbook">WWW</span>,
        </span>
        <span class="ltx_bibblock">(<span class="ltx_text ltx_bib_language">en</span>).
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_links"></span>
        </span>
        <span class="ltx_bibblock ltx_bib_cited">Cited by: <a href="#S2.SS1.SSS1.p1" title="2.1.1 Computer Vision and Natural Language Processing ‣ 2.1 Automatic Methods for Visualization Captioning ‣ 2 Related Work ‣ Accessible Visualization via Natural Language Descriptions: A Four-Level Model of Semantic Content" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§2.1.1</span></a>,
          <a href="#S2.SS2.p1" title="2.2 Accessible Media and Human-Computer Interaction ‣ 2 Related Work ‣ Accessible Visualization via Natural Language Descriptions: A Four-Level Model of Semantic Content" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§2.2</span></a>,
          <a href="#S5.SS4.SSS5.p1" title="5.4.5 Some Automatic Methods Raise Ethical Concerns ‣ 5.4 Qualitative Results ‣ 5 Applying the Model: Evaluating the Effectiveness of Visualization Descriptions ‣ Accessible Visualization via Natural Language Descriptions: A Four-Level Model of Semantic Content" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§5.4.5</span></a>.
        </span>
      </li>
      <li id="bib.bib7" class="ltx_bibitem ltx_bib_inproceedings">
        <span class="ltx_tag ltx_bib_key ltx_role_refnum ltx_tag_bibitem">[84]</span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_author">X. Qian, E. Koh, F. Du, S. Kim, and J. Chan</span><span class="ltx_text ltx_bib_year"> (2020)</span>
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_title">A Formative Study on Designing Accurate and Natural Figure Captioning Systems</span>.
        </span>
        <span class="ltx_bibblock">In <span class="ltx_text ltx_bib_inbook">CHI EA</span>,
        </span>
        <span class="ltx_bibblock ltx_bib_cited">Cited by: <a href="#S1.p2" title="1 Introduction ‣ Accessible Visualization via Natural Language Descriptions: A Four-Level Model of Semantic Content" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§1</span></a>,
          <a href="#S2.SS1.SSS1.p1" title="2.1.1 Computer Vision and Natural Language Processing ‣ 2.1 Automatic Methods for Visualization Captioning ‣ 2 Related Work ‣ Accessible Visualization via Natural Language Descriptions: A Four-Level Model of Semantic Content" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§2.1.1</span></a>,
          <a href="#S2.SS2.SSS2.p1" title="2.2.2 Descriptions Authored by Non-Experts ‣ 2.2 Accessible Media and Human-Computer Interaction ‣ 2 Related Work ‣ Accessible Visualization via Natural Language Descriptions: A Four-Level Model of Semantic Content" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§2.2.2</span></a>,
          <a href="#S2.SS2.p1" title="2.2 Accessible Media and Human-Computer Interaction ‣ 2 Related Work ‣ Accessible Visualization via Natural Language Descriptions: A Four-Level Model of Semantic Content" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§2.2</span></a>,
          <a href="#S2.SS3.SSS1.p1" title="2.3.1 Using Natural Language to Describe Visualizations ‣ 2.3 Natural Language Hierarchies and Interfaces ‣ 2 Related Work ‣ Accessible Visualization via Natural Language Descriptions: A Four-Level Model of Semantic Content" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§2.3.1</span></a>,
          <a href="#S5.SS4.SSS5.p1" title="5.4.5 Some Automatic Methods Raise Ethical Concerns ‣ 5.4 Qualitative Results ‣ 5 Applying the Model: Evaluating the Effectiveness of Visualization Descriptions ‣ Accessible Visualization via Natural Language Descriptions: A Four-Level Model of Semantic Content" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§5.4.5</span></a>.
        </span>
      </li>
      <li id="bib.bib68" class="ltx_bibitem ltx_bib_article">
        <span class="ltx_tag ltx_bib_key ltx_role_refnum ltx_tag_bibitem">[85]</span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_author">J. M. Royer, C. N. Hastings, and C. Hook</span><span class="ltx_text ltx_bib_year"> (1979)</span>
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_title">A Sentence Verification Technique For Measuring Reading Comprehension</span>.
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_journal">Journal of Reading Behavior</span>.
        </span>
        <span class="ltx_bibblock ltx_bib_cited">Cited by: <a href="#S2.SS3.SSS1.p1" title="2.3.1 Using Natural Language to Describe Visualizations ‣ 2.3 Natural Language Hierarchies and Interfaces ‣ 2 Related Work ‣ Accessible Visualization via Natural Language Descriptions: A Four-Level Model of Semantic Content" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§2.3.1</span></a>.
        </span>
      </li>
      <li id="bib.bib67" class="ltx_bibitem ltx_bib_inproceedings">
        <span class="ltx_tag ltx_bib_key ltx_role_refnum ltx_tag_bibitem">[86]</span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_author">J. M. Royer</span><span class="ltx_text ltx_bib_year"> (2001)</span>
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_title">Developing Reading And Listening Comprehension Tests Based On The Sentence Verification Technique (SVT)</span>.
        </span>
        <span class="ltx_bibblock">In <span class="ltx_text ltx_bib_inbook">Journal of Adolescent &amp; Adult Literacy</span>,
        </span>
        <span class="ltx_bibblock ltx_bib_cited">Cited by: <a href="#S2.SS3.SSS1.p1" title="2.3.1 Using Natural Language to Describe Visualizations ‣ 2.3 Natural Language Hierarchies and Interfaces ‣ 2 Related Work ‣ Accessible Visualization via Natural Language Descriptions: A Four-Level Model of Semantic Content" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§2.3.1</span></a>.
        </span>
      </li>
      <li id="bib.bib36" class="ltx_bibitem ltx_bib_inproceedings">
        <span class="ltx_tag ltx_bib_key ltx_role_refnum ltx_tag_bibitem">[87]</span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_author">A. Satyanarayan, D. Moritz, K. Wongsuphasawat, and J. Heer</span><span class="ltx_text ltx_bib_year"> (2017)</span>
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_title">Vega-Lite: A Grammar of Interactive Graphics</span>.
        </span>
        <span class="ltx_bibblock">In <span class="ltx_text ltx_bib_inbook">TVCG</span>,
        </span>
        <span class="ltx_bibblock ltx_bib_cited">Cited by: <a href="#S2.SS1.SSS2.p1" title="2.1.2 Structured Visualization Specifications ‣ 2.1 Automatic Methods for Visualization Captioning ‣ 2 Related Work ‣ Accessible Visualization via Natural Language Descriptions: A Four-Level Model of Semantic Content" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§2.1.2</span></a>,
          <a href="#S3.SS2.SSS1.p1" title="3.2.1 Survey Design ‣ 3.2 Gathering A Corpus ‣ 3 Constructing the Model: Employing the Grounded Theory Methodology ‣ Accessible Visualization via Natural Language Descriptions: A Four-Level Model of Semantic Content" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§3.2.1</span></a>,
          <a href="#S4.SS1.p4" title="4.1 Level 1: Elemental and Encoded Properties ‣ 4 A Four-Level Model of Semantic Content ‣ Accessible Visualization via Natural Language Descriptions: A Four-Level Model of Semantic Content" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§4.1</span></a>.
        </span>
      </li>
      <li id="bib.bib125" class="ltx_bibitem ltx_bib_misc">
        <span class="ltx_tag ltx_bib_key ltx_role_refnum ltx_tag_bibitem">[88]</span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_author">D. Schepers</span><span class="ltx_text ltx_bib_year"> (2020)</span>
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_title">Why Accessibility Is at the Heart of Data Visualization</span>.
        </span>
        <span class="ltx_bibblock">(<span class="ltx_text ltx_bib_language">en</span>).
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_links"><a href="https://medium.com/nightingale/accessibility-is-at-the-heart-of-data-visualization-64a38d6c505b" title="" class="ltx_ref ltx_bib_external">Link</a></span>
        </span>
        <span class="ltx_bibblock ltx_bib_cited">Cited by: <a href="#S2.SS2.SSS1.p1" title="2.2.1 Descriptions Authored by Experts ‣ 2.2 Accessible Media and Human-Computer Interaction ‣ 2 Related Work ‣ Accessible Visualization via Natural Language Descriptions: A Four-Level Model of Semantic Content" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§2.2.1</span></a>.
        </span>
      </li>
      <li id="bib.bib101" class="ltx_bibitem ltx_bib_inproceedings">
        <span class="ltx_tag ltx_bib_key ltx_role_refnum ltx_tag_bibitem">[89]</span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_author">V. Setlur, S. E. Battersby, M. Tory, R. Gossweiler, and A. X. Chang</span><span class="ltx_text ltx_bib_year"> (2016)</span>
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_title">Eviza: A Natural Language Interface for Visual Analysis</span>.
        </span>
        <span class="ltx_bibblock">In <span class="ltx_text ltx_bib_inbook">UIST</span>,
        </span>
        <span class="ltx_bibblock ltx_bib_cited">Cited by: <a href="#S6.SS1.p1" title="6.1 Natural Language As An Interface Into Visualization ‣ 6 Discussion and Future Work ‣ Accessible Visualization via Natural Language Descriptions: A Four-Level Model of Semantic Content" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§6.1</span></a>.
        </span>
      </li>
      <li id="bib.bib92" class="ltx_bibitem ltx_bib_inproceedings">
        <span class="ltx_tag ltx_bib_key ltx_role_refnum ltx_tag_bibitem">[90]</span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_author">V. Setlur, M. Tory, and A. Djalali</span><span class="ltx_text ltx_bib_year"> (2019)</span>
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_title">Inferencing Underspecified Natural Language Utterances In Visual Analysis</span>.
        </span>
        <span class="ltx_bibblock">In <span class="ltx_text ltx_bib_inbook">IUI</span>,
        </span>
        <span class="ltx_bibblock ltx_bib_cited">Cited by: <a href="#S2.SS3.SSS2.p1" title="2.3.2 Using Natural Language to Interact with Visualizations ‣ 2.3 Natural Language Hierarchies and Interfaces ‣ 2 Related Work ‣ Accessible Visualization via Natural Language Descriptions: A Four-Level Model of Semantic Content" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§2.3.2</span></a>.
        </span>
      </li>
      <li id="bib.bib122" class="ltx_bibitem ltx_bib_inproceedings">
        <span class="ltx_tag ltx_bib_key ltx_role_refnum ltx_tag_bibitem">[91]</span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_author">A. Sharif, S. S. Chintalapati, J. O. Wobbrock, and K. Reinecke</span><span class="ltx_text ltx_bib_year"> (2021)</span>
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_title">Understanding Screen-Reader Users’ Experiences with Online Data Visualizations</span>.
        </span>
        <span class="ltx_bibblock">In <span class="ltx_text ltx_bib_inbook">ASSETS</span>,
        </span>
        <span class="ltx_bibblock ltx_bib_cited">Cited by: <a href="#S2.SS2.p1" title="2.2 Accessible Media and Human-Computer Interaction ‣ 2 Related Work ‣ Accessible Visualization via Natural Language Descriptions: A Four-Level Model of Semantic Content" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§2.2</span></a>.
        </span>
      </li>
      <li id="bib.bib27" class="ltx_bibitem ltx_bib_inproceedings">
        <span class="ltx_tag ltx_bib_key ltx_role_refnum ltx_tag_bibitem">[92]</span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_author">A. Srinivasan, S. M. Drucker, A. Endert, and J. Stasko</span><span class="ltx_text ltx_bib_year"> (2019)</span>
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_title">Augmenting Visualizations with Interactive Data Facts to Facilitate Interpretation and Communication</span>.
        </span>
        <span class="ltx_bibblock">In <span class="ltx_text ltx_bib_inbook">TVCG</span>,
        </span>
        <span class="ltx_bibblock">(<span class="ltx_text ltx_bib_language">en</span>).
        </span>
        <span class="ltx_bibblock ltx_bib_cited">Cited by: <a href="#S3.SS2.SSS2.p1" title="3.2.2 Survey Results ‣ 3.2 Gathering A Corpus ‣ 3 Constructing the Model: Employing the Grounded Theory Methodology ‣ Accessible Visualization via Natural Language Descriptions: A Four-Level Model of Semantic Content" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§3.2.2</span></a>,
          <a href="#S4.SS2.p1" title="4.2 Level 2: Statistical Concepts and Relations ‣ 4 A Four-Level Model of Semantic Content ‣ Accessible Visualization via Natural Language Descriptions: A Four-Level Model of Semantic Content" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§4.2</span></a>,
          <a href="#S4.SS2.p5" title="4.2 Level 2: Statistical Concepts and Relations ‣ 4 A Four-Level Model of Semantic Content ‣ Accessible Visualization via Natural Language Descriptions: A Four-Level Model of Semantic Content" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§4.2</span></a>.
        </span>
      </li>
      <li id="bib.bib105" class="ltx_bibitem ltx_bib_inproceedings">
        <span class="ltx_tag ltx_bib_key ltx_role_refnum ltx_tag_bibitem">[93]</span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_author">A. Srinivasan, N. Nyapathy, B. Lee, S. M. Drucker, and J. Stasko</span><span class="ltx_text ltx_bib_year"> (2021)</span>
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_title">Collecting and Characterizing Natural Language Utterances for Specifying Data Visualizations</span>.
        </span>
        <span class="ltx_bibblock">In <span class="ltx_text ltx_bib_inbook">CHI</span>,
        </span>
        <span class="ltx_bibblock">(<span class="ltx_text ltx_bib_language">en</span>).
        </span>
        <span class="ltx_bibblock ltx_bib_cited">Cited by: <a href="#S2.SS3.SSS2.p1" title="2.3.2 Using Natural Language to Interact with Visualizations ‣ 2.3 Natural Language Hierarchies and Interfaces ‣ 2 Related Work ‣ Accessible Visualization via Natural Language Descriptions: A Four-Level Model of Semantic Content" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§2.3.2</span></a>,
          <a href="#S6.SS1.p1" title="6.1 Natural Language As An Interface Into Visualization ‣ 6 Discussion and Future Work ‣ Accessible Visualization via Natural Language Descriptions: A Four-Level Model of Semantic Content" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§6.1</span></a>.
        </span>
      </li>
      <li id="bib.bib75" class="ltx_bibitem ltx_bib_article">
        <span class="ltx_tag ltx_bib_key ltx_role_refnum ltx_tag_bibitem">[94]</span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_author">H. Sutton</span><span class="ltx_text ltx_bib_year"> (2020)</span>
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_title">Accessible Covid-19 Tracker Enables A Way For Visually Impaired To Stay Up To Date</span>.
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_journal">Disability Compliance for Higher Education</span> (<span class="ltx_text ltx_bib_language">en</span>).
        </span>
        <span class="ltx_bibblock ltx_bib_cited">Cited by: <a href="#S1.p1" title="1 Introduction ‣ Accessible Visualization via Natural Language Descriptions: A Four-Level Model of Semantic Content" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§1</span></a>.
        </span>
      </li>
      <li id="bib.bib9" class="ltx_bibitem ltx_bib_inproceedings">
        <span class="ltx_tag ltx_bib_key ltx_role_refnum ltx_tag_bibitem">[95]</span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_author">B. Tang, S. Han, M. L. Yiu, R. Ding, and D. Zhang</span><span class="ltx_text ltx_bib_year"> (2017)</span>
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_title">Extracting Top-K Insights from Multi-dimensional Data</span>.
        </span>
        <span class="ltx_bibblock">In <span class="ltx_text ltx_bib_inbook">SIGMOD</span>,
        </span>
        <span class="ltx_bibblock">(<span class="ltx_text ltx_bib_language">en</span>).
        </span>
        <span class="ltx_bibblock ltx_bib_cited">Cited by: <a href="#S4.SS4.p3" title="4.4 Level 4: Contextual and Domain-Specific Insights ‣ 4 A Four-Level Model of Semantic Content ‣ Accessible Visualization via Natural Language Descriptions: A Four-Level Model of Semantic Content" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§4.4</span></a>.
        </span>
      </li>
      <li id="bib.bib64" class="ltx_bibitem ltx_bib_book">
        <span class="ltx_tag ltx_bib_key ltx_role_refnum ltx_tag_bibitem">[96]</span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_author">B. D. Team</span><span class="ltx_text ltx_bib_year"> (2014)</span>
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_title">Bokeh: Python Library For Interactive Visualization</span>.
        </span>
        <span class="ltx_bibblock"> <span class="ltx_text ltx_bib_publisher">Bokeh Development Team</span>.
        </span>
        <span class="ltx_bibblock ltx_bib_cited">Cited by: <a href="#S2.SS1.SSS2.p1" title="2.1.2 Structured Visualization Specifications ‣ 2.1 Automatic Methods for Visualization Captioning ‣ 2 Related Work ‣ Accessible Visualization via Natural Language Descriptions: A Four-Level Model of Semantic Content" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§2.1.2</span></a>.
        </span>
      </li>
      <li id="bib.bib19" class="ltx_bibitem ltx_bib_inproceedings">
        <span class="ltx_tag ltx_bib_key ltx_role_refnum ltx_tag_bibitem">[97]</span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_author">P. Vickers, J. Faith, and N. Rossiter</span><span class="ltx_text ltx_bib_year"> (2013)</span>
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_title">Understanding Visualization: A Formal Approach Using Category Theory and Semiotics</span>.
        </span>
        <span class="ltx_bibblock">In <span class="ltx_text ltx_bib_inbook">TVCG</span>,
        </span>
        <span class="ltx_bibblock ltx_bib_cited">Cited by: <a href="#S6.SS2.p1" title="6.2 Natural Language As Coequal With Visualization ‣ 6 Discussion and Future Work ‣ Accessible Visualization via Natural Language Descriptions: A Four-Level Model of Semantic Content" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§6.2</span></a>.
        </span>
      </li>
      <li id="bib.bib124" class="ltx_bibitem ltx_bib_inproceedings">
        <span class="ltx_tag ltx_bib_key ltx_role_refnum ltx_tag_bibitem">[98]</span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_author">O. Vinyals, A. Toshev, S. Bengio, and D. Erhan</span><span class="ltx_text ltx_bib_year"> (2015)</span>
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_title">Show and Tell: A Neural Image Caption Generator</span>.
        </span>
        <span class="ltx_bibblock">In <span class="ltx_text ltx_bib_inbook">CVPR</span>,
        </span>
        <span class="ltx_bibblock">(<span class="ltx_text ltx_bib_language">en</span>).
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_links"><a href="https://arxiv.org/abs/1411.4555v2" title="" class="ltx_ref ltx_bib_external">Link</a></span>
        </span>
        <span class="ltx_bibblock ltx_bib_cited">Cited by: <a href="#S2.SS1.SSS1.p1" title="2.1.1 Computer Vision and Natural Language Processing ‣ 2.1 Automatic Methods for Visualization Captioning ‣ 2 Related Work ‣ Accessible Visualization via Natural Language Descriptions: A Four-Level Model of Semantic Content" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§2.1.1</span></a>.
        </span>
      </li>
      <li id="bib.bib47" class="ltx_bibitem ltx_bib_misc">
        <span class="ltx_tag ltx_bib_key ltx_role_refnum ltx_tag_bibitem">[99]</span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_author">W3C</span><span class="ltx_text ltx_bib_year"> (2019)</span>
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_title">WAI Web Accessibility Tutorials: Complex Images</span>.
        </span>
        <span class="ltx_bibblock">Note: <span class="ltx_text ltx_bib_note">https://www.w3.org/WAI/tutorials/images/complex/</span>
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_links"><a href="https://www.w3.org/WAI/tutorials/images/complex/" title="" class="ltx_ref ltx_bib_external">Link</a></span>
        </span>
        <span class="ltx_bibblock ltx_bib_cited">Cited by: <a href="#S1.p2" title="1 Introduction ‣ Accessible Visualization via Natural Language Descriptions: A Four-Level Model of Semantic Content" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§1</span></a>,
          <a href="#S2.SS1.SSS2.p1" title="2.1.2 Structured Visualization Specifications ‣ 2.1 Automatic Methods for Visualization Captioning ‣ 2 Related Work ‣ Accessible Visualization via Natural Language Descriptions: A Four-Level Model of Semantic Content" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§2.1.2</span></a>,
          <a href="#S2.SS2.SSS1.p1" title="2.2.1 Descriptions Authored by Experts ‣ 2.2 Accessible Media and Human-Computer Interaction ‣ 2 Related Work ‣ Accessible Visualization via Natural Language Descriptions: A Four-Level Model of Semantic Content" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§2.2.1</span></a>.
        </span>
      </li>
      <li id="bib.bib10" class="ltx_bibitem ltx_bib_inproceedings">
        <span class="ltx_tag ltx_bib_key ltx_role_refnum ltx_tag_bibitem">[100]</span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_author">Y. Wang, Z. Sun, H. Zhang, W. Cui, K. Xu, X. Ma, and D. Zhang</span><span class="ltx_text ltx_bib_year"> (2020)</span>
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_title">DataShot: Automatic Generation of Fact Sheets from Tabular Data</span>.
        </span>
        <span class="ltx_bibblock">In <span class="ltx_text ltx_bib_inbook">TVCG</span>,
        </span>
        <span class="ltx_bibblock ltx_bib_cited">Cited by: <a href="#S3.SS2.SSS2.p1" title="3.2.2 Survey Results ‣ 3.2 Gathering A Corpus ‣ 3 Constructing the Model: Employing the Grounded Theory Methodology ‣ Accessible Visualization via Natural Language Descriptions: A Four-Level Model of Semantic Content" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§3.2.2</span></a>,
          <a href="#S4.SS2.p1" title="4.2 Level 2: Statistical Concepts and Relations ‣ 4 A Four-Level Model of Semantic Content ‣ Accessible Visualization via Natural Language Descriptions: A Four-Level Model of Semantic Content" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§4.2</span></a>.
        </span>
      </li>
      <li id="bib.bib131" class="ltx_bibitem ltx_bib_misc">
        <span class="ltx_tag ltx_bib_key ltx_role_refnum ltx_tag_bibitem">[101]</span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_author">L. Watson</span><span class="ltx_text ltx_bib_year"> (2017)</span>
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_title">Accessible SVG Line Graphs</span>.
        </span>
        <span class="ltx_bibblock">(<span class="ltx_text ltx_bib_language">en</span>).
        </span>
        <span class="ltx_bibblock">Note: <span class="ltx_text ltx_bib_note">https://tink.uk/accessible-svg-line-graphs/</span>
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_links"><a href="https://tink.uk/accessible-svg-line-graphs/" title="" class="ltx_ref ltx_bib_external">Link</a></span>
        </span>
        <span class="ltx_bibblock ltx_bib_cited">Cited by: <a href="#S2.SS2.SSS1.p1" title="2.2.1 Descriptions Authored by Experts ‣ 2.2 Accessible Media and Human-Computer Interaction ‣ 2 Related Work ‣ Accessible Visualization via Natural Language Descriptions: A Four-Level Model of Semantic Content" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§2.2.1</span></a>.
        </span>
      </li>
      <li id="bib.bib130" class="ltx_bibitem ltx_bib_misc">
        <span class="ltx_tag ltx_bib_key ltx_role_refnum ltx_tag_bibitem">[102]</span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_author">L. Watson</span><span class="ltx_text ltx_bib_year"> (2018)</span>
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_title">Accessible SVG Flowcharts</span>.
        </span>
        <span class="ltx_bibblock">(<span class="ltx_text ltx_bib_language">en</span>).
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_links"><a href="https://tink.uk/accessible-svg-flowcharts/" title="" class="ltx_ref ltx_bib_external">Link</a></span>
        </span>
        <span class="ltx_bibblock ltx_bib_cited">Cited by: <a href="#S2.SS2.SSS1.p1" title="2.2.1 Descriptions Authored by Experts ‣ 2.2 Accessible Media and Human-Computer Interaction ‣ 2 Related Work ‣ Accessible Visualization via Natural Language Descriptions: A Four-Level Model of Semantic Content" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§2.2.1</span></a>.
        </span>
      </li>
      <li id="bib.bib15" class="ltx_bibitem ltx_bib_inproceedings">
        <span class="ltx_tag ltx_bib_key ltx_role_refnum ltx_tag_bibitem">[103]</span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_author">W. Weber</span><span class="ltx_text ltx_bib_year"> (2019)</span>
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_title">Towards a Semiotics of Data Visualization – an Inventory of Graphic Resources</span>.
        </span>
        <span class="ltx_bibblock">In <span class="ltx_text ltx_bib_inbook">IV</span>,
        </span>
        <span class="ltx_bibblock ltx_bib_cited">Cited by: <a href="#S6.SS2.p1" title="6.2 Natural Language As Coequal With Visualization ‣ 6 Discussion and Future Work ‣ Accessible Visualization via Natural Language Descriptions: A Four-Level Model of Semantic Content" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§6.2</span></a>.
        </span>
      </li>
      <li id="bib.bib59" class="ltx_bibitem ltx_bib_book">
        <span class="ltx_tag ltx_bib_key ltx_role_refnum ltx_tag_bibitem">[104]</span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_author">L. Wilkinson</span><span class="ltx_text ltx_bib_year"> (2005)</span>
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_title">The Grammar of Graphics</span>.
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_series">Statistics and Computing</span>,  <span class="ltx_text ltx_bib_publisher">Springer-Verlag</span> (<span class="ltx_text ltx_bib_language">en</span>).
        </span>
        <span class="ltx_bibblock ltx_bib_cited">Cited by: <a href="#S4.SS1.p4" title="4.1 Level 1: Elemental and Encoded Properties ‣ 4 A Four-Level Model of Semantic Content ‣ Accessible Visualization via Natural Language Descriptions: A Four-Level Model of Semantic Content" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§4.1</span></a>.
        </span>
      </li>
      <li id="bib.bib87" class="ltx_bibitem ltx_bib_inproceedings">
        <span class="ltx_tag ltx_bib_key ltx_role_refnum ltx_tag_bibitem">[105]</span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_author">K. Wu, E. Petersen, T. Ahmad, D. Burlinson, S. Tanis, and D. A. Szafir</span><span class="ltx_text ltx_bib_year"> (2021)</span>
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_title">Understanding Data Accessibility for People with Intellectual and Developmental Disabilities</span>.
        </span>
        <span class="ltx_bibblock">In <span class="ltx_text ltx_bib_inbook">CHI 2021</span>,
        </span>
        <span class="ltx_bibblock">(<span class="ltx_text ltx_bib_language">en</span>).
        </span>
        <span class="ltx_bibblock ltx_bib_cited">Cited by: <a href="#S1.p2" title="1 Introduction ‣ Accessible Visualization via Natural Language Descriptions: A Four-Level Model of Semantic Content" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§1</span></a>.
        </span>
      </li>
      <li id="bib.bib98" class="ltx_bibitem ltx_bib_inproceedings">
        <span class="ltx_tag ltx_bib_key ltx_role_refnum ltx_tag_bibitem">[106]</span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_author">C. Xiong, L. V. Weelden, and S. Franconeri</span><span class="ltx_text ltx_bib_year"> (2020)</span>
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_title">The Curse of Knowledge in Visual Data Communication</span>.
        </span>
        <span class="ltx_bibblock">In <span class="ltx_text ltx_bib_inbook">TVCG</span>,
        </span>
        <span class="ltx_bibblock ltx_bib_cited">Cited by: <a href="#S2.SS3.SSS2.p1" title="2.3.2 Using Natural Language to Interact with Visualizations ‣ 2.3 Natural Language Hierarchies and Interfaces ‣ 2 Related Work ‣ Accessible Visualization via Natural Language Descriptions: A Four-Level Model of Semantic Content" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§2.3.2</span></a>.
        </span>
      </li>
      <li id="bib.bib6" class="ltx_bibitem ltx_bib_article">
        <span class="ltx_tag ltx_bib_key ltx_role_refnum ltx_tag_bibitem">[107]</span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_author">K. Xu, J. Ba, R. Kiros, K. Cho, A. Courville, R. Salakhutdinov, R. Zemel, and Y. Bengio</span><span class="ltx_text ltx_bib_year"> (2016)</span>
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_title">Show, Attend and Tell: Neural Image Caption Generation with Visual Attention</span>.
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_journal">arXiv</span>.
        </span>
        <span class="ltx_bibblock ltx_bib_cited">Cited by: <a href="#S2.SS1.SSS1.p1" title="2.1.1 Computer Vision and Natural Language Processing ‣ 2.1 Automatic Methods for Visualization Captioning ‣ 2 Related Work ‣ Accessible Visualization via Natural Language Descriptions: A Four-Level Model of Semantic Content" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§2.1.1</span></a>.
        </span>
      </li>
      <li id="bib.bib3" class="ltx_bibitem ltx_bib_inproceedings">
        <span class="ltx_tag ltx_bib_key ltx_role_refnum ltx_tag_bibitem">[108]</span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_author">J. S. Yi, Y. Kang, J. T. Stasko, and J. A. Jacko</span><span class="ltx_text ltx_bib_year"> (2008)</span>
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_title">Understanding and Characterizing Insights: How Do People Gain Insights Using Information Visualization?</span>.
        </span>
        <span class="ltx_bibblock">In <span class="ltx_text ltx_bib_inbook">BELIV</span>,
        </span>
        <span class="ltx_bibblock">(<span class="ltx_text ltx_bib_language">en</span>).
        </span>
        <span class="ltx_bibblock ltx_bib_cited">Cited by: <a href="#S4.SS4.p3" title="4.4 Level 4: Contextual and Domain-Specific Insights ‣ 4 A Four-Level Model of Semantic Content ‣ Accessible Visualization via Natural Language Descriptions: A Four-Level Model of Semantic Content" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§4.4</span></a>.
        </span>
      </li>
    </ul>
  </section>
</article>
