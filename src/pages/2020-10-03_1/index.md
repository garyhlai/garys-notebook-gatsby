---
path: "/20201003_1"
date: "2020-10-03"
title: "Transformer Masking Explained"
author: "Gary Lai"
tags: ["Machinelearning", "Python"]
---

The <u>[Transformer](https://arxiv.org/abs/1706.03762)</u> is a landmark breakthrough in NLP that is explained quite well by Jay Alammar's article <u>[The Illustrated Transformer](http://jalammar.github.io/illustrated-transformer/)</u>. This article is about masking, a very specific component of the Transformer that I was extremely confused about when I was first learning it.

To understand **what** masking is, it is necessary to understand **why** masking is necessary in the Transformer by tracing back to the earlier concepts in sequence models.

Perhaps the best way to understand the Transformer (as presented in the original Attention is All You Need paper) is to compare and contrast it with the RNN encoder decoder, which is essentially a conditional language model.

A conditional language model behaves slightly differently during the two stages of its lifecycle: **training** and **inference**.

During inference, the conditional language model (encoder decoder) takes an English sentence as an input, feed it through the encoder, which will generate an encoded vector (called hidden state), which will serve as the initial activation of the decoder network (In a sense, the decoder is like a vanilla language model whose initial activation a<sub>0</sub> is provided by the encoder). Receiving the hidden state vector and the < bos > (beginning of sentence) token, the decoder will predicts its first softmax vector (what it thinks the French word might be at that step, assigning the highest probability to the word it thinks is most likely, which in this case is "bonjour"), then "bonjour" is fed into the next step alongside with the activation (assuming we're taking the greedy decoding approach as opposed to <u>[beam search](https://www.youtube.com/watch?v=RLWuzLLSIgw)</u>), until the < eos > (end of sentence) token is predicted, by which point the French sentence translation would have been generated. Notice the prediction at each step depends on the **previously predicted words**.

<figure> 
    <img src='/images/20201003_1/encoderdecoder.png' alt='encoder decoder' class="center"/>
    <figcaption class="center"><small>(image source: https://d2l.ai/chapter_recurrent-modern/seq2seq.html)</small></figcaption>
</figure>

To get this encoder decoder ready for the inference stage, where it actually performs the task, we need to first train it. The network behaves slightly differently in the training vs. inference stage (which caused much of my confusion when I was first learning it): During inference, the network is given **an English sentence** and asked to generated the French translation. During training, the network is also given an English sentence and asked to generate the French translation, except that during the decoding (translation), the decoder **has access to the answer** - the training examples are **sentence pairs of < English sentence, French translation >**. This is an important nuance: while the decoder compares its predicted softmax to the actual word at each step to determine the loss for backpropagation, it doesn't use the softmax as the input to the step of decoding; instead it uses the **actual word**.

As an example, during the training, an English sentence "hello world." is fed into the encoder, which generates a hidden state vector. At the first step of the decoder, the network generates a softmax prediction vector, then instead of choosing the most likely French word predicted from that softmax vector as the input to the next step (like during inference), the network inputs **the actual first word** instead of the **predicted word** into the next step, because recall that now, the network has access to the answer.

Let's say the training sentence pair is < "hello world", "bonjour le monde" >, and our decoder, after reading the hidden state vector generated from the encoder which reads "hello world", determines a softmax vector that gives the highest probability to "au revoir". The next step does not use "au revoir" as its input at all; instead it will use "bonjour". In other words, each step of the decoder doesn't really know anything about the **softmax prediction** made in the steps before it; it only knows what **actual words** is before it. Try to convince yourself that this is true.

OK, enough review. Enter the Transformer.

<figure> 
    <img src='/images/20201003_1/transformer.png' alt='transformer' class="center" />
    <figcaption class="center"><small>(image source: https://arxiv.org/abs/1706.03762)</small></figcaption>
</figure>

I won't go into much detail here but the Transformer can be thought of a set function, where it takes an input English sentence and for each word in the sentence, replaces the word vector with a weighted average of every word in the sentence (depending on the relative attention that word should pay to each of the other words in the sentence) as the output, and it does so in parallel. This is an important improvement of the Transformer over RNN for two reasons:

(1) Every word can attend to every other word in the sentence directly instead of indirectly as in the case of RNNs (or bidirectional RNNs).

(2) The parallel computation replaces recurrence, which was costing a huge amount of training time and computation power.

**Wait, but what is masking and why do we need it again?**

OK, so similar to RNN, during the decoding phase of the Transformer, at each step, we want the network to take a look at the actual French words before that step and output a softmax prediction for what it thinks the next word is. In RNN, the network does this sequentially, word by word, it looks at "le" and the activation accumulated from all of the previous French words in order to output the softmax prediction. However, the Transformer attends to **every word** in the sentence, so here at the 3rd step, it will see the entire sentence: "bonjour", "le", "monde". It becomes trivial for the network to predict the next word - it will simply learn to put 100% attention to the word after it. But this is cheating, it won't learn anything really, because during **inference**, it won't have the answer (the entire French sentence) available to it and it'll be useless.

This is why we need to apply masking - we don't want each word in the decoder to see the words that come after it. The way we do that is by setting the attention paid to the subsequent words to 0. The paper describes this as setting the scaled dot-product attention to −∞, which essentially makes the attention weight (a softmax vector) 0, because e^(−∞) = 0.

This way, the decoder can't see cheat by paying all of the attention to the immediate next word and will allow the Transformer's full advantages to take effect!
