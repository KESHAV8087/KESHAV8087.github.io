---
title: "Mitigating Hallucinations in Large Language Models"
excerpt: "Investigating deterministic frameworks for RAG-based AI systems."
header:
  teaser: /assets/images/research-teaser.jpg # Optional: Add a thumbnail later
---

### The Problem
As LLMs are integrated into production environments, **non-deterministic outputs** and **hallucinations** pose significant risks, especially in technical or medical domains.

### My Approach
I am researching methods to ground model outputs using **Retrieval-Augmented Generation (RAG)** and custom evaluation metrics. Key areas of focus include:
* **Contextual Injection:** Optimizing prompt engineering to limit the model's "creative" freedom.
* **Verification Layers:** Implementing secondary models to cross-reference facts against a trusted knowledge base.

### Tech Stack
* **Languages:** Python
* **Tools:** PyTorch, LangChain, Pinecone (Vector DB)
