---
title: 'Kaleidoscope: Semantically-grounded, Context-specific ML Model Evaluation'
authors:
  - key: hsuresh
  - name: Divya Shanmugam
    affiliation: MIT CSAIL
  - key: tiffc
  - key: annieb22
  - name: Alexander D'Amour
    affiliation: Google Research
  - name: John V. Guttag
    affiliation: MIT CSAIL
  - key: arvindsatya
venue: chi
year: 2023
date: 2023-04-24
doi: 10.1145/3544548.3581482
tags:
  - machine learning interpretability
  - interface
  - qualitative methods
videos:
  - name: Demo Video
    key: NKk8yBq9wpo
  - name: CHI 2023 Talk
    key: Vu0cp_81Rkc
materials:
  - name: Code
    url: /pubs/kaleidoscope.zip
    type: code
teaser: 'Kaleidoscope’s workflow consists of identifying meaningful examples, generalizing them into larger, diverse sets representing important concepts, and using these concepts to specify and test model behavior.'
---
Desired model behavior often differs across contexts (e.g., different geographies, communities, or institutions), but there is little infrastructure to facilitate context-specific evaluations key to deployment decisions and building trust. Here, we present Kaleidoscope, a system for evaluating models in terms of user-driven, domain-relevant concepts. Kaleidoscope's iterative workflow enables generalizing from a few examples into a larger, diverse set representing an important concept. These example sets can be used to test model outputs or shifts in model behavior in semantically-meaningful ways. For instance, we might construct a “xenophobic comments” set and test that its examples are more likely to be flagged by a content moderation model than a “civil discussion” set. To evaluate Kaleidoscope, we compare it against template- and DSL-based grouping methods, and conduct a usability study with 13 Reddit users testing a content moderation model. We find that Kaleidoscope facilitates iterative, exploratory hypothesis testing across diverse, conceptually-meaningful example sets.
