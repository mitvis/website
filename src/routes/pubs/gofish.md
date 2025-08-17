---
title: 'GoFish: A Grammar of More Graphics!'
authors:
  - key: jopo
  - key: arvindsatya
venue: vis-full
date: 2025-11-03
# doi: 10.1111/cgf.12903
themes:
  - tools
tags:
  - language
  - qualitative methods
materials:
  - name: Website
    url: https://gofish.graphics/
    type: desktop
  - name: Code Repo
    url: https://github.com/starfish-graphics/gofish-graphics
    type: code
videos:
  figure: zxT3Vrka-DY
feature: true
teaser: >
  A scatterpie, flower chart, and balloon chart. Their specifications are closely related. The flower chart replaces the scatterpie’s Rect with a custom Petal and adds a stem. The balloon chart replaces the flower with a custom Balloon element and adds a Wavy coordinate transform.
---
Visualization grammars from ggplot2 to Vega-Lite are based on the Grammar of Graphics (GoG), our most comprehensive formal theory of visualization. The GoG helped expand the expressive gamut of visualization by moving beyond fixed chart types and towards a design space of composable operators. Yet, the resultant design space has surprising limitations, inconsistencies, and cliffs—even seemingly simple charts like mosaics, waffles, and ribbons fall out of scope of most GoG implementations. To author such charts, visualization designers must either rely on overburdened grammar developers to implement purpose-built mark types (thus reintroducing the issues of typologies) or drop to lower-level frameworks. In response, we present GoFish: a declarative visualization grammar that formalizes Gestalt principles (e.g., uniform spacing, containment, and connection) that have heretofore been complected in GoG constructs. These _graphical operators_ achieve greater expressive power than their predecessors by enabling _recursive composition_: they can be nested and overlapped arbitrarily. Through a diverse example gallery, we demonstrate how graphical operators free users to arrange shapes in many different ways while retaining the benefits of high-level grammars like scale resolution and coordinate transform management. Recursive composition naturally yields an infinite design space that blurs the boundary between an expressive, low-level grammar and a concise, high-level one. In doing so, we point towards an updated theory of visualization, one that is open to an innumerable space of graphic representations instead of limited to a fixed set of “good” designs.