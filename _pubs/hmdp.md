---
title: 'A HIERARCHICAL MODEL FOR DEVICE PLACEMENT'
authors:
  - key: azaliamirhoseini
    equal: true
  - name: Anna Goldie
    equal: true
  - name: Hieu Pham
  - name: Benoit Steiner
  - name: Quoc V. Le
  - name: Jeff Dean
venue: preprint
year: 2018
date: 2018-02-15
has_pdf: false
doi: NA
tags:
  - natural language processing
  - generative ai
  - highlight
teaser: We present a hierarchical model that optimizes the placement of computational graphs across heterogeneous hardware, including CPUs and GPUs. Our approach, trained with policy gradients and requiring no human input, significantly enhances placement efficiency and achieves up to 60.6% runtime reductions per training step for models like Neural Machine Translation.
materials:
  - name: "A HIERARCHICAL MODEL FOR DEVICE PLACEMENT"
    url: https://openreview.net/pdf?id=Hkc-TeZ0W
    type: link
---
We introduce a hierarchical model for efficient placement of computational graphs onto hardware devices, especially in heterogeneous environments with a mixture of CPUs, GPUs, and other computational devices. Our method learns to assign graph operations to groups and to allocate those groups to available devices. The grouping and device allocations are learned jointly. The proposed method is trained with policy gradient and requires no human intervention. Experiments with widely-used computer vision and natural language models show that our algorithm can find optimized, non-trivial placements for TensorFlow computational graphs with over 80,000 operations. In addition, our approach outperforms placements by human experts as well as a previous state-of-the-art placement method based on deep reinforcement learning. Our method achieves runtime reductions of up to 60.6% per training step when applied to models such as Neural Machine Translation.
