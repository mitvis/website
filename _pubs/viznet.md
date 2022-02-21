---
layout: pub
stub: true
title: 'VizNet: Towards A Large-Scale Visualization Learning and Benchmarking Repository'
authors:
  - name: Kevin Hu
  - name: Neil Gaikwad
  - name: Madelon Hulsebos
  - name: Michiel Bakker
  - name: Emanuel Zgraggen
  - name: César Hidalgo
  - name: Tim Kraska
  - name: Guoliang Li
  - key: arvindsatya
  - name: Çağatay Demiralp
venue: chi
year: 2019
teaser: VizNet enables data scientists and visualization researchers to aggregate data, enumerate visual encodings, and crowdsource efectiveness evaluations.
videos:
  - name: Video Preview
    key: s7vKysUvQuI
    platform: youtube
materials:
  - name: Code
    url: https://github.com/mitmedialab/viznet
    type: code
---
Researchers currently rely on ad hoc datasets to train automated visualization tools and evaluate the effectiveness of visualization designs. These exemplars often lack the characteristics of real-world datasets, and their one-off nature makes it difficult to compare different techniques. In this paper, we present VizNet: a large-scale corpus of over 31 million datasets compiled from open data repositories and online visualization galleries. On average, these datasets comprise 17 records over 3 dimensions and across the corpus, we find 51% of the dimensions record categorical data, 44% quantitative, and only 5% temporal. VizNet provides the necessary common baseline for comparing visualization design techniques, and developing benchmark models and algorithms for automating visual analysis. To demonstrate VizNet's utility as a platform for conducting online crowdsourced experiments at scale, we replicate a prior study assessing the influence of user task and data distribution on visual encoding effectiveness, and extend it by considering an additional task: outlier detection. To contend with running such studies at scale, we demonstrate how a metric of perceptual effectiveness can be learned from experimental results, and show its predictive power across test datasets.