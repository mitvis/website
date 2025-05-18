---
title: 'Think, Prune, Train, Improve: Scaling Reasoning Without Scaling Models'
authors:
  - name: Caia Costello
    affiliation: Stanford University / Ceramic AI
    email: caia@stanford.edu
  - name: Simon Guo
    affiliation: Stanford University
  - name: Anna Goldie
    affiliation: Stanford University
  - key: azaliamirhoseini
    affiliation: Google DeepMind
venue: arXiv preprint
year: 2025
month: April
day: 25
has_pdf: true
doi: 10.48550/arXiv.2504.18116
tags:
  - machine learning
  - language models
  - reasoning
  - self-improvement
  - generative AI
teaser: 
  This paper introduces the Think, Prune, Train (TPT) framework, a scalable method for improving language model reasoning without increasing model size. By iteratively fine-tuning models on their own reasoning traces and applying correctness-based pruning, TPT enables smaller models to achieve performance rivaling or exceeding larger ones. Experimental results on GSM8K and CodeContests show that models like Gemma-2B and LLaMA-70B-Instruct can surpass even GPT-4o on Pass@1 accuracy through recursive self-improvement.
materials:
  - name: Paper
    url: https://arxiv.org/abs/2504.18116
    type: file-pdf
---
Large language models (LLMs) have demonstrated strong capabilities in programming and mathematical reasoning tasks, but are constrained by limited high-quality training data. Synthetic data can be leveraged to enhance fine-tuning outcomes, but several factors influence this process, including model size, synthetic data volume, pruning strategy, and number of fine-tuning rounds. We explore these axes and investigate which conditions enable model self-improvement. We introduce the Think, Prune, Train process, a scalable framework that iteratively fine-tunes models on their own reasoning traces, using ground-truth pruning to ensure high-quality training data. This approach yields improved performance: on GSM8K, Gemma2-2B achieves a Pass@1 of 57.6% (from 41.9%), Gemma2-9B reaches 82%, matching LLaMA-3.1-70B, and LLaMA-3.1-70B attains 91%, even surpassing GPT-4o, demonstrating the effectiveness of self-generated reasoning and systematic data selection for improving LLM capabilities.
