---
title: 'FabObscura: Computational Design and Fabrication for Interactive Barrier-Grid Animations'
authors:
  - key: ticha
  - name: Maxine Perroni-Scharf
    affiliation: MIT CSAIL
  - name: Mingming Li
    affiliation: Zhejiang University
  - name: Jiaji Li
    affiliation: MIT CSAIL
  - name: Justin Solomon
    affiliation: MIT CSAIL
  - key: arvindsatya
  - name: Stefanie Mueller
    affiliation: MIT CSAIL
venue: uist
date: 2025-09-28
# doi: 10.1145/3706598.3713406
teaser: FabObscura is a system for creating visually dynamic physical media based on the classic barrier-grid animation technique. We introduce a novel parameterization and computational design tool for systematically designing new barrier-grid animations without domain expertise. Our abstraction is expressive enough to support animations that respond to diverse user interactions, such as translations, rotations, and changes in viewpoint.
---
We present _FabObscura_: a system for creating interactive barrier-grid animations, a classic technique that uses occlusion patterns to create the illusion of motion. Whereas traditional barrier-grid animations are constrained to simple linear occlusion patterns,_FabObscura_ introduces a parameterization that represents patterns as mathematical functions. Our parameterization offers two key advantages over existing barrier-grid animation design methods: first, it has a high expressive ceiling by enabling the systematic design of novel patterns; second, it is versatile enough to represent all established forms of barrier-grid animations. 

Using this parameterization, our computational design tool enables an end-to-end workflow for authoring, visualizing, and fabricating these animations without domain expertise. Our applications demonstrate how _FabObscura_ can be used to create animations that respond to a range of user interactions, such as translations, rotations, and changes in viewpoint. By formalizing barrier-grid animation as a computational design material, _FabObscura_ extends its expressiveness as an interactive medium.