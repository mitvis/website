---
title: 'CATS: Contextually-Aware Thresholding for Sparsity in Large Language Models'
authors:
  - key: je-yong
  - name: Donghyun Lee
    affiliation: Stanford University
  - name: Genghan Zhang
    affiliation: Stanford University
  - name: Mo Tiwari
    affiliation: Stanford University
  - key: azaliamirhoseini
venue: preprint
year: 2024
doi: 10.48550/arXiv.2404.08763
tags:
  - natural language processing
  - generative AI
teaser: The human brain operates with remarkable energy efficiency, despite its complexity. Usually, a human brain activates only a sparse array of neurons at any given moment. Do state-of-the-art large language models (LLMs) behave similarly? Until recently, the answer was no. They typically exhibit over 99% non-zero activations during inference. However, our recent research unveils a surprising observation, LLMs activations are intrinsically sparse.
materials:
  - name: CATS
    url: https://github.com/ScalingIntelligence/CATS
    type: code
---
Large Language Models (LLMs) have dramatically advanced AI applications, yet their deployment remains challenging due to their immense inference costs. Recent studies ameliorate the computational costs of LLMs by increasing their activation sparsity but suffer from significant performance degradation on downstream tasks. In this work, we introduce a new framework for sparsifying the activations of base LLMs and reducing inference costs, dubbed Contextually Aware Thresholding for Sparsity (CATS). CATS is relatively simple, easy to implement, and highly effective. At the heart of our framework is a new non-linear activation function. We demonstrate that CATS can be applied to various base models, including Mistral-7B and Llama2-7B, and outperforms existing sparsification techniques in downstream task performance. More precisely, CATS-based models often achieve downstream task performance within 1-2% of their base models without any fine-tuning and even at activation sparsity levels of 50%. Furthermore, CATS-based models converge faster and display better task performance than competing techniques when fine-tuning is applied. Finally, we develop a custom GPU kernel for efficient implementation of CATS that translates the activation of sparsity of CATS to real wall-clock time speedups. Our custom kernel implementation of CATS results in a ~15% improvement in wall-clock inference latency of token generation on both Llama-7B and Mistral-7B.
