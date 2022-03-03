---
title: Visual Debugging Techniques for Reactive Data Visualization
featTitle: Visual Debugging Techniques
authors:
  - name: Jane Hoffswell
    url: https://homes.cs.washington.edu/~jhoffs/
    affiliation: University of Washington
  - key: arvindsatya
    affiliation: Stanford University
  - name: Jeffrey Heer
    url: http://jheer.org
    affiliation: University of Washington
venue: eurovis
year: 2016
doi: 10.1111/cgf.12903
tags:
  - debugging
  - interface
  - quantitative methods
teaser: 'Vega’s visual debugging techniques allow users to inspect relevant data transformations and dependencies within their specification in the context of the visualization and interaction events. Signal updates are populated in a timeline, on which users can view dependencies (in red): brush depends on cell, start_coords, and end_coords, as shown in the specification above. Users can rewind the visualization to view previous states (in green) and inspect scale encodings as a tooltip in-situ.'
videos:
  - name: EuroVis 2016 Talk
    key: '177270991'
    platform: vimeo
---
Interaction is critical to effective visualization, but can be difficult to author and debug due to dependencies among input events, program state, and visual output. Recent advances leverage reactive semantics to support declarative design and avoid the “spaghetti code” of imperative event handlers. While reactive programming improves many aspects of development, textual specifications still fail to convey the complex runtime dynamics. In response, we contribute a set of visual debugging techniques to reveal the runtime behavior of reactive visualizations. A timeline view records input events and dynamic variable updates, allowing designers to replay and inspect the propagation of values step-by-step. On-demand annotations overlay the output visualization to expose relevant state and scale mappings in-situ. Dynamic tables visualize how backing datasets change over time. To evaluate the effectiveness of these techniques, we study how first-time Vega users debug interactions in faulty, unfamiliar specifications; with no prior knowledge, participants were able to accurately trace errors through the specification.
