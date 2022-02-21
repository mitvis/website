---
layout: pub
stub: true
title: 'Lyra: An Interactive Visualization Design Environment'
featTitle: 'Lyra: A Visualization Design Environment'
authors:
  - key: arvindsatya
  - key: jheer
venue: eurovis
year: 2014
teaser: William Playfair’s classic chart comparing the price of wheat and wages in England recreated in the Lyra visualization design environment (VDE).
videos:
  - name: EuroVis 2014 Talk
    key: '100719873'
    platform: vimeo
  - name: OpenVis 2014 Talk
    key: io7BSu6RIYM
    platform: youtube
materials:
  - name: Application
    url: http://idl.cs.washington.edu/projects/lyra/
    type: window-maximize
  - name: Code
    url: https://github.com/vega/lyra
    type: code
---
We present Lyra, an interactive environment for designing customized visualizations without writing code. Using drag-and-drop interactions, designers can bind data to the properties of graphical marks to author expressive visualization designs. Marks can be moved, rotated and resized using handles; relatively positioned using connectors; and parameterized by data fields using property drop zones. Lyra also provides a data pipeline interface for iterative, visual specification of data transformations and layout algorithms. Visualizations created with Lyra are represented as specifications in Vega, a declarative visualization grammar that enables sharing and reuse. We evaluate Lyra’s expressivity and accessibility through diverse examples and studies with journalists and visualization designers. We find that Lyra enables users to rapidly develop customized visualizations, covering a design space comparable to existing programming-based tools.