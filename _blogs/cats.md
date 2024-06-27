---
title: 'Hydragen: High-Throughput LLM Inference with Shared Prefixes'
authors:
  - name: Je-Yong Lee
    affiliation: Oxford University
  - name: Luke Donghyun Lee
    affiliation: University College London
  - name: Genghan Zhang
  - name: Mo Tiwari
  - key: azaliamirhoseini
venue: blog
year: 2024
doi: 
tags:
  - natural language processing
  - generative AI
teaser: The human brain operates with remarkable energy efficiency, despite its complexity. Usually, a human brain activates only a sparse array of neurons at any given moment. Do state-of-the-art large language models (LLMs) behave similarly? Until recently, the answer was no. They typically exhibit over 99% non-zero activations during inference. However, our recent research unveils a surprising observation, LLMs activations are intrinsically sparse.
materials:
  - name: CATS Blog
    url: https://github.com/ScalingIntelligence/CATS
    type: code
---
The human brain operates with remarkable energy efficiency, despite its complexity. Usually, a human brain activates only a sparse array of neurons at any given moment. Do state-of-the-art large language models (LLMs) behave similarly? Until recently, the answer was no: they typically exhibit over 99% non-zero activations during inference. However, our recent research unveils a surprising observation: LLMs activations are intrinsically sparse.

In our work, we introduce CATS, a simple post-training technique that achieves 50% activation sparsity for MLP layers with a negligible drop in downstream evaluations. CATS requires little to no finetuning of existing LLMs. We leverage this newfound sparsity to achieve 15% improvement in end-to-end generation latency for both Mistral-7B and Llama-7B models using custom GPU kernels.