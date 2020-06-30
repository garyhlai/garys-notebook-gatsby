---
path: "/20200629_1"
date: "2020-06-29"
title: "ML Paper Notes: Attention is All You Need"
author: "Gary Lai"
tags: ["Machinelearning", "Statistics"]
---

<p style="margin-left: 3%; margin-right: 3%; margin-bottom: 5%; margin-top: 3%;"><i>Recently, I have been reading a lot of machine learning papers and thought I would start sharing my notes to (1) back up my notes (2) share my digestion of these papers which might help other people understand. Please refer to the actual paper for details as I only sketch the main ideas here. </i></p>

**Title:**
<u>[Attention is All You Need](https://papers.nips.cc/paper/7181-attention-is-all-you-need.pdf)</u> (2017) Vaswani et al.

**Main Ideas**:
![](/images/20200629_1/transformer1.png)
![](/images/20200629_1/transformer2.png)

**General Experiment Setup:**

First experiment trained on WMT 2014 English-German dataset with 4.5 million sentence pairs (8 NVIDIA P100 GPUs for 100,000 steps or 12 hours).

Second experiment trained on a much larger WMT 2014 English-French dataset with 36M sentences. (8 NVIDIA P100 GPUs for 300,000 steps or 3.5 days).
