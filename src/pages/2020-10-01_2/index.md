---
path: "/20201001_2"
date: "2020-10-01"
title: "Label Smoothing Explained"
author: "Gary Lai"
tags: ["Machinelearning"]
---

Label smoothing is a very straightforward regularization technique which is explained extremely well on this <u>[page](https://paperswithcode.com/method/label-smoothing)</u>. The basic idea is that when you're training a classifier, using the vanilla one-hot labels may not be the best thing to do because the labels might be wrong e.g. you have a big cat/dog image dataset but some of the labels are wrong. So instead of training using one-hot vectors [1 0], you introduce a small constant ϵ, replace 1 with 1-ϵ and 0 with ϵ/(k-1) respectively where k is the number of classes; therefore in this case, you train with [1-ϵ ϵ].

Notice the elements in the vector always sum up to 1 because you have 1-ϵ + (k-1) \* (ϵ/(k-1)) = 1. The more confident you're about the correctness of the labels, the smaller you should set ϵ. If you wish to read further, this <u>[paper](https://arxiv.org/abs/1906.02629)</u> might be helpful.
