---
title: Intuitively Assessing ML Model Reliability through Example-Based Explanations and Editing Model Inputs
authors:
  - key: hsuresh
  - name: Kathleen M. Lewis
    affiliation: MIT CSAIL
  - name: John V. Guttag
    affiliation: MIT CSAIL
  - key: arvindsatya
# type: preprint
# preprint: 
#   server: arxiv
#   id: '2102.08540'
# external_url: https://arxiv.org/abs/2102.08540
venue: iui
year: 2022
date: 2022-03-21
tags:
  - interface
  - machine learning interpretability
  - mixed methods
teaser: An example of the proposed interface for an electrocardiogram (ECG) case study. The output of the machine learning model consists of raw and aggregate information about the input's nearest neighbors. With the editor in the bottom left, the user can apply semantically-meaningful manipulations to the input and see how the output changes.
---
Interpretability methods aim to help users build trust in and understand the capabilities of machine learning models. However, existing approaches often rely on abstract, complex visualizations that poorly map to the task at hand or require non-trivial ML expertise to interpret. Here, we present two interface modules that facilitate intuitively assessing model reliability. To help users better characterize and reason about a model’s uncertainty, we visualize raw and aggregate information about a given input’s nearest neighbors. Using an interactive editor, users can manipulate this input in semantically-meaningful ways, determine the effect on the output, and compare against their prior expectations. We evaluate our approach using an electrocardiogram beat classification case study. Compared to a baseline feature importance interface, we find that 14 physicians are better able to align the model's uncertainty with domain-relevant factors and build intuition about its capabilities and limitations.
