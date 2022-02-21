---
layout: pub
stub: true
title: 'Lyra 2: Designing Interactive Visualizations by Demonstration'
authors:
  - key: jzong
  - key: dhiraj
  - key: rneogy
  - key: arvindsatya
venue: infovis
year: 2021
teaser: 'Creating a brush with labeled extents in Lyra 2. (1) A brushing interaction authored via demonstrations. (2) Binding signals that represent the brush’s start and end extents to the content of two text marks respectively. (3) Positioning the text marks by their horizontal position to the brush’s start andend x-coordinates. (4) The completed design: an interval selection with labeled extents.'
videos:
  - name: Video Preview
    key: '453645616'
    platform: vimeo
materials:
  - name: Live Demo
    url: https://vega.github.io/lyra
    type: cube
  - name: Code
    url: https://github.com/vega/lyra
    type: code
---
Recent graphical interfaces offer direct manipulation mechanisms for authoring visualizations, but are largely restricted to static output. To author interactive visualizations, users must instead turn to textual specification, but such approaches impose a higher technical burden. To bridge this gap, we introduce Lyra 2, a system that extends a prior visualization design environment with novel methods for authoring interaction techniques by demonstration. Users perform an interaction (e.g., button clicks, drags, or key presses) directly on the visualization they are editing. The system interprets this performance using a set of heuristics and enumerates suggestions of possible interaction designs. These heuristics account for the properties of the interaction (e.g., target and event type) as well as the visualization (e.g., mark and scale types, and multiple views). Interaction design suggestions are displayed as thumbnails; users can preview and test these suggestions, iteratively refine them through additional demonstrations, and finally apply and customize them via property inspectors. We evaluate our approach through a gallery of diverse examples, and evaluate its usability through a first-use study and via an analysis of its cognitive dimensions. We find that, in Lyra 2, interaction design by demonstration enables users to rapidly express a wide range of interactive visualizations.