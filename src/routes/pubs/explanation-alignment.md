---
title: 'Explanation Alignment: Quantifying the Correctness of Model Reasoning At Scale'
authors:
  - key: hbang
  - key: aboggust
  - key: arvindsatya
venue: eXCV
type: workshop
year: 2024
date: 2024-09-29
tags:
  - empirical study
  - quantitative methods
  - machine learning interpretability
  - human-ai interaction
teaser: Explanation alignment measures the agreement between model-generated explanations and human annotations to detect spurious correlations and model biases by aggregating saliency-based metrics, such as Shared Interest and The Pointing Game, across datasets. In pretrained ImageNet models, it reveals that models with similar accuracy can focus on vastly different image regions, highlighting significant variations in explanation alignment despite comparable performance.
materials:
  - name: Code
    url: https://github.com/mitvis/explanation_alignment
    type: cube

---
To improve the reliability of machine learning models, researchers have developed metrics to measure the alignment between model saliency and human explanations. Thus far, however, these saliency-based alignment metrics have been used to conduct descriptive analyses and instance-level evaluations of models and saliency methods. To enable evaluative and comparative assessments of model alignment, we extend these metrics to compute explanation alignment—the aggregate agreement between model and human explanations. To compute explanation alignment, we aggregate saliency-based alignment metrics over many model decisions and report the result as a performance metric that quantifies how often model decisions are made for the right reasons. Through experiments on nearly 200 image classification models, multiple saliency methods, and MNIST, CelebA, and ImageNet tasks, we find that explanation alignment automatically identifies spurious correlations, such as model bias, and uncovers behavioral differences between nearly identical models. Further, we characterize the relationship between explanation alignment and model performance, evaluating the factors that impact explanation alignment and how to interpret its results in-practice.
