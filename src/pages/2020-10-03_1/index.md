---
path: "/20201003_1"
date: "2020-10-03"
title: "Transformer Masking Explained"
author: "Gary Lai"
tags: ["Machinelearning", "Python"]
---

The <u>[Transformer](https://arxiv.org/abs/1706.03762)</u>, which is explained quite well by <u>[Jay Alammar's article](http://jalammar.github.io/illustrated-transformer/)</u>, this article is about a very specific component of the Transformer that I was extremely confused about when I was first learning it.

To understand _what_ masking is, it is necessary to understand _why_ masking is necessary in the Transformer by tracing back to the earlier concepts in sequence models.

Perhaps the best way to understand the Transformer (as presented in the original Attention is All You Need paper) is to compare and contrast it with the RNN encoder decoder, which is essentially a conditional language model.

A conditional language model behaves slightly differently during the two stages of its lifecycle: training and inference.

During inference, the conditional language model (encoder decoder) takes (for example) an English sentence as an input, feed it through the encoder, which will generate an encoded vector (called hidden state), which will serve as the initial activation of the decoder network (In a sense, the decoder is like a vanilla language model whose initial activation a<sub>0</sub> is provided by the encoder). Receiving the hidden state vector and the < bos > (beginning of sentence) token, the decoder will predicts its first softmax vector (what it thinks the French word might be at that step, assigning the highest probability to the word it thinks is most likely, which in this case is "bonjour"), then "bonjour" is fed into the next step alongside with the activation (assuming we're taking the greedy decoding approach as opposed to <u>[beam search](https://www.youtube.com/watch?v=RLWuzLLSIgw)</u>), until the < eos > (end of sentence) token is predicted, by which point the French sentence translation would have been generated. Notice the prediction at each step depends on the **previously predicted words**.

<figure style="padding-left: 18%;"> 
    <img src='/images/20201003_1/encoderdecoder.png' alt='encoder decoder' style="padding-bottom:0;"/>
    <figcaption style="padding-left:5%;"><small>(image source: https://d2l.ai/chapter_recurrent-modern/seq2seq.html)</small></figcaption>
</figure>

To get this encoder decoder to the inference stage, where it actually performs the task, we need to first train it. During training, the network behaves slightly differently (which caused much of my confusion when I was first learning it). So during inference, the network is given an English sentence and asked to generated the French translation. During training, the network is given sentence pairs of < English sentence, French translation >.
