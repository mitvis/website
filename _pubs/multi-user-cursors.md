---
title: Representing Real-Time Multi-User Collaboration in Visualizations
authors:
  - key: rneogy
  - key: jzong
  - key: arvindsatya
venue: vis-short
year: 2020
doi: 10.1109/VIS47514.2020.00036
tags:
  - convivial interaction
  - interface
  - visualization design
teaser: Example gallery of user representations on collaborative visualizations. Inset views show the result of the peeking hover interaction for each example. A) Generic cursors overlay each visualization, indicating remote interaction. B) Specific cursors provide more visualization-specific information about remote user interaction. C) Cursor legends provide an external, minimal representation of remote users. D) Thumbnail legends visually communicate a specific overview of the remote interaction state.
videos:
  - name: Video Preview
    key: '453645832'
    platform: vimeo
---
Establishing common ground and maintaining shared awareness amongst participants is a key challenge in collaborative visualization. For real-time collaboration, existing work has primarily focused on synchronizing constituent visualizations — an approach that makes it difficult for users to work independently, or selectively attend to their collaborators’ activity. To address this gap, we introduce a design space for representing synchronous multi-user collaboration in visualizations defined by two orthogonal axes: <em>situatedness</em>, or whether collaborators’ interactions are overlaid on or shown outside of a user’s view, and <em>specificity</em>, or whether collaborators are depicted through abstract, generic representations or through specific means customized for the given visualization. We populate this design space with a variety of examples including generic and custom synchronized <em>cursors</em>, and <em>user legends</em> that collect these cursors together or reproduce collaborators’ views as thumbnails. To build common ground, users can interact with these representations by <em>peeking</em> to take a quick look at a collaborator’s view, <em>tracking</em> to follow along with a collaborator in real-time, and <em>forking</em> to independently explore the visualization based on a collaborator’s work. We present a reference implementation of a wrapper library that converts interactive Vega-Lite charts into collaborative visualizations. We find that our approach affords synchronous collaboration across an expressive range of visual designs and interaction techniques.
