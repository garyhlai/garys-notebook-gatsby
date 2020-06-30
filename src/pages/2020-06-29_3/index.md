---
path: "/20200629_3"
date: "2020-06-29"
title: "ML Paper Notes: CNN Features off-the-shelf: an Astounding Baseline for Recognition"
author: "Gary Lai"
tags: ["Machinelearning", "Transferlearning", "CNN"]
---

<p style="margin-left: 3%; margin-right: 3%; margin-bottom: 5%; margin-top: 3%;"><i>Recently, I have been reading a lot of machine learning papers and thought I would start sharing my notes to (1) back up my notes (2) share my digestion of these papers which might help other people understand. Please refer to the actual paper for details as I only sketch the main ideas here. </i></p>

**Title:**
<u>[CNN Features off-the-shelf: an Astounding Baseline for Recognition](https://arxiv.org/abs/1403.6382)</u> (2014) Razavian et al.

**Main Ideas**:

The paper shows that just by using generic features extracted by a CNN (OverFeat trained on ILSVRC2013 for image classification) + a simple linear classifier (SVM), we can outperform highly tuned state-of-the-art models in not only object classification, but also a variety of other harder/less-related recognition tasks (fine-grain classification, object detection, attribute detection, visual instance retrieval), demonstrating that features extracted by CNNs are useful even when the new task and domain are different from their original training. Any novel models must be compared against this new strong baseline of CNN features + simple linear classifier.

In addition, the paper also shows that while CNN features + simpler linear classifier is a strong baseline, much better performance can be achieved when further tuning / CNN architecture adaptation is used.

**General Experiment Setup:**

For all experiments:

- Choose the first fully connected layer in the network (layer 22) as the feature vector + SVM. (CNN-SVM)

- Augment the training set by cropped, rotated examples, and component-wise power transform (CNNaug + SVM)

<u>Image Classification</u>

For image classification, the paper used the Pascal VOC 2007 (objects) and MIT-67 indoor scenes dataset whose image distributions differ from that of ILSVRC dataset.

On the Pascal VOC 2007 dataset, CNN-SVM improved state-of-the-art mean average precision from 70.5 to 73.9, CNNaug-SVM improved it to 77.2.

On the MIT-67 indoor scene dataset, CNNaug-SVM improved state-of-the-art mAP from 64.0 to 69.0.

<u>Fine-grain classification</u>

Experiments were performed on the Caltech-UCSD Birds 200-2001 and Oxford 102 Flowers dataset.

On the Oxford 102 Flower dataset, CNNaug-SVM improved the state-of-the-art to mean accuracy to 86.8 even without using the segmentation provided by the dataset.

<u>Attribute detection</u>

On the UIUC 64 object attributes (shape, part, material) dataset, CNNaug-SVM improved the state-of-the-art from 73.7 to 91.5.

On the H3D dataset (person has glasses, isMale etc.), the CNNaug-SVM outperformed previous non-CNN learning methods; however, a method that adapted a CNN architecture specifically for the task of attribute detection (rather than using features from OverFeat which was trained to do image classification). This shows the importance of adapting the network to the specific task at hand.

<u>Visual Instance Retrieval</u>

Used 5 datasets: Oxford5k buildings, Paris6k buildings, Sculptures6k, Holiday dataset, UKbench. CNNaug + spatial search outperformed state-of-the-art on UKBench, Holidays, Paris6k datasets.

**Other Notes**:

This is probably the beginning of network-based transfer learning with CNN.
