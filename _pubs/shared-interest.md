---
title: 'Shared Interest: Measuring Human-AI Alignment to Identify Recurring Paterns in Model Behavior'
authors:
  - key: aboggust
  - name: Benjamin Hoover
    affiliation: IBM Research
  - key: arvindsatya
  - name: Hendrik Strobelt
    url: http://hendrik.strobelt.com
    affiliation: IBM Research
# type: workshop
# venue: visxai
# external_url: http://shared-interest.csail.mit.edu/
venue: chi
year: 2022
date: 2022-05-06
tags:
  - machine learning interpretability
  - language
  - mixed methods
teaser: Examples of correctly and incorrectly classified images identified by shared interest coverage metrics.
materials:
  - name: Project Page
    url: http://shared-interest.csail.mit.edu/
    type: folder-open
  - name: Computer Vision Demo
    url: http://shared-interest.csail.mit.edu/computer-vision
    type: cube
  - name: NLP Demo
    url: http://shared-interest.csail.mit.edu/nlp
    type: cube
  - name: Interactive Probing Demo
    url: http://shared-interest.csail.mit.edu/human-annotation
    type: cube
videos:
  - name: NeurIPS Demo
    key: -Q_8qTBsKqo
    platform: youtube
---
Saliency methods—techniques to identify the importance of input features on a model's output—are a common step in understanding neural network behavior. However, interpreting saliency requires tedious manual inspection to identify and aggregate patterns in model behavior, resulting in ad hoc or cherry-picked analysis. To address these concerns, we present Shared Interest: metrics for comparing model reasoning (via saliency) to human reasoning (via ground truth annotations). By providing quantitative descriptors, Shared Interest enables ranking, sorting, and aggregating inputs, thereby facilitating large-scale systematic analysis of model behavior. We use Shared Interest to identify eight recurring patterns in model behavior, such as cases where contextual features or a subset of ground truth features are most important to the model. Working with representative real-world users, we show how Shared Interest can be used to decide if a model is trustworthy, uncover issues missed in manual analyses, and enable interactive probing. 
