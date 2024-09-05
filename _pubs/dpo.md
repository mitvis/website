---
title: 'Device Placement Optimization with Reinforcement Learning'
authors:
  - key: azaliamirhoseini
    equal: true
  - name: Hieu Pham
    equal: true
  - name: Quoc V. Le
  - name: Benoit Steiner
  - name: Rasmus Larsen
  - name: Yuefeng Zhou
  - name: Naveen Kumar
  - name: Mohammad Norouzi
  - name: Samy Bengio
  - name: Jeff Dean
venue: preprint
year: 2017
has_pdf: false
doi: NA
tags:
  - natural language processing
  - generative AI
  - highlight
teaser: In recent years, neural network training and inference have surged in complexity and resource demands. We introduce a novel approach that leverages a sequence-to-sequence model to optimize device placement for TensorFlow graphs. Our method outperforms traditional heuristics and algorithms by learning optimal device assignments, as demonstrated with Inception-V3 on ImageNet and RNN LSTM models for language tasks.
materials:
  - name: "Device Placement Optimization with Reinforcement Learning"
    url: https://proceedings.mlr.press/v70/mirhoseini17a/mirhoseini17a.pdf
    type: link
---
The past few years have witnessed a growth in size and computational requirements for training and inference with neural networks. Currently, a common approach to address these requirements is to use a heterogeneous distributed environment with a mixture of hardware devices such as CPUs and GPUs. Importantly, the decision of placing parts of the neural models on devices is often made by human experts based on simple heuristics and intuitions. In this paper, we propose a method which learns to optimize device placement for TensorFlow computational graphs. Key to our method is the use of a sequence-to-sequence model to predict which subsets of operations in a TensorFlow graph should run on which of the available devices. The execution time of the predicted placements is then used as the reward signal to optimize the parameters of the sequence-to-sequence model. Our main result is that on Inception-V3 for ImageNet classification, and on RNN LSTM, for language modeling and neural machine translation, our model finds non-trivial device placements that outperform hand-crafted heuristics and traditional algorithmic methods.
