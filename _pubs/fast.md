---
title: 'A Full-Stack Search Technique for Domain Optimized Deep Learning Accelerators'
authors:
  - name: Dan Zhang
    affiliation: Google Brain
  - name: Safeen Huda
    affiliation: Google
  - name: Ebrahim Songhori
    affiliation: Google Brain
  - name: Kartik Prabhu
    affiliation: Stanford Univeristy
  - name: Quoc Lee
    affiliation: Google Brain
  - name: Anna Goldie
    affiliation: Google Brain
  - key: azaliamirhoseini
venue: preprint
year: 2022
day: 53
has_pdf: false
doi: 3503222.3507767v
tags:
  - natural language processing
  - generative AI
  - highlight
teaser: Explore the cutting-edge Full-stack Accelerator Search Technique (FAST), a game-changing framework designed to optimize hardware accelerators for today's dynamic deep learning demands. This innovative approach fine-tunes every aspect of the hardware-software stack, from datapath design to software scheduling and compiler optimizations. By targeting bottlenecks in leading models like EfficientNet and BERT, FAST creates accelerators that deliver up to 3.7× better performance per watt compared to TPU-v3 for single workloads, and 2.4× better for a range of tasks. Discover how FAST can revolutionize datacenter efficiency and performance.
materials:
  - name: A Full-Stack Search Technique for Domain Optimized Deep Learning Accelerators
    url: https://dl.acm.org/doi/abs/10.1145/3503222.3507767
    type: link
---
The rapidly-changing deep learning landscape presents a unique opportunity for building inference accelerators optimized for specific datacenter-scale workloads. We propose Full-stack Accelerator Search Technique (FAST), a hardware accelerator search framework that defines a broad optimization environment covering key design decisions within the hardware-software stack, including hardware datapath, software scheduling, and compiler passes such as operation fusion and tensor padding. In this paper, we analyze bottlenecks in state-of-the-art vision and natural language processing (NLP) models, including EfficientNet and BERT, and use FAST to design accelerators capable of addressing these bottlenecks. FAST-generated accelerators optimized for single workloads improve Perf/TDP by 3.7× on average across all benchmarks compared to TPU-v3. A FAST-generated accelerator optimized for serving a suite of workloads improves Perf/TDP by 2.4× on average compared to TPU-v3. Our return on investment analysis shows that FAST-generated accelerators can potentially be practical for moderate-sized datacenter deployments.
