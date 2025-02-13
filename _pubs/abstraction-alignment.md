---
title: 'Abstraction Alignment: Comparing Model-Learned and Human-Encoded Conceptual Relationships'
authors:
  - key: aboggust
  - key: hbang
  - name: Hendrik Strobelt
    url: http://hendrik.strobelt.com
    affiliation: IBM Research
  - key: arvindsatya
venue: chi
year: 2025
date: 2025-04-28
doi: 10.1145/3706598.3713406
tags:
  - machine learning interpretability
  - language
  - mixed methods
  - interface
teaser: Abstraction alignment measures human-AI alignment by comparing model behavior to known human abstractions.
materials:
  - name: Demo
    url: https://vis.mit.edu/abstraction-alignment/
    type: cube
  - name: Code
    url: https://github.com/mitvis/abstraction-alignment
    type: code
videos:
  - name: Video Figure
    key: b8flyUcQc4Q
---
While interpretability methods identify a model’s learned concepts, they overlook the relationships between concepts that make up its abstractions and inform its ability to generalize to new data. To assess whether models’ have learned human-aligned abstractions, we introduce abstraction alignment, a methodology to compare model behavior against formal human knowledge. Abstraction alignment externalizes domain-specific human knowledge as an abstraction graph, a set of pertinent concepts spanning levels of abstraction. Using the abstraction graph as a ground truth, abstraction alignment measures the alignment of a model’s behavior by determining how much of its uncertainty is accounted for by the human abstractions. By aggregating abstraction alignment across entire datasets, users can test alignment hypotheses, such as which human concepts the model has learned and where misalignments recur. In evaluations with experts, abstraction alignment differentiates seemingly similar errors, improves the verbosity of existing model-quality metrics, and uncovers improvements to current human abstractions.