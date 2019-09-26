---
path: "/20190925_2"
date: "2019-09-25"
title: "Statistics: P-value Explained"
author: "Gary Lai"
tags: ["Statistics", "MachineLearning"]
---

**Informal Definition:** The probability of getting the same distribution if the null hypothesis were true.

**Example:** you have a web page, and the average user time is 20 min. You change the page's background to yellow and wants to see if that increases user time.

1. So you come up with two hypothesis, one is null hypothesis and the other is alternative hypothesis.

- H_0 (null hypothesis): Background makes no difference
- H_a (alternative hypothesis): If we change the background, avg user time increases

2. You change the background, measure the avg user time. Say we find it to be 25 min. <— Now this seems to be more, but how sure how we? That’s where p-value come in.

3. You calculate the p-value. `P(time >= 25min | H_0 is true)` What is the probability that if we DIDN'T change the background, we get the 25 min avg user time?

4. You set a significance level such as `alpha = 0.05`. And you compare your p-value with alpha.

If p-value >= alpha, it means that it’s possible that even if you didn’t change the background, you would still get 25 min avg user time. The significance of the difference is not enough. So you do not reject the null hypothesis, because it’s possible that null hypothesis still stands. (Note that we never “accept” the null hypothesis. We just do not reject it.)

If p-value < alpha, you can safely reject the null hypothesis because if you didn’t change the background, it’s very unlikely that you would get that 25 min avg user time.
