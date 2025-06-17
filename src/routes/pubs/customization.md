---
title: '“Customization is Key”: Reconfigurable Content Tokens for
Accessible Data Visualizations'
authors:
  - key: jonsh
  - key: ipedraza
  - key: hajas
    affiliation: Global Disability Innovation Hub
    url: https://www.disabilityinnovation.com/who-we-are/our-team/daniel-hajas
  - key: jzong
  - key: arvindsatya
venue: chi
doi: 10.1145/3613904.3641970
year: 2024
date: 2024-05-15
tags:
  - interaction design
  - interface
  - accessibility
teaser:
  Two different customizations of Olli hierarchies for a chart showing five technology companies’ stock prices between 2000 and 2010. (a) the visualization; (b) a customization that includes more tokens, with longer brevity, more suitable for novice users who need additional assistance in forming the correct mental model of the graph; (c) a customization with fewer, brief tokens more suitable for an expert user who might have a well-formed mental model of the chart.
materials:
  - name: HTML Article
    url: https://dl.acm.org/doi/fullHtml/10.1145/3613904.3641970
    type: cube
---

Customization is crucial for making visualizations accessible to blind and low-vision (BLV) people with widely-varying needs. But what makes for usable or useful customization? We identify four design goals for how BLV people should be able to customize screen-reader-accessible visualizations: _presence_, or what content is included; _verbosity_, or how concisely content is presented; _ordering_, or how content is sequenced; and, _duration_, or how long customizations are active. To meet these goals, we model a customization as a sequence of content tokens, each with a set of adjustable properties. We instantiate our model by extending Olli, an open-source accessible visualization toolkit, with a settings menu and command box for persistent and ephemeral customization respectively. Through a study with 13 BLV participants, we find that customization increases the ease of identifying and remembering information. However, customization also introduces additional complexity, making it more helpful for users familiar with similar tools.
