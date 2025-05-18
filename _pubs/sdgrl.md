---
title: 'Synthetic Data Generation & Multi-Step RL for Reasoning & Tool Use'
authors:
  - name: Anna Goldie
    affiliation: Stanford University
    email: agoldie@cs.stanford.edu
    equal: true
  - name: Azalia Mirhoseini
    affiliation: Stanford University
    email: azalia@cs.stanford.edu
    equal: true
  - name: Hao Zhou
    affiliation: Google DeepMind
  - name: Irene Cai
    affiliation: Google DeepMind
  - name: Christopher D. Manning
    affiliation: Stanford University
venue: arXiv preprint
year: 2025
month: April
day: 28
has_pdf: true
doi: 10.48550/arXiv.2504.04736
tags:
  - reinforcement learning
  - language models
  - reasoning
  - tool use
  - synthetic data
  - generative AI
teaser: 
  This paper introduces Step-Wise Reinforcement Learning (SWiRL), a framework for improving multi-step reasoning and tool use in language models through synthetic data generation and offline RL. SWiRL decomposes reasoning trajectories into sub-trajectories, enabling fine-grained feedback and significant accuracy improvements across challenging tasks like HotPotQA, GSM8K, MuSiQue, CofCA, and BeerQA. Notably, SWiRL-trained models outperform larger proprietary models in multi-step reasoning while demonstrating strong task generalization and improved cost efficiency.
materials:
  - name: Paper
    url: https://arxiv.org/abs/2504.04736
    type: file-pdf
  - name: Code Repository
    url: https://github.com/ScalingIntelligence/swirl_rl
    type: code
  - name: Synthetic Multi-Step Reasoning Dataset
    url: https://huggingface.co/datasets/ScalingIntelligence/swirl_synthetic_data
    type: database
---
Reinforcement learning has been shown to improve the performance of large language models. However, traditional approaches like RLHF or RLAIF treat the problem as single-step. As focus shifts toward more complex reasoning and agentic tasks, language models must take multiple steps of text generation, reasoning and environment interaction before generating a solution. We propose a synthetic data generation and RL methodology targeting multi-step optimization scenarios. This approach, called Step-Wise Reinforcement Learning (SWiRL), iteratively generates multi-step reasoning and tool use data, and then learns from that data. It employs a simple step-wise decomposition that breaks each multi-step trajectory into multiple sub-trajectories corresponding to each action by the original model. It then applies synthetic data filtering and RL optimization on these sub-trajectories. We evaluated SWiRL on a number of multi-step tool use, question answering, and mathematical reasoning tasks. Our experiments show that SWiRL outperforms baseline approaches by 21.5%, 12.3%, 14.8%, 11.1%, and 15.3% in relative accuracy on GSM8K, HotPotQA, CofCA, MuSiQue, and BeerQA, respectively. Excitingly, the approach exhibits generalization across tasks: for example, training only on HotPotQA (text question-answering) improves zero-shot performance on GSM8K (a math dataset) by a relative 16.9%.
