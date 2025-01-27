---
title: 'Representing Long-Range Context for Graph Neural Networks with Global Attention'
authors:
  - name: Zhanghao Wu
  - name: Paras Jain
  - name: Matthew Wright
  - key: azaliamirhoseini
  - name: Joseph E. Gonzalez
  - name: Ion Stocia
venue: preprint
year: 2021
date: 2021-01-21
has_pdf: true
doi: NA
tags:
  - natural language processing
  - generative ai
  - highlight
teaser: GraphTrans combines GNNs with Transformer-based self-attention to learn long-range relationships and uses a novel "readout" mechanism for global graph embeddings. It achieves state-of-the-art results in graph classification, suggesting that learning-based approaches can effectively capture long-range dependencies.
materials:
  - name: "Representing Long-Range Context for Graph Neural Networks with Global Attention"
    url: https://proceedings.neurips.cc/paper/2021/hash/6e67691b60ed3e4a55935261314dd534-Abstract.html
    type: link
---
Graph neural networks are powerful architectures for structured datasets. However, current methods struggle to represent long-range dependencies. Scaling the depth or width of GNNs is insufficient to broaden receptive fields as larger GNNs encounter optimization instabilities such as vanishing gradients and representation oversmoothing, while pooling-based approaches have yet to become as universally useful as in computer vision. In this work, we propose the use of Transformer-based self-attention to learn long-range pairwise relationships, with a novel “readout” mechanism to obtain a global graph embedding. Inspired by recent computer vision results that find position-invariant attention performant in learning long-range relationships, our method, which we call GraphTrans, applies a permutation-invariant Transformer module after a standard GNN module. This simple architecture leads to state-of-the-art results on several graph classification tasks, outperforming methods that explicitly encode graph structure. Our results suggest that purely-learning-based approaches without graph structure may be suitable for learning high-level, long-range relationships on graphs. Code for GraphTrans is available at https://github.com/ucbrise/graphtrans.
