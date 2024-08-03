---
title: 'Transferable Graph Optimizers for ML Compilers'
authors:
  - name: Yanqi Zhou
  - name: Sudip Roy
  - name: Amirali Abdolrashidi
  - name: Daniel Wong
  - name: Peter Ma
  - name: Qiumin Xu
  - name: Hanxiao Liu
  - name: Phitchaya Phothilimthana
  - name: Shen Wang
  - name: Anna Goldie
  - key: azaliamirhoseini
  - name: James Laudon
venue: preprint
year: 2020
has_pdf: true
doi: 2010.12438'
tags:
  - natural language processing
  - generative AI
  - highlight
teaser: Revolutionize graph optimization with GO, our deep reinforcement learning method that outperforms traditional heuristics. By optimizing entire graphs at once, GO delivers 33%-60% faster results and up to 21% better performance compared to previous methods, achieving 15× faster convergence on complex tasks.
materials:
  - name: Transferable Graph Optimizers for ML Compilers
    url: https://arxiv.org/pdf/2010.12438
    type: link
---
Most compilers for machine learning (ML) frameworks need to solve many correlated optimization problems to generate efficient machine code. Current ML compilers rely on heuristics based algorithms to solve these optimization problems one at a time. However, this approach is not only hard to maintain but often leads to sub-optimal solutions especially for newer model architectures. Existing learning based approaches in the literature are sample inefficient, tackle a single optimization problem, and do not generalize to unseen graphs making them infeasible to be deployed in practice. To address these limitations, we propose an end-to-end, transferable deep reinforcement learning method for computational graph optimization (GO), based on a scalable sequential attention mechanism over an inductive graph neural network. GO generates decisions on the entire graph rather than on each individual node autoregressively, drastically speeding up the search compared to prior methods. Moreover, we propose recurrent attention layers to jointly optimize dependent graph optimization tasks and demonstrate 33%-60% speedup on three graph optimization tasks compared to TensorFlow default optimization. On a diverse set of representative graphs consisting of up to 80,000 nodes, including Inception-v3, Transformer-XL, and WaveNet, GO achieves on average 21% improvement over human experts and 18% improvement over the prior state of the art with 15× faster convergence, on a device placement task evaluated in real systems.
