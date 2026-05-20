---
title: 'Belidor: A Specification Language for Operationalizing Structural Analogies Between User Interfaces'
authors:
  - key: mattbl
    affiliation: UC San Diego
  - name: Devamardeep Hayatpur
    affiliation: UC San Diego
  - key: arvindsatya
  - name: Haijun Xia
    affiliation: UC San Diego
venue: chi
date: 2026-04-13
doi: 10.1145/3772318.3791613
themes: 
  - convivial-interaction
tags:
  - language
  - qualitative methods
feature: true
teaser: >
  Belidor specifications describe the structure underlying user interfaces. Events in a calendar and videos in a video editor are both organized by their respective temporal structures (1). Conceptual objects and structures can be presented by mapping them to the view’s objects (marks) and structures (encodings) (2). Structures also characterize interaction: for example, events/videos are directly manipulated along the time/timeline structure (3). Belidor specifications help compare and contrast user interfaces, in this case by aligning the parts of the calendar/video editor specifications that overlap (4), highlighting the analogy between the two user interfaces.
materials:
  - name: Analogy Viewer
    url: https://belidor-specification.github.io/
    type: laptop
---
We present Belidor, a text notation that describes the structure underlying user interfaces (UIs). Belidor’s relational model emphasizes how structures, such as the temporal order of text messages, cut across an interactive system’s conceptual model, user-facing presentation, and interactive behavior. We demonstrate Belidor’s expressive power with a gallery of examples spanning GUIs (eg. messaging, video editors), screen readers, and hardware devices.

Belidor serves as an effective representation for structural analogies between user interfaces (eg. between calendars and video-editors). In contrast, prior work relied on visual UI representations and therefore prioritized visual style transfer.
In three case studies, we show how Belidor can reveal analogies, help transfer ideas between user interfaces, and describe design patterns as analogies
We discuss the implications of representing the structure of interactive systems for designers and developers, and envision how Belidor might support “structural design moves” for interface designers.