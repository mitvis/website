---
title: 'Vega-Lite: A Grammar of Interactive Graphics'
authors:
  - key: arvindsatya
  - key: domoritz
  - key: kanitw
  - key: jheer
venue: infovis
year: 2017
bestPaper: true
teaser: 'Example visualizations authored with Vega-Lite. From left-to-right: layered line chart combining raw and average values, dual-axis layered bar and line chart, brushing and linking in a scatterplot matrix, layered cross-filtering, and an interactive index chart.'
videos:
  - name: Video Preview
    key: '177767802'
    platform: vimeo
  - name: InfoVis 2016 Talk
    key: '228919603'
    platform: vimeo
  - name: OpenVis 2017 Talk
    key: 9uaHRWj04D4
    platform: youtube
materials:
  - name: Project
    url: https://vega.github.io/vega-lite
    type: cube
  - name: Code
    url: https://github.com/vega/vega-lite
    type: code
---
We present Vega-Lite, a high-level grammar that enables rapid specification of <em>interactive</em> data visualizations. Vega-Lite combines a traditional grammar of graphics, providing visual encoding rules and a composition algebra for layered and multi-view displays, with a novel grammar of interaction. Users specify interactive semantics by composing <em>selections</em>. In Vega-Lite, a selection is an abstraction that defines input event processing, points of interest, and a predicate function for inclusion testing. Selections parameterize visual encodings by serving as input data, defining scale extents, or by driving conditional logic. The Vega-Lite compiler automatically synthesizes requisite data flow and event handling logic, which users can override for further customization. In contrast to existing reactive specifications, Vega-Lite selections decompose an interaction design into concise, enumerable semantic units. We evaluate Vega-Lite through a range of examples, demonstrating succinct specification of both customized interaction methods and common techniques such as panning, zooming, and linked selection.