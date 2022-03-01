---
title: Learning Structural Semantics for the Web
authors:
  - name: Maxine Lim
    url: http://maxinelim.com/
    affiliation: Stanford University
  - name: Ranjitha Kumar
    url: http://ranjithakumar.net/
    affiliation: Stanford University
  - key: arvindsatya
  - name: Cesar Torres
    url: http://cearto.com/
    affiliation: Stanford University
  - name: Jerry O. Talton
    url: http://jerrytalton.net
  - name: Scott R. Klemmer
    url: http://d.ucsd.edu/srk/
    affiliation: Stanford University
type: preprint
venue: stanford-cstr
year: 2012-02
teaser: The pipeline for learning structural semantic classifiers for the Web. First, a large set of labeled page elements are collected from online workers. Next, these labels are used to train a set of regularized support vector classification SVMs. These classifiers are then used to identify semantic elements in new pages.
---
Researchers have long envisioned a Semantic Web, where unstructured Web content is replaced by documents with rich semantic annotations. Unfortunately, this vision has been hampered by the difficulty of acquiring semantic metadata for Web pages. This paper introduces a method for automatically “semantifying” structural page elements: using machine learning to train classifiers that can be applied in a post-hoc fashion. We focus on one popular class of semantic identifiers: those concerned with the <em>structure</em> — or information architecture — of a page. To determine the set of structural semantics to learn and to collect training data for the learning, we gather a large corpus of labeled page elements from a set of online workers. We discuss the results from this collection and demonstrate that our classifiers learn structural semantics in a general way.