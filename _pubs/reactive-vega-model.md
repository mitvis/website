---
title: Declarative Interaction Design for Data Visualization
authors:
  - key: arvindsatya
    affiliation: Stanford University
  - name: Kanit Wongsuphasawat
    url: http://kanitw.github.io/
    affiliation: University of Washington
  - name: Jeffrey Heer
    url: http://jheer.org
    affiliation: University of Washington
venue: uist
year: 2014
doi: 10.1145/2642918.2647360
tags:
  - visualization design
  - interaction design
  - language
  - qualitative methods
teaser: 'Brushing interaction expressed with our extensions to Vega: signal definitions and usage are in blue, event streams in orange, predicate definition and application in purple, rules in red, and names in green.'
videos:
  - name: Video Preview
    key: '100936827'
    platform: vimeo
---
Declarative visualization grammars can accelerate development, facilitate retargeting across platforms, and allow language-level optimizations. However, existing declarative visualization languages are primarily concerned with visual encoding, and rely on imperative event handlers for interactive behaviors. In response, we introduce a model of declarative interaction design for data visualizations. Adopting methods from reactive programming, we model low-level events as composable data <em>streams</em> from which we form higher-level semantic <em>signals</em>. Signals feed <em>predicates</em> and <em>scale inversions</em>, which allow us to generalize interactive selections at the level of item geometry (pixels) into interactive queries over the data domain. <em>Production rules</em> then use these queries to manipulate the visualization’s appearance. To facilitate reuse and sharing, these constructs can be encapsulated as named <em>interactors</em>: standalone, purely declarative specifications of interaction techniques. We assess our model’s feasibility and expressivity by instantiating it with extensions to the Vega visualization grammar. Through a diverse range of examples, we demonstrate coverage over an established taxonomy of visualization interaction techniques.
