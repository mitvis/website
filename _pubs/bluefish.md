---
stub: true
title: "Bluefish: Composing Diagrams with Declarative Relations"
authors:
  - key: jopo
  - key: meic1212
  - key: gracefh
  - name: Elliot Evans
    affiliation: Unaffiliated
  - name: Daniel Jackson
    affiliation: MIT CSAIL
  - key: arvindsatya
venue: uist
year: 2024
date: 2024-07-24
doi: 10.1145/3654777.3676465
tags:
  - language
  - visualization design
  - web design
  - qualitative methods
teaser: 'Diagrams built with the Bluefish language. These graphics run the gamut from computer science to physics to math
and are constructed with declarative, composable, extensible relations. From left to right: a quantum circuit equivalence,
topologies, a Python Tutor diagram, an Ohm parse tree, and a physics pulley diagram.'
materials:
  - name: Project
    url: https://bluefishjs.org
    type: cube
  - name: Code
    url: https://github.com/bluefishjs/bluefish
    type: code
---

Diagrams are essential tools for problem-solving and communication as they externalize conceptual structures using spatial relationships. But when picking a diagramming framework, users are faced with a dilemma. They can either use a highly expressive but low-level toolkit, whose API does not match their domain-specific concepts, or select a high-level typology, which offers a recognizable vocabulary but supports a limited range of diagrams. To address this gap, we introduce Bluefish: a diagramming framework inspired by component-based user interface (UI) libraries. Bluefish lets users create diagrams using relations: declarative, composable, and extensible diagram fragments that relax the concept of a UI component. Unlike a component, a relation does not have sole ownership over its children nor does it need to fully specify their layout. To render diagrams, Bluefish extends a traditional tree-based scenegraph to a compound graph that captures both hierarchical and adjacent relationships between nodes. To evaluate our system, we construct a diverse example gallery covering many domains including mathematics, physics, computer science, and even cooking. We show that Bluefish's relations are effective declarative primitives for diagrams. Bluefish is open source, and we aim to shape it into both a usable tool and a research platform.
