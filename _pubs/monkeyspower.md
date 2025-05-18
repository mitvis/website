---
title: 'How Do Large Language Monkeys Get Their Power (Laws)?'
authors:
  - key: rylanschaeffer
    affiliation: University of California, Berkeley
  - key: joshuakazdan
    affiliation: Stanford University
  - key: johnhughes
    affiliation: University of Cambridge
  - name: Jordan Juravsky
    affiliation: University of California, Berkeley
  - name: Sara Price
    affiliation: University of Cambridge
  - name: Aengus Lynch
    affiliation: University of Cambridge
  - name: Erik Jones
    affiliation: University of Toronto
  - name: Robert Kirk
    affiliation: University of Cambridge
  - key: azaliamirhoseini
    affiliation: Google DeepMind
  - name: Sanmi Koyejo
    affiliation: Stanford University
venue: arXiv preprint
year: 2025
month: February
day: 24
has_pdf: true
doi: 10.48550/arXiv.2502.17578
tags:
  - machine learning
  - scaling laws
  - generative AI
  - inference compute
teaser: 
  Recent research documents a surprising finding: increasing inference compute through repeated sampling reveals power-law scaling in average success rates. This occurs despite per-problem exponential scaling, explained by heavy-tailed distributions of single-attempt success rates. Our analysis unifies these observations under a mathematical framework, offering new insights into inference-time scaling laws and more efficient performance forecasting for language models.
materials:
  - name: Paper
    url: https://arxiv.org/abs/2502.17578
    type: file-pdf
---
Recent research across mathematical problem solving, proof assistant programming and multimodal jailbreaking documents a striking finding: when (multimodal) language model tackle a suite of tasks with multiple attempts per task -- succeeding if any attempt is correct -- then the negative log of the average success rate scales a power law in the number of attempts. In this work, we identify an apparent puzzle: a simple mathematical calculation predicts that on each problem, the failure rate should fall exponentially with the number of attempts. We confirm this prediction empirically, raising a question: from where does aggregate polynomial scaling emerge? We then answer this question by demonstrating per-problem exponential scaling can be made consistent with aggregate polynomial scaling if the distribution of single-attempt success probabilities is heavy tailed such that a small fraction of tasks with extremely low success probabilities collectively warp the aggregate success trend into a power law - even as each problem scales exponentially on its own. We further demonstrate that this distributional perspective explains previously observed deviations from power law scaling, and provides a simple method for forecasting the power law exponent with an order of magnitude lower relative error, or equivalently, ~2-4 orders of magnitude less inference compute. Overall, our work contributes to a better understanding of how neural language model performance improves with scaling inference compute and the development of scaling-predictable evaluations of (multimodal) language models.