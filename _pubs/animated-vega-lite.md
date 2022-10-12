---
stub: false
title: "Animated Vega-Lite: Unifying Animation with a Grammar of Interactive Graphics"
authors:
  - key: jzong
    equal: true
  - key: jopo
    equal: true
  - key: dwootton
  - key: arvindsatya
venue: vis-full
year: 2023
date: 2023-01-02
tags:
  - language
  - visualization design
  - interaction design
  - qualitative methods
---

<style>
  #vega-lite-animated-editor-gallery-section img {
    cursor: pointer;
    height: 100px;
    border: 1px solid black;
    margin-right: 5px;
  }
  #vega-lite-animated-editor-gallery-section img:hover {
    border: 1px solid #CC5200;
  }
</style>

<article>
  <section class="ltx_abstract" id="abstract">
    <h2 class="ltx_title ltx_title_abstract" id="H-abstract">Abstract</h2>
    <p class="ltx_p">We present Animated Vega-Lite, a set of extensions to Vega-Lite that model animated visualizations as time-varying data queries.
      In contrast to alternate approaches for specifying animated visualizations, which prize a highly expressive design space, Animated Vega-Lite prioritizes unifying animation with the language’s existing abstractions for static and interactive visualizations to enable authors to smoothly move between or combine these modalities.
      Thus, to compose animation with static visualizations, we represent time as an <emph class="ltx_text ltx_font_italic">encoding channel</emph>. Time encodings map a data field to animation keyframes, providing a lightweight specification for animations without interaction. To compose animation and interaction, we also represent time as an <emph class="ltx_text ltx_font_italic">event stream</emph>; Vega-Lite selections, which provide dynamic data queries, are now driven not only by input events but by timer ticks as well.
      We evaluate the expressiveness of our approach through a gallery of diverse examples that demonstrate coverage over taxonomies of both interaction and animation.
      We also critically reflect on the conceptual affordances and limitations of our contribution by interviewing five expert developers of existing animation grammars.
      These reflections highlight the key motivating role of in-the-wild examples, and identify three central tradeoffs: the language design process, the types of animated transitions supported, and how the systems model keyframes.</p>
  </section>

  <section id="vega-lite-animated-editor-section">
    <div id="vega-lite-animated-editor-loading" style="display: none">Loading...</div>
    <iframe id="vega-lite-animated-editor-iframe" width="100%" height="700px" src="https://jonathanzong.github.io/editor/#/url/vega-lite/N4IgJghgLhIFygK4CcA28QAspQA4Gc4B6I5CAdwDoBzASyk0QCNF8BTZAYwHsA7KNv0o8AtkQBubahAlSIAWkgx2UfERER8A5ESUzpuEbV5gOlAFb4+IAL4AaEBuQBrDLm7GoIB7ghkR+PAA2qC8ECJsGACebH7eIOyobJxeCCBQUbiRcCDunvHWOVC0Eci2DkzGYPCgxriIqSBkvNSRDka88ACMAJwArH3tEAAe8ABMAAwTgwkCuPB9NjYAug5QzfgAZtzIIsGgm7So2jW5fuHRsWVLqyCCPGDG1Kc8qDunh2yo1Tk8iPzIKLxJKtEzwXiIVCoewgUZpT7fDCbDjFVD0IFrTLZEAAR0QEH49GgtEk5RAQPhtC+PxAaORAH02MMsil4hkshg8QTijBiqSYcUIh8qYicjE4g58JwIElTs1WsEJnY+lMJssYc42BSDiKaX8AUClksgA"></iframe>
  </section>
  <section id="vega-lite-animated-editor-gallery-section">
    <img src="gifs/bar.gif" onclick="goToAnimation('bar')" />
    <img src="gifs/birds.gif" onclick="goToAnimation('birds')" />
    <img src="gifs/bump.gif" onclick="goToAnimation('bump')" />
    <img src="gifs/connected.gif" onclick="goToAnimation('connected')" />
    <img src="gifs/dunkin.gif" onclick="goToAnimation('dunkin')" />
    <img src="gifs/gapminder.gif" onclick="goToAnimation('gapminder')" />
    <img src="gifs/hop.gif" onclick="goToAnimation('hop')" />
    <img src="gifs/overview.gif" onclick="goToAnimation('overview')" />
    <img src="gifs/stocks.gif" onclick="goToAnimation('stocks')" />
  </section>

  <section id="S1" class="ltx_section">
    <h2 class="ltx_title ltx_title_section" id="H-S1">
      <span class="ltx_tag ltx_tag_section">1 </span>Introduction</h2>
    <div id="S1.p1" class="ltx_para">
      <p class="ltx_p">Rapid prototyping is critical to the visualization authoring process.
        When making an explanatory graphic, rapid prototyping allows a visualization author to evaluate candidate designs before committing to refining one in detail.
        For exploratory data analysis, rapid prototyping is equally key as visualization is just one part of a broader workflow, with analysts focused on producing and analyzing a chart to yield insight or seed further analysis.
        However, consider the friction of visualizing faceted data: an author might choose between depicting facets as a small multiples display, on-demand via interaction (e.g., dynamic query widgets), or played sequentially via animation.
        These designs make different trade-offs between time and space and, as a result, research results suggest they afford readers different levels of clarity, time commitment, and visual interest&nbsp;<cite class="ltx_cite ltx_citemacro_cite">[<a href="#bib.bib36" title="Effectiveness of Animation in Trend Visualization" class="ltx_ref">33</a>]</cite>.
        Despite these differences, the designs express a shared goal — to visualize different groupings of the data — and a visualization author might reasonably expect to be able to easily move between the three to make the most appropriate choice.</p>
    </div>
    <div id="S1.p2" class="ltx_para">
      <p class="ltx_p">Unfortunately, existing visualization toolkits can present a highly viscous&nbsp;<cite class="ltx_cite ltx_citemacro_cite">[<a href="#bib.bib62" title="Cognitive dimensions of notations" class="ltx_ref">44</a>]</cite> specification process when navigating this time-space trade-off.
        One class of toolkits supports either interaction or animation, but not both.
        Such systems include Vega&nbsp;<cite class="ltx_cite ltx_citemacro_cite">[<a href="#bib.bib33" title="Declarative interaction design for data visualization" class="ltx_ref">38</a>]</cite> and Vega-Lite&nbsp;<cite class="ltx_cite ltx_citemacro_cite">[<a href="#bib.bib30" title="Vega-Lite: A Grammar of Interactive Graphics" class="ltx_ref">36</a>]</cite> — which offer interaction primitives in the form of <emph class="ltx_text ltx_font_italic">signals</emph> and <emph class="ltx_text ltx_font_italic">selections</emph> but do not provide abstractions for animation — as well as gganimate&nbsp;<cite class="ltx_cite ltx_citemacro_cite">[<a href="#bib.bib31" title="A Grammar of Animated Graphics" class="ltx_ref">41</a>]</cite>, Data Animator&nbsp;<cite class="ltx_cite ltx_citemacro_cite">[<a href="#bib.bib93" title="Data Animator: Authoring Expressive Animated Data Graphics" class="ltx_ref">46</a>]</cite>, Canis / CAST&nbsp;<cite class="ltx_cite ltx_citemacro_cite">[<a href="#bib.bib91" title="Canis: A High-Level Language for Data-Driven Chart Animations" class="ltx_ref">9</a>, <a href="#bib.bib90" title="CAST: Authoring Data-Driven Chart Animations" class="ltx_ref">8</a>]</cite>, and Gemini/Gemini<sup class="ltx_sup">2</sup>&nbsp;<cite class="ltx_cite ltx_citemacro_cite">[<a href="#bib.bib92" title="Gemini: A Grammar and Recommender System for Animated Transitions in Statistical Graphics" class="ltx_ref">19</a>, <a href="#bib.bib46" title="Gemini^2: Generating Keyframe-Oriented Animated Transitions Between Statistical Graphics" class="ltx_ref">18</a>]</cite> — which express animation in terms of transitions between discrete visualization states known as <emph class="ltx_text ltx_font_italic">keyframes</emph> but do not provide treatment for interaction.
        As a result, these systems force visualization authors to prematurely commit&nbsp;<cite class="ltx_cite ltx_citemacro_cite">[<a href="#bib.bib62" title="Cognitive dimensions of notations" class="ltx_ref">44</a>]</cite> to either an interaction- or animation-friendly abstraction when choosing their prototyping tool, and thus limit authors’ ability to explore alternative designs.
        A second class of toolkits (including D3&nbsp;<cite class="ltx_cite ltx_citemacro_cite">[<a href="#bib.bib35" title="D³ Data-Driven Documents" class="ltx_ref">2</a>]</cite> and Plotly&nbsp;<cite class="ltx_cite ltx_citemacro_cite">[<a href="#bib.bib69" title="Plotly Graphing Libraries" class="ltx_ref">31</a>]</cite>) support both modalities but do so via largely distinct abstractions (namely, <emph class="ltx_emph ltx_font_italic">transitions</emph> or <emph class="ltx_emph ltx_font_italic">frames</emph> for animation, and <emph class="ltx_emph ltx_font_italic">event handlers</emph> or a typology of techniques for interaction).
        Thus, an author must often either restructure or rewrite their specifications to consider interaction and animation in parallel.</p>
    </div>
    <div id="S1.p3" class="ltx_para">
      <p class="ltx_p">In this paper, we present Animated Vega-Lite: extensions to Vega-Lite to support data-driven animation.
        Its design is motivated by the key insight that interaction and animation are parallel concepts (<a href="#S3" title="3 Motivation: Unifying Interaction and Animation ‣ Animated Vega-Lite: Unifying Animation with a Grammar of Interactive Graphics" class="ltx_ref ltx_refmacro_autoref"><span class="ltx_text ltx_ref_tag">section&nbsp;3</span></a>). Whereas interactions transform data (e.g. filtering) and update visual properties (e.g. re-coloring marks) in response to <emph class="ltx_text ltx_font_italic">user</emph> input, animations do the same in response to a <emph class="ltx_emph ltx_font_italic">timer</emph>.
        From this perspective, interactive and animated visualization techniques occupy a spectrum of dynamic, event-driven behaviors.
        Thus, with Animated Vega-Lite, animated visualizations (like their interactive counterparts) are modeled as time-varying data queries — an approach that allows us to provide a <emph class="ltx_text ltx_font_italic">unified</emph> set of abstractions for static, interactive, and animated visualizations.</p>
    </div>
    <div id="S1.p4" class="ltx_para">
      <p class="ltx_p">Animated Vega-Lite offers two abstractions of time that allow animations to compose with Vega-Lite’s existing grammars of static and interactive visualizations (<a href="#S4" title="4 A Grammar of Animation in Vega-Lite ‣ Animated Vega-Lite: Unifying Animation with a Grammar of Interactive Graphics" class="ltx_ref ltx_refmacro_autoref"><span class="ltx_text ltx_ref_tag">section&nbsp;4</span></a>).
        From the perspective of interaction, time is an <emph class="ltx_text ltx_font_italic">event stream</emph>: a source of events analogous to <code class="ltx_verbatim ltx_font_typewriter">click</code>s and <code class="ltx_verbatim ltx_font_typewriter">keypress</code>es produced by a user.
        These events drive Vega-Lite <emph class="ltx_text ltx_font_italic">selections</emph>, which apply dynamic data queries to visual encodings.
        Thus, by modeling time as an event stream, users can seamlessly specify and move between interactive and animated behavior in the same specification.
        From the perspective of Vega-Lite’s grammar of graphics, time is an <emph class="ltx_text ltx_font_italic">encoding channel</emph>.
        Just as <span class="ltx_text ltx_font_typewriter">x</span> and <span class="ltx_text ltx_font_typewriter">y</span> encodings map data values to spatial positions measured in pixels, a <span class="ltx_text ltx_font_typewriter">time</span> encoding maps data values to temporal positions measured in elapsed milliseconds.
        Compared to the event stream abstraction, the encoding channel abstraction is lighter-weight, but less expressive.
        This allows a visualization author to get started quickly with an animated chart and to move easily between an animated and a faceted visualization by switching a <code class="ltx_verbatim ltx_font_typewriter">time</code> channel for a <code class="ltx_verbatim ltx_font_typewriter">row</code> or <code class="ltx_verbatim ltx_font_typewriter">column</code> one.
        And, for added customizability, users can always turn a time-as-encoding specification into a time-as-event-stream one.
      </p>
    </div>
    <div id="S1.p5" class="ltx_para">
      <p class="ltx_p">We implement a prototype compiler that synthesizes a low-level Vega specification with shared reactive logic for interaction and animation (<a href="#S5" title="5 Implementation ‣ Animated Vega-Lite: Unifying Animation with a Grammar of Interactive Graphics" class="ltx_ref ltx_refmacro_autoref"><span class="ltx_text ltx_ref_tag">section&nbsp;5</span></a>).
        Following best practices&nbsp;<cite class="ltx_cite ltx_citemacro_cite">[<a href="#bib.bib55" title="Reflecting on the Evaluation of Visualization Authoring Systems : Position Paper" class="ltx_ref">32</a>]</cite>, we assess our contribution with multiple evaluation methods.
        Through a diverse example gallery (<a href="#S6" title="6 Evaluation: Example Gallery ‣ Animated Vega-Lite: Unifying Animation with a Grammar of Interactive Graphics" class="ltx_ref ltx_refmacro_autoref"><span class="ltx_text ltx_ref_tag">section&nbsp;6</span></a>), we demonstrate that Animated Vega-Lite covers much of Yi et al.’s interaction taxonomy&nbsp;<cite class="ltx_cite ltx_citemacro_cite">[<a href="#bib.bib9" title="Toward a Deeper Understanding of the Role of Interaction in Information Visualization" class="ltx_ref">51</a>]</cite> and Heer &amp; Robertson’s animation taxonomy&nbsp;<cite class="ltx_cite ltx_citemacro_cite">[<a href="#bib.bib5" title="Animated Transitions in Statistical Data Graphics" class="ltx_ref">11</a>]</cite> while preserving Vega-Lite’s low viscosity and systematic generativity.
        We also interview five expert developers of four existing animated visualization grammars&nbsp;<cite class="ltx_cite ltx_citemacro_cite">[<a href="#bib.bib48" title="Gganimate has transitioned to a state of release" class="ltx_ref">43</a>, <a href="#bib.bib93" title="Data Animator: Authoring Expressive Animated Data Graphics" class="ltx_ref">46</a>, <a href="#bib.bib91" title="Canis: A High-Level Language for Data-Driven Chart Animations" class="ltx_ref">9</a>, <a href="#bib.bib90" title="CAST: Authoring Data-Driven Chart Animations" class="ltx_ref">8</a>, <a href="#bib.bib92" title="Gemini: A Grammar and Recommender System for Animated Transitions in Statistical Graphics" class="ltx_ref">19</a>, <a href="#bib.bib46" title="Gemini^2: Generating Keyframe-Oriented Animated Transitions Between Statistical Graphics" class="ltx_ref">18</a>]</cite> to critically reflect&nbsp;<cite class="ltx_cite ltx_citemacro_cite">[<a href="#bib.bib54" title="Critical Reflections on Visualization Authoring Systems" class="ltx_ref">35</a>]</cite> on the tradeoffs, conceptual affordances, and limitations of our system (<a href="#S7" title="7 Evaluation: Critical Reflection ‣ Animated Vega-Lite: Unifying Animation with a Grammar of Interactive Graphics" class="ltx_ref ltx_refmacro_autoref"><span class="ltx_text ltx_ref_tag">section&nbsp;7</span></a>).
        We discuss the important role example visualizations play in grammar design and analyze three areas of tradeoffs: the language design process, support for animations within vs. between encodings, and models of animation keyframes.
      </p>
    </div>
  </section>
  <section id="S2" class="ltx_section">
    <h2 class="ltx_title ltx_title_section" id="H-S2">
      <span class="ltx_tag ltx_tag_section">2 </span>Related Work</h2>
    <div id="S2.p1" class="ltx_para">
      <p class="ltx_p">Our contribution is motivated by perceptual work on the value of combining interaction and animation, and is informed by the design of existing toolkits for authoring animated data visualizations.</p>
    </div>
    <section id="S2.SS1" class="ltx_subsection">
      <h3 class="ltx_title ltx_title_subsection" id="H-S2.SS1">
        <span class="ltx_tag ltx_tag_subsection">2.1 </span>Animation in Information Visualization</h3>
      <div id="S2.SS1.p1" class="ltx_para">
        <p class="ltx_p">In a classic 2002 paper, Tversky et al.&nbsp;<cite class="ltx_cite ltx_citemacro_cite">[<a href="#bib.bib4" title="Animation: can it facilitate?" class="ltx_ref">47</a>]</cite> question the efficacy of animated graphics.
          In reviewing nearly 100 studies comparing static and animated graphics, the authors were unable to find convincing cases where animated charts were strictly superior to static ones.
          Visualization researchers have since contributed a body of studies that have identified reasons to be both optimistic and cautious about the value of animation in visualization.
          For instance, several studies have demonstrated advantages when animating chart transitions&nbsp;<cite class="ltx_cite ltx_citemacro_cite">[<a href="#bib.bib5" title="Animated Transitions in Statistical Data Graphics" class="ltx_ref">11</a>, <a href="#bib.bib57" title="Designing Animated Transitions to Convey Aggregate Operations" class="ltx_ref">17</a>, <a href="#bib.bib59" title="Temporal distortion for animated transitions" class="ltx_ref">6</a>, <a href="#bib.bib58" title="The Not-so-Staggering Effect of Staggered Animated Transitions on Visual Tracking" class="ltx_ref">4</a>]</cite> or directly animating data values to convey uncertainty&nbsp;<cite class="ltx_cite ltx_citemacro_cite">[<a href="#bib.bib60" title="Hypothetical Outcome Plots Outperform Error Bars and Violin Plots for Inferences about Reliability of Variable Ordering" class="ltx_ref">12</a>, <a href="#bib.bib61" title="Hypothetical Outcome Plots Help Untrained Observers Judge Trends in Ambiguous Data" class="ltx_ref">16</a>]</cite>.
          However, these studies have also echoed concerns from Tversky et al. that animations are often too complex or fast to be perceived accurately — for instance, Robertson et al. found that animated trend visualizations are outperformed by static small multiples displays&nbsp;<cite class="ltx_cite ltx_citemacro_cite">[<a href="#bib.bib36" title="Effectiveness of Animation in Trend Visualization" class="ltx_ref">33</a>]</cite>.</p>
      </div>
      <div id="S2.SS1.p2" class="ltx_para">
        <p class="ltx_p">To ameliorate these limitations of animation, Tversky et al. suggest composing animation with interactivity, particularly through techniques that allow reinspection or focusing on subsets of depicted data.
          Robertson et al. began to probe this question by testing an interactive alternative alongside the static and animated stimuli — here, clicking an individual mark adds an overlaid line that depicts its trajectory over time.
          They find that although participants are no more accurate under this interactive condition, they perform faster when using this visualization for data analysis&nbsp;<cite class="ltx_cite ltx_citemacro_cite">[<a href="#bib.bib36" title="Effectiveness of Animation in Trend Visualization" class="ltx_ref">33</a>]</cite>.
          In follow-up work, Abukhodair et al.&nbsp;<cite class="ltx_cite ltx_citemacro_cite">[<a href="#bib.bib45" title="Does interactive animation control improve exploratory data analysis of animated trend visualization?" class="ltx_ref">1</a>]</cite> further contextualize Robertson’s results, finding that interactive animation can be effective and significantly more accurate than animation alone when users want to drill down into the data or have specific questions about points of interest.
          More recent results are similarly promising: in eye-tracking studies, Greussing et al.&nbsp;<cite class="ltx_cite ltx_citemacro_cite">[<a href="#bib.bib50" title="Learning From Science News via Interactive and Animated Data Visualizations: An Investigation Combining Eye Tracking, Online Survey, and Cued Retrospective Reporting" class="ltx_ref">10</a>]</cite> find that interactive animated graphics not only received more attention than static or interactive-only equivalents, but these charts also produced higher knowledge acquisition in participants.
          The authors believed that the enhanced affects on memory and performance resulted from an increase in engagement and attention on the visualization, which is in line with additional research on attention&nbsp;<cite class="ltx_cite ltx_citemacro_cite">[<a href="#bib.bib49" title="The relevance of attention for selecting news content. An eye-tracking study on attention patterns in the reception of print and online media" class="ltx_ref">3</a>]</cite>.
          Our work is motivated by these results. By providing a <emph class="ltx_emph ltx_font_italic">unified</emph> abstraction of interaction and animation, Animated Vega-Lite allows analysts to rapidly switch between the two modalities, or compose them together to best suit their needs.
          Moreover, as our abstractions preserve Vega-Lite’s generative properties, we believe our contribution lowers the threshold for conducting future such studies by allowing researchers to more systematically isolate, vary, and compare individual interaction and animation techniques.</p>
      </div>
    </section>
    <section id="S2.SS2" class="ltx_subsection">
      <h3 class="ltx_title ltx_title_subsection" id="H-S2.SS2">
        <span class="ltx_tag ltx_tag_subsection">2.2 </span>Authoring Interaction and Animation</h3>
      <div id="S2.SS2.p1" class="ltx_para">
        <p class="ltx_p">In <a href="#S3.SS1" title="3.1 Conceptually Bridging Interaction and Animation ‣ 3 Motivation: Unifying Interaction and Animation ‣ Animated Vega-Lite: Unifying Animation with a Grammar of Interactive Graphics" class="ltx_ref ltx_refmacro_autoref"><span class="ltx_text ltx_ref_tag">subsection&nbsp;3.1</span></a>, we describe the conceptual similarities between Animated Vega-Lite and Functional Reactive Programming (FRP).
          Moreover, in <a href="#S7" title="7 Evaluation: Critical Reflection ‣ Animated Vega-Lite: Unifying Animation with a Grammar of Interactive Graphics" class="ltx_ref ltx_refmacro_autoref"><span class="ltx_text ltx_ref_tag">section&nbsp;7</span></a> we conduct a detailed comparison between Animated Vega-Lite and gganimate&nbsp;<cite class="ltx_cite ltx_citemacro_cite">[<a href="#bib.bib48" title="Gganimate has transitioned to a state of release" class="ltx_ref">43</a>]</cite>, Data Animator&nbsp;<cite class="ltx_cite ltx_citemacro_cite">[<a href="#bib.bib93" title="Data Animator: Authoring Expressive Animated Data Graphics" class="ltx_ref">46</a>]</cite>, Gemini/Gemini<sup class="ltx_sup">2</sup>&nbsp;<cite class="ltx_cite ltx_citemacro_cite">[<a href="#bib.bib92" title="Gemini: A Grammar and Recommender System for Animated Transitions in Statistical Graphics" class="ltx_ref">19</a>, <a href="#bib.bib46" title="Gemini^2: Generating Keyframe-Oriented Animated Transitions Between Statistical Graphics" class="ltx_ref">18</a>]</cite>, and Canis/CAST&nbsp;<cite class="ltx_cite ltx_citemacro_cite">[<a href="#bib.bib91" title="Canis: A High-Level Language for Data-Driven Chart Animations" class="ltx_ref">9</a>, <a href="#bib.bib90" title="CAST: Authoring Data-Driven Chart Animations" class="ltx_ref">8</a>]</cite>.
          Here, we instead survey other systems for authoring interaction and animation that have informed our approach.</p>
      </div>
      <div id="S2.SS2.p2" class="ltx_para">
        <p class="ltx_p">Visualization toolkits such as D3&nbsp;<cite class="ltx_cite ltx_citemacro_cite">[<a href="#bib.bib35" title="D³ Data-Driven Documents" class="ltx_ref">2</a>]</cite>, Plotly&nbsp;<cite class="ltx_cite ltx_citemacro_cite">[<a href="#bib.bib69" title="Plotly Graphing Libraries" class="ltx_ref">31</a>]</cite>, and Matplotlib&nbsp;<cite class="ltx_cite ltx_citemacro_cite">[<a href="#bib.bib78" title="Matplotlib: A 2D Graphics Environment" class="ltx_ref">13</a>]</cite> offer a number of facilities for authoring and composing interaction and animation including typologies of techniques (e.g., brushing, hovering, and animation frames) through to event callbacks and transition functions.
          Technique typologies can help foster a rapid authoring process, allowing designers to easily instantiate common techniques, but also present a sharp <emph class="ltx_text ltx_font_italic">abstraction</emph> cliff&nbsp;<cite class="ltx_cite ltx_citemacro_cite">[<a href="#bib.bib62" title="Cognitive dimensions of notations" class="ltx_ref">44</a>]</cite>.
          If designers wish to produce more custom interaction or animation techniques, they must turn to an entirely different notation: authoring low-level, imperative event callbacks or transition functions.
          This abstraction cliff also increases the <emph class="ltx_text ltx_font_italic">viscosity</emph> of the authoring process&nbsp;<cite class="ltx_cite ltx_citemacro_cite">[<a href="#bib.bib62" title="Cognitive dimensions of notations" class="ltx_ref">44</a>]</cite>.
          For instance, to switch between the static, interactive, and animated displays of faceted data described in the introduction using D3 would involve restructuring the specification code in non-trivial ways — a problem that is exacerbated if HTML templates are used to generate the SVG rather than the <span class="ltx_text ltx_font_typewriter">d3-selection</span>, as is increasingly the case when working with modern frontend frameworks such as Svelte, Vue, or React.</p>
      </div>
      <div id="S2.SS2.p3" class="ltx_para">
        <p class="ltx_p">In contrast, Animated Vega-Lite, like its predecessor, prioritizes concise high-level declarative specification.
          As <a href="#S3" title="3 Motivation: Unifying Interaction and Animation ‣ Animated Vega-Lite: Unifying Animation with a Grammar of Interactive Graphics" class="ltx_ref ltx_refmacro_autoref"><span class="ltx_text ltx_ref_tag">section&nbsp;3</span></a> describes, users can make atomic edits (i.e., changing individual keywords, or adding a localized handful of lines of specification code) to rapidly explore designs across the three modalities.
          The tradeoff, however, is one of expressiveness.
          Animated Vega-Lite users are limited to composing language primitives; while these primitives are sufficient to broadly cover interaction and animation taxonomies (<a href="#S6" title="6 Evaluation: Example Gallery ‣ Animated Vega-Lite: Unifying Animation with a Grammar of Interactive Graphics" class="ltx_ref ltx_refmacro_autoref"><span class="ltx_text ltx_ref_tag">section&nbsp;6</span></a>), their expressive range will necessarily be smaller than their lower-level counterparts.</p>
      </div>
    </section>
  </section>
  <section id="S3" class="ltx_section">
    <h2 class="ltx_title ltx_title_section" id="H-S3">
      <span class="ltx_tag ltx_tag_section">3 </span>Motivation: Unifying Interaction and Animation</h2>
    <div id="S3.p1" class="ltx_para">
      <p class="ltx_p">In this section, we discuss similarities between interaction and animation that we observe.
        These similarities drive our design decisions, allowing us to extend Vega-Lite with only minimal additional language primitives, and yielding a low-viscosity grammar that makes it easy to switch between static, interactive and animated modalities.</p>
    </div>
    <figure id="S3.T1" class="ltx_table">
      <table class="ltx_tabular ltx_align_middle" style="width:433.6pt;">
        <tbody>
          <tr class="ltx_tr">
            <td class="ltx_td ltx_align_justify ltx_border_tt" style="padding-top:1.388888888888889px;padding-bottom:1.388888888888889px;">Example technique</td>
            <td class="ltx_td ltx_align_justify ltx_border_tt" style="padding-top:1.388888888888889px;padding-bottom:1.388888888888889px;">Interaction intent <cite class="ltx_cite ltx_align_left ltx_citemacro_cite">[<a href="#bib.bib9" title="Toward a Deeper Understanding of the Role of Interaction in Information Visualization" class="ltx_ref">51</a>]</cite>
            </td>
            <td class="ltx_td ltx_align_justify ltx_border_tt" style="padding-top:1.388888888888889px;padding-bottom:1.388888888888889px;">Animation type <cite class="ltx_cite ltx_align_left ltx_citemacro_cite">[<a href="#bib.bib5" title="Animated Transitions in Statistical Data Graphics" class="ltx_ref">11</a>]</cite>
            </td>
          </tr>
          <tr class="ltx_tr">
            <td class="ltx_td ltx_align_justify ltx_border_t" style="padding-top:1.388888888888889px;padding-bottom:1.388888888888889px;"><strong class="ltx_text ltx_align_left ltx_wrap ltx_font_bold">Conditional encoding</strong></td>
            <td class="ltx_td ltx_align_justify ltx_border_t" style="padding-top:1.388888888888889px;padding-bottom:1.388888888888889px;">Select</td>
            <td class="ltx_td ltx_align_justify ltx_border_t" style="padding-top:1.388888888888889px;padding-bottom:1.388888888888889px;">—</td>
          </tr>
          <tr class="ltx_tr">
            <td class="ltx_td ltx_align_justify" style="padding-top:1.388888888888889px;padding-bottom:1.388888888888889px;"><strong class="ltx_text ltx_align_left ltx_wrap ltx_font_bold">Panning</strong></td>
            <td class="ltx_td ltx_align_justify" style="padding-top:1.388888888888889px;padding-bottom:1.388888888888889px;">Explore</td>
            <td class="ltx_td ltx_align_justify" style="padding-top:1.388888888888889px;padding-bottom:1.388888888888889px;">View transformation</td>
          </tr>
          <tr class="ltx_tr">
            <td class="ltx_td ltx_align_justify" style="padding-top:1.388888888888889px;padding-bottom:1.388888888888889px;"><strong class="ltx_text ltx_align_left ltx_wrap ltx_font_bold">Zooming</strong></td>
            <td class="ltx_td ltx_align_justify" style="padding-top:1.388888888888889px;padding-bottom:1.388888888888889px;">Abstract / Elaborate</td>
            <td class="ltx_td ltx_align_justify" style="padding-top:1.388888888888889px;padding-bottom:1.388888888888889px;">View transformation</td>
          </tr>
          <tr class="ltx_tr">
            <td class="ltx_td ltx_align_justify" style="padding-top:1.388888888888889px;padding-bottom:1.388888888888889px;"><strong class="ltx_text ltx_align_left ltx_wrap ltx_font_bold">Axis re-scaling</strong></td>
            <td class="ltx_td ltx_align_justify" style="padding-top:1.388888888888889px;padding-bottom:1.388888888888889px;">Reconfigure</td>
            <td class="ltx_td ltx_align_justify" style="padding-top:1.388888888888889px;padding-bottom:1.388888888888889px;">Substrate transformation</td>
          </tr>
          <tr class="ltx_tr">
            <td class="ltx_td ltx_align_justify" style="padding-top:1.388888888888889px;padding-bottom:1.388888888888889px;"><strong class="ltx_text ltx_align_left ltx_wrap ltx_font_bold">Axis sorting</strong></td>
            <td class="ltx_td ltx_align_justify" style="padding-top:1.388888888888889px;padding-bottom:1.388888888888889px;">Reconfigure</td>
            <td class="ltx_td ltx_align_justify" style="padding-top:1.388888888888889px;padding-bottom:1.388888888888889px;">Ordering</td>
          </tr>
          <tr class="ltx_tr">
            <td class="ltx_td ltx_align_justify" style="padding-top:1.388888888888889px;padding-bottom:1.388888888888889px;"><strong class="ltx_text ltx_align_left ltx_wrap ltx_font_bold">Filtering</strong></td>
            <td class="ltx_td ltx_align_justify" style="padding-top:1.388888888888889px;padding-bottom:1.388888888888889px;">Filter</td>
            <td class="ltx_td ltx_align_justify" style="padding-top:1.388888888888889px;padding-bottom:1.388888888888889px;">Filtering</td>
          </tr>
          <tr class="ltx_tr">
            <td class="ltx_td ltx_align_justify" style="padding-top:1.388888888888889px;padding-bottom:1.388888888888889px;"><strong class="ltx_text ltx_align_left ltx_wrap ltx_font_bold">Enter/exit</strong></td>
            <td class="ltx_td ltx_align_justify" style="padding-top:1.388888888888889px;padding-bottom:1.388888888888889px;">Explore</td>
            <td class="ltx_td ltx_align_justify" style="padding-top:1.388888888888889px;padding-bottom:1.388888888888889px;">Timestep</td>
          </tr>
          <tr class="ltx_tr">
            <td class="ltx_td ltx_align_justify" style="padding-top:1.388888888888889px;padding-bottom:1.388888888888889px;"><strong class="ltx_text ltx_align_left ltx_wrap ltx_font_bold">Multi-view</strong></td>
            <td class="ltx_td ltx_align_justify" style="padding-top:1.388888888888889px;padding-bottom:1.388888888888889px;">Connect</td>
            <td class="ltx_td ltx_align_justify" style="padding-top:1.388888888888889px;padding-bottom:1.388888888888889px;">—</td>
          </tr>
          <tr class="ltx_tr">
            <td class="ltx_td ltx_align_justify ltx_border_bb" style="padding-top:1.388888888888889px;padding-bottom:1.388888888888889px;"><strong class="ltx_text ltx_align_left ltx_wrap ltx_font_bold">Changing encodings</strong></td>
            <td class="ltx_td ltx_align_justify ltx_border_bb" style="padding-top:1.388888888888889px;padding-bottom:1.388888888888889px;">Encode</td>
            <td class="ltx_td ltx_align_justify ltx_border_bb" style="padding-top:1.388888888888889px;padding-bottom:1.388888888888889px;">Visualization change, Data schema change</td>
          </tr>
        </tbody>
      </table>
      <figcaption class="ltx_caption"><span class="ltx_tag ltx_tag_table">Table 1: </span>Techniques common to interaction and animation taxonomies.</figcaption>
    </figure>
    <section id="S3.SS1" class="ltx_subsection">
      <h3 class="ltx_title ltx_title_subsection" id="H-S3.SS1">
        <span class="ltx_tag ltx_tag_subsection">3.1 </span>Conceptually Bridging Interaction and Animation</h3>
      <div id="S3.SS1.p1" class="ltx_para">
        <p class="ltx_p">We observe that interaction and animation share conceptual similarities at both low and high levels of abstraction.
          At a low level of abstraction, Functional Reactive Programming (FRP) languages like Flapjax&nbsp;<cite class="ltx_cite ltx_citemacro_cite">[<a href="#bib.bib73" title="Flapjax: a programming language for Ajax applications" class="ltx_ref">25</a>]</cite> and Fran&nbsp;<cite class="ltx_cite ltx_citemacro_cite">[<a href="#bib.bib74" title="Functional reactive animation" class="ltx_ref">7</a>]</cite>, as well as FRP-based visualization toolkits like Vega&nbsp;<cite class="ltx_cite ltx_citemacro_cite">[<a href="#bib.bib34" title="Reactive Vega: A Streaming Dataflow Architecture for Declarative Interactive Visualization" class="ltx_ref">37</a>]</cite>, have shown that interaction and animation can both be modeled as <emph class="ltx_text ltx_font_italic">event streams</emph>.
          The Vega example gallery demonstrates how this unified abstraction offers <emph class="ltx_text ltx_font_italic">consistency</emph>, with similar semantics expressed through similar syntactic forms&nbsp;<cite class="ltx_cite ltx_citemacro_cite">[<a href="#bib.bib62" title="Cognitive dimensions of notations" class="ltx_ref">44</a>]</cite>.
          Namely, the gallery recreates the Gapminder global health scatter plot, originally an animated visualization produced by Hans Rosling&nbsp;<cite class="ltx_cite ltx_citemacro_cite">[<a href="#bib.bib43" title="The best stats you’ve ever seen" class="ltx_ref">34</a>]</cite>, but as an interactive visualization driven by the DimpVis direct manipulation technique&nbsp;<cite class="ltx_cite ltx_citemacro_cite">[<a href="#bib.bib86" title="DimpVis: Exploring Time-varying Information Visualizations by Direct Manipulation" class="ltx_ref">20</a>]</cite>.
          We observe that, although it would be tedious to do manually, a user could convert this interactive visualization back to the original animated one by replacing signals near the top of the dataflow, which react to incoming drag events, with signals that respond to timer events instead: where these signals map the drag event’s position to a year value, the timer signals would simply emit the next year value on each event.
          The rest of the downstream reactive logic would remain unchanged.
          However, as the Vega authors found&nbsp;<cite class="ltx_cite ltx_citemacro_cite">[<a href="#bib.bib33" title="Declarative interaction design for data visualization" class="ltx_ref">38</a>]</cite>, additional language design is necessary to ensure FRP primitives compose together with grammar of graphics constructs and to facilitate higher-level authoring of dynamic visualizations.
        </p>
      </div>
      <figure id="S3.F1" class="ltx_figure"><img src="x16.png" id="S3.F1.g1" class="ltx_graphics ltx_centering" width="1081" height="380" alt="An analyst’s workflow with Animated Vega-lite. A) Static visualization of bird migrations. B) Adding interaction to hover over a migration path and view a tooltip. C) Switching from static lines to animated circle marks. D) Adding animated path trails for the previous 5 days. E) Adding an interactive slider to scrub through the animation.">
        <figcaption class="ltx_caption ltx_centering"><span class="ltx_tag ltx_tag_figure">Figure 1: </span>An analyst’s workflow with Animated Vega-lite. A) Static visualization of bird migrations. B) Adding interaction to hover over a migration path and view a tooltip. C) Switching from static lines to animated circle marks. D) Adding animated path trails for the previous 5 days. E) Adding an interactive slider to scrub through the animation.</figcaption>
      </figure>
      <div id="S3.SS1.p2" class="ltx_para">
        <p class="ltx_p">To analyze conceptual similarities between interaction and animation at a higher-level of abstraction, we look to <span class="ltx_text" style="background-color:#E6FFF5;">Yi et al.</span>&nbsp;<cite class="ltx_cite ltx_citemacro_cite">[<a href="#bib.bib9" title="Toward a Deeper Understanding of the Role of Interaction in Information Visualization" class="ltx_ref">51</a>]</cite> and <span class="ltx_text" style="background-color:#FFFFCC;">Heer and Robertson</span>&nbsp;<cite class="ltx_cite ltx_citemacro_cite">[<a href="#bib.bib5" title="Animated Transitions in Statistical Data Graphics" class="ltx_ref">11</a>]</cite> that taxonomize techniques for each modality respectively.
          These taxonomies are defined by drawing on example visualizations, and although they have been defined separately, share many motivating techniques (<a href="#S3.T1" title="Table 1 ‣ 3 Motivation: Unifying Interaction and Animation ‣ Animated Vega-Lite: Unifying Animation with a Grammar of Interactive Graphics" class="ltx_ref ltx_refmacro_autoref"><span class="ltx_text ltx_ref_tag">Table&nbsp;1</span></a>).
          For example, Heer and Robertson cite panning as an example of <emph class="ltx_text ltx_font_italic" style="color:#000000;background-color:#FFFFCC;">view transformation</emph> because it changes the reader’s viewpoint while leaving data schemas and encodings intact. Yi et al. also consider panning, categorizing it as an example of an <emph class="ltx_text ltx_font_italic" style="color:#000000;background-color:#E6FFF5;">explore</emph> interaction, because it involves showing a new subset of data as points shift in and out of the viewport.
          Zooming, another example of <emph class="ltx_text ltx_font_italic" style="color:#000000;background-color:#FFFFCC;">view transformation</emph>, is also described as an <emph class="ltx_text ltx_font_italic" style="color:#000000;background-color:#E6FFF5;">abstract/elaborate</emph> interaction because it can be used to show data at different levels of detail.
          As we show in <a href="#S3.T1" title="Table 1 ‣ 3 Motivation: Unifying Interaction and Animation ‣ Animated Vega-Lite: Unifying Animation with a Grammar of Interactive Graphics" class="ltx_ref ltx_refmacro_autoref"><span class="ltx_text ltx_ref_tag">Table&nbsp;1</span></a>, we observe substantial overlap in techniques referenced by both taxonomies.
          Though <emph class="ltx_text ltx_font_italic" style="color:#000000;background-color:#E6FFF5;">select</emph> interactions lack an explicitly defined corresponding animation type, conditional encoding is a commonly used technique in animated visualizations.
          Similarly, though there is no corresponding category in Heer and Robertson’s taxonomy for <emph class="ltx_text ltx_font_italic" style="color:#000000;background-color:#E6FFF5;">connect</emph> interactions, animations applied to shared backing data across multiple views can fulfill the same purpose of highlighting relationships between related points.</p>
      </div>
    </section>
    <section id="S3.SS2" class="ltx_subsection">
      <h3 class="ltx_title ltx_title_subsection" id="H-S3.SS2">
        <span class="ltx_tag ltx_tag_subsection">3.2 </span>Low-Viscous Authoring: An Example Usage Scenario</h3>
      <div id="S3.SS2.p1" class="ltx_para">
        <p class="ltx_p">A unified abstraction for static, interaction and animation also promotes a low-viscous authoring process (i.e., being able to easily switch between modalities, or compose them together).
          To illustrate the affordances of this approach, we present an example walkthrough following Imani, an orthonologist, as she plans a new birdwatching expedition.
          Imani has a bird migration dataset comprising the average latitudes and longitudes for a variety of bird species, for every day of the year<cite class="ltx_cite ltx_citemacro_cite">[<a href="#bib.bib52" title="Convergence of broad-scale migration strategies in terrestrial birds" class="ltx_ref">21</a>]</cite>.
          To ensure a productive trip, Imani wants uncover how migration patterns correspond to different times of the year and geographic regions.</p>
      </div>
      <div id="S3.SS2.p2" class="ltx_para">
        <p class="ltx_p"><strong class="ltx_text ltx_font_bold">Static (<a href="#S3.F1" title="Figure 1 ‣ 3.1 Conceptually Bridging Interaction and Animation ‣ 3 Motivation: Unifying Interaction and Animation ‣ Animated Vega-Lite: Unifying Animation with a Grammar of Interactive Graphics" class="ltx_ref ltx_refmacro_autoref"><span class="ltx_text ltx_ref_tag">Figure&nbsp;1</span></a>A).</strong> Imani begins her analysis with a static visualization to get an overview of the dataset.
          She plots a map, and visualizes migration paths using line marks: each bird species is depicted as a single, uniquely-colored line, connecting the individual daily points along their given latitudes and longitudes.
          However, Imani is quickly overwhelmed as the size of the dataset produces too many overlapping lines for this static view to be useful, even after adjusting mark opacity.</p>
      </div>
      <div id="S3.SS2.p3" class="ltx_para">
        <p class="ltx_p"><strong class="ltx_text ltx_font_bold">Interactive (<a href="#S3.F1" title="Figure 1 ‣ 3.1 Conceptually Bridging Interaction and Animation ‣ 3 Motivation: Unifying Interaction and Animation ‣ Animated Vega-Lite: Unifying Animation with a Grammar of Interactive Graphics" class="ltx_ref ltx_refmacro_autoref"><span class="ltx_text ltx_ref_tag">Figure&nbsp;1</span></a>B).</strong> To pick out individual bird species, and begin a cycle of generating and answering hypotheses, Imani thinks to layer some interactivity on the static display.
          She adds a <emph class="ltx_emph ltx_font_italic">point selection</emph> named <span class="ltx_text ltx_font_typewriter">highlight</span> and driven by <emph class="ltx_emph ltx_font_italic">mouseover</emph> events.
          By default this selection is populated with the data tuple underneath the mouse cursor, and additional tuples are added or toggled when the <span class="ltx_text ltx_font_typewriter">shift</span> modifier key is pressed.
          Imani writes a <emph class="ltx_text ltx_font_italic">conditional encoding</emph> to interactively adjust mark appearance: selected paths are drawn at full opacity and in a larger size, while unselected paths are drawn with lower opacity and at a smaller size.
          Thus, as Imani moves her mouse across the visualization, she is able to better trace individual paths, and she adds a <emph class="ltx_emph ltx_font_italic">tooltip</emph> encoding channel to surface and note species’ names.
        </p>
      </div>
      <div id="S3.SS2.p4" class="ltx_para">
        <p class="ltx_p">This interactive view gives Imani a better sense of migration paths.
          But, to be able to plan her expedition, she needs to understand where different bird species may be on any given day.
          Until this point, Imani has used vanilla Vega-Lite abstractions. In the subsequent steps, we show how features of Animated Vega-Lite help Imani deepen her analysis.</p>
      </div>
      <div id="S3.SS2.p5" class="ltx_para">
        <p class="ltx_p"><strong class="ltx_text ltx_font_bold">Time Encoding Channel (<a href="#S3.F1" title="Figure 1 ‣ 3.1 Conceptually Bridging Interaction and Animation ‣ 3 Motivation: Unifying Interaction and Animation ‣ Animated Vega-Lite: Unifying Animation with a Grammar of Interactive Graphics" class="ltx_ref ltx_refmacro_autoref"><span class="ltx_text ltx_ref_tag">Figure&nbsp;1</span></a>C).</strong>
          Imani swaps to a circle mark and maps <span class="ltx_text ltx_font_typewriter">day</span> (a field that encodes the day of the year from 0 to 365) to the new <emph class="ltx_emph ltx_font_italic">time encoding channel</emph>.
          With these two edits, each bird species is drawn as a circle indicating its location on a particular day, and the visualization animates through <span class="ltx_text ltx_font_typewriter">day</span> values.
          Imani can now follow the path bird species travel over the course of a year.
        </p>
      </div>
      <div id="S3.SS2.p6" class="ltx_para">
        <p class="ltx_p"><strong class="ltx_text ltx_font_bold">Time Event Stream (<a href="#S3.F1" title="Figure 1 ‣ 3.1 Conceptually Bridging Interaction and Animation ‣ 3 Motivation: Unifying Interaction and Animation ‣ Animated Vega-Lite: Unifying Animation with a Grammar of Interactive Graphics" class="ltx_ref ltx_refmacro_autoref"><span class="ltx_text ltx_ref_tag">Figure&nbsp;1</span></a>D).</strong> Imani, however, is keenly aware that her dataset only contains average values for each species. Birds tend to appear at a given location within a small window of time around the average day in the dataset.
          Thus, to ensure she does not make an erroneous conclusion, Imani wants to visualize this variability as a path trail.
          To do so, she adds a new point selection named <span class="ltx_text ltx_font_typewriter">spread_window</span>, which contains a custom <emph class="ltx_emph ltx_font_italic">predicate</emph> — a function that identifies which data tuples should be considered as falling within the selection.
          In this case, Imani writes a predicate to select data from the five days previous to the current day. She does this by writing inequality expressions referencing the reserved name <span class="ltx_text ltx_font_typewriter">anim_value</span>, which stores the current data value of the animation.
          In contrast to the existing <span class="ltx_text ltx_font_typewriter">highlight</span> point selection, which is updated on user input events, <span class="ltx_text ltx_font_typewriter">spread_window</span> is instead populated and re-populated on every <emph class="ltx_text ltx_font_italic">timer</emph> tick.
          She uses <span class="ltx_text ltx_font_typewriter">spread_window</span> to dynamically filter the circle marks, ensuring only data values that lie within the selection are displayed and animated.
          To visually distinguish the current day’s points, she also elaborates the time encoding into an explicit selection called <span class="ltx_text ltx_font_typewriter">current_frame</span> and uses it to drive a conditional opacity encoding.
          She renders current points at full opacity while rendering the trailing points at less opacity.</p>
      </div>
      <figure id="S3.F2" class="ltx_figure"><img src="x17.png" id="S3.F2.g1" class="ltx_graphics ltx_centering" width="1026" height="288" alt="Animated Vega-Lite specification of the influential Gapminder animation ">
        <figcaption class="ltx_caption ltx_centering"><span class="ltx_tag ltx_tag_figure">Figure 2: </span>Animated Vega-Lite specification of the influential Gapminder animation <cite class="ltx_cite ltx_citemacro_cite">[<a href="#bib.bib43" title="The best stats you’ve ever seen" class="ltx_ref">34</a>]</cite>. (A) A minimal specification using only time encoding. (B) The same specification elaborated to show default encoding properties and a default selection. (C) Selected keyframes from the resulting animation.</figcaption>
      </figure>
      <div id="S3.SS2.p7" class="ltx_para">
        <p class="ltx_p"><strong class="ltx_text ltx_font_bold">Composing Interaction + Animation (<a href="#S3.F1" title="Figure 1 ‣ 3.1 Conceptually Bridging Interaction and Animation ‣ 3 Motivation: Unifying Interaction and Animation ‣ Animated Vega-Lite: Unifying Animation with a Grammar of Interactive Graphics" class="ltx_ref ltx_refmacro_autoref"><span class="ltx_text ltx_ref_tag">Figure&nbsp;1</span></a>E).</strong> While watching this path-trail animation, Imani notices that a cluster of birds appear to visit Pensacola, Florida during late March and notes this region as a potential location for her expedition.
          However, before she lets her colleagues know, she wants to investigate the migration patterns of the birds that come through the area — if these species tend to co-locate in other parts of the world, there is less of a reason for birders to travel to Pensacola specifically.
          To answer this question, Imani needs finer control over the animation state.
          She binds the <span class="ltx_text ltx_font_typewriter">current_frame</span> selection to an interactive range slider, and can now toggle between animating and interactively sliding the <span class="ltx_text ltx_font_typewriter">day</span> field.
          She scrubs the slider to the day when the birds pass through Pensacola, and to track these species in the visualization, she modifies the interactive <span class="ltx_text ltx_font_typewriter">highlight</span> selection to fire on click instead of hover.
          Imani multi-selects (i.e., clicking with the <span class="ltx_text ltx_font_typewriter">shift</span> key pressed) the birds that pass through the area, and then scrubs to a different day.
          Here Imani can see that these birds come from 5 unique nesting sites across the mid-west US to eastern Canada.
          This is promising as it indicates that these species uniquely overlap in Pensacola, making it a prime viewing destination.
        </p>
      </div>
      <div id="S3.SS2.p8" class="ltx_para">
        <p class="ltx_p"><strong class="ltx_text ltx_font_bold">Summary.</strong> With Animated Vega-Lite, Imani was able to move between static, interactive, and animated visualizations through a series of atomic edits or otherwise localized changes rather than larger-scale refactoring or restructuring of code.
          Moreover, we have extended Vega-Lite’s high-level affordances to animation: Imani was able to express animation as data selections and transformations,
          rather than manipulating keyframes or specifying transition states; and, the Animated Vega-Lite compiler synthesized appropriate defaults and underlying machinery for the animation to unfold correctly.
          Finally, as Animated Vega-Lite offers a unified abstraction, Imani was able to reuse Vega-Lite’s existing primitives to author mixed interactive-animated visualizations as well as custom techniques without the need for special-purpose functions — e.g., combining animations with on-click highlighting and composing selections with a window data transform to draw trailing marks, rather than using a <span class="ltx_text ltx_font_typewriter">shadow</span> function as with gganimate.
        </p>
      </div>
    </section>
  </section>
  <section id="S4" class="ltx_section">
    <h2 class="ltx_title ltx_title_section" id="H-S4">
      <span class="ltx_tag ltx_tag_section">4 </span>A Grammar of Animation in Vega-Lite</h2>
    <div id="S4.p1" class="ltx_para">
      <p class="ltx_p">In Animated Vega-Lite, users specify animation using a <emph class="ltx_text ltx_font_italic">time encoding channel</emph> and <emph class="ltx_text ltx_font_italic">timer-driven selections</emph>.
        Time encodings provide a light-weight way to convert faceted static visualizations into animations.
        To further customize the animation design or easily add interaction, users can specify animations as selections instead.
        Selections express dynamic data queries, and are now populated either by input events (as with vanilla Vega-Lite) or, now, via timer ticks.
        Defined selections can then be used to drive data transformations, scale functions, or conditionally encode visual properties.
        Our animation model expressively extends existing abstractions for static and interactive visualizations while minimally increasing language surface area and complexity.</p>
    </div>
    <section id="S4.SS1" class="ltx_subsection">
      <h3 class="ltx_title ltx_title_subsection" id="H-S4.SS1">
        <span class="ltx_tag ltx_tag_subsection">4.1 </span>Time Encoding Channel</h3>
      <div id="S4.SS1.p1" class="ltx_para">
        <p class="ltx_p">In Vega-Lite, encodings determine how data values map to the visual properties of a mark (also known as channels).
          Vega-Lite includes two channels for spatial position, <span class="ltx_text ltx_font_typewriter">x</span> and <span class="ltx_text ltx_font_typewriter">y</span>.
          Animated Vega-Lite adds a new channel for temporal position, called <span class="ltx_text ltx_font_typewriter">time</span>.
          A user specifies a time encoding by providing a <span class="ltx_text ltx_font_typewriter">field</span> property, which is a string of the name of a data column.
          The field can be any measure type with a sort order (quantitative, temporal, ordinal), and does not necessarily need to represent a timestamp.
          The system uses distinct values from this column to group data rows into temporal facets called <emph class="ltx_text ltx_font_italic">keyframes</emph>.
          Over the duration of the animation, each keyframe is shown sequentially.</p>
      </div>
      <div id="S4.SS1.p2" class="ltx_para">
        <p class="ltx_p">Fig.&nbsp;<a href="#S3.F2" title="Figure 2 ‣ 3.2 Low-Viscous Authoring: An Example Usage Scenario ‣ 3 Motivation: Unifying Interaction and Animation ‣ Animated Vega-Lite: Unifying Animation with a Grammar of Interactive Graphics" class="ltx_ref"><span class="ltx_text ltx_ref_tag">2</span></a>A shows the Animated Vega-Lite specification for Rosling’s Gapminder animation <cite class="ltx_cite ltx_citemacro_cite">[<a href="#bib.bib43" title="The best stats you’ve ever seen" class="ltx_ref">34</a>]</cite>.
          The time encoding, highlighted in yellow, maps the dataset’s <span class="ltx_text ltx_font_typewriter">year</span> field to the time encoding channel.
          The system uses the distinct values of <span class="ltx_text ltx_font_typewriter">year</span> to group rows into keyframes.
          In other words, there is one keyframe per possible value of <span class="ltx_text ltx_font_typewriter">year</span> in the dataset (i.e. <span class="ltx_text ltx_font_typewriter">1955, 1960, 1965, ..., 2005</span>) (Fig.&nbsp;<a href="#S3.F2" title="Figure 2 ‣ 3.2 Low-Viscous Authoring: An Example Usage Scenario ‣ 3 Motivation: Unifying Interaction and Animation ‣ Animated Vega-Lite: Unifying Animation with a Grammar of Interactive Graphics" class="ltx_ref"><span class="ltx_text ltx_ref_tag">2</span></a>C).</p>
      </div>
      <section id="S4.SS1.SSS1" class="ltx_subsubsection">
        <h4 class="ltx_title ltx_title_subsubsection" id="H-S4.SS1.SSS1">
          <span class="ltx_tag ltx_tag_subsubsection">4.1.1 </span>Key Field</h4>
        <div id="S4.SS1.SSS1.p1" class="ltx_para">
          <p class="ltx_p">In-betweening, more commonly called <emph class="ltx_text ltx_font_italic">tweening</emph>, is a standard animation technique that involves generating additional frames to smoothly transition between two keyframes.
            By adding tweening, the animation will give the visual impression of continuous change over time even when data represents discrete measurements.
            In data visualization, tweening takes on additional meaning as it requires generating and interpolating between values that are not present in the dataset.
            In Animated Vega-Lite, to specify tweening between keyframes, the user specifies a <span class="ltx_text ltx_font_typewriter">key</span> property in the time encoding channel, which references a field name.
            This key field is used to group rows together across keyframes.
            For two given successive keyframes, rows that share the same value for the key field are treated as the start and end states for a single mark instance.
            Key values should be unique within a keyframe to prevent ambiguity; otherwise, a single mark instance might have multiple start or end states, resulting in undefined behavior.
            If the user does not specify a key field, the Animated Vega-Lite compiler attempts to infer a sensible default based on the mark type and other specified categorical channels such as <span class="ltx_text ltx_font_typewriter">color</span> or <span class="ltx_text ltx_font_typewriter">detail</span> — an approach that follows Vega-Lite’s existing inferences.</p>
        </div>
        <div id="S4.SS1.SSS1.p2" class="ltx_para">
          <p class="ltx_p">In the Gapminder example, Fig.&nbsp;<a href="#S3.F2" title="Figure 2 ‣ 3.2 Low-Viscous Authoring: An Example Usage Scenario ‣ 3 Motivation: Unifying Interaction and Animation ‣ Animated Vega-Lite: Unifying Animation with a Grammar of Interactive Graphics" class="ltx_ref"><span class="ltx_text ltx_ref_tag">2</span></a>B shows the Gapminder spec from Fig.&nbsp;<a href="#S3.F2" title="Figure 2 ‣ 3.2 Low-Viscous Authoring: An Example Usage Scenario ‣ 3 Motivation: Unifying Interaction and Animation ‣ Animated Vega-Lite: Unifying Animation with a Grammar of Interactive Graphics" class="ltx_ref"><span class="ltx_text ltx_ref_tag">2</span></a>A with default values specified explicitly.
            Here, <span class="ltx_text ltx_font_typewriter">country</span> is used as the default key field as it is also encoded on the <span class="ltx_text ltx_font_typewriter">color</span> encoding channel.
            Consider the successive keyframes with <span class="ltx_text ltx_font_typewriter">year</span> values 1955 and 1960.
            For each year, each scatterplot point is identified by a unique <span class="ltx_text ltx_font_typewriter">country</span> value.
            Therefore, to tween from 1955 to 1960, the system interpolates the two rows for each country to produce the corresponding in-between point at each animation frame.</p>
        </div>
      </section>
      <section id="S4.SS1.SSS2" class="ltx_subsubsection">
        <h4 class="ltx_title ltx_title_subsubsection" id="H-S4.SS1.SSS2">
          <span class="ltx_tag ltx_tag_subsubsection">4.1.2 </span>Time Scale</h4>
        <div id="S4.SS1.SSS2.p1" class="ltx_para">
          <p class="ltx_p">An encoding uses a scale function to map from the data domain to a visual range.
            For spatial encoding channels, this range is measured in pixels relative to the bounding box of the rendered visualization.
            For the time encoding channel, we measure the range in milliseconds elapsed from the start of the animation.
            Users specify the timing of the animation using a time scale (for example, by specifying either an overall animation duration or the amount of time between keyframes as a <span class="ltx_text ltx_font_typewriter">step</span>).
            As with existing encoding channels, if a scale is not specified by the user, Vega-Lite infers default scale properties.
            By default, scales for the time encoding channel use the unique values of the backing field as the scale domain, and create a default step range with 500ms per domain value.
            For example, the Gapminder domain is a list of every fifth year between 1955 and 2005, inclusive.
            The default range maps 1955 to 0ms, 1960 to 500ms, 1965 to 1000ms, and so on.
            A user can override this default range to slow down or speed up the animation.</p>
        </div>
        <div id="S4.SS1.SSS2.p2" class="ltx_para">
          <p class="ltx_p">Though the default domain is sufficient to express most common animations, a user may want to override the domain.
            Supplying a custom domain is useful for specifying non-keyframe-based animations that require direct reference to in-between values, or require animating through values that are missing from the dataset.
            For example, Fig.&nbsp;<a href="#S4.F3" title="Figure 3 ‣ 4.1.2 Time Scale ‣ 4.1 Time Encoding Channel ‣ 4 A Grammar of Animation in Vega-Lite ‣ Animated Vega-Lite: Unifying Animation with a Grammar of Interactive Graphics" class="ltx_ref"><span class="ltx_text ltx_ref_tag">3</span></a> shows an example of such a use case.
            The animation should advance through 24-hour time span at a constant rate.
            However, the dataset does not contain a field that has values that are evenly spaced in the desired domain.
            So, with a default scale domain, the animation would appear to jump between time stamps rather than move through them smoothly.
            To achieve the desired behavior, the user instead specifies a custom domain representing the continuous interval between 00:00 and 23:30.</p>
        </div>
        <figure id="S4.F3" class="ltx_figure"><img src="x18.png" id="S4.F3.g1" class="ltx_graphics ltx_centering" width="1081" height="592" alt="Animation of Dunkin’ Donuts stores’ opening and closing times. With a custom domain and predicate, the animation advances through 24 hours at a constant rate and conditionally colors each store if the current time is between the store’s open and close times.">
          <figcaption class="ltx_caption ltx_centering"><span class="ltx_tag ltx_tag_figure">Figure 3: </span>Animation of Dunkin’ Donuts stores’ opening and closing times. With a custom domain and predicate, the animation advances through 24 hours at a constant rate and conditionally colors each store if the current time is between the store’s open and close times.</figcaption>
        </figure>
      </section>
      <section id="S4.SS1.SSS3" class="ltx_subsubsection">
        <h4 class="ltx_title ltx_title_subsubsection" id="H-S4.SS1.SSS3">
          <span class="ltx_tag ltx_tag_subsubsection">4.1.3 </span>Re-scale</h4>
        <div id="S4.SS1.SSS3.p1" class="ltx_para">
          <p class="ltx_p">By default, the visualization’s data rectangle (or viewport) is fixed to the initial extents of the x- and y-scales calculated from the full dataset.
            However, for keyframe animations, only a subset of data is shown at any given time.
            If a user wants to re-calculate the viewport bounds based on only the data included in the current keyframe, rather than the original full dataset, they can set a flag in the time encoding called <span class="ltx_text ltx_font_typewriter">rescale</span>.
            When <span class="ltx_text ltx_font_typewriter">rescale</span> is <span class="ltx_text ltx_font_typewriter">true</span>, the viewport’s bounds are recomputed at each step of the animation.
            We refer to this concept as re-scaling because re-calcuating the viewport bounds involves updating the domains of the <span class="ltx_text ltx_font_typewriter">x</span> and <span class="ltx_text ltx_font_typewriter">y</span> scales at each keyframe.</p>
        </div>
        <div id="S4.SS1.SSS3.p2" class="ltx_para">
          <p class="ltx_p">Fig.&nbsp;<a href="#S4.F4" title="Figure 4 ‣ 4.1.3 Re-scale ‣ 4.1 Time Encoding Channel ‣ 4 A Grammar of Animation in Vega-Lite ‣ Animated Vega-Lite: Unifying Animation with a Grammar of Interactive Graphics" class="ltx_ref"><span class="ltx_text ltx_ref_tag">4</span></a> demonstrates the use of <span class="ltx_text ltx_font_typewriter">rescale</span>. Rescale is enabled in Fig.&nbsp;<a href="#S4.F4" title="Figure 4 ‣ 4.1.3 Re-scale ‣ 4.1 Time Encoding Channel ‣ 4 A Grammar of Animation in Vega-Lite ‣ Animated Vega-Lite: Unifying Animation with a Grammar of Interactive Graphics" class="ltx_ref"><span class="ltx_text ltx_ref_tag">4</span></a>A, where the viewport updates according to the current selection. The visualization remains tightly zoomed on the currently displayed bars, with the longest bar always scaled to nearly the full width of the viewport.
            In contrast, Fig.&nbsp;<a href="#S4.F4" title="Figure 4 ‣ 4.1.3 Re-scale ‣ 4.1 Time Encoding Channel ‣ 4 A Grammar of Animation in Vega-Lite ‣ Animated Vega-Lite: Unifying Animation with a Grammar of Interactive Graphics" class="ltx_ref"><span class="ltx_text ltx_ref_tag">4</span></a>B has rescaling disabled. The viewport is initially calculated with the full dataset and remains fixed. This would be appropriate for Gapminder, because we want to show the countries moving along a fixed scale.
            However, it is less helpful for bar chart race.
            Instead of enabling positional comparisons to a fixed scale, the animation prioritizes making the ordering of the top-ranked bars salient.
          </p>
        </div>
        <figure id="S4.F4" class="ltx_figure"><img src="x19.png" id="S4.F4.g1" class="ltx_graphics ltx_centering" width="1026" height="224" alt="Demonstration of the ">
          <figcaption class="ltx_caption ltx_centering"><span class="ltx_tag ltx_tag_figure">Figure 4: </span>Demonstration of the <emph class="ltx_text ltx_font_italic">rescale</emph> time encoding property recreating a D3 bar chart race example&nbsp;<cite class="ltx_cite ltx_citemacro_cite">[<a href="#bib.bib64" title="Bar Chart Race, Explained" class="ltx_ref">27</a>]</cite>. (A) <span class="ltx_text ltx_font_typewriter">rescale</span> is <span class="ltx_text ltx_font_typewriter">true</span>: the viewport is recalculated on each keyframe. (B) <span class="ltx_text ltx_font_typewriter">rescale</span> is <span class="ltx_text ltx_font_typewriter">false</span>: the viewport is calculated on the whole dataset, and does not update with the selection.</figcaption>
        </figure>
      </section>
    </section>
    <section id="S4.SS2" class="ltx_subsection">
      <h3 class="ltx_title ltx_title_subsection" id="H-S4.SS2">
        <span class="ltx_tag ltx_tag_subsection">4.2 </span>Selections with a Timer Event Stream</h3>
      <div id="S4.SS2.p1" class="ltx_para">
        <p class="ltx_p"><emph class="ltx_text ltx_font_italic">Selections</emph> are subsets of data points that are populated when updates occur in an <emph class="ltx_text ltx_font_italic">event stream</emph>.
          In Vega-Lite’s interactive grammar, selections are defined using streams of user input events (e.g., clicks, mouse movements, or keyboard presses).
          The system uses the event’s properties to query a set of data points.
          The selected data can then be applied to update downstream primitives in the visualization specification including data transformations, scale functions, or conditional visual encodings.
          For example, a selection defined using the <span class="ltx_text ltx_font_typewriter">mouseover</span> event may be used to highlight marks that a user hovers over with their cursor.
          Under the hood, the selection receives a stream of <span class="ltx_text ltx_font_typewriter">mouseover</span> events with <span class="ltx_text ltx_font_typewriter">x</span> and <span class="ltx_text ltx_font_typewriter">y</span> coordinates in pixels.
          It uses the scales associated with the <span class="ltx_text ltx_font_typewriter">x</span> and <span class="ltx_text ltx_font_typewriter">y</span> encoding channels to invert these screen coordinates back to data coordinates (i.e. values in the domain of the corresponding scale).
          A default predicate function iterates over all rows in the dataset, and includes the rows matching those data values in the selection.</p>
      </div>
      <div id="S4.SS2.p2" class="ltx_para">
        <p class="ltx_p">Animated selections are analogous to interactive selections.
          However, instead of reacting to input events, animated selections use a <span class="ltx_text ltx_font_typewriter">timer</span> event stream to advance an internal clock representing the elapsed time of the animation in milliseconds (ms).
          This clock resets to 0ms when it reaches the end of the range defined by the time encoding’s scale (i.e. the animation loops the duration of the time scale’s range).
          As the clock updates, the elapsed time value is mapped to a value in the time domain (i.e. the time encoding’s field values).
          The animation selection updates to include all data points matching that value.</p>
      </div>
      <div id="S4.SS2.p3" class="ltx_para">
        <p class="ltx_p">As selections rely on scales to convert map time to data values, selection-based animations still require a time encoding channel to be defined.
          In fact, all animations that can be expressed with only a time encoding can be elaborated into selection-based animations.
          In other words, selection-based animations are strictly more expressive than animations using only time encoding.
        </p>
      </div>
      <section id="S4.SS2.SSS1" class="ltx_subsubsection">
        <h4 class="ltx_title ltx_title_subsubsection" id="H-S4.SS2.SSS1">
          <span class="ltx_tag ltx_tag_subsubsection">4.2.1 </span>Applying Selections</h4>
        <div id="S4.SS2.SSS1.p1" class="ltx_para">
          <p class="ltx_p">In Vega-Lite, selections can be applied to other language constructs, including conditional mark encodings, scale domains, or data transformations <cite class="ltx_cite ltx_citemacro_cite">[<a href="#bib.bib56" title="Lyra 2: Designing Interactive Visualizations by Demonstration" class="ltx_ref">52</a>]</cite>.
            This property of composition continues to hold with Animated Vega-Lite: animated and interactive selections can be used interchangeably wherever selections are supported in the Vega-Lite language.
            Therefore, selections driven by timer events inherit the expressiveness of interactive selections in terms of Yi et al.’s taxonomy of interaction techniques&nbsp;<cite class="ltx_cite ltx_citemacro_cite">[<a href="#bib.bib9" title="Toward a Deeper Understanding of the Role of Interaction in Information Visualization" class="ltx_ref">51</a>]</cite>.
            Animations can be used to: <emph class="ltx_text ltx_font_italic">select</emph> marks of interest; <emph class="ltx_text ltx_font_italic">explore</emph> subsets of data (panning and zooming); <emph class="ltx_text ltx_font_italic">reconfigure</emph> data into different transformed states, <emph class="ltx_text ltx_font_italic">connect</emph> related items; <emph class="ltx_text ltx_font_italic">abstract/elaborate</emph> through overview and detail; and <emph class="ltx_text ltx_font_italic">filter</emph> data dynamically.
            However, they cannot be used to change the properties of visual encodings on the fly, which is an interaction technique that falls outside of the selection-based model and is a limitation of base Vega-Lite.</p>
        </div>
      </section>
      <section id="S4.SS2.SSS2" class="ltx_subsubsection">
        <h4 class="ltx_title ltx_title_subsubsection" id="H-S4.SS2.SSS2">
          <span class="ltx_tag ltx_tag_subsubsection">4.2.2 </span>Predicate</h4>
        <div id="S4.SS2.SSS2.p1" class="ltx_para">
          <p class="ltx_p">As the animation’s elapsed time advances, the selection uses the scale defined in the time encoding to invert elapsed milliseconds (in the scale’s range) to a data value (in the scale’s domain).
            As a result, at any given time, there is an internal variable that has a data value corresponding to the animation’s current time.
            When the Vega-Lite specification is compiled into Vega, this variable is represented as a Vega signal called <span class="ltx_text ltx_font_typewriter">anim_value</span>. In the Gapminder example, <span class="ltx_text ltx_font_typewriter">anim_value</span> starts at <span class="ltx_text ltx_font_typewriter">1955</span> at 0ms, and advances to <span class="ltx_text ltx_font_typewriter">1960, 1965, ..., 2005</span>.</p>
        </div>
        <div id="S4.SS2.SSS2.p2" class="ltx_para">
          <p class="ltx_p">To construct keyframes, the selection queries a subset of data tuples to include in the keyframe based on the current value of <span class="ltx_text ltx_font_typewriter">anim_value</span>.
            By default, tuples are included in the keyframe if their value in the time encoding’s field (e.g. <span class="ltx_text ltx_font_typewriter">year</span> for Gapminder) is equal to <span class="ltx_text ltx_font_typewriter">anim_value</span>.
            However, to define alternate inclusion criteria for determining keyframes, users can specify custom predicate functions.
            For example, if at every step of the animation, a user wished to show all points with year less than or equal to <span class="ltx_text ltx_font_typewriter">anim_value</span>, they would use the following predicate:</p>
        </div>
        <div id="S4.SS2.SSS2.p3" class="ltx_para">
          <p class="ltx_p"><span class="ltx_text ltx_font_typewriter">{"field": "year", "lte": "anim_value"}</span></p>
        </div>
        <div id="S4.SS2.SSS2.p4" class="ltx_para">
          <p class="ltx_p">Previously, Vega-Lite did not allow users to customize the selection predicate because the majority of interactions could be expressed using a combination of default predicates and selection transformations.
            Nonetheless, enabling predicate customization in the selection specification also increases the expressiveness of the interactive grammar.</p>
        </div>
      </section>
      <section id="S4.SS2.SSS3" class="ltx_subsubsection">
        <h4 class="ltx_title ltx_title_subsubsection" id="H-S4.SS2.SSS3">
          <span class="ltx_tag ltx_tag_subsubsection">4.2.3 </span>Input Element Binding</h4>
        <div id="S4.SS2.SSS3.p1" class="ltx_para">
          <p class="ltx_p">Using the <span class="ltx_text ltx_font_typewriter">bind</span> property, a user can populate a selection using a dynamic query widget (such as an HTML slider or checkbox).
            For animated selections, input element binding offers a convenient way to add interactive playback control to the animation.
            For instance, the user can bind an animated selection to a checkbox to toggle whether the animation is playing or paused.
            Similarly, they can bind a selection to a range slider and drag to scrub to a specific time in the animation.
          </p>
        </div>
        <div id="S4.SS2.SSS3.p2" class="ltx_para">
          <p class="ltx_p">Scrubbing the animation with the slider surfaces an interesting design challenge when combining animation and interaction: how should the system delegate control between the animation timer and user interaction?
            Initially, the animation is driven by the timer, with the slider visualizing timer updates.
            When the user starts dragging the slider, the system pauses the animation and delegates control to user interaction.
            Pausing is necessary so that the slider does not continue to advance forward while the user is currently scrubbing.
            When the user is done scrubbing, they may want to give control back to the animation.
            To facilitate this, Animated Vega-Lite automatically includes a play/pause checkbox alongside bound sliders.
            The user can simply re-check the box to give control over the animation back to the timer.</p>
        </div>
      </section>
      <section id="S4.SS2.SSS4" class="ltx_subsubsection">
        <h4 class="ltx_title ltx_title_subsubsection" id="H-S4.SS2.SSS4">
          <span class="ltx_tag ltx_tag_subsubsection">4.2.4 </span>Pausing</h4>
        <div id="S4.SS2.SSS4.p1" class="ltx_para">
          <p class="ltx_p">Animated Vega-Lite supports pausing in two ways: by interaction, and by data value.
            Interactive pauses are specified using the <span class="ltx_text ltx_font_typewriter">filter</span> property of Vega-Lite event streams.
            Users can provide the name of a Vega-Lite parameter to the <span class="ltx_text ltx_font_typewriter">filter</span> property of a timer event stream.
            Parameters can be either selections or variables.
            When the provided parameter evaluates to true (i.e. is a non-empty selection or a true boolean variable), the filter will capture incoming events, preventing the animation clock from advancing.
            When the paramater evaluates to false, the events will resume propagating and the animation will continue.
            For example, a user can bind a checkbox to a parameter named <span class="ltx_text ltx_font_typewriter">is_playing</span>, and use the following event stream definition to pause the visualization when the box is checked:</p>
        </div>
        <div id="S4.SS2.SSS4.p2" class="ltx_para">
          <p class="ltx_p"><span class="ltx_text ltx_font_typewriter">"on":{"type": "timer", "filter": "is_playing"}</span></p>
        </div>
        <div id="S4.SS2.SSS4.p3" class="ltx_para">
          <p class="ltx_p">Pausing by data value is specified using the <span class="ltx_text ltx_font_typewriter">pause</span> property of an animated selection definition.
            The user provides a list of data values to pause on, and the duration of each pause.
            For example, a user can specify that the Gapminder animation should pause on the year 1995 for 2 seconds, to draw attention to the data for that year:</p>
        </div>
        <div id="S4.SS2.SSS4.p4" class="ltx_para">
          <p class="ltx_p"><span class="ltx_text ltx_font_typewriter">"pause": [{"value": 1995, "duration": 2000}]</span></p>
        </div>
      </section>
      <section id="S4.SS2.SSS5" class="ltx_subsubsection">
        <h4 class="ltx_title ltx_title_subsubsection" id="H-S4.SS2.SSS5">
          <span class="ltx_tag ltx_tag_subsubsection">4.2.5 </span>Global Easing</h4>
        <div id="S4.SS2.SSS5.p1" class="ltx_para">
          <p class="ltx_p"><emph class="ltx_text ltx_font_italic">Easing</emph> is a common animation technique that involves controlling the rate that the animation timer advances.
            Easing is typically implemented using a palette of pre-defined functions that map an animation time domain to a transformed time domain.
            For example, an exponential easing function might cause the animation clock to begin advancing slowly, and then exponentially accelerate as the animation progresses.
            In Animated Vega-Lite, the animation clock advances linearly by default.
            However, users can use the <span class="ltx_text ltx_font_typewriter">easing</span> property of a selection to specify an easing function to apply to the whole duration of the animation.
            Animated Vega-Lite exposes D3’s named easing functions&nbsp;<cite class="ltx_cite ltx_citemacro_cite">[<a href="#bib.bib63" title="D3-ease" class="ltx_ref">26</a>]</cite>.</p>
        </div>
      </section>
    </section>
  </section>
  <section id="S5" class="ltx_section">
    <h2 class="ltx_title ltx_title_section" id="H-S5">
      <span class="ltx_tag ltx_tag_section">5 </span>Implementation</h2>
    <div id="S5.p1" class="ltx_para">
      <p class="ltx_p">We implement Animated Vega-Lite using a prototype compiler, wrapping the existing Vega-Lite compiler to ingest Animated Vega-Lite specifications and output a lower-level Vega specification.
        The Animated Vega-Lite prototype compiler begins by expanding a user-supplied specification into a “normalized” format with all implicit default values filled in explicitly.
        This step includes generating default selections and transforms for animations specified using only <span class="ltx_text ltx_font_typewriter">time</span> encodings, and filling in default scale and key definitions.
        This normalized specification is passed to the next compiler step to simplify processing.</p>
    </div>
    <div id="S5.p2" class="ltx_para">
      <p class="ltx_p">To convert Animated Vega-Lite into low-level Vega, we use the existing Vega-Lite compiler to make the initial conversion into Vega (using a copy of the specification with animation removed), and then call a series of functions to compile animation-specific parts of the spec and merge them with the output Vega.
        Because Vega-Lite’s high-level abstractions do not have a one-to-one mapping to low-level Vega concepts, seemingly-isolated Vega-Lite fragments will typically make changes in many different parts of the Vega spec.
        Each of these functions takes in fragments of Animated Vega-Lite and standard Vega, and outputs a partial Vega specification that includes dataset, signal, scale, and mark definitions to merge into the output.</p>
    </div>
    <div id="S5.p3" class="ltx_para">
      <p class="ltx_p">Compilation happens in six steps. First, <span class="ltx_text ltx_font_typewriter">compileAnimationClock</span> uses definitions of animated selections and time encoding channels to create Vega signals and datasets for controlling the current state of the animation, handling pausing, and interfacing with interactive playback controls.
        Next, <span class="ltx_text ltx_font_typewriter">compileTimeScale</span> takes in a definition of a time encoding alongside Vega marks and scales. It creates Vega-level scales for the time encoding, and signals to handle inversions between the animation clock and the corresponding data value at that time. It also applies rescaling to mark encodings if applicable.
        <span class="ltx_text ltx_font_typewriter">compileAnimationSelections</span> then ingests definitions of animated selections to produce Vega signals and datasets that implement custom predicates, pausing and easing, and input element binding.
        Fourth, <span class="ltx_text ltx_font_typewriter">compileFilterTransforms</span> takes animation selections and any filter transforms that reference those selections, and materializes the selections as filtered datasets in Vega. These datasets provide the backing data for rendering marks at each keyframe.
        <span class="ltx_text ltx_font_typewriter">compileKey</span> then uses the time encoding specification to generate datasets and signals that handle tweening between keyframes.
        Finally, <span class="ltx_text ltx_font_typewriter">compileEnterExit</span> supports top-level enter and exit encoding definitions in Animated Vega-Lite, converting them into Vega-level enter and exit encodings.
        Because of existing limitations in Vega, enter and exit currently are not well-supported for animation.
        However, pending Vega support, designers should be able to control the behavior of visual encodings as marks enter and exit the current keyframe.</p>
    </div>
    <div id="S5.p4" class="ltx_para">
      <p class="ltx_p">We chose to implement our compiler as a wrapper around the existing Vega-Lite compiler in order to facilitate rapid prototyping.
        However, our current approach faces performance challenges that could be improved with internal changes to Vega and Vega-Lite.
        For example, we currently support tweening by creating three separate datasets: the current keyframe, the next keyframe, and a joined dataset with tweens computed as a derived column.
        This expensive operation causes noticeable lag on large datasets.
        In future implementations, we can instead create a Vega dataflow operator that leverages the animation’s semantics to compute tweens more efficiently.
        For example, instead of computing multiple datasets independently and performing a join, the operator can create a single dataset backed by a sliding window over the time facets.</p>
    </div>
  </section>
  <section id="S6" class="ltx_section">
    <h2 class="ltx_title ltx_title_section" id="H-S6">
      <span class="ltx_tag ltx_tag_section">6 </span>Evaluation: Example Gallery</h2>
    <figure id="S6.F5" class="ltx_figure"><img src="example-gallery-1-1.png" id="S6.F5.g1" class="ltx_graphics ltx_centering" alt="Animated Vega-Lite examples demonstrating coverage over interaction and animation taxonomies ">
      <figcaption class="ltx_caption ltx_centering"><span class="ltx_tag ltx_tag_figure">Figure 5: </span>Animated Vega-Lite examples demonstrating coverage over interaction and animation taxonomies <cite class="ltx_cite ltx_citemacro_cite">[<a href="#bib.bib9" title="Toward a Deeper Understanding of the Role of Interaction in Information Visualization" class="ltx_ref">51</a>, <a href="#bib.bib5" title="Animated Transitions in Statistical Data Graphics" class="ltx_ref">11</a>]</cite> (see <a href="#S4.F4" title="Figure 4 ‣ 4.1.3 Re-scale ‣ 4.1 Time Encoding Channel ‣ 4 A Grammar of Animation in Vega-Lite ‣ Animated Vega-Lite: Unifying Animation with a Grammar of Interactive Graphics" class="ltx_ref ltx_refmacro_autoref"><span class="ltx_text ltx_ref_tag">Figure&nbsp;4</span></a> for an example <emph class="ltx_text ltx_font_italic" style="color:#000000;background-color:#FFFFCC;">substrate transform</emph> and <a href="#S4.F3" title="Figure 3 ‣ 4.1.2 Time Scale ‣ 4.1 Time Encoding Channel ‣ 4 A Grammar of Animation in Vega-Lite ‣ Animated Vega-Lite: Unifying Animation with a Grammar of Interactive Graphics" class="ltx_ref ltx_refmacro_autoref"><span class="ltx_text ltx_ref_tag">Figure&nbsp;3</span></a> for <emph class="ltx_text ltx_font_italic" style="color:#000000;background-color:#E6FFF5;">select</emph>). A) <emph class="ltx_text ltx_font_italic" style="color:#000000;background-color:#FFFFCC;">View transform</emph> via panning, <emph class="ltx_text ltx_font_italic" style="color:#000000;background-color:#E6FFF5;">abstract/elaborate</emph> via overview + detail, and <emph class="ltx_text ltx_font_italic" style="color:#000000;background-color:#E6FFF5;">connect</emph>ing multiple views. B) <emph class="ltx_text ltx_font_italic" style="color:#000000;background-color:#E6FFF5;">Filte</emph><emph class="ltx_text ltx_font_italic" style="color:#000000;background-color:#FFFFCC;">ring</emph> data via a predicate. C) <emph class="ltx_text ltx_font_italic" style="color:#000000;background-color:#FFFFCC;">Ordering</emph> / <emph class="ltx_text ltx_font_italic" style="color:#000000;background-color:#E6FFF5;">reconfiguring</emph> a sorted axis in a bump chart. D) <emph class="ltx_text ltx_font_italic" style="color:#000000;background-color:#E6FFF5;">Exploring</emph> sequential <emph class="ltx_text ltx_font_italic" style="color:#000000;background-color:#FFFFCC;">timestep</emph>s of an index chart. E) A hypothetical outcome plot in the style of the New York Times <cite class="ltx_cite ltx_citemacro_cite">[<a href="#bib.bib71" title="How Not to Be Misled by the Jobs Report" class="ltx_ref">14</a>]</cite>. F) An interactive brush selection over Gapminder.</figcaption>
    </figure>
    <div id="S6.p1" class="ltx_para">
      <p class="ltx_p">To evaluate Animated Vega-Lite’s expressiveness, we created an example gallery to demonstrate coverage over both <span class="ltx_text" style="background-color:#E6FFF5;">Yi et al.’s taxonomy</span> of interaction intents&nbsp;<cite class="ltx_cite ltx_citemacro_cite">[<a href="#bib.bib9" title="Toward a Deeper Understanding of the Role of Interaction in Information Visualization" class="ltx_ref">51</a>]</cite> and <span class="ltx_text" style="background-color:#FFFFCC;">Heer &amp; Robertson’s taxonomy</span> of transition types in animated statistical graphics <cite class="ltx_cite ltx_citemacro_cite">[<a href="#bib.bib5" title="Animated Transitions in Statistical Data Graphics" class="ltx_ref">11</a>]</cite>.
        As <a href="#S6.F5" title="Figure 5 ‣ 6 Evaluation: Example Gallery ‣ Animated Vega-Lite: Unifying Animation with a Grammar of Interactive Graphics" class="ltx_ref ltx_refmacro_autoref"><span class="ltx_text ltx_ref_tag">Figure&nbsp;5</span></a> shows, we support 6 / 7 interaction categories and 5 / 7 animation categories.</p>
    </div>
    <div id="S6.p2" class="ltx_para">
      <p class="ltx_p"><a href="#S6.F5" title="Figure 5 ‣ 6 Evaluation: Example Gallery ‣ Animated Vega-Lite: Unifying Animation with a Grammar of Interactive Graphics" class="ltx_ref ltx_refmacro_autoref"><span class="ltx_text ltx_ref_tag">Figure&nbsp;5</span></a>a demonstrates an overview + detail visualization. A selection controls a brush over the bottom view, which sets the zoomed viewport of the top view. This selection is defined using a predicate that defines a sliding window over the x-axis field. When the brush is driven by animation, the selection is updated on each timer event. When the brush is driven by interaction, the selection is instead updated on drag events. Because the original Vega-Lite selection model unifies panning and zooming as selections applied to a scale domain, this approach can be adapted to animate arbitrary geometric panning and zooming behavior. This visualization demonstrates a <emph class="ltx_text ltx_font_italic" style="color:#000000;background-color:#FFFFCC;">view transformation</emph>, changing the reader’s viewpoint by panning and zooming the top view. It also demonstrates an <emph class="ltx_text ltx_font_italic" style="color:#000000;background-color:#E6FFF5;">abstract/elaborate</emph> intent by showing the data at different levels of detail in the top and bottom view, and the <emph class="ltx_text ltx_font_italic" style="color:#000000;background-color:#E6FFF5;">connect</emph> intent by showing corresponding data across multiple views.</p>
    </div>
    <div id="S6.p3" class="ltx_para">
      <p class="ltx_p"><a href="#S4.F4" title="Figure 4 ‣ 4.1.3 Re-scale ‣ 4.1 Time Encoding Channel ‣ 4 A Grammar of Animation in Vega-Lite ‣ Animated Vega-Lite: Unifying Animation with a Grammar of Interactive Graphics" class="ltx_ref ltx_refmacro_autoref"><span class="ltx_text ltx_ref_tag">Figure&nbsp;4</span></a> shows a bar chart’s x-scale dynamically recalculating on each frame using the <span class="ltx_text ltx_font_typewriter">rescale</span> property of a time encoding (<a href="#S4.SS1.SSS3" title="4.1.3 Re-scale ‣ 4.1 Time Encoding Channel ‣ 4 A Grammar of Animation in Vega-Lite ‣ Animated Vega-Lite: Unifying Animation with a Grammar of Interactive Graphics" class="ltx_ref ltx_refmacro_autoref"><span class="ltx_text ltx_ref_tag">subsubsection&nbsp;4.1.3</span></a>). This animation technique demonstrates a <emph class="ltx_text ltx_font_italic" style="color:#000000;background-color:#FFFFCC;">substrate transformation</emph> through scale manipulations. It also demonstrates the <emph class="ltx_text ltx_font_italic" style="color:#000000;background-color:#E6FFF5;">reconfigure</emph> intent by showing a new spatial arrangement of the data.</p>
    </div>
    <div id="S6.p4" class="ltx_para">
      <p class="ltx_p">In <a href="#S4.F3" title="Figure 3 ‣ 4.1.2 Time Scale ‣ 4.1 Time Encoding Channel ‣ 4 A Grammar of Animation in Vega-Lite ‣ Animated Vega-Lite: Unifying Animation with a Grammar of Interactive Graphics" class="ltx_ref ltx_refmacro_autoref"><span class="ltx_text ltx_ref_tag">Figure&nbsp;3</span></a> and <a href="#S6.F5" title="Figure 5 ‣ 6 Evaluation: Example Gallery ‣ Animated Vega-Lite: Unifying Animation with a Grammar of Interactive Graphics" class="ltx_ref ltx_refmacro_autoref"><span class="ltx_text ltx_ref_tag">Figure&nbsp;5</span></a>b, we apply a conditional filter over the whole dataset, with filter parameters changing over time. In contrast to faceting, filtering can leverage custom selection predicates to show and hide data — a single data point can appear in multiple groups. Both taxonomies contain a category for <emph class="ltx_text ltx_font_italic" style="color:#000000;background-color:#E6FFF5;">filte</emph><emph class="ltx_text ltx_font_italic" style="color:#000000;background-color:#FFFFCC;">ring</emph>, shown here by adding or removing elements from the display. <a href="#S4.F3" title="Figure 3 ‣ 4.1.2 Time Scale ‣ 4.1 Time Encoding Channel ‣ 4 A Grammar of Animation in Vega-Lite ‣ Animated Vega-Lite: Unifying Animation with a Grammar of Interactive Graphics" class="ltx_ref ltx_refmacro_autoref"><span class="ltx_text ltx_ref_tag">Figure&nbsp;3</span></a> additionally demonstrates a <emph class="ltx_text ltx_font_italic" style="color:#000000;background-color:#E6FFF5;">select</emph> intent by using conditional encoding to highlight selected data.</p>
    </div>
    <div id="S6.p5" class="ltx_para">
      <p class="ltx_p"><a href="#S4.F4" title="Figure 4 ‣ 4.1.3 Re-scale ‣ 4.1 Time Encoding Channel ‣ 4 A Grammar of Animation in Vega-Lite ‣ Animated Vega-Lite: Unifying Animation with a Grammar of Interactive Graphics" class="ltx_ref ltx_refmacro_autoref"><span class="ltx_text ltx_ref_tag">Figure&nbsp;4</span></a> and <a href="#S6.F5" title="Figure 5 ‣ 6 Evaluation: Example Gallery ‣ Animated Vega-Lite: Unifying Animation with a Grammar of Interactive Graphics" class="ltx_ref ltx_refmacro_autoref"><span class="ltx_text ltx_ref_tag">Figure&nbsp;5</span></a>c show examples with a sorted axis. When a <span class="ltx_text ltx_font_typewriter">key</span> is specified in a time encoding, the system automatically tweens an element’s position even when its sort index has changed in the next keyframe. Continually sorting elements as the underlying data changes demonstrates an <emph class="ltx_text ltx_font_italic" style="color:#000000;background-color:#FFFFCC;">ordering</emph> transition, as well as a <emph class="ltx_text ltx_font_italic" style="color:#000000;background-color:#E6FFF5;">reconfigure</emph> intent.</p>
    </div>
    <div id="S6.p6" class="ltx_para">
      <p class="ltx_p">Time encodings transition between sequential time values by default in Animated Vega-Lite (e.g. <a href="#S3.F2" title="Figure 2 ‣ 3.2 Low-Viscous Authoring: An Example Usage Scenario ‣ 3 Motivation: Unifying Interaction and Animation ‣ Animated Vega-Lite: Unifying Animation with a Grammar of Interactive Graphics" class="ltx_ref ltx_refmacro_autoref"><span class="ltx_text ltx_ref_tag">Figure&nbsp;2</span></a>). <a href="#S6.F5" title="Figure 5 ‣ 6 Evaluation: Example Gallery ‣ Animated Vega-Lite: Unifying Animation with a Grammar of Interactive Graphics" class="ltx_ref ltx_refmacro_autoref"><span class="ltx_text ltx_ref_tag">Figure&nbsp;5</span></a>d demonstrates an additional example of this animation. A default animated point selection is applied to a data transform that re-normalizes a stock price time-series chart on each tick. The original Vega-Lite paper contains an interactive version of this example, which instead populates the point selection on mouse hover events <cite class="ltx_cite ltx_citemacro_cite">[<a href="#bib.bib30" title="Vega-Lite: A Grammar of Interactive Graphics" class="ltx_ref">36</a>]</cite>. These examples demonstrate <emph class="ltx_text ltx_font_italic" style="color:#000000;background-color:#FFFFCC;">timestep</emph> transitions, which also fulfill the <emph class="ltx_text ltx_font_italic" style="color:#000000;background-color:#E6FFF5;">explore</emph> intent by showing new data points at each step. Axis re-normalization is also an example of a <emph class="ltx_text ltx_font_italic" style="color:#000000;background-color:#E6FFF5;">reconfigure</emph> intent.</p>
    </div>
    <div id="S6.p7" class="ltx_para">
      <p class="ltx_p">In addition to achieving broad coverage over the two taxonomies, our system also supports simulation techniques including hypothetical outcome plots (<a href="#S6.F5" title="Figure 5 ‣ 6 Evaluation: Example Gallery ‣ Animated Vega-Lite: Unifying Animation with a Grammar of Interactive Graphics" class="ltx_ref ltx_refmacro_autoref"><span class="ltx_text ltx_ref_tag">Figure&nbsp;5</span></a>e) <cite class="ltx_cite ltx_citemacro_cite">[<a href="#bib.bib60" title="Hypothetical Outcome Plots Outperform Error Bars and Violin Plots for Inferences about Reliability of Variable Ordering" class="ltx_ref">12</a>]</cite>.
        And, as previously discussed in <a href="#S4.SS2.SSS1" title="4.2.1 Applying Selections ‣ 4.2 Selections with a Timer Event Stream ‣ 4 A Grammar of Animation in Vega-Lite ‣ Animated Vega-Lite: Unifying Animation with a Grammar of Interactive Graphics" class="ltx_ref ltx_refmacro_autoref"><span class="ltx_text ltx_ref_tag">subsubsection&nbsp;4.2.1</span></a>, animated selections can be applied to the same set of dynamic visual behaviors as interactive selections.
        Consequently, users can easily switch between timer and input event streams when prototyping existing interaction techniques in Vega-Lite.
        For example, <a href="#S6.F5" title="Figure 5 ‣ 6 Evaluation: Example Gallery ‣ Animated Vega-Lite: Unifying Animation with a Grammar of Interactive Graphics" class="ltx_ref ltx_refmacro_autoref"><span class="ltx_text ltx_ref_tag">Figure&nbsp;5</span></a>a and <a href="#S6.F5" title="Figure 5 ‣ 6 Evaluation: Example Gallery ‣ Animated Vega-Lite: Unifying Animation with a Grammar of Interactive Graphics" class="ltx_ref ltx_refmacro_autoref"><span class="ltx_text ltx_ref_tag">Figure&nbsp;5</span></a>d show animated selections driving common interaction techniques — panning and re-normalizing, respectively.
        Users can also easily compose interaction techniques with animated visualizations by defining additional selections. For example, <a href="#S6.F5" title="Figure 5 ‣ 6 Evaluation: Example Gallery ‣ Animated Vega-Lite: Unifying Animation with a Grammar of Interactive Graphics" class="ltx_ref ltx_refmacro_autoref"><span class="ltx_text ltx_ref_tag">Figure&nbsp;5</span></a>f demonstrates an interactive brush used to highlight a region of an animated Gapminder visualization. Points of interest are conditionally colored as they enter or exit the brush region.</p>
    </div>
    <div id="S6.p8" class="ltx_para">
      <p class="ltx_p"><strong class="ltx_text ltx_font_bold">Discussion and Limitations.</strong> Like the original Vega-Lite, Animated Vega-Lite intentionally trades some limits to expressivity for gains in concise, high-level, declarative specification.
        In Sects.&nbsp;<a href="#S7.SS2.SSS1" title="7.2.1 Scene- vs. Segue-Dominant Abstractions ‣ 7.2 Animation Abstractions and Design Considerations ‣ 7 Evaluation: Critical Reflection ‣ Animated Vega-Lite: Unifying Animation with a Grammar of Interactive Graphics" class="ltx_ref"><span class="ltx_text ltx_ref_tag">7.2.1</span></a> &amp;&nbsp;<a href="#S7.SS2.SSS2" title="7.2.2 Modeling Transitions Between Keyframes ‣ 7.2 Animation Abstractions and Design Considerations ‣ 7 Evaluation: Critical Reflection ‣ Animated Vega-Lite: Unifying Animation with a Grammar of Interactive Graphics" class="ltx_ref"><span class="ltx_text ltx_ref_tag">7.2.2</span></a>, we detail this expressiveness tradeoff in terms of the classes of animation techniques (Animated Vega-Lite primarily supports <emph class="ltx_text ltx_font_italic">scene</emph> techniques instead of <emph class="ltx_text ltx_font_italic">segue</emph>) as well as the implications on how keyframes are modeled and generated (Animated Vega-Lite supports non-parametric keyframe transitions, and offers some limited support for parametric keyframe transitions).
        Thus, lower-level and imperative languages will necessarily be more expressive: for instance, D3 can express both scene and segue animations, but using different language constructs (timer event loops and transition functions, respectively).
        As these sections describe, offering high-level declarative specification that unifies not only these distinct conceptual models of animation, but also interaction and static charts, remains a compelling direction for future work.</p>
    </div>
    <div id="S6.p9" class="ltx_para">
      <p class="ltx_p">By extending Vega-Lite, Animated Vega-Lite also inherits its predecessor’s limitations.
        For instance, Vega-Lite selections cannot alter visual encodings or data transformation pipelines at runtime (the <emph class="ltx_text ltx_font_italic" style="color:#000000;background-color:#E6FFF5;">encode</emph> interaction type in Yi et al.’s taxonomy&nbsp;<cite class="ltx_cite ltx_citemacro_cite">[<a href="#bib.bib9" title="Toward a Deeper Understanding of the Role of Interaction in Information Visualization" class="ltx_ref">51</a>]</cite>); thus, Animated Vega-Lite cannot support the <emph class="ltx_text ltx_font_italic" style="color:#000000;background-color:#FFFFCC;">visualization change</emph> or <emph class="ltx_text ltx_font_italic" style="color:#000000;background-color:#FFFFCC;">data schema change</emph> transition types in the Heer &amp; Robertson taxonomy&nbsp;<cite class="ltx_cite ltx_citemacro_cite">[<a href="#bib.bib5" title="Animated Transitions in Statistical Data Graphics" class="ltx_ref">11</a>]</cite>.
      </p>
    </div>
  </section>
  <section id="S7" class="ltx_section">
    <h2 class="ltx_title ltx_title_section" id="H-S7">
      <span class="ltx_tag ltx_tag_section">7 </span>Evaluation: Critical Reflection</h2>
    <div id="S7.p1" class="ltx_para">
      <p class="ltx_p">To identify our grammar’s design tradeoffs, we compared our approach to existing animated visualization grammars following the <emph class="ltx_text ltx_font_italic">critical reflections</emph> evaluation method&nbsp;<cite class="ltx_cite ltx_citemacro_cite">[<a href="#bib.bib54" title="Critical Reflections on Visualization Authoring Systems" class="ltx_ref">35</a>]</cite>.
        We recruited five developers of existing grammars: John Thompson and Leo Zhicheng Liu<span id="footnote1" class="ltx_note ltx_role_footnote"><sup class="ltx_note_mark">1</sup><span class="ltx_note_outer"><span class="ltx_note_content"><sup class="ltx_note_mark">1</sup>
              <span class="ltx_tag ltx_tag_note">1</span>
              Thompson &amp; Liu also co-authored the original critical reflections paper&nbsp;<cite class="ltx_cite ltx_citemacro_cite">[<a href="#bib.bib54" title="Critical Reflections on Visualization Authoring Systems" class="ltx_ref">35</a>]</cite>.</span></span></span> of Data Animator&nbsp;<cite class="ltx_cite ltx_citemacro_cite">[<a href="#bib.bib93" title="Data Animator: Authoring Expressive Animated Data Graphics" class="ltx_ref">46</a>]</cite>, Tong Ge of Canis&nbsp;<cite class="ltx_cite ltx_citemacro_cite">[<a href="#bib.bib91" title="Canis: A High-Level Language for Data-Driven Chart Animations" class="ltx_ref">9</a>]</cite> and CAST&nbsp;<cite class="ltx_cite ltx_citemacro_cite">[<a href="#bib.bib90" title="CAST: Authoring Data-Driven Chart Animations" class="ltx_ref">8</a>]</cite>, Thomas Lin Pedersen of gganimate&nbsp;<cite class="ltx_cite ltx_citemacro_cite">[<a href="#bib.bib31" title="A Grammar of Animated Graphics" class="ltx_ref">41</a>]</cite>, and Younghoon Kim of Gemini&nbsp;<cite class="ltx_cite ltx_citemacro_cite">[<a href="#bib.bib92" title="Gemini: A Grammar and Recommender System for Animated Transitions in Statistical Graphics" class="ltx_ref">19</a>]</cite> and Gemini<sup class="ltx_sup">2</sup>&nbsp;<cite class="ltx_cite ltx_citemacro_cite">[<a href="#bib.bib46" title="Gemini^2: Generating Keyframe-Oriented Animated Transitions Between Statistical Graphics" class="ltx_ref">18</a>]</cite>.
        We focused on animation grammar developers because the interactive grammar was evaluated in the original Vega-Lite paper.
        With each participant, we conducted a one-hour pre-interview. We then asked them to asynchronously engage with our grammar for an extended time by reading a system walkthrough and grammar documentation similar to <a href="#S3" title="3 Motivation: Unifying Interaction and Animation ‣ Animated Vega-Lite: Unifying Animation with a Grammar of Interactive Graphics" class="ltx_ref ltx_refmacro_autoref"><span class="ltx_text ltx_ref_tag">section&nbsp;3</span></a> and <a href="#S4" title="4 A Grammar of Animation in Vega-Lite ‣ Animated Vega-Lite: Unifying Animation with a Grammar of Interactive Graphics" class="ltx_ref ltx_refmacro_autoref"><span class="ltx_text ltx_ref_tag">section&nbsp;4</span></a>, respectively, and run examples similar to those found in <a href="#S6" title="6 Evaluation: Example Gallery ‣ Animated Vega-Lite: Unifying Animation with a Grammar of Interactive Graphics" class="ltx_ref ltx_refmacro_autoref"><span class="ltx_text ltx_ref_tag">section&nbsp;6</span></a>. We further suggested participants write new specifications and/or port other examples, including examples from their own tools. We encouraged participants to take notes and reflect on the design of Animated Vega-Lite during the process. Finally, we conducted post-interviews with each participant that lasted 30–60 minutes.
        Each participant was offered a $125 gift card as compensation.</p>
    </div>
    <div id="S7.p2" class="ltx_para">
      <p class="ltx_p">Our goals were to (i) compare and contrast their design processes with ours, (ii) understand differences and design tradeoffs between their grammars and ours, and (iii) generate insights about the direction of future animation grammars.
        During the interviews, three of the authors of this paper began developing initial thematic hypotheses. After the interviews, we independently conducted a thematic analysis before finally coming together and synthesizing our insights, which we summarize below. These themes provide insight into the design of our grammar, and animated visualization grammars more generally.</p>
    </div>
    <section id="S7.SS1" class="ltx_subsection">
      <h3 class="ltx_title ltx_title_subsection" id="H-S7.SS1">
        <span class="ltx_tag ltx_tag_subsection">7.1 </span>Grammar Design Process</h3>
      <section id="S7.SS1.SSS1" class="ltx_subsubsection">
        <h4 class="ltx_title ltx_title_subsubsection" id="H-S7.SS1.SSS1">
          <span class="ltx_tag ltx_tag_subsubsection">7.1.1 </span>Specific Examples Motivate Grammar Design</h4>
        <div id="S7.SS1.SSS1.p1" class="ltx_para">
          <p class="ltx_p">When scoping their research projects, our interviewees prioritized motivating examples that they found personally compelling. For example, the authors of Data Animator and Gemini were both motivated in part by R2D3&nbsp;<cite class="ltx_cite ltx_citemacro_cite">[<a href="#bib.bib41" title="A visual introduction to machine learning, Part II" class="ltx_ref">40</a>]</cite>. As we discuss in the following subsections, the choosing examples to support leads to design tradeoffs, e.g. between scene- and segue-dominant abstractions (<a href="#S7.SS2.SSS1" title="7.2.1 Scene- vs. Segue-Dominant Abstractions ‣ 7.2 Animation Abstractions and Design Considerations ‣ 7 Evaluation: Critical Reflection ‣ Animated Vega-Lite: Unifying Animation with a Grammar of Interactive Graphics" class="ltx_ref ltx_refmacro_autoref"><span class="ltx_text ltx_ref_tag">subsubsection&nbsp;7.2.1</span></a>). Thus, a handful of compelling in-the-wild examples can significantly influence the grammars developers build.
            Other examples that were cited across multiple interviews included Gapminder&nbsp;<cite class="ltx_cite ltx_citemacro_cite">[<a href="#bib.bib43" title="The best stats you’ve ever seen" class="ltx_ref">34</a>]</cite>, Periscopic’s Gun Deaths&nbsp;<cite class="ltx_cite ltx_citemacro_cite">[<a href="#bib.bib72" title="United States gun death data visualization" class="ltx_ref">30</a>]</cite>, and animations in the New York Times (NYT) and the Guardian.</p>
        </div>
        <div id="S7.SS1.SSS1.p2" class="ltx_para">
          <p class="ltx_p">On the other hand, a <emph class="ltx_text ltx_font_italic">lack</emph> of existing examples may also motivate a grammar developer. For example, to gain more insight into the popularity of animated visualization techniques, Kim scraped NYT and Guardian articles from 2018 as well as YouTube videos from the same year. He noticed that about 90% of the animated visualizations he studied updated data, but kept the encoding fixed. R2D3 was a notable exception. A similar imbalance can be found in the Data-Gifs example gallery&nbsp;<cite class="ltx_cite ltx_citemacro_cite">[<a href="#bib.bib76" title="What Makes a Data-GIF Understandable?" class="ltx_ref">39</a>]</cite>, where over half of the examples have fixed encodings. Kim hypothesized that the imbalance is influenced by the affordances of existing tools, and decided to optimize Gemini for transitions between changing encodings.
          </p>
        </div>
        <div id="S7.SS1.SSS1.p3" class="ltx_para">
          <p class="ltx_p">With Animated Vega-Lite, we were motivated by the large collection of existing examples with static encodings, such as those in the Data-Gifs example gallery. This category includes many prominent designs like Gapminder and bar chart races. Rather than focus on developing an expressive language of transitions between keyframes, we focused on an expressive language of keyframe generation via selections. Our abstractions facilitate the design of visualizations that must produce many keyframes backed by a fixed encoding.
          </p>
        </div>
      </section>
      <section id="S7.SS1.SSS2" class="ltx_subsubsection">
        <h4 class="ltx_title ltx_title_subsubsection" id="H-S7.SS1.SSS2">
          <span class="ltx_tag ltx_tag_subsubsection">7.1.2 </span>Natural Programming vs. Core Calculus Design</h4>
        <div id="S7.SS1.SSS2.p1" class="ltx_para">
          <p class="ltx_p">To make their systems easy to use for their target audiences, the authors of Data Animator and Gemini aimed to develop grammars that matched the existing mental models of animation designers.
            To that end, both groups conducted interviews prompting experienced animators to sketch interfaces or write pseudocode to recreate exemplar animated visualizations&nbsp;<cite class="ltx_cite ltx_citemacro_cite">[<a href="#bib.bib27" title="Understanding the Design Space and Authoring Paradigms for Animated Data Graphics" class="ltx_ref">45</a>, <a href="#bib.bib92" title="Gemini: A Grammar and Recommender System for Animated Transitions in Statistical Graphics" class="ltx_ref">19</a>]</cite>.
            Fundamental abstractions emerged from these formative studies.
            For instance, Gemini’s studies yielded the concepts of synchronizing (<emph class="ltx_text ltx_font_italic">‘at the same time’</emph>) and concatenating (<emph class="ltx_text ltx_font_italic">‘then’</emph>, <emph class="ltx_text ltx_font_italic">‘after’</emph>) while Data Animator’s studies surfaced designers’ familiarity with keyframes in Adobe After Effects.
            This design process is known as <emph class="ltx_text ltx_font_italic">natural programming</emph>, where a developer aims <emph class="ltx_text ltx_font_italic">“for the language and environment to work the way that nonprogrammers expect”</emph>&nbsp;<cite class="ltx_cite ltx_citemacro_cite">[<a href="#bib.bib70" title="Natural programming languages and environments" class="ltx_ref">29</a>]</cite>.
          </p>
        </div>
        <div id="S7.SS1.SSS2.p2" class="ltx_para">
          <p class="ltx_p">In contrast, we set out to develop a small <emph class="ltx_text ltx_font_italic">core calculus</emph>&nbsp;<cite class="ltx_cite ltx_citemacro_cite">[<a href="#bib.bib94" title="PLIERS: A Process that Integrates User-Centered Methods into Programming Language Design" class="ltx_ref">5</a>]</cite> of abstractions for Animated Vega-Lite, which we outlined in <a href="#S4" title="4 A Grammar of Animation in Vega-Lite ‣ Animated Vega-Lite: Unifying Animation with a Grammar of Interactive Graphics" class="ltx_ref ltx_refmacro_autoref"><span class="ltx_text ltx_ref_tag">section&nbsp;4</span></a>. Our design was motivated by the desire to explore whether interaction and animation could be unified. This unification would likely not have been elicited by a target user.
            Because the key idea of our paper is to identify a unified abstraction, this difference in approach results in a design tradeoff. As Kim explained, Animated Vega-Lite may seem natural to a Vega-Lite user, but might present a steeper learning curve to someone familiar with animation tools like Adobe AfterEffects, as Animated Vega-Lite has no explicit concept of a keyframe.
          </p>
        </div>
        <div id="S7.SS1.SSS2.p3" class="ltx_para">
          <p class="ltx_p">Analyzing these processes via the Cognitive Dimensions of Notation&nbsp;<cite class="ltx_cite ltx_citemacro_cite">[<a href="#bib.bib62" title="Cognitive dimensions of notations" class="ltx_ref">44</a>]</cite>, we find that iterating closely with end users in a natural programming process yields a grammar that <emph class="ltx_text ltx_font_italic">closely maps</emph> to common user mental models.
            On the other hand, by distilling abstractions to a reduced set of orthogonal concepts, a core calculus process better emphasizes a <emph class="ltx_text ltx_font_italic">consistent</emph> API that has low <emph class="ltx_text ltx_font_italic">viscosity</emph>.
            Over-emphasizing one process or the other may drag a language design too far to one side. With PLIERS, Coblenz et al.&nbsp;<cite class="ltx_cite ltx_citemacro_cite">[<a href="#bib.bib94" title="PLIERS: A Process that Integrates User-Centered Methods into Programming Language Design" class="ltx_ref">5</a>]</cite> offer suggestions for how developers may integrate and balance between these approaches.
            They recommend a developer iterate between developing the theoretical foundations of their language (core calculus) and the user-facing language (surface language). Moreover, Coblenz et al. suggest adapting natural programming by <emph class="ltx_text ltx_font_italic">progressively prompting</emph> a user with incrementally more information about a language’s proposed API.
            This additional scaffolding can help scope how natural programming studies explore mental models, and also lets a language developer gain insights even when the core calculus significantly departs from a user’s familiar models.
            Integrated design processes, like PLIERS, are likely to be valuable methods for assessing future unified grammars, because these systems must balance significant conceptual unifications with end-users’ ease-of-use.</p>
        </div>
      </section>
    </section>
    <section id="S7.SS2" class="ltx_subsection">
      <h3 class="ltx_title ltx_title_subsection" id="H-S7.SS2">
        <span class="ltx_tag ltx_tag_subsection">7.2 </span>Animation Abstractions and Design Considerations</h3>
      <section id="S7.SS2.SSS1" class="ltx_subsubsection">
        <h4 class="ltx_title ltx_title_subsubsection" id="H-S7.SS2.SSS1">
          <span class="ltx_tag ltx_tag_subsubsection">7.2.1 </span>Scene- vs. Segue-Dominant Abstractions</h4>
        <div id="S7.SS2.SSS1.p1" class="ltx_para">
          <p class="ltx_p">Several interviewees noted that Animated Vega-Lite’s abstractions appear complementary to their systems. For example, Kim noted his conceptual distinction between Animated Vega-Lite and Gemini is <emph class="ltx_emph ltx_font_italic">“[Animated Vega-Lite] animates the internal state within Vega-Lite, and Gemini doesn’t care about the internal state. It just transforms between two static states of Vega-Lite.”</emph> Similarly, Thompson said <emph class="ltx_emph ltx_font_italic">“if you compare [Animated Vega-Lite] directly to Data Animator, the two of them together would be really nice. What one doesn’t have, the other does really well.”</emph>
            For instance, he highlighted Animated Vega-Lite’s ability to automatically generate keyframes from data (e.g., each <span class="ltx_text ltx_font_typewriter">year</span> keyframe in Gapminder) and Data Animator’s ability to precisely specify transitions between keyframes (such as staggering) as complementary components of the two systems.
            He also appreciated Animated Vega-Lite’s ability to create overlapping keyframes via layering, as in our bar chart race example (<a href="#S4.F4" title="Figure 4 ‣ 4.1.3 Re-scale ‣ 4.1 Time Encoding Channel ‣ 4 A Grammar of Animation in Vega-Lite ‣ Animated Vega-Lite: Unifying Animation with a Grammar of Interactive Graphics" class="ltx_ref ltx_refmacro_autoref"><span class="ltx_text ltx_ref_tag">Figure&nbsp;4</span></a>).
            Pedersen provides one explanation for why our approach is complementary to the existing systems we studied. In his useR! 2018 keynote, Pedersen introduced the concepts of a <emph class="ltx_text ltx_font_italic">scene</emph> and a <emph class="ltx_text ltx_font_italic">segue</emph> animation <cite class="ltx_cite ltx_citemacro_cite">[<a href="#bib.bib67" title="The Grammar of Animation" class="ltx_ref">42</a>]</cite>. A scene animation, such as Gapminder, is one where the data is changing (such as countries ranging over years), but the visual encoding is not. One can imagine a scene playing within a fixed stage (i.e., a static visual encoding).
            In contrast, a segue animation — such as a pie chart transitioning to a bar chart — is one where the visual encoding is changing,
            but the data is fixed.
            In practice, the line between a scene and segue is not always clear. For example, transitioning from a strip plot to a box and whiskers plot involves both a change to the data (computing aggregate quantities) and a change to the visual encoding (converting to box-and-whiskers).</p>
        </div>
        <div id="S7.SS2.SSS1.p2" class="ltx_para">
          <p class="ltx_p">Using this scene and segue distinction, Animated Vega-Lite and gganimate may be categorized as <emph class="ltx_text ltx_font_italic">scene-dominant</emph> grammars. Both systems aim to cover a large space of animated visualizations with fixed encodings, such as Gapminder and bird migrations. Both systems support an additional collection of visual encoding transformations. For example, Animated Vega-Lite supports rescaling, panning, and zooming while
            gganimate supports transitions that can interpolate between different shapes with the same underlying data. Though both Animated Vega-Lite and gganimate are scene-dominant systems, Pedersen highlighted the expressiveness of Animated Vega-Lite’s selection model for generating arbitrary keyframes from data (as shown with the Dunkin example in &nbsp;<a href="#S4.F3" title="Figure 3 ‣ 4.1.2 Time Scale ‣ 4.1 Time Encoding Channel ‣ 4 A Grammar of Animation in Vega-Lite ‣ Animated Vega-Lite: Unifying Animation with a Grammar of Interactive Graphics" class="ltx_ref ltx_refmacro_autoref"><span class="ltx_text ltx_ref_tag">Figure&nbsp;3</span></a>) as a key conceptual distinction between the two.
          </p>
        </div>
        <div id="S7.SS2.SSS1.p3" class="ltx_para">
          <p class="ltx_p">On the other hand, Data Animator, Canis, and Gemini are <emph class="ltx_text ltx_font_italic">segue-dominant</emph>. These systems have focused primarily on connecting two distinct keyframes that may have distinct visual encodings and data. To construct a transition, Data Animator, Canis, and Gemini each construct a mapping between two keyframes. This approach works well when the data set is fixed, and there are only a few keyframes (as is typical when showing a small handful of segues). But as identified by Thompson and Liu, to support an animation like Gapminder, these systems must produce a keyframe for every year in the dataset.</p>
        </div>
        <div id="S7.SS2.SSS1.p4" class="ltx_para">
          <p class="ltx_p">As discussed in <a href="#S6" title="6 Evaluation: Example Gallery ‣ Animated Vega-Lite: Unifying Animation with a Grammar of Interactive Graphics" class="ltx_ref ltx_refmacro_autoref"><span class="ltx_text ltx_ref_tag">section&nbsp;6</span></a>, Animated Vega-Lite inherits Vega-Lite’s inability to represent complex runtime changes to visual encodings and data transformations. We suspect that extending Vega-Lite with these capabilities could enable segue animations in a future version of Animated Vega-Lite.
            To support complex runtime changes, Vega-Lite’s conditional encodings could be extended from just mark properties to mark types and data transforms as in Ivy&nbsp;<cite class="ltx_cite ltx_citemacro_cite">[<a href="#bib.bib88" title="Integrated Visualization Editing via Parameterized Declarative Templates" class="ltx_ref">24</a>]</cite>.
            And our support for enter and exit could be extended to operate not just on data, but also on these more expressive encoding changes.
          </p>
        </div>
      </section>
      <section id="S7.SS2.SSS2" class="ltx_subsubsection">
        <h4 class="ltx_title ltx_title_subsubsection" id="H-S7.SS2.SSS2">
          <span class="ltx_tag ltx_tag_subsubsection">7.2.2 </span>Modeling Transitions Between Keyframes</h4>
        <div id="S7.SS2.SSS2.p1" class="ltx_para">
          <p class="ltx_p">Keyframes were the most salient animation abstraction in our interviews. We discussed keyframe concepts with every interviewee, and they would often use keyframes to pose comparisons between different systems’ abstractions. Every tool had to make decisions about (i) how to generate keyframes and (ii) how to transition between them. Moreover, keyframes and transitions are useful abstractions for both scene- and segue-dominant systems. In this subsection we surface an axis of the keyframe design space: modeling transitions between keyframes.</p>
        </div>
        <div id="S7.SS2.SSS2.p2" class="ltx_para">
          <p class="ltx_p"><strong class="ltx_text ltx_font_bold">Non-parametric transitions.</strong>
            The simplest kind of transition between keyframes is a non-parametric transition.
            Consider a linear sequence of keyframes, where each keyframe describes an entire scenegraph.
            Transitions between these keyframes are <emph class="ltx_text ltx_font_italic">non-parametric</emph> in that the same transition is applied to every data point. For example, changing every bar to a point in 0.5 seconds (a segue animation) is a non-parametric transition because the transition’s definition is independent of the mark’s encoded data — i.e. its duration is a constant value.
            Similarly, animating countries in Gapminder (a scene animation) is also a non-parametric transition because the transition applied to each mark is identical (moving between two points in a fixed time interval).
          </p>
        </div>
        <div id="S7.SS2.SSS2.p3" class="ltx_para">
          <p class="ltx_p">Animated Vega-Lite supports non-parametric transitions via its timer, easing, and interpolation abstractions, which implicitly specify a transition across keyframes. The other libraries also support non-parametric transitions between pairs of keyframes, but only scene-dominant systems (gganimate and Animated Vega-Lite) support non-parametric transitions across <emph class="ltx_text ltx_font_italic">many</emph> keyframes.
            In scene-dominant animations, the same transition specification can be reused across a sequence of keyframes sharing a fixed encoding.
          </p>
        </div>
        <div id="S7.SS2.SSS2.p4" class="ltx_para">
          <p class="ltx_p"><strong class="ltx_text ltx_font_bold">Parametric transitions.</strong>
            In contrast to non-parametric transitions, <emph class="ltx_text ltx_font_italic">parametric</emph> transitions involve transition definitions that depend on the backing data.
            A common use case for this model is to stagger transitions — a common segue technique that applies a small delay to each animated element to make them easier to track&nbsp;<cite class="ltx_cite ltx_citemacro_cite">[<a href="#bib.bib5" title="Animated Transitions in Statistical Data Graphics" class="ltx_ref">11</a>]</cite>.
            Because parametric transitions depend on data, individual marks can have different timing properties during the same transition.
          </p>
        </div>
        <div id="S7.SS2.SSS2.p5" class="ltx_para">
          <p class="ltx_p">Segue-dominant systems Data Animator, Canis, and Gemini all support parametric transitions.
            But, as Thompson identified in his post-interview, parametric transitions also increase the expressive gamut of scene animations.
          </p>
        </div>
        <figure id="S7.F6" class="ltx_figure"><img src="x20.png" id="S7.F6.g1" class="ltx_graphics ltx_centering" width="1026" height="326" alt="Swimming World Records example from Data Animator ">
          <figcaption class="ltx_caption ltx_centering"><span class="ltx_tag ltx_tag_figure">Figure 6: </span>Swimming World Records example from Data Animator <cite class="ltx_cite ltx_citemacro_cite">[<a href="#bib.bib66" title="Swimming World Records throughout History" class="ltx_ref">15</a>]</cite>.</figcaption>
        </figure>
        <div id="S7.SS2.SSS2.p6" class="ltx_para">
          <p class="ltx_p">For example, <a href="#S7.F6" title="Figure 6 ‣ 7.2.2 Modeling Transitions Between Keyframes ‣ 7.2 Animation Abstractions and Design Considerations ‣ 7 Evaluation: Critical Reflection ‣ Animated Vega-Lite: Unifying Animation with a Grammar of Interactive Graphics" class="ltx_ref ltx_refmacro_autoref"><span class="ltx_text ltx_ref_tag">Figure&nbsp;6</span></a> shows “Swimming World Records Throughout History” from the Data Animator example gallery. This animated scatterplot shows replays of world record swimmers. The input data includes swimmers and their final race times. When Thompson tried to port this example to Animated Vega-Lite, he realized he <emph class="ltx_emph ltx_font_italic">“had no clue how to do it. The two keyframes in this example are very simple. All of the circles at one x position, and then all of the circles like 200–400 pixels to the right. For us, you change the <em class="ltx_emph ltx_font_upright">speed</em> of each individual shape based on a data property.”</emph>
            Animated Vega-Lite could support this animation by allowing users to explicitly define a transition, with its speed parameterized by a data value.</p>
        </div>
        <div id="S7.SS2.SSS2.p7" class="ltx_para">
          <p class="ltx_p">To support parametric transitions, future versions of Animated Vega-Lite could use Lu et al.’s concept of “dynamic functions”&nbsp;<cite class="ltx_cite ltx_citemacro_cite">[<a href="#bib.bib87" title="Enhancing Static Charts With Data-Driven Animations" class="ltx_ref">23</a>]</cite>. These functions use mappings between data and transitions to specify rate-of-change properties of transitions over time (e.g., encoding transition speed instead of mark position).
            Adapting this segue-dominant concept to Animated Vega-Lite could increase expressivity, though further work is required to understand its composition with and implications for static and interactive language constructs.
            For instance, segue transition properties may more easily compose with existing static and interactive Vega-Lite constructs if translated back into scene keyframes as direct encodings instead of rates (e.g. instantiating transition speed as additional position keyframes). However, this would trade off the memory efficiency of the segue representation.</p>
        </div>
        <div id="S7.SS2.SSS2.p8" class="ltx_para">
          <p class="ltx_p"><strong class="ltx_text ltx_font_bold">Connecting transitions in series and parallel.</strong>
            Some of the most compelling animated examples cannot be represented as a linear sequence of transitions, parametric or not.
            For instance, Periscopic’s Gun Deaths animation&nbsp;<cite class="ltx_cite ltx_citemacro_cite">[<a href="#bib.bib72" title="United States gun death data visualization" class="ltx_ref">30</a>]</cite>, a visualization frequently cited by our interviewees, cannot easily be represented even by parametric transitions.
            When discussing this example, Thompson remarked:
            <emph class="ltx_emph ltx_font_italic">“This was one that I had on my list of <em class="ltx_emph ltx_font_upright">‘oh it would be so cool if we could create this,’</em> and then I could just not figure out a way of doing it. […] How do you have the circle appear and then drop, and then the line keeps going? I have no clue how to do that [in Data Animator]”</emph>.
            Authoring this animation is difficult because there is no linear transition specification: the animation splits in two when the circle drops and the line continues. We are not certain that <emph class="ltx_text ltx_font_italic">any</emph> of the grammars we have discussed in our critical reflections can easily express this animation, because it involves both scene and segue animation.
          </p>
        </div>
        <div id="S7.SS2.SSS2.p9" class="ltx_para">
          <p class="ltx_p">Gemini’s <emph class="ltx_text ltx_font_italic">composition rules</emph> offer a promising path for the transitions necessary to support the Gun Deaths animation.
            Gemini’s <emph class="ltx_text ltx_font_italic">concat</emph> primitive allows a user to specify animations in series, while its <emph class="ltx_text ltx_font_italic">sync</emph> primitive allows a user to specify animation components that play in parallel. Using these primitives, one could specify a sync that splits the animation into the circle and the line, and then concat the many stages of the Gun Deaths animation together. More generally, concat and sync allow a user to model transitions as a <emph class="ltx_text ltx_font_italic">series-parallel</emph> graph&nbsp;<cite class="ltx_cite ltx_citemacro_cite">[<a href="#bib.bib89" title="Series–parallel graph — Wikipedia, The Free Encyclopedia" class="ltx_ref">48</a>]</cite>.</p>
        </div>
        <div id="S7.SS2.SSS2.p10" class="ltx_para">
          <p class="ltx_p">However, this abstraction alone is not enough. While Gemini has a rich transition language, it cannot generate keyframes automatically from data like Animated Vega-Lite. This generation is necessary for the Gun Deaths animation to visualize individual points. Combining Gemini’s segue abstractions with Animated Vega-Lite’s scene abstractions is a promising future direction for expressive animation.</p>
        </div>
      </section>
    </section>
  </section>
  <section id="S8" class="ltx_section">
    <h2 class="ltx_title ltx_title_section" id="H-S8">
      <span class="ltx_tag ltx_tag_section">8 </span>Conclusion and Future Work</h2>
    <div id="S8.p1" class="ltx_para">
      <p class="ltx_p">Animated Vega-Lite contributes a low viscosity, compositional, and systematically enumerable grammar that unifies specification of static, interactive, and animated visualizations.
        Within a single grammar, authors can now easily switch between the three modalities during rapid prototyping, and also compose them together to effectively communicate and analyze faceted and time-varying data.</p>
    </div>
    <div id="S8.p2" class="ltx_para">
      <p class="ltx_p">Our grammar takes a promising step in helping authors develop visualizations that leverage the dynamic affordances of computational media.
        During interviews, Pedersen described unification as the “holy grail” of data visualization APIs: <emph class="ltx_emph ltx_font_italic">“A grammar of graphics that defines how things look, a grammar of animation that defines how things react, and a grammar of interaction that defines how things interact. Having all of that in one unified theoretical framework would simply be awesome.”</emph>
        Future work might more deeply explore the distinctions and tradeoffs we surfaced between transition and keyframe models, or study the implications of unification at the lower-level of reactive programming semantics and data stream management.
      </p>
    </div>
    <div id="S8.p3" class="ltx_para">
      <p class="ltx_p">Beyond language design, we hope that Animated Vega-Lite facilitates future work on interactive and animated visualization akin to the role the original Vega-Lite has played.
        For instance, how might we leverage Animated Vega-Lite’s ability to enumerate static, interactive, and animated visualizations to study how these modalities facilitate data analysis and communication — replicating and extending prior work&nbsp;<cite class="ltx_cite ltx_citemacro_cite">[<a href="#bib.bib36" title="Effectiveness of Animation in Trend Visualization" class="ltx_ref">33</a>]</cite> more systematically?
        Similarly, how might study results be codified in the Draco knowledge base&nbsp;<cite class="ltx_cite ltx_citemacro_cite">[<a href="#bib.bib80" title="Formalizing Visualization Design Knowledge as Constraints: Actionable and Extensible Models in Draco" class="ltx_ref">28</a>]</cite>, or exposed in systems like Voyager&nbsp;<cite class="ltx_cite ltx_citemacro_cite">[<a href="#bib.bib82" title="Voyager: Exploratory Analysis via Faceted Browsing of Visualization Recommendations" class="ltx_ref">49</a>, <a href="#bib.bib81" title="Voyager 2: Augmenting Visual Analysis with Partial View Specifications" class="ltx_ref">50</a>]</cite> or Lux&nbsp;<cite class="ltx_cite ltx_citemacro_cite">[<a href="#bib.bib79" title="Lux: always-on visualization recommendations for exploratory dataframe workflows" class="ltx_ref">22</a>]</cite> to recommend animated visualizations during exploratory data analysis? To support this future research, we intend to contribute our work back to the open source Vega-Lite project.</p>
    </div>
    <div class="ltx_acknowledgements">
      <h2 class="ltx_title ltx_title_acknowledgements" id="H-ack">Acknowledgements</h2>
      We thank our critical reflections interlocutors and anonymous reviewers. This work was supported by NSF grants #1942659 and #1900991 and by the NSF’s SaTC Program. This material is based upon work supported by the National Science Foundation under Grant No. 1745302.
    </div>
  </section>
  <section id="bib" class="ltx_bibliography">
    <h2 class="ltx_title ltx_title_bibliography" id="H-bib">References</h2>
    <ul id="bib.L1" class="ltx_biblist">
      <li id="bib.bib45" class="ltx_bibitem ltx_bib_inproceedings">
        <span class="ltx_tag ltx_bib_key ltx_role_refnum ltx_tag_bibitem">[1]</span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_author">F. A. Abukhodair, B. E. Riecke, H. I. Erhan, and C. D. Shaw</span><span class="ltx_text ltx_bib_year"> (2013-02)</span>
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_title">Does interactive animation control improve exploratory data analysis of animated trend visualization?</span>.
        </span>
        <span class="ltx_bibblock">In <span class="ltx_text ltx_bib_inbook">Visualization and Data Analysis 2013</span>,
        </span>
        <span class="ltx_bibblock">Vol. <span class="ltx_text ltx_bib_volume">8654</span>, <span class="ltx_text ltx_bib_pages"> pp.&nbsp;211–223</span>.
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_links"><a href="https://www-spiedigitallibrary-org.libproxy.mit.edu/conference-proceedings-of-spie/8654/86540I/Does-interactive-animation-control-improve-exploratory-data-analysis-of-animated/10.1117/12.2001874.full" title="" class="ltx_ref ltx_bib_external">Link</a>,
            <a href="https://dx.doi.org/10.1117/12.2001874" title="" class="ltx_ref doi ltx_bib_external">Document</a></span>
        </span>
        <span class="ltx_bibblock ltx_bib_cited">Cited by: <a href="#S2.SS1.p2" title="2.1 Animation in Information Visualization ‣ 2 Related Work ‣ Animated Vega-Lite: Unifying Animation with a Grammar of Interactive Graphics" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§2.1</span></a>.
        </span>
      </li>
      <li id="bib.bib35" class="ltx_bibitem ltx_bib_article">
        <span class="ltx_tag ltx_bib_key ltx_role_refnum ltx_tag_bibitem">[2]</span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_author">M. Bostock, V. Ogievetsky, and J. Heer</span><span class="ltx_text ltx_bib_year"> (2011-12)</span>
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_title">D³ Data-Driven Documents</span>.
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_journal">IEEE Transactions on Visualization and Computer Graphics</span> <span class="ltx_text ltx_bib_volume">17</span> (<span class="ltx_text ltx_bib_number">12</span>), <span class="ltx_text ltx_bib_pages"> pp.&nbsp;2301–2309</span> (<span class="ltx_text ltx_bib_language">en</span>).
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_links"><span class="ltx_text issn ltx_bib_external">ISSN 1077-2626</span>,
            <a href="http://ieeexplore.ieee.org/document/6064996/" title="" class="ltx_ref ltx_bib_external">Link</a>,
            <a href="https://dx.doi.org/10.1109/TVCG.2011.185" title="" class="ltx_ref doi ltx_bib_external">Document</a></span>
        </span>
        <span class="ltx_bibblock ltx_bib_cited">Cited by: <a href="#S1.p2" title="1 Introduction ‣ Animated Vega-Lite: Unifying Animation with a Grammar of Interactive Graphics" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§1</span></a>,
          <a href="#S2.SS2.p2" title="2.2 Authoring Interaction and Animation ‣ 2 Related Work ‣ Animated Vega-Lite: Unifying Animation with a Grammar of Interactive Graphics" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§2.2</span></a>.
        </span>
      </li>
      <li id="bib.bib49" class="ltx_bibitem ltx_bib_article">
        <span class="ltx_tag ltx_bib_key ltx_role_refnum ltx_tag_bibitem">[3]</span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_author">H. Bucher and P. Schumacher</span><span class="ltx_text ltx_bib_year"> (2006-01)</span>
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_title">The relevance of attention for selecting news content. An eye-tracking study on attention patterns in the reception of print and online media</span>.
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_journal">Communications</span> <span class="ltx_text ltx_bib_volume">31</span> (<span class="ltx_text ltx_bib_number">3</span>) (<span class="ltx_text ltx_bib_language">en</span>).
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_links"><span class="ltx_text issn ltx_bib_external">ISSN 0341-2059, 1613-4087</span>,
            <a href="https://www.degruyter.com/document/doi/10.1515/COMMUN.2006.022/html" title="" class="ltx_ref ltx_bib_external">Link</a>,
            <a href="https://dx.doi.org/10.1515/COMMUN.2006.022" title="" class="ltx_ref doi ltx_bib_external">Document</a></span>
        </span>
        <span class="ltx_bibblock ltx_bib_cited">Cited by: <a href="#S2.SS1.p2" title="2.1 Animation in Information Visualization ‣ 2 Related Work ‣ Animated Vega-Lite: Unifying Animation with a Grammar of Interactive Graphics" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§2.1</span></a>.
        </span>
      </li>
      <li id="bib.bib58" class="ltx_bibitem ltx_bib_article">
        <span class="ltx_tag ltx_bib_key ltx_role_refnum ltx_tag_bibitem">[4]</span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_author">F. Chevalier, P. Dragicevic, and S. Franconeri</span><span class="ltx_text ltx_bib_year"> (2014-12)</span>
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_title">The Not-so-Staggering Effect of Staggered Animated Transitions on Visual Tracking</span>.
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_journal">IEEE Transactions on Visualization and Computer Graphics</span> <span class="ltx_text ltx_bib_volume">20</span> (<span class="ltx_text ltx_bib_number">12</span>), <span class="ltx_text ltx_bib_pages"> pp.&nbsp;2241–2250</span>.
        </span>
        <span class="ltx_bibblock">Note: <span class="ltx_text ltx_bib_note">Conference Name: IEEE Transactions on Visualization and Computer Graphics</span>
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_links"><span class="ltx_text issn ltx_bib_external">ISSN 1941-0506</span>,
            <a href="https://dx.doi.org/10.1109/TVCG.2014.2346424" title="" class="ltx_ref doi ltx_bib_external">Document</a></span>
        </span>
        <span class="ltx_bibblock ltx_bib_cited">Cited by: <a href="#S2.SS1.p1" title="2.1 Animation in Information Visualization ‣ 2 Related Work ‣ Animated Vega-Lite: Unifying Animation with a Grammar of Interactive Graphics" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§2.1</span></a>.
        </span>
      </li>
      <li id="bib.bib94" class="ltx_bibitem ltx_bib_article">
        <span class="ltx_tag ltx_bib_key ltx_role_refnum ltx_tag_bibitem">[5]</span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_author">M. Coblenz, G. Kambhatla, P. Koronkevich, J. L. Wise, C. Barnaby, J. Sunshine, J. Aldrich, and B. A. Myers</span><span class="ltx_text ltx_bib_year"> (2021-07)</span>
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_title">PLIERS: A Process that Integrates User-Centered Methods into Programming Language Design</span>.
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_journal">ACM Transactions on Computer-Human Interaction</span> <span class="ltx_text ltx_bib_volume">28</span> (<span class="ltx_text ltx_bib_number">4</span>), <span class="ltx_text ltx_bib_pages"> pp.&nbsp;28:1–28:53</span>.
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_links"><span class="ltx_text issn ltx_bib_external">ISSN 1073-0516</span>,
            <a href="http://doi.org/10.1145/3452379" title="" class="ltx_ref ltx_bib_external">Link</a>,
            <a href="https://dx.doi.org/10.1145/3452379" title="" class="ltx_ref doi ltx_bib_external">Document</a></span>
        </span>
        <span class="ltx_bibblock ltx_bib_cited">Cited by: <a href="#S7.SS1.SSS2.p2" title="7.1.2 Natural Programming vs. Core Calculus Design ‣ 7.1 Grammar Design Process ‣ 7 Evaluation: Critical Reflection ‣ Animated Vega-Lite: Unifying Animation with a Grammar of Interactive Graphics" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§7.1.2</span></a>,
          <a href="#S7.SS1.SSS2.p3" title="7.1.2 Natural Programming vs. Core Calculus Design ‣ 7.1 Grammar Design Process ‣ 7 Evaluation: Critical Reflection ‣ Animated Vega-Lite: Unifying Animation with a Grammar of Interactive Graphics" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§7.1.2</span></a>.
        </span>
      </li>
      <li id="bib.bib59" class="ltx_bibitem ltx_bib_inproceedings">
        <span class="ltx_tag ltx_bib_key ltx_role_refnum ltx_tag_bibitem">[6]</span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_author">P. Dragicevic, A. Bezerianos, W. Javed, N. Elmqvist, and J. Fekete</span><span class="ltx_text ltx_bib_year"> (2011-05)</span>
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_title">Temporal distortion for animated transitions</span>.
        </span>
        <span class="ltx_bibblock">In <span class="ltx_text ltx_bib_inbook">Proceedings of the SIGCHI Conference on Human Factors in Computing Systems</span>,
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_place">Vancouver BC Canada</span>, <span class="ltx_text ltx_bib_pages"> pp.&nbsp;2009–2018</span> (<span class="ltx_text ltx_bib_language">en</span>).
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_links">,
            <a href="https://dl.acm.org/doi/10.1145/1978942.1979233" title="" class="ltx_ref ltx_bib_external">Link</a>,
            <a href="https://dx.doi.org/10.1145/1978942.1979233" title="" class="ltx_ref doi ltx_bib_external">Document</a></span>
        </span>
        <span class="ltx_bibblock ltx_bib_cited">Cited by: <a href="#S2.SS1.p1" title="2.1 Animation in Information Visualization ‣ 2 Related Work ‣ Animated Vega-Lite: Unifying Animation with a Grammar of Interactive Graphics" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§2.1</span></a>.
        </span>
      </li>
      <li id="bib.bib74" class="ltx_bibitem ltx_bib_inproceedings">
        <span class="ltx_tag ltx_bib_key ltx_role_refnum ltx_tag_bibitem">[7]</span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_author">C. Elliott and P. Hudak</span><span class="ltx_text ltx_bib_year"> (1997-08)</span>
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_title">Functional reactive animation</span>.
        </span>
        <span class="ltx_bibblock">In <span class="ltx_text ltx_bib_inbook">Proceedings of the second ACM SIGPLAN international conference on Functional programming</span>,
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_series">ICFP ’97</span>, <span class="ltx_text ltx_bib_place">New York, NY, USA</span>, <span class="ltx_text ltx_bib_pages"> pp.&nbsp;263–273</span>.
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_links">,
            <a href="https://doi.org/10.1145/258948.258973" title="" class="ltx_ref ltx_bib_external">Link</a>,
            <a href="https://dx.doi.org/10.1145/258948.258973" title="" class="ltx_ref doi ltx_bib_external">Document</a></span>
        </span>
        <span class="ltx_bibblock ltx_bib_cited">Cited by: <a href="#S3.SS1.p1" title="3.1 Conceptually Bridging Interaction and Animation ‣ 3 Motivation: Unifying Interaction and Animation ‣ Animated Vega-Lite: Unifying Animation with a Grammar of Interactive Graphics" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§3.1</span></a>.
        </span>
      </li>
      <li id="bib.bib90" class="ltx_bibitem ltx_bib_inproceedings">
        <span class="ltx_tag ltx_bib_key ltx_role_refnum ltx_tag_bibitem">[8]</span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_author">T. Ge, B. Lee, and Y. Wang</span><span class="ltx_text ltx_bib_year"> (2021-05)</span>
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_title">CAST: Authoring Data-Driven Chart Animations</span>.
        </span>
        <span class="ltx_bibblock">In <span class="ltx_text ltx_bib_inbook">Proceedings of the 2021 CHI Conference on Human Factors in Computing Systems</span>,
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_series">CHI ’21</span>, <span class="ltx_text ltx_bib_place">New York, NY, USA</span>, <span class="ltx_text ltx_bib_pages"> pp.&nbsp;1–15</span>.
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_links">,
            <a href="http://doi.org/10.1145/3411764.3445452" title="" class="ltx_ref ltx_bib_external">Link</a>,
            <a href="https://dx.doi.org/10.1145/3411764.3445452" title="" class="ltx_ref doi ltx_bib_external">Document</a></span>
        </span>
        <span class="ltx_bibblock ltx_bib_cited">Cited by: <a href="#S1.p2" title="1 Introduction ‣ Animated Vega-Lite: Unifying Animation with a Grammar of Interactive Graphics" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§1</span></a>,
          <a href="#S1.p5" title="1 Introduction ‣ Animated Vega-Lite: Unifying Animation with a Grammar of Interactive Graphics" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§1</span></a>,
          <a href="#S2.SS2.p1" title="2.2 Authoring Interaction and Animation ‣ 2 Related Work ‣ Animated Vega-Lite: Unifying Animation with a Grammar of Interactive Graphics" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§2.2</span></a>,
          <a href="#S7.p1" title="7 Evaluation: Critical Reflection ‣ Animated Vega-Lite: Unifying Animation with a Grammar of Interactive Graphics" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§7</span></a>.
        </span>
      </li>
      <li id="bib.bib91" class="ltx_bibitem ltx_bib_article">
        <span class="ltx_tag ltx_bib_key ltx_role_refnum ltx_tag_bibitem">[9]</span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_author">T. Ge, Y. Zhao, B. Lee, D. Ren, B. Chen, and Y. Wang</span><span class="ltx_text ltx_bib_year"> (2020)</span>
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_title">Canis: A High-Level Language for Data-Driven Chart Animations</span>.
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_journal">Computer Graphics Forum</span>.
        </span>
        <span class="ltx_bibblock">Note: <span class="ltx_text ltx_bib_note">Publisher: The Eurographics Association and John Wiley &amp; Sons Ltd.</span>
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_links"><span class="ltx_text issn ltx_bib_external">ISSN 1467-8659</span>,
            <a href="https://dx.doi.org/10.1111/cgf.14005" title="" class="ltx_ref doi ltx_bib_external">Document</a></span>
        </span>
        <span class="ltx_bibblock ltx_bib_cited">Cited by: <a href="#S1.p2" title="1 Introduction ‣ Animated Vega-Lite: Unifying Animation with a Grammar of Interactive Graphics" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§1</span></a>,
          <a href="#S1.p5" title="1 Introduction ‣ Animated Vega-Lite: Unifying Animation with a Grammar of Interactive Graphics" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§1</span></a>,
          <a href="#S2.SS2.p1" title="2.2 Authoring Interaction and Animation ‣ 2 Related Work ‣ Animated Vega-Lite: Unifying Animation with a Grammar of Interactive Graphics" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§2.2</span></a>,
          <a href="#S7.p1" title="7 Evaluation: Critical Reflection ‣ Animated Vega-Lite: Unifying Animation with a Grammar of Interactive Graphics" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§7</span></a>.
        </span>
      </li>
      <li id="bib.bib50" class="ltx_bibitem ltx_bib_article">
        <span class="ltx_tag ltx_bib_key ltx_role_refnum ltx_tag_bibitem">[10]</span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_author">E. Greussing, S. H. Kessler, and H. G. Boomgaarden</span><span class="ltx_text ltx_bib_year"> (2020-12)</span>
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_title">Learning From Science News via Interactive and Animated Data Visualizations: An Investigation Combining Eye Tracking, Online Survey, and Cued Retrospective Reporting</span>.
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_journal">Science Communication</span> <span class="ltx_text ltx_bib_volume">42</span> (<span class="ltx_text ltx_bib_number">6</span>), <span class="ltx_text ltx_bib_pages"> pp.&nbsp;803–828</span>.
        </span>
        <span class="ltx_bibblock">Note: <span class="ltx_text ltx_bib_note">Publisher: SAGE Publications Inc</span>
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_links"><span class="ltx_text issn ltx_bib_external">ISSN 1075-5470</span>,
            <a href="https://doi.org/10.1177/1075547020962100" title="" class="ltx_ref ltx_bib_external">Link</a>,
            <a href="https://dx.doi.org/10.1177/1075547020962100" title="" class="ltx_ref doi ltx_bib_external">Document</a></span>
        </span>
        <span class="ltx_bibblock ltx_bib_cited">Cited by: <a href="#S2.SS1.p2" title="2.1 Animation in Information Visualization ‣ 2 Related Work ‣ Animated Vega-Lite: Unifying Animation with a Grammar of Interactive Graphics" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§2.1</span></a>.
        </span>
      </li>
      <li id="bib.bib5" class="ltx_bibitem ltx_bib_article">
        <span class="ltx_tag ltx_bib_key ltx_role_refnum ltx_tag_bibitem">[11]</span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_author">J. Heer and G. Robertson</span><span class="ltx_text ltx_bib_year"> (2007-11)</span>
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_title">Animated Transitions in Statistical Data Graphics</span>.
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_journal">IEEE Transactions on Visualization and Computer Graphics</span> <span class="ltx_text ltx_bib_volume">13</span> (<span class="ltx_text ltx_bib_number">6</span>), <span class="ltx_text ltx_bib_pages"> pp.&nbsp;1240–1247</span> (<span class="ltx_text ltx_bib_language">en</span>).
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_links"><span class="ltx_text issn ltx_bib_external">ISSN 1077-2626</span>,
            <a href="http://ieeexplore.ieee.org/document/4376146/" title="" class="ltx_ref ltx_bib_external">Link</a>,
            <a href="https://dx.doi.org/10.1109/TVCG.2007.70539" title="" class="ltx_ref doi ltx_bib_external">Document</a></span>
        </span>
        <span class="ltx_bibblock ltx_bib_cited">Cited by: <a href="#S1.p5" title="1 Introduction ‣ Animated Vega-Lite: Unifying Animation with a Grammar of Interactive Graphics" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§1</span></a>,
          <a href="#S2.SS1.p1" title="2.1 Animation in Information Visualization ‣ 2 Related Work ‣ Animated Vega-Lite: Unifying Animation with a Grammar of Interactive Graphics" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§2.1</span></a>,
          <a href="#S3.SS1.p2" title="3.1 Conceptually Bridging Interaction and Animation ‣ 3 Motivation: Unifying Interaction and Animation ‣ Animated Vega-Lite: Unifying Animation with a Grammar of Interactive Graphics" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§3.1</span></a>,
          <a href="#S3.T1" title="Table 1 ‣ 3 Motivation: Unifying Interaction and Animation ‣ Animated Vega-Lite: Unifying Animation with a Grammar of Interactive Graphics" class="ltx_ref"><span class="ltx_text ltx_ref_tag">Table 1</span></a>,
          <a href="#S6.F5" title="Figure 5 ‣ 6 Evaluation: Example Gallery ‣ Animated Vega-Lite: Unifying Animation with a Grammar of Interactive Graphics" class="ltx_ref"><span class="ltx_text ltx_ref_tag">Figure 5</span></a>,
          <a href="#S6.p1" title="6 Evaluation: Example Gallery ‣ Animated Vega-Lite: Unifying Animation with a Grammar of Interactive Graphics" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§6</span></a>,
          <a href="#S6.p9" title="6 Evaluation: Example Gallery ‣ Animated Vega-Lite: Unifying Animation with a Grammar of Interactive Graphics" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§6</span></a>,
          <a href="#S7.SS2.SSS2.p4" title="7.2.2 Modeling Transitions Between Keyframes ‣ 7.2 Animation Abstractions and Design Considerations ‣ 7 Evaluation: Critical Reflection ‣ Animated Vega-Lite: Unifying Animation with a Grammar of Interactive Graphics" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§7.2.2</span></a>.
        </span>
      </li>
      <li id="bib.bib60" class="ltx_bibitem ltx_bib_article">
        <span class="ltx_tag ltx_bib_key ltx_role_refnum ltx_tag_bibitem">[12]</span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_author">J. Hullman, P. Resnick, and E. Adar</span><span class="ltx_text ltx_bib_year"> (2015-11)</span>
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_title">Hypothetical Outcome Plots Outperform Error Bars and Violin Plots for Inferences about Reliability of Variable Ordering</span>.
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_journal">PLOS ONE</span> <span class="ltx_text ltx_bib_volume">10</span> (<span class="ltx_text ltx_bib_number">11</span>), <span class="ltx_text ltx_bib_pages"> pp.&nbsp;e0142444</span> (<span class="ltx_text ltx_bib_language">en</span>).
        </span>
        <span class="ltx_bibblock">Note: <span class="ltx_text ltx_bib_note">Publisher: Public Library of Science</span>
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_links"><span class="ltx_text issn ltx_bib_external">ISSN 1932-6203</span>,
            <a href="https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0142444" title="" class="ltx_ref ltx_bib_external">Link</a>,
            <a href="https://dx.doi.org/10.1371/journal.pone.0142444" title="" class="ltx_ref doi ltx_bib_external">Document</a></span>
        </span>
        <span class="ltx_bibblock ltx_bib_cited">Cited by: <a href="#S2.SS1.p1" title="2.1 Animation in Information Visualization ‣ 2 Related Work ‣ Animated Vega-Lite: Unifying Animation with a Grammar of Interactive Graphics" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§2.1</span></a>,
          <a href="#S6.p7" title="6 Evaluation: Example Gallery ‣ Animated Vega-Lite: Unifying Animation with a Grammar of Interactive Graphics" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§6</span></a>.
        </span>
      </li>
      <li id="bib.bib78" class="ltx_bibitem ltx_bib_article">
        <span class="ltx_tag ltx_bib_key ltx_role_refnum ltx_tag_bibitem">[13]</span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_author">J. D. Hunter</span><span class="ltx_text ltx_bib_year"> (2007-05)</span>
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_title">Matplotlib: A 2D Graphics Environment</span>.
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_journal">Computing in Science Engineering</span> <span class="ltx_text ltx_bib_volume">9</span> (<span class="ltx_text ltx_bib_number">3</span>), <span class="ltx_text ltx_bib_pages"> pp.&nbsp;90–95</span>.
        </span>
        <span class="ltx_bibblock">Note: <span class="ltx_text ltx_bib_note">Conference Name: Computing in Science Engineering</span>
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_links"><span class="ltx_text issn ltx_bib_external">ISSN 1558-366X</span>,
            <a href="https://dx.doi.org/10.1109/MCSE.2007.55" title="" class="ltx_ref doi ltx_bib_external">Document</a></span>
        </span>
        <span class="ltx_bibblock ltx_bib_cited">Cited by: <a href="#S2.SS2.p2" title="2.2 Authoring Interaction and Animation ‣ 2 Related Work ‣ Animated Vega-Lite: Unifying Animation with a Grammar of Interactive Graphics" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§2.2</span></a>.
        </span>
      </li>
      <li id="bib.bib71" class="ltx_bibitem ltx_bib_article">
        <span class="ltx_tag ltx_bib_key ltx_role_refnum ltx_tag_bibitem">[14]</span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_author">N. Irwin and K. Quealy</span><span class="ltx_text ltx_bib_year"> (2014-05)</span>
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_title">How Not to Be Misled by the Jobs Report</span>.
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_journal">The New York Times</span> (<span class="ltx_text ltx_bib_language">en-US</span>).
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_links"><span class="ltx_text issn ltx_bib_external">ISSN 0362-4331</span>,
            <a href="https://www.nytimes.com/2014/05/02/upshot/how-not-to-be-misled-by-the-jobs-report.html" title="" class="ltx_ref ltx_bib_external">Link</a></span>
        </span>
        <span class="ltx_bibblock ltx_bib_cited">Cited by: <a href="#S6.F5" title="Figure 5 ‣ 6 Evaluation: Example Gallery ‣ Animated Vega-Lite: Unifying Animation with a Grammar of Interactive Graphics" class="ltx_ref"><span class="ltx_text ltx_ref_tag">Figure 5</span></a>.
        </span>
      </li>
      <li id="bib.bib66" class="ltx_bibitem ltx_bib_misc">
        <span class="ltx_tag ltx_bib_key ltx_role_refnum ltx_tag_bibitem">[15]</span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_author">John Thompson</span><span class="ltx_text ltx_bib_year"> (2020)</span>
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_title">Swimming World Records throughout History</span>.
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_links"><a href="https://data-animator.com/gallery/swimming_world_records.html" title="" class="ltx_ref ltx_bib_external">Link</a></span>
        </span>
        <span class="ltx_bibblock ltx_bib_cited">Cited by: <a href="#S7.F6" title="Figure 6 ‣ 7.2.2 Modeling Transitions Between Keyframes ‣ 7.2 Animation Abstractions and Design Considerations ‣ 7 Evaluation: Critical Reflection ‣ Animated Vega-Lite: Unifying Animation with a Grammar of Interactive Graphics" class="ltx_ref"><span class="ltx_text ltx_ref_tag">Figure 6</span></a>.
        </span>
      </li>
      <li id="bib.bib61" class="ltx_bibitem ltx_bib_article">
        <span class="ltx_tag ltx_bib_key ltx_role_refnum ltx_tag_bibitem">[16]</span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_author">A. Kale, F. Nguyen, M. Kay, and J. Hullman</span><span class="ltx_text ltx_bib_year"> (2019-01)</span>
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_title">Hypothetical Outcome Plots Help Untrained Observers Judge Trends in Ambiguous Data</span>.
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_journal">IEEE Transactions on Visualization and Computer Graphics</span> <span class="ltx_text ltx_bib_volume">25</span> (<span class="ltx_text ltx_bib_number">1</span>), <span class="ltx_text ltx_bib_pages"> pp.&nbsp;892–902</span> (<span class="ltx_text ltx_bib_language">en</span>).
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_links"><span class="ltx_text issn ltx_bib_external">ISSN 1077-2626, 1941-0506, 2160-9306</span>,
            <a href="https://ieeexplore.ieee.org/document/8440816/" title="" class="ltx_ref ltx_bib_external">Link</a>,
            <a href="https://dx.doi.org/10.1109/TVCG.2018.2864909" title="" class="ltx_ref doi ltx_bib_external">Document</a></span>
        </span>
        <span class="ltx_bibblock ltx_bib_cited">Cited by: <a href="#S2.SS1.p1" title="2.1 Animation in Information Visualization ‣ 2 Related Work ‣ Animated Vega-Lite: Unifying Animation with a Grammar of Interactive Graphics" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§2.1</span></a>.
        </span>
      </li>
      <li id="bib.bib57" class="ltx_bibitem ltx_bib_article">
        <span class="ltx_tag ltx_bib_key ltx_role_refnum ltx_tag_bibitem">[17]</span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_author">Y. Kim, M. Correll, and J. Heer</span><span class="ltx_text ltx_bib_year"> (2019)</span>
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_title">Designing Animated Transitions to Convey Aggregate Operations</span>.
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_journal">Computer Graphics Forum</span> <span class="ltx_text ltx_bib_volume">38</span> (<span class="ltx_text ltx_bib_number">3</span>), <span class="ltx_text ltx_bib_pages"> pp.&nbsp;541–551</span> (<span class="ltx_text ltx_bib_language">en</span>).
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_links"><span class="ltx_text issn ltx_bib_external">ISSN 1467-8659</span>,
            <a href="https://onlinelibrary.wiley.com/doi/abs/10.1111/cgf.13709" title="" class="ltx_ref ltx_bib_external">Link</a>,
            <a href="https://dx.doi.org/10.1111/cgf.13709" title="" class="ltx_ref doi ltx_bib_external">Document</a></span>
        </span>
        <span class="ltx_bibblock ltx_bib_cited">Cited by: <a href="#S2.SS1.p1" title="2.1 Animation in Information Visualization ‣ 2 Related Work ‣ Animated Vega-Lite: Unifying Animation with a Grammar of Interactive Graphics" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§2.1</span></a>.
        </span>
      </li>
      <li id="bib.bib46" class="ltx_bibitem ltx_bib_inproceedings">
        <span class="ltx_tag ltx_bib_key ltx_role_refnum ltx_tag_bibitem">[18]</span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_author">Y. Kim and J. Heer</span><span class="ltx_text ltx_bib_year"> (2021-10)</span>
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_title">Gemini^2: Generating Keyframe-Oriented Animated Transitions Between Statistical Graphics</span>.
        </span>
        <span class="ltx_bibblock">In <span class="ltx_text ltx_bib_inbook">2021 IEEE Visualization Conference (VIS)</span>,
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_place">New Orleans, LA, USA</span>, <span class="ltx_text ltx_bib_pages"> pp.&nbsp;201–205</span> (<span class="ltx_text ltx_bib_language">en</span>).
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_links">,
            <a href="https://ieeexplore.ieee.org/document/9623291/" title="" class="ltx_ref ltx_bib_external">Link</a>,
            <a href="https://dx.doi.org/10.1109/VIS49827.2021.9623291" title="" class="ltx_ref doi ltx_bib_external">Document</a></span>
        </span>
        <span class="ltx_bibblock ltx_bib_cited">Cited by: <a href="#S1.p2" title="1 Introduction ‣ Animated Vega-Lite: Unifying Animation with a Grammar of Interactive Graphics" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§1</span></a>,
          <a href="#S1.p5" title="1 Introduction ‣ Animated Vega-Lite: Unifying Animation with a Grammar of Interactive Graphics" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§1</span></a>,
          <a href="#S2.SS2.p1" title="2.2 Authoring Interaction and Animation ‣ 2 Related Work ‣ Animated Vega-Lite: Unifying Animation with a Grammar of Interactive Graphics" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§2.2</span></a>,
          <a href="#S7.p1" title="7 Evaluation: Critical Reflection ‣ Animated Vega-Lite: Unifying Animation with a Grammar of Interactive Graphics" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§7</span></a>.
        </span>
      </li>
      <li id="bib.bib92" class="ltx_bibitem ltx_bib_article">
        <span class="ltx_tag ltx_bib_key ltx_role_refnum ltx_tag_bibitem">[19]</span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_author">Y. Kim and J. Heer</span><span class="ltx_text ltx_bib_year"> (2021)</span>
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_title">Gemini: A Grammar and Recommender System for Animated Transitions in Statistical Graphics</span>.
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_journal">IEEE Transactions on Visualization and Computer Graphics</span> <span class="ltx_text ltx_bib_volume">27</span> (<span class="ltx_text ltx_bib_number">2</span>), <span class="ltx_text ltx_bib_pages"> pp.&nbsp;485–494</span>.
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_links"><a href="https://dx.doi.org/10.1109/TVCG.2020.3030360" title="" class="ltx_ref doi ltx_bib_external">Document</a></span>
        </span>
        <span class="ltx_bibblock ltx_bib_cited">Cited by: <a href="#S1.p2" title="1 Introduction ‣ Animated Vega-Lite: Unifying Animation with a Grammar of Interactive Graphics" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§1</span></a>,
          <a href="#S1.p5" title="1 Introduction ‣ Animated Vega-Lite: Unifying Animation with a Grammar of Interactive Graphics" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§1</span></a>,
          <a href="#S2.SS2.p1" title="2.2 Authoring Interaction and Animation ‣ 2 Related Work ‣ Animated Vega-Lite: Unifying Animation with a Grammar of Interactive Graphics" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§2.2</span></a>,
          <a href="#S7.SS1.SSS2.p1" title="7.1.2 Natural Programming vs. Core Calculus Design ‣ 7.1 Grammar Design Process ‣ 7 Evaluation: Critical Reflection ‣ Animated Vega-Lite: Unifying Animation with a Grammar of Interactive Graphics" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§7.1.2</span></a>,
          <a href="#S7.p1" title="7 Evaluation: Critical Reflection ‣ Animated Vega-Lite: Unifying Animation with a Grammar of Interactive Graphics" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§7</span></a>.
        </span>
      </li>
      <li id="bib.bib86" class="ltx_bibitem ltx_bib_article">
        <span class="ltx_tag ltx_bib_key ltx_role_refnum ltx_tag_bibitem">[20]</span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_author">B. Kondo and C. Collins</span><span class="ltx_text ltx_bib_year"> (2014-12)</span>
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_title">DimpVis: Exploring Time-varying Information Visualizations by Direct Manipulation</span>.
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_journal">IEEE Transactions on Visualization and Computer Graphics</span> <span class="ltx_text ltx_bib_volume">20</span> (<span class="ltx_text ltx_bib_number">12</span>), <span class="ltx_text ltx_bib_pages"> pp.&nbsp;2003–2012</span>.
        </span>
        <span class="ltx_bibblock">Note: <span class="ltx_text ltx_bib_note">Conference Name: IEEE Transactions on Visualization and Computer Graphics</span>
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_links"><span class="ltx_text issn ltx_bib_external">ISSN 1941-0506</span>,
            <a href="https://dx.doi.org/10.1109/TVCG.2014.2346250" title="" class="ltx_ref doi ltx_bib_external">Document</a></span>
        </span>
        <span class="ltx_bibblock ltx_bib_cited">Cited by: <a href="#S3.SS1.p1" title="3.1 Conceptually Bridging Interaction and Animation ‣ 3 Motivation: Unifying Interaction and Animation ‣ Animated Vega-Lite: Unifying Animation with a Grammar of Interactive Graphics" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§3.1</span></a>.
        </span>
      </li>
      <li id="bib.bib52" class="ltx_bibitem ltx_bib_article">
        <span class="ltx_tag ltx_bib_key ltx_role_refnum ltx_tag_bibitem">[21]</span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_author">F. A. La Sorte, D. Fink, W. M. Hochachka, and S. Kelling</span><span class="ltx_text ltx_bib_year"> (2016-01)</span>
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_title">Convergence of broad-scale migration strategies in terrestrial birds</span>.
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_journal">Proceedings of the Royal Society B: Biological Sciences</span> <span class="ltx_text ltx_bib_volume">283</span> (<span class="ltx_text ltx_bib_number">1823</span>), <span class="ltx_text ltx_bib_pages"> pp.&nbsp;20152588</span>.
        </span>
        <span class="ltx_bibblock">Note: <span class="ltx_text ltx_bib_note">Publisher: Royal Society</span>
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_links"><a href="https://royalsocietypublishing.org/doi/full/10.1098/rspb.2015.2588" title="" class="ltx_ref ltx_bib_external">Link</a>,
            <a href="https://dx.doi.org/10.1098/rspb.2015.2588" title="" class="ltx_ref doi ltx_bib_external">Document</a></span>
        </span>
        <span class="ltx_bibblock ltx_bib_cited">Cited by: <a href="#S3.SS2.p1" title="3.2 Low-Viscous Authoring: An Example Usage Scenario ‣ 3 Motivation: Unifying Interaction and Animation ‣ Animated Vega-Lite: Unifying Animation with a Grammar of Interactive Graphics" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§3.2</span></a>.
        </span>
      </li>
      <li id="bib.bib79" class="ltx_bibitem ltx_bib_article">
        <span class="ltx_tag ltx_bib_key ltx_role_refnum ltx_tag_bibitem">[22]</span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_author">D. J. Lee, D. Tang, K. Agarwal, T. Boonmark, C. Chen, J. Kang, U. Mukhopadhyay, J. Song, M. Yong, M. A. Hearst, and A. G. Parameswaran</span><span class="ltx_text ltx_bib_year"> (2021-11)</span>
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_title">Lux: always-on visualization recommendations for exploratory dataframe workflows</span>.
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_journal">Proceedings of the VLDB Endowment</span> <span class="ltx_text ltx_bib_volume">15</span> (<span class="ltx_text ltx_bib_number">3</span>), <span class="ltx_text ltx_bib_pages"> pp.&nbsp;727–738</span>.
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_links"><span class="ltx_text issn ltx_bib_external">ISSN 2150-8097</span>,
            <a href="https://doi.org/10.14778/3494124.3494151" title="" class="ltx_ref ltx_bib_external">Link</a>,
            <a href="https://dx.doi.org/10.14778/3494124.3494151" title="" class="ltx_ref doi ltx_bib_external">Document</a></span>
        </span>
        <span class="ltx_bibblock ltx_bib_cited">Cited by: <a href="#S8.p3" title="8 Conclusion and Future Work ‣ Animated Vega-Lite: Unifying Animation with a Grammar of Interactive Graphics" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§8</span></a>.
        </span>
      </li>
      <li id="bib.bib87" class="ltx_bibitem ltx_bib_article">
        <span class="ltx_tag ltx_bib_key ltx_role_refnum ltx_tag_bibitem">[23]</span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_author">M. Lu, N. Fish, S. Wang, J. Lanir, D. Cohen-Or, and H. Huang</span><span class="ltx_text ltx_bib_year"> (2022-07)</span>
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_title">Enhancing Static Charts With Data-Driven Animations</span>.
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_journal">IEEE Transactions on Visualization and Computer Graphics</span> <span class="ltx_text ltx_bib_volume">28</span> (<span class="ltx_text ltx_bib_number">7</span>), <span class="ltx_text ltx_bib_pages"> pp.&nbsp;2628–2640</span>.
        </span>
        <span class="ltx_bibblock">Note: <span class="ltx_text ltx_bib_note">Conference Name: IEEE Transactions on Visualization and Computer Graphics</span>
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_links"><span class="ltx_text issn ltx_bib_external">ISSN 1941-0506</span>,
            <a href="https://dx.doi.org/10.1109/TVCG.2020.3037300" title="" class="ltx_ref doi ltx_bib_external">Document</a></span>
        </span>
        <span class="ltx_bibblock ltx_bib_cited">Cited by: <a href="#S7.SS2.SSS2.p7" title="7.2.2 Modeling Transitions Between Keyframes ‣ 7.2 Animation Abstractions and Design Considerations ‣ 7 Evaluation: Critical Reflection ‣ Animated Vega-Lite: Unifying Animation with a Grammar of Interactive Graphics" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§7.2.2</span></a>.
        </span>
      </li>
      <li id="bib.bib88" class="ltx_bibitem ltx_bib_inproceedings">
        <span class="ltx_tag ltx_bib_key ltx_role_refnum ltx_tag_bibitem">[24]</span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_author">A. M. McNutt and R. Chugh</span><span class="ltx_text ltx_bib_year"> (2021-05)</span>
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_title">Integrated Visualization Editing via Parameterized Declarative Templates</span>.
        </span>
        <span class="ltx_bibblock">In <span class="ltx_text ltx_bib_inbook">Proceedings of the 2021 CHI Conference on Human Factors in Computing Systems</span>,
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_place">Yokohama Japan</span>, <span class="ltx_text ltx_bib_pages"> pp.&nbsp;1–14</span> (<span class="ltx_text ltx_bib_language">en</span>).
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_links">,
            <a href="https://dl.acm.org/doi/10.1145/3411764.3445356" title="" class="ltx_ref ltx_bib_external">Link</a>,
            <a href="https://dx.doi.org/10.1145/3411764.3445356" title="" class="ltx_ref doi ltx_bib_external">Document</a></span>
        </span>
        <span class="ltx_bibblock ltx_bib_cited">Cited by: <a href="#S7.SS2.SSS1.p4" title="7.2.1 Scene- vs. Segue-Dominant Abstractions ‣ 7.2 Animation Abstractions and Design Considerations ‣ 7 Evaluation: Critical Reflection ‣ Animated Vega-Lite: Unifying Animation with a Grammar of Interactive Graphics" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§7.2.1</span></a>.
        </span>
      </li>
      <li id="bib.bib73" class="ltx_bibitem ltx_bib_inproceedings">
        <span class="ltx_tag ltx_bib_key ltx_role_refnum ltx_tag_bibitem">[25]</span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_author">L. A. Meyerovich, A. Guha, J. Baskin, G. H. Cooper, M. Greenberg, A. Bromfield, and S. Krishnamurthi</span><span class="ltx_text ltx_bib_year"> (2009-10)</span>
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_title">Flapjax: a programming language for Ajax applications</span>.
        </span>
        <span class="ltx_bibblock">In <span class="ltx_text ltx_bib_inbook">Proceedings of the 24th ACM SIGPLAN conference on Object oriented programming systems languages and applications</span>,
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_series">OOPSLA ’09</span>, <span class="ltx_text ltx_bib_place">New York, NY, USA</span>, <span class="ltx_text ltx_bib_pages"> pp.&nbsp;1–20</span>.
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_links">,
            <a href="https://doi.org/10.1145/1640089.1640091" title="" class="ltx_ref ltx_bib_external">Link</a>,
            <a href="https://dx.doi.org/10.1145/1640089.1640091" title="" class="ltx_ref doi ltx_bib_external">Document</a></span>
        </span>
        <span class="ltx_bibblock ltx_bib_cited">Cited by: <a href="#S3.SS1.p1" title="3.1 Conceptually Bridging Interaction and Animation ‣ 3 Motivation: Unifying Interaction and Animation ‣ Animated Vega-Lite: Unifying Animation with a Grammar of Interactive Graphics" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§3.1</span></a>.
        </span>
      </li>
      <li id="bib.bib63" class="ltx_bibitem ltx_bib_misc">
        <span class="ltx_tag ltx_bib_key ltx_role_refnum ltx_tag_bibitem">[26]</span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_author">Mike Bostock</span><span class="ltx_text ltx_bib_year"> (2015)</span>
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_title">D3-ease</span>.
        </span>
        <span class="ltx_bibblock">Note: <span class="ltx_text ltx_bib_note">https://github.com/d3/d3-ease</span>
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_links"><a href="https://github.com/d3/d3-ease" title="" class="ltx_ref ltx_bib_external">Link</a></span>
        </span>
        <span class="ltx_bibblock ltx_bib_cited">Cited by: <a href="#S4.SS2.SSS5.p1" title="4.2.5 Global Easing ‣ 4.2 Selections with a Timer Event Stream ‣ 4 A Grammar of Animation in Vega-Lite ‣ Animated Vega-Lite: Unifying Animation with a Grammar of Interactive Graphics" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§4.2.5</span></a>.
        </span>
      </li>
      <li id="bib.bib64" class="ltx_bibitem ltx_bib_misc">
        <span class="ltx_tag ltx_bib_key ltx_role_refnum ltx_tag_bibitem">[27]</span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_author">Mike Bostock</span><span class="ltx_text ltx_bib_year"> (2019)</span>
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_title">Bar Chart Race, Explained</span>.
        </span>
        <span class="ltx_bibblock">Note: <span class="ltx_text ltx_bib_note">https://observablehq.com/@d3/bar-chart-race-explained</span>
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_links"><a href="https://observablehq.com/@d3/bar-chart-race-explained" title="" class="ltx_ref ltx_bib_external">Link</a></span>
        </span>
        <span class="ltx_bibblock ltx_bib_cited">Cited by: <a href="#S4.F4" title="Figure 4 ‣ 4.1.3 Re-scale ‣ 4.1 Time Encoding Channel ‣ 4 A Grammar of Animation in Vega-Lite ‣ Animated Vega-Lite: Unifying Animation with a Grammar of Interactive Graphics" class="ltx_ref"><span class="ltx_text ltx_ref_tag">Figure 4</span></a>.
        </span>
      </li>
      <li id="bib.bib80" class="ltx_bibitem ltx_bib_article">
        <span class="ltx_tag ltx_bib_key ltx_role_refnum ltx_tag_bibitem">[28]</span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_author">D. Moritz, C. Wang, G. L. Nelson, H. Lin, A. M. Smith, B. Howe, and J. Heer</span><span class="ltx_text ltx_bib_year"> (2019-01)</span>
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_title">Formalizing Visualization Design Knowledge as Constraints: Actionable and Extensible Models in Draco</span>.
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_journal">IEEE Transactions on Visualization and Computer Graphics</span> <span class="ltx_text ltx_bib_volume">25</span> (<span class="ltx_text ltx_bib_number">1</span>), <span class="ltx_text ltx_bib_pages"> pp.&nbsp;438–448</span>.
        </span>
        <span class="ltx_bibblock">Note: <span class="ltx_text ltx_bib_note">Conference Name: IEEE Transactions on Visualization and Computer Graphics</span>
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_links"><span class="ltx_text issn ltx_bib_external">ISSN 1941-0506</span>,
            <a href="https://dx.doi.org/10.1109/TVCG.2018.2865240" title="" class="ltx_ref doi ltx_bib_external">Document</a></span>
        </span>
        <span class="ltx_bibblock ltx_bib_cited">Cited by: <a href="#S8.p3" title="8 Conclusion and Future Work ‣ Animated Vega-Lite: Unifying Animation with a Grammar of Interactive Graphics" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§8</span></a>.
        </span>
      </li>
      <li id="bib.bib70" class="ltx_bibitem ltx_bib_article">
        <span class="ltx_tag ltx_bib_key ltx_role_refnum ltx_tag_bibitem">[29]</span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_author">B. A. Myers, J. F. Pane, and A. J. Ko</span><span class="ltx_text ltx_bib_year"> (2004-09)</span>
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_title">Natural programming languages and environments</span>.
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_journal">Communications of the ACM</span> <span class="ltx_text ltx_bib_volume">47</span> (<span class="ltx_text ltx_bib_number">9</span>), <span class="ltx_text ltx_bib_pages"> pp.&nbsp;47–52</span>.
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_links"><span class="ltx_text issn ltx_bib_external">ISSN 0001-0782</span>,
            <a href="https://doi.org/10.1145/1015864.1015888" title="" class="ltx_ref ltx_bib_external">Link</a>,
            <a href="https://dx.doi.org/10.1145/1015864.1015888" title="" class="ltx_ref doi ltx_bib_external">Document</a></span>
        </span>
        <span class="ltx_bibblock ltx_bib_cited">Cited by: <a href="#S7.SS1.SSS2.p1" title="7.1.2 Natural Programming vs. Core Calculus Design ‣ 7.1 Grammar Design Process ‣ 7 Evaluation: Critical Reflection ‣ Animated Vega-Lite: Unifying Animation with a Grammar of Interactive Graphics" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§7.1.2</span></a>.
        </span>
      </li>
      <li id="bib.bib72" class="ltx_bibitem ltx_bib_misc">
        <span class="ltx_tag ltx_bib_key ltx_role_refnum ltx_tag_bibitem">[30]</span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_author">Periscopic</span><span class="ltx_text ltx_bib_year"> (2013)</span>
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_title">United States gun death data visualization</span>.
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_links"><a href="https://guns.periscopic.com" title="" class="ltx_ref ltx_bib_external">Link</a></span>
        </span>
        <span class="ltx_bibblock ltx_bib_cited">Cited by: <a href="#S7.SS1.SSS1.p1" title="7.1.1 Specific Examples Motivate Grammar Design ‣ 7.1 Grammar Design Process ‣ 7 Evaluation: Critical Reflection ‣ Animated Vega-Lite: Unifying Animation with a Grammar of Interactive Graphics" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§7.1.1</span></a>,
          <a href="#S7.SS2.SSS2.p8" title="7.2.2 Modeling Transitions Between Keyframes ‣ 7.2 Animation Abstractions and Design Considerations ‣ 7 Evaluation: Critical Reflection ‣ Animated Vega-Lite: Unifying Animation with a Grammar of Interactive Graphics" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§7.2.2</span></a>.
        </span>
      </li>
      <li id="bib.bib69" class="ltx_bibitem ltx_bib_misc">
        <span class="ltx_tag ltx_bib_key ltx_role_refnum ltx_tag_bibitem">[31]</span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_year"> (2012)</span>
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_title">Plotly Graphing Libraries</span>.
        </span>
        <span class="ltx_bibblock">Note: <span class="ltx_text ltx_bib_note">https://plotly.com/graphing-libraries/</span>
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_links"><a href="https://plotly.com/graphing-libraries/" title="" class="ltx_ref ltx_bib_external">Link</a></span>
        </span>
        <span class="ltx_bibblock ltx_bib_cited">Cited by: <a href="#S1.p2" title="1 Introduction ‣ Animated Vega-Lite: Unifying Animation with a Grammar of Interactive Graphics" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§1</span></a>,
          <a href="#S2.SS2.p2" title="2.2 Authoring Interaction and Animation ‣ 2 Related Work ‣ Animated Vega-Lite: Unifying Animation with a Grammar of Interactive Graphics" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§2.2</span></a>.
        </span>
      </li>
      <li id="bib.bib55" class="ltx_bibitem ltx_bib_inproceedings">
        <span class="ltx_tag ltx_bib_key ltx_role_refnum ltx_tag_bibitem">[32]</span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_author">D. Ren, B. Lee, M. Brehmer, and N. H. Riche</span><span class="ltx_text ltx_bib_year"> (2018-10)</span>
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_title">Reflecting on the Evaluation of Visualization Authoring Systems : Position Paper</span>.
        </span>
        <span class="ltx_bibblock">In <span class="ltx_text ltx_bib_inbook">2018 IEEE Evaluation and Beyond - Methodological Approaches for Visualization (BELIV)</span>,
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_pages"> pp.&nbsp;86–92</span>.
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_links"><a href="https://dx.doi.org/10.1109/BELIV.2018.8634297" title="" class="ltx_ref doi ltx_bib_external">Document</a></span>
        </span>
        <span class="ltx_bibblock ltx_bib_cited">Cited by: <a href="#S1.p5" title="1 Introduction ‣ Animated Vega-Lite: Unifying Animation with a Grammar of Interactive Graphics" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§1</span></a>.
        </span>
      </li>
      <li id="bib.bib36" class="ltx_bibitem ltx_bib_article">
        <span class="ltx_tag ltx_bib_key ltx_role_refnum ltx_tag_bibitem">[33]</span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_author">G. Robertson, R. Fernandez, D. Fisher, B. Lee, and J. Stasko</span><span class="ltx_text ltx_bib_year"> (2008-11)</span>
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_title">Effectiveness of Animation in Trend Visualization</span>.
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_journal">IEEE Transactions on Visualization and Computer Graphics</span> <span class="ltx_text ltx_bib_volume">14</span> (<span class="ltx_text ltx_bib_number">6</span>), <span class="ltx_text ltx_bib_pages"> pp.&nbsp;1325–1332</span> (<span class="ltx_text ltx_bib_language">en</span>).
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_links"><span class="ltx_text issn ltx_bib_external">ISSN 1077-2626</span>,
            <a href="http://ieeexplore.ieee.org/document/4658146/" title="" class="ltx_ref ltx_bib_external">Link</a>,
            <a href="https://dx.doi.org/10.1109/TVCG.2008.125" title="" class="ltx_ref doi ltx_bib_external">Document</a></span>
        </span>
        <span class="ltx_bibblock ltx_bib_cited">Cited by: <a href="#S1.p1" title="1 Introduction ‣ Animated Vega-Lite: Unifying Animation with a Grammar of Interactive Graphics" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§1</span></a>,
          <a href="#S2.SS1.p1" title="2.1 Animation in Information Visualization ‣ 2 Related Work ‣ Animated Vega-Lite: Unifying Animation with a Grammar of Interactive Graphics" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§2.1</span></a>,
          <a href="#S2.SS1.p2" title="2.1 Animation in Information Visualization ‣ 2 Related Work ‣ Animated Vega-Lite: Unifying Animation with a Grammar of Interactive Graphics" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§2.1</span></a>,
          <a href="#S8.p3" title="8 Conclusion and Future Work ‣ Animated Vega-Lite: Unifying Animation with a Grammar of Interactive Graphics" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§8</span></a>.
        </span>
      </li>
      <li id="bib.bib43" class="ltx_bibitem ltx_bib_misc">
        <span class="ltx_tag ltx_bib_key ltx_role_refnum ltx_tag_bibitem">[34]</span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_author">H. Rosling</span><span class="ltx_text ltx_bib_year"> (2006)</span>
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_title">The best stats you’ve ever seen</span>.
        </span>
        <span class="ltx_bibblock">Note: <span class="ltx_text ltx_bib_note">https://www.ted.com/talks/hans_rosling_the_best_stats_you_ve_ever_seen</span>
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_links"><a href="https://www.ted.com/talks/hans_rosling_the_best_stats_you_ve_ever_seen" title="" class="ltx_ref ltx_bib_external">Link</a></span>
        </span>
        <span class="ltx_bibblock ltx_bib_cited">Cited by: <a href="#S3.F2" title="Figure 2 ‣ 3.2 Low-Viscous Authoring: An Example Usage Scenario ‣ 3 Motivation: Unifying Interaction and Animation ‣ Animated Vega-Lite: Unifying Animation with a Grammar of Interactive Graphics" class="ltx_ref"><span class="ltx_text ltx_ref_tag">Figure 2</span></a>,
          <a href="#S3.SS1.p1" title="3.1 Conceptually Bridging Interaction and Animation ‣ 3 Motivation: Unifying Interaction and Animation ‣ Animated Vega-Lite: Unifying Animation with a Grammar of Interactive Graphics" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§3.1</span></a>,
          <a href="#S4.SS1.p2" title="4.1 Time Encoding Channel ‣ 4 A Grammar of Animation in Vega-Lite ‣ Animated Vega-Lite: Unifying Animation with a Grammar of Interactive Graphics" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§4.1</span></a>,
          <a href="#S7.SS1.SSS1.p1" title="7.1.1 Specific Examples Motivate Grammar Design ‣ 7.1 Grammar Design Process ‣ 7 Evaluation: Critical Reflection ‣ Animated Vega-Lite: Unifying Animation with a Grammar of Interactive Graphics" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§7.1.1</span></a>.
        </span>
      </li>
      <li id="bib.bib54" class="ltx_bibitem ltx_bib_article">
        <span class="ltx_tag ltx_bib_key ltx_role_refnum ltx_tag_bibitem">[35]</span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_author">A. Satyanarayan, B. Lee, D. Ren, J. Heer, J. Stasko, J. Thompson, M. Brehmer, and Z. Liu</span><span class="ltx_text ltx_bib_year"> (2019)</span>
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_title">Critical Reflections on Visualization Authoring Systems</span>.
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_journal">IEEE Transactions on Visualization and Computer Graphics</span>, <span class="ltx_text ltx_bib_pages"> pp.&nbsp;1–1</span> (<span class="ltx_text ltx_bib_language">en</span>).
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_links"><span class="ltx_text issn ltx_bib_external">ISSN 1077-2626, 1941-0506, 2160-9306</span>,
            <a href="https://ieeexplore.ieee.org/document/8807226/" title="" class="ltx_ref ltx_bib_external">Link</a>,
            <a href="https://dx.doi.org/10.1109/TVCG.2019.2934281" title="" class="ltx_ref doi ltx_bib_external">Document</a></span>
        </span>
        <span class="ltx_bibblock ltx_bib_cited">Cited by: <a href="#S1.p5" title="1 Introduction ‣ Animated Vega-Lite: Unifying Animation with a Grammar of Interactive Graphics" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§1</span></a>,
          <a href="#S7.p1" title="7 Evaluation: Critical Reflection ‣ Animated Vega-Lite: Unifying Animation with a Grammar of Interactive Graphics" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§7</span></a>,
          <a href="#footnote1" title="footnote 1 ‣ 7 Evaluation: Critical Reflection ‣ Animated Vega-Lite: Unifying Animation with a Grammar of Interactive Graphics" class="ltx_ref"><span class="ltx_text ltx_ref_tag">footnote 1</span></a>.
        </span>
      </li>
      <li id="bib.bib30" class="ltx_bibitem ltx_bib_article">
        <span class="ltx_tag ltx_bib_key ltx_role_refnum ltx_tag_bibitem">[36]</span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_author">A. Satyanarayan, D. Moritz, K. Wongsuphasawat, and J. Heer</span><span class="ltx_text ltx_bib_year"> (2017-01)</span>
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_title">Vega-Lite: A Grammar of Interactive Graphics</span>.
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_journal">IEEE Transactions on Visualization and Computer Graphics</span> <span class="ltx_text ltx_bib_volume">23</span> (<span class="ltx_text ltx_bib_number">1</span>), <span class="ltx_text ltx_bib_pages"> pp.&nbsp;341–350</span>.
        </span>
        <span class="ltx_bibblock">Note: <span class="ltx_text ltx_bib_note">Conference Name: IEEE Transactions on Visualization and Computer Graphics</span>
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_links"><span class="ltx_text issn ltx_bib_external">ISSN 1941-0506</span>,
            <a href="https://dx.doi.org/10.1109/TVCG.2016.2599030" title="" class="ltx_ref doi ltx_bib_external">Document</a></span>
        </span>
        <span class="ltx_bibblock ltx_bib_cited">Cited by: <a href="#S1.p2" title="1 Introduction ‣ Animated Vega-Lite: Unifying Animation with a Grammar of Interactive Graphics" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§1</span></a>,
          <a href="#S6.p6" title="6 Evaluation: Example Gallery ‣ Animated Vega-Lite: Unifying Animation with a Grammar of Interactive Graphics" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§6</span></a>.
        </span>
      </li>
      <li id="bib.bib34" class="ltx_bibitem ltx_bib_article">
        <span class="ltx_tag ltx_bib_key ltx_role_refnum ltx_tag_bibitem">[37]</span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_author">A. Satyanarayan, R. Russell, J. Hoffswell, and J. Heer</span><span class="ltx_text ltx_bib_year"> (2016-01)</span>
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_title">Reactive Vega: A Streaming Dataflow Architecture for Declarative Interactive Visualization</span>.
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_journal">IEEE Transactions on Visualization and Computer Graphics</span> <span class="ltx_text ltx_bib_volume">22</span> (<span class="ltx_text ltx_bib_number">1</span>), <span class="ltx_text ltx_bib_pages"> pp.&nbsp;659–668</span>.
        </span>
        <span class="ltx_bibblock">Note: <span class="ltx_text ltx_bib_note">Conference Name: IEEE Transactions on Visualization and Computer Graphics</span>
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_links"><span class="ltx_text issn ltx_bib_external">ISSN 1941-0506</span>,
            <a href="https://dx.doi.org/10.1109/TVCG.2015.2467091" title="" class="ltx_ref doi ltx_bib_external">Document</a></span>
        </span>
        <span class="ltx_bibblock ltx_bib_cited">Cited by: <a href="#S3.SS1.p1" title="3.1 Conceptually Bridging Interaction and Animation ‣ 3 Motivation: Unifying Interaction and Animation ‣ Animated Vega-Lite: Unifying Animation with a Grammar of Interactive Graphics" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§3.1</span></a>.
        </span>
      </li>
      <li id="bib.bib33" class="ltx_bibitem ltx_bib_inproceedings">
        <span class="ltx_tag ltx_bib_key ltx_role_refnum ltx_tag_bibitem">[38]</span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_author">A. Satyanarayan, K. Wongsuphasawat, and J. Heer</span><span class="ltx_text ltx_bib_year"> (2014-10)</span>
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_title">Declarative interaction design for data visualization</span>.
        </span>
        <span class="ltx_bibblock">In <span class="ltx_text ltx_bib_inbook">Proceedings of the 27th annual ACM symposium on User interface software and technology</span>,
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_series">UIST ’14</span>, <span class="ltx_text ltx_bib_place">New York, NY, USA</span>, <span class="ltx_text ltx_bib_pages"> pp.&nbsp;669–678</span>.
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_links">,
            <a href="http://doi.org/10.1145/2642918.2647360" title="" class="ltx_ref ltx_bib_external">Link</a>,
            <a href="https://dx.doi.org/10.1145/2642918.2647360" title="" class="ltx_ref doi ltx_bib_external">Document</a></span>
        </span>
        <span class="ltx_bibblock ltx_bib_cited">Cited by: <a href="#S1.p2" title="1 Introduction ‣ Animated Vega-Lite: Unifying Animation with a Grammar of Interactive Graphics" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§1</span></a>,
          <a href="#S3.SS1.p1" title="3.1 Conceptually Bridging Interaction and Animation ‣ 3 Motivation: Unifying Interaction and Animation ‣ Animated Vega-Lite: Unifying Animation with a Grammar of Interactive Graphics" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§3.1</span></a>.
        </span>
      </li>
      <li id="bib.bib76" class="ltx_bibitem ltx_bib_article">
        <span class="ltx_tag ltx_bib_key ltx_role_refnum ltx_tag_bibitem">[39]</span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_author">X. Shu, A. Wu, J. Tang, B. Bach, Y. Wu, and H. Qu</span><span class="ltx_text ltx_bib_year"> (2021-02)</span>
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_title">What Makes a Data-GIF Understandable?</span>.
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_journal">IEEE Transactions on Visualization and Computer Graphics</span> <span class="ltx_text ltx_bib_volume">27</span> (<span class="ltx_text ltx_bib_number">2</span>), <span class="ltx_text ltx_bib_pages"> pp.&nbsp;1492–1502</span> (<span class="ltx_text ltx_bib_language">en</span>).
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_links"><span class="ltx_text issn ltx_bib_external">ISSN 1077-2626, 1941-0506, 2160-9306</span>,
            <a href="https://ieeexplore.ieee.org/document/9222309/" title="" class="ltx_ref ltx_bib_external">Link</a>,
            <a href="https://dx.doi.org/10.1109/TVCG.2020.3030396" title="" class="ltx_ref doi ltx_bib_external">Document</a></span>
        </span>
        <span class="ltx_bibblock ltx_bib_cited">Cited by: <a href="#S7.SS1.SSS1.p2" title="7.1.1 Specific Examples Motivate Grammar Design ‣ 7.1 Grammar Design Process ‣ 7 Evaluation: Critical Reflection ‣ Animated Vega-Lite: Unifying Animation with a Grammar of Interactive Graphics" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§7.1.1</span></a>.
        </span>
      </li>
      <li id="bib.bib41" class="ltx_bibitem ltx_bib_misc">
        <span class="ltx_tag ltx_bib_key ltx_role_refnum ltx_tag_bibitem">[40]</span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_author">Stephanie Yee and Tony Chu</span><span class="ltx_text ltx_bib_year"> (2015)</span>
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_title">A visual introduction to machine learning, Part II</span>.
        </span>
        <span class="ltx_bibblock">(<span class="ltx_text ltx_bib_language">en</span>).
        </span>
        <span class="ltx_bibblock">Note: <span class="ltx_text ltx_bib_note">http://www.r2d3.us/visual-intro-to-machine-learning-part-2/</span>
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_links"><a href="http://www.r2d3.us/visual-intro-to-machine-learning-part-2/" title="" class="ltx_ref ltx_bib_external">Link</a></span>
        </span>
        <span class="ltx_bibblock ltx_bib_cited">Cited by: <a href="#S7.SS1.SSS1.p1" title="7.1.1 Specific Examples Motivate Grammar Design ‣ 7.1 Grammar Design Process ‣ 7 Evaluation: Critical Reflection ‣ Animated Vega-Lite: Unifying Animation with a Grammar of Interactive Graphics" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§7.1.1</span></a>.
        </span>
      </li>
      <li id="bib.bib31" class="ltx_bibitem ltx_bib_misc">
        <span class="ltx_tag ltx_bib_key ltx_role_refnum ltx_tag_bibitem">[41]</span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_author">Thomas Lin Pedersen and David Robinson</span><span class="ltx_text ltx_bib_year"> (2019)</span>
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_title">A Grammar of Animated Graphics</span>.
        </span>
        <span class="ltx_bibblock">(<span class="ltx_text ltx_bib_language">en</span>).
        </span>
        <span class="ltx_bibblock">Note: <span class="ltx_text ltx_bib_note">https://gganimate.com/</span>
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_links"><a href="https://gganimate.com/" title="" class="ltx_ref ltx_bib_external">Link</a></span>
        </span>
        <span class="ltx_bibblock ltx_bib_cited">Cited by: <a href="#S1.p2" title="1 Introduction ‣ Animated Vega-Lite: Unifying Animation with a Grammar of Interactive Graphics" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§1</span></a>,
          <a href="#S7.p1" title="7 Evaluation: Critical Reflection ‣ Animated Vega-Lite: Unifying Animation with a Grammar of Interactive Graphics" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§7</span></a>.
        </span>
      </li>
      <li id="bib.bib67" class="ltx_bibitem ltx_bib_misc">
        <span class="ltx_tag ltx_bib_key ltx_role_refnum ltx_tag_bibitem">[42]</span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_author">Thomas Lin Pedersen</span><span class="ltx_text ltx_bib_year"> (2018-07)</span>
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_title">The Grammar of Animation</span>.
        </span>
        <span class="ltx_bibblock">Note: <span class="ltx_text ltx_bib_note">https://www.youtube.com/watch?v=21ZWDrTukEs</span>
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_links"><a href="https://www.youtube.com/watch?v=21ZWDrTukEs" title="" class="ltx_ref ltx_bib_external">Link</a></span>
        </span>
        <span class="ltx_bibblock ltx_bib_cited">Cited by: <a href="#S7.SS2.SSS1.p1" title="7.2.1 Scene- vs. Segue-Dominant Abstractions ‣ 7.2 Animation Abstractions and Design Considerations ‣ 7 Evaluation: Critical Reflection ‣ Animated Vega-Lite: Unifying Animation with a Grammar of Interactive Graphics" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§7.2.1</span></a>.
        </span>
      </li>
      <li id="bib.bib48" class="ltx_bibitem ltx_bib_misc">
        <span class="ltx_tag ltx_bib_key ltx_role_refnum ltx_tag_bibitem">[43]</span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_author">Thomas Lin Pedersen</span><span class="ltx_text ltx_bib_year"> (2019)</span>
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_title">Gganimate has transitioned to a state of release</span>.
        </span>
        <span class="ltx_bibblock">(<span class="ltx_text ltx_bib_language">en</span>).
        </span>
        <span class="ltx_bibblock">Note: <span class="ltx_text ltx_bib_note">https://www.data-imaginist.com/2019/gganimate-has-transitioned-to-a-state-of-release/</span>
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_links"><a href="https://www.data-imaginist.com/2019/gganimate-has-transitioned-to-a-state-of-release/" title="" class="ltx_ref ltx_bib_external">Link</a></span>
        </span>
        <span class="ltx_bibblock ltx_bib_cited">Cited by: <a href="#S1.p5" title="1 Introduction ‣ Animated Vega-Lite: Unifying Animation with a Grammar of Interactive Graphics" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§1</span></a>,
          <a href="#S2.SS2.p1" title="2.2 Authoring Interaction and Animation ‣ 2 Related Work ‣ Animated Vega-Lite: Unifying Animation with a Grammar of Interactive Graphics" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§2.2</span></a>.
        </span>
      </li>
      <li id="bib.bib62" class="ltx_bibitem ltx_bib_inproceedings">
        <span class="ltx_tag ltx_bib_key ltx_role_refnum ltx_tag_bibitem">[44]</span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_author">Thomas RG Green</span><span class="ltx_text ltx_bib_year"> (1989)</span>
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_title">Cognitive dimensions of notations</span>.
        </span>
        <span class="ltx_bibblock">In <span class="ltx_text ltx_bib_inbook">People and Computers V</span>,  <span class="ltx_text ltx_bib_editor">A. Sutcliffe and L. Macaulay (Eds.)</span>,
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_place">Cambridge, UK</span>, <span class="ltx_text ltx_bib_pages"> pp.&nbsp;443–460</span>.
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_links"><a href="https://www.cl.cam.ac.uk/~afb21/CognitiveDimensions/papers/Green1989.pdf" title="" class="ltx_ref ltx_bib_external">Link</a></span>
        </span>
        <span class="ltx_bibblock ltx_bib_cited">Cited by: <a href="#S1.p2" title="1 Introduction ‣ Animated Vega-Lite: Unifying Animation with a Grammar of Interactive Graphics" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§1</span></a>,
          <a href="#S2.SS2.p2" title="2.2 Authoring Interaction and Animation ‣ 2 Related Work ‣ Animated Vega-Lite: Unifying Animation with a Grammar of Interactive Graphics" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§2.2</span></a>,
          <a href="#S3.SS1.p1" title="3.1 Conceptually Bridging Interaction and Animation ‣ 3 Motivation: Unifying Interaction and Animation ‣ Animated Vega-Lite: Unifying Animation with a Grammar of Interactive Graphics" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§3.1</span></a>,
          <a href="#S7.SS1.SSS2.p3" title="7.1.2 Natural Programming vs. Core Calculus Design ‣ 7.1 Grammar Design Process ‣ 7 Evaluation: Critical Reflection ‣ Animated Vega-Lite: Unifying Animation with a Grammar of Interactive Graphics" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§7.1.2</span></a>.
        </span>
      </li>
      <li id="bib.bib27" class="ltx_bibitem ltx_bib_article">
        <span class="ltx_tag ltx_bib_key ltx_role_refnum ltx_tag_bibitem">[45]</span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_author">J. Thompson, Z. Liu, W. Li, and J. Stasko</span><span class="ltx_text ltx_bib_year"> (2020)</span>
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_title">Understanding the Design Space and Authoring Paradigms for Animated Data Graphics</span>.
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_journal">Computer Graphics Forum</span> <span class="ltx_text ltx_bib_volume">39</span> (<span class="ltx_text ltx_bib_number">3</span>), <span class="ltx_text ltx_bib_pages"> pp.&nbsp;207–218</span> (<span class="ltx_text ltx_bib_language">en</span>).
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_links"><span class="ltx_text issn ltx_bib_external">ISSN 1467-8659</span>,
            <a href="http://onlinelibrary.wiley.com/doi/abs/10.1111/cgf.13974" title="" class="ltx_ref ltx_bib_external">Link</a>,
            <a href="https://dx.doi.org/https%3A//doi.org/10.1111/cgf.13974" title="" class="ltx_ref doi ltx_bib_external">Document</a></span>
        </span>
        <span class="ltx_bibblock ltx_bib_cited">Cited by: <a href="#S7.SS1.SSS2.p1" title="7.1.2 Natural Programming vs. Core Calculus Design ‣ 7.1 Grammar Design Process ‣ 7 Evaluation: Critical Reflection ‣ Animated Vega-Lite: Unifying Animation with a Grammar of Interactive Graphics" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§7.1.2</span></a>.
        </span>
      </li>
      <li id="bib.bib93" class="ltx_bibitem ltx_bib_inproceedings">
        <span class="ltx_tag ltx_bib_key ltx_role_refnum ltx_tag_bibitem">[46]</span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_author">J. R. Thompson, Z. Liu, and J. Stasko</span><span class="ltx_text ltx_bib_year"> (2021-05)</span>
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_title">Data Animator: Authoring Expressive Animated Data Graphics</span>.
        </span>
        <span class="ltx_bibblock">In <span class="ltx_text ltx_bib_inbook">Proceedings of the 2021 CHI Conference on Human Factors in Computing Systems</span>,
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_series">CHI ’21</span>, <span class="ltx_text ltx_bib_place">New York, NY, USA</span>, <span class="ltx_text ltx_bib_pages"> pp.&nbsp;1–18</span>.
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_links">,
            <a href="http://doi.org/10.1145/3411764.3445747" title="" class="ltx_ref ltx_bib_external">Link</a>,
            <a href="https://dx.doi.org/10.1145/3411764.3445747" title="" class="ltx_ref doi ltx_bib_external">Document</a></span>
        </span>
        <span class="ltx_bibblock ltx_bib_cited">Cited by: <a href="#S1.p2" title="1 Introduction ‣ Animated Vega-Lite: Unifying Animation with a Grammar of Interactive Graphics" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§1</span></a>,
          <a href="#S1.p5" title="1 Introduction ‣ Animated Vega-Lite: Unifying Animation with a Grammar of Interactive Graphics" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§1</span></a>,
          <a href="#S2.SS2.p1" title="2.2 Authoring Interaction and Animation ‣ 2 Related Work ‣ Animated Vega-Lite: Unifying Animation with a Grammar of Interactive Graphics" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§2.2</span></a>,
          <a href="#S7.p1" title="7 Evaluation: Critical Reflection ‣ Animated Vega-Lite: Unifying Animation with a Grammar of Interactive Graphics" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§7</span></a>.
        </span>
      </li>
      <li id="bib.bib4" class="ltx_bibitem ltx_bib_article">
        <span class="ltx_tag ltx_bib_key ltx_role_refnum ltx_tag_bibitem">[47]</span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_author">B. Tversky, J. B. Morrison, and M. Betrancourt</span><span class="ltx_text ltx_bib_year"> (2002-10)</span>
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_title">Animation: can it facilitate?</span>.
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_journal">International Journal of Human-Computer Studies</span> <span class="ltx_text ltx_bib_volume">57</span> (<span class="ltx_text ltx_bib_number">4</span>), <span class="ltx_text ltx_bib_pages"> pp.&nbsp;247–262</span> (<span class="ltx_text ltx_bib_language">en</span>).
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_links"><span class="ltx_text issn ltx_bib_external">ISSN 10715819</span>,
            <a href="https://linkinghub.elsevier.com/retrieve/pii/S1071581902910177" title="" class="ltx_ref ltx_bib_external">Link</a>,
            <a href="https://dx.doi.org/10.1006/ijhc.2002.1017" title="" class="ltx_ref doi ltx_bib_external">Document</a></span>
        </span>
        <span class="ltx_bibblock ltx_bib_cited">Cited by: <a href="#S2.SS1.p1" title="2.1 Animation in Information Visualization ‣ 2 Related Work ‣ Animated Vega-Lite: Unifying Animation with a Grammar of Interactive Graphics" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§2.1</span></a>.
        </span>
      </li>
      <li id="bib.bib89" class="ltx_bibitem ltx_bib_misc">
        <span class="ltx_tag ltx_bib_key ltx_role_refnum ltx_tag_bibitem">[48]</span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_author">Wikipedia contributors</span><span class="ltx_text ltx_bib_year"> (2022)</span>
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_title">Series–parallel graph — Wikipedia, The Free Encyclopedia</span>.
        </span>
        <span class="ltx_bibblock">Note: <span class="ltx_text ltx_bib_note">[Online; accessed 1-July-2022]</span>
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_links"><a href="https://en.wikipedia.org/w/index.php?title=Series%E2%80%93parallel_graph&amp;oldid=1094649301" title="" class="ltx_ref ltx_bib_external">Link</a></span>
        </span>
        <span class="ltx_bibblock ltx_bib_cited">Cited by: <a href="#S7.SS2.SSS2.p9" title="7.2.2 Modeling Transitions Between Keyframes ‣ 7.2 Animation Abstractions and Design Considerations ‣ 7 Evaluation: Critical Reflection ‣ Animated Vega-Lite: Unifying Animation with a Grammar of Interactive Graphics" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§7.2.2</span></a>.
        </span>
      </li>
      <li id="bib.bib82" class="ltx_bibitem ltx_bib_article">
        <span class="ltx_tag ltx_bib_key ltx_role_refnum ltx_tag_bibitem">[49]</span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_author">K. Wongsuphasawat, D. Moritz, A. Anand, J. Mackinlay, B. Howe, and J. Heer</span><span class="ltx_text ltx_bib_year"> (2016-01)</span>
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_title">Voyager: Exploratory Analysis via Faceted Browsing of Visualization Recommendations</span>.
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_journal">IEEE Transactions on Visualization and Computer Graphics</span> <span class="ltx_text ltx_bib_volume">22</span> (<span class="ltx_text ltx_bib_number">1</span>), <span class="ltx_text ltx_bib_pages"> pp.&nbsp;649–658</span>.
        </span>
        <span class="ltx_bibblock">Note: <span class="ltx_text ltx_bib_note">Conference Name: IEEE Transactions on Visualization and Computer Graphics</span>
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_links"><span class="ltx_text issn ltx_bib_external">ISSN 1941-0506</span>,
            <a href="https://dx.doi.org/10.1109/TVCG.2015.2467191" title="" class="ltx_ref doi ltx_bib_external">Document</a></span>
        </span>
        <span class="ltx_bibblock ltx_bib_cited">Cited by: <a href="#S8.p3" title="8 Conclusion and Future Work ‣ Animated Vega-Lite: Unifying Animation with a Grammar of Interactive Graphics" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§8</span></a>.
        </span>
      </li>
      <li id="bib.bib81" class="ltx_bibitem ltx_bib_inproceedings">
        <span class="ltx_tag ltx_bib_key ltx_role_refnum ltx_tag_bibitem">[50]</span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_author">K. Wongsuphasawat, Z. Qu, D. Moritz, R. Chang, F. Ouk, A. Anand, J. Mackinlay, B. Howe, and J. Heer</span><span class="ltx_text ltx_bib_year"> (2017-05)</span>
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_title">Voyager 2: Augmenting Visual Analysis with Partial View Specifications</span>.
        </span>
        <span class="ltx_bibblock">In <span class="ltx_text ltx_bib_inbook">Proceedings of the 2017 CHI Conference on Human Factors in Computing Systems</span>,
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_series">CHI ’17</span>, <span class="ltx_text ltx_bib_place">New York, NY, USA</span>, <span class="ltx_text ltx_bib_pages"> pp.&nbsp;2648–2659</span>.
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_links">,
            <a href="https://doi.org/10.1145/3025453.3025768" title="" class="ltx_ref ltx_bib_external">Link</a>,
            <a href="https://dx.doi.org/10.1145/3025453.3025768" title="" class="ltx_ref doi ltx_bib_external">Document</a></span>
        </span>
        <span class="ltx_bibblock ltx_bib_cited">Cited by: <a href="#S8.p3" title="8 Conclusion and Future Work ‣ Animated Vega-Lite: Unifying Animation with a Grammar of Interactive Graphics" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§8</span></a>.
        </span>
      </li>
      <li id="bib.bib9" class="ltx_bibitem ltx_bib_article">
        <span class="ltx_tag ltx_bib_key ltx_role_refnum ltx_tag_bibitem">[51]</span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_author">J. S. Yi, Y. a. Kang, J. Stasko, and J.A. Jacko</span><span class="ltx_text ltx_bib_year"> (2007-11)</span>
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_title">Toward a Deeper Understanding of the Role of Interaction in Information Visualization</span>.
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_journal">IEEE Transactions on Visualization and Computer Graphics</span> <span class="ltx_text ltx_bib_volume">13</span> (<span class="ltx_text ltx_bib_number">6</span>), <span class="ltx_text ltx_bib_pages"> pp.&nbsp;1224–1231</span> (<span class="ltx_text ltx_bib_language">en</span>).
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_links"><span class="ltx_text issn ltx_bib_external">ISSN 1077-2626, 1941-0506, 2160-9306</span>,
            <a href="https://ieeexplore.ieee.org/document/4376144/" title="" class="ltx_ref ltx_bib_external">Link</a>,
            <a href="https://dx.doi.org/10.1109/TVCG.2007.70515" title="" class="ltx_ref doi ltx_bib_external">Document</a></span>
        </span>
        <span class="ltx_bibblock ltx_bib_cited">Cited by: <a href="#S1.p5" title="1 Introduction ‣ Animated Vega-Lite: Unifying Animation with a Grammar of Interactive Graphics" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§1</span></a>,
          <a href="#S3.SS1.p2" title="3.1 Conceptually Bridging Interaction and Animation ‣ 3 Motivation: Unifying Interaction and Animation ‣ Animated Vega-Lite: Unifying Animation with a Grammar of Interactive Graphics" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§3.1</span></a>,
          <a href="#S3.T1" title="Table 1 ‣ 3 Motivation: Unifying Interaction and Animation ‣ Animated Vega-Lite: Unifying Animation with a Grammar of Interactive Graphics" class="ltx_ref"><span class="ltx_text ltx_ref_tag">Table 1</span></a>,
          <a href="#S4.SS2.SSS1.p1" title="4.2.1 Applying Selections ‣ 4.2 Selections with a Timer Event Stream ‣ 4 A Grammar of Animation in Vega-Lite ‣ Animated Vega-Lite: Unifying Animation with a Grammar of Interactive Graphics" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§4.2.1</span></a>,
          <a href="#S6.F5" title="Figure 5 ‣ 6 Evaluation: Example Gallery ‣ Animated Vega-Lite: Unifying Animation with a Grammar of Interactive Graphics" class="ltx_ref"><span class="ltx_text ltx_ref_tag">Figure 5</span></a>,
          <a href="#S6.p1" title="6 Evaluation: Example Gallery ‣ Animated Vega-Lite: Unifying Animation with a Grammar of Interactive Graphics" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§6</span></a>,
          <a href="#S6.p9" title="6 Evaluation: Example Gallery ‣ Animated Vega-Lite: Unifying Animation with a Grammar of Interactive Graphics" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§6</span></a>.
        </span>
      </li>
      <li id="bib.bib56" class="ltx_bibitem ltx_bib_article">
        <span class="ltx_tag ltx_bib_key ltx_role_refnum ltx_tag_bibitem">[52]</span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_author">J. Zong, D. Barnwal, R. Neogy, and A. Satyanarayan</span><span class="ltx_text ltx_bib_year"> (2021-02)</span>
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_title">Lyra 2: Designing Interactive Visualizations by Demonstration</span>.
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_journal">IEEE Transactions on Visualization and Computer Graphics</span> <span class="ltx_text ltx_bib_volume">27</span> (<span class="ltx_text ltx_bib_number">2</span>), <span class="ltx_text ltx_bib_pages"> pp.&nbsp;304–314</span> (<span class="ltx_text ltx_bib_language">en</span>).
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_links"><span class="ltx_text issn ltx_bib_external">ISSN 1077-2626, 1941-0506, 2160-9306</span>,
            <a href="https://ieeexplore.ieee.org/document/9222289/" title="" class="ltx_ref ltx_bib_external">Link</a>,
            <a href="https://dx.doi.org/10.1109/TVCG.2020.3030367" title="" class="ltx_ref doi ltx_bib_external">Document</a></span>
        </span>
        <span class="ltx_bibblock ltx_bib_cited">Cited by: <a href="#S4.SS2.SSS1.p1" title="4.2.1 Applying Selections ‣ 4.2 Selections with a Timer Event Stream ‣ 4 A Grammar of Animation in Vega-Lite ‣ Animated Vega-Lite: Unifying Animation with a Grammar of Interactive Graphics" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§4.2.1</span></a>.
        </span>
      </li>
    </ul>
  </section>
  
</article>
<script>
  function goToAnimation(example) {
    let src = "";
    switch (example) {
      case 'bar':
        src = "https://jonathanzong.github.io/editor/#/url/vega-lite/N4IgJghgLhIFygK4CcA28QAspQA4Gc4B6IgcwEt8oA6CqTRAI0XwFNkBjAewDspW+1bgFsiAK17RMEHgC9epIgFYAZgBYVEAMwA2VgA4OAJg5gADGp1aAnIw5KlZpWrNGdasBx1FkEAO5EKhwcAIysOtYhOgDsRvrWrGqsWhzR+oz6EPo6EKxGSukhasH6WhBGYEQc0KykXMgAngC0jL48YPhC+ABuIAC+ADQgAtxg5Dyk8KDcqPVTICrkrKhgGNX8dY0gQ6i1AqsIIFwqKmxQ8PpmfYMgAB7zi8sHIN0QqIis2yBQDbifcCAAI6IGRQcgwMHdT43BoPJYrDA8CDCT5DH5-RFcYTjN5ffD1c6HR4IgGvd6oo7IMDsDDU-AcfbjSY3CC3SjwTSoNg3MEouFPDANVgQZB46q7ebo-4gRgyVZDNqkf4AbTMAxCZk1ZgAujcANasWFE+HPJF8m7IVj0t7-KDID7XIa4EXI-DwZWgM3SoUivHLVgcQmgKUYXBccbnIa8DC8mk3RjjA6gca4RCEkCKinYnjwIxaobCVm5swhaxDKisXDwELXbVotr4FT1YTu6ZvDiIVA1DAAanwTCoyCZAApIFBEMJqGPWAM1WoAJRfCBugE+0WDNuoDtd-i9scT6hkj5LlcvN7HjcgfHIQkehYmwXC0VRqk0gF0hntJn9AagYnPI8KXqalRXfK1PzGCZ+jrEA-ETLg-FbI4qwBNo9RPDA0OgoZSGQLhEFwRgjWVEA1xAXVf3vVB+FA0BnV8FtVyffpL0Wai3z-B9UJkdCdl3OANVrHYICFUC70LZB0IBWV10oiSpODX5pX4W5IxAN5yFIHMAV2FQ1NlNhUHGZSuCrIYwHuOAtHMo01BuEYuEgyZDhUoN7wFAEvRYvpdSAA";
        break;
      case 'birds':
        src="https://jonathanzong.github.io/editor/#/url/vega-lite/N4Ig7glgJgLgFiAXARgAzoDQjgUwgczhiQDZMQAHAJwHsArHAYxghoDslQYBPCnJEDgCOAVwCGAGwCiYqvBBZGEiBSkAPGDjbFEAbV2oMqALoZdAFkwAOdMeMBfLBLHccVJLtBQxMMZxAiVBIC3r4A9GA0QVAAtMhoALYAdHQAzuwKIABmUQk+-jx8AjA0FPTpHFhZOD6B-IggjDQi2lQQOKkg9o4geVQA1gW89SD4ODSpcGJFVRASwQ0AxFkA7KurmakwtP0ji2IHXY5ePn6IoIEL2DAwFKmIYWH4EFtJz-AiAEYiqW5N2loYEkmgkwnR2D4pmwAF7sfBhACsWXMWTEAGYSDgrIwAEyMKCocwkNEATk+jARCNQCMsOJI5igjBIYSoYjAYRIjE+ONQK1QnxIWSyUCgOKg5nJyDEJOQwqgxIRKzRfPMVnMyFVVmQYU+ECoUAA+qExMDUgA3LpYCiyMQJTp6UBsW0jRiBKiAg1ZVkJfhYX4SJg6LjDARlCDaTIZBosH3uHq6thQfzhigiHQgVlsMaZBLhpDILB5NRIDEIv2aCj5rBOn0hFxHDCO50CSCJmhgT3e30gf2BoZFBphiNYKMgGNuTLUHBQCCMHz1UBiRMeUBZdoSJMNNhG+tOTT+HBqagCJcQBIGs2SET8bqN7LrzcgbfebiZfBBwRH9wNU-ny8Sa8AAIYkAnkjgcW8m1rQcYE6P0cADZh+xGIdiBHDgGgSZpfhoM0J1mBCoHtXQez4Rh2k6CDTDHTNUhyKgEhXRpJFdZx92jGgADkRAST43AAClCHikhfABKTIxHtJ8d1fY57wkTRv1Aa1vRbcMoHbTtm26ai+kGBpyKoJRuy0JoZyzfwJDhCAYBEKAF3vQiBCsjgejYmy7IctcnIaNjLUaGgrKUxyNwEVIyIo-zUggaEHP+GcWCjZSbUYmC4JAf9r3zcgcASCgeCQVEJF+HpMvqHkelKMRyIK84AsTGzWAw5LVIMt0PS9ZssDK-NSqvepUCSZAenHfxvNCrcZM2OcA2QgRPiXJMsEzbM9EMNB0BMW8xxoQKWErOrxsfcKmEi7p7AcIA"
        // Note: not the  link as that one breaks
        break;
      case 'bump':
        src = "https://jonathanzong.github.io/editor/#/url/vega-lite/N4IgJAzgxgFgpgWwIYgFwhgF0wBwqgegIDc4BzJAOjIEtMYBXAI0poHsDp5kTykBaADZ04JAKyUAVhDYA7EABoQAEzjQATjRyZ289ACEGCHAAJYSdZkUY4NMljQAmACwAGJQHcay+mjfuQOFkoNmUaWTI0UAAPKJAAMxo4QWU0EABNOAtrTABPHDg0tnUw2SRBEABfJVy4xOTU9AAlJFkAaxz8wvRi0vLraHLu0GU2ZHC0AG0ARgVHBQBmBWcFMQUANgUAdgUADgUATgVp1wBdJXVWsm7JtYXnU8rqkBDBYrqklLSAYTY39U6BTSsjG4X6zx0CGGCU+jQyWQBSkGgmheSB6CYrVSFyu0IgmDgODQYlcrieSjacFqqFA9S+6F+-yq5JAyHUHRpIDR3RAwlkhSU4QJ6hwfyQBLSUAsfQqSlFQrQmHUDDgzxwFiQCAgU1AZShaVaNAQAH0IMkBsk4FArJzuWl5bIrEo5GlIXBESAcOo4GEpRLOXS4ZlskpBP7QHBol6DbIjcbiOUVcynucuZdZBB4sUEDqXuUoAxBOKeZg2AA5IxMd0ACmU4qMlGD6gAlNYkNr0E2qgpQFLBAWi-6ueXKzW65gGy12q2lO20lOOtVaTQw+64urLjn0IaTWaKimlOOUJyGOoKugsLh8ERaPjqHRGEwGGb1CFHUFMJQQggCMoPGw2GwOQCC2MQxCgXYFiQXZXHWJhHHiZQFigRwxAWZDHCgrYMPWLZ4gWAhLg8Ag4HiXDsKgpAkC2XYoDgMR4kcJhlBcaZHBoqAmHieIkHYqAtgOVQmC4ggn2ML8IGIZkgA"
        break;
      case 'connected':
        src = "https://jonathanzong.github.io/editor/#/url/vega-lite/N4Ig7glgJgLgFiAXAVgAyoDQjgUwgczhiTUxCgEMYKlQBXAJwBslsYYAHAZ0QHpeGFMADp8EeHQBGdLjgYBjAPYA7GDlXClAW14A3HPgp6DFALSVqsmF15aKXNQ14WjUBhF0Rl+YQCsuKiAAvlgwgspcAGaKDFpIANqg8hRM8nRMVDisAOSIAJTZIFj2rADWOACewRigkRBMjrQgHBSCcYggFMoQWgD6sixBQQC6WC1tXAmgyhRaWR1dPf04LFgDOPLEiKAwFRzzzYpexFiBHTA9ckXNDDhQEMlqTXUrUKwVOK3XDfOgOAAeHAYrEWfV0KToWSGQ1GIDsDFKrCYXiyWHUSnu3ia-2eEFerC09Rwk1CewOAEc6F0LtQLvprlxkkxfiAAF5yRRISIpWRDLBVbYgF5MN4dQwkkC7fasSnU8RUDyokCMlIs9kMTmIblMXkhEAxKBXQXC0UgD5fPUXOa4-Edc3AtZMllSg6SLpvLDhfAshw4DhIABM6D5IHKAtqeJFZUqwWhQA"
        break;
      case 'dunkin':
        src = 'https://jonathanzong.github.io/editor/#/url/vega-lite/N4Ig7glgJgLgFiAXAVgAyoDQjgUwgczhiQGZ0sAjAQwGMBrfAJwHsBXAOyiRAGIT+QWKFRhUkoVowA23IjAAOAZ0QB6FfgiKYAOg3xWFVopyMazdjBwXtZgLYqoYZsxgxzKqiRqoATDlQAZgCMAOyoUKgUABwALABsJFH+QTE0CVBBAQCcqFEqjFRgKnFUWWgxtCHUUSFRwTVZWTh+JCFtNFQhcXE4MWUkUFA0Dhx0EOyKAPrszJM+MZNwjDaKAG4gAL5YMAUTAcyMtkgA2qAdUjSsUiI43G4Acqy2FCYAFMIwT9rM8laTHzgYBBbDgAJSCEBURTcH5-AFAkGbDBnKgXK43O7MR7PN4fL40KTMYxQf43BFgiFQ7gEok4Enw4G3DYAXSw8hYACscDQgeZxCAYABPX7cVEvRiKACqijEWxA8ioBVs0MQpxA7CoiMQIFh7H+o2hWGMUm5xEQoCFIu18mY42IWD52vJjAh7LpEA6ln5VE4J1AAQgOCkXG1utJlnJEKkXvNIBwAA92aL2MDJqtUawmVt-YHg9TCcTw4DGRD8GbQAmk9qfan01JM5sWRtm6yQLZFXRqRBTCaIVYzFBxvh+YT2HpWFBbrGA0GQyBR+PJxDLVOQABHVg+oGiIGrJlYa7bidTnOz7iHiCfJfbYWrjdby8iCB7pEgMyEl2xsycS8QR2gBUlRhX49SgA0ITrBttUFINCTAV9INXJgcEFV9I2nXM5zDBlESNc4TwFW9z3GHBFQhKBmHbcYTiCBJ5mQOJ0EwWiSB8ZAYlQRjUFbXZ8CnY5mKY7jm2bIA'
          break;
      case 'hop':
        src="https://jonathanzong.github.io/editor/#/url/vega-lite/N4IgJAzgxgFgpgWwIYgFwhgF0wBwqgegIDc4BzJAOjIEtMYBXAI0poHsDp5kTykBaADZ04JAKyUAVhDYA7EABoQAEySYUqUAwBOgtCrVJOcNZkFx+AdxP042ylAjEQAXyXJtAa32YaUb0pQcgBmNGRooL7+ESD0fp6ycBAQaADMLm4gcLJByjSy4ZogAJ4xoXCCyvo42nBQNDh0auzySpjFOHD6AI4MSLK+6r6krm00CF1F5ZX6qphdStBI5jHa-WSToBDzOGgATGIADBknQA"
        break;
      case 'overview':
        src = "https://jonathanzong.github.io/editor/#/url/vega-lite/N4IgJghgLhIFygK4CcA29zQgegM4AcBWABmIDoBjXANxAF8AaEaigewDsLp4BtUAdwCWYKAAt4AFgAcxJgFsIyANYZFAU1hM1nVmEHsA5vFAAPYyABmgtajAZIUNSCZQAnvidwQjuflbIIdCZcLlRPUDBWBX1zfEUIOQwAI2REXHE6RhAIE0FccyhBKDCMeizXcysbOy98ZEEKJxd3TxAAR0QIdkKYQuonTMYBYTFJGSZRNUEDUSh4ADZZEAVlVWQNZxA4gLl8uD4QdgTWlLTxYJs1CjmEbxaMfUdkakDN7TY9Qz2eEDMAXSYHAwhTkamQmzqaj0XEc5i6NQOVVs9mgTRABlhtzUJjqqnYgjkAH0XqhEAMhpZrMivA40ahMaBsbivF0CcTAmSAAQAak5AGYAIyEPmLUhisp-LJJfQ1EAhQJqfKZAEgd66fRGW5mW5I2W0zZuDzAtS+fyvcqVKmyuoNNGG1odLo9aCCfqbHJ5AoNJQAYVYiG68D5TAM9RqFkCuDUmRcBPClOqKNhwVC8ftGFQ+g04KYAUMnh4slFpElg0lQA"
        break;
      case 'stocks':
        src = "https://jonathanzong.github.io/editor/#/url/vega-lite/N4IgJAzgxgFgpgWwIYgFwhgF0wBwqgegIDc4BzJAOjIEtMYBXAI0poHsDp5kTykBaADZ04JAKyUAVhDYA7EABoQAEySYUqUAwBOgtCrVJOmNlADWESlAjFFIAGZttyTGlA4k2iHDcHMP9FV-EABfMKUAdxplejQANjEABiV4GjIsNABmROSQOFkoNmUaWTJfTBoEANB7GjhBZX0gnyVoJEFqkG0kUs6Ifxw0ACYcsPCQQSQATzhtNABtd08kBAgF0FkVgJAS5TgADztidoYAxZBDzRAZz2GcsSUEOVjUAEYlZrRXsIBdVvq4FBXFdMFMcNscGwSq4lHJ9BUqnNfo9PGZ9JDoXZ8oViqVfJcanUGk01C0QKDwfDEJDunolEh9jQ1qhZAxBIIQrCPFA6FNfMdBKc0IkxgpQJhurIII5nOsJmw2GYGIN0BApggmGw6Q5tGwEL4PN19ehdgc7GY4HzVerNXpwqAoO0oGzSSTMAwEKxZHt9gACABk-t9QQ9Xp9lBw2hoUDgvoAfL7Er6APy+gAUIc9kejsf4wbUodN+wjUZjAEoCJmwwcSznfahE3YkMydt6DnBlAB9bMx0J-EDIbRo9DCWRk7FFEplK4EhxExqBV1KCnbfwIGntJuM5ms9mc66+Wr1Betn0d7ulskr-QARwYPQq6gqpC3TMPThc+gApKF94VBE4h7zvoaoalqdjXugsh6iUm6iuKkrSh+cq1II-hzFchorPoRa-v2E64tOoCzkexKLsEy5gqu1JOJu9Lbmgu4cko-6AVcApCugtTaHATClmi4yTDMGHnIOw7ilR+jaGyZL9LqFoAOrRC8iSUGI9oDqi5SSeg-j7DCIDtGk8joDGsjoXYjjmQpcBpBkbyjEoBFTuUBzAoSx5ulelRwAAqrIdD6DczjPDAoRKFaoAcQEmSvCKvwhD8IRAA"
        break;
      case 'gapminder':
      default:
        src = 'https://jonathanzong.github.io/editor/#/url/vega-lite/N4IgJghgLhIFygK4CcA28QAspQA4Gc4B6I5CAdwDoBzASyk0QCNF8BTZAYwHsA7KNv0o8AtkQBubahAlSIAWkgx2UfERER8A5ESUzpuEbV5gOlAFb4+IAL4AaEBuQBrDLm7GoIB7ghkR+PAA2qC8ECJsGACebH7eIOyobJxeCCBQUbiRcCDunvHWOVC0Eci2DkzGYPCgxriIqSBkvNSRDka88ACMAJwArH3tEAAe8ABMAAwTgwkCuPB9NjYAug5QzfgAZtzIIsGgm7So2jW5fuHRsWVLqyCCPGDG1Kc8qDunh2yo1Tk8iPzIKLxJKtEzwXiIVCoewgUZpT7fDCbDjFVD0IFrTLZEAAR0QEH49GgtEk5RAQPhtC+PxAaORAH02MMsil4hkshg8QTijBiqSYcUIh8qYicjE4g58JwIElTs1WsEJnY+lMJssYc42BSDiKaX8AUClksgA'
    }
    // iframe must be removed and then readded with updated src as otherwise the new spec doesn't update
    document.getElementById("vega-lite-animated-editor-loading").style.display = "block";
    document.getElementById("vega-lite-animated-editor-iframe").remove();
    const iframe = document.createElement("iframe");
    iframe.id = "vega-lite-animated-editor-iframe"
    iframe.src = src;
    iframe.width = '100%';
    iframe.height = '700px'
    iframe.onload = onEditorLoad;
    document.getElementById("vega-lite-animated-editor-section").appendChild(iframe);
    document.getElementById("vega-lite-animated-editor-section").scrollIntoView();
  }
  function onEditorLoad() {
    document.getElementById("vega-lite-animated-editor-loading").style.display = "none";
  }
</script>

