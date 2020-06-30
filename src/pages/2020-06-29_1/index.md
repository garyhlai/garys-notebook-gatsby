---
path: "/20200629_1"
date: "2020-06-29"
title: "ML Paper Notes: Generative Adversarial Nets"
author: "Gary Lai"
tags: ["Machinelearning", "GAN"]
---

<p style="margin-left: 3%; margin-right: 3%; margin-bottom: 5%; margin-top: 3%;"><i>Recently, I have been reading a lot of machine learning papers and thought I would start sharing my notes to (1) back up my notes (2) share my digestion of these papers which might help other people understand. Please refer to the actual paper for details as I only sketch the main ideas here. </i></p>

**Title:**
<u>[Generative Adversarial Nets](http://papers.nips.cc/paper/5423-generative-adversarial-nets.pdf)</u> (2014), Goodfellow et al

**Main Ideas:**

You have two neural nets - a generative and a discriminative one. The generative net tries to generate fake data indistinguishable from the real data (i.e. match its distribution with real data’s distribution). You feed the fake data and real data into the discriminative net, which decides whether the data is real or fake.

Formally, the generator G(z;θg) takes random noise z as an input and generate a fake data point as the output, the discriminator D(x; θd) takes a data point (real or fake) as an input as output a probability that the input is a real data point.

The objective function:

![](/images/20200629_1/gan.png)

When x is from the real data’s distribution, D(x) wants to maximize its output and thus maximizing log(D(x)) and V.

When x is from the fake data’s distribution, D(G(z)) wants to minimize its output (because G(z) is fake data) and thus maximizing log(1-D(G(z))) and V. Meanwhile, G wants to maximize D(G(z)) as to fool the discriminator and thus minimizing log(1-D(G(z))) and V.

Hence, D wants to maximize V while G wants to minimize V.

**General Experiment Setup:**

The training algorithm is such

```python
For each training step:
    For k steps (k is a hyperparameter and set to 1 here):
        Generate m fake data
        Sample m real data
        Perform stochastic gradient ascent on V with respect to θd (to maximize V)
    Sample m fake data
    Perform stochastic gradient descent on V with respect to θg.
```

Global optimal is at p<sub>g</sub> = p<sub>data</sub>

The paper trained GANs on MNIST, Toronto Face Database and CIFAR-10, using a mixture of ReLu and sigmoid activation for generator net and maxout activation for discriminator net.

**Questions:**

Can GANs be used for prediction tasks using Bayes’ Rule?
