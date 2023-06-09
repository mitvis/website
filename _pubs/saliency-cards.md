---
title: 'Saliency Cards: A Framework to Characterize and Compare Saliency Methods'
authors:
  - key: aboggust
  - key: hsuresh
  - name: Hendrik Strobelt
    url: http://hendrik.strobelt.com
    affiliation: IBM Research
  - name: John V. Guttag
    affiliation: MIT CSAIL
  - key: arvindsatya
venue: facct
year: 2023
date: 2023-06-12
doi: 10.1145/3593013.3593997
tags:
  - machine learning interpretability
  - language
  - mixed methods
teaser: The saliency card for Grad-CAM. Saliency cards describe a saliency method's methodology (how the saliency is computed), sensitivity (its relationship with the model and inputs), and perceptibility (how it is interpreted by a human). 
materials:
  - name: Saliency Card Repository
    url: https://github.com/mitvis/saliency-cards
    type: cube
videos:
  - name: FAccT 2023 Talk
    key: T7PtxyqRADE

---
Saliency methods are a common class of machine learning interpretability techniques that calculate how important each input feature is to a model’s output. We find that, with the rapid pace of development, users struggle to stay informed of the strengths and limitations of new methods and, thus, choose methods for unprincipled reasons (e.g., popularity). Moreover, despite a corresponding rise in evaluation metrics, existing approaches assume universal desiderata for saliency methods (e.g., faithfulness) that do not account for diverse user needs. In response, we introduce saliency cards: structured documentation of how saliency methods operate and their performance across a battery of evaluative metrics. Through a review of 25 saliency method papers and 33 method evaluations, we identify 10 attributes that users should account for when choosing a method. We group these attributes into three categories that span the process of computing and interpreting saliency: methodology, or how the saliency is calculated; sensitivity, or the relationship between the saliency and the underlying model and data; and, perceptibility, or how an end user ultimately interprets the result. By collating this information, saliency cards allow users to more holistically assess and compare the implications of different methods. Through nine semi-structured interviews with users from various backgrounds, including researchers, radiologists, and computational biologists, we find that saliency cards provide a detailed vocabulary for discussing individual methods and allow for a more systematic selection of task-appropriate methods. Moreover, with saliency cards, we are able to analyze the research landscape in a more structured fashion to identify opportunities for new methods and evaluation metrics for unmet user needs.
