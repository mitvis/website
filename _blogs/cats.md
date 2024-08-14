---
title: "CATS Blog"
authors:
  - key: je-yong
  - key: lukelee
  - name: Genghan Zhang
    affiliation: Stanford University
  - name: Mo Tiwari
    affiliation: Stanford University
  - key: azaliamirhoseini
venue: colm
year: 2024
doi:
tags:
  - natural language processing
  - generative AI
teaser: The human brain operates with remarkable energy efficiency, despite its complexity. Usually, a human brain activates only a sparse array of neurons at any given moment. Do state-of-the-art large language models (LLMs) behave similarly? Until recently, the answer was no. They typically exhibit over 99% non-zero activations during inference. However, our recent research unveils a surprising observation, LLMs activations are intrinsically sparse.
materials:
  - name: CATS
    url: https://github.com/ScalingIntelligence/CATS
    type: code
---

> **🎉 We are thrilled to announce that our paper has been accepted for presentation at [COLM 2024](https://colmweb.org/index.html)!**

## **Human Brains Versus LLMs**

<img src="https://file.notion.so/f/f/9bb00a01-186d-40b1-9d49-bc2a97f6435a/ee1a8be4-67f3-4149-a00b-1b7223318dd4/Untitled.png?table=block&id=7a2eedfc-fcb9-4b96-9073-dd916689b4a6&spaceId=9bb00a01-186d-40b1-9d49-bc2a97f6435a&expirationTimestamp=1723651200000&signature=jl2aBOkCf1cHh2heKKc4VS0eXG49hmS6A-HCunfgb-E&downloadName=Untitled.png" alt="Untitled" style="width: 100%; height: auto;">

The human brain operates with remarkable energy efficiency, despite its complexity. Usually, a human brain activates only a sparse array of neurons at any given moment. Do state-of-the-art large language models (LLMs) behave similarly? Until recently, the answer was no: they typically exhibit over 99% non-zero activations during inference. However, our recent research unveils a surprising observation: LLMs activations are intrinsically sparse.

In our work, we introduce CATS, a simple post-training technique that achieves 50% activation sparsity for MLP layers with a negligible drop in downstream evaluations. CATS requires little to no finetuning of existing LLMs. We leverage this newfound sparsity to achieve 15% improvement in end-to-end generation latency for both Mistral-7B and Llama-7B models using custom GPU kernels.

## Early LLMs Were Sparse

The choice of activation function is crucial in neural networks and determines when a neuron should activate in response to incoming signals. Activation functions inject indispensable non-linearities to the model; without them, a neural network is equivalent to linear regression.

<img src="https://file.notion.so/f/f/9bb00a01-186d-40b1-9d49-bc2a97f6435a/658c50bd-f78a-4390-9876-c41f3405c5ae/Untitled.png?table=block&id=3c390e6b-89ef-40de-986d-02ac0ab3a52b&spaceId=9bb00a01-186d-40b1-9d49-bc2a97f6435a&expirationTimestamp=1723651200000&signature=tLuLQ_QQUagF8bOE2n-hVheBuomG7m3ttiQrbBxP9EY&downloadName=Untitled.png" alt="Untitled" style="width: 100%; height: auto;">

The ReLU activation function is popular for its simplicity and effectiveness. It operates on a clear principle: positive inputs are unaltered, while negatives are zeroed out. This creates a sparse network in which a majority of neurons lie dormant and drastically reduces computational costs. Models like GPT-2 and OPT-3 have cleverly utilized ReLU to achieve up to 85% sparsity to combine speed and efficiency in a way that mirrors the activity of the human brain.

## **Are New LLMs Sparse Too?**

More complex, recently-developed activation functions, however, elicit different behavior. The SwiGLU (Sigmoid-Weighted Linear Unit) activation, used by newer LLMs like Llama and Mistral, adapts its response dynamically and ensures almost continuous activation across the network; nearly 99.9% of neurons are activated. This power comes at a cost: the loss of the elegant sparsity seen with ReLU.

The quest to reinstate this sparsity led to initiatives like “[ReLU Strikes Back](https://arxiv.org/abs/2310.04564)”, which aimed to retrofit SwiGLU-equipped models with ReLU. This approach, however, required excessive fine-tuning and consumed 30 billion tokens to match previous performance benchmarks. Such work highlights an open research question: **can we restore sparsity in state-of-the-art language models that use more complex activation functions?**

<img src="https://file.notion.so/f/f/9bb00a01-186d-40b1-9d49-bc2a97f6435a/6bfe248b-a2c2-49ba-8a70-e5a551aed455/Untitled.png?table=block&id=d14d0e95-4f31-42c0-8481-da602a85779a&spaceId=9bb00a01-186d-40b1-9d49-bc2a97f6435a&expirationTimestamp=1723651200000&signature=kcMWQ8PY3sE91ErFxrmWrw64xumqRzg7LNaFfESAtPE&downloadName=Untitled.png" alt="Untitled" style="width: 100%; height: auto;">

But what if the key to unlocking this efficiency has been lurking within the models all along? Our observations revealed a curious pattern: activations in Gated-MLP layers consistently cluster "near" zero. This nuanced -- yet significant -- behavior indicates that many weights in these layers have minimal impact on the results and suggests potential approaches.

## **CATS: Reclaiming Activation Sparsity**

The SwiGLU activation applies the SiLU activation function to one set of transformed inputs, then multiplies this result with another transformed set of inputs. The use of SiLU is where the typical sparsity of activations is lost (in contrast with ReLU).

In our approach, we introduce a novel activation function to replace SiLU designed to reclaim activation sparsity in MLP layers of large language models efficiently. The design of our novel activation function proceeds in two steps: determining values below which activations can be zeroed out and then dynamically zeroing these activations during inference.

<img src="https://file.notion.so/f/f/9bb00a01-186d-40b1-9d49-bc2a97f6435a/e1d53b94-544e-4def-9858-d2d665279fe2/Untitled.png?table=block&id=5115c3b7-5625-43c2-b6ac-1be3006c5a37&spaceId=9bb00a01-186d-40b1-9d49-bc2a97f6435a&expirationTimestamp=1723651200000&signature=dCvF4ASJdEWJGU_eMeoq33596jVCGB_Ww3I9n5sV8i8&downloadName=Untitled.png" alt="Untitled" style="width: 100%; height: auto;">

1. Establishing a Percentile Threshold: The first step of our approach involves determining a specific percentile threshold for each MLP layer. This threshold is critical as it dictates the point below which activations will be considered insignificant and thus set to zero. We establish this threshold by analyzing activation patterns within a small subset of the RefinedWeb Dataset. This analysis is performed offline to ensure that our threshold settings are robust and effective without the need for real-time computation.
2. **Zeroing Out Small Activations**: Once the thresholds are established, we apply them across the MLP layers during the model's operational phase. Any activation whose absolute value falls below the determined threshold is zeroed out.

In contrast with prior work, we minimally alter the existing activation function and only zero out negligible values. This adjustment leads to a marginal decrease in zero-shot performance without any fine-tuning. In our work, however, we also show that we can reclaim downstream task performance via minimal, parameter-efficient fine-tuning.

## **Leveraging Sparsity for Performance**

Previous work has shown that optimizing for FLoPS does not necessarily lead to wall-clock inference time improvements. To harness the sparsity achieved by our CATS method for inference gains, we utilize a custom GPU kernel tailored for Gated-MLP blocks in large language models. In a Gated-MLP block, two weight tensors $W_\text{up}$ and $W_\text{down}$ follow $W_\text{gate}$.

<img src="https://file.notion.so/f/f/9bb00a01-186d-40b1-9d49-bc2a97f6435a/ed25fec5-1070-4992-9797-213423ef7705/Untitled.png?table=block&id=5f4a8d61-159b-4dd1-9c8a-5846fe1941b5&spaceId=9bb00a01-186d-40b1-9d49-bc2a97f6435a&expirationTimestamp=1723651200000&signature=0qSkM4VMVNUMVTCEMSKKXpjsi2NeRy3Ui4zAwv5318M&downloadName=Untitled.png" alt="Untitled" style="width: 100%; height: auto;">

With the CATS activation function, we can think of $W_\text{gate}$ as a "router" and the columns/rows of $W_\text{up}$ and $W_\text{down}$ as "experts". The router $W_\text{gate}$ chooses the most relevant experts based on the input characteristic and skips many of the weights in $W_\text{up}$ and $W_\text{down}$, thereby bypassing unnecessary computations.

This streamlined process is supported by our custom GPU kernel, which efficiently handles the loading and computing of only the essential weights from $W_\text{up}$ and $W_\text{down}$.

<img src="https://file.notion.so/f/f/9bb00a01-186d-40b1-9d49-bc2a97f6435a/af317c81-53ea-43d4-9f45-cc01ed425164/Untitled.png?table=block&id=3fa914ea-06ff-40d0-b376-e1897569385f&spaceId=9bb00a01-186d-40b1-9d49-bc2a97f6435a&expirationTimestamp=1723651200000&signature=ksHtZvJwoirvV7pNClHnyrKj82xEzqEP4Lo-YiEV-BE&downloadName=Untitled.png" alt="Untitled" style="width: 100%; height: auto;">

The kernel is designed to minimize memory access, which in turn reduces the inference time for the MLP. Since MLP computations are primarily limited by communication costs rather than computation costs, this optimization is crucial. Furthermore, the kernel makes memory use more efficient and accelerates processing by fusing operation. Additionally, we employ a binary mask to manage the activation of experts, streamlining the process by replacing complex indexing mechanisms with a simpler, faster alternative.

## Efficiency and Performance Analysis

CATS significantly preserves the zero-shot capabilities of the base model across various benchmarks. Remarkably, it achieves this without any fine-tuning, showing a modest performance reduction of only about 1.5% in 8 evaluations even at 50% sparsity. With minimal, parameter-efficient fine-tuning, CATS delivers performance comparable to the original model at the same sparsity level.

<img src="https://file.notion.so/f/f/9bb00a01-186d-40b1-9d49-bc2a97f6435a/b5332215-4b78-46c3-b493-f574e4c9c07b/Untitled.png?table=block&id=7b425d28-c23a-47b3-9c72-5021429a1b07&spaceId=9bb00a01-186d-40b1-9d49-bc2a97f6435a&expirationTimestamp=1723651200000&signature=4VmtfM8iFgOWfthTzIRVZdu-9IuZF9jXVuOmJD8crak&downloadName=Untitled.png" alt="Untitled" style="width: 100%; height: auto;">
Moreover, directly fine-tuning CATS on a downstream task shows that it nearly retains the performance of the original model.

<img src="https://file.notion.so/f/f/9bb00a01-186d-40b1-9d49-bc2a97f6435a/0d1ce1e8-b286-477b-b3ff-7f95f275c921/Untitled.png?table=block&id=07876ec8-9c54-46d0-be78-6f216a122041&spaceId=9bb00a01-186d-40b1-9d49-bc2a97f6435a&expirationTimestamp=1723651200000&signature=XYXVM5xKk-Qz9WTN5bf6I085qjcZED0daQ8NSBE1gOM&downloadName=Untitled.png" alt="Untitled" style="width: 100%; height: auto;">
Finally, CATS improves the computational efficiency of an MLP layer by at least 40%, which significantly enhances the overall throughput by 15% during token generation.

<img src="https://file.notion.so/f/f/9bb00a01-186d-40b1-9d49-bc2a97f6435a/c4829258-c9d9-480c-ac88-8a9710f2c169/Untitled.png?table=block&id=ffccbdee-ed29-4bcd-ab33-f6c031b15ac7&spaceId=9bb00a01-186d-40b1-9d49-bc2a97f6435a&expirationTimestamp=1723651200000&signature=nHrKI4Fio2kRMVRX3YckCBPj6isrFVA8kHJM5Ic39-M&downloadName=Untitled.png" alt="Untitled" style="width: 100%; height: auto;">

## Conclusions

Our research reveals that LLMs are naturally "nearly" sparse. With this insight, we propose CATS, which capitalizes on this near-sparsity to significantly boost efficiency. CATS effectively maintains high performance with minimal adjustments and notably increases throughput, showcasing sparsity as a key lever for optimizing computational resources in AI systems. This advancement will hopefully pave the way for more sustainable and efficient LLM operations.

For a deeper dive into our methodology and findings, please see [our paper](https://arxiv.org/pdf/2404.08763). You can also find the code for CATS on our [GitHub repository](https://github.com/ScalingIntelligence/CATS).  
