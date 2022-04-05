---
stub: false
title: Rich Screen Reader Experiences for Accessible Data Visualization
authors:
  - key: jzong
    equal: true
  - key: crystall
    equal: true
  - key: lundgard
    equal: true
  - name: JiWoong Jang
  - name: Daniel Hajas
  - key: arvindsatya
venue: eurovis
year: 2022
tags:
  - visualization design
  - interaction design
  - interface
  - accessibility
  - mixed methods
---
<article>
  <section class="ltx_abstract" id="abstract">
    <h2 class="ltx_title ltx_title_abstract" id="H-abstract">Abstract</h2>
    <p class="ltx_p">Current web accessibility guidelines ask visualization designers to support screen readers via basic non-visual alternatives like textual descriptions and access to raw data tables.
      But charts do more than summarize data or reproduce tables; they afford interactive data exploration at varying levels of granularity — from fine-grained datum-by-datum reading to skimming and surfacing high-level trends.
      In response to the lack of comparable non-visual affordances, we present a set of rich screen reader experiences for accessible data visualization and exploration.
      Through an iterative co-design process, we identify three key design dimensions for expressive screen reader accessibility:
      <emph class="ltx_emph ltx_font_italic">structure</emph>, or how chart entities should be organized for a screen reader to traverse;
      <emph class="ltx_emph ltx_font_italic">navigation</emph>, or the structural, spatial, and targeted operations a user might perform to step through the structure;
      and, <emph class="ltx_emph ltx_font_italic">description</emph>, or the semantic content, composition, and verbosity of the screen reader’s narration.
      We operationalize these dimensions to prototype screen-reader-accessible visualizations that cover a diverse range of chart types and combinations of our design dimensions.
      We evaluate a subset of these prototypes in a mixed-methods study with 13 blind and visually impaired readers.
      Our findings demonstrate that these designs help users conceptualize data spatially, selectively attend to data of interest at different levels of granularity, and experience control and agency over their data analysis process.
      <span class="ltx_ERROR undefined">{CCSXML}</span>
      &lt;ccs2012&gt;
      &lt;concept&gt;
      &lt;concept_id&gt;10003120.10003145.10011770&lt;/concept_id&gt;
      &lt;concept_desc&gt;Human-centered computing&nbsp;Visualization design and evaluation methods&lt;/concept_desc&gt;
      &lt;concept_significance&gt;500&lt;/concept_significance&gt;
      &lt;/concept&gt;
      &lt;concept&gt;
      &lt;concept_id&gt;10003120.10011738.10011774&lt;/concept_id&gt;
      &lt;concept_desc&gt;Human-centered computing&nbsp;Accessibility design and evaluation methods&lt;/concept_desc&gt;
      &lt;concept_significance&gt;500&lt;/concept_significance&gt;
      &lt;/concept&gt;
      &lt;/ccs2012&gt;
      <span class="ltx_ERROR undefined">\ccsdesc</span>[500]Human-centered computing&nbsp;Visualization design and evaluation methods
      <span class="ltx_ERROR undefined">\ccsdesc</span>[500]Human-centered computing&nbsp;Accessibility design and evaluation methods
      <span class="ltx_ERROR undefined">\printccsdesc</span></p>
  </section>
  <section id="S1" class="ltx_section">
    <h2 class="ltx_title ltx_title_section" id="H-S1">
      <span class="ltx_tag ltx_tag_section">1 </span>Introduction</h2>
    <div id="S1.p1" class="ltx_para">
      <p class="ltx_p">Despite decades of visualization research and recent legal requirements to make web-based content accessible&nbsp;<cite class="ltx_cite ltx_citemacro_cite">[<span class="ltx_ref ltx_missing_citation ltx_ref_self">w3c_web_accessibility_initiative_wai_web_2018</span>, <span class="ltx_ref ltx_missing_citation ltx_ref_self">higgins_supreme_2019</span>]</cite>, web-based visualizations remain largely inaccessible to people with visual disabilities.
        Charts on mainstream publications are often completely invisible to screen readers (an assistive technology that transforms text and visual media into speech) or are rendered as incomprehensible strings of <emph class="ltx_emph ltx_font_italic">“graphic graphic graphic”</emph>&nbsp;<cite class="ltx_cite ltx_citemacro_cite">[<span class="ltx_ref ltx_missing_citation ltx_ref_self">sharif_understanding_2021</span>, <span class="ltx_ref ltx_missing_citation ltx_ref_self">sarah_l_fossheim_how_2020</span>]</cite>.
        Current accessibility guidelines ask visualization designers to provide textual descriptions of their graphics via alt text (short for alternative text) and link to underlying data tables&nbsp;<cite class="ltx_cite ltx_citemacro_cite">[<span class="ltx_ref ltx_missing_citation ltx_ref_self">gould_effective_2008</span>, <span class="ltx_ref ltx_missing_citation ltx_ref_self">w3c_wai_2019</span>]</cite>.
        However, these recommendations do not provide modes of information-seeking comparable to what sighted readers enjoy with interactive visualizations.
        For instance, well-written alt text can provide a high-level takeaway of what the visualization shows, but it does not allow readers to drill down into the data to explore specific sections.
        While tables provide readers with the ability to hone in on specific data points, reading data line-by-line quickly becomes tedious and makes it difficult to identify overall trends.
      </p>
    </div>
    <div id="S1.p2" class="ltx_para">
      <p class="ltx_p">Developing rich non-visual screen reader experiences for data visualizations poses several unique challenges.
        Although visuomotor interactions (like hovering, pointing, clicking,
        and dragging) have been core to visualization research&nbsp;<cite class="ltx_cite ltx_citemacro_cite">[<span class="ltx_ref ltx_missing_citation ltx_ref_self">dimara_what_2020</span>]</cite>, screen readers redefine what interaction is for visualization.
        Rather than primarily <emph class="ltx_emph ltx_font_italic">manipulating</emph> aspects of the visualization or its backing data pipeline&nbsp;<cite class="ltx_cite ltx_citemacro_cite">[<span class="ltx_ref ltx_missing_citation ltx_ref_self">yi_toward_2007</span>, <span class="ltx_ref ltx_missing_citation ltx_ref_self">heer_interactive_2012</span>, <span class="ltx_ref ltx_missing_citation ltx_ref_self">dimara_what_2020</span>]</cite>, screen readers make <emph class="ltx_emph ltx_font_italic">reading</emph> a visualization an interactive operation as well — users must intentionally perform actions with their input devices in order to cognize visualized elements.
        Moreover, as screen readers narrate elements one-at-a-time, they explicitly linearize reading a visualization.
        As a result, in contrast to sighted readers who can choose to selectively attend to specific elements and have access to the entire visualization during the reading process, screen reader users are limited to the linear steps made available by the visualization author and must remember (or note down) prior output conveyed by the screen reader.
        Despite these modality differences, studies have found that screen reader users share the same information-seeking goals as sighted readers: an initial holistic overview followed by comparing data points&nbsp;<cite class="ltx_cite ltx_citemacro_cite">[<span class="ltx_ref ltx_missing_citation ltx_ref_self">sharif_understanding_2021</span>]</cite>, akin to the information-seeking mantra of “overview first, zoom and filter, and details on demand”&nbsp;<cite class="ltx_cite ltx_citemacro_cite">[<span class="ltx_ref ltx_missing_citation ltx_ref_self">shneiderman_eyes_2003</span>]</cite>.</p>
    </div>
    <div id="S1.p3" class="ltx_para">
      <p class="ltx_p">In this paper, we begin to bridge this divide by conducting an iterative co-design process (co-author Hajas
        is a blind researcher with relevant experience) prototyping rich and usable screen reader experiences for web-based visualizations.
        We identify three design dimensions for enabling an expressive space of experiences: <emph class="ltx_emph ltx_font_italic">structure</emph>, or how the different elements of a chart should be organized for a screen reader to traverse; <emph class="ltx_emph ltx_font_italic">navigation</emph>, which describes the operations a user may perform to move through this structure; and, <emph class="ltx_emph ltx_font_italic">description</emph>, which specifies the semantic content, composition, and verbosity of text conveyed at each step.
        We demonstrate how to operationalize these design dimensions through diverse accessible reading experiences across a variety of chart types.
      </p>
    </div>
    <div id="S1.p4" class="ltx_para">
      <p class="ltx_p">To evaluate our contribution, we conduct an exploratory mixed-methods study with a subset of our prototypes and 13 blind or visually impaired screen reader users.
        We identify specific features that make visualizations more useful for screen reader users (e.g., hierarchical and segmented approaches to presenting data, cursors and road maps for spatial navigation) and identify behavior patterns that screen reader users follow as they read a visualization (e.g., constant hypothesis testing and validating their mental models).
      </p>
    </div>
  </section>
  <section id="S2" class="ltx_section">
    <h2 class="ltx_title ltx_title_section" id="H-S2">
      <span class="ltx_tag ltx_tag_section">2 </span>Background and Related Work</h2>
    <div id="S2.p1" class="ltx_para">
      <p class="ltx_p"><strong class="ltx_text ltx_font_bold">Screen Reader Assistive Technology.</strong>
        A screen reader is an assistive technology that conveys digital text or images as synthesized speech or braille output.
        Screen readers are available as standalone third-party software or can be built-in features of desktop and mobile operating systems.
        A screen reader allows a user to navigate content linearly with input methods native to a given platform (e.g., touch on smartphones, mouse/keyboard input on desktop). Content authors must generate and attach alt text to their visual content like images or charts in order for them to be accessible to screen reader users.
        Functionality and user experience differs across platforms and screen readers.
        In this paper, however, we focus on interacting with web-based visualizations with the most widely used desktop screen readers (JAWS/NVDA for Windows, VoiceOver for Mac).</p>
    </div>
    <div id="S2.p2" class="ltx_para">
      <p class="ltx_p"><strong class="ltx_text ltx_font_bold">Web Accessibility Standards.</strong>
        In 2014, the World Wide Web Consortium (W3C) adopted the Web Accessibility Initiative’s Accessible Rich Internet Applications protocol (WAI-ARIA) which introduced a range of semantically-meaningful HTML attributes to allow screen readers to better parse HTML elements&nbsp;<cite class="ltx_cite ltx_citemacro_cite">[<span class="ltx_ref ltx_missing_citation ltx_ref_self">mdn_contributors_aria_2021</span>]</cite>.
        In particular, these attributes allow a screen reader to convey the state of dynamic widgets (e.g., autocomplete is available for text entry), alert users to live content updates, and identify common sections of a web page for rapid navigation (e.g., banners or the main content).
        In 2018, the W3C published the WAI-ARIA Graphics Module&nbsp;<cite class="ltx_cite ltx_citemacro_cite">[<span class="ltx_ref ltx_missing_citation ltx_ref_self">noauthor_wai-aria_2018</span>]</cite> with additional attributes to support marking up structured graphics such as charts, maps, and diagrams.
        These attributes allow designers to annotate individual and groups of graphical elements as well as surface data values and labels for a screen reader to read aloud.</p>
    </div>
    <div id="S2.p3" class="ltx_para">
      <p class="ltx_p"><strong class="ltx_text ltx_font_bold">Accessible Visualization Design.</strong>
        In a recent survey, Kim et al.&nbsp;<cite class="ltx_cite ltx_citemacro_cite">[<span class="ltx_ref ltx_missing_citation ltx_ref_self">kim_accessible_2021</span>]</cite> describe the rich body of work that has explored multi-sensory approaches to visualization for multiple disabilities&nbsp;<cite class="ltx_cite ltx_citemacro_cite">[<span class="ltx_ref ltx_missing_citation ltx_ref_self">goos_haptic_2001</span>, <span class="ltx_ref ltx_missing_citation ltx_ref_self">hasty_guidelines_2011</span>, <span class="ltx_ref ltx_missing_citation ltx_ref_self">kaper_data_1999</span>, <span class="ltx_ref ltx_missing_citation ltx_ref_self">barrass_using_1999</span>, <span class="ltx_ref ltx_missing_citation ltx_ref_self">wu_understanding_2021</span>, <span class="ltx_ref ltx_missing_citation ltx_ref_self">lundgard_sociotechnical_2019</span>]</cite>.
        Here, we focus on screen reader output native to web-based interfaces for blind users (namely via speech).
        Sharif et al.&nbsp;<cite class="ltx_cite ltx_citemacro_cite">[<span class="ltx_ref ltx_missing_citation ltx_ref_self">sharif_understanding_2021</span>]</cite> find that many web-based charts are intentionally designed to cause screen readers to skip over them.
        For charts that a screen reader does detect, blind or visually impaired users nevertheless experience significant difficulties: these users spend 211% more time interacting with the charts and are 61% less accurate in extracting information compared to non-screen-reader users&nbsp;<cite class="ltx_cite ltx_citemacro_cite">[<span class="ltx_ref ltx_missing_citation ltx_ref_self">sharif_understanding_2021</span>]</cite>.
        Despite the availability of ARIA, alt text and data tables remain the most commonly used and recommended methods for making web-based charts accessible to screen readers&nbsp;<cite class="ltx_cite ltx_citemacro_cite">[<span class="ltx_ref ltx_missing_citation ltx_ref_self">gould_effective_2008</span>, <span class="ltx_ref ltx_missing_citation ltx_ref_self">w3c_wai_2019</span>, <span class="ltx_ref ltx_missing_citation ltx_ref_self">choi_visualizing_2019</span>]</cite>.
        However, each of these three approaches comes with its own limitations.
        Static alt text requires blind readers to accept the author’s interpretation of the data; by not affording exploratory and interactive modes, alt text robs readers of the necessary time and space to interpret the numbers for themselves&nbsp;<cite class="ltx_cite ltx_citemacro_cite">[<span class="ltx_ref ltx_missing_citation ltx_ref_self">lundgard_accessible_2021</span>]</cite>.
        Recent research also suggests that blind people have nuanced preferences for the kinds of visual semantic content conveyed via text&nbsp;<cite class="ltx_cite ltx_citemacro_cite">[<span class="ltx_ref ltx_missing_citation ltx_ref_self">potluri_examining_2021</span>, <span class="ltx_ref ltx_missing_citation ltx_ref_self">lundgard_accessible_2021</span>]</cite>, and desire more interactive and exploratory representations of pictorial images&nbsp;<cite class="ltx_cite ltx_citemacro_cite">[<span class="ltx_ref ltx_missing_citation ltx_ref_self">morris_rich_2018</span>]</cite>.
        Data tables, on the other hand, undo the benefits of abstraction that visualizations enable — they force readers to step sequentially through data values making it difficult to identify larger-scale patterns or trends, and do not leverage the structure inherent to web-based grammars of graphics&nbsp;<cite class="ltx_cite ltx_citemacro_cite">[<span class="ltx_ref ltx_missing_citation ltx_ref_self">bostock_d3_2011</span>, <span class="ltx_ref ltx_missing_citation ltx_ref_self">satyanarayan_vega-lite_2017</span>]</cite>.
        Finally, ARIA labels are not a panacea; even when they are used judiciously — a non-trivial task which often results in careless designs that cause screen readers to simply read out long sequences of numbers without any other identifiable information&nbsp;<cite class="ltx_cite ltx_citemacro_cite">[<span class="ltx_ref ltx_missing_citation ltx_ref_self">sarah_l_fossheim_how_2020</span>]</cite> — they present a fairly low expressive ceiling.
        The current ARIA specification does not afford rich and nuanced information-seeking opportunities equivalent to those available to sighted readers.
      </p>
    </div>
    <div id="S2.p4" class="ltx_para">
      <p class="ltx_p">There has been some promising progress for improving support for accessibility within visualization toolkits, and vice-versa for improving native support for charts in screen reader technologies.
        For instance, Vega-Lite&nbsp;<cite class="ltx_cite ltx_citemacro_cite">[<span class="ltx_ref ltx_missing_citation ltx_ref_self">satyanarayan_vega-lite_2017</span>]</cite> and Highcharts&nbsp;<cite class="ltx_cite ltx_citemacro_cite">[<span class="ltx_ref ltx_missing_citation ltx_ref_self">highcharts_accessibility_nodate</span>]</cite> are beginning to provide ARIA support out-of-the-box.
        Apple’s VoiceOver Data Comprehension feature&nbsp;<cite class="ltx_cite ltx_citemacro_cite">[<span class="ltx_ref ltx_missing_citation ltx_ref_self">davert_whats_2019</span>]</cite> affords more granular screen reader navigation within the chart, beyond textual summaries and data tables, via four categories of selectable interactions for charts appearing in Apple’s Stocks or Health apps.
        These interactions include <emph class="ltx_emph ltx_font_italic">Describe Chart</emph>, which describes properties of the chart’s construction, such as its encodings, axis labels, and ranges; <emph class="ltx_emph ltx_font_italic">Summarize Numerical Data</emph>, which reports min and max data values, and summary statistics like mean and standard deviation; <emph class="ltx_emph ltx_font_italic">Describe Data Series</emph>, which reports the rate-of-change/growth of a curve, trends, and outliers; and <emph class="ltx_emph ltx_font_italic">Play Audiograph</emph>, which plays a tonal representation of the graph’s ascending/descending trend over time&nbsp;<cite class="ltx_cite ltx_citemacro_cite">[<span class="ltx_ref ltx_missing_citation ltx_ref_self">davert_whats_2019</span>]</cite>.
        While Apple’s features are presently limited to single-line charts, SAS’ Graphics Accelerator&nbsp;<cite class="ltx_cite ltx_citemacro_cite">[<span class="ltx_ref ltx_missing_citation ltx_ref_self">sas_graphics_accelerator_sas_2018</span>]</cite> supports a similar featureset (including sonification, textual descriptions, and data tables) but for a broader range of statistical charts including bar charts, box plots, contour plots, and scatter plot matrices.
        Our work follows in the spirit of these tools but focuses on web-based visualizations rather than standalone- or platform-integrated software.
        We go beyond what ARIA supports today to enable high-level and fine-grained screen reader interactions, and hope that our work will help inform ongoing discussions on improving web accessibility standards (e.g., via an Accessibility Object Model&nbsp;<cite class="ltx_cite ltx_citemacro_cite">[<span class="ltx_ref ltx_missing_citation ltx_ref_self">boxhall_accessibility_nodate</span>]</cite>).
      </p>
    </div>
  </section>
  <section id="S3" class="ltx_section">
    <h2 class="ltx_title ltx_title_section" id="H-S3">
      <span class="ltx_tag ltx_tag_section">3 </span>Design Dimensions for Rich Screen Reader Experiences</h2>
    <div id="S3.p1" class="ltx_para">
      <p class="ltx_p">Currently, the most common ways of making a visualization accessible to screen readers include adding a single high-level textual description (via alt text), providing access to low-level data via a table, or tagging visualization elements with ARIA labels to allow screen readers to step through them linearly (e.g., as with Highcharts&nbsp;<cite class="ltx_cite ltx_citemacro_cite">[<span class="ltx_ref ltx_missing_citation ltx_ref_self">highcharts_accessibility_nodate</span>]</cite>).
        While promising, these approaches do not afford rich information-seeking behaviors akin to what sighted readers enjoy with interactive visualizations.
        To support systematic thinking about accessible visualization design, we introduce three design dimensions that support rich, accessible reading experiences: <emph class="ltx_text ltx_font_italic">structure</emph>, or how elements of the visualization should be organized for a screen reader to traverse; <emph class="ltx_text ltx_font_italic">navigation</emph>, or the mechanisms by which a screen reader user can move from one element to another; and <emph class="ltx_text ltx_font_italic">description</emph>, or what semantic content the screen reader conveys.</p>
    </div>
    <div id="S3.p2" class="ltx_para">
      <p class="ltx_p"><strong class="ltx_text ltx_font_bold">Methods.</strong>
        We began by studying the development of multi-sensory graphical systems, covering work in critical cartography&nbsp;<cite class="ltx_cite ltx_citemacro_cite">[<span class="ltx_ref ltx_missing_citation ltx_ref_self">wiedel_tactual_1969</span>, <span class="ltx_ref ltx_missing_citation ltx_ref_self">koch_state_2012</span>]</cite>, blind education&nbsp;<cite class="ltx_cite ltx_citemacro_cite">[<span class="ltx_ref ltx_missing_citation ltx_ref_self">aldrich_tactile_2001</span>, <span class="ltx_ref ltx_missing_citation ltx_ref_self">godfrey_advice_2015</span>]</cite>, tactile graphics&nbsp;<cite class="ltx_cite ltx_citemacro_cite">[<span class="ltx_ref ltx_missing_citation ltx_ref_self">miesenberger_universal_2018</span>, <span class="ltx_ref ltx_missing_citation ltx_ref_self">hasty_guidelines_2011</span>, <span class="ltx_ref ltx_missing_citation ltx_ref_self">de_greef_interdependent_2021</span>, <span class="ltx_ref ltx_missing_citation ltx_ref_self">amick_guidelines_1997</span>, <span class="ltx_ref ltx_missing_citation ltx_ref_self">butler_technology_2021</span>]</cite>, and multi-sensory visualization&nbsp;<cite class="ltx_cite ltx_citemacro_cite">[<span class="ltx_ref ltx_missing_citation ltx_ref_self">martinez_accessible_2019</span>, <span class="ltx_ref ltx_missing_citation ltx_ref_self">chundury_towards_2021</span>, <span class="ltx_ref ltx_missing_citation ltx_ref_self">brock_usage_2010</span>, <span class="ltx_ref ltx_missing_citation ltx_ref_self">baker_tactile_2016</span>]</cite>.
        Drawing on conventions and literature on crip, reflective, and participatory design&nbsp;<cite class="ltx_cite ltx_citemacro_cite">[<span class="ltx_ref ltx_missing_citation ltx_ref_self">hamraie_designing_2013</span>, <span class="ltx_ref ltx_missing_citation ltx_ref_self">sengers_reflective_2005</span>, <span class="ltx_ref ltx_missing_citation ltx_ref_self">costanza-chock_design_2020</span>]</cite>, all authors began an iterative co-design process with <span class="ltx_ERROR undefined">\censor</span>Hajas, who is a blind researcher with relevant expertise.
        <span class="ltx_ERROR undefined">\censor</span>Hajas is a screen reader user with a PhD in HCI and accessible science communication, but he is not an expert in visualization research.
        Co-design — particularly as encapsulated in the disability activism slogan, <emph class="ltx_emph ltx_font_italic">“Nothing about us, without us”</emph>&nbsp;<cite class="ltx_cite ltx_citemacro_cite">[<span class="ltx_ref ltx_missing_citation ltx_ref_self">costanza-chock_design_2020</span>]</cite> — is important because it can eliminate prototypes that replicate existing tools, solve imaginary problems (i.e., by creating disability dongles&nbsp;<cite class="ltx_cite ltx_citemacro_cite">[<span class="ltx_ref ltx_missing_citation ltx_ref_self">jackson_disability_2019</span>]</cite>) or unintentionally produce harmful technology&nbsp;<cite class="ltx_cite ltx_citemacro_cite">[<span class="ltx_ref ltx_missing_citation ltx_ref_self">shew_ableism_2020</span>]</cite>.
        To balance engaging disabled users while acknowledging academia’s traditionally extractive relationship with marginalized populations<span class="ltx_text" style="color:#FF0000;">&nbsp;<cite class="ltx_cite ltx_citemacro_cite">[<span class="ltx_ref ltx_missing_citation ltx_ref_self">cornwall_what_1995</span>]</cite></span>, we intentionally acknowledge <span class="ltx_ERROR undefined">\censor</span>Hajas as both co-designer and co-author.
        We believe that the distinction between co-designer — a phrase that often discounts lived experience as insufficiently academic — and researcher is minimal; technical, qualitative, and experiential expertise are all important components of this research.
        <span class="ltx_ERROR undefined">\censor</span>Hajas’ profile is a perfect example of the intersection between lived experience of existing challenges and solutions, academic experience of research procedures, and an interest in the science of visualization.
        While he does not represent all screen reader users, his academic expertise and lived experience uniquely qualify him to be both researcher and co-designer.
        Nevertheless, to incorporate a diverse range of perspectives, we recruited additional participants as part of an evaluative study (§&nbsp;<a href="#S5" title="5 Evaluation ‣ Rich Screen Reader Experiences for Accessible Data Visualization" class="ltx_ref"><span class="ltx_text ltx_ref_tag">5</span></a>).
      </p>
    </div>
    <div id="S3.p3" class="ltx_para">
      <p class="ltx_p">Our work unfolded over 6 months and yielded 15 prototypes.
        All authors met weekly for hour-long video conferences.
        In each session, we would discuss the structure and affordances of the prototypes, often by observing and recording <span class="ltx_ERROR undefined">\censor</span>Hajas’ screen as he worked through them.
        We would also use these meetings to reflect on how the prototypes have evolved, compare their similarities and differences, and whiteboard potential design dimensions to capture these insights.
        Following these meetings, <span class="ltx_ERROR undefined">\censor</span>Hajas wrote memos detailing the motivations for each prototype, tagging its most salient features, summarizing the types of interactions that were available, enumerating questions that the prototype raises, and finally providing high-level feedback about its usefulness and usability.
        In the following section, we liberally quote these memos to provide evidence and additional context for our design dimensions.
      </p>
    </div>
    <section id="S3.SS1" class="ltx_subsection">
      <h3 class="ltx_title ltx_title_subsection" id="H-S3.SS1">
        <span class="ltx_tag ltx_tag_subsection">3.1 </span>Structure</h3>
      <div id="S3.SS1.p1" class="ltx_para">
        <p class="ltx_p">We define <emph class="ltx_emph ltx_font_italic">structure</emph> to mean an underlying representation of a visualization that organizes its data and visual elements into a format that can be traversed by a screen reader.
          Through our co-design process, we identified two components important to analyzing accessible structures: their <emph class="ltx_text ltx_font_italic">form</emph>, or the shape they organize information into; and <emph class="ltx_text ltx_font_italic">entities</emph>, or which parts of the visualization specification are used to translate a chart into a non-visual structure.
          Design decisions about form and entities are guided by considerations of <emph class="ltx_emph ltx_font_italic">information granularity</emph>, or how many levels comprise the range between a high-level overview and individual data values.</p>
      </div>
      <figure id="S3.F1" class="ltx_figure"><img src="x1.png" id="S3.F1.g1" class="ltx_graphics ltx_centering" width="1081" height="333" alt="">
        <figcaption class="ltx_caption ltx_centering"><span class="ltx_tag ltx_tag_figure"><span class="ltx_text" style="font-size:90%;">Figure 1</span>: </span><span class="ltx_text" style="font-size:90%;">
            (a) An accessible visualization structure in the form of a tree and comprised of encoding entities.
            Solid <span class="ltx_text" style="color:#FF00FF;">magenta</span> outlines indicate the location of the screen reader cursor.
            Solid <span class="ltx_text" style="color:#0000FF;">blue</span> arrows between labels indicate available next steps via keyboard navigability (up, down, left, right).
            (b)
            Three ways of navigating accessible visualization structures: structural, spatial, and targeted.
          </span></figcaption>
      </figure>
      <div id="S3.SS1.p2" class="ltx_para">
        <p class="ltx_p"><strong class="ltx_text ltx_font_bold">Form.</strong>
          Accessible structures organize information about the visualization into different forms, including lists, tables, and trees.
          Consider existing best practices and common approaches.
          A rasterized chart with alt text is represented to a screen reader as a single node.
          SVG-based visualizations can additionally be tagged with ARIA labels to describe the axes, legends, and individual data points.
          Despite SVG’s nesting, screen readers linearize these ARIA labels into a list structure so that the user can step through them sequentially.
          Data tables, on the other hand, provide a grid structure for screen readers to traverse.
          At each cell of the grid, the screen reader reads out a different textual description, allowing the user to explore a space by traversing the grid spatially (up, down, left, and right) instead of merely linearly.
          Accessible visualization research has begun to explore the use of tree structures for storing chart metadata&nbsp;<cite class="ltx_cite ltx_citemacro_cite">[<span class="ltx_ref ltx_missing_citation ltx_ref_self">weninger_asvg_2015</span>]</cite>, but they remain relatively rare in practice.
          Trees are our focus here as their branching and hierarchical organization allows users to browse different components of a visualization and traverse them at different levels of detail.</p>
      </div>
      <div id="S3.SS1.p3" class="ltx_para">
        <p class="ltx_p"><strong class="ltx_text ltx_font_bold">Entities.</strong>
          Where form refers to how nodes in a structure are arranged, entities instead refers to what aspects of the visualization the nodes represent.
          These aspects can include:
        </p>
      </div>
      <div id="S3.SS1.p4" class="ltx_para">
        <ul id="S3.I1" class="ltx_itemize">
          <li id="S3.I1.i1" class="ltx_item" style="list-style-type:none;">
            <span class="ltx_tag ltx_tag_item">•</span>
            <div id="S3.I1.i1.p1" class="ltx_para">
              <p class="ltx_p"><emph class="ltx_text ltx_font_italic">Data</emph>, where nodes in the structure represent individual data values or different slices of the data cube (e.g., by field, bins, categories, or interval ranges).
                For example, in a data table, every node (i.e. cell) represents a data value designated by the row and column coordinates.
                Depending on the form, data entities can be presented at different levels of detail.
                For example, one prototype we explored represents a line chart as a binary tree structure (Fig.&nbsp;<a href="#S4.F2" title="Figure 2 ‣ 4 Example Gallery ‣ Rich Screen Reader Experiences for Accessible Data Visualization" class="ltx_ref"><span class="ltx_text ltx_ref_tag">2</span></a>e): the root node represents the entire x-axis domain, and each left and right child node recursively splits the domain in half.
                Users can traverse the tree downward to binary search for specific values or understand the data distribution.
              </p>
            </div>
          </li>
          <li id="S3.I1.i2" class="ltx_item" style="list-style-type:none;">
            <span class="ltx_tag ltx_tag_item">•</span>
            <div id="S3.I1.i2.p1" class="ltx_para">
              <p class="ltx_p"><emph class="ltx_text ltx_font_italic">Encodings,</emph> where nodes in the structure correspond to visual channels (e.g., position, color, size) that data fields map to.
                For instance, consider Figure&nbsp;<a href="#S3.F1" title="Figure 1 ‣ 3.1 Structure ‣ 3 Design Dimensions for Rich Screen Reader Experiences ‣ Rich Screen Reader Experiences for Accessible Data Visualization" class="ltx_ref"><span class="ltx_text ltx_ref_tag">1</span></a>a which depicts the encoding structure of a Vega-Lite scatterplot.
                The visualization is specified as mappings from data fields to three visual encoding channels: <span class="ltx_text ltx_font_typewriter">x</span>, <span class="ltx_text ltx_font_typewriter">y</span>, and <span class="ltx_text ltx_font_typewriter">color</span>.
                Thus, the encoding structure, which here takes the form of a tree, comprises a root node that represents the entire visualization and then branches for each encoding channel as well as the data rectangle (x-y grid).
                Descending into these branches yields nodes that select different categories or interval regions, determined by the visual affordances of the channel.
                For instance, descending into axis branches yields nodes for each interval between major ticks; x-y grid nodes represent cells in the data rectangle as determined by intersections of the axes gridlines; and legend nodes reflect the categories or intervals of the encoding channel (i.e., for nominal or quantitative data respectively).
                Finally, the leaves of these branches represent individual data values that fall within the selected interval or category.
              </p>
            </div>
          </li>
          <li id="S3.I1.i3" class="ltx_item" style="list-style-type:none;">
            <span class="ltx_tag ltx_tag_item">•</span>
            <div id="S3.I1.i3.p1" class="ltx_para">
              <p class="ltx_p"><emph class="ltx_text ltx_font_italic">Annotations,</emph>
                where nodes in the structure represent the rhetorical devices a visualization author may use to to shape a visual narrative or guide reader interpretation of data (e.g., by drawing attention to specific data points or visual regions).
                Surfacing annotations in the visualization structure allows screen reader users to also benefit from and be guided by the author’s narrative intent.
                For example, Figure&nbsp;<a href="#S4.F2" title="Figure 2 ‣ 4 Example Gallery ‣ Rich Screen Reader Experiences for Accessible Data Visualization" class="ltx_ref"><span class="ltx_text ltx_ref_tag">2</span></a>d illustrates an annotation tree structure derived from an example line chart with two annotations highlighting intervals in the temporal x-axis. The root of the tree has two children representing the two annotated regions.
                The these two annotation nodes have a child node for each data point that is highlighted within the region of interest.</p>
            </div>
          </li>
        </ul>
      </div>
      <div id="S3.SS1.p5" class="ltx_para">
        <p class="ltx_p"><strong class="ltx_text ltx_font_bold">Considerations: Information Granularity.</strong>
          When might users prefer nested structures (i.e. trees) over flat structures (i.e., lists and tables)?
          Like sighted users, screen reader users seek information by looking for an overview before identifying subsets to view in more detail&nbsp;<cite class="ltx_cite ltx_citemacro_cite">[<span class="ltx_ref ltx_missing_citation ltx_ref_self">sharif_understanding_2021</span>]</cite>.
          Trees allow users to read summary information at the top of the structure, and traverse deeper into branches to acquire details-on-demand.
          Kim et al. use the term <emph class="ltx_text ltx_font_italic">information granularity</emph> to refer to the different levels of detail at which an accessible visualization might reveal information&nbsp;<cite class="ltx_cite ltx_citemacro_cite">[<span class="ltx_ref ltx_missing_citation ltx_ref_self">kim_accessible_2021</span>]</cite>.
          They organize granularity into three levels: existence, overview, and detail.
          <emph class="ltx_text ltx_font_italic">Existence</emph> includes information that a chart is present, but no information about underlying data.
          <emph class="ltx_text ltx_font_italic">Overview</emph> includes summary information about data — e.g. axes, legends, and summary statistics like min, max, or mean — but not individual data points.
          <emph class="ltx_text ltx_font_italic">Detail</emph> includes information about precise data values.</p>
      </div>
      <div id="S3.SS1.p6" class="ltx_para">
        <p class="ltx_p">We use the root node to signal the existence of the tree, and deeper nodes in the tree reflect finer levels of granularity.
          Branch nodes give an overview summary about the data underneath, providing information scent&nbsp;<cite class="ltx_cite ltx_citemacro_cite">[<span class="ltx_ref ltx_missing_citation ltx_ref_self">pirolli_information_1999</span>]</cite>, while leaf nodes map to individual data points.
          In his feedback about the prototype shown in Figure&nbsp;<a href="#S3.F1" title="Figure 1 ‣ 3.1 Structure ‣ 3 Design Dimensions for Rich Screen Reader Experiences ‣ Rich Screen Reader Experiences for Accessible Data Visualization" class="ltx_ref"><span class="ltx_text ltx_ref_tag">1</span></a>, <span class="ltx_ERROR undefined">\censor</span>Hajas wrote <span class="ltx_text" style="color:#000000;background-color:#E6FFF5;"><emph class="ltx_emph ltx_font_italic">“considering how difficult reading a scatterplot with a screen reader is due to its sequential reading nature, the tree structure makes the huge number of data points fairly readable”</emph></span>.</p>
      </div>
      <div id="S3.SS1.p7" class="ltx_para">
        <p class="ltx_p">Entities are not mutually exclusive, and a structure might opt to surface different entities in parallel branches.
          We prototyped a version of Figure&nbsp;<a href="#S4.F2" title="Figure 2 ‣ 4 Example Gallery ‣ Rich Screen Reader Experiences for Accessible Data Visualization" class="ltx_ref"><span class="ltx_text ltx_ref_tag">2</span></a>d which placed an encoding tree and annotation tree as sibling branches under the root node.
          Users could descend down a given branch, and switch to the equivalent location in the other branch at will.
          These design decisions are motivated by findings in prior work: by placing encodings and annotations as co-equal branches, we produce a structure that preserves the agency of screen reader users either to start with the narrative arc of annotations, or follow it after having the chance to interpret the data for themselves&nbsp;<cite class="ltx_cite ltx_citemacro_cite">[<span class="ltx_ref ltx_missing_citation ltx_ref_self">lundgard_accessible_2021</span>]</cite>.
          As <span class="ltx_ERROR undefined">\censor</span>Hajas confirms <span class="ltx_text" style="color:#000000;background-color:#E6FFF5;"><emph class="ltx_emph ltx_font_italic">“Depending on my task, either the encoding or annotation tree could be more important. If my task involved checking population growth in the last 100 years, I would start with the encodings. If I were to look for sudden changes in population numbers, such war-time mortality effects, I would start exploring the annotations, then tunnel back to the other tree.”</emph></span></p>
      </div>
    </section>
    <section id="S3.SS2" class="ltx_subsection">
      <h3 class="ltx_title ltx_title_subsection" id="H-S3.SS2">
        <span class="ltx_tag ltx_tag_subsection">3.2 </span>Navigation</h3>
      <div id="S3.SS2.p1" class="ltx_para">
        <p class="ltx_p">Screen reader users need ways to traverse accessible structures to explore data or locate specific points.
          When browsing a webpage, screen readers provide a cursor that represents the current location in the page.
          Users use keyboard commands to step the cursor backward and forward in a sequential list of selectable items on the page, or jump to important locations such as headers and links.
          Through our prototyping process, we developed three ways of navigating through an accessible structure: <emph class="ltx_text ltx_font_italic">structural navigation</emph>, <emph class="ltx_text ltx_font_italic">spatial navigation</emph>, and <emph class="ltx_text ltx_font_italic">targeted navigation</emph> (Fig.&nbsp;<a href="#S3.F1" title="Figure 1 ‣ 3.1 Structure ‣ 3 Design Dimensions for Rich Screen Reader Experiences ‣ Rich Screen Reader Experiences for Accessible Data Visualization" class="ltx_ref"><span class="ltx_text ltx_ref_tag">1</span></a>b).
          A key concern across these navigation schemes is reducing a user’s cognitive load by affording a sense of the <emph class="ltx_emph ltx_font_italic">boundaries</emph> of the structure.</p>
      </div>
      <div id="S3.SS2.p2" class="ltx_para">
        <p class="ltx_p"><strong class="ltx_text ltx_font_bold">Structural Navigation.</strong>
          Structural navigation refers to ways users move within the accessible structure.
          We identify two types of structural navigation.
          <emph class="ltx_text ltx_font_italic">Local navigation</emph> refers to step-by-step movements between adjacent nodes in the structure. This includes moving up and down levels of a hierarchy, or moving side to side between sibling elements.
          <emph class="ltx_text ltx_font_italic">Lateral navigation</emph> refers to movement between equivalent nodes in adjacent sub-structures.
          For example, Fig.&nbsp;<a href="#S4.F2" title="Figure 2 ‣ 4 Example Gallery ‣ Rich Screen Reader Experiences for Accessible Data Visualization" class="ltx_ref"><span class="ltx_text ltx_ref_tag">2</span></a>a depicts a multi-view visualization with six facets.
          When the cursor is on a Y-axis interval for the first facet, directly moving to the same Y-axis interval on the second facet is a lateral move.</p>
      </div>
      <div id="S3.SS2.p3" class="ltx_para">
        <p class="ltx_p"><strong class="ltx_text ltx_font_bold">Spatial Navigation.</strong>
          Sometimes users want to traverse the visualization according to directions in the screen coordinate system.
          We refer to this as spatial navigation.
          For example, when traversing part of an encoding structure that represents the visualization’s X-Y grid, a downward structural navigation would go down a level into the currently selected cell of the grid, showing the data points inside the cell.
          A downward spatial navigation, in contrast, would move to the grid cell below the current one — i.e. towards the bottom of the Y-axis.
          Spatial navigation is also useful when navigating lists of data points, which may not be sorted by X or Y value in the encoding structure.
          Where a leftward structural navigation would move to the previous data point in the structure, a leftward spatial navigation would move to the point with the next lowest X value.</p>
      </div>
      <div id="S3.SS2.p4" class="ltx_para">
        <p class="ltx_p"><strong class="ltx_text ltx_font_bold">Targeted Navigation.</strong>
          Navigating structurally and spatially requires a user to maintain a mental map of where their cursor is relative to where they want to go.
          If the user has a specific target location in mind, maintaining this mental map in order to find the correct path in the structure to their target can create unnecessary cognitive load.
          We use targeted navigation to refer to methods that only require the user to specify a target location, without needing to specify a path to get there.
          For example, the user might open a list of locations in the structure and select one to jump directly there.
          Screen readers including JAWS and VoiceOver implement an analogous form of navigation within webpages.
          Instead of manually stepping through the page to find a specific piece of content, users can open a menu with a list of locations in the page.
          These locations are defined in HTML using ARIA landmark roles, which can designate parts of the DOM as distinct sections when read by a screen reader.
          When a screen reader user open the list of landmarks and selects a landmark, their cursor moves directly to that element.</p>
      </div>
      <div id="S3.SS2.p5" class="ltx_para">
        <p class="ltx_p"><strong class="ltx_text ltx_font_bold">Considerations: Boundaries &amp; Cognitive Load.</strong>
          Screen reader users only read part of the visualization at a time, akin to a sighted user reading a map through a small tube <cite class="ltx_cite ltx_citemacro_cite">[<span class="ltx_ref ltx_missing_citation ltx_ref_self">hasty_guidelines_2011</span>]</cite>.
          How do they keep track of where they are?
          In our co-design process, we found it easiest for a user to remember their location relative to a known starting point, which is corroborated by literature on developing spatial awareness for blind people <cite class="ltx_cite ltx_citemacro_cite">[<span class="ltx_ref ltx_missing_citation ltx_ref_self">wiedel_tactual_1969</span>, <span class="ltx_ref ltx_missing_citation ltx_ref_self">li_editing_2019</span>, <span class="ltx_ref ltx_missing_citation ltx_ref_self">chundury_towards_2021</span>]</cite>. <span class="ltx_ERROR undefined">\censor</span>Hajas noted the prevalence of the <span class="ltx_text ltx_font_typewriter">Home</span> and <span class="ltx_text ltx_font_typewriter">End</span> shortcuts across applications for returning to a known position in a bounded space (e.g. the start/end of a line in a text editor).
          We also found that grouping data by category or interval was helpful for maintaining position. <span class="ltx_ERROR undefined">\censor</span>Hajas noted that exploring data within a bounded region was like entering a room in a house.
          In his analogy, a house with many smaller rooms with doors is better than a house with one big room and no doors.
          Bounded spaces alleviate cognitive load by allowing a user to maintain their position relative to entry points.</p>
      </div>
      <div id="S3.SS2.p6" class="ltx_para">
        <p class="ltx_p">Comparing navigation techniques, <span class="ltx_ERROR undefined">\censor</span>Hajas noted that spatial felt <span class="ltx_text" style="color:#000000;background-color:#E6FFF5;"><emph class="ltx_emph ltx_font_italic">“shallow but broad”</emph></span> while targeted felt <span class="ltx_text" style="color:#000000;background-color:#E6FFF5;"><emph class="ltx_emph ltx_font_italic">“deep but narrow.”</emph></span>
          While he expressed a personal preference for deep-narrow structures, he nevertheless <span class="ltx_text" style="color:#000000;background-color:#E6FFF5;"><emph class="ltx_emph ltx_font_italic">“would not give up [spatial navigation] because it makes me believe I’m actually interacting with a visualization.”</emph></span>
          This insight demonstrates the value of offering multiple complementary navigation techniques.
          Moreover, while targeted navigation facilitates quick searching and doesn’t require the user to maintain a mental map to find specific data points, structural and spatial exploration enable more open-ended data exploration. It also provides a mechanism for establishing common ground with sighted readers (e.g., allowing both blind and sighted readers to understand a line segment as being “above” or “higher” than another).
        </p>
      </div>
    </section>
    <section id="S3.SS3" class="ltx_subsection">
      <h3 class="ltx_title ltx_title_subsection" id="H-S3.SS3">
        <span class="ltx_tag ltx_tag_subsection">3.3 </span>Description</h3>
      <div id="S3.SS3.p1" class="ltx_para">
        <p class="ltx_p">When a user navigates to a node in a structure, the screen reader narrates a description associated with that node.
          For example, when navigating to the chart’s legend, the screen reader output might articulate visual properties of the chart’s encoding: <span class="ltx_text" style="color:#000000;background-color:#FFFFCC;"><emph class="ltx_emph ltx_font_italic">“Category O has color encoding green; X has color encoding orange”</emph></span> (Figure&nbsp;<a href="#S3.F1" title="Figure 1 ‣ 3.1 Structure ‣ 3 Design Dimensions for Rich Screen Reader Experiences ‣ Rich Screen Reader Experiences for Accessible Data Visualization" class="ltx_ref"><span class="ltx_text ltx_ref_tag">1</span></a>).
          Or, if that visual semantic content isn’t relevant to understanding the data, it might ignore the color: <span class="ltx_text" style="color:#000000;background-color:#FFFFCC;"><emph class="ltx_emph ltx_font_italic">“each datum belongs to either Category O or X.”</emph></span>
          The <emph class="ltx_text ltx_font_italic">content</emph>, <emph class="ltx_text ltx_font_italic">composition</emph>, and <emph class="ltx_text ltx_font_italic">verbosity</emph> of the description can affect a user’s comprehension of the data.
          Designers must consider <emph class="ltx_text ltx_font_italic">context &amp; customization</emph> when describing charts.</p>
      </div>
      <div id="S3.SS3.p2" class="ltx_para">
        <p class="ltx_p"><strong class="ltx_text ltx_font_bold">Content.</strong>
          Semantic <emph class="ltx_emph ltx_font_italic">content</emph> is the meaningful information conveyed not only through natural language utterances, but also through the visualization (a graphical language&nbsp;<cite class="ltx_cite ltx_citemacro_cite">[<span class="ltx_ref ltx_missing_citation ltx_ref_self">bertin_semiology_1983</span>]</cite>).
          Because graphics convey myriad different kinds of content, the challenge of natural language description is to convey information that is not only commensurate with what the chart expresses via graphical language, but also useful to its readers.
          Accessible chart description guidelines from WGBH&nbsp;<cite class="ltx_cite ltx_citemacro_cite">[<span class="ltx_ref ltx_missing_citation ltx_ref_self">gould_effective_2008</span>]</cite>, W3C&nbsp;<cite class="ltx_cite ltx_citemacro_cite">[<span class="ltx_ref ltx_missing_citation ltx_ref_self">w3c_wai_2019</span>]</cite>, and others&nbsp;<cite class="ltx_cite ltx_citemacro_cite">[<span class="ltx_ref ltx_missing_citation ltx_ref_self">jung_communicating_2021</span>]</cite> offer prescriptions for conveying specific content for blind readers (such as the chart’s title, axis encodings, and noteworthy trends).
          Lundgard and Satyanarayan expand the scope of these guidelines with a more general conceptual model of four levels of semantic content: <emph class="ltx_emph ltx_font_italic">chart construction properties</emph> (e.g., axes, encodings, marks, title); <emph class="ltx_emph ltx_font_italic">statistical concepts and relations</emph> (e.g., outliers, correlations, descriptive statistics); <emph class="ltx_emph ltx_font_italic">perceptual and cognitive phenomena</emph> (e.g., complex trends, patterns); and <emph class="ltx_emph ltx_font_italic">domain-specific insights</emph> (e.g., socio-political context relevant to the data)&nbsp;<cite class="ltx_cite ltx_citemacro_cite">[<span class="ltx_ref ltx_missing_citation ltx_ref_self">lundgard_accessible_2021</span>]</cite>.
        </p>
      </div>
      <div id="S3.SS3.p3" class="ltx_para">
        <p class="ltx_p">Decoupling a chart’s semantic content from its visual representation helps us better understand what data representations afford for different readers.
          For instance, Lundgard and Satyanarayan find that what blind readers report as most useful in a chart description is not a straightforward translation of the visual data representation.
          Specifically, simply listing the chart’s encodings is much less useful to blind readers than conveying summary statistics and overall trends in the data&nbsp;<cite class="ltx_cite ltx_citemacro_cite">[<span class="ltx_ref ltx_missing_citation ltx_ref_self">lundgard_accessible_2021</span>]</cite>.
          As <span class="ltx_ERROR undefined">\censor</span>Hajas noted, <span class="ltx_text" style="color:#000000;background-color:#E6FFF5;"><emph class="ltx_emph ltx_font_italic">“I want to see the global trend, which is why sighted people rely on visualization.”</emph></span> For instance, for a stock market chart the reader <span class="ltx_text" style="color:#000000;background-color:#E6FFF5;"><emph class="ltx_emph ltx_font_italic">“might see the overview from first to last data points, and then zoom into an outlier in the middle.”</emph></span>
          These findings suggest opportunities interleave different kinds of content at different levels of a hierarchical structure to yield richer, more useful screen reader navigation.
          For example, injecting summary statistics (say, the existence of outliers within a particular subcategory of the data) higher up in the chart’s tree structure (e.g., at the <span class="ltx_text ltx_font_typewriter">legend</span> encoding node) might afford “scent” for “information foraging”&nbsp;<cite class="ltx_cite ltx_citemacro_cite">[<span class="ltx_ref ltx_missing_citation ltx_ref_self">pirolli_information_1999</span>]</cite>, or further exploration down a particular branch (data subcategory) of the tree.
          Or, if navigating in a targeted fashion, the user might be afforded the option to directly navigate to outliers without traversing the tree.</p>
      </div>
      <div id="S3.SS3.p4" class="ltx_para">
        <p class="ltx_p"><strong class="ltx_text ltx_font_bold">Composition.</strong>
          The usefulness of a description depends not only on the content conveyed by its constituent sentences, but also on its <emph class="ltx_emph ltx_font_italic">composition</emph>: how those sentences are ordered in relation to each other.
          For example, during our co-design process, <span class="ltx_ERROR undefined">\censor</span>Hajas found that when navigating a chart’s tree structure, the screen reader output could quickly become redundant, affecting how quickly and efficiently he could pick out the meaningful information at each node.
          For instance, the utterance <span class="ltx_text" style="color:#000000;background-color:#FFFFCC;"><emph class="ltx_emph ltx_font_italic">“Category: O, Point 3 of 15, x = 5, y = 12”</emph></span> and the utterance <span class="ltx_text" style="color:#000000;background-color:#FFFFCC;"><emph class="ltx_emph ltx_font_italic">“x = 5, y = 12, Category: O, Point 3 of 15”</emph></span> afford significantly different experiences for a user who wishes to quickly scan through individual data points.
          In the first utterance, the reader immediately receives content that helps to situate them in a broader data context, namely data labeled as <span class="ltx_ERROR undefined">\say</span>Category: A at the <span class="ltx_text ltx_font_typewriter">legend</span> node.
          In the second utterance, the reader immediately receives datum-specific content that helps to rapidly explore the fine-grained details within that data context.
          Whether a reader prefers one compositional ordering to another will depend on the task they are attempting to accomplish.
          As <span class="ltx_ERROR undefined">\censor</span>Hajas noted <span class="ltx_text" style="color:#000000;background-color:#E6FFF5;"><emph class="ltx_emph ltx_font_italic">“I like the label at the beginning of the information, saying at which level of the tree I am at. It is important for knowing where I am. It is also great that this information is only spoken out when I change level, but not when I navigate laterally.”</emph></span>
          These compositional choices are highly consequential for readers’ experience, when they must repeatedly read nearly-identical utterances while navigating a structure.
        </p>
      </div>
      <div id="S3.SS3.p5" class="ltx_para">
        <p class="ltx_p"><strong class="ltx_text ltx_font_bold">Verbosity.</strong>
          Whereas composition refers to the ordering of content, <emph class="ltx_emph ltx_font_italic">verbosity</emph> refers to how much content the screen reader conveys.
          More content is not always better.
          As <span class="ltx_ERROR undefined">\censor</span>Hajas noted of Apple’s Data Comprehension feature&nbsp;<cite class="ltx_cite ltx_citemacro_cite">[<span class="ltx_ref ltx_missing_citation ltx_ref_self">davert_whats_2019</span>]</cite>: <span class="ltx_text" style="color:#000000;background-color:#E6FFF5;"><emph class="ltx_emph ltx_font_italic">“It can sometimes be too much information all at once, if it starts reading out all of the data. This is very difficult if you’re interested in some data points that are in the middle. It is very play-or-stop.”</emph></span>
          Depending on the screen reader software, a user may be afforded control over how much content is conveyed.
          For instance, JAWS offers high, medium, and low verbosity levels&nbsp;<cite class="ltx_cite ltx_citemacro_cite">[<span class="ltx_ref ltx_missing_citation ltx_ref_self">noauthor_jaws_2021</span>]</cite>.
          At higher verbosity the screen reader announces more structural, wayfinding content (e.g. the start and end of regions).
          For data tables, verbosity configurations can affect whether the table size is read as part of the description, and whether row and column labels are repeated for every cell.
          Descriptions of nodes in an encoding structure might analogously include information about the path from the root — for example, by reminding the user that they are reading Y-axis intervals.
          These repetitions can help users remember their location within a structure, but additional verbosity is less efficient for comprehending the data quickly.</p>
      </div>
      <div id="S3.SS3.p6" class="ltx_para">
        <p class="ltx_p"><strong class="ltx_text ltx_font_bold">Considerations: Context &amp; Customization.</strong>
          Apart from its constituent parts (content, composition, verbosity), a description’s usefulness also depends on the <emph class="ltx_emph ltx_font_italic">context</emph> in which it is read: namely, the reader’s task or intent, and familiarity with the data interface.
          The same description might be useful in some situations, but relatively useless in others.
          A reader’s information needs are fundamentally context-sensitive.
          For example, as <span class="ltx_ERROR undefined">\censor</span>Hajas noted, when reading a news article, it may be satisfactory to accept a journalist’s description of the data on good faith. But, when reviewing scientific research, <span class="ltx_text" style="color:#000000;background-color:#E6FFF5;"><emph class="ltx_emph ltx_font_italic">“I don’t necessarily want to just believe what is said in the text, I want to check and double-check the authors’ claims. Go down to the smallest numbers in the analysis. I want to be able to look at the confusion matrix and see if they made a mistake or not.”</emph></span>
          This targeted verification requires a description to afford users with precise look-up capabilities, in contrast to descriptions that may be generated when browsing or exploring the data.
        </p>
      </div>
      <div id="S3.SS3.p7" class="ltx_para">
        <p class="ltx_p">This context-sensitivity reveals an important aspect of usability: a user’s familiarity (or lack thereof) with the data interface.
          Wayfinding content (e.g., <span class="ltx_text" style="color:#000000;background-color:#FFFFCC;"><emph class="ltx_emph ltx_font_italic">“Legend. Category: O.”</emph></span>) can help a user remember their location in a structure, and may be useful while they assemble a mental map of the visualization.
          But, as they become accustomed to the interface and visualization, such descriptions may prove cumbersome.
          Because user needs depend on their task, preferences, and familiarity, interfaces might afford personalization and customization to facilitate context-sensitive description.
        </p>
      </div>
    </section>
  </section>
  <section id="S4" class="ltx_section">
    <h2 class="ltx_title ltx_title_section" id="H-S4">
      <span class="ltx_tag ltx_tag_section">4 </span>Example Gallery</h2>
    <figure id="S4.F2" class="ltx_figure"><img src="x2.png" id="S4.F2.g1" class="ltx_graphics ltx_centering" width="1081" height="308" alt="">
      <figcaption class="ltx_caption ltx_centering"><span class="ltx_tag ltx_tag_figure"><span class="ltx_text" style="font-size:90%;">Figure 2</span>: </span><span class="ltx_text" style="font-size:90%;">Example structural and navigational schemes generated as part of our co-design process, and applied to diverse chart types.</span></figcaption>
    </figure>
    <div id="S4.p1" class="ltx_para">
      <p class="ltx_p">Our co-design process yielded prototypes that demonstrate a breadth of ways to operationalize our design dimensions.
        Figure&nbsp;<a href="#S4.F2" title="Figure 2 ‣ 4 Example Gallery ‣ Rich Screen Reader Experiences for Accessible Data Visualization" class="ltx_ref"><span class="ltx_text ltx_ref_tag">2</span></a> excerpts some of our highest-fidelity prototypes, implemented on top of Vega-Lite&nbsp;<cite class="ltx_cite ltx_citemacro_cite">[<span class="ltx_ref ltx_missing_citation ltx_ref_self">satyanarayan_vega-lite_2017</span>]</cite>.
        As deeply nested structures and dynamic content are not well-supported by ARIA, we implemented our designs as in-memory data structures.
        Event listeners update the user’s position in the structure on keypress, and write text descriptions to an ARIA-Live region (an ARIA role typically used for temporary notifications).
        To establish common ground with sighted users, we also render the visualization graphically.
        The user’s position in the tree drives a Vega-Lite selection that highlights points when the screen reader user is attending to them.
      </p>
    </div>
    <div id="S4.p2" class="ltx_para">
      <p class="ltx_p">For every prototype, the <span class="ltx_text ltx_font_typewriter">up</span>, <span class="ltx_text ltx_font_typewriter">down</span>, <span class="ltx_text ltx_font_typewriter">left</span>, and <span class="ltx_text ltx_font_typewriter">right</span> arrow keys enable structural navigation (moving up or down a level, or stepping through siblings respectively).
        For example, within the facet level of Fig.&nbsp;<a href="#S4.F2" title="Figure 2 ‣ 4 Example Gallery ‣ Rich Screen Reader Experiences for Accessible Data Visualization" class="ltx_ref"><span class="ltx_text ltx_ref_tag">2</span></a>(a), the user can press <span class="ltx_text ltx_font_typewriter">left</span> or <span class="ltx_text ltx_font_typewriter">right</span> keys to move between the six subplots of the multiview chart.
        On charts that contain a node representing the x-y grid, users can also use the <span class="ltx_text ltx_font_typewriter">WASD</span> keys to spatially navigate the grid and data points within that branch (mimicking an interaction found in video games).</p>
    </div>
    <div id="S4.p3" class="ltx_para">
      <p class="ltx_p">These prototypes highlight different compositions of structures and navigation schemes.
        Fig.&nbsp;<a href="#S4.F2" title="Figure 2 ‣ 4 Example Gallery ‣ Rich Screen Reader Experiences for Accessible Data Visualization" class="ltx_ref"><span class="ltx_text ltx_ref_tag">2</span></a>(a) includes <span class="ltx_text ltx_font_typewriter">shift+left</span> and <span class="ltx_text ltx_font_typewriter">shift+right</span> for lateral navigation across facets: pressing these keys at any node within a facet branch will navigate to the same location under an adjacent branch (subplot).
        With the chloropleth (Fig.&nbsp;<a href="#S4.F2" title="Figure 2 ‣ 4 Example Gallery ‣ Rich Screen Reader Experiences for Accessible Data Visualization" class="ltx_ref"><span class="ltx_text ltx_ref_tag">2</span></a>(b)), we group data in the encoding structure by U.S. state; users can then drill down into counties across either this branch or the legend one.
        Fig.&nbsp;<a href="#S4.F2" title="Figure 2 ‣ 4 Example Gallery ‣ Rich Screen Reader Experiences for Accessible Data Visualization" class="ltx_ref"><span class="ltx_text ltx_ref_tag">2</span></a>(c) offers two different paths for drilling down: month first, or weather first.
        Fig.&nbsp;<a href="#S4.F2" title="Figure 2 ‣ 4 Example Gallery ‣ Rich Screen Reader Experiences for Accessible Data Visualization" class="ltx_ref"><span class="ltx_text ltx_ref_tag">2</span></a>(d) structures the tree by annotations rather than encoding: users can descend into the time intervals designated by the orange and blue rectangles, and view points within those intervals.
        Finally, Fig.&nbsp;<a href="#S4.F2" title="Figure 2 ‣ 4 Example Gallery ‣ Rich Screen Reader Experiences for Accessible Data Visualization" class="ltx_ref"><span class="ltx_text ltx_ref_tag">2</span></a>(e) organizes its tree in terms of data, offering a binary search structure through the years.</p>
    </div>
  </section>
  <section id="S5" class="ltx_section">
    <h2 class="ltx_title ltx_title_section" id="H-S5">
      <span class="ltx_tag ltx_tag_section">5 </span>Evaluation</h2>
    <div id="S5.p1" class="ltx_para">
      <p class="ltx_p">To evaluate our contribution, we conducted 90-minute Zoom studies with 13 blind and visually impaired participants.
        Participants were asked to explore three prototype accessible screen reader experiences, shown one after another each with a different dataset.
        The goal of our evaluation was not
        to determine which particular combination of design elements was “best,” but rather to be exploratory — to compare the relative strengths and advantages of instantiations of our design dimensions, and understand how they afford different modes of accessible data exploration.
      </p>
    </div>
    <section id="S5.SS1" class="ltx_subsection">
      <h3 class="ltx_title ltx_title_subsection" id="H-S5.SS1">
        <span class="ltx_tag ltx_tag_subsection">5.1 </span>Evaluation Setup &amp; Design</h3>
      <div id="S5.SS1.p1" class="ltx_para">
        <p class="ltx_p">Following Frøkjær and Hornbæk’s Cooperative Usability Testing (CUT) method&nbsp;<cite class="ltx_cite ltx_citemacro_cite">[<span class="ltx_ref ltx_missing_citation ltx_ref_self">frokjaer_cooperative_2005</span>]</cite>, <span class="ltx_ERROR undefined">\censor</span>Zong and <span class="ltx_ERROR undefined">\censor</span>Lee conducted each session by alternating between the role of guide (i.e., talking to the user and explaining the prototype) and logger (i.e., keeping track of potential usability problems, interpreting the data to prepare for becoming the guide).
          We began each session with a semi-structured interview to understand participants’ current experiences with data and the methods they use to make inaccessible forms of data representation usable (script included in supplementary material).
          The rest of the session focused on each of the three prototypes in turn, with each condition split into two phases: interaction and interpretation.
          In the interaction phase, <span class="ltx_ERROR undefined">\censor</span>Zong or Lee guided participants through the prototypes and asked participants to use them and comment on their process, in the style of Hutchinson et al.’s technology probes <cite class="ltx_cite ltx_citemacro_cite">[<span class="ltx_ref ltx_missing_citation ltx_ref_self">hutchinson_technology_2003</span>]</cite>.
          Then, the authors switched roles and began a cooperative interpretation phase, where the authors and participants engaged in a constructive dialogue to jointly interpret the usability problems and brainstorm possible alternatives to the current prototype.
          In this method, participants influence data interpretation, allowing for more rapid analysis than traditional think-aloud studies as some analysis is built into each evaluation session with instant feedback or explanation from participants&nbsp;<cite class="ltx_cite ltx_citemacro_cite">[<span class="ltx_ref ltx_missing_citation ltx_ref_self">frokjaer_cooperative_2005</span>]</cite>.
        </p>
      </div>
      <div id="S5.SS1.p2" class="ltx_para">
        <p class="ltx_p"><strong class="ltx_text ltx_font_bold">Prototypes.</strong>
          The in-depth nature of our cooperative interpretation sessions required us to balance the total number of prototypes evaluated (so that participants would have time to thoroughly learn and interact with each one) with a time duration appropriate for a Zoom session (limited to 90 minutes to avoid exhausting participants).
          Accordingly, we selected the following three prototypes, each representing a different aspect of our design dimensions:</p>
      </div>
      <div id="S5.SS1.p3" class="ltx_para">
        <ul id="S5.I1" class="ltx_itemize">
          <li id="S5.I1.i1" class="ltx_item" style="list-style-type:none;">
            <span class="ltx_tag ltx_tag_item">•</span>
            <div id="S5.I1.i1.p1" class="ltx_para">
              <p class="ltx_p"><span class="ltx_text ltx_font_smallcaps">table</span>: An accessible HTML data table with all rows and three columns from the classic Cars dataset, in order to compare our prototypes with existing accessibility best practice.
              </p>
            </div>
          </li>
          <li id="S5.I1.i2" class="ltx_item" style="list-style-type:none;">
            <span class="ltx_tag ltx_tag_item">•</span>
            <div id="S5.I1.i2.p1" class="ltx_para">
              <p class="ltx_p"><span class="ltx_text ltx_font_smallcaps">multi-view</span>: Becker’s barley yield trellis display&nbsp;<cite class="ltx_cite ltx_citemacro_cite">[<span class="ltx_ref ltx_missing_citation ltx_ref_self">becker_visual_1996</span>]</cite> as shown in Fig.&nbsp;<a href="#S4.F2" title="Figure 2 ‣ 4 Example Gallery ‣ Rich Screen Reader Experiences for Accessible Data Visualization" class="ltx_ref"><span class="ltx_text ltx_ref_tag">2</span></a>a. This prototype features local and lateral structural navigation via the arrow keys and with the shift modifier respectively, as well as spatial navigation via <span class="ltx_text ltx_font_typewriter">WASD</span>.
              </p>
            </div>
          </li>
          <li id="S5.I1.i3" class="ltx_item" style="list-style-type:none;">
            <span class="ltx_tag ltx_tag_item">•</span>
            <div id="S5.I1.i3.p1" class="ltx_para">
              <p class="ltx_p"><span class="ltx_text ltx_font_smallcaps">target</span>: A single-view scatterplot, illustrated in Fig.&nbsp;<a href="#S3.F1" title="Figure 1 ‣ 3.1 Structure ‣ 3 Design Dimensions for Rich Screen Reader Experiences ‣ Rich Screen Reader Experiences for Accessible Data Visualization" class="ltx_ref"><span class="ltx_text ltx_ref_tag">1</span></a>, depicting the Palmer Penguins dataset&nbsp;<cite class="ltx_cite ltx_citemacro_cite">[<span class="ltx_ref ltx_missing_citation ltx_ref_self">horst_palmerpenguins_2020</span>]</cite>. In addition to structural and spatial navigation, targeted navigation is available via three dropdown menus corresponding to the structural levels.
              </p>
            </div>
          </li>
        </ul>
      </div>
      <div id="S5.SS1.p4" class="ltx_para">
        <p class="ltx_p"><span class="ltx_text ltx_font_smallcaps">table</span> is our control condition, as it follows existing best practice for making data accessible to screen readers.
          <span class="ltx_text ltx_font_smallcaps">multi-view</span> enables us to study how users move between levels of detail, and whether they could navigate and compare small multiple charts.
          Finally, <span class="ltx_text ltx_font_smallcaps">target</span> allows us to compare how and when our participants use the three different styles of navigation (structural, spatial, and targeted).
          We presented the prototypes in this sequence to all participants to introduce new features incrementally.
        </p>
      </div>
      <div id="S5.SS1.p5" class="ltx_para">
        <p class="ltx_p"><strong class="ltx_text ltx_font_bold">Participants.</strong>
          We recruited 13 blind and visually impaired participants through our collaborators in the blind community and through a public call on Twitter.
          Each participant received $50 for a 90-minute Zoom session.
          We provide aggregate participant data following ethnographic practice to protect privacy and not reduce participants to their demographics&nbsp;<cite class="ltx_cite ltx_citemacro_cite">[<span class="ltx_ref ltx_missing_citation ltx_ref_self">saunders_anonymising_2015</span>]</cite>.
          Half of our participants were totally blind (n=7), while others were almost totally blind with some light perception (n=4) or low vision (n=2).
          Half of them have been blind since birth (n=7).
          Participants were split evenly between Windows/Chrome (n=7) and Mac/Safari (n=6).
          Windows users were also split evenly between the two major screen readers (JAWS, n=3; NVDA, n=4), while all Mac participants used Apple VoiceOver.
          These figures are consistent with recent surveys conducted by WebAIM which indicate that JAWS, NVDA, and VoiceOver are the three most commonly used screen readers&nbsp;<cite class="ltx_cite ltx_citemacro_cite">[<span class="ltx_ref ltx_missing_citation ltx_ref_self">noauthor_screen_2021</span>]</cite>. Demographically, 70% of our participants use he/him pronouns (n=9) and the rest use she/her pronouns (n=4).
          One participant was based in the UK while the rest were spread across eight US states.
          Participants self-reported their ethnicities (Caucasian/white, Asian, and Black/African, Hispanic/Latinx), represented a diverse range of ages (20–50+) and had a variety of educational backgrounds (high school diploma through to undergraduate, graduate, and trade school degrees).
          Nine participants reported themselves as slightly or moderately familiar with statistical concepts and data visualization methods, 2 as expertly familiar, and one as not at all familiar.
          Five participants described data analysis and visualization tools as an important component in their professional workflows, and 8 interacted with data or visualizations more than 1–2 times/week.</p>
      </div>
    </section>
    <section id="S5.SS2" class="ltx_subsection">
      <h3 class="ltx_title ltx_title_subsection" id="H-S5.SS2">
        <span class="ltx_tag ltx_tag_subsection">5.2 </span>Quantitative Results</h3>
      <figure id="S5.SS2.tab1" class="ltx_table">
        <figcaption class="ltx_caption"><span class="ltx_tag ltx_tag_table"><span class="ltx_text" style="font-size:90%;">Table 1</span>: </span><span class="ltx_text" style="font-size:90%;">
            Rating scores for each prototype (Table, Multi-view, Targeted) on a five point Likert scale where 1 = Very Difficult (Very Unenjoyable) and 5 = Very Easy (Very Enjoyable).
            Median scores are shown in boldface, averages in brackets, standard deviations in parentheses.
          </span></figcaption>
        <p class="ltx_p"><span class="ltx_text" style="font-size:90%;">To supplement the cooperative interpretation sessions, participants rated each prototype using a series of Likert questions.
            We designed a questionnaire with six prompts measuring a subset of Brehmer and Munzner’s multi-level typology of abstract visualization tasks&nbsp;<cite class="ltx_cite ltx_citemacro_cite">[<span class="ltx_ref ltx_missing_citation ltx_ref_self">brehmer_multi-level_2013</span>]</cite>.
            This framework, however, required some adaptation for non-visual modes of search.
            In particular, searching with a screen reader requires a sequential approach to data that is at odds with the “at-a-glance” approach sighted readers take to browsing and exploring data.
            As our prototypes focus on navigation through charts, we collapsed the <emph class="ltx_emph ltx_font_italic">location</emph> dimension of Brehmer and Munzner’s search decomposition resulting in two prompts that jointly measure <span class="ltx_text ltx_font_typewriter">lookup-locate</span> and <span class="ltx_text ltx_font_typewriter">browse-explore</span>.
            We formulated additional questions to measure Brehmer and Munzner’s <span class="ltx_text ltx_font_typewriter">discover</span> and <span class="ltx_text ltx_font_typewriter">enjoy</span> tasks as well as more traditional aspects of technology acceptance including <emph class="ltx_emph ltx_font_italic">ease-of-use</emph> and <emph class="ltx_emph ltx_font_italic">perceived usefulness</emph>&nbsp;<cite class="ltx_cite ltx_citemacro_cite">[<span class="ltx_ref ltx_missing_citation ltx_ref_self">karahanna_psychological_1999</span>]</cite>.
            Participants responded on a five point scale where 1 = Very Difficult/Unenjoyable and 5 = Very Easy/Enjoyable.</span></p>
        <p class="ltx_p"><span class="ltx_text" style="font-size:90%;">Table&nbsp;<span class="ltx_ref ltx_missing_label ltx_ref_self">LABEL:table:likert-ratings</span> displays the questionnaire prompts, their corresponding tasks, and statistics summarizing the participants’ ratings.
            A Friedman test
            found a significant rating difference for the ease-of-use of the prototypes <math id="S5.SS2.m1" class="ltx_Math" alttext="\chi^{2}(2,N=13)=15.05,p<0.01" display="inline"><mrow><msup><mi>χ</mi><mn>2</mn></msup><mrow><mo stretchy="false">(</mo><mn>2</mn><mo>,</mo><mi>N</mi><mo>=</mo><mn>13</mn><mo stretchy="false">)</mo></mrow><mo>=</mo><mn>15.05</mn><mo>,</mo><mi>p</mi><mo>&lt;</mo><mn>0.01</mn></mrow></math>, with a large effect size (Kendall’s <math id="S5.SS2.m2" class="ltx_Math" alttext="W=0.58" display="inline"><mrow><mi>W</mi><mo>=</mo><mn>0.58</mn></mrow></math>).
            Follow-up Nemenyi tests
            revealed that <span class="ltx_text ltx_font_smallcaps">multi-view</span> was more difficult to use than <span class="ltx_text ltx_font_smallcaps">table</span> with statistical significance <math id="S5.SS2.m3" class="ltx_Math" alttext="(p<0.01)" display="inline"><mrow><mo stretchy="false">(</mo><mrow><mi>p</mi><mo>&lt;</mo><mn>0.01</mn></mrow><mo stretchy="false">)</mo></mrow></math>, but <span class="ltx_text ltx_font_smallcaps">target</span> was not.
            Additional tests for the other prompts found neither statistically significant differences, nor large effect sizes, between the prototypes.
            However, median scores (which are more robust to outliers than means&nbsp;<cite class="ltx_cite ltx_citemacro_cite">[<span class="ltx_ref ltx_missing_citation ltx_ref_self">morris_rich_2018</span>]</cite>) suggest that participants generally <span class="ltx_text ltx_font_typewriter">enjoy</span> interacting with <span class="ltx_text ltx_font_smallcaps">multi-view</span> and <span class="ltx_text ltx_font_smallcaps">target</span> more, and found them easier to <span class="ltx_text ltx_font_typewriter">lookup</span> or <span class="ltx_text ltx_font_typewriter">locate</span> data with.
            Moreover, <span class="ltx_text ltx_font_smallcaps">target</span> had the highest median score for affording <span class="ltx_text ltx_font_typewriter">browse</span> or <span class="ltx_text ltx_font_typewriter">explore</span> capabilities.
            Conversely <span class="ltx_text ltx_font_smallcaps">table</span> was easiest to learn to use, and generally made it easy to <span class="ltx_text ltx_font_typewriter">discover</span>, or ask and answer questions about the data.
            Notably, in response to the question <span class="ltx_ERROR undefined">\say</span><emph class="ltx_emph ltx_font_italic">How useful would it be to have access to this interaction style
              for engaging with data?</emph> participants on average ranked all prototypes as more-than-useful <math id="S5.SS2.m4" class="ltx_Math" alttext="(med=4,\mu\geq 4)" display="inline"><mrow><mo stretchy="false">(</mo><mrow><mrow><mrow><mi>m</mi><mo>⁢</mo><mi>e</mi><mo>⁢</mo><mi>d</mi></mrow><mo>=</mo><mn>4</mn></mrow><mo>,</mo><mrow><mi>μ</mi><mo>≥</mo><mn>4</mn></mrow></mrow><mo stretchy="false">)</mo></mrow></math>.
            These statistics provide only a partial picture of participants’ experiences with the prototypes&nbsp;<cite class="ltx_cite ltx_citemacro_cite">[<span class="ltx_ref ltx_missing_citation ltx_ref_self">bagozzi_legacy_2007</span>]</cite>.
            Thus, we elucidate and contextualize reasons behind their scores through qualitative analysis.</span></p>
        <section id="S5.SS3" class="ltx_subsection">
          <h3 class="ltx_title ltx_title_subsection" style="font-size:90%;" id="H-S5.SS3">
            <span class="ltx_tag ltx_tag_subsection">5.3 </span>Qualitative Results</h3>
          <div id="S5.SS3.p1" class="ltx_para">
            <p class="ltx_p"><span class="ltx_text" style="font-size:90%;">After the interviews, we qualitatively coded the notes taken by the logger with a grounded theory approach </span><cite class="ltx_cite ltx_citemacro_cite"><span class="ltx_text" style="font-size:90%;">[</span><span class="ltx_ref ltx_missing_citation ltx_ref_self">charmaz_constructing_2006</span><span class="ltx_text" style="font-size:90%;">]</span></cite><span class="ltx_text" style="font-size:90%;">. We performed open coding in parallel with the interviews (i.e., coding Monday’s interviews after finishing Tuesday’s interviews). We then synthesized the codes into memos, from which we derived these themes.
              </span></p>
          </div>
          <div id="S5.SS3.p2" class="ltx_para">
            <p class="ltx_p"><strong class="ltx_text ltx_font_bold" style="font-size:90%;">Tables are familiar, tedious, but necessary.</strong><span class="ltx_text" style="font-size:90%;"> Every participant noted that tables were their primary way of accessing data and visualizations. While tables are an important accessible option, participants overwhelmingly reported the same problems: they are ill-suited for processing large amounts of data and impose high cognitive load as users must remember previous lines of the table in order to contextualize subsequent values.
                As P2 reported, </span><span class="ltx_text" style="font-size:90%;color:#000000;background-color:#EDEBFF;"><emph class="ltx_emph ltx_font_italic">“if I’m trying to get a general sense of the table, I’ll just scroll through and see what values there are. But there’s 393 rows, so I’ll never scroll through all of it…I can’t really get a snapshot.”</emph></span><span class="ltx_text" style="font-size:90%;">
                P11 said that </span><span class="ltx_text" style="font-size:90%;color:#000000;background-color:#EDEBFF;"><emph class="ltx_emph ltx_font_italic">“Finding relationships can be tricky if you’re in a table, because you’ve got to either have a really good memory or just get really lucky. […] If I didn’t know what I was looking for, forget it.”</emph></span><span class="ltx_text" style="font-size:90%;">
                At most, participants tabbed through 20–30 rows during our sessions, but did so only because of the questions we posed (e.g., “is there a relationship between horsepower and mileage?”) and noted that if they encountered this table outside of the study, they would tab past a few rows to check for summary statistics and then move on.</span></p>
          </div>
          <div id="S5.SS3.p3" class="ltx_para">
            <p class="ltx_p"><span class="ltx_text" style="font-size:90%;">While it is not enjoyable to explore or build a mental model of data with static tables, participants still emphasized their necessity because of the format’s familiarity: </span><span class="ltx_text" style="font-size:90%;color:#000000;background-color:#EDEBFF;"><emph class="ltx_emph ltx_font_italic">“in terms of accessibility, tables are infinitely more useful because there is a standard way of navigating them in whatever your preferred screen reader is. With different representations, a blind person may not be trained to interpret it”</emph></span><span class="ltx_text" style="font-size:90%;"> (P2).
                This builds on prior literature </span><cite class="ltx_cite ltx_citemacro_cite"><span class="ltx_text" style="font-size:90%;">[</span><span class="ltx_ref ltx_missing_citation ltx_ref_self">sharif_understanding_2021</span><span class="ltx_text" style="font-size:90%;">]</span></cite><span class="ltx_text" style="font-size:90%;"> and echoes testimony from participants who had some difficulty with the new prototypes; they reported that they lacked expertise and therefore found it difficult to work with non-tabular data (P8, 10). In other words, to maximize accessibility, it is crucial to include a table view of the data </span><emph class="ltx_text ltx_font_italic" style="font-size:90%;">in addition to</emph><span class="ltx_text" style="font-size:90%;"> other forms of novel interaction.</span></p>
          </div>
          <div id="S5.SS3.p4" class="ltx_para">
            <p class="ltx_p"><strong class="ltx_text ltx_font_bold" style="font-size:90%;">Prior exposure to data analysis and representations increases the efficacy of spatial representations.</strong><span class="ltx_text" style="font-size:90%;">
                Participants who had experience conducting data analysis or reading tactile graphs/maps were able to easily develop a spatial understanding of how each prototype worked.
                Five participants (P2–4, 11, 13) made direct connections between the </span><span class="ltx_text ltx_font_smallcaps" style="font-size:90%;">multi-view</span><span class="ltx_text" style="font-size:90%;"> and </span><span class="ltx_text ltx_font_smallcaps" style="font-size:90%;">target</span><span class="ltx_text" style="font-size:90%;"> prototypes, and the tactile graphs they encountered in school.
                Three participants (P2, 11, 12) found their software engineering experience made it easier to understand and navigate the prototypes’ hierarchical structure.
                Previous literature on tactile mapping has also shown how developing tactile graphical literacy is crucial for building spatial knowledge, but they emphasize that it is not a sufficient for being able to conduct and understand data analysis. </span><cite class="ltx_cite ltx_citemacro_cite"><span class="ltx_text" style="font-size:90%;">[</span><span class="ltx_ref ltx_missing_citation ltx_ref_self">hasty_guidelines_2011</span>, <span class="ltx_ref ltx_missing_citation ltx_ref_self">godfrey_advice_2015</span><span class="ltx_text" style="font-size:90%;">]</span></cite><span class="ltx_text" style="font-size:90%;">
                Since our participants already had an existing spatial framework, it became easier to explain how a prototype might work using their prior experience as a benchmark, which has been corroborated by similar studies in tactile cartography. </span><cite class="ltx_cite ltx_citemacro_cite"><span class="ltx_text" style="font-size:90%;">[</span><span class="ltx_ref ltx_missing_citation ltx_ref_self">wiedel_tactual_1969</span>, <span class="ltx_ref ltx_missing_citation ltx_ref_self">aldrich_tactile_2001</span>, <span class="ltx_ref ltx_missing_citation ltx_ref_self">sheppard_tactile_2001</span><span class="ltx_text" style="font-size:90%;">]</span></cite><span class="ltx_text" style="font-size:90%;">
                Importantly, our participants were able to find specific origin points that they could return to in order to navigate the different branches of the tree, which would be further aided with help menus and mini-tutorials to understand the keyboard shortcuts (P2).
                Being able to shift between origin points is especially important for switching between graphs or between variables.
                By contrast, participants who had more difficulty with the prototypes (P8, 10) pointed to their lack of experience working with non-tabular data. P10 reported that being able to mentally visualize data points within a grid was a specific challenge.
              </span><span class="ltx_text" style="font-size:90%;color:#000000;background-color:#EDEBFF;"><emph class="ltx_emph ltx_font_italic">“I suspect that this might be understandable to someone who’s done this before,”</emph></span><span class="ltx_text" style="font-size:90%;"> he said, </span><span class="ltx_text" style="font-size:90%;color:#000000;background-color:#EDEBFF;"><emph class="ltx_emph ltx_font_italic">“I don’t do well with these charts unless they’re converted back into tables.”</emph></span><span class="ltx_text" style="font-size:90%;"></span></p>
          </div>
          <div id="S5.SS3.p5" class="ltx_para">
            <p class="ltx_p"><emph class="ltx_text ltx_font_bold ltx_font_italic" style="font-size:90%;">Structure<span class="ltx_text ltx_font_upright">: Hierarchical representations make it possible to effectively convey insights with minimal cognitive load.</span></emph><span class="ltx_text" style="font-size:90%;">
              </span><span class="ltx_text" style="font-size:90%;">While static tables are the most common accessible option to interactive visualizations, eight of our participants (P2–5, 7, 10, 11, 13) expressed a desire to filter and sort the data so that they could begin to explore possible trends without wading line by line.
                Sorting and filtering a table is one way to look for trends but, to get a summary view of the data quickly, a system must provide snapshots in smaller intervals so that users can easily construct a larger picture or choose specific slices of the data to explore further (i.e., “details on demand”). </span><cite class="ltx_cite ltx_citemacro_cite"><span class="ltx_text" style="font-size:90%;">[</span><span class="ltx_ref ltx_missing_citation ltx_ref_self">shneiderman_eyes_2003</span>, <span class="ltx_ref ltx_missing_citation ltx_ref_self">kim_accessible_2021</span><span class="ltx_text" style="font-size:90%;">]</span></cite><span class="ltx_text" style="font-size:90%;">
                With </span><span class="ltx_text ltx_font_smallcaps" style="font-size:90%;">multi-view</span><span class="ltx_text" style="font-size:90%;"> and </span><span class="ltx_text ltx_font_smallcaps" style="font-size:90%;">target</span><span class="ltx_text" style="font-size:90%;"> P4 said, </span><span class="ltx_text" style="font-size:90%;color:#000000;background-color:#EDEBFF;"><emph class="ltx_emph ltx_font_italic">“I always want more layers and details, but some charts had too much…This was a happy medium between having the information I wanted and presenting it in a way that I can keep up with.”</emph></span><span class="ltx_text" style="font-size:90%;"> P5 also noted that he liked </span><span class="ltx_text" style="font-size:90%;color:#000000;background-color:#EDEBFF;"><emph class="ltx_emph ltx_font_italic">“having the ability to scroll through at a higher level and then drill down deeper if that’s of interest.”</emph></span><span class="ltx_text" style="font-size:90%;"> By giving users a way to quickly skip through the data across specific axes, they are able to rapidly generate a broader mental image of each graph and drill down further to collect more details. </span><span class="ltx_text" style="font-size:90%;color:#000000;background-color:#EDEBFF;"><emph class="ltx_emph ltx_font_italic">“When I was working with the table, I [started building] a table in my head,”</emph></span><span class="ltx_text" style="font-size:90%;"> P2 shared. </span><span class="ltx_text" style="font-size:90%;color:#000000;background-color:#EDEBFF;"><emph class="ltx_emph ltx_font_italic">“I had a rough representation of it as a scatter plot. But here, I know how to drill down and up between different layers of data grids, so that I can get the overall picture…
                  [It gives me] different ways of thinking.”</emph></span><span class="ltx_text" style="font-size:90%;">
              </span><span class="ltx_text" style="font-size:90%;">Being able to control the parts of the data that were most important to them was also an issue of trust, as it also provided a way for users to reach conclusions for themselves rather than rely on the interpretation of others: </span><span class="ltx_text" style="font-size:90%;color:#000000;background-color:#EDEBFF;"><emph class="ltx_emph ltx_font_italic">“It’s hard to mix…doing your own analysis and be given a text description that you have to just trust”</emph></span><span class="ltx_text" style="font-size:90%;"> (P12).
                In their own workflows, these participants reported downloading static tables to further examine and manipulate with Excel, which they would use to create summary statistics or intervals to move more quickly through the data.
              </span></p>
          </div>
          <div id="S5.SS3.p6" class="ltx_para">
            <p class="ltx_p"><emph class="ltx_text ltx_font_bold ltx_font_italic" style="font-size:90%;">Navigation<span class="ltx_text ltx_font_upright">: Reading a visualization with a screen reader entails constant hypothesis testing and pattern-making.</span></emph><span class="ltx_text" style="font-size:90%;">
              </span><span class="ltx_text" style="font-size:90%;">Since screen reader users parse data iteratively, nine of our participants (P1–5, 7, 8, 11, 13) described reading a visualization as a process of slowly building up a mental model and constantly testing it to see where the patterns may no longer hold.
              </span><span class="ltx_text" style="font-size:90%;color:#000000;background-color:#EDEBFF;"><emph class="ltx_emph ltx_font_italic">“I’m going row by row, not memorizing exact numbers but building a pattern in my head, and looking at the other rows to test my theory,”</emph></span><span class="ltx_text" style="font-size:90%;"> reported P3.
                In other words, our participants
              </span><span class="ltx_text" style="font-size:90%;">engaged in a continuous state of updating and validating </span><cite class="ltx_cite ltx_citemacro_cite"><span class="ltx_text" style="font-size:90%;">[</span><span class="ltx_ref ltx_missing_citation ltx_ref_self">munzner_nested_2009</span><span class="ltx_text" style="font-size:90%;">]</span></cite><span class="ltx_text" style="font-size:90%;"> their mental images as new data challenged the existing patterns they have pieced together.
              </span><span class="ltx_text ltx_font_smallcaps" style="font-size:90%;">multi-view</span><span class="ltx_text" style="font-size:90%;"> and </span><span class="ltx_text ltx_font_smallcaps" style="font-size:90%;">target</span><span class="ltx_text" style="font-size:90%;"> accelerated this process, as participants were able to more rapidly identify specific components that they wanted to test.
                For example, P2 intentionally moved quickly across each level of the structure hoping to find its “edges,” or the minimum and maximum limits of each axis and grid.
              </span><span class="ltx_text" style="font-size:90%;color:#000000;background-color:#EDEBFF;"><emph class="ltx_emph ltx_font_italic">“Visually, it might look like I’m doing a lot of jumping around,”</emph></span><span class="ltx_text" style="font-size:90%;"> he said, </span><span class="ltx_text" style="font-size:90%;color:#000000;background-color:#EDEBFF;"><emph class="ltx_emph ltx_font_italic">“[but it’s] because I’m trying to build the picture in a way that makes sense for me.”</emph></span><span class="ltx_text" style="font-size:90%;">
                Similarly, P5 started building his mental model of the visualization by drilling up and down the grid to create a spatial image of the data:
              </span><span class="ltx_text" style="font-size:90%;color:#000000;background-color:#EDEBFF;"><emph class="ltx_emph ltx_font_italic">“I’m thinking more in spatial terms just because [this] is a new method of navigating to me. […] I’m moving through the grid…I’m thinking of drilling down into that square to get more information.”</emph></span><span class="ltx_text" style="font-size:90%;"></span></p>
          </div>
          <div id="S5.SS3.p7" class="ltx_para">
            <p class="ltx_p"><span class="ltx_text ltx_font_smallcaps" style="font-size:90%;">target</span><span class="ltx_text" style="font-size:90%;"> made it especially easy for participants to test their hypotheses by giving them direct access to components that might break their hypotheses.
                P5 reported that it allowed him to </span><span class="ltx_text" style="font-size:90%;color:#000000;background-color:#EDEBFF;"><emph class="ltx_emph ltx_font_italic">“navigate to areas…that I’m interested in, skipping over stuff that’s not of interest,”</emph></span><span class="ltx_text" style="font-size:90%;"> and P4 likened it to </span><span class="ltx_text" style="font-size:90%;color:#000000;background-color:#EDEBFF;"><emph class="ltx_emph ltx_font_italic">“[being] able to go directly to what you want in a grocery inventory rather than going through each item one by one.”</emph></span><span class="ltx_text" style="font-size:90%;">
              </span><span class="ltx_text" style="font-size:90%;">The ability to use structural, spatial, and target navigation in both </span><span class="ltx_text ltx_font_smallcaps" style="font-size:90%;">multi-view</span><span class="ltx_text" style="font-size:90%;"> and </span><span class="ltx_text ltx_font_smallcaps" style="font-size:90%;">target</span><span class="ltx_text" style="font-size:90%;"> respectively facilitated the hypothesis-testing and pattern-making behaviors that our participants were accustomed to with static tables, and gave them an additional mental model for working with the data.
                As P1 noted, these prototypes gave her a richer understanding of the data by helping her piece together </span><span class="ltx_text" style="font-size:90%;color:#000000;background-color:#EDEBFF;"><emph class="ltx_emph ltx_font_italic">“both the picture and the mathematical pattern,”</emph></span><span class="ltx_text" style="font-size:90%;"> whereas </span><span class="ltx_text ltx_font_smallcaps" style="font-size:90%;">table</span><span class="ltx_text" style="font-size:90%;"> afforded only the latter.</span></p>
          </div>
          <div id="S5.SS3.p8" class="ltx_para">
            <p class="ltx_p"><emph class="ltx_text ltx_font_bold ltx_font_italic" style="font-size:90%;">Description<span class="ltx_text ltx_font_upright">: Cursors and roadmaps are important for understanding where you are.</span></emph><span class="ltx_text" style="font-size:90%;">
              </span><span class="ltx_text" style="font-size:90%;">Being able to capture both a high-level overview of the information while preserving the ability to drill down into the data is a crucial component to accessing interactive visualizations&nbsp;</span><cite class="ltx_cite ltx_citemacro_cite"><span class="ltx_text" style="font-size:90%;">[</span><span class="ltx_ref ltx_missing_citation ltx_ref_self">sharif_understanding_2021</span><span class="ltx_text" style="font-size:90%;">]</span></cite><span class="ltx_text" style="font-size:90%;">.
                To navigate between these two levels, however, our participants emphasized the importance of markers to help them understand where they could move.
              </span><span class="ltx_text ltx_font_smallcaps" style="font-size:90%;">target</span><span class="ltx_text" style="font-size:90%;"> addressed this with dropdown menus that allowed participants to navigate to any part of the visualization, explore, and then return to where they had started.
                In the words of P4, </span><span class="ltx_text" style="font-size:90%;color:#000000;background-color:#EDEBFF;"><emph class="ltx_emph ltx_font_italic">“[This] mode is freedom for the user. Being able to jump around and move in real time as you would with your hand gives you a new way of exploring the information.”</emph></span><span class="ltx_text" style="font-size:90%;">
              </span><span class="ltx_text ltx_font_smallcaps" style="font-size:90%;">multi-view</span><span class="ltx_text" style="font-size:90%;"> approached this issue by allowing participants to move throughout the grid.
              </span><span class="ltx_text" style="font-size:90%;color:#000000;background-color:#EDEBFF;"><emph class="ltx_emph ltx_font_italic">“With the table, I was trying to hold the numbers in my head and I wasn’t trying to visualize it or anything,”</emph></span><span class="ltx_text" style="font-size:90%;"> said P3. </span><span class="ltx_text" style="font-size:90%;color:#000000;background-color:#EDEBFF;"><emph class="ltx_emph ltx_font_italic">“With [<span class="ltx_text ltx_font_smallcaps">Multi-View</span>], I can sort of think about it more like a visualization since I can move up and down, left and right. Even though I can use the arrows in the table, it just doesn’t feel the same. I’m still feeling around and seeing what I can find.”</emph></span><span class="ltx_text" style="font-size:90%;">
                Without these navigation tools, P7 noted that </span><span class="ltx_text" style="font-size:90%;color:#000000;background-color:#EDEBFF;"><emph class="ltx_emph ltx_font_italic">“It’s too easy to get lost …I don’t know how to backtrack.”</emph></span><span class="ltx_text" style="font-size:90%;">
                To orient herself, P13 would first test to see if she was at the corner cells in the visualizations (e.g., </span><span class="ltx_text" style="font-size:90%;color:#000000;background-color:#EDEBFF;"><emph class="ltx_emph ltx_font_italic">“Am I in the upper left or the bottom right cell here?”</emph></span><span class="ltx_text" style="font-size:90%;">) so that she could contextualize her position within the visualization and return to a point of origin.
              </span><span class="ltx_text" style="font-size:90%;color:#000000;background-color:#EDEBFF;"><emph class="ltx_emph ltx_font_italic">“I know that I must be at the bottom left cell here because I can’t go to the left,”</emph></span><span class="ltx_text" style="font-size:90%;"> P13 said, </span><span class="ltx_text" style="font-size:90%;color:#000000;background-color:#EDEBFF;"><emph class="ltx_emph ltx_font_italic">“but being able to know where that is beforehand would be very helpful.”</emph></span><span class="ltx_text" style="font-size:90%;">
              </span></p>
          </div>
          <section id="S6" class="ltx_section">
            <h2 class="ltx_title ltx_title_section" style="font-size:90%;" id="H-S6">
              <span class="ltx_tag ltx_tag_section">6 </span>Discussion and Future Work</h2>
            <div id="S6.p1" class="ltx_para">
              <p class="ltx_p"><span class="ltx_text" style="font-size:90%;">In this paper, we explore how structure, navigation, and description compose together to yield richer screen reader experiences for data visualizations than are possible via alt text, data tables, or the current ARIA specification.
                  Our results suggest promising next steps about accessible interaction and representation for visualizations.
                </span></p>
            </div>
            <section id="S6.SS1" class="ltx_subsection">
              <h3 class="ltx_title ltx_title_subsection" style="font-size:90%;" id="H-S6.SS1">
                <span class="ltx_tag ltx_tag_subsection">6.1 </span>Enabling Richer Screen Reader Experiences Today</h3>
              <div id="S6.SS1.p1" class="ltx_para">
                <p class="ltx_p"><span class="ltx_text" style="font-size:90%;">Although our design dimensions highlight a diverse landscape of screen reader experiences for data visualizations, our study participants attested to the value of following existing best practices.
                    Namely, alt text and data tables provide a good baseline for making visualizations accessible.
                    Thus, visualization authors should consider adopting our design dimensions to enable more granular information access patterns only after these initial pieces are in place.
                  </span></p>
              </div>
              <div id="S6.SS1.p2" class="ltx_para">
                <p class="ltx_p"><span class="ltx_text" style="font-size:90%;">Existing visualization authoring methods, however, are likely insufficient for instantiating our design dimensions or producing usable experiences for screen reader users.
                    In particular, it currently falls entirely on visualization authors to handcraft appropriate structures, navigational techniques, and description schemes on a per-visualization basis.
                    As a result, besides being a time-consuming endeavor, idiosyncratic implementations can introduce friction to the reading process.
                    For instance, per-visualization approaches might not account for an individual user’s preferences in terms of verbosity, speed, or order of narrated output — three properties which varied widely among our study participant in ways that did not correlate with education level or experience with data.
                    Thus, to scale and standardize this process, some responsibility for making visualizations screen reader accessible must be shared by </span><emph class="ltx_emph ltx_font_italic" style="font-size:90%;">toolkits</emph><span class="ltx_text" style="font-size:90%;"> as well.
                    For example, our prototypes suggest a strategy for translating visualization specifications into hierarchical encoding structures (i.e., encoding channels as individual branches, and using visual affordances such as axis ticks and grid lines to populate the hierarchy levels).
                    If toolkits provide default experiences out-of-the-box, visualization authors can instead focus on customizing them to be more meaningful for their specific visualization, and screen reader users have a stronger guarantee that the resultant experiences will be more usable and respectful of their individual preferences.</span></p>
              </div>
              <div id="S6.SS1.p3" class="ltx_para">
                <p class="ltx_p"><span class="ltx_text" style="font-size:90%;">Current web accessibility standards also present limitations for realizing our design dimensions.
                    For instance, there is no standard way to determine which element the screen reader cursor is selecting.
                    Where ARIA has thus far focused on annotating documents with the semantics of a pre-defined palette of widgets, future web standards might instead express how elements respond to the </span><emph class="ltx_emph ltx_font_italic" style="font-size:90%;">interaction affordances</emph><span class="ltx_text" style="font-size:90%;"> of screen readers.
                    For example, ARIA could offer explicit support for overview/detail hierarchies and different levels of description detail that can be progressively read according to user preferences.</span></p>
              </div>
            </section>
            <section id="S6.SS2" class="ltx_subsection">
              <h3 class="ltx_title ltx_title_subsection" style="font-size:90%;" id="H-S6.SS2">
                <span class="ltx_tag ltx_tag_subsection">6.2 </span>Studying and Refining the Design Dimensions</h3>
              <div id="S6.SS2.p1" class="ltx_para">
                <p class="ltx_p"><span class="ltx_text" style="font-size:90%;">Our conversations with study participants also helped highlight that design considerations can differ substantially for users who are totally blind compared to those who have low-vision.
                    For example, partially-sighted participants used screen magnifiers alongside screen readers.
                    As a result, they preferred verbose written descriptions alongside more terse verbal narration.
                  </span><span class="ltx_text" style="font-size:90%;">Magnifier users also wished for in situ tooltips, which would eliminate the need to scroll back and forth between points and axes to understand data values.
                    However, promisingly, we found that using a screen reader and magnifier together affords unique benefits: </span><span class="ltx_text" style="font-size:90%;color:#000000;background-color:#EDEBFF;"><emph class="ltx_emph ltx_font_italic">“I would have missed this point visually if I solely relied on the magnifier because the point is hidden behind another point”</emph></span><span class="ltx_text" style="font-size:90%;"> (P12).
                    Future work should more deeply explore how accommodations might complement and conflict when designing for different kinds of visual disability.</span></p>
              </div>
              <div id="S6.SS2.p2" class="ltx_para">
                <p class="ltx_p"><span class="ltx_text" style="font-size:90%;">Similarly, in scoping our focus to screen readers and, thus, text-to-speech narration, we refrained from considering multi-sensory modalities in our design dimensions.
                    Yet, we found that most participants had previous experience with multi-sensory visualization, including sonification (P5, 7, 9, 13), tactile statistical charts (P2–4, 10, 11, 13), and haptic graphics (P3, 4, 11, 13).
                    Some participants reported that a </span><emph class="ltx_text ltx_font_italic" style="font-size:90%;">combination</emph><span class="ltx_text" style="font-size:90%;"> of modalities would further enhance their experience — for example, getting a sonic overview of a line chart before reading more detailed text descriptions.
                    Other participants, however, cautioned that adding multiple modalities can create additional confusion.
                    For example, P7 noted that </span><span class="ltx_text" style="font-size:90%;color:#000000;background-color:#EDEBFF;"><emph class="ltx_emph ltx_font_italic">“There’s often a lack of explanation about how to map between sound and text.”</emph></span><span class="ltx_text" style="font-size:90%;">
                    Based on this testimony, it is unlikely that “sensory modalities” are merely an additional, independent dimension within our framework.
                    Rather, future work must unpack the affordances of individual modalities, how they interact with one another, and how they impact the design of structure, navigation, and description.
                  </span></p>
              </div>
            </section>
            <section id="S6.SS3" class="ltx_subsection">
              <h3 class="ltx_title ltx_title_subsection" style="font-size:90%;" id="H-S6.SS3">
                <span class="ltx_tag ltx_tag_subsection">6.3 </span>What are Accessible Interactions for Data Visualizations?</h3>
              <div id="S6.SS3.p1" class="ltx_para">
                <p class="ltx_p"><span class="ltx_text" style="font-size:90%;">In visualization research, we typically distinguish between static and interactive visualizations, where the latter allows readers to actively manipulate visualized elements or the backing data pipeline&nbsp;</span><cite class="ltx_cite ltx_citemacro_cite"><span class="ltx_text" style="font-size:90%;">[</span><span class="ltx_ref ltx_missing_citation ltx_ref_self">yi_toward_2007</span>, <span class="ltx_ref ltx_missing_citation ltx_ref_self">heer_interactive_2012</span><span class="ltx_text" style="font-size:90%;">]</span></cite><span class="ltx_text" style="font-size:90%;">.
                    Screen readers, however, complicate this model: reading is no longer a process that occurs purely “in the head” but rather becomes an embodied and interactive experience, as screen reader users must intentionally perform actions with their input devices in order to step through the visualization structure.
                    While some aspects of this dichotomy may still hold, it is unclear how to cleanly separate </span><emph class="ltx_text ltx_font_italic" style="font-size:90%;">static reading</emph><span class="ltx_text" style="font-size:90%;"> from </span><emph class="ltx_text ltx_font_italic" style="font-size:90%;">interactive manipulation</emph><span class="ltx_text" style="font-size:90%;"> in the context of screen reader accessible visualizations, if these notions are conceptually separable at all.
                    For instance, </span><span class="ltx_ERROR undefined">\censor</span><span class="ltx_text" style="font-size:90%;">Hajas likened the navigation our prototypes afforded to </span><span class="ltx_text" style="font-size:90%;color:#000000;background-color:#E6FFF5;"><emph class="ltx_emph ltx_font_italic">“shifting eye gaze, shifting focus of perceptual attention. When I navigate a visualization, naturally I would say ‘I’m looking at this figure’ and not that ‘I’m interacting with this figure’.”</emph></span><span class="ltx_text" style="font-size:90%;"> Analogously, recent results in graphical perception find that sighted readers do not simply “see” visualizations in a single glance but rather perform active visual filtering operations&nbsp;</span><cite class="ltx_cite ltx_citemacro_cite"><span class="ltx_text" style="font-size:90%;">[</span><span class="ltx_ref ltx_missing_citation ltx_ref_self">boger_jurassic_2021</span><span class="ltx_text" style="font-size:90%;">]</span></cite><span class="ltx_text" style="font-size:90%;">.
                    However, when using the binary tree prototype (Fig.&nbsp;</span><a href="#S4.F2" title="Figure 2 ‣ 4 Example Gallery ‣ Rich Screen Reader Experiences for Accessible Data Visualization" class="ltx_ref" style="font-size:90%;"><span class="ltx_text ltx_ref_tag">2</span></a><span class="ltx_text" style="font-size:90%;">e), </span><span class="ltx_ERROR undefined">\censor</span><span class="ltx_text" style="font-size:90%;">Hajas noted a more distinct shift from reading to interacting. He said, </span><span class="ltx_text" style="font-size:90%;color:#000000;background-color:#E6FFF5;"><emph class="ltx_emph ltx_font_italic">“it gave me the impression that I’m not just looking selectively, but I focus and zoom into the data,”</emph></span><span class="ltx_text" style="font-size:90%;"> analogously to zoom interactions that change the viewport for sighted readers.
                    Better characterizing the shift that occurs with this prototype, and exploring accessible manipulations of visualizations that allow screen reader users to meaningfully conduct data analysis, are compelling opportunities for future work.
                  </span></p>
              </div>
              <section id="Sx1" class="ltx_section">
                <h2 class="ltx_title ltx_title_section" style="font-size:90%;" id="H-Sx1">Acknowledgements</h2>
                <div id="Sx1.p1" class="ltx_para">
                  <p class="ltx_p"><span class="ltx_text" style="font-size:90%;">We thank Matthew Blanco, Evan Peck, the NYU Digital Theory Lab, and the MIT Accessibility Office. This work was supported by NSF awards #1942659, #1122374, and #1941577.
                    </span><span class="ltx_ERROR undefined">\printbibliography</span></p>
                </div>
              </section>
            </section>
          </section>
        </section>
      </figure>
    </section>
  </section>
  <section id="S6" class="ltx_section">
    <h2 class="ltx_title ltx_title_section" style="font-size:90%;" id="H-S6">
      <span class="ltx_tag ltx_tag_section">6 </span>Discussion and Future Work</h2>
    <div id="S6.p1" class="ltx_para">
      <p class="ltx_p"><span class="ltx_text" style="font-size:90%;">In this paper, we explore how structure, navigation, and description compose together to yield richer screen reader experiences for data visualizations than are possible via alt text, data tables, or the current ARIA specification.
          Our results suggest promising next steps about accessible interaction and representation for visualizations.
        </span></p>
    </div>
    <section id="S6.SS1" class="ltx_subsection">
      <h3 class="ltx_title ltx_title_subsection" style="font-size:90%;" id="H-S6.SS1">
        <span class="ltx_tag ltx_tag_subsection">6.1 </span>Enabling Richer Screen Reader Experiences Today</h3>
      <div id="S6.SS1.p1" class="ltx_para">
        <p class="ltx_p"><span class="ltx_text" style="font-size:90%;">Although our design dimensions highlight a diverse landscape of screen reader experiences for data visualizations, our study participants attested to the value of following existing best practices.
            Namely, alt text and data tables provide a good baseline for making visualizations accessible.
            Thus, visualization authors should consider adopting our design dimensions to enable more granular information access patterns only after these initial pieces are in place.
          </span></p>
      </div>
      <div id="S6.SS1.p2" class="ltx_para">
        <p class="ltx_p"><span class="ltx_text" style="font-size:90%;">Existing visualization authoring methods, however, are likely insufficient for instantiating our design dimensions or producing usable experiences for screen reader users.
            In particular, it currently falls entirely on visualization authors to handcraft appropriate structures, navigational techniques, and description schemes on a per-visualization basis.
            As a result, besides being a time-consuming endeavor, idiosyncratic implementations can introduce friction to the reading process.
            For instance, per-visualization approaches might not account for an individual user’s preferences in terms of verbosity, speed, or order of narrated output — three properties which varied widely among our study participant in ways that did not correlate with education level or experience with data.
            Thus, to scale and standardize this process, some responsibility for making visualizations screen reader accessible must be shared by </span><emph class="ltx_emph ltx_font_italic" style="font-size:90%;">toolkits</emph><span class="ltx_text" style="font-size:90%;"> as well.
            For example, our prototypes suggest a strategy for translating visualization specifications into hierarchical encoding structures (i.e., encoding channels as individual branches, and using visual affordances such as axis ticks and grid lines to populate the hierarchy levels).
            If toolkits provide default experiences out-of-the-box, visualization authors can instead focus on customizing them to be more meaningful for their specific visualization, and screen reader users have a stronger guarantee that the resultant experiences will be more usable and respectful of their individual preferences.</span></p>
      </div>
      <div id="S6.SS1.p3" class="ltx_para">
        <p class="ltx_p"><span class="ltx_text" style="font-size:90%;">Current web accessibility standards also present limitations for realizing our design dimensions.
            For instance, there is no standard way to determine which element the screen reader cursor is selecting.
            Where ARIA has thus far focused on annotating documents with the semantics of a pre-defined palette of widgets, future web standards might instead express how elements respond to the </span><emph class="ltx_emph ltx_font_italic" style="font-size:90%;">interaction affordances</emph><span class="ltx_text" style="font-size:90%;"> of screen readers.
            For example, ARIA could offer explicit support for overview/detail hierarchies and different levels of description detail that can be progressively read according to user preferences.</span></p>
      </div>
    </section>
    <section id="S6.SS2" class="ltx_subsection">
      <h3 class="ltx_title ltx_title_subsection" style="font-size:90%;" id="H-S6.SS2">
        <span class="ltx_tag ltx_tag_subsection">6.2 </span>Studying and Refining the Design Dimensions</h3>
      <div id="S6.SS2.p1" class="ltx_para">
        <p class="ltx_p"><span class="ltx_text" style="font-size:90%;">Our conversations with study participants also helped highlight that design considerations can differ substantially for users who are totally blind compared to those who have low-vision.
            For example, partially-sighted participants used screen magnifiers alongside screen readers.
            As a result, they preferred verbose written descriptions alongside more terse verbal narration.
          </span><span class="ltx_text" style="font-size:90%;">Magnifier users also wished for in situ tooltips, which would eliminate the need to scroll back and forth between points and axes to understand data values.
            However, promisingly, we found that using a screen reader and magnifier together affords unique benefits: </span><span class="ltx_text" style="font-size:90%;color:#000000;background-color:#EDEBFF;"><emph class="ltx_emph ltx_font_italic">“I would have missed this point visually if I solely relied on the magnifier because the point is hidden behind another point”</emph></span><span class="ltx_text" style="font-size:90%;"> (P12).
            Future work should more deeply explore how accommodations might complement and conflict when designing for different kinds of visual disability.</span></p>
      </div>
      <div id="S6.SS2.p2" class="ltx_para">
        <p class="ltx_p"><span class="ltx_text" style="font-size:90%;">Similarly, in scoping our focus to screen readers and, thus, text-to-speech narration, we refrained from considering multi-sensory modalities in our design dimensions.
            Yet, we found that most participants had previous experience with multi-sensory visualization, including sonification (P5, 7, 9, 13), tactile statistical charts (P2–4, 10, 11, 13), and haptic graphics (P3, 4, 11, 13).
            Some participants reported that a </span><emph class="ltx_text ltx_font_italic" style="font-size:90%;">combination</emph><span class="ltx_text" style="font-size:90%;"> of modalities would further enhance their experience — for example, getting a sonic overview of a line chart before reading more detailed text descriptions.
            Other participants, however, cautioned that adding multiple modalities can create additional confusion.
            For example, P7 noted that </span><span class="ltx_text" style="font-size:90%;color:#000000;background-color:#EDEBFF;"><emph class="ltx_emph ltx_font_italic">“There’s often a lack of explanation about how to map between sound and text.”</emph></span><span class="ltx_text" style="font-size:90%;">
            Based on this testimony, it is unlikely that “sensory modalities” are merely an additional, independent dimension within our framework.
            Rather, future work must unpack the affordances of individual modalities, how they interact with one another, and how they impact the design of structure, navigation, and description.
          </span></p>
      </div>
    </section>
    <section id="S6.SS3" class="ltx_subsection">
      <h3 class="ltx_title ltx_title_subsection" style="font-size:90%;" id="H-S6.SS3">
        <span class="ltx_tag ltx_tag_subsection">6.3 </span>What are Accessible Interactions for Data Visualizations?</h3>
      <div id="S6.SS3.p1" class="ltx_para">
        <p class="ltx_p"><span class="ltx_text" style="font-size:90%;">In visualization research, we typically distinguish between static and interactive visualizations, where the latter allows readers to actively manipulate visualized elements or the backing data pipeline&nbsp;</span><cite class="ltx_cite ltx_citemacro_cite"><span class="ltx_text" style="font-size:90%;">[</span><span class="ltx_ref ltx_missing_citation ltx_ref_self">yi_toward_2007</span>, <span class="ltx_ref ltx_missing_citation ltx_ref_self">heer_interactive_2012</span><span class="ltx_text" style="font-size:90%;">]</span></cite><span class="ltx_text" style="font-size:90%;">.
            Screen readers, however, complicate this model: reading is no longer a process that occurs purely “in the head” but rather becomes an embodied and interactive experience, as screen reader users must intentionally perform actions with their input devices in order to step through the visualization structure.
            While some aspects of this dichotomy may still hold, it is unclear how to cleanly separate </span><emph class="ltx_text ltx_font_italic" style="font-size:90%;">static reading</emph><span class="ltx_text" style="font-size:90%;"> from </span><emph class="ltx_text ltx_font_italic" style="font-size:90%;">interactive manipulation</emph><span class="ltx_text" style="font-size:90%;"> in the context of screen reader accessible visualizations, if these notions are conceptually separable at all.
            For instance, </span><span class="ltx_ERROR undefined">\censor</span><span class="ltx_text" style="font-size:90%;">Hajas likened the navigation our prototypes afforded to </span><span class="ltx_text" style="font-size:90%;color:#000000;background-color:#E6FFF5;"><emph class="ltx_emph ltx_font_italic">“shifting eye gaze, shifting focus of perceptual attention. When I navigate a visualization, naturally I would say ‘I’m looking at this figure’ and not that ‘I’m interacting with this figure’.”</emph></span><span class="ltx_text" style="font-size:90%;"> Analogously, recent results in graphical perception find that sighted readers do not simply “see” visualizations in a single glance but rather perform active visual filtering operations&nbsp;</span><cite class="ltx_cite ltx_citemacro_cite"><span class="ltx_text" style="font-size:90%;">[</span><span class="ltx_ref ltx_missing_citation ltx_ref_self">boger_jurassic_2021</span><span class="ltx_text" style="font-size:90%;">]</span></cite><span class="ltx_text" style="font-size:90%;">.
            However, when using the binary tree prototype (Fig.&nbsp;</span><a href="#S4.F2" title="Figure 2 ‣ 4 Example Gallery ‣ Rich Screen Reader Experiences for Accessible Data Visualization" class="ltx_ref" style="font-size:90%;"><span class="ltx_text ltx_ref_tag">2</span></a><span class="ltx_text" style="font-size:90%;">e), </span><span class="ltx_ERROR undefined">\censor</span><span class="ltx_text" style="font-size:90%;">Hajas noted a more distinct shift from reading to interacting. He said, </span><span class="ltx_text" style="font-size:90%;color:#000000;background-color:#E6FFF5;"><emph class="ltx_emph ltx_font_italic">“it gave me the impression that I’m not just looking selectively, but I focus and zoom into the data,”</emph></span><span class="ltx_text" style="font-size:90%;"> analogously to zoom interactions that change the viewport for sighted readers.
            Better characterizing the shift that occurs with this prototype, and exploring accessible manipulations of visualizations that allow screen reader users to meaningfully conduct data analysis, are compelling opportunities for future work.
          </span></p>
      </div>
      <section id="Sx1" class="ltx_section">
        <h2 class="ltx_title ltx_title_section" style="font-size:90%;" id="H-Sx1">Acknowledgements</h2>
        <div id="Sx1.p1" class="ltx_para">
          <p class="ltx_p"><span class="ltx_text" style="font-size:90%;">We thank Matthew Blanco, Evan Peck, the NYU Digital Theory Lab, and the MIT Accessibility Office. This work was supported by NSF awards #1942659, #1122374, and #1941577.
            </span><span class="ltx_ERROR undefined">\printbibliography</span></p>
        </div>
      </section>
    </section>
  </section>
  <section id="Sx1" class="ltx_section">
    <h2 class="ltx_title ltx_title_section" style="font-size:90%;" id="H-Sx1">Acknowledgements</h2>
    <div id="Sx1.p1" class="ltx_para">
      <p class="ltx_p"><span class="ltx_text" style="font-size:90%;">We thank Matthew Blanco, Evan Peck, the NYU Digital Theory Lab, and the MIT Accessibility Office. This work was supported by NSF awards #1942659, #1122374, and #1941577.
        </span><span class="ltx_ERROR undefined">\printbibliography</span></p>
    </div>
  </section>
</article>
