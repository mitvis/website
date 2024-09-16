---
title: 'Umwelt: Accessible Structured Editing of Multi-Modal Data Representations'
authors:
  - key: jzong
  - key: ipedraza
  - key: mzc219
  - name: Daniel Hajas
    affiliation: Global Disability Innovation Hub
    url: https://www.disabilityinnovation.com/who-we-are/our-team/daniel-hajas
  - key: arvindsatya
venue: chi
doi: 10.1145/3613904.3641996
year: 2024
date: 2024-05-15
tags:
  - visualization design
  - interaction design
  - interface
  - accessibility
teaser: A) Fragments of an internal declarative specification shown next to their corresponding Umwelt editor states. B) The output multimodal representation for that specification.
materials:
  - name: HTML Article
    url: https://dl.acm.org/doi/fullHtml/10.1145/3613904.3641996
    type: cube
  - name: Prototype editor
    url: https://mitvis.github.io/umwelt/
    type: cube
---

We present Umwelt, an authoring environment for interactive multimodal data representations. In contrast to prior approaches, which center the visual modality, Umwelt treats visualization, sonification, and textual description as coequal representations: they are all derived from a shared abstract data model, such that no modality is prioritized over the others. To simplify specification, Umwelt evaluates a set of heuristics to generate default multimodal representations that express a dataset's functional relationships. To support smoothly moving between representations, Umwelt maintains a shared query predicate that is reified across all modalities — for instance, navigating the textual description also highlights the visualization and filters the sonification. In a study with 5 blind / low-vision expert users, we found that Umwelt's multimodal representations afforded complementary overview and detailed perspectives on a dataset, allowing participants to fluidly shift between task- and representation-oriented ways of thinking.
