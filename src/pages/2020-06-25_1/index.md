---
path: "/20200625_1"
date: "2020-06-25"
title: "ML Paper Notes: Distilling the Knowledge in a Neural Network"
author: "Gary Lai"
tags: ["Machinelearning", "Statistics"]
---

<p style="margin-left: 3%; margin-right: 3%; margin-bottom: 5%; margin-top: 3%;"><i>Recently, I have been reading a lot of machine learning papers and thought I would start sharing my notes to (1) back up my notes (2) share my digestion of these papers which might help other people understand. Please refer to the actual paper for details as I only sketch the main ideas here.</i></p>

**Title:** <u>[Distilling the Knowledge in a Neural Network](https://arxiv.org/pdf/1503.02531.pdf)</u> (2015), G. Hinton et al.

**Main Ideas**:

This classic paper by Hinton et al. describes a model compression technique with teacher-student networks.

While an ensemble of large models can achieve optimal performance on the training set, its inference is too slow and expensive during production time. We can, however, train a smaller (student) network to learn the softmax output of this larger (teacher) network and thereby to generalize in the same way as the teacher network - this is because the softmax carries “dark knowledge”, or nuanced information about e.g. while the input image is neither 3 nor 7, it is much more similar to 3. The student network is then used for inference during production time.

Specifically, when training the student network (on classification tasks), instead of training on the original labels’ one-hot vectors (hard target), you use the teacher network’s output softmax vectors (soft target), often softening it further with temperature. The paper finds that using a weighted average of the objective functions for hard target and soft target (with much more weight for soft target) produced the best result.

**General Experiment Setup:**

The experiment uses the MNIST dataset.

Teacher Network: A single large neural net with 2 hidden layers of 1200 ReLu hidden units on all 60k training cases, all translated by up to 2 pixels in any directions, regularized with dropout (which can be viewed as a way to train a large ensemble of models that share weights). 67 test errors.

Student Network: A neural net with 2 hidden layers of 800 ReLu hidden units, trained on non-translated training set. If we train with no regularization (i.e. on hard one-hot targets), we get 146 test errors. If we regularize by using the weighted average of objective function for the soft target and hard target with a temperature of 20, we get 74 test errors. Different numbers of hidden units and temperature were tried on the student network. Then all examples of digit 3 were eliminated from the transfer set - despite this, the student net only made mistakes on 133 out of 1010 threes in the test set.

**Questions:**

“Learned bias for the 3 class is much too low” What does this mean exactly and how does one find out about this?

**Other Notes:**

The paper also introduces a new mechanism for training ensembles of neural nets. Instead of training many (expert) neural networks and averaging them, you train a big “general” neural network and then many smaller “specialist” neural nets that focus on the weakness of the general network. This new mechanism can drastically shorten the training time required.
