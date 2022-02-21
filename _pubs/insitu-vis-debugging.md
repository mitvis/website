---
layout: paper
stub: true
title: Augmenting Code with In Situ Visualizations to Aid Program Understanding
authors:
  - key: jhoffs
  - key: arvindsatya
  - key: jheer
venue: chi
year: 2018
teaser: Code augmentations visualize the runtime state of program variables in a Vega specification. A histogram shows the distribution of variables containing set data. Interacting with the year histogram filters all other histograms to only show the data values where the year is between 1995 and 2002.
videos:
  - name: Video Preview
    key: B6LaAUHKiUg
    platform: youtube
---
Programmers must draw explicit connections between their code and runtime state to properly assess the correctness of their programs. However, debugging tools often decouple the program state from the source code and require explicitly invoked views to bridge the rift between program editing and program understanding. To unobtrusively reveal runtime behavior during both normal execution and debugging, we contribute techniques for visualizing program variables directly within the source code. We describe a design space and placement criteria for embedded visualizations. We evaluate our in situ visualizations in an editor for the Vega visualization grammar. Compared to a baseline development environment, novice Vega users improve their overall task grade by about 2 points when using the in situ visualizations and exhibit significant positive effects on their self-reported speed and accuracy.