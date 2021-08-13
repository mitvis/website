---
layout: pub
title: Sociotechnical Considerations for Accessible Visualization Design
authors:
  - key: lundgard
    equal: true
  - key: crystall
    equal: true
    affiliation: MIT HASTS
  - key: arvindsatya
venue: vis-short
year: 2019
featured: true
videos:
  - name: 30s Preview
    platform: vimeo
    key: 363041501
---
<article>
  <figure id="teaser"><img src="x15.png" id="p1.g1" class="ltx_graphics ltx_centering" width="2702" height="928" alt="">
    <figcaption class="ltx_text ltx_caption ltx_align_center">As part of an inclusive design workshop at the Perkins School for the Blind, we created a 3D printed tactile translation of a time-series chart by William Playfair. In this paper, we show how these one-to-one translations, while based on existing best-practice guidelines for tactile graphics, can be pedagogically ineffective and incur prohibitive costs.
    </figcaption>
  </figure>
  <section class="ltx_abstract" id="abstract">
    <h2 class="ltx_title ltx_title_abstract" id="H-abstract">Abstract</h2>
    <p class="ltx_p">Accessibility—the process of designing for  <a href="#id58"><span href="#id58" title="people with disabilities" class="ltx_glossaryref"><span class="ltx_text ltx_glossary_long">people with disabilities</span></span></a> (<a href="#id58"><abbr href="#id58" title="people with disabilities" class="ltx_glossaryref"><span class="ltx_text ltx_glossary_short">PWD</span></abbr></a>)—is an important but under-explored challenge in the visualization research community.
      Without careful attention, and if <a href="#id58"><abbr href="#id58" title="people with disabilities" class="ltx_glossaryref"><span class="ltx_text ltx_glossary_short">PWD</span></abbr></a> are not included as equal participants throughout the process, there is a danger of perpetuating a vision-first approach to accessible design that marginalizes the lived experience of disability (e.g., by creating overly simplistic “sensory translations” that map visual to non-visual modalities in a one-to-one fashion).
      In this paper, we present a set of sociotechnical considerations for research in accessible visualization design, drawing on literature in disability studies, tactile information systems, and participatory methods.
      We identify that using state-of-the-art technologies may introduce more barriers to access than they remove, and that expectations of research novelty may not produce outcomes well-aligned with the needs of disability communities.
      Instead, to promote a more inclusive design process, we emphasize the importance of clearly communicating goals, following existing accessibility guidelines, and treating <a href="#id58"><abbr href="#id58" title="people with disabilities" class="ltx_glossaryref"><span class="ltx_text ltx_glossary_short">PWD</span></abbr></a> as equal participants who are compensated for their specialized skills.
      To illustrate how these considerations can be applied in practice, we discuss a case study of an inclusive design workshop held in collaboration with the Perkins School for the Blind.</p>
  </section>
  <section id="S1" class="ltx_section">
    <h2 class="ltx_title ltx_title_section" id="H-S1">
      <span class="ltx_tag ltx_tag_section">1 </span>Introduction</h2>
    <div id="S1.p1" class="ltx_para">
      <p class="ltx_p">History provides many instructive examples of faulty information systems designed for <a href="#id58"><abbr href="#id58" title="people with disabilities" class="ltx_glossaryref"><span class="ltx_text ltx_glossary_short">PWD</span></abbr></a>.
        <span id="footnote1" class="ltx_note ltx_role_footnote"><sup class="ltx_note_mark">1</sup><span class="ltx_note_outer"><span class="ltx_note_content"><sup class="ltx_note_mark">1</sup>
              <span class="ltx_tag ltx_tag_note">1</span>
              In this paper, we use “people with disabilities” as suggested by the ACM SIGACCESS guidelines&nbsp;<cite class="ltx_cite ltx_citemacro_cite">[<a href="#bib.bib4" title="Writing About Accessibility" class="ltx_ref">16</a>]</cite>.
              In the United States, scholars have primarily used <emph class="ltx_emph ltx_font_italic">person-first language</emph> (e.g., “people with disabilties”), as opposed to <emph class="ltx_emph ltx_font_italic">identity-first language</emph> (e.g., “disabled people”).
              Our paper generally uses this convention, although we also recognize that some people prefer identity-first language (e.g., “blind people”).
            </span></span></span>
        For example, early approaches to designing tactile reading systems for blind people frequently used embossed letters that attempted to translate the alphabet’s visual contours directly into tactile shapes.
        In the <math id="S1.p1.m1" class="ltx_Math" alttext="18^{th}" display="inline"><msup><mn>18</mn><mrow><mi>t</mi><mo>⁢</mo><mi>h</mi></mrow></msup></math> century, schools favored these systems because sighted teachers did not require special training to read the embossed letters, and because it allowed blind and sighted readers to read the same texts&nbsp;<cite class="ltx_cite ltx_citemacro_cite">[<a href="#bib.bib37" title="Books for the Blind" class="ltx_ref">26</a>]</cite>.</p>
    </div>
    <div id="S1.p2" class="ltx_para">
      <p class="ltx_p">However, drawing on his own experience with blindness, Louis Braille—the inventor of the ubiquitous reading system—knew that raised dots were easier to read than embossed letters because they provided more tactile distinction.
        The eventual success of Braille’s system over embossed letters is a parable for solutions that are designed by and for <a href="#id58"><abbr href="#id58" title="people with disabilities" class="ltx_glossaryref"><span class="ltx_text ltx_glossary_short">PWD</span></abbr></a>.
        Since <a href="#id58"><abbr href="#id58" title="people with disabilities" class="ltx_glossaryref"><span class="ltx_text ltx_glossary_short">PWD</span></abbr></a> are better informed about their lived experiences than designers who are not disabled, they are also in the best position to design and engineer sustainable solutions.
        Embossed letters were ineffective because they directly translated visual into tactile systems <emph class="ltx_text ltx_font_italic">without</emph> centering a blind reader’s experience.</p>
    </div>
    <div id="S1.p3" class="ltx_para">
      <p class="ltx_p">This story resonates today as technologists extol the potential for web interfaces and 3D printing to improve the accessibility of data visualizations.
        Since the 1990s, visualization and  <a href="#id21"><span href="#id21" title="Human-Computer Interaction" class="ltx_glossaryref"><span class="ltx_text ltx_glossary_long">Human-Computer Interaction</span></span></a> (<a href="#id21"><abbr href="#id21" title="Human-Computer Interaction" class="ltx_glossaryref"><span class="ltx_text ltx_glossary_short">HCI</span></abbr></a>) researchers have developed tactile interfaces that claim to make information more accessible to blind people by allowing users to touch, rather than see, the data&nbsp;<cite class="ltx_cite ltx_citemacro_cite">[<a href="#bib.bib34" title="Tangible Bits: Towards Seamless Interfaces Between People, Bits and Atoms" class="ltx_ref">20</a>, <a href="#bib.bib179" title="Opportunities and Challenges for Data Physicalization" class="ltx_ref">22</a>, <a href="#bib.bib168" title="Visualizing for the Non-Visual: Enabling the Visually Impaired to Use Visualization" class="ltx_ref">9</a>]</cite>.
        However, few of these projects extensively consult blind people, which means that they often become what disability design expert Liz Jackson calls <emph class="ltx_text ltx_font_italic">disability dongles</emph>: a “well intended, elegant, yet useless solution to a problem we [<a href="#id58"><abbr href="#id58" title="people with disabilities" class="ltx_glossaryref"><span class="ltx_text ltx_glossary_short">PWD</span></abbr></a>] never knew we had” <cite class="ltx_cite ltx_citemacro_cite">[<a href="#bib.bib29" title="Disability dongle: A well-intended, elegant, yet useless solution to a problem we never knew we had." class="ltx_ref">21</a>]</cite>.
        Developments in <a href="#id21"><abbr href="#id21" title="Human-Computer Interaction" class="ltx_glossaryref"><span class="ltx_text ltx_glossary_short">HCI</span></abbr></a> and tactile graphics have previously converged in  <a href="#id44"><span href="#id44" title="Assistive Technology" class="ltx_glossaryref"><span class="ltx_text ltx_glossary_long">Assistive Technology</span></span></a> (<a href="#id44"><abbr href="#id44" title="Assistive Technology" class="ltx_glossaryref"><span class="ltx_text ltx_glossary_short">AT</span></abbr></a>) research <cite class="ltx_cite ltx_citemacro_cite">[<a href="#bib.bib26" title="Automating Tactile Graphics Translation" class="ltx_ref">23</a>, <a href="#bib.bib169" title="Interdependence As a Frame for Assistive Technology Research and Design" class="ltx_ref">4</a>, <a href="#bib.bib35" title="The Human-Computer Interaction Handbook" class="ltx_ref">31</a>]</cite>, but visualization researchers have not yet substantively engaged with the developments in tactile information systems, well-established accessibility guidelines, or with the perspectives of <a href="#id58"><abbr href="#id58" title="people with disabilities" class="ltx_glossaryref"><span class="ltx_text ltx_glossary_short">PWD</span></abbr></a>.</p>
    </div>
    <div id="S1.p4" class="ltx_para">
      <p class="ltx_p">To begin addressing these issues, we present a set of <emph class="ltx_emph ltx_font_italic">sociotechnical</emph> considerations for accessible visualization design.
        In our analysis, we emphasize that there are both <emph class="ltx_emph ltx_font_italic">social</emph> and <emph class="ltx_emph ltx_font_italic">technological</emph> constraints on the accessible visualization design space.
        We demonstrate how our considerations—informed by work written by and for <a href="#id58"><abbr href="#id58" title="people with disabilities" class="ltx_glossaryref"><span class="ltx_text ltx_glossary_short">PWD</span></abbr></a> in disability studies, <a href="#id44"><abbr href="#id44" title="Assistive Technology" class="ltx_glossaryref"><span class="ltx_text ltx_glossary_short">AT</span></abbr></a>, and design history—can be applied to future accessibility research.
        We also critique current research that emphasizes a vision-first approach to making tactile graphics.
      </p>
    </div>
  </section>
  <section id="S2" class="ltx_section">
    <h2 class="ltx_title ltx_title_section" id="H-S2">
      <span class="ltx_tag ltx_tag_section">2 </span>Background &amp; Related Work</h2>
    <div id="S2.p1" class="ltx_para">
      <p class="ltx_p">Our work brings together disability studies, research on tactile <span class="ltx_text" style="color:#000000;">information systems</span>, and participatory design methods to articulate a set of sociotechnical considerations for accessible visualization design.</p>
    </div>
    <section id="S2.SS1" class="ltx_subsection">
      <h3 class="ltx_title ltx_title_subsection" id="H-S2.SS1">
        <span class="ltx_tag ltx_tag_subsection">2.1 </span>Disability Studies</h3>
      <div id="S2.SS1.p1" class="ltx_para">
        <p class="ltx_p">In the United States, disability studies is an interdisciplinary field that seeks to untangle the different political, intellectual, and cultural dimensions of disability in society. In this literature, scholars distinguish between two models of thinking about disability <cite class="ltx_cite ltx_citemacro_cite">[<a href="#bib.bib267" title="The Social Model of Disability" class="ltx_ref">38</a>]</cite>. In a <strong class="ltx_text ltx_font_bold">medical model,</strong> the disability diagnosis is tied directly to an individual’s physical or psychological state, and the prognosis focuses on curing or managing the disability until it disappears as much as possible (e.g., a deaf person who uses cochlear implants) <cite class="ltx_cite ltx_citemacro_cite">[<a href="#bib.bib245" title="Universal Design Research as a New Materialist Practice" class="ltx_ref">15</a>]</cite>. By contrast, a <strong class="ltx_text ltx_font_bold">social model</strong> of disability distinguishes between an <emph class="ltx_text ltx_font_italic">impairment</emph> (a physical or psychological abnormality) and a <emph class="ltx_text ltx_font_italic">disability,</emph> which describes a form of social, economic, and political exclusion perpetuated against people who have some impairment <cite class="ltx_cite ltx_citemacro_cite">[<a href="#bib.bib266" title="The social model of disability: Thirty years on" class="ltx_ref">33</a>]</cite>. In the social model, people are disabled by structural and environmental factors, not by their bodies&nbsp;<cite class="ltx_cite ltx_citemacro_cite">[<a href="#bib.bib264" title="Extraordinary Bodies: Figuring Physical Disability in American Culture and Literature" class="ltx_ref">39</a>]</cite>.</p>
      </div>
      <div id="S2.SS1.p2" class="ltx_para">
        <p class="ltx_p">While these two models are not mutually exclusive, and can be considered alongside personal, environmental, and other contextual factors<cite class="ltx_cite ltx_citemacro_cite">[<a href="#bib.bib27" title="World Report on Disability 2011" class="ltx_ref">42</a>]</cite>, it is important for visualization researchers to understand the social and medical models because each can be leveraged towards different kinds of accessibility research. The medical model, for example, clearly articulates an actionable problem that can be measured and fixed, which can be practically useful to <a href="#id44"><abbr href="#id44" title="Assistive Technology" class="ltx_glossaryref"><span class="ltx_text ltx_glossary_short">AT</span></abbr></a> researchers.</p>
      </div>
      <div id="S2.SS1.p3" class="ltx_para">
        <p class="ltx_p">However, <a href="#id44"><abbr href="#id44" title="Assistive Technology" class="ltx_glossaryref"><span class="ltx_text ltx_glossary_short">AT</span></abbr></a> research that focuses exclusively on the medical model often stigmatizes <a href="#id58"><abbr href="#id58" title="people with disabilities" class="ltx_glossaryref"><span class="ltx_text ltx_glossary_short">PWD</span></abbr></a> by attempting to “fix” all impairments and differences through medical intervention, even when the condition does not cause pain, illness, or death (e.g., deafness)&nbsp;<cite class="ltx_cite ltx_citemacro_cite">[<a href="#bib.bib251" title="The Disability Studies Reader" class="ltx_ref">11</a>]</cite>. In particular, the medical model misses how an impairment <emph class="ltx_text ltx_font_italic">develops</emph> into a disability. For example, in a society where everyone communicates through sign language, deafness may not be perceived as a disability at all, but may instead be a source of cultural pride. In a hearing society, however, deafness may be seen as a disability that requires accommodation through interpreters or medical intervention&nbsp;<cite class="ltx_cite ltx_citemacro_cite">[<a href="#bib.bib165" title="Disability Studies As a Source of Critical Inquiry for the Field of Assistive Technology" class="ltx_ref">25</a>, <a href="#bib.bib25" title="Deafness" class="ltx_ref">28</a>]</cite>.</p>
      </div>
      <div id="S2.SS1.p4" class="ltx_para">
        <p class="ltx_p">The social model of disability, by contrast, shifts the focus from “cure to care,” in which the goal is not to fix the impairment, but rather the ways that society treats <a href="#id58"><abbr href="#id58" title="people with disabilities" class="ltx_glossaryref"><span class="ltx_text ltx_glossary_short">PWD</span></abbr></a> <cite class="ltx_cite ltx_citemacro_cite">[<a href="#bib.bib24" title="Socio-Medical Inquiries: Recollections, Reflections and Reconsiderations" class="ltx_ref">44</a>]</cite>. For example, rather than building a better wheelchair that allows its user to climb stairs, proponents of the social model look instead to dismantling the legislative or bureaucratic barriers to installing wheelchair ramps in public places. While the social model cannot explain abnormal biological functions, it can be crucial for driving the adoption of assistive technologies and ensuring that the technologies address the infrastructural barriers that <a href="#id58"><abbr href="#id58" title="people with disabilities" class="ltx_glossaryref"><span class="ltx_text ltx_glossary_short">PWD</span></abbr></a> experience in their everyday lives.</p>
      </div>
    </section>
    <section id="S2.SS2" class="ltx_subsection">
      <h3 class="ltx_title ltx_title_subsection" id="H-S2.SS2">
        <span class="ltx_tag ltx_tag_subsection">2.2 </span>Tactile Information Systems</h3>
      <div id="S2.SS2.p1" class="ltx_para">
        <p class="ltx_p">Tactile systems like braille displays, 3D models, and embossed maps have been a mainstay of blind education <cite class="ltx_cite ltx_citemacro_cite">[<a href="#bib.bib23" title="Tactile Graphics Resources" class="ltx_ref">40</a>]</cite>. As such, there is a vast literature by computer scientists, education professionals, and organizations for the blind that explore how these tools can be put into practice <cite class="ltx_cite ltx_citemacro_cite">[<a href="#bib.bib22" title="Talk to the Hand: An Agenda for Further Research on Tactile Graphics" class="ltx_ref">1</a>, <a href="#bib.bib17" title="Best Practice Guidelines for the Design, Production and Presentation of Vacuum Formed Tactile Maps" class="ltx_ref">13</a>, <a href="#bib.bib18" title="Constructing the Yellow Brick Road: Route Bricks on Virtual Tactile Maps" class="ltx_ref">37</a>]</cite>. Education researcher Lucia Hasty, for example, has developed principles of graphical literacy that show how blind and sighted students learn differently&nbsp;<cite class="ltx_cite ltx_citemacro_cite">[<a href="#bib.bib180" title="Teaching Tactile Graphics, Perkins School for the Blind" class="ltx_ref">17</a>]</cite>. Sighted learners absorb information <strong class="ltx_text ltx_font_bold">whole to part</strong>, where they see the whole picture simultaneously, and understand the different visual encodings in relation to each other (e.g., the size and color of one bar compared to another). Tactile learners, however, must approach tactile graphics <strong class="ltx_text ltx_font_bold">part to whole</strong> by touching individual parts of the graphic processually. They then put together each piece of information in a sequence to view the graphic as a whole.
          Given the differences between these approaches, successful tactile representations should ensure that it is easy to access the information sequentially, and that each tactile element is easily and quickly distinguishable.
          Braille is a prime example of a successful tactile representation. Each braille cell is easy to scan quickly and sequentially (compared to embossed lettering, where a user must try to synthesize each letter individually—a relatively slow process—before moving onto the next letter).
          Furthermore, printed braille has many well-established contractions, which make it even faster to scan through texts.
          Drawing on braille’s design successes and guidelines, an important area for future work is developing an analogous system for visualizations (i.e., one that permits fast and effective information access, and does not simply translate the visualization into a tactile representation in a one-to-one fashion).
          Combining these insights with guidelines on tactile graphics from organizations like  <a href="#id49"><span href="#id49" title="American Printing House for the Blind" class="ltx_glossaryref"><span class="ltx_text ltx_glossary_long">American Printing House for the Blind</span></span></a> (<a href="#id49"><abbr href="#id49" title="American Printing House for the Blind" class="ltx_glossaryref"><span class="ltx_text ltx_glossary_short">APH</span></abbr></a>),  <a href="#id48"><span href="#id48" title="Braille Authority of North America" class="ltx_glossaryref"><span class="ltx_text ltx_glossary_long">Braille Authority of North America</span></span></a> (<a href="#id48"><abbr href="#id48" title="Braille Authority of North America" class="ltx_glossaryref"><span class="ltx_text ltx_glossary_short">BANA</span></abbr></a>), and  <a href="#id50"><span href="#id50" title="World Wide Web Consortium" class="ltx_glossaryref"><span class="ltx_text ltx_glossary_long">World Wide Web Consortium</span></span></a> (<a href="#id50"><abbr href="#id50" title="World Wide Web Consortium" class="ltx_glossaryref"><span class="ltx_text ltx_glossary_short">W3C</span></abbr></a>)’s  <a href="#id51"><span href="#id51" title="Web Accessibility Initiative" class="ltx_glossaryref"><span class="ltx_text ltx_glossary_long">Web Accessibility Initiative</span></span></a> (<a href="#id51"><abbr href="#id51" title="Web Accessibility Initiative" class="ltx_glossaryref"><span class="ltx_text ltx_glossary_short">WAI</span></abbr></a>), provide a powerful basis on which to begin this research <cite class="ltx_cite ltx_citemacro_cite">[<a href="#bib.bib42" title="Guidelines and Standards for Tactile Graphics, 2010" class="ltx_ref">14</a>, <a href="#bib.bib16" title="Guidelines for Design of Tactile Graphics" class="ltx_ref">2</a>, <a href="#bib.bib9" title="Web Content Accessibility Guidelines (WCAG)" class="ltx_ref">41</a>]</cite>. Building on these existing <a href="#id44"><abbr href="#id44" title="Assistive Technology" class="ltx_glossaryref"><span class="ltx_text ltx_glossary_short">AT</span></abbr></a> guidelines is an excellent example of how the social model of disability can inform practice <cite class="ltx_cite ltx_citemacro_cite">[<a href="#bib.bib165" title="Disability Studies As a Source of Critical Inquiry for the Field of Assistive Technology" class="ltx_ref">25</a>]</cite>.
        </p>
      </div>
    </section>
    <section id="S2.SS3" class="ltx_subsection">
      <h3 class="ltx_title ltx_title_subsection" id="H-S2.SS3">
        <span class="ltx_tag ltx_tag_subsection">2.3 </span>Participatory Design Methods</h3>
      <div id="S2.SS3.p1" class="ltx_para">
        <p class="ltx_p">At each stage of conducting a study, researchers should be attentive to the power dynamics between themselves and their study participants. Historically, ignoring these dynamics has exposed already marginalized communities to long-term psychological and physiological harm (e.g., the Tuskegee syphilis experiment)&nbsp;<cite class="ltx_cite ltx_citemacro_cite">[<a href="#bib.bib5" title="Racism and Research: The Case of the Tuskegee Syphilis Study" class="ltx_ref">7</a>]</cite>. In particular, developments in <a href="#id44"><abbr href="#id44" title="Assistive Technology" class="ltx_glossaryref"><span class="ltx_text ltx_glossary_short">AT</span></abbr></a> have often relied upon using <a href="#id58"><abbr href="#id58" title="people with disabilities" class="ltx_glossaryref"><span class="ltx_text ltx_glossary_short">PWD</span></abbr></a> as test subjects for technologies that were later transformed into more profitable ventures intended for able-bodied people <cite class="ltx_cite ltx_citemacro_cite">[<a href="#bib.bib176" title="Deaf Jam: From Inscription to Reproduction to Information" class="ltx_ref">27</a>]</cite>. To mitigate situations like these, researchers in many disciplines have developed ways of working <emph class="ltx_text ltx_font_italic">with</emph> (rather than <emph class="ltx_text ltx_font_italic">on</emph>) marginalized communities <cite class="ltx_cite ltx_citemacro_cite">[<a href="#bib.bib1" title="Design Justice: Towards an Intersectional Feminist Framework for Design Theory and Practice" class="ltx_ref">10</a>, <a href="#bib.bib14" title="The Value and Challenges of Participatory Research: Strengthening Its Practice" class="ltx_ref">8</a>, <a href="#bib.bib12" title="Qualitative Approaches to Studying Marginalized Communities" class="ltx_ref">29</a>]</cite>. Generally, these community-based or participatory research methods emphasize collective inquiry in which study participants are considered co-researchers. Far from simply being a <emph class="ltx_text ltx_font_italic">subject</emph> of research, these participants help define the design problem and contribute to methods, data collection, analysis, and publication&nbsp;<cite class="ltx_cite ltx_citemacro_cite">[<a href="#bib.bib165" title="Disability Studies As a Source of Critical Inquiry for the Field of Assistive Technology" class="ltx_ref">25</a>, <a href="#bib.bib36" title="Participatory Design" class="ltx_ref">30</a>, <a href="#bib.bib35" title="The Human-Computer Interaction Handbook" class="ltx_ref">31</a>]</cite>.
          These methods go beyond user-centered design <cite class="ltx_cite ltx_citemacro_cite">[<a href="#bib.bib7" title="User Centered System Design; New Perspectives on Human-Computer Interaction" class="ltx_ref">32</a>]</cite> to articulate more clearly what the stakes are in a research project: who participates with whom in what? Who are the intended beneficiaries of a project, and how do they accrue these benefits? By re-centering <a href="#id58"><abbr href="#id58" title="people with disabilities" class="ltx_glossaryref"><span class="ltx_text ltx_glossary_short">PWD</span></abbr></a> in the design process, participatory methods can be useful for historically marginalized communities because they break down the separation between those who are doing the design and those who are being designed <emph class="ltx_emph ltx_font_italic">for</emph>.</p>
      </div>
      <div id="S2.SS3.p2" class="ltx_para">
        <p class="ltx_p">This work also attempts to avoid the problems associated with <emph class="ltx_text ltx_font_italic">parachute research</emph>, a phenomenon in which researchers—particularly those from wealthy universities—drop into a community, make use of local infrastructure and expertise, and then disengage from the community altogether after publishing results in a prestigious academic journal <cite class="ltx_cite ltx_citemacro_cite">[<a href="#bib.bib28" title="Closing the Door on Parachutes and Parasites" class="ltx_ref">18</a>]</cite>. This kind of research is harmful to the communities who take the time and resources to help facilitate academic research without reciprocal benefits. This can have a disproportionately negative impact on disability communities, who already face many barriers to participating in public life. To address these problems, scholars in <a href="#id44"><abbr href="#id44" title="Assistive Technology" class="ltx_glossaryref"><span class="ltx_text ltx_glossary_short">AT</span></abbr></a>, disability studies, and design have emphasized how researchers need to consider their participants as active agents with ideas and goals that may conflict with those of the researcher. This should not be seen as an obstacle to research; rather, it provides new opportunities for collaborative design <cite class="ltx_cite ltx_citemacro_cite">[<a href="#bib.bib30" title="Ways of Knowing When Research Subjects Care" class="ltx_ref">19</a>, <a href="#bib.bib8" title="From Comparison to Collaboration: Experiments with a New Scholarly and Political Form" class="ltx_ref">36</a>]</cite>.
        </p>
      </div>
    </section>
  </section>
  <section id="S3" class="ltx_section">
    <h2 class="ltx_title ltx_title_section" id="H-S3">
      <span class="ltx_tag ltx_tag_section">3 </span>Sociotechnical Considerations</h2>
    <div id="S3.p1" class="ltx_para">
      <p class="ltx_p">In this section, we introduce a set of sociotechnical considerations for accessible visualization design. These considerations are informed by related work, our own decade-long engagement with the blind community, and a case study of an inclusive design workshop.
        Each consideration begins by explaining its social and technological aspects, and concludes with questions that researchers and designers should consider when collaborating with disability communities.</p>
    </div>
    <section id="S3.SS0.SSS0.Px1" class="ltx_paragraph">
      <strong class="ltx_title ltx_font_bold ltx_title_paragraph" id="H-S3.SS0.SSS0.Px1">Non-Intervention.</strong>
      <div id="S3.SS0.SSS0.Px1.p1" class="ltx_para">
        <p class="ltx_p">At each step of the design process, researchers should consider whether any technological intervention is appropriate at all&nbsp;<cite class="ltx_cite ltx_citemacro_cite">[<a href="#bib.bib32" title="When the Implication is Not to Design (Technology)" class="ltx_ref">3</a>]</cite>.
          This is especially true of designing for and with <a href="#id58"><abbr href="#id58" title="people with disabilities" class="ltx_glossaryref"><span class="ltx_text ltx_glossary_short">PWD</span></abbr></a> because well-meaning interventions may worsen the very situations they are intended to help <cite class="ltx_cite ltx_citemacro_cite">[<a href="#bib.bib29" title="Disability dongle: A well-intended, elegant, yet useless solution to a problem we never knew we had." class="ltx_ref">21</a>]</cite>. Design processes are actively harmful when they exhaust collaborators’ time and resources without adequate compensation and reciprocity, or when they are simply band-aid technological solutions to infrastructural problems.
          Is there an equally viable low-tech or no-tech solution? Might the technological intervention result in more harm than the problem it is meant to address? Does the technology solve a computationally tractable version of the problem, or does it address an actual need?</p>
      </div>
    </section>
    <section id="S3.SS0.SSS0.Px2" class="ltx_paragraph">
      <strong class="ltx_title ltx_font_bold ltx_title_paragraph" id="H-S3.SS0.SSS0.Px2">Research &amp; Design.</strong>
      <div id="S3.SS0.SSS0.Px2.p1" class="ltx_para">
        <p class="ltx_p">If technological intervention is appropriate, researchers should carefully evaluate the goals of their project. In <a href="#id21"><abbr href="#id21" title="Human-Computer Interaction" class="ltx_glossaryref"><span class="ltx_text ltx_glossary_short">HCI</span></abbr></a>, there is a well-known tension between doing “research” and doing “design”&nbsp;<cite class="ltx_cite ltx_citemacro_cite">[<a href="#bib.bib171" title="Research Through Design As a Method for Interaction Design Research in HCI" class="ltx_ref">43</a>, <a href="#bib.bib170" title="Ways of knowing in hci" class="ltx_ref">34</a>]</cite>.
          On the one hand, research has the goal of creating new knowledge, but this may not be the best solution for a user’s immediate needs.
          On the other hand, design should satisfy those needs, but the solution may lack research novelty.
          The two are not mutually exclusive, but they do prescribe different methods and goals (e.g., a research publication versus an adoptable design solution).
          This tension is especially apparent when designing for and with <a href="#id58"><abbr href="#id58" title="people with disabilities" class="ltx_glossaryref"><span class="ltx_text ltx_glossary_short">PWD</span></abbr></a>. Preliminary interviews may reveal that the best design solutions to a user’s needs will not count as publication-worthy material.
          Is the proposed solution addressing those needs, or is it a novel research contribution? Is there a solution that addresses both?</p>
      </div>
    </section>
    <section id="S3.SS0.SSS0.Px3" class="ltx_paragraph">
      <strong class="ltx_title ltx_font_bold ltx_title_paragraph" id="H-S3.SS0.SSS0.Px3">Participatory Methods.</strong>
      <div id="S3.SS0.SSS0.Px3.p1" class="ltx_para">
        <p class="ltx_p">Taking a participatory approach to research and design is a key tenet of accessibility. This involves including stakeholders in the design process from the outset, during need-finding, problem definition, prototyping, publication, and dissemination&nbsp;<cite class="ltx_cite ltx_citemacro_cite">[<a href="#bib.bib165" title="Disability Studies As a Source of Critical Inquiry for the Field of Assistive Technology" class="ltx_ref">25</a>]</cite>.
          Participatory design aims to include users as equal participants in the design process, as opposed to merely verifying the usefulness of a solution via user studies&nbsp;<cite class="ltx_cite ltx_citemacro_cite">[<a href="#bib.bib174" title="Implications for Design" class="ltx_ref">12</a>]</cite>. Inclusive design, as complementary to participatory design, places emphasis on empowering as many people as possible, often with a focus on removing barriers for people who have physical or cognitive disabilities&nbsp;<cite class="ltx_cite ltx_citemacro_cite">[<a href="#bib.bib35" title="The Human-Computer Interaction Handbook" class="ltx_ref">31</a>]</cite>.
          Inclusive approaches may involve consideration of the <emph class="ltx_emph ltx_font_italic">interdependence</emph> between researchers and stakeholders (i.e., collapsing the distinction between who is doing the research, and <emph class="ltx_emph ltx_font_italic">for whom</emph> that research is being done)&nbsp;<cite class="ltx_cite ltx_citemacro_cite">[<a href="#bib.bib169" title="Interdependence As a Frame for Assistive Technology Research and Design" class="ltx_ref">4</a>, <a href="#bib.bib2" title="The Promise of Empathy: Design, Disability, and Knowing the “Other”" class="ltx_ref">5</a>]</cite>.
          Who are the stakeholders in a research project? Are they all recurring and equal participants throughout the design process? Are the research and design tools themselves accessible&nbsp;<cite class="ltx_cite ltx_citemacro_cite">[<a href="#bib.bib3" title="Design for User Empowerment" class="ltx_ref">24</a>]</cite>?</p>
      </div>
    </section>
    <section id="S3.SS0.SSS0.Px4" class="ltx_paragraph">
      <strong class="ltx_title ltx_font_bold ltx_title_paragraph" id="H-S3.SS0.SSS0.Px4">Communicating Expectations.</strong>
      <div id="S3.SS0.SSS0.Px4.p1" class="ltx_para">
        <p class="ltx_p">Because <a href="#id21"><abbr href="#id21" title="Human-Computer Interaction" class="ltx_glossaryref"><span class="ltx_text ltx_glossary_short">HCI</span></abbr></a> and <a href="#id44"><abbr href="#id44" title="Assistive Technology" class="ltx_glossaryref"><span class="ltx_text ltx_glossary_short">AT</span></abbr></a> research projects can often be one-off or proof-of-concept prototypes that are no longer maintained after publication, it is especially important for researchers to communicate their intentions, expectations, and capabilities clearly to all collaborators. This may include the intended duration of the project, the quantity of available resources, and the project goal—whether it be a research publication or adoptable design solution. This is especially important for technical projects that require maintenance or engineering support beyond the duration of the project.
          How long will a project be maintained, and what are the expected contributions of each collaborator? If the goal is academic publication, has there been a discussion about author credit and order? If the goal is a marketable prototype, has there been a discussion about equitable compensation and intellectual property?
        </p>
      </div>
    </section>
    <section id="S3.SS0.SSS0.Px5" class="ltx_paragraph">
      <strong class="ltx_title ltx_font_bold ltx_title_paragraph" id="H-S3.SS0.SSS0.Px5">Time &amp; Compensation.</strong>
      <div id="S3.SS0.SSS0.Px5.p1" class="ltx_para">
        <p class="ltx_p">It is generally good practice to be sensitive and respectful of all collaborators’ time, but this is especially true when designing for and with <a href="#id58"><abbr href="#id58" title="people with disabilities" class="ltx_glossaryref"><span class="ltx_text ltx_glossary_short">PWD</span></abbr></a>. Like everyone, <a href="#id58"><abbr href="#id58" title="people with disabilities" class="ltx_glossaryref"><span class="ltx_text ltx_glossary_short">PWD</span></abbr></a> are busy, but they must also contend with additional barriers to mobility, access, and employment. This makes the time that they spend on a design project especially valuable. As with any specialist, <a href="#id58"><abbr href="#id58" title="people with disabilities" class="ltx_glossaryref"><span class="ltx_text ltx_glossary_short">PWD</span></abbr></a> should always be compensated at a rate commensurate with their specialized skills, such as the ability to read braille or use a screen reader. Additionally, it may be difficult to find and recruit <a href="#id58"><abbr href="#id58" title="people with disabilities" class="ltx_glossaryref"><span class="ltx_text ltx_glossary_short">PWD</span></abbr></a> for collaboration, and this should be reflected in their rate of compensation, meaning a rate that is greater than that of an average user study participant (e.g., in some cases $35.00 per hour)&nbsp;<cite class="ltx_cite ltx_citemacro_cite">[<a href="#bib.bib164" title="The Effects of “Not Knowing What You Don’t Know” on Web Accessibility for Blind Web Users" class="ltx_ref">6</a>, <a href="#bib.bib163" title="Arboretum and Arbility: Improving Web Accessibility Through a Shared Browsing Architecture" class="ltx_ref">35</a>]</cite>.
          How much time does each participant have to contribute to the collaboration?
          Would it be better to not participate if it is not possible to contribute meaningfully or to bring the project to fruition?
          Are participants with disabilities being compensated adequately and fairly?</p>
      </div>
    </section>
    <section id="S3.SS0.SSS0.Px6" class="ltx_paragraph">
      <strong class="ltx_title ltx_font_bold ltx_title_paragraph" id="H-S3.SS0.SSS0.Px6">Accessibility Guidelines.</strong>
      <div id="S3.SS0.SSS0.Px6.p1" class="ltx_para">
        <p class="ltx_p">Researchers should familiarize themselves with the accessibility guidelines that have been developed by major organizations like the <a href="#id49"><abbr href="#id49" title="American Printing House for the Blind" class="ltx_glossaryref"><span class="ltx_text ltx_glossary_short">APH</span></abbr></a>, <a href="#id48"><abbr href="#id48" title="Braille Authority of North America" class="ltx_glossaryref"><span class="ltx_text ltx_glossary_short">BANA</span></abbr></a>, and the <a href="#id50"><abbr href="#id50" title="World Wide Web Consortium" class="ltx_glossaryref"><span class="ltx_text ltx_glossary_short">W3C</span></abbr></a>’s <a href="#id51"><abbr href="#id51" title="Web Accessibility Initiative" class="ltx_glossaryref"><span class="ltx_text ltx_glossary_short">WAI</span></abbr></a> <cite class="ltx_cite ltx_citemacro_cite">[<a href="#bib.bib42" title="Guidelines and Standards for Tactile Graphics, 2010" class="ltx_ref">14</a>, <a href="#bib.bib17" title="Best Practice Guidelines for the Design, Production and Presentation of Vacuum Formed Tactile Maps" class="ltx_ref">13</a>, <a href="#bib.bib16" title="Guidelines for Design of Tactile Graphics" class="ltx_ref">2</a>, <a href="#bib.bib9" title="Web Content Accessibility Guidelines (WCAG)" class="ltx_ref">41</a>]</cite>. While these guidelines are not complete and are sometimes contested, researchers should use them to steer and expand their inquiry.
          For example, accessibility guidelines for 3D printed tactile graphics might build upon the <a href="#id48"><abbr href="#id48" title="Braille Authority of North America" class="ltx_glossaryref"><span class="ltx_text ltx_glossary_short">BANA</span></abbr></a> guidelines, and accessible web-based visualizations might integrate  <a href="#id34"><span href="#id34" title="Accessible Rich Internet Application" class="ltx_glossaryref"><span class="ltx_text ltx_glossary_long">Accessible Rich Internet Application</span></span></a> (<a href="#id34"><abbr href="#id34" title="Accessible Rich Internet Application" class="ltx_glossaryref"><span class="ltx_text ltx_glossary_short">ARIA</span></abbr></a>) attributes developed by the <a href="#id50"><abbr href="#id50" title="World Wide Web Consortium" class="ltx_glossaryref"><span class="ltx_text ltx_glossary_short">W3C</span></abbr></a>.
          Are there existing standards and best practices relevant to the design problem?
          If so, does the proposed design solution adhere to these standards?
          If not, in what way might the proposed design solution integrate with, or build upon, this work?</p>
      </div>
    </section>
    <section id="S3.SS0.SSS0.Px7" class="ltx_paragraph">
      <strong class="ltx_title ltx_font_bold ltx_title_paragraph" id="H-S3.SS0.SSS0.Px7">Technology Access.</strong>
      <div id="S3.SS0.SSS0.Px7.p1" class="ltx_para">
        <p class="ltx_p">Designing for and with <a href="#id58"><abbr href="#id58" title="people with disabilities" class="ltx_glossaryref"><span class="ltx_text ltx_glossary_short">PWD</span></abbr></a> almost always involves securing access to specialized materials and technologies, from low-tech solutions (e.g., tactile tape, puff paint, wax strips) to high-tech devices (e.g., screen readers, refreshable braille displays, embossing and 3D printers).
          Access to these technologies will circumscribe the space of feasible design solutions, and so particular approaches should be chosen carefully to fit within these constraints.
          A high-tech approach may permit finer-grained, more durable products, and it may yield more sensational results, but securing access to these technologies can be prohibitively costly.
          A low-tech approach may be more readily available to the user on a daily basis, but may convey information more coarsely or unreliably.
          Even ostensibly democratizing technologies, such as 3D printing, may be hard to come by, and the interfaces to operate these technologies may not be accessible themselves.
          Does the problem require a high-tech approach, or will a low-tech approach work just as well, if not better?
          Does the design require one-time access to an expensive piece of technology, or repeated, frequent access by the user?</p>
      </div>
    </section>
    <section id="S3.SS0.SSS0.Px8" class="ltx_paragraph">
      <strong class="ltx_title ltx_font_bold ltx_title_paragraph" id="H-S3.SS0.SSS0.Px8">Technology Resolution.</strong>
      <div id="S3.SS0.SSS0.Px8.p1" class="ltx_para">
        <p class="ltx_p">In addition to constraints imposed by access to specialized technologies, researchers also need to ensure that those technologies can encode information effectively.
          By drawing an analogy with high-fidelity audio and display resolution, we use “resolution” to describe how well a particular medium can encode and convey detailed information.
          This is especially important for web visualizations, which are typically not screen reader compatible, and for braille, which requires standardized height and spacing, and cannot be resized to fit a particular area.
          For example, with 3D printing, the size of the printer bed may constrain the amount of braille that can be printed in one line, and the quality of the printing material may change how long a braille reader can interact with the object. Plastic filaments used on consumer 3D printers, for example, can create abrasive surfaces that make it uncomfortable for braille readers to use for a long period of time.
          A medium’s resolution depends on various hardware and software limitations, and on material and social constraints.
          What degree of resolution is appropriate to the user’s needs, and which technologies can be used to achieve it?</p>
      </div>
    </section>
  </section>
  <section id="S4" class="ltx_section">
    <h2 class="ltx_title ltx_title_section" id="H-S4">
      <span class="ltx_tag ltx_tag_section">4 </span>Case Study: The Perkins School for the Blind</h2>
    <div id="S4.p1" class="ltx_para">
      <p class="ltx_p">To illustrate the benefits of approaching accessible visualization design from a disability studies and <a href="#id44"><abbr href="#id44" title="Assistive Technology" class="ltx_glossaryref"><span class="ltx_text ltx_glossary_short">AT</span></abbr></a> perspective, and to ground our sociotechnical considerations in a concrete example, we present a case study from our own work. We emphasize that this is not an ideal case, but a <emph class="ltx_emph ltx_font_italic">problem case</emph> exemplifying some of the pitfalls articulated in our set of considerations. Throughout this section, we refer back to these considerations in parentheses.</p>
    </div>
    <div id="S4.p2" class="ltx_para">
      <p class="ltx_p">The authors took part in an inter-semester inclusive design workshop that featured a collaboration between MIT and the Perkins School for the Blind. The express agreement of this collaboration was to make design interventions that would address the needs of the Perkins School students and staff&nbsp;<strong class="ltx_text ltx_font_bold">(<a href="#S3.SS0.SSS0.Px1" title="Non-Intervention. ‣ 3 Sociotechnical Considerations ‣ Sociotechnical Considerations for Accessible Visualization Design" class="ltx_ref ltx_refmacro_nameref"><span class="ltx_text ltx_ref_title">Non-Intervention.</span></a>)</strong>. While the Perkins School had previously collaborated with other institutions and entrepreneurs, our collaboration involved multiple need-finding visits to the school’s campus during which we toured the facilities and participated in discussions with occupational therapists, teachers, and technologists. This afforded opportunities for design iteration and feedback <strong class="ltx_text ltx_font_bold">(<a href="#S3.SS0.SSS0.Px3" title="Participatory Methods. ‣ 3 Sociotechnical Considerations ‣ Sociotechnical Considerations for Accessible Visualization Design" class="ltx_ref ltx_refmacro_nameref"><span class="ltx_text ltx_ref_title">Participatory Methods.</span></a>)</strong>. Of prior non-participatory collaborations, the President of the Perkins School noted that:
      </p>
      <blockquote class="ltx_quote ltx_displayquote">
        <p class="ltx_p"><span class="ltx_text ltx_quote"><emph class="ltx_emph ltx_font_italic">
              <span class="ltx_ERROR undefined">\say</span>These entrepreneurs come to us with their finished prototypes, but they haven’t talked to very many blind people in the process before they’ve put in all the effort to create the prototype.
            </emph></span></p>
      </blockquote>
    </div>
    <div id="S4.p3" class="ltx_para">
      <p class="ltx_p">In such cases, the President suggested that many of the resulting prototypes were relatively useless to their community, reflecting a sighted designer’s idea of what a blind person <emph class="ltx_emph ltx_font_italic">could</emph> want, and not what they <emph class="ltx_emph ltx_font_italic">actually</emph> needed.
        By taking a participatory approach, the workshop was meant to evade this pitfall. However, we identified an ongoing tension between doing “research” and doing “design” which made clear that participatory methods are necessary but insufficient for framing design interventions.
        Although we did not enter the workshop intending to produce academic research, the workshop organizers placed an emphasis on developing a novel research product. They encouraged us to “think beyond” satisfying the commonplace and bespoke needs of the Perkins School students and staff towards new, more generalizable solutions&nbsp;<strong class="ltx_text ltx_font_bold">(<a href="#S3.SS0.SSS0.Px2" title="Research &amp; Design. ‣ 3 Sociotechnical Considerations ‣ Sociotechnical Considerations for Accessible Visualization Design" class="ltx_ref ltx_refmacro_nameref"><span class="ltx_text ltx_ref_title">Research &amp; Design.</span></a>)</strong>.
        To relieve this tension, we opted to work on a project that engaged with the immediate needs of blind students, but also had potential for research novelty—3D printed tactile graphics. One assistive technologist, for example, noted that prior approaches to tactile graphics in educational settings were ineffective:</p>
    </div>
    <div id="S4.p4" class="ltx_para">
      <blockquote class="ltx_quote ltx_displayquote">
        <p class="ltx_p"><span class="ltx_text ltx_quote"><emph class="ltx_emph ltx_font_italic">
              <span class="ltx_ERROR undefined">\say</span>I have not found a tactile graphic solution that works. There’s usually some sort of compromise. You might get the general outline of something, but you don’t necessarily get the information that is conveyed… Now, if there was a new student, I would turn to 3D printing to create 3D visualizations.
            </emph></span></p>
      </blockquote>
    </div>
    <div id="S4.p5" class="ltx_para">
      <p class="ltx_p">Because tactile graphics are often created using embossing printers that are limited in the number of printable dots-per-inch, direct translation of a high resolution visual image to a lower resolution tactile print leads to information loss. This can create tactile ambiguities that were not present in the original visual image. For example, in a paper embossed tactile graphic, the intersections between two lines in a multi-line plot would not be distinguishable through touch, as in the original Playfair chart (Figure&nbsp;<span class="ltx_ref ltx_ref_self"><span class="ltx_text ltx_ref_title">Sociotechnical Considerations for Accessible Visualization Design</span></span>).
        3D printing permits higher resolution encodings because there is an extra printable dimension, which helps eliminate the ambiguities common to paper embossing&nbsp;<strong class="ltx_text ltx_font_bold">(<a href="#S3.SS0.SSS0.Px8" title="Technology Resolution. ‣ 3 Sociotechnical Considerations ‣ Sociotechnical Considerations for Accessible Visualization Design" class="ltx_ref ltx_refmacro_nameref"><span class="ltx_text ltx_ref_title">Technology Resolution.</span></a>)</strong>.
        Accordingly, 3D printing is often touted as a democratizing technology in terms of affordability and access, but the more affordable models (under $800) also have the lowest resolution and smallest printable dimensions.
        These constraints on print resolution may be incompatible with constraints imposed by existing accessibility guidelines.
        For example, <a href="#id48"><abbr href="#id48" title="Braille Authority of North America" class="ltx_glossaryref"><span class="ltx_text ltx_glossary_short">BANA</span></abbr></a> gives guidelines for the spacing between braille dots because braille becomes illegible when it is spaced too widely or narrowly<cite class="ltx_cite ltx_citemacro_cite">[<a href="#bib.bib42" title="Guidelines and Standards for Tactile Graphics, 2010" class="ltx_ref">14</a>]</cite>.
        Due to their low resolution and small printable dimensions, prototypes of the Playfair translation printed using the affordable 3D printers failed to meet the <a href="#id48"><abbr href="#id48" title="Braille Authority of North America" class="ltx_glossaryref"><span class="ltx_text ltx_glossary_short">BANA</span></abbr></a> guidelines <strong class="ltx_text ltx_font_bold">(<a href="#S3.SS0.SSS0.Px6" title="Accessibility Guidelines. ‣ 3 Sociotechnical Considerations ‣ Sociotechnical Considerations for Accessible Visualization Design" class="ltx_ref ltx_refmacro_nameref"><span class="ltx_text ltx_ref_title">Accessibility Guidelines.</span></a>)</strong>.
        Thus, access to an extremely expensive commercial 3D printer (roughly $330,000) became a prerequisite for translating the detailed visualization into a high-resolution tactile graphic&nbsp;<strong class="ltx_text ltx_font_bold">(<a href="#S3.SS0.SSS0.Px7" title="Technology Access. ‣ 3 Sociotechnical Considerations ‣ Sociotechnical Considerations for Accessible Visualization Design" class="ltx_ref ltx_refmacro_nameref"><span class="ltx_text ltx_ref_title">Technology Access.</span></a>)</strong>.
        Compared with paper embossed graphics, the Perkins School students expressed a strong preference for the 3D printed graphics because of their higher resolution. This is a worthwhile research insight, but commercial 3D printing was not a design solution that was adoptable beyond the duration of the workshop and should have been communicated as such&nbsp;<strong class="ltx_text ltx_font_bold">(<a href="#S3.SS0.SSS0.Px4" title="Communicating Expectations. ‣ 3 Sociotechnical Considerations ‣ Sociotechnical Considerations for Accessible Visualization Design" class="ltx_ref ltx_refmacro_nameref"><span class="ltx_text ltx_ref_title">Communicating Expectations.</span></a>)</strong>.
      </p>
    </div>
    <div id="S4.p6" class="ltx_para">
      <p class="ltx_p">The collaboration between MIT and the Perkins School was well-meaning and it was intended to be mutually beneficial.
        As such, the Perkins School students and staff were not compensated for their valuable time and expertise, even though they spent part of their workdays to meet with us&nbsp;<strong class="ltx_text ltx_font_bold">(<a href="#S3.SS0.SSS0.Px5" title="Time &amp; Compensation. ‣ 3 Sociotechnical Considerations ‣ Sociotechnical Considerations for Accessible Visualization Design" class="ltx_ref ltx_refmacro_nameref"><span class="ltx_text ltx_ref_title">Time &amp; Compensation.</span></a>)</strong>.
        While this arrangement may have been equitable had we collaboratively produced solutions that actually satisfied the needs of the students, it was not clear that the workshop benefited the Perkins School students and staff as much as it benefited the participants from MIT.
        Media scholar Mara Mills has documented the many ways that disability has been used as a pretense to develop innovations that are primarily for publicity, often without giving back to <a href="#id58"><abbr href="#id58" title="people with disabilities" class="ltx_glossaryref"><span class="ltx_text ltx_glossary_short">PWD</span></abbr></a> in a substantial way <cite class="ltx_cite ltx_citemacro_cite">[<a href="#bib.bib176" title="Deaf Jam: From Inscription to Reproduction to Information" class="ltx_ref">27</a>]</cite>.
        While this was in no way the workshop’s intent, it may have been its predominant outcome: an opportunity for able-bodied researchers and designers to engage with <a href="#id58"><abbr href="#id58" title="people with disabilities" class="ltx_glossaryref"><span class="ltx_text ltx_glossary_short">PWD</span></abbr></a> and to generate publicity for both institutions (both of which had reporters on-hand).
        For us, however, the workshop also afforded a valuable lesson for guiding future research and design that avoids the pitfalls of parachute research. Put succinctly, successful participatory design cannot be achieved within an accelerated time frame. Collaborations with <a href="#id58"><abbr href="#id58" title="people with disabilities" class="ltx_glossaryref"><span class="ltx_text ltx_glossary_short">PWD</span></abbr></a> should support longer-term engagement through equitable compensation for each participant’s time, and the goals of the design process should be well-scoped to account for each participant’s availability and access to relevant technologies.
      </p>
    </div>
  </section>
  <section id="S5" class="ltx_section">
    <h2 class="ltx_title ltx_title_section" id="H-S5">
      <span class="ltx_tag ltx_tag_section">5 </span>Conclusion &amp; Future Work</h2>
    <div id="S5.p1" class="ltx_para">
      <p class="ltx_p">In this paper, we contribute a set of sociotechnical considerations for accessible visualization design.
        Visualization research has largely focused on addressing the technological and perceptual barriers to the effective visual encoding of information. However, due to the many ways in which barriers to access are manifested, we emphasize that there are both <emph class="ltx_emph ltx_font_italic">social</emph> and <emph class="ltx_emph ltx_font_italic">technological</emph> constraints on the accessible visualization design space.
        While new technologies such as 3D printing and web interfaces afford many opportunities for future work (e.g., developing more effective tactile representations, guidelines for 3D printing, and screen reader compatible visualizations), existing work on braille and tactile graphics provide a guide for conducting this research successfully and inclusively.
        Drawing on these examples, our considerations are intended to help guide researchers away from <emph class="ltx_emph ltx_font_italic">parachute research</emph>, overly simplistic vision-first approaches (e.g., <emph class="ltx_emph ltx_font_italic">disability dongles</emph>), and towards design practices that avoid the pitfalls of well-meaning but insufficient collaborations with <a href="#id58"><abbr href="#id58" title="people with disabilities" class="ltx_glossaryref"><span class="ltx_text ltx_glossary_short">PWD</span></abbr></a> (e.g., embossed lettering).
        When pursued with careful attention, there will be many exciting opportunities for collaboration between disability, <a href="#id44"><abbr href="#id44" title="Assistive Technology" class="ltx_glossaryref"><span class="ltx_text ltx_glossary_short">AT</span></abbr></a>, and visualization communities.</p>
    </div>
    <div class="ltx_acknowledgements">
      <h2 class="ltx_title ltx_title_acknowledgements" id="H-ack">Acknowledgements</h2>
      We thank the students and staff from the Perkins School for the Blind, the workshop organizers, and the MIT Assistive Technology Information Center.
      We also thank Michael Correll, Richard Ladner, and Meredith Ringel Morris for their feedback on earlier drafts.
    </div>
  </section>
  <section id="bib" class="ltx_bibliography">
    <h2 class="ltx_title ltx_title_bibliography" id="H-bib">References</h2>
    <ul id="bib.L1" class="ltx_biblist">
      <li id="bib.bib22" class="ltx_bibitem ltx_bib_inproceedings">
        <span class="ltx_tag ltx_bib_key ltx_role_refnum ltx_tag_bibitem">[1]</span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_author">F. Aldrich</span><span class="ltx_text ltx_bib_year"> (2008)</span>
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_title">Talk to the Hand: An Agenda for Further Research on Tactile Graphics</span>.
        </span>
        <span class="ltx_bibblock">In <span class="ltx_text ltx_bib_inbook">Diagrammatic Representation and Inference</span>,  <span class="ltx_text ltx_bib_editor">G. Stapleton, J. Howse, and J. Lee (Eds.)</span>,
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_series">Lecture Notes in Computer Science</span>, <span class="ltx_text ltx_bib_pages"> pp.&nbsp;344–346</span> (<span class="ltx_text ltx_bib_language">en</span>).
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_links"></span>
        </span>
        <span class="ltx_bibblock ltx_bib_cited">Cited by: <a href="#S2.SS2.p1" title="2.2 Tactile Information Systems ‣ 2 Background &amp; Related Work ‣ Sociotechnical Considerations for Accessible Visualization Design" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§2.2</span></a>.
        </span>
      </li>
      <li id="bib.bib16" class="ltx_bibitem ltx_bib_report">
        <span class="ltx_tag ltx_bib_key ltx_role_refnum ltx_tag_bibitem">[2]</span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_author">N. Amick and J. Corcoran</span><span class="ltx_text ltx_bib_year"> (1997)</span>
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_title">Guidelines for Design of Tactile Graphics</span>.
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_type">Technical report</span>
        </span>
        <span class="ltx_bibblock"> <span class="ltx_text ltx_bib_publisher">American Printing House for the Blind</span>.
        </span>
        <span class="ltx_bibblock ltx_bib_cited">Cited by: <a href="#S2.SS2.p1" title="2.2 Tactile Information Systems ‣ 2 Background &amp; Related Work ‣ Sociotechnical Considerations for Accessible Visualization Design" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§2.2</span></a>,
          <a href="#S3.SS0.SSS0.Px6.p1" title="Accessibility Guidelines. ‣ 3 Sociotechnical Considerations ‣ Sociotechnical Considerations for Accessible Visualization Design" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§3</span></a>.
        </span>
      </li>
      <li id="bib.bib32" class="ltx_bibitem ltx_bib_inproceedings">
        <span class="ltx_tag ltx_bib_key ltx_role_refnum ltx_tag_bibitem">[3]</span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_author">E. P.S. Baumer and M. S. Silberman</span><span class="ltx_text ltx_bib_year"> (2011)</span>
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_title">When the Implication is Not to Design (Technology)</span>.
        </span>
        <span class="ltx_bibblock">In <span class="ltx_text ltx_bib_inbook">Proceedings of the SIGCHI Conference on Human Factors in Computing Systems</span>,
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_series">CHI ’11</span>, <span class="ltx_text ltx_bib_place">New York, NY, USA</span>, <span class="ltx_text ltx_bib_pages"> pp.&nbsp;2271–2274</span>.
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_links"></span>
        </span>
        <span class="ltx_bibblock ltx_bib_cited">Cited by: <a href="#S3.SS0.SSS0.Px1.p1" title="Non-Intervention. ‣ 3 Sociotechnical Considerations ‣ Sociotechnical Considerations for Accessible Visualization Design" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§3</span></a>.
        </span>
      </li>
      <li id="bib.bib169" class="ltx_bibitem ltx_bib_inproceedings">
        <span class="ltx_tag ltx_bib_key ltx_role_refnum ltx_tag_bibitem">[4]</span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_author">C. L. Bennett, E. Brady, and S. M. Branham</span><span class="ltx_text ltx_bib_year"> (2018)</span>
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_title">Interdependence As a Frame for Assistive Technology Research and Design</span>.
        </span>
        <span class="ltx_bibblock">In <span class="ltx_text ltx_bib_inbook">Proceedings of the 20th International ACM SIGACCESS Conference on Computers and Accessibility</span>,
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_series">ASSETS ’18</span>, <span class="ltx_text ltx_bib_place">New York, NY, USA</span>, <span class="ltx_text ltx_bib_pages"> pp.&nbsp;161–173</span>.
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_links"></span>
        </span>
        <span class="ltx_bibblock ltx_bib_cited">Cited by: <a href="#S1.p3" title="1 Introduction ‣ Sociotechnical Considerations for Accessible Visualization Design" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§1</span></a>,
          <a href="#S3.SS0.SSS0.Px3.p1" title="Participatory Methods. ‣ 3 Sociotechnical Considerations ‣ Sociotechnical Considerations for Accessible Visualization Design" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§3</span></a>.
        </span>
      </li>
      <li id="bib.bib2" class="ltx_bibitem ltx_bib_inproceedings">
        <span class="ltx_tag ltx_bib_key ltx_role_refnum ltx_tag_bibitem">[5]</span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_author">C. L. Bennett and D. K. Rosner</span><span class="ltx_text ltx_bib_year"> (2019)</span>
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_title">The Promise of Empathy: Design, Disability, and Knowing the “Other”</span>.
        </span>
        <span class="ltx_bibblock">In <span class="ltx_text ltx_bib_inbook">Proceedings of the 2019 CHI Conference on Human Factors in Computing Systems</span>,
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_series">CHI ’19</span>, <span class="ltx_text ltx_bib_place">New York, NY, USA</span>, <span class="ltx_text ltx_bib_pages"> pp.&nbsp;298:1–298:13</span>.
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_links">,
            <a href="http://doi.acm.org/10.1145/3290605.3300528" title="" class="ltx_ref ltx_bib_external">Link</a>,
          </span>
        </span>
        <span class="ltx_bibblock ltx_bib_cited">Cited by: <a href="#S3.SS0.SSS0.Px3.p1" title="Participatory Methods. ‣ 3 Sociotechnical Considerations ‣ Sociotechnical Considerations for Accessible Visualization Design" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§3</span></a>.
        </span>
      </li>
      <li id="bib.bib164" class="ltx_bibitem ltx_bib_inproceedings">
        <span class="ltx_tag ltx_bib_key ltx_role_refnum ltx_tag_bibitem">[6]</span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_author">J. P. Bigham, I. Lin, and S. Savage</span><span class="ltx_text ltx_bib_year"> (2017)</span>
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_title">The Effects of “Not Knowing What You Don’t Know” on Web Accessibility for Blind Web Users</span>.
        </span>
        <span class="ltx_bibblock">In <span class="ltx_text ltx_bib_inbook">Proceedings of the 19th International ACM SIGACCESS Conference on Computers and Accessibility</span>,
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_series">ASSETS ’17</span>, <span class="ltx_text ltx_bib_place">New York, NY, USA</span>, <span class="ltx_text ltx_bib_pages"> pp.&nbsp;101–109</span>.
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_links"></span>
        </span>
        <span class="ltx_bibblock ltx_bib_cited">Cited by: <a href="#S3.SS0.SSS0.Px5.p1" title="Time &amp; Compensation. ‣ 3 Sociotechnical Considerations ‣ Sociotechnical Considerations for Accessible Visualization Design" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§3</span></a>.
        </span>
      </li>
      <li id="bib.bib5" class="ltx_bibitem ltx_bib_article">
        <span class="ltx_tag ltx_bib_key ltx_role_refnum ltx_tag_bibitem">[7]</span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_author">A. M. Brandt</span><span class="ltx_text ltx_bib_year"> (1978)</span>
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_title">Racism and Research: The Case of the Tuskegee Syphilis Study</span>.
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_journal">The Hastings Center Report</span> <span class="ltx_text ltx_bib_volume">8</span> (<span class="ltx_text ltx_bib_number">6</span>), <span class="ltx_text ltx_bib_pages"> pp.&nbsp;21–29</span>.
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_links"><span class="ltx_text issn ltx_bib_external">ISSN 0093-0334</span></span>
        </span>
        <span class="ltx_bibblock ltx_bib_cited">Cited by: <a href="#S2.SS3.p1" title="2.3 Participatory Design Methods ‣ 2 Background &amp; Related Work ‣ Sociotechnical Considerations for Accessible Visualization Design" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§2.3</span></a>.
        </span>
      </li>
      <li id="bib.bib14" class="ltx_bibitem ltx_bib_article">
        <span class="ltx_tag ltx_bib_key ltx_role_refnum ltx_tag_bibitem">[8]</span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_author">M. Cargo and S. L. Mercer</span><span class="ltx_text ltx_bib_year"> (2008)</span>
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_title">The Value and Challenges of Participatory Research: Strengthening Its Practice</span>.
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_journal">Annual Review of Public Health</span> <span class="ltx_text ltx_bib_volume">29</span> (<span class="ltx_text ltx_bib_number">1</span>), <span class="ltx_text ltx_bib_pages"> pp.&nbsp;325–350</span>.
        </span>
        <span class="ltx_bibblock ltx_bib_cited">Cited by: <a href="#S2.SS3.p1" title="2.3 Participatory Design Methods ‣ 2 Background &amp; Related Work ‣ Sociotechnical Considerations for Accessible Visualization Design" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§2.3</span></a>.
        </span>
      </li>
      <li id="bib.bib168" class="ltx_bibitem ltx_bib_inproceedings">
        <span class="ltx_tag ltx_bib_key ltx_role_refnum ltx_tag_bibitem">[9]</span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_author">J. Choi, S. Jung, D.G. Park, J. Choo, and N. Elmqvist</span><span class="ltx_text ltx_bib_year"> (2019)</span>
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_title">Visualizing for the Non-Visual: Enabling the Visually Impaired to Use Visualization</span>.
        </span>
        <span class="ltx_bibblock">In <span class="ltx_text ltx_bib_inbook">Eurographics Conference on Visualization</span>,
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_series">EuroVis ’19</span>, <span class="ltx_text ltx_bib_place"></span>, <span class="ltx_text ltx_bib_pages"> pp.&nbsp;</span>.
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_links">,
            <span class="ltx_ref ltx_bib_external ltx_ref_self">Link</span>,
          </span>
        </span>
        <span class="ltx_bibblock ltx_bib_cited">Cited by: <a href="#S1.p3" title="1 Introduction ‣ Sociotechnical Considerations for Accessible Visualization Design" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§1</span></a>.
        </span>
      </li>
      <li id="bib.bib1" class="ltx_bibitem ltx_bib_report">
        <span class="ltx_tag ltx_bib_key ltx_role_refnum ltx_tag_bibitem">[10]</span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_author">S. Costanza-Chock</span><span class="ltx_text ltx_bib_year"> (2018-06)</span>
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_title">Design Justice: Towards an Intersectional Feminist Framework for Design Theory and Practice</span>.
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_type">SSRN Scholarly Paper</span>
        </span>
        <span class="ltx_bibblock">Technical Report <span class="ltx_text ltx_bib_number">ID 3189696</span>,  <span class="ltx_text ltx_bib_publisher">Social Science Research Network</span>,  <span class="ltx_text ltx_bib_place">Rochester, NY</span> (<span class="ltx_text ltx_bib_language">en</span>).
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_links"><a href="https://papers.ssrn.com/abstract=3189696" title="" class="ltx_ref ltx_bib_external">Link</a></span>
        </span>
        <span class="ltx_bibblock ltx_bib_cited">Cited by: <a href="#S2.SS3.p1" title="2.3 Participatory Design Methods ‣ 2 Background &amp; Related Work ‣ Sociotechnical Considerations for Accessible Visualization Design" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§2.3</span></a>.
        </span>
      </li>
      <li id="bib.bib251" class="ltx_bibitem ltx_bib_book">
        <span class="ltx_tag ltx_bib_key ltx_role_refnum ltx_tag_bibitem">[11]</span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_author">L. J. Davis</span><span class="ltx_text ltx_bib_year"> (2013)</span>
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_title">The Disability Studies Reader</span>.
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_edition">4th ed edition</span>,  <span class="ltx_text ltx_bib_publisher">Routledge</span>, <span class="ltx_text ltx_bib_place">New York, NY</span> (<span class="ltx_text ltx_bib_language">en</span>).
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_links">,
            <span class="ltx_text lccn ltx_bib_external">LCCN HV1568 .D5696 2013</span></span>
        </span>
        <span class="ltx_bibblock ltx_bib_cited">Cited by: <a href="#S2.SS1.p3" title="2.1 Disability Studies ‣ 2 Background &amp; Related Work ‣ Sociotechnical Considerations for Accessible Visualization Design" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§2.1</span></a>.
        </span>
      </li>
      <li id="bib.bib174" class="ltx_bibitem ltx_bib_inproceedings">
        <span class="ltx_tag ltx_bib_key ltx_role_refnum ltx_tag_bibitem">[12]</span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_author">P. Dourish</span><span class="ltx_text ltx_bib_year"> (2006)</span>
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_title">Implications for Design</span>.
        </span>
        <span class="ltx_bibblock">In <span class="ltx_text ltx_bib_inbook">Proceedings of the SIGCHI Conference on Human Factors in Computing Systems</span>,
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_series">CHI ’06</span>, <span class="ltx_text ltx_bib_place">New York, NY, USA</span>, <span class="ltx_text ltx_bib_pages"> pp.&nbsp;541–550</span>.
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_links"></span>
        </span>
        <span class="ltx_bibblock ltx_bib_cited">Cited by: <a href="#S3.SS0.SSS0.Px3.p1" title="Participatory Methods. ‣ 3 Sociotechnical Considerations ‣ Sociotechnical Considerations for Accessible Visualization Design" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§3</span></a>.
        </span>
      </li>
      <li id="bib.bib17" class="ltx_bibitem ltx_bib_misc">
        <span class="ltx_tag ltx_bib_key ltx_role_refnum ltx_tag_bibitem">[13]</span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_author">A. Gardiner and C. Perkins</span><span class="ltx_text ltx_bib_year"> (1997)</span>
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_title">Best Practice Guidelines for the Design, Production and Presentation of Vacuum Formed Tactile Maps</span>.
        </span>
        <span class="ltx_bibblock">Note: <span class="ltx_text ltx_bib_note">http://www.tactilebooks.org/tactileguidelines/page1.htm</span>
        </span>
        <span class="ltx_bibblock ltx_bib_cited">Cited by: <a href="#S2.SS2.p1" title="2.2 Tactile Information Systems ‣ 2 Background &amp; Related Work ‣ Sociotechnical Considerations for Accessible Visualization Design" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§2.2</span></a>,
          <a href="#S3.SS0.SSS0.Px6.p1" title="Accessibility Guidelines. ‣ 3 Sociotechnical Considerations ‣ Sociotechnical Considerations for Accessible Visualization Design" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§3</span></a>.
        </span>
      </li>
      <li id="bib.bib42" class="ltx_bibitem ltx_bib_report">
        <span class="ltx_tag ltx_bib_key ltx_role_refnum ltx_tag_bibitem">[14]</span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_year"> (2011)</span>
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_title">Guidelines and Standards for Tactile Graphics, 2010</span>.
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_type">Technical report</span>
        </span>
        <span class="ltx_bibblock"> <span class="ltx_text ltx_bib_publisher">Braille Authority of North America</span>.
        </span>
        <span class="ltx_bibblock">Note: <span class="ltx_text ltx_bib_note"><span class="ltx_ERROR undefined">\url</span>http://www.brailleauthority.org/tg/</span>
        </span>
        <span class="ltx_bibblock ltx_bib_cited">Cited by: <a href="#S2.SS2.p1" title="2.2 Tactile Information Systems ‣ 2 Background &amp; Related Work ‣ Sociotechnical Considerations for Accessible Visualization Design" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§2.2</span></a>,
          <a href="#S3.SS0.SSS0.Px6.p1" title="Accessibility Guidelines. ‣ 3 Sociotechnical Considerations ‣ Sociotechnical Considerations for Accessible Visualization Design" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§3</span></a>,
          <a href="#S4.p5" title="4 Case Study: The Perkins School for the Blind ‣ Sociotechnical Considerations for Accessible Visualization Design" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§4</span></a>.
        </span>
      </li>
      <li id="bib.bib245" class="ltx_bibitem ltx_bib_article">
        <span class="ltx_tag ltx_bib_key ltx_role_refnum ltx_tag_bibitem">[15]</span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_author">A. Hamraie</span><span class="ltx_text ltx_bib_year"> (2012)</span>
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_title">Universal Design Research as a New Materialist Practice</span>.
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_journal">Disability Studies Quarterly</span> <span class="ltx_text ltx_bib_volume">32</span> (<span class="ltx_text ltx_bib_number">4</span>).
        </span>
        <span class="ltx_bibblock ltx_bib_cited">Cited by: <a href="#S2.SS1.p1" title="2.1 Disability Studies ‣ 2 Background &amp; Related Work ‣ Sociotechnical Considerations for Accessible Visualization Design" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§2.1</span></a>.
        </span>
      </li>
      <li id="bib.bib4" class="ltx_bibitem ltx_bib_article">
        <span class="ltx_tag ltx_bib_key ltx_role_refnum ltx_tag_bibitem">[16]</span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_author">V. L. Hanson, A. Cavender, and S. Trewin</span><span class="ltx_text ltx_bib_year"> (2015-10)</span>
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_title">Writing About Accessibility</span>.
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_journal">Interactions</span> <span class="ltx_text ltx_bib_volume">22</span> (<span class="ltx_text ltx_bib_number">6</span>), <span class="ltx_text ltx_bib_pages"> pp.&nbsp;62–65</span>.
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_links"><span class="ltx_text issn ltx_bib_external">ISSN 1072-5520</span>,
            <a href="http://doi.acm.org/10.1145/2828432" title="" class="ltx_ref ltx_bib_external">Link</a>,
          </span>
        </span>
        <span class="ltx_bibblock ltx_bib_cited">Cited by: <a href="#footnote1" title="footnote 1 ‣ 1 Introduction ‣ Sociotechnical Considerations for Accessible Visualization Design" class="ltx_ref"><span class="ltx_text ltx_ref_tag">footnote 1</span></a>.
        </span>
      </li>
      <li id="bib.bib180" class="ltx_bibitem ltx_bib_misc">
        <span class="ltx_tag ltx_bib_key ltx_role_refnum ltx_tag_bibitem">[17]</span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_author">L. Hasty</span>
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_title">Teaching Tactile Graphics, Perkins School for the Blind</span>.
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_type">Perkins School for the Blind</span>.
        </span>
        <span class="ltx_bibblock">Note: <span class="ltx_text ltx_bib_note"><span class="ltx_ERROR undefined">\url</span>http://www.perkinselearning.org/videos/webcast/teaching-tactile-graphics</span>
        </span>
        <span class="ltx_bibblock ltx_bib_cited">Cited by: <a href="#S2.SS2.p1" title="2.2 Tactile Information Systems ‣ 2 Background &amp; Related Work ‣ Sociotechnical Considerations for Accessible Visualization Design" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§2.2</span></a>.
        </span>
      </li>
      <li id="bib.bib28" class="ltx_bibitem ltx_bib_article">
        <span class="ltx_tag ltx_bib_key ltx_role_refnum ltx_tag_bibitem">[18]</span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_author">T. L. G. Health</span><span class="ltx_text ltx_bib_year"> (2018-06)</span>
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_title">Closing the Door on Parachutes and Parasites</span>.
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_journal">The Lancet Global Health</span> <span class="ltx_text ltx_bib_volume">6</span> (<span class="ltx_text ltx_bib_number">6</span>), <span class="ltx_text ltx_bib_pages"> pp.&nbsp;e593</span> (<span class="ltx_text ltx_bib_language">English</span>).
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_links"><span class="ltx_text issn ltx_bib_external">ISSN 2214-109X</span></span>
        </span>
        <span class="ltx_bibblock ltx_bib_cited">Cited by: <a href="#S2.SS3.p2" title="2.3 Participatory Design Methods ‣ 2 Background &amp; Related Work ‣ Sociotechnical Considerations for Accessible Visualization Design" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§2.3</span></a>.
        </span>
      </li>
      <li id="bib.bib30" class="ltx_bibitem ltx_bib_inproceedings">
        <span class="ltx_tag ltx_bib_key ltx_role_refnum ltx_tag_bibitem">[19]</span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_author">D. Howard and L. Irani</span><span class="ltx_text ltx_bib_year"> (2019)</span>
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_title">Ways of Knowing When Research Subjects Care</span>.
        </span>
        <span class="ltx_bibblock">In <span class="ltx_text ltx_bib_inbook">Proceedings of the 2019 Conference on Human Factors in Computing Systems - CHI ’19</span>,
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_place">Glasgow, Scotland Uk</span>, <span class="ltx_text ltx_bib_pages"> pp.&nbsp;1–16</span> (<span class="ltx_text ltx_bib_language">en</span>).
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_links"></span>
        </span>
        <span class="ltx_bibblock ltx_bib_cited">Cited by: <a href="#S2.SS3.p2" title="2.3 Participatory Design Methods ‣ 2 Background &amp; Related Work ‣ Sociotechnical Considerations for Accessible Visualization Design" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§2.3</span></a>.
        </span>
      </li>
      <li id="bib.bib34" class="ltx_bibitem ltx_bib_inproceedings">
        <span class="ltx_tag ltx_bib_key ltx_role_refnum ltx_tag_bibitem">[20]</span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_author">H. Ishii and B. Ullmer</span><span class="ltx_text ltx_bib_year"> (1997)</span>
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_title">Tangible Bits: Towards Seamless Interfaces Between People, Bits and Atoms</span>.
        </span>
        <span class="ltx_bibblock">In <span class="ltx_text ltx_bib_inbook">Proceedings of the ACM SIGCHI Conference on Human Factors in Computing Systems</span>,
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_series">CHI ’97</span>, <span class="ltx_text ltx_bib_place">New York, NY, USA</span>, <span class="ltx_text ltx_bib_pages"> pp.&nbsp;234–241</span>.
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_links"></span>
        </span>
        <span class="ltx_bibblock ltx_bib_cited">Cited by: <a href="#S1.p3" title="1 Introduction ‣ Sociotechnical Considerations for Accessible Visualization Design" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§1</span></a>.
        </span>
      </li>
      <li id="bib.bib29" class="ltx_bibitem ltx_bib_misc">
        <span class="ltx_tag ltx_bib_key ltx_role_refnum ltx_tag_bibitem">[21]</span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_author">L. Jackson</span><span class="ltx_text ltx_bib_year"> (2019-03)</span>
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_title">Disability dongle: A well-intended, elegant, yet useless solution to a problem we never knew we had.</span>.
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_type">Tweet</span>.
        </span>
        <span class="ltx_bibblock">Note: <span class="ltx_text ltx_bib_note"><span class="ltx_ERROR undefined">\url</span>https://twitter.com/elizejackson/status/1110629818234818570</span>
        </span>
        <span class="ltx_bibblock ltx_bib_cited">Cited by: <a href="#S1.p3" title="1 Introduction ‣ Sociotechnical Considerations for Accessible Visualization Design" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§1</span></a>,
          <a href="#S3.SS0.SSS0.Px1.p1" title="Non-Intervention. ‣ 3 Sociotechnical Considerations ‣ Sociotechnical Considerations for Accessible Visualization Design" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§3</span></a>.
        </span>
      </li>
      <li id="bib.bib179" class="ltx_bibitem ltx_bib_inproceedings">
        <span class="ltx_tag ltx_bib_key ltx_role_refnum ltx_tag_bibitem">[22]</span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_author">Y. Jansen, P. Dragicevic, P. Isenberg, J. Alexander, A. Karnik, J. Kildal, S. Subramanian, and K. Hornbæk</span><span class="ltx_text ltx_bib_year"> (2015)</span>
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_title">Opportunities and Challenges for Data Physicalization</span>.
        </span>
        <span class="ltx_bibblock">In <span class="ltx_text ltx_bib_inbook">Proceedings of the 33rd Annual ACM Conference on Human Factors in Computing Systems - CHI ’15</span>,
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_place">Seoul, Republic of Korea</span>, <span class="ltx_text ltx_bib_pages"> pp.&nbsp;3227–3236</span> (<span class="ltx_text ltx_bib_language">en</span>).
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_links">,
            <a href="https://dx.doi.org/10.1145/2702123.2702180" title="" class="ltx_ref doi ltx_bib_external">Document</a></span>
        </span>
        <span class="ltx_bibblock ltx_bib_cited">Cited by: <a href="#S1.p3" title="1 Introduction ‣ Sociotechnical Considerations for Accessible Visualization Design" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§1</span></a>.
        </span>
      </li>
      <li id="bib.bib26" class="ltx_bibitem ltx_bib_inproceedings">
        <span class="ltx_tag ltx_bib_key ltx_role_refnum ltx_tag_bibitem">[23]</span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_author">R. E. Ladner, M. Y. Ivory, R. Rao, S. Burgstahler, D. Comden, S. Hahn, M. Renzelmann, S. Krisnandi, M. Ramasamy, B. Slabosky, A. Martin, A. Lacenski, S. Olsen, and D. Groce</span><span class="ltx_text ltx_bib_year"> (2005)</span>
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_title">Automating Tactile Graphics Translation</span>.
        </span>
        <span class="ltx_bibblock">In <span class="ltx_text ltx_bib_inbook">Proceedings of the 7th International ACM SIGACCESS Conference on Computers and Accessibility</span>,
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_series">Assets ’05</span>, <span class="ltx_text ltx_bib_place">New York, NY, USA</span>, <span class="ltx_text ltx_bib_pages"> pp.&nbsp;150–157</span>.
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_links">,
            <a href="http://doi.acm.org/10.1145/1090785.1090814" title="" class="ltx_ref ltx_bib_external">Link</a>,
          </span>
        </span>
        <span class="ltx_bibblock ltx_bib_cited">Cited by: <a href="#S1.p3" title="1 Introduction ‣ Sociotechnical Considerations for Accessible Visualization Design" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§1</span></a>.
        </span>
      </li>
      <li id="bib.bib3" class="ltx_bibitem ltx_bib_article">
        <span class="ltx_tag ltx_bib_key ltx_role_refnum ltx_tag_bibitem">[24]</span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_author">R. E. Ladner</span><span class="ltx_text ltx_bib_year"> (2015-02)</span>
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_title">Design for User Empowerment</span>.
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_journal">Interactions</span> <span class="ltx_text ltx_bib_volume">22</span> (<span class="ltx_text ltx_bib_number">2</span>), <span class="ltx_text ltx_bib_pages"> pp.&nbsp;24–29</span>.
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_links"><span class="ltx_text issn ltx_bib_external">ISSN 1072-5520</span>,
            <a href="http://doi.acm.org/10.1145/2723869" title="" class="ltx_ref ltx_bib_external">Link</a>,
          </span>
        </span>
        <span class="ltx_bibblock ltx_bib_cited">Cited by: <a href="#S3.SS0.SSS0.Px3.p1" title="Participatory Methods. ‣ 3 Sociotechnical Considerations ‣ Sociotechnical Considerations for Accessible Visualization Design" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§3</span></a>.
        </span>
      </li>
      <li id="bib.bib165" class="ltx_bibitem ltx_bib_inproceedings">
        <span class="ltx_tag ltx_bib_key ltx_role_refnum ltx_tag_bibitem">[25]</span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_author">J. Mankoff, G. R. Hayes, and D. Kasnitz</span><span class="ltx_text ltx_bib_year"> (2010)</span>
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_title">Disability Studies As a Source of Critical Inquiry for the Field of Assistive Technology</span>.
        </span>
        <span class="ltx_bibblock">In <span class="ltx_text ltx_bib_inbook">Proceedings of the 12th International ACM SIGACCESS Conference on Computers and Accessibility</span>,
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_series">ASSETS ’10</span>, <span class="ltx_text ltx_bib_place">New York, NY, USA</span>, <span class="ltx_text ltx_bib_pages"> pp.&nbsp;3–10</span>.
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_links">,
            <a href="http://doi.acm.org/10.1145/1878803.1878807" title="" class="ltx_ref ltx_bib_external">Link</a>,
          </span>
        </span>
        <span class="ltx_bibblock ltx_bib_cited">Cited by: <a href="#S2.SS1.p3" title="2.1 Disability Studies ‣ 2 Background &amp; Related Work ‣ Sociotechnical Considerations for Accessible Visualization Design" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§2.1</span></a>,
          <a href="#S2.SS2.p1" title="2.2 Tactile Information Systems ‣ 2 Background &amp; Related Work ‣ Sociotechnical Considerations for Accessible Visualization Design" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§2.2</span></a>,
          <a href="#S2.SS3.p1" title="2.3 Participatory Design Methods ‣ 2 Background &amp; Related Work ‣ Sociotechnical Considerations for Accessible Visualization Design" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§2.3</span></a>,
          <a href="#S3.SS0.SSS0.Px3.p1" title="Participatory Methods. ‣ 3 Sociotechnical Considerations ‣ Sociotechnical Considerations for Accessible Visualization Design" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§3</span></a>.
        </span>
      </li>
      <li id="bib.bib37" class="ltx_bibitem ltx_bib_misc">
        <span class="ltx_tag ltx_bib_key ltx_role_refnum ltx_tag_bibitem">[26]</span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_author">B. L. McGinnity, J. Seymour-Ford, and K. J. Andries</span><span class="ltx_text ltx_bib_year"> (2004)</span>
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_title">Books for the Blind</span>.
        </span>
        <span class="ltx_bibblock">(<span class="ltx_text ltx_bib_language">en</span>).
        </span>
        <span class="ltx_bibblock">Note: <span class="ltx_text ltx_bib_note"><span class="ltx_ERROR undefined">\url</span>https://www.perkins.org/history/legacy/books-for-the-blind</span>
        </span>
        <span class="ltx_bibblock ltx_bib_cited">Cited by: <a href="#S1.p1" title="1 Introduction ‣ Sociotechnical Considerations for Accessible Visualization Design" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§1</span></a>.
        </span>
      </li>
      <li id="bib.bib176" class="ltx_bibitem ltx_bib_article">
        <span class="ltx_tag ltx_bib_key ltx_role_refnum ltx_tag_bibitem">[27]</span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_author">M. Mills</span><span class="ltx_text ltx_bib_year"> (2010-03)</span>
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_title">Deaf Jam: From Inscription to Reproduction to Information</span>.
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_journal">Social Text</span> <span class="ltx_text ltx_bib_volume">28</span> (<span class="ltx_text ltx_bib_number">102</span>), <span class="ltx_text ltx_bib_pages"> pp.&nbsp;35–58</span> (<span class="ltx_text ltx_bib_language">English</span>).
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_links"><a href="https://dx.doi.org/10.1215/01642472-2009-059" title="" class="ltx_ref doi ltx_bib_external">Document</a></span>
        </span>
        <span class="ltx_bibblock ltx_bib_cited">Cited by: <a href="#S2.SS3.p1" title="2.3 Participatory Design Methods ‣ 2 Background &amp; Related Work ‣ Sociotechnical Considerations for Accessible Visualization Design" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§2.3</span></a>,
          <a href="#S4.p6" title="4 Case Study: The Perkins School for the Blind ‣ Sociotechnical Considerations for Accessible Visualization Design" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§4</span></a>.
        </span>
      </li>
      <li id="bib.bib25" class="ltx_bibitem ltx_bib_incollection">
        <span class="ltx_tag ltx_bib_key ltx_role_refnum ltx_tag_bibitem">[28]</span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_author">M. Mills</span><span class="ltx_text ltx_bib_year"> (2015)</span>
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_title">Deafness</span>.
        </span>
        <span class="ltx_bibblock">In <span class="ltx_text ltx_bib_inbook">Keywords in Sound</span>,  <span class="ltx_text ltx_bib_editor">D. Novak and M. Sakakeeny (Eds.)</span>,
        </span>
        <span class="ltx_bibblock">(<span class="ltx_text ltx_bib_language">English</span>).
        </span>
        <span class="ltx_bibblock">Note: <span class="ltx_text ltx_bib_note">OCLC: 885231605</span>
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_links"></span>
        </span>
        <span class="ltx_bibblock ltx_bib_cited">Cited by: <a href="#S2.SS1.p3" title="2.1 Disability Studies ‣ 2 Background &amp; Related Work ‣ Sociotechnical Considerations for Accessible Visualization Design" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§2.1</span></a>.
        </span>
      </li>
      <li id="bib.bib12" class="ltx_bibitem ltx_bib_article">
        <span class="ltx_tag ltx_bib_key ltx_role_refnum ltx_tag_bibitem">[29]</span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_author">D. Moree</span><span class="ltx_text ltx_bib_year"> (2018-07)</span>
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_title">Qualitative Approaches to Studying Marginalized Communities</span>.
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_journal">Oxford Research Encyclopedia of Education</span> (<span class="ltx_text ltx_bib_language">en</span>).
        </span>
        <span class="ltx_bibblock ltx_bib_cited">Cited by: <a href="#S2.SS3.p1" title="2.3 Participatory Design Methods ‣ 2 Background &amp; Related Work ‣ Sociotechnical Considerations for Accessible Visualization Design" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§2.3</span></a>.
        </span>
      </li>
      <li id="bib.bib36" class="ltx_bibitem ltx_bib_article">
        <span class="ltx_tag ltx_bib_key ltx_role_refnum ltx_tag_bibitem">[30]</span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_author">M. J. Muller and S. Kuhn</span><span class="ltx_text ltx_bib_year"> (1993-06)</span>
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_title">Participatory Design</span>.
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_journal">Commun. ACM</span> <span class="ltx_text ltx_bib_volume">36</span> (<span class="ltx_text ltx_bib_number">6</span>), <span class="ltx_text ltx_bib_pages"> pp.&nbsp;24–28</span>.
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_links"><span class="ltx_text issn ltx_bib_external">ISSN 0001-0782</span></span>
        </span>
        <span class="ltx_bibblock ltx_bib_cited">Cited by: <a href="#S2.SS3.p1" title="2.3 Participatory Design Methods ‣ 2 Background &amp; Related Work ‣ Sociotechnical Considerations for Accessible Visualization Design" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§2.3</span></a>.
        </span>
      </li>
      <li id="bib.bib35" class="ltx_bibitem ltx_bib_incollection">
        <span class="ltx_tag ltx_bib_key ltx_role_refnum ltx_tag_bibitem">[31]</span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_author">M. J. Muller</span><span class="ltx_text ltx_bib_year"> (2003)</span>
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_title">The Human-Computer Interaction Handbook</span>.
        </span>
        <span class="ltx_bibblock"> <span class="ltx_text ltx_bib_editor">J. A. Jacko and A. Sears (Eds.)</span>,
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_pages"> pp.&nbsp;1051–1068</span>.
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_links">,
            <a href="http://dl.acm.org/citation.cfm?id=772072.772138" title="" class="ltx_ref ltx_bib_external">Link</a></span>
        </span>
        <span class="ltx_bibblock ltx_bib_cited">Cited by: <a href="#S1.p3" title="1 Introduction ‣ Sociotechnical Considerations for Accessible Visualization Design" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§1</span></a>,
          <a href="#S2.SS3.p1" title="2.3 Participatory Design Methods ‣ 2 Background &amp; Related Work ‣ Sociotechnical Considerations for Accessible Visualization Design" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§2.3</span></a>,
          <a href="#S3.SS0.SSS0.Px3.p1" title="Participatory Methods. ‣ 3 Sociotechnical Considerations ‣ Sociotechnical Considerations for Accessible Visualization Design" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§3</span></a>.
        </span>
      </li>
      <li id="bib.bib7" class="ltx_bibitem ltx_bib_book">
        <span class="ltx_tag ltx_bib_key ltx_role_refnum ltx_tag_bibitem">[32]</span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_author">D. A. Norman and S. W. Draper</span><span class="ltx_text ltx_bib_year"> (1986)</span>
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_title">User Centered System Design; New Perspectives on Human-Computer Interaction</span>.
        </span>
        <span class="ltx_bibblock"> <span class="ltx_text ltx_bib_publisher">L. Erlbaum Associates Inc.</span>, <span class="ltx_text ltx_bib_place">Hillsdale, NJ, USA</span>.
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_links"></span>
        </span>
        <span class="ltx_bibblock ltx_bib_cited">Cited by: <a href="#S2.SS3.p1" title="2.3 Participatory Design Methods ‣ 2 Background &amp; Related Work ‣ Sociotechnical Considerations for Accessible Visualization Design" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§2.3</span></a>.
        </span>
      </li>
      <li id="bib.bib266" class="ltx_bibitem ltx_bib_article">
        <span class="ltx_tag ltx_bib_key ltx_role_refnum ltx_tag_bibitem">[33]</span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_author">M. Oliver</span><span class="ltx_text ltx_bib_year"> (2013)</span>
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_title">The social model of disability: Thirty years on</span>.
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_journal">Disability &amp; society</span> <span class="ltx_text ltx_bib_volume">28</span> (<span class="ltx_text ltx_bib_number">7</span>), <span class="ltx_text ltx_bib_pages"> pp.&nbsp;1024–1026</span>.
        </span>
        <span class="ltx_bibblock ltx_bib_cited">Cited by: <a href="#S2.SS1.p1" title="2.1 Disability Studies ‣ 2 Background &amp; Related Work ‣ Sociotechnical Considerations for Accessible Visualization Design" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§2.1</span></a>.
        </span>
      </li>
      <li id="bib.bib170" class="ltx_bibitem ltx_bib_book">
        <span class="ltx_tag ltx_bib_key ltx_role_refnum ltx_tag_bibitem">[34]</span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_author">J. S. Olson and W. A. Kellogg</span><span class="ltx_text ltx_bib_year"> (2014)</span>
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_title">Ways of knowing in hci</span>.
        </span>
        <span class="ltx_bibblock"> <span class="ltx_text ltx_bib_publisher">Springer</span>.
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_links"></span>
        </span>
        <span class="ltx_bibblock ltx_bib_cited">Cited by: <a href="#S3.SS0.SSS0.Px2.p1" title="Research &amp; Design. ‣ 3 Sociotechnical Considerations ‣ Sociotechnical Considerations for Accessible Visualization Design" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§3</span></a>.
        </span>
      </li>
      <li id="bib.bib163" class="ltx_bibitem ltx_bib_inproceedings">
        <span class="ltx_tag ltx_bib_key ltx_role_refnum ltx_tag_bibitem">[35]</span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_author">S. Oney, A. Lundgard, R. Krosnick, M. Nebeling, and W. S. Lasecki</span><span class="ltx_text ltx_bib_year"> (2018)</span>
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_title">Arboretum and Arbility: Improving Web Accessibility Through a Shared Browsing Architecture</span>.
        </span>
        <span class="ltx_bibblock">In <span class="ltx_text ltx_bib_inbook">Proceedings of the 31st Annual ACM Symposium on User Interface Software and Technology</span>,
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_series">UIST ’18</span>, <span class="ltx_text ltx_bib_place">New York, NY, USA</span>, <span class="ltx_text ltx_bib_pages"> pp.&nbsp;937–949</span>.
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_links"></span>
        </span>
        <span class="ltx_bibblock ltx_bib_cited">Cited by: <a href="#S3.SS0.SSS0.Px5.p1" title="Time &amp; Compensation. ‣ 3 Sociotechnical Considerations ‣ Sociotechnical Considerations for Accessible Visualization Design" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§3</span></a>.
        </span>
      </li>
      <li id="bib.bib8" class="ltx_bibitem ltx_bib_article">
        <span class="ltx_tag ltx_bib_key ltx_role_refnum ltx_tag_bibitem">[36]</span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_author">A. Riles</span><span class="ltx_text ltx_bib_year"> (2015)</span>
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_title">From Comparison to Collaboration: Experiments with a New Scholarly and Political Form</span>.
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_journal">Law and Contemporary Problems</span> <span class="ltx_text ltx_bib_volume">78</span>, <span class="ltx_text ltx_bib_pages"> pp.&nbsp;147–183</span> (<span class="ltx_text ltx_bib_language">en</span>).
        </span>
        <span class="ltx_bibblock ltx_bib_cited">Cited by: <a href="#S2.SS3.p2" title="2.3 Participatory Design Methods ‣ 2 Background &amp; Related Work ‣ Sociotechnical Considerations for Accessible Visualization Design" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§2.3</span></a>.
        </span>
      </li>
      <li id="bib.bib18" class="ltx_bibitem ltx_bib_inproceedings">
        <span class="ltx_tag ltx_bib_key ltx_role_refnum ltx_tag_bibitem">[37]</span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_author">J. Schneider</span><span class="ltx_text ltx_bib_year"> (2000)</span>
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_title">Constructing the Yellow Brick Road: Route Bricks on Virtual Tactile Maps</span>.
        </span>
        <span class="ltx_bibblock">In <span class="ltx_text ltx_bib_inbook">Proceedings of the International Conference on Computers Helping People with Special Needs (ICCHP)</span>,
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_place">Karlsruhe, Germany</span>, <span class="ltx_text ltx_bib_pages"> pp.&nbsp;641–648</span>.
        </span>
        <span class="ltx_bibblock ltx_bib_cited">Cited by: <a href="#S2.SS2.p1" title="2.2 Tactile Information Systems ‣ 2 Background &amp; Related Work ‣ Sociotechnical Considerations for Accessible Visualization Design" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§2.2</span></a>.
        </span>
      </li>
      <li id="bib.bib267" class="ltx_bibitem ltx_bib_incollection">
        <span class="ltx_tag ltx_bib_key ltx_role_refnum ltx_tag_bibitem">[38]</span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_author">T. Shakespeare</span><span class="ltx_text ltx_bib_year"> (2013)</span>
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_title">The Social Model of Disability</span>.
        </span>
        <span class="ltx_bibblock">In <span class="ltx_text ltx_bib_inbook">The Disability Studies Reader</span>,  <span class="ltx_text ltx_bib_editor">L. J. Davis (Ed.)</span>,
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_pages"> pp.&nbsp;197–204</span> (<span class="ltx_text ltx_bib_language">en</span>).
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_links">,
            <span class="ltx_text lccn ltx_bib_external">LCCN HV1568 .D5696 2013</span></span>
        </span>
        <span class="ltx_bibblock ltx_bib_cited">Cited by: <a href="#S2.SS1.p1" title="2.1 Disability Studies ‣ 2 Background &amp; Related Work ‣ Sociotechnical Considerations for Accessible Visualization Design" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§2.1</span></a>.
        </span>
      </li>
      <li id="bib.bib264" class="ltx_bibitem ltx_bib_book">
        <span class="ltx_tag ltx_bib_key ltx_role_refnum ltx_tag_bibitem">[39]</span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_author">R. G. Thomson</span><span class="ltx_text ltx_bib_year"> (1996)</span>
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_title">Extraordinary Bodies: Figuring Physical Disability in American Culture and Literature</span>.
        </span>
        <span class="ltx_bibblock"> <span class="ltx_text ltx_bib_publisher">Columbia University Press</span>, <span class="ltx_text ltx_bib_place">New York</span> (<span class="ltx_text ltx_bib_language">English</span>).
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_links"></span>
        </span>
        <span class="ltx_bibblock ltx_bib_cited">Cited by: <a href="#S2.SS1.p1" title="2.1 Disability Studies ‣ 2 Background &amp; Related Work ‣ Sociotechnical Considerations for Accessible Visualization Design" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§2.1</span></a>.
        </span>
      </li>
      <li id="bib.bib23" class="ltx_bibitem ltx_bib_misc">
        <span class="ltx_tag ltx_bib_key ltx_role_refnum ltx_tag_bibitem">[40]</span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_author">P. Van Geem</span>
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_title">Tactile Graphics Resources</span>.
        </span>
        <span class="ltx_bibblock">Note: <span class="ltx_text ltx_bib_note"><span class="ltx_ERROR undefined">\url</span>https://www.tsbvi.edu/math/107-graphics/3189-tactile-graphics-resources</span>
        </span>
        <span class="ltx_bibblock ltx_bib_cited">Cited by: <a href="#S2.SS2.p1" title="2.2 Tactile Information Systems ‣ 2 Background &amp; Related Work ‣ Sociotechnical Considerations for Accessible Visualization Design" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§2.2</span></a>.
        </span>
      </li>
      <li id="bib.bib9" class="ltx_bibitem ltx_bib_misc">
        <span class="ltx_tag ltx_bib_key ltx_role_refnum ltx_tag_bibitem">[41]</span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_year"> (2018-06)</span>
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_title">Web Content Accessibility Guidelines (WCAG)</span>.
        </span>
        <span class="ltx_bibblock">(<span class="ltx_text ltx_bib_language">en</span>).
        </span>
        <span class="ltx_bibblock">Note: <span class="ltx_text ltx_bib_note"><span class="ltx_ERROR undefined">\url</span>https://www.w3.org/WAI/standards-guidelines/wcag/</span>
        </span>
        <span class="ltx_bibblock ltx_bib_cited">Cited by: <a href="#S2.SS2.p1" title="2.2 Tactile Information Systems ‣ 2 Background &amp; Related Work ‣ Sociotechnical Considerations for Accessible Visualization Design" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§2.2</span></a>,
          <a href="#S3.SS0.SSS0.Px6.p1" title="Accessibility Guidelines. ‣ 3 Sociotechnical Considerations ‣ Sociotechnical Considerations for Accessible Visualization Design" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§3</span></a>.
        </span>
      </li>
      <li id="bib.bib27" class="ltx_bibitem ltx_bib_report">
        <span class="ltx_tag ltx_bib_key ltx_role_refnum ltx_tag_bibitem">[42]</span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_year"> (2011)</span>
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_title">World Report on Disability 2011</span>.
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_type">Technical report</span>
        </span>
        <span class="ltx_bibblock"> <span class="ltx_text ltx_bib_publisher">World Health Organization</span>,  <span class="ltx_text ltx_bib_place">Geneva, Switzerland</span>.
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_links"><span class="ltx_text lccn ltx_bib_external">LCCN NBK304079</span></span>
        </span>
        <span class="ltx_bibblock ltx_bib_cited">Cited by: <a href="#S2.SS1.p2" title="2.1 Disability Studies ‣ 2 Background &amp; Related Work ‣ Sociotechnical Considerations for Accessible Visualization Design" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§2.1</span></a>.
        </span>
      </li>
      <li id="bib.bib171" class="ltx_bibitem ltx_bib_inproceedings">
        <span class="ltx_tag ltx_bib_key ltx_role_refnum ltx_tag_bibitem">[43]</span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_author">J. Zimmerman, J. Forlizzi, and S. Evenson</span><span class="ltx_text ltx_bib_year"> (2007)</span>
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_title">Research Through Design As a Method for Interaction Design Research in HCI</span>.
        </span>
        <span class="ltx_bibblock">In <span class="ltx_text ltx_bib_inbook">Proceedings of the SIGCHI Conference on Human Factors in Computing Systems</span>,
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_series">CHI ’07</span>, <span class="ltx_text ltx_bib_place">New York, NY, USA</span>, <span class="ltx_text ltx_bib_pages"> pp.&nbsp;493–502</span>.
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_links"></span>
        </span>
        <span class="ltx_bibblock ltx_bib_cited">Cited by: <a href="#S3.SS0.SSS0.Px2.p1" title="Research &amp; Design. ‣ 3 Sociotechnical Considerations ‣ Sociotechnical Considerations for Accessible Visualization Design" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§3</span></a>.
        </span>
      </li>
      <li id="bib.bib24" class="ltx_bibitem ltx_bib_book">
        <span class="ltx_tag ltx_bib_key ltx_role_refnum ltx_tag_bibitem">[44]</span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_author">I. K. Zola</span><span class="ltx_text ltx_bib_year"> (1983)</span>
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_title">Socio-Medical Inquiries: Recollections, Reflections and Reconsiderations</span>.
        </span>
        <span class="ltx_bibblock"> <span class="ltx_text ltx_bib_publisher">Temple University Press</span>, <span class="ltx_text ltx_bib_place">Philadelphia</span> (<span class="ltx_text ltx_bib_language">English</span>).
        </span>
        <span class="ltx_bibblock"><span class="ltx_text ltx_bib_links"></span>
        </span>
        <span class="ltx_bibblock ltx_bib_cited">Cited by: <a href="#S2.SS1.p4" title="2.1 Disability Studies ‣ 2 Background &amp; Related Work ‣ Sociotechnical Considerations for Accessible Visualization Design" class="ltx_ref"><span class="ltx_text ltx_ref_tag">§2.1</span></a>.
        </span>
      </li>
    </ul>
  </section>
</article>