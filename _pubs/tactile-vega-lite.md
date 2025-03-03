---
title: 'Tactile Vega-Lite: Rapidly Prototyping Tactile Charts with Smart Defaults'
authors:
  - key: mzc219
  - key: ipedraza
  - key: arvindsatya
  - key: jzong
venue: chi
doi: 10.1145/3706598.3714132
year: 2025
date: 2025-05-02
tags:
  - visualization design
  - accessibility
teaser: 'Comparison of visual and tactile charts representing fertility rate trends for China and Australia from 1955 to 2005. This comparison shows design considerations necessary when transforming visual data into tactile formats, such as converting text to braille, adjusting scaling and spacing of chart elements, re-arranging the legend, and substituting visual encodings with tactile encodings.'
materials:
  # uncomment this when the DOI is live on dl.acm/.org
  # - name: HTML Article
  #   url: https://dl.acm.org/doi/fullHtml/10.1145/3706598.3714132
  #   type: cube
  - name: Prototype editor
    url: https://tactile-vega-lite.vercel.app/
    type: cube
---

Tactile charts are essential for conveying data to blind and low vision (BLV) readers but are difficult for designers to construct. Non-expert designers face barriers to entry due to complex guidelines, while experts struggle with fragmented and time-consuming workflows that involve extensive customization. Inspired by formative interviews with expert tactile graphics designers, we created Tactile Vega-Lite (TVL): an extension of Vega-Lite that offers tactile-specific abstractions and synthesizes existing guidelines into a series of smart defaults. Pre-defined stylistic choices enable non-experts to quickly produce guideline-compliant tactile charts. Expert users can override defaults to tailor customizations for their intended audience. In a user study with 12 tactile graphics creators, we show that Tactile Vega-Lite enhances flexibility and consistency by automating tasks like adjusting spacing and translating braille while accelerating iterations through pre-defined textures and line styles. Through expert critique, we also learn more about tactile chart design best practices and design decisions.
