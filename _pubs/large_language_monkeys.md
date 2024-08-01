---
title: 'Large Language Monkeys: Scaling Inference Compute with Repeated Sampling'
authors:
  - key: bradleybrown
    affiliation: University of Oxford
  - key: jordanjuravsky
  - key: ryanehrlich
  - name: Ronald Clark
    affiliation: University of Oxford
  - name: Quoc V. Le
    affiliation: Google DeepMind
  - name: Christopher Ré
    affiliation: Stanford
  - key: azaliamirhoseini
venue: preprint
year: 2024
doi: 10.48550/arXiv.2407.21787
tags:
  - machine learning
  - generative AI
teaser: Increasing the amount of inference compute through repeated sampling leads to large improvements in coverage - the fraction of problems solved by any attempt - across a variety tasks, models, and sample budgets. This makes it possible, and sometimes cost-effective, to amplify weaker models with many samples and outperform single attempts from more capable models.
materials:
  - name: SWE-bench Lite Samples
    url: https://github.com/ScalingIntelligence/swe-bench-lite-samples
    type: code
    display_name: SWE-bench Lite Samples
  - name: CodeContests Analysis
    url: https://github.com/ScalingIntelligence/code-contests-analysis
    type: code
    display_name: CodeContests Analysis
---
Scaling the amount of compute used to train language models has dramatically improved their capabilities. However, when it comes to inference, we often limit the amount of compute to only one attempt per problem. Here, we explore inference compute as another axis for scaling by increasing the number of generated samples. Across multiple tasks and models, we observe that coverage - the fraction of problems solved by any attempt - scales with the number of samples over four orders of magnitude. In domains like coding and formal proofs, where all answers can be automatically verified, these increases in coverage directly translate into improved performance. When we apply repeated sampling to SWE-bench Lite, the fraction of issues solved with DeepSeek-V2-Coder-Instruct increases from 15.9% with one sample to 56% with 250 samples, outperforming the single-attempt state-of-the-art of 43% which uses more capable frontier models. Moreover, using current API pricing, amplifying the cheaper DeepSeek model with five samples is more cost-effective and solves more issues than paying a premium for one sample from GPT-4o or Claude 3.5 Sonnet. Interestingly, the relationship between coverage and the number of samples is often log-linear and can be modelled with an exponentiated power law, suggesting the existence of inference-time scaling laws. Finally, we find that identifying correct samples out of many generations remains an important direction for future research in domains without automatic verifiers. When solving math word problems from GSM8K and MATH, coverage with Llama-3 models grows to over 95% with 10,000 samples. However, common methods to pick correct solutions from a sample collection, such as majority voting or reward models, plateau beyond several hundred samples and fail to fully scale with the sample budget.