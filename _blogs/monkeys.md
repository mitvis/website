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

<p>We’re releasing the data and code for our recent paper: <a href="https://arxiv.org/abs/2407.21787">Large Language Monkeys: Scaling Inference Compute with Repeated Sampling</a>. This includes 10,000 LLM-generated samples per problem for a variety of datasets (GSM8K, MATH, CodeContests, and MiniF2F-MATH) and model families (Llama-3, Gemma, and Pythia)!</p>

<h2>LLMs are smart monkeys at keyboards</h2>

<p>The infinite monkey theorem states that <i>a monkey hitting keys at random on a typewriter keyboard for an infinite amount of time will almost surely type any given text, including the complete works of William Shakespeare.</i></p>

<p>In our paper, we make LLMs our monkeys, exploring whether they can generate correct answers to real-world math and coding datasets when allowed to make hundreds or thousands of attempts. We find that LLMs exhibit <strong>inference-time scaling laws</strong> where the number of problems solved often increases log-linearly as we scale the number of samples over four orders of magnitude.</p>

<img src="/imgs/blog/monkeys/coverage.png" alt="Coverage (percent of problems solved by any sample) increases across five code and math reasoning tasks." style="width: 100%; height: auto;">
<p style="text-align: center;">Across five tasks, we find that coverage (the fraction of problems solved by at least one generated sample) increases as we scale the number of samples. Notably, using repeated sampling, we are able to increase the solve rate of an open-source method from 15.9% to 56% on SWE-bench Lite.</p>

<h2>The verification problem</h2>

<p>When tasks have tools for automatically verifying candidate solutions (ex. formal proof checkers or unit tests for code), we’re done! We can directly benefit from repeated sampling by using our verifiers to pick out correct answers from large sample collections. However, for other datasets, like natural language math problems, identifying a correct answer is less straightforward. </p>

<p>As an initial investigation for how hard verification is in these settings, we compared three simple baselines against oracle selection (ie. choosing the best solution out of k samples):</p>
<ul>
  <li>Majority voting</li>
  <li>Choosing the sample with the highest score assigned by a reward model</li>
  <li>Majority voting weighted by reward-model scores</li>
</ul>

<img src="/imgs/blog/monkeys/verifiers.png" alt="All three simple verification methods fall well below the oracle upper bound." style="width: 100%; height: auto;">

<p>While all three methods improve performance relative to taking a single sample, their performance saturates before 100 samples and falls well below the final oracle accuracy. This gap highlights the importance of continuing to research verification methods.</p>

<h2>Monkey Business: A dataset of LLM sample collections</h2>

<p>To faciliate verification research in the large sample setting, we are excited to release <strong>Monkey Business: a dataset of sample collections for a variety of tasks and models</strong>.</p>

<p>Specifically, Monkey Business contains 10,000 samples per problem for subsets of the following datasets:</p>
<ul>
  <li>GSM8K: 127 randomly sampled problems from the test set (we originally had 128 but identified a problem with an incorrect ground-truth answer which we removed).</li>
  <li>MATH: 128 randomly sampled problems from the test set.</li>
  <li>CodeContests: all 140 problems in the test set that do not contain images in the problem description.</li>
  <li>MiniF2F-MATH: all 130 problems in the MiniF2F set corresponding to formalized MATH questions.</li>
</ul>

<p>These samples are generated with the following models:</p>
<ul>
  <li>GSM8K: Llama-3-8B-Instruct, Llama-3-70B-Instruct</li>
  <li>MATH: Llama-3-8B, Llama-3-8B-Instruct, Llama-3-70B-Instruct, Pythia 70M-12B, Gemma 2B, Gemma 7B</li>
  <li>CodeContests: Llama-3-8B, Llama-3-8B-Instruct, Llama-3-70B-Instruct, Gemma 2B, Gemma 7B</li>
  <li>MiniF2F-MATH: Llama-3-8B-Instruct, Llama-3-70B-Instruct</li>
</ul>

<p>We are also releasing our sampling and evaluation scripts to make it easier to work with other tasks and models.</p>

<p>🤗 Dataset: <a href="https://huggingface.co/datasets/ScalingIntelligence/monkey_business">https://huggingface.co/datasets/ScalingIntelligence/monkey_business</a></p>
<p>💻 Github: <a href="https://github.com/ScalingIntelligence/large_language_monkeys">https://github.com/ScalingIntelligence/large_language_monkeys</a></p>

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