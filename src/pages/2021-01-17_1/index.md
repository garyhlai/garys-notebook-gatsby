---
path: "/20210117_1"
date: "2021-01-17"
title: "BERT: A Detailed Guide to Clear Up All Your Confusions"
author: "Gary Lai"
tags: ["Machinelearning", "Python", "NLP"]
---

### Pre-requisites

- Understanding of Transformer, especially how masking works. (strongly recommend Jay Alammar's article [The Illustrated Transformer](http://jalammar.github.io/illustrated-transformer/) and if you're still confused about masking, read my article [here](https://www.garysnotebook.com/20201003_1).)
- This guide alone will give you a general idea of how BERT works , but it should be more useful to you if you read to the [original paper](https://arxiv.org/abs/1810.04805) either alongside or after the guide.

<br/>

### What is BERT?

Bidrectional Encoder Representation from Transformers (BERT) is a transformer-based model. It is designed such that it’s easy to train a general-purpose pre-trained model, on top of which you would then attach an output layer to fine-tune for your specific downstream task.

It is important to note that words like “pre-trained BERT model” can be super confusing because the word “model” in ML is used to refer to two things:

(1) the model architecture (e.g. CNN, RNN, Transformer)

(2) one particular instance of the model, trained on a particular set of data (e.g. WMT, Wikipedia datasets) with a particular set of parameters (e.g. number of attention heads, model size) and hyperparameters (e.g. learning rate, type of optimizers).

In the original BERT paper, [BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding (2019) Devlin et al](https://arxiv.org/pdf/1810.04805.pdf), they introduced the "BERT model” in both senses. They first introduced the BERT model architecture (which is great for training models that are meant to be used as pre-trained models in the transfer learning context), then they went on to train a BERT model using the BookCorpus (800M words) and English Wikipedia (2,500M words) dataset.

By attaching an output layer to this pre-trained BERT model and then fine-tuning, they were able to achieve SOTA results on 11 different NLP tasks.

<figure> 
    <img src='/images/20210117_1/using-bert.png' alt='using-bert' class="center" />
    <figcaption class="center"><small>(image source: http://jalammar.github.io/illustrated-bert/)</small></figcaption>
</figure>

Google has open-sourced BERT model in both sense of the word too. If you go to the [repo](https://github.com/google-research/bert), you will see that it contains both the code for the BERT model architecture and pre-trained checkpoints from the paper.

<br/>

### Why is BERT a big deal?

#### BERT the architecture 

- It is designed specifically for training models to be used as pre-trained models - good news for transfer learning, which is extremely important for building practical ML applications
- It is unsupervised - the data we can feed to it is abundant!
- It is bidirectional - it can understand the context better and therefore perform better on different NLP tasks

#### BERT the pre-trained model released by Google

- In the words of Google, leveraging the pre-trained BERT model, “anyone in the world can train their own state-of-the-art question answering system (or a variety of other models) in about 30 minutes on a single Cloud TPU, or in a few hours using a single GPU.”

<br/>

### How does BERT work?

First, BERT really just uses the Encoder portion of the Transformer.

To (pre-)train a BERT model, we go through two steps:

- MLM
- Next sentence prediction

<h4><u>MLM</u></h4>

#### Bidirectional Conditioning Before BERT

Before BERT, language model training can only be done uni-directionally. It was not possible to train Transformer bi-directionally because "bidirectional conditioning would allow each word to in- directly 'see itself', and the model could trivially predict the target word in a multi-layered context". In other words, masking would not be effective at all in when training a traditional transformer bidirectionally.

(If you're  interested in the exactly why this is, see the Appendix for a detailed walkthrough, but if you just believe the authors of the paper, let's move on.)

_So how does BERT solve this problem?_

#### Bidirectional Conditioning with BERT

Instead of doing the masking in the attention layer by assigning 0 weight/attention to the value vector (recall the Transformer essentially just replace each input token with a weighted average of each token's value vector), BERT does the masking in the input layer. This makes it impossible for the Transformer to see the masked token - even the input is masked!

<figure style="display:inline-block; width:45%;"> 
    <img src='/images/20210117_1/unidirectional-conditioning.png' alt='unidirectional-conditioning' class="center"/>
    <figcaption class="center"><small>uni-directional language model training</small></figcaption>
</figure>

<figure style="display:inline-block; width:45%; margin-left:5%;"> 
    <img src='/images/20210117_1/bidirectional-conditioning.png' alt='bidirectional-conditioning' class="center"/>
    <figcaption class="center"><small>bi-directional language model training</small></figcaption>
</figure>

<u>Here's how exactly the masking is done, according to the [paper](https://arxiv.org/pdf/1810.04805.pdf):</u>

"If the i-th token is chosen, we replace the i-th token with <br />
<br />
(1) the \<MASK> token 80% of the time <br />
(2) a random token 10% of the time <br />
(3) the unchanged i-th token 10% of the time. "

<u>Here's my intuition on why the masking is done this way:</u>

Masking method (1) is a very effective mask technique, imagine if you train a young child who is just learning to speak this way (i.e. cover a word in the middle of the sentence and have he or she guess what the covered word is), the child would probably get very good at guessing over time and in the process get a much better sense of the English language in general.

However, we're dealing with machines here, if we only had (1), we would have a mismatch between training and inference, because during inference we would never get a <MASK> token as the input in any NLP task. Therefore, we need masking method (2) and (3) to mimic the real dataset.

Intuitively, (2) and (3) make up another word game where you're pointing to a word and have the machine guess whether that word is supposed to be there, based on the context. Let's say the real sentence is "I have an ant on my arm" and the fourth token is chosen to be masked.

Method (2) would give: \<I>\<have>\<an>\<planet>\<on>\<my>\<arm> <br />
Method (3) would give: \<I>\<have>\<an>\<ant>\<on>\<my>\<arm>

The machine would either see the sentence given by method (2) or (3), but **it doesn't know which one!**

If only method (3) is used, it would be easy; the machine would figure out it can always guess the identity and be correct. That's why we have method (2), the machine knows that it can't just predict the identity - it would have to really look at the surrounding words to decide whether to predict the identity or a different word.

<h4><u>Next Sentence Prediction</u></h4>

While MLM trains BERT to understand **intra-sentence** relationship, Next Sentence Prediction trains BERT to understand **inter-sentence** relationship, which is important for downstream tasks such as Question Answering (QA) and Natural Language Inference (NLI).

You have

[Sentence A, sentence B]

50% of the time, sentence B is the actual sentence that follows A. The other 50% of the time, sentence B is just a random sentence from the corpus.

<figure> 
    <img src='/images/20210117_1/is-next-prediction.png' alt='isNext Prediction' class="center" width="70%"/>
    <figcaption class="center"><small>isNext prediction (image source: https://arxiv.org/pdf/1810.04805.pdf)</small></figcaption>
</figure>

You insert a token \<C> at the beginning of sentence pairs, which should map to an embedding, then you attach a logistic regression head to it. The head should output whether isNext is true or false.

### Fine-tuning BERT for downstream task

After you pre-train BERT on MLM and next sentence prediction, you should have a model which has a very good sense of the language you're training for. Now, you just need to fine-tune it for your downstream task.

To use a BERT model for our final downstream task, there are two ways:

- Fine-tune
- BERT as feature-based approach (set function)

That's the general idea of BERT! There are of course many details in the implementation but these should answer a lot of your confusions.

### Appendix

_"Bidirectional conditioning would allow each word to in- directly 'see itself', and the model could trivially predict the target word in a multi-layered context"._

The key is in "multi-layer context".

Let's consider training a language model bidirectionally with a Transformer. Recall that the a masked Transformer encoder layer is like a set function where given n input tokens, it would replace each of the n tokens with the weighted average of all the tokens before it, thus outputting n embeddings.

Now, during bidirectional conditioning, you would first do a forward pass from left to right, where at token t, you would mask all the tokens from t rightward until the end of the sentence and thereby assigning zero weight/attention to them. In the illustration below, the w_t represents how much weight/attention we assign to the token; the absence of arrows means 0 weight. In this example, we're given \<I>, \<have>, \<an> and asked to predict the word that comes next, which would be given by the output of \<ant>;  note though that \<ant> cannot see itself because via masking, the output of \<ant> would assign 0 weight to itself.

<figure> 
    <img src='/images/20210117_1/forward-pass.png' alt='forward-pass' class="center" width="70%"/>
    <figcaption class="center"><small>forward pass</small></figcaption>
</figure>

Similarly, you would then do a backward pass, given \<on>, \<my>, \<arm>, you're asked to predict the word before, which is also given by the output of \<ant> -- \<ant> still can't see itself because its weight/attention is zero due to masking.

<figure> 
    <img src='/images/20210117_1/backward-pass.png' alt='backward-pass' class="center" width="70%"/>
    <figcaption class="center"><small>backward pass</small></figcaption>
</figure>

You will then either add or concatenate the forward pass and backward pass output for \<ant> and use that for the next layer.

So far so good. \<ant> doesn't seem to see itself during the forward pass nor the backward pass, so how can it see itself? That's why I said that the word "multi-layer" is important!

Recall that Transformer trains all the tokens parallel-ly. So even though \<ant> cannot see itself, \<on> can see \<ant> during the forward pass. So the output of \<on> after the first layer contains information about \<ant>, all \<ant> has to do, in order to see itself, is to pay a huge amount of attention to the output of \<on>. More specifically, the first layer output of \<ant> has access to the first layer output of \<on>, which contains w_3, calculated from \<ant>; therefore,  the later layers of \<ant> can indirectly see \<ant> and the prediction becomes a trivial task.

<figure> 
    <img src='/images/20210117_1/see-itself.png' alt='see-itself' class="center" width="70%"/>
    <figcaption class="center"><small>see itself</small></figcaption>
</figure>
