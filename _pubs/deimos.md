---
title: 'Deimos: A Grammar of Dynamic Embodied Immersive Visualisation Morphs and Transitions'
authors:
  - name: Benjamin Lee 
    affiliation: Monash University
  - key: arvindsatya
  - name: Maxime Cordeil 
    affiliation: University Of Queensland
  - name: Arnaud Prouzeau
    affiliation: Inria, Bordeaux
  - name: Bernhard Jenny 
    affiliation: Monash University
  - name: Tim Dwyer 
    affiliation: Monash University
venue: chi
year: 2023
doi: 10.1145/3544548.3580754
tags:
  - language
  - visualization design
  - interaction design
teaser: 'A basic example of a morph changes the mark colour of uncoloured visualisations to red whenever the left hand performs a pinch gesture. Colour-coded boxes denote the same component in different representations. Left: The morph specification. Top right: Still images of this morph being applied to a 2D scatterplot in an immersive environment. Bottom right: The state machine for this morph. The `"restrict": true` (shown in the left-hand box labeled with _2_) prevents the morph from starting at the _highlighted_ state, and `"bidirectional": true` (shown at the end of morph specification) allows the transition to function in both directions.'
---
We present Deimos, a grammar for specifying dynamic embodied immersive visualisation morphs and transitions. A morph is a collection of animated transitions that are dynamically applied to immersive visualisations at runtime and is conceptually modelled as a state machine. It is comprised of state, transition, and signal specifications. States in a morph are used to generate animation keyframes, with transitions connecting two states together. A transition is controlled by signals, which are composable data streams that can be used to enable embodied interaction techniques. Morphs allow immersive representations of data to transform and change shape through user interaction, facilitating the embodied cognition process. We demonstrate the expressivity of Deimos in an example gallery and evaluate its usability in an expert user study of six immersive analytics researchers. Participants found the grammar to be powerful and expressive, and showed interest in drawing upon Deimos’ concepts and ideas in their own research.
