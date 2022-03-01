---
title: 'Reactive Vega: A Streaming Dataflow Architecture  for Declarative Interactive Visualization'
featTitle: 'Reactive Vega: Declarative Interactive Visualization'
authors:
  - key: arvindsatya
  - name: Ryan Russell
    url: https://github.com/RussellSprouts
    affiliation: University of Washington
  - name: Jane Hoffswell
    url: https://homes.cs.washington.edu/~jhoffs/
    affiliation: University of Washington
  - name: Jeffrey Heer
    url: http://jheer.org
    affiliation: University of Washington
venue: infovis
year: 2016
teaser: The Reactive Vega dataflow graph created from a declarative specification for a interactive index chart of streaming financial data. As streaming data arrives from the Yahoo! Finance API, or as a user moves their mouse pointer across the chart, an update cycle propagates through the graph and triggers an efficient update and re-render of the visualization.
videos:
  - name: OpenVis 2016 Talk
    key: Y8Fp9z-9DWc
    platform: youtube
  - name: InfoVis 2015 Talk
    key: '236171108'
    platform: vimeo
materials:
  - name: Project
    url: https://vega.github.io/vega
    type: cube
  - name: Code
    url: https://github.com/vega/vega
    type: code
---
We present Reactive Vega, a system architecture that provides the first robust and comprehensive treatment of declarative visual and interaction design for data visualization. Starting from a single declarative specification, Reactive Vega constructs a dataflow graph in which input data, scene graph elements, and interaction events are all treated as first-class streaming data sources. To support expressive interactive visualizations that may involve time-varying scalar, relational, or hierarchical data, Reactive Vega’s dataflow graph can dynamically re-write itself at runtime by extending or pruning branches in a data-driven fashion. We discuss both compile- and run-time optimizations applied within Reactive Vega, and share the results of benchmark studies that indicate superior interactive performance to both D3 and the original, non-reactive Vega system.