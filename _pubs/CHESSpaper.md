---
title: 'CHESS: Contextual Harnessing for Efficient SQL Synthesis'
authors:
  - name: Shayan Talaei
    affiliation: Stanford University
  - name: Mohammadreza Pourreza
    affiliation: University of Alberta
  - name: Yu-Chen Chang
    affiliation: Stanford University
  - key: azaliamirhoseini
  - name: Amin Saberi
    affiliation: Stanford University
venue: preprint
year: 2024
day: 178
has_pdf: true
doi: 2405.16755​
tags:
  - natural language processing
  - generative AI
teaser: Translating natural language questions into database queries, or text-to-SQL, is a long-standing research problem. This issue has been exacerbated in recent years due to the growing complexity of databases, driven by the increasing sizes of schemas (sets of columns and tables), values (content), and catalogs (metadata describing schemas and values) stored within them. 
materials:
  - name: CHESS
    url: https://github.com/ShayanTalaei/CHESS
    type: code
---
Utilizing large language models (LLMs) for transforming natural language questions into SQL queries (text-to-SQL) is a promising yet challenging approach, particularly when applied to real-world databases with complex and extensive schemas. In particular, effectively incorporating data catalogs and database values for SQL generation remains an obstacle, leading to suboptimal solutions. We address this problem by proposing a new pipeline that effectively retrieves relevant data and context, selects an efficient schema, and synthesizes correct and efficient SQL queries. To increase retrieval precision, our pipeline introduces a hierarchical retrieval method leveraging model-generated keywords, locality-sensitive hashing indexing, and vector databases. Additionally, we have developed an adaptive schema pruning technique that adjusts based on the complexity of the problem and the model's context size. Our approach generalizes to both frontier proprietary models like GPT-4 and open-source models such as Llama-3-70B. Through a series of ablation studies, we demonstrate the effectiveness of each component of our pipeline and its impact on the end-to-end performance. Our method achieves new state-of-the-art performance on the cross-domain challenging BIRD dataset.
