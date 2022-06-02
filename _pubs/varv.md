---
title: 'Varv: Reprogrammable Interactive Software as a Declarative Data Structure'
authors:
  - name: Marcel Borowski
    affiliation: Aarhus University
  - name: Luke Murray
    affiliation: MIT CSAIL
  - name: Rolf Bagge
    affiliation: Aarhus University
  - name: Janus Bager Kristensen
    affiliation: Aarhus University
  - key: arvindsatya
  - name: Clemens Nylandsted Klokmose
    affiliation: Aarhus University
venue: chi
year: 2022
date: 2022-05-05
tags:
  - language
  - system
  - interaction design
  - qualitative methods
  - convivial information
videos:
  - name: 30s Video Preview
    key: vfxogIys0Dw
  - name: CHI 2022 Talk
    key: xZpu_vZJo3w
teaser: >
  Varv Examples: (a) A todo list web application that is inherently extensible. Here, a basic todo list is extended with the ability to complete and delete todos by adding two new concept definitions and new modified template definitions. (b) A board game toolkit that defines abstractions for board game logic. The games "Checkers" and "Othello" were implemented with the toolkit and then merged into a new "Checkers-O-Thello" game with the addition of a short concept definition. As Varv applications are represented as data structures, higher-level tooling can be developed including a block-based editor (right), an inspector to go from an element in the view to the corresponding template or data (context menu to the left), and a data inspector for live editing application state (middle).
---
Most modern applications are immutable and turn-key despite the acknowledged benefits of empowering users to modify their software. Writing extensible software remains challenging, even for expert programmers. Reprogramming or extending existing software is often laborious or wholly blocked, requiring sophisticated knowledge of application architecture or setting up a development environment. We present Varv, a programming model representing reprogrammable interactive software as a declarative data structure. Varv defines interactive applications as a set of concepts that consist of a schema and actions. Applications in Varv support incremental modification, allowing users to reprogram through addition and selectively suppress, modify, or add behavior. Users can define high-level concepts, creating an abstraction layer and effectively a domain-specific language for their application domain, emphasizing reuse and modification. We demonstrate the reprogramming and collaboration capabilities of Varv in two case studies and illustrate how the event engine allows for extensive tooling support.
