---
title: 'Shared Interest: Human Annotations vs. AI Saliency'
authors:
  - key: aboggust
  - name: Benjamin Hoover
    affiliation: IBM Research
  - key: arvindsatya
  - name: Hendrik Strobelt
    url: http://hendrik.strobelt.com
    affiliation: IBM Research
type: workshop
venue: visxai
year: 2020
tags:
  - machine learning interpretability
  - quantitative methods
  - mixed methods
teaser: Examples of correctly and incorrectly classified images identified by shared interest coverage metrics.
external_url: http://shared-interest.csail.mit.edu/
materials:
  - name: Computer Vision Demo
    url: http://shared-interest.csail.mit.edu/computer-vision
  - name: NLP Demo
    url: http://shared-interest.csail.mit.edu/nlp
  - name: Interactive Probing Demo
    url: http://shared-interest.csail.mit.edu/human-annotation
---
As deep learning is applied to high stakes scenarios, it is increasingly important that a model is not only making accurate decisions, but doing so for the right reasons. Common explainability methods provide pixel attributions as an explanation for a model's decision on a single image. However, using these input-level explanations to understand patterns in model behavior is challenging for large datasets as it requires selecting and analyzing an interesting subset of inputs. By utilizing the human generated bounding boxes that represent ground truth object locations, we introduce metrics for scoring and ranking inputs based on the correspondence between the input’s ground truth object location and the explainability method's explanation region. Our methodology is agnostic to model architecture, explanation method, and modality allowing it to be applied to many tasks and domains. By aligning model explanations with human annotations, our method surfaces patterns in model behavior when applied to two high profile case studies: a widely used image classification model and a cancer prediction model.
