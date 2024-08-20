---
title: "Monkey Business: a dataset of large LLM sample collections for math and code tasks"
authors:
  - key: bradleybrown
  - key: jordanjuravsky
  - key: ryanehrlich
  - name: Ronald Clark
    affiliation: University of Oxford
  - name: Quoc V. Le
    affiliation: Google DeepMind
  - name: Christopher Ré
    affiliation: Stanford
  - key: azaliamirhoseini
tags:
  - natural language processing
  - scaling laws
  - generative AI
venue: none
year: 2024
teaser: A monkey maybe solving SWE-bench Lite
materials:
  - name: HF Dataset
    url: https://huggingface.co/datasets/ScalingIntelligence/monkey_business
    type: database
  - name: Codebase
    url: https://github.com/ScalingIntelligence/large_language_monkeys
    type: code
  - name: Paper
    url: https://arxiv.org/abs/2407.21787
    type: file-pdf
---

<h2>TL;DR</h2>

<p>We’re releasing the data and code for our recent paper: <a href="https://arxiv.org/abs/2407.21787">Large Language Monkeys: Scaling Inference Compute with Repeated Sampling</a>. This includes 10,000 LLM-generated samples per problem for a variety of datasets such as GSM8K, MATH, CodeContests, and MiniF2F-MATH, and model families such as Llamma (8B Base/Instruct, 70B), Gemma (2B, 7B), and Pythia (70M-12B)!</p>

<h2>LLMs are smart monkeys at keyboards</h2>

<p>The infinite monkey theorem states: <i>a monkey hitting keys at random on a typewriter keyboard for an infinite amount of time will almost surely type any given text, including the complete works of William Shakespeare.</i></p>

<p>In our recent paper, we propose a modified version of this statement: <i>a LLM sampling a large amount of completions, will generate correct answers for many complex datasets, including resolving real-world GitHub issues on SWE-bench Lite.</i> </p>

<p>Specifically, we show that the number of problems solved using an LLM often increases log-linearly as we scale the number of samples over 4 orders of magnitude for a variety of math and code reasoning datasets, thus demonstrating <strong>inference-time scaling laws for LLMs.</strong></p>

<img src="/imgs/blog/monkeys/coverage.png" alt="Coverage (percent of problems solved by any sample) increases across five code and math reasoning tasks." style="width: 100%; height: auto;">
<p style="text-align: center;">Across five tasks, we find that coverage (the fraction of problems solved by at least one generated sample) increases as we scale the number of samples. Notably, using repeated sampling, we are able to increase the solve rate of an open-source method from 15.9% to 56% on SWE-bench Lite.</p>

<h2>The verification problem</h2>

<p>For tasks with automatic verifiers (ex. formal proof checkers or unit tests for code), we’re done! We can directly benefit from the coverage increases by using a verifier to pick a correct answer from the large number of samples. For other datasets, like natural language math problems, identifying a correct answer is less straightforward. </p>

<p>As an initial investigation for how hard verification is in these settings, we compared three simple baselines against oracle selection (ie. choosing the best solution out of k samples):</p>
<ul>
  <li>Majority voting</li>
  <li>Choosing the sample with the highest score assigned by a reward model</li>
  <li>Majority voting weighted by reward-model scores</li>
</ul>

<img src="/imgs/blog/monkeys/verifiers.png" alt="All three simple verification methods fall well below the oracle upper bound." style="width: 100%; height: auto;">

<p>Although providing some benefit, all three methods saturate before 100 samples, and fall well below the final oracle accuracy. This gap highlights the large room for improvement with the following research direction:</p>

<p style="font-weight: bold;">How do we design verifiers that</p>
<ul style="font-weight: bold;">
  <li>Can recognize correct/incorrect answers for code and math tasks</li>
  <li>Scale to identifying correct solutions out of thousands of samples</li>
</ul>

<p>There has been a lot of great progress benchmarking reward models, but a lot of the effort has been concentrated around chat-based applications, and choosing the best answer from a small number of candidates.</p>

<h2>Monkey Business: A dataset for large sample verification</h2>

<p>As a small first step towards benchmarking verification for reasoning tasks in the large sample setting, we are excited to release <strong>Monkey Business: a dataset of many samples for a variety of tasks and LLMs (+ some LMs!)</strong>.</p>

<p>Specifically, it contains 10,000 correct and incorrect samples per problem for subsets of the following datasets:</p>
<ul>
  <li>GSM8K: 127 randomly sampled problems from the test set (we originally had 128 but identified a problem with an incorrect ground-truth answer which we removed).</li>
  <li>MATH: 128 randomly sampled problems from the test set.</li>
  <li>CodeContests: all 140 problems in the test set that do not contain images in the problem description.</li>
  <li>MiniF2F-MATH: all 130 problems in the MiniF2F set corresponding to formalized MATH questions.</li>
</ul>

<p>These samples are generated with the following models:</p>
<ul>
  <li>GSM8K: Llama3-8b-Instruct, Llama3-70b-Instruct</li>
  <li>MATH: Llama3-8b, Llama3-8b-Instruct, Llama3-70b-Instruct, Pythia 70m-12b, Gemma 2b, Gemma 7b</li>
  <li>CodeContests: Llama3-8b, Llama3-8b-Instruct, Llama3-70b-Instruct, Gemma 2b, Gemma 7b</li>
  <li>MiniF2F-MATH: Llama3-8b-Instruct, Llama3-70b-Instruct</li>
</ul>

<p>We are also releasing our sampling scripts to make it easier to generate large sample collections for other tasks and models. </p>

<p>🤗 Dataset: <a href="https://huggingface.co/datasets/ScalingIntelligence/monkey_business">https://huggingface.co/datasets/ScalingIntelligence/monkey_business</a></p>
<p>💻 Github: <a href="https://github.com/ScalingIntelligence/large-language-monkeys">https://github.com/ScalingIntelligence/large-language-monkeys</a></p>

<p>In addition to training verifiers, we think that this dataset is useful for several other research directions including self-improvement methods and understanding patterns across correct and incorrect samples.</p>

<p>How to cite? If you use our dataset or code, please cite the following paper:</p>

```bibtex
@misc{brown2024largelanguagemonkeysscaling,
      title={Large Language Monkeys: Scaling Inference Compute with Repeated Sampling}, 
      author={Bradley Brown and Jordan Juravsky and Ryan Ehrlich and Ronald Clark and Quoc V. Le and Christopher Ré and Azalia Mirhoseini},
      year={2024},
      eprint={2407.21787},
      archivePrefix={arXiv},
      primaryClass={cs.LG},
      url={https://arxiv.org/abs/2407.21787}, 
}
```