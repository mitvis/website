---
title: 'Embedding Comparator: Visualizing Differences in Global Structure and Local Neighborhoods via Small Multiples'
authors:
  - key: aboggust
  - name: Brandon Carter
    affiliation: MIT CSAIL
  - key: arvindsatya
# type: preprint  
# preprint: 
#   server: arxiv
#   id: '1912.04853'
# external_url: https://arxiv.org/abs/1912.04853
venue: iui
year: 2022
date: 2022-03-22
award: honMention
tags:
  - interface
  - machine learning interpretability
  - mixed methods
materials:
  - name: Live Demo
    url: http://vis.csail.mit.edu/embedding-comparator/
    type: cube
  - name: Code
    url: https://github.com/mitvis/embedding-comparator
    type: code
videos:
  - name: IUI 2022 Talk
    key: UU5LAxF8-7Q
    platform: youtube
teaser: >
  The Embedding Comparator (left) facilitates comparisons of embedding spaces via _local neighborhood dominoes_: small multiple visualizations depicting local substructures (right).
---
Embeddings mapping high-dimensional discrete input to lower-dimensional continuous vector spaces have been widely adopted in machine learning applications as a way to capture domain semantics. Interviewing 13 embedding users across disciplines, we find comparing embeddings is a key task for deployment or downstream analysis but unfolds in a tedious fashion that poorly supports systematic exploration. In response, we present the Embedding Comparator, an interactive system that presents a global comparison of embedding spaces alongside fine-grained inspection of local neighborhoods. It systematically surfaces points of comparison by computing the similarity of the `k`-nearest neighbors of every embedded object between a pair of spaces. Through case studies across multiple modalities, we demonstrate our system rapidly reveals insights, such as semantic changes following fine-tuning, language changes over time, and differences between seemingly similar models. In evaluations with 15 participants, we find our system accelerates comparisons by shifting from laborious manual specification to browsing and manipulating visualizations.
