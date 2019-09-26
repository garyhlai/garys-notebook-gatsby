---
path: "/20190822_1"
date: "2019-08-22"
title: "Making Sense of AI on Blockchain: Part 2"
author: "Gary Lai"
tags: ["AI", "Machinelearning", "Blockchain"]
---

In the first article of this series, I introduced the lifecycle of AI (which consists of training and inference) and discussed blockchain use cases for AI inferences. If you are not familiar with what these terms mean, I suggest reading my first article before this one.

In this article, I will talk about how we can leverage the properties of blockchain for AI training, specifically for the data collection part. The idea is not to give an exhaustive list of AI + blockchain use cases but rather to show in a no-bullshit way that blockchain has some actual use cases for AI and that this space of intersection deserves closer attention.

To recap, “training” an AI model is analogous to writing a program in traditional programming, except in this case, instead of writing many lines of code that tell the computer what to do explicitly, you write only a few lines of code and leverage statistics and probability to “teach” the computer what to do, and the raw materials you use to do so is data.

There exist many different types of machine learning algorithms (supervised, unsupervised, reinforcement etc.) whose training process are slightly different. You could also watch this video for a quick introduction. For now though, just know you need data to train a machine learning model.

<h3>DATA</h3>

Data are essential to machine learning. Just like the more books you read on a subject, the more knowledgeable you become, the more data your program has, the better it can get. Decent models with lots of data can often outperform great models with little data. Here is where blockchain comes in, because blockchain, in its essence, is just a distributed database that is open, transparent and immutable.

**Use Case #1: Data Common**<br/>

Nowadays, many people share datasets on the Internet in places such as Github or Kaggle for free in the spirit of the open-source community - this data common has greatly benefitted data scientists around the world working on all sorts of different projects. Here are two ways in which blockchain can help push this trend even further.

First, sharing data on the blockchain makes them truly public and censorship-resistant. Sure people could share datasets on Github or Kaggle, but if one day they decide to take down these datasets for some reason, these data will no longer be available to the world. Alternatively, if a government decides to censor or monopolize certain datasets already published, they could also force the removal of these datasets. Data shared on the blockchain, on the other hand, cannot be taken down. Once they are published on the blockchain, no entity can remove them since no one has ownership over the blockchain. The only way to remove a dataset is to destroy all the computers in the world running the network, or carry out a 51% attack (extremely difficult to do). In addition, whistleblowers can remain anonymous as they publish data on the blockchain, encouraging further sharing of data.

Furthermore, network rewards can be put in place on the blockchain to encourage people who share their datasets on the blockchain. When people share quality datasets, they are rewarded in cryptocurrencies. This incentive mechanism will certainly drive more people to supply more data to the data common, thereby fueling the development of better AI algorithms.

**Use Case #2: A P2P Data Marketplace**<br/>

Besides the data common, blockchain also enables the buying and selling of data. There are two ways in which blockchain can come to help.
First is to facilitate the financial transaction of the data exchange in a trustless way. After you pay, smart contracts ensure that you will receive the data. You do not need to worry about whether the seller will indeed send you the data after the payment - the transaction is automatic and publicly verifiable on the blockchain. In addition, you can stay anonymous throughout the transaction. There is no need to enter your credit card information and thereby, ironically, giving away more of your data.

However, one caveat about this use case is that if you are the seller of data, once you sell the data, you no longer have ownership over them. People can copy these data and sell them to whoever else. Here is where another innovative use case comes in: Blockchain can bring compute to the data instead of the other way around, allowing people to “rent” out their data instead of selling them.

What does this mean?

Usually, when you train AI models, you bring the data to the models: You download the data onto your computer and train your models on those data. However, this mechanism makes people reluctant to give their data to you, because when you have a copy of their data on your computer, all those data are visible to you (undesirable for datasets with private information), and also you can just make another copy and sell to someone else.

Blockchain, on the other hand, **can enable bringing models to the data.**

Imagine that you are an AI developer, you have a model but lack the data to train it. Amy comes to you and says that she has the data and that if you pay her a certain amount of cryptocurrency, you can train the model on her data.
So you make a payment, send the model over, it gets trained on her data, and then the trained model is returned to you. The whole process is facilitated and escorted by smart contracts. Throughout the process, her data stay invisible to you, yet you end up with a better model. (One project known to work on something this is the Ocean Protocol.)

This models-to-data mechanism can also be leveraged for people to sell data real-time. You could sell, for example, your location data for 30 days without revealing your identity.

For example, Google, who wants to train a traffic prediction model for Google Map, can train their models on your location data without being able to actually see your location, and pays you a small amount of cryptocurrency to your anonymous blockchain address. Apple can train the NLP model of Siri without actually hearing you - you will not need to be worried about Apple contractors hearing the most confidential details of your life.

Hence, blockchain has enabled an infrastructure where people with valuable data are incentivized to “rent out” their data as a source of income and allowed AI developers to have access to more and more data.

So here you go, hopefully blockchain’s use cases for AI have come to make a little more sense now. We focused mostly on the data collection part of the AI training process in this article. In the last article of this series, I will focus more on blockchain’s use for the actual training of AI algorithms. Stay tuned!
