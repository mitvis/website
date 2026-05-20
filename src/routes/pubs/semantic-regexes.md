---
title: 'Semantic Regexes: Auto-Interpreting LLM Features with a Structured Language'
authors:
  - key: aboggust
  - name: Donghao Ren
    affiliation: Apple
  - name: Yannick Assogba
    affiliation: Apple
  - name: Dominik Moritz
    affiliation: Apple
  - key: arvindsatya
  - name: Fred Hohman
    affiliation: Apple
venue: iclr
date: 2026-04-24
doi: 10.48550/arXiv.2510.06378
themes: 
  - interpretability
tags:
  - language
feature: true
teaser: Semantic regexes are often more concise (top), more consistently describe equivalent features (middle), and better reflect feature complexity (bottom) than natural language descriptions.
materials:
  - name: Viewer
    url: https://apple.github.io/ml-semantic-regex/
    type: chart-line
  - name: Python Package
    url: https://pypi.org/project/semantic-regex/
    type: brands fa-python
  - name: Code Repo
    url: https://github.com/apple/ml-semantic-regex
    type: code
---
Automated interpretability aims to translate large language model (LLM) features into human understandable descriptions. However, natural language feature descriptions can be vague, inconsistent, and require manual relabeling. In response, we introduce semantic regexes, structured language descriptions of LLM features. By combining primitives that capture linguistic and semantic patterns with modifiers for contextualization, composition, and quantification, semantic regexes produce precise and expressive feature descriptions. Across quantitative benchmarks and qualitative analyses, semantic regexes match the accuracy of natural language while yielding more concise and consistent feature descriptions. Their inherent structure affords new types of analyses, including quantifying feature complexity across layers, scaling automated interpretability from insights into individual features to model-wide patterns. Finally, in user studies, we find that semantic regexes help people build accurate mental models of LLM features.