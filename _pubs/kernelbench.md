---
title: 'KernelBench: Can LLMs Write Efficient GPU Kernels?'
authors:
  - key: anneouyang
    equal: true
  - key: simonguo
    equal: true
  - name: Simran Arora
    affiliation: Stanford
  - name: Alex L. Zhang
    affiliation: Princeton
  - name: William Hu
    affiliation: Stanford
  - name: Christopher Ré
    affiliation: Stanford
  - key: azaliamirhoseini
venue: preprint
year: 2025
date: 2025-02-18
has_pdf: true
doi: 10.48550/arXiv.2502.10517
tags:
  - benchmark
  - generative ai
  - ml systems
teaser: KernelBench is a benchmark and environment for evaluating language models' ability to generate efficient GPU kernels.
materials:
  - name: Paper
    url: https://arxiv.org/abs/2502.10517
    type: file-pdf
  - name: KernelBench Codebase
    url: https://github.com/ScalingIntelligence/KernelBench
    type: code
  - name: KernelBench Dataset
    url: https://huggingface.co/datasets/ScalingIntelligence/KernelBench
    type: database
  - name: Blog post
    url: /blogs/kernelbench/
    type: link
---
Efficient GPU kernels are crucial for building performant machine learning architectures, but writing them is a time-consuming challenge that requires significant expertise; therefore, we explore using language models (LMs) to automate kernel generation. We introduce KernelBench, an open-source framework for evaluating LMs' ability to write fast and correct kernels on a suite of 250 carefully selected PyTorch ML workloads. KernelBench represents a real-world engineering environment and making progress on the introduced benchmark directly translates to faster practical kernels. We introduce a new evaluation metric fast_p, which measures the percentage of generated kernels that are functionally correct and offer a speedup greater than an adjustable threshold p over baseline. Our experiments across various state-of-the-art models and test-time methods show that frontier reasoning models perform the best out of the box but still fall short overall, matching the PyTorch baseline in less than 20% of the cases. While we show that results can improve by leveraging execution and profiling feedback during iterative refinement, KernelBench remains a challenging benchmark, with its difficulty increasing as we raise speedup threshold p.
