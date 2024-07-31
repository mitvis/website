---
title: 'Hydragen: High-Throughput LLM Inference with Shared Prefixes'
authors:
  - key: jordanjuravsky
  - key: bradleybrown
  - key: ryanehrlich
    affiliation: University of Waterloo
  - name: Daniel Y. Fu
    affiliation: Stanford
  - name: Christopher Ré
    affiliation: Stanford
  - key: azaliamirhoseini
venue: preprint
year: 2024
doi: 10.48550/arXiv.2402.05099
tags:
  - machine learning
  - generative AI
teaser: Hydragen also enables the use of very long shared contexts with a large batch size, increasing the prefix length from 1K to 16K tokens decreases Hydragen throughput by less than 15%, while the throughput of baselines drops by over 90%. Hydragen generalizes beyond simple prefix-suffix decomposition and can be applied to tree-based prompt sharing patterns, allowing us to further reduce inference time on competitive programming problems by 55%.
materials:
  - name: Hydragen
    url: https://github.com/jordan-benjamin/hydragen
    type: code
---
Transformer-based large language models (LLMs) are now deployed to hundreds of millions of users. LLM inference is commonly performed on batches of sequences that share a prefix, such as few-shot examples or a chatbot system prompt. Decoding in this large-batch setting can be bottlenecked by the attention operation, which reads large key-value (KV) caches from memory and computes inefficient matrix-vector products for every sequence in the batch. In this work, we introduce Hydragen, a hardware-aware exact implementation of attention with shared prefixes. Hydragen computes attention over the shared prefix and unique suffixes separately. This decomposition enables efficient prefix attention by batching queries together across sequences, reducing redundant memory reads and enabling the use of hardware-friendly matrix multiplications. Our method can improve end-to-end CodeLlama-13b throughput by up to 32x against competitive baselines, with speedup growing with the batch size and shared prefix length. Hydragen also enables the use of very long shared contexts with a large batch size, increasing the prefix length from 1K to 16K tokens decreases Hydragen throughput by less than 15%, while the throughput of baselines drops by over 90%. Hydragen generalizes beyond simple prefix-suffix decomposition and can be applied to tree-based prompt sharing patterns, allowing us to further reduce inference time on competitive programming problems by 55%.
