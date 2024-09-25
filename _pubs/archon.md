---
title: 'Archon: An Architecture Search Framework for Inference-Time Techniques'
authors:
  - key: jonsaadfalcon
  - key: adriangamarralafuente
  - name: Shlok Natarajan
    affiliation: Stanford
  - name: Nahum Maru
    affiliation: Stanford
  - name: Hristo Todorov
    affiliation: Stanford
  - name: E. Kelly Buchanan
    affiliation: Stanford
  - name: Mayee Chen
    affiliation: Stanford
  - name: Neel Guha
    affiliation: Stanford
  - name: Christopher Ré
    affiliation: Stanford
  - key: azaliamirhoseini
venue: preprint
year: 2024
day: 267
has_pdf: true
doi: 10.48550/arXiv.2409.15254
tags:
  - machine learning
  - generative AI
  - inference-time techniques
teaser: Archon, a modular framework for designing inference-time architectures, outperforms top language models like GPT-4 and Claude 3.5 on various benchmarks by optimally combining LLMs and inference techniques.
materials:
  - name: Paper
    url: https://arxiv.org/abs/2409.15254
    type: file-pdf
  - name: Codebase
    url: https://github.com/ScalingIntelligence/Archon
    type: code
---
Inference-time techniques are emerging as highly effective tools to increase large language model (LLM) capabilities. However, there is still limited understanding of the best practices for developing systems that combine inference-time techniques with one or more LLMs, with challenges including: (1) effectively allocating inference compute budget, (2) understanding the interactions between different combinations of inference-time techniques and their impact on downstream performance, and 3) efficiently searching over the large space of model choices, inference-time techniques, and their compositions. To address these challenges, we introduce Archon, an automated framework for designing inference-time architectures. Archon defines an extensible design space, encompassing methods such as generation ensembling, multi-sampling, ranking, fusion, critiquing, verification, and unit testing. It then transforms the problem of selecting and combining LLMs and inference-time techniques into a hyperparameter optimization objective. To optimize this objective, we introduce automated Inference-Time Architecture Search (ITAS) algorithms. Given target benchmark(s), an inference compute budget, and available LLMs, ITAS outputs optimized architectures. We evaluate Archon architectures across a wide range of instruction-following and reasoning benchmarks, including MT-Bench, Arena-Hard-Auto, AlpacaEval 2.0, MixEval, MixEval Hard, MATH, and CodeContests. We show that automatically designed inference-time architectures by Archon outperform strong models such as GPT-4o and Claude 3.5 Sonnet on these benchmarks, achieving an average increase of 14.1 and 10.3 percentage points with all-source models and open-source models, respectively.
