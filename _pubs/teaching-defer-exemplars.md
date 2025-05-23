---
title: Teaching Humans When To Defer to a Classifier via Exemplars
authors:
  - name: Hussein Mozannar
    affiliation: MIT CSAIL
  - key: arvindsatya
  - name: David Sontag
    affiliation: MIT CSAIL
venue: aaai
year: 2022
date: 2022-02-22
tags:
  - human-ai interaction
  - empirical study
  - quantitative methods
teaser: The AI assisted decision making pipeline. The AI first sends to the human a message `A`, then the human decides with their rejector `r(Z,A)` if they should follow the AI's advice and predict <code>&pi;<sub>Y</sub>(X)</code> or they should predict on their own using `h(Z,A)`.
materials:
  - name: Study Materials
    url: https://github.com/clinicalml/teaching-to-understand-ai
    type: code
---
Expert decision makers are starting to rely on data-driven automated agents to assist them with various tasks. For this collaboration to perform properly, the human decision maker must have a mental model of when and when not to rely on the agent. In this work, we aim to ensure that human decision makers learn a valid mental model of the agent's strengths and weaknesses. To accomplish this goal, we propose an exemplar-based teaching strategy where humans solve a set of selected examples and with our help generalize from them to the domain. We present a novel parameterization of the human's mental model of the AI that applies a nearest neighbor rule in local regions surrounding the teaching examples. Using this model, we derive a near-optimal strategy for selecting a representative teaching set. We validate the benefits of our teaching strategy on a multi-hop question answering task with an interpretable AI model using crowd workers. We find that when workers draw the right lessons from the teaching stage, their task performance improves. We furthermore validate our method on a set of synthetic experiments. 
