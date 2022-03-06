---
title: 'DIEL: Interactive Visualization Beyond the Here and Now'
authors:
  - name: Yifan Wu
    affiliation: UC Berkeley
  - name: Remco Chang
    affiliation: Tufts University
  - name: Joseph M. Hellerstein
    affiliation: UC Berkeley
  - key: arvindsatya
  - name: Eugene Wu
    affiliation: Columbia University
venue: vis-full
year: 2022
doi:  10.1109/TVCG.2021.3114796
tags:
  - visualization design
  - interaction design
  - system
  - mixed methods
teaser: ' Designs to coordinate asynchronous requests and responses when querying over distributed data: (a) renders the most recent interaction request; (b) renders the most recent response received as well as any <em>pending interactions</em>; (c) renders snapshots of all interactions and their corresponding results.'
---
Interactive visualization design and research have primarily focused on local data and synchronous events. However, for more complex use cases—e.g., remote database access and streaming data sources—developers must grapple with distributed data and asynchronous events. Currently, constructing these use cases is difficult and time-consuming; developers are forced to operationally program low-level details like asynchronous database querying and reactive event handling. This approach is in stark contrast to modern methods for browser-based interactive visualization, which feature high-level declarative specifications. In response, we present DIEL, a declarative framework that supports asynchronous events over distributed data. As in many declarative languages, DIEL developers specify only what data they want, rather than procedural steps for how to assemble it. Uniquely, DIEL models asynchronous events (e.g., user interactions, server responses) as streams of data that are captured in event logs. To specify the state of a visualization at any time, developers write declarative queries over the data and event logs; DIEL compiles and optimizes a corresponding dataflow graph, and automatically generates necessary low-level distributed systems details. We demonstrate DIEL’s performance and expressivity through example interactive visualizations that make diverse use of remote data and asynchronous events. We further evaluate DIEL’s usability using the Cognitive Dimensions of Notations framework, revealing wins such as ease of change, and compromises such as premature commitments.
