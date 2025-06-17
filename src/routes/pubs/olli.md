---
title: "Olli: An Extensible Visualization Library for Screen Reader Accessibility"
authors:
  - key: mattblanco
  - key: jzong
  - key: arvindsatya
type: poster
venue: vis-posters
year: 2022
date: 2022-10-19
tags:
  - visualization design
  - interaction design
  - interface
  - accessibility
materials:
  - name: Poster
    url: /pubs/olli/poster.pdf
    type: file
  - name: Olli website
    url: https://mitvis.github.io/olli/
    type: cube
  - name: Code
    url: https://github.com/mitvis/olli
    type: code
teaser: "An example using Olli to convert an existing visualization into an accessible text structure. A) A faceted dot plot created with Vega-Lite. B) Example code using Olli's Vega-Lite Adapter. C) Output accessible HTML tree view containing text descriptions for the dot plot."
---

Though recent research has explored the design of rich screen reader
visualization experiences, accessible visualizations for blind and
low vision users remain rare on the web. While some visualization
toolkits offer accessible solutions, toolkit-specific implementations
can present idiosyncratic user experiences that limit learnability. We
present Olli, an open source library that converts visualizations into
a keyboard-navigable structure accessible to screen readers. Using
an extensible adapter design pattern, Olli is agnostic to the specific
toolkit used to author the visualization. Olli renders a chart as an
accessible tree view following the HTML Accessible Rich Internet
Applications (ARIA) standard. Olli helps visualization developers
easily create accessible visualizations across visualization toolkits.
