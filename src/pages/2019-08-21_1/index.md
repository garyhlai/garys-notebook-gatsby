---
path: "/20190821_1"
date: "2019-08-21"
title: "Making Sense of AI on Blockchain: Part 1"
author: "Gary Lai"
tags: ["AI", "Blockchain", "Machinelearning"]
---

Any projects that involve both AI and Blockchain are bound to raise some eyebrows — after all, putting together two hottest buzzwords of the day sounds like nothing but some cheap marketing soup. It also doesn’t help that many articles on the convergence of AI and blockchain are filled with big words with no real substance. However, it is important to keep an open mind and examine with objectivity the real use cases of blockchain for AI.

To truly understand the use cases for AI on blockchain, we will first examine the lifecycle of an AI model and then go on to discuss the specific blockchain use cases for AI during each part of this lifecycle. As I will go on to show, AI actually has some important use cases on the blockchain that should not be overlooked by any measure. (Note that AI models, AI algorithms and AI programs are used interchangeably for the purpose of this article.)

<h3>AI’s Lifecycle</h3>

Simply put, an AI model can be understood as a computer program trained to perform a task traditionally done by humans. A facial recognition AI model tells who the person is by scanning his face. A song recommendation AI model suggests songs based on the user’s preferences. A translation AI model translates texts from one language to another etc.
There are usually two main stages in the lifecycle of any AI models: training and inference.
During the first part, the AI algorithm is trained to perform a task. The AI developer first go out to collect relevant data and clean them up. He then feeds these processed data (the learning material) through a learning algorithm, thereby “training” it to perform a certain task, be it facial recognition, song recommendation, or translation. This is equivalent to “writing the program” in traditional programming.

During the second part, the trained AI model actually performs the task. Here, we call upon the trained AI model to perform a task, carrying out an AI inference. So, each time when you are using Google translate to translate a body of text from English to Spanish, you are invoking an AI inference in the background. This is equivalent to “running the program” in traditional programming.

<h3>Blockchain Use Cases for AI</h3>

Having clarified the lexicons, I will now lay out some real, no-bullshit blockchain use cases for AI. In this article, I mostly focus on the second part of the AI lifecycle, inference. I will write about the training part in the next article.

**Use Case #1: A P2P AI Marketplace**

Imagine a decentralized Ebay for AI models on the blockchain.

What does this mean?

Let’s say you are an AI developer and you have trained a facial recognition AI model. You can now submit this model onto the blockchain (just like posting on Ebay as a merchant, with the model being your product). Anyone can now call your AI model to help him do something (such as verify an user) via an API and will automatically pay you in cryptocurrency depending on the number of API calls.
This produces a mechanism where the profits generated from the API calls directly incentivize AI model developers to upload more models, and the competition between AI developers on the marketplace naturally leads to the creation of better AI models.
In a way, this leads to the decentralization of AI models, because now, instead of keeping the models to themselves, individual AI developers have the incentives to publish their models on the blockchain for the world to use. Current projects committed to implementing this use case include SingularityNet and Cortex Labs.\*

**Use Case #2: AI Smart Contracts (On-chain AI Inference)**

Everyone is talking about DApps these days, but no one seems to be talking about the fact that these DApps cannot effectively incorporate any sort of AI. Imagine having a decentralized Spotify with no song recommendation algorithms, or a decentralized Uber without AI to determine your fares based on supply and demand. The reasons why we should care about AI DApps are the exact same reasons why we care about DApps: decentralization, censorship-resistance, transparency and immutability. It doesn’t really make sense to run regular computer programs on the blockchain while leaving out AI programs.

The reason for the current difficulty of running AI on the blockchain, in large part, is that the virtual machine of traditional blockchains like Ethereum runs on the CPU instead of the GPU, which makes it impossible to run AI cost-effectively. Now, you could technically run the AI algorithms off-chain and then bring the results back on-chain; however, that defeats the whole purpose of having DApps: We want to execute programs on the blockchain in a decentralized manner, where everything is open, transparent and immutable, rather than in a blackbox.

Fortunately, there are now engineering solutions that make running AI programs on the blockchain possible, developed by Cortex Labs. The specific solutions involve building a blockchain whose virtual machine utilizes the GPU and applying a quantization scheme to make the execution of deep learning models deterministic. The technical details can be read here but they are not the focus of this article. The point is that running AI programs on the blockchain is now possible.

So what can AI smart contracts do?

Besides all the common uses of AI in traditional apps (recommendation system, chatbot, translation etc.), there are a few use cases that make on-chain AI particularly compelling and can see implementation in the short-term:
Gaming

Decentralized gaming apps like CryptoKitties have their unique appeals, distinct from traditional apps. The catch is that the rarity of the crypto collectibles you own can be proven now. They are open to verification on the blockchain rather than subject to the arbitrary will of a single development team. When you own a CryptoKitty, you know that they cannot be replicated, taken away, or destroyed. They live forever on the blockchain even if the game’s development team goes bankrupt.

On-chain AI can greatly enhance this user experience. One can only imagine how much better CryptoKitties can get if they incorporated AI into these kitties. The kitties’ behaviors can be much more life-like and dynamically change depending on your personal interaction with them. The possibilities are vastly expanded when AI is introduced to gaming on the blockchain.

**Decentralized Finance**<br/>

One of the most central functions of banks is to match lenders and borrowers with different needs and asymmetric information. Decentralized financial applications are poised to take over this function as the technology matures, and AI will play an indispensable role during this process.

As an example, a decentralized lending app needs to run an AI algorithm to determine a person’s credit score before determining an unique interest rate for him. Ideally, this AI algorithm should not be a blackbox but should instead run on the blockchain to prevent hackers’ tampering, discourage discrimination, and ensure fairness.

**Anti-fake AI**<br/>

Deepfake AIs are already threatening our society: Blood has been shed and lives have been lost due to videos fabricated with the help of AI. We may come to a point where no videos on the Internet can be trusted without being verified by an anti-fake AI algorithm. For this algorithm to be trusted, it needs to run on the blockchain, so that everyone can see how the videos are verified: Hopefully, these videos will be verified by an open, agreed-upon AI algorithm, rather than subjected to the arbitrary will of one person who dictates what is real or what is not.

So there you go, AI on blockchain goes far beyond the buzz and will surely enter into the consciousness of the mainstream public soon enough for their practical use cases. Any discussions are welcomed in the comments. Meanwhile, stay tuned for the second part of this article series, where I will be focusing on some really interesting blockchain use cases for the training part of the AI lifecycle.

\*Full Disclosure: I work for Cortex Labs and am passionate about creating an open decentralized AI ecosystem on the blockchain.
