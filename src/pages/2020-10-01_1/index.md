---
path: "/20201001_1"
date: "2020-10-01"
title: "PyTorch scatter_ Function Explained"
author: "Gary Lai"
tags: ["Machinelearning", "Python"]
---

In PyTorch, `self.scatter_(dim, index, src)` is a function you can use to write the values in tensor `src` into the `self` tensor. The best way I found to think about this function is that PyTorch will iterate through the `src` tensor: for every element, it looks at its corresponding element in `index` (which should be a tensor of the same dimension as `src`) to see where in `self` to put this element. Note that the element in `index` only gives the dimension as specified by `dim`, the remaining dimensions (not specified by `dim`) are given by the index of the `src` element.

If this feels confusing, no worries. Here is an example as given by the official <u>[documentation](https://pytorch.org/docs/stable/tensors.html)</u> that I will explain in depth.

```python
>>> x = torch.rand(2, 5)
>>> x
tensor([[ 0.3992,  0.2908,  0.9044,  0.4850,  0.6004],
        [ 0.5735,  0.9006,  0.6797,  0.4152,  0.1732]])
>>> torch.zeros(3, 5).scatter_(0, torch.tensor([[0, 1, 2, 0, 0], [2, 0, 0, 1, 2]]), x)
tensor([[ 0.3992,  0.9006,  0.6797,  0.4850,  0.6004],
        [ 0.0000,  0.2908,  0.0000,  0.4152,  0.0000],
        [ 0.5735,  0.0000,  0.9044,  0.0000,  0.1732]])


```

<br />

Note here `dim` is 0, `index` is `torch.tensor([[0, 1, 2, 0, 0], [2, 0, 0, 1, 2]])`, `src` tensor is `x`, which is of shape 2 \* 5.

PyTorch iterates over the `src` tensor (`x`) to write its values into the `self` tensor (which is a 3 \* 5 tensor filled with 0's). At the first step, `src[0][0]`, the value is `0.3392`, and PyTorch needs to find where (which index) in `self` to write this value.

To do that, it first looks at the corresponding `index[0][0]` to see the index specified for dimension 0 of the index for `self` (recall the input `dim` is 0), and `index[0][0]` is 0 in this case, so it knows it's something like `self[0][some_index]`; then it fills the remaining dimensions with the index of the `src` element it is currently iterating over. Therefore in this case, it will write to `self[0][0]` in the end (again, the dimension 0 is 0 because it's specified by `index[0][0]`, while dimension 1 is 0 because dimension 1 of `src[0][0] is 0`).

At the second step `src[0][1]`, the value is `0.9006`, it first looks at the corresponding `index[0][1]` to see that the index specified for dimension 0 is 1, then it fills the remaining dimensions with the index of `src[0][1]`; therefore, the value `0.9006` will be written to `self[1][1]` (note again that the dimension 0 is 1 because it's specified by the value of `index[0][1]` and the dimension 1 is 1 because the dimension 1 of `src[0][1]` is 1). You can try the subsequent iterations by yourself.

In general, if you're dealing with 2 dimensions, the rule is `self[index[i][j]][j] = src[i][j]`. Hope this clears up the concept a little - if you're still confused, refer to the <u>[official docs](https://pytorch.org/docs/stable/tensors.html)</u> again and try to write down with pen and paper a few examples for yourself!
