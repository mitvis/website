---
title: 'Constitutional AI: Harmlessness from AI Feedback'
authors:
  - name: Yuntao Bai
  - name: Saurav Kadavath
  - name: Sandipan Kundu
  - name: Amanda Askell
  - name: Jackson Kernion
  - name: Andy Jones
  - name: Anna Chen
  - name: Anna Goldie
  - key: azaliamirhoseini
  - name: Cameron McKinnon
  - name: Carol Chen
  - name: Catherine Olsson
  - name: Christopher Olah
  - name: Danny Hernandez
  - name: Dawn Drain
  - name: Deep Ganguli
  - name: Dustin Li
  - name: Eli Tran-Johnson
  - name: Ethan Perez
  - name: Jamie Kerr
  - name: Jared Mueller
  - name: Jeffrey Ladish
  - name: Joshua Landau
  - name: Kamal Ndousse
  - name: Kamile Lukosuite
  - name: Liane Lovitt
  - name: Michael Sellitto
  - name: Nelson Elhage
  - name: Nicholas Schiefer
  - name: Noemi Mercado
  - name: Nova DasSarma
  - name: Robert Lasenby
  - name: Robin Larson
  - name: Sam Ringer
  - name: Scott Johnston
  - name: Shauna Kravec
  - name: Sheer El Showk
  - name: Stanislav Fort
  - name: Tamera Lanham
  - name: Timothy Telleen-Lawton
  - name: Tom Conerly
  - name: Tom Henighan
  - name: Tristan Hume
  - name: Samuel R. Bowman
  - name: Zac Hatfield-Dodds
  - name: Ben Mann
  - name: Dario Amodei
  - name: Nicholas Joseph
  - name: Sam McCandlish
  - name: Tom Brown
  - name: Jared Kaplan

venue: preprint
year: 2022
has_pdf: false
doi: 2212.08073v1
tags:
  - natural language processing
  - generative AI
  - highlight
teaser: Imagine an AI that polices itself to ensure it remains helpful and safe. Our approach, called Constitutional AI, trains an AI assistant through a two-phase process. First, it learns from itself by generating and revising its own responses. Then, it refines its performance through reinforcement learning based on feedback from its own evaluations. This method not only improves the AI’s ability to handle sensitive queries but also requires minimal human oversight, making it a powerful tool for creating AI systems that are both effective and secure.
materials:
  - name: Constitutional
    url: https://arxiv.org/pdf/2212.08073
    type: link
---
As AI systems become more capable, we would like to enlist their help to supervise other AIs. We experiment with methods for training a harmless AI assistant through selfimprovement, without any human labels identifying harmful outputs. The only human oversight is provided through a list of rules or principles, and so we refer to the method as ‘Constitutional AI’. The process involves both a supervised learning and a reinforcement learning phase. In the supervised phase we sample from an initial model, then generate self-critiques and revisions, and then finetune the original model on revised responses. In the RL phase, we sample from the finetuned model, use a model to evaluate which of the two samples is better, and then train a preference model from this dataset of AI preferences. We then train with RL using the preference model as the reward signal, i.e. we use ‘RL from AI Feedback’ (RLAIF). As a result we are able to train a harmless but nonevasive AI assistant that engages with harmful queries by explaining its objections to them. Both the SL and RL methods can leverage chain-of-thought style reasoning to improve the human-judged performance and transparency of AI decision making. These methods make it possible to control AI behavior more precisely and with far fewer human labels.
