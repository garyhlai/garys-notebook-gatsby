---
path: "/20190730_1"
date: "2019-07-30"
title: "Maximum Subarray - Kadane's Algorithm Explained"
author: "Gary Lai"
tags: ["Python", "Algorithms"]
---

I was inspired to write this post after completing the Leetcode challenge and coming across the Kadane algorithm. It's a very interesting algorithm and has yet to be explained in a way that makes sense to me. Here are the notes I used to explain to myself.

The idea is at element n, the local max sub can be obtained by looking at the sum of continuous array up until n-1. If n's addition makes it larger, we add it. In this case, local sum gets bigger, and if it keeps growing and exceeds global sum, we substitute it.

If not, the subarray stops there and we set it aside as a candidate for max subarray. In this case, local sum stops growing. If by that point the local sum hasn't exceeded the global sum, we discard it, no problem. If it is the global_sum, we don't need to worry about losing it.

So the only thing we need to check is when local sum > global sum

<strong>Another way</strong> to think about this is that Kadane's algorithm will end up giving a lot of segments. These segments' sum are temporarily saved in local max, and we only update the global max when the local max exceeds the global max.

As such with the Kadane's algorithm, we only need to walk through the array one time with complexity of O(n).

Here is the actual solution (faster than 98% of people who uploaded to Leetcode):

```python

def maxSubArray(self, nums: List[int]) -> int:
 # initialize the global and local max
    global_max = local_max = nums[0]

    # start iterating at the second element of the array
    for i in nums[1:]:
        # check if the addition of new element is useful
        local_max = max(i, i+local_max)
        # save if local max turns out to be the max subarray
        if local_max > global_max:
            global_max = local_max

    return global_max

```

The implmentation of the algorithm below ends up looking a bit counterintuitive because we do not care to get which specific subarray provides the max but instead only save the VALUE of the max. The under-the-hood process is left to the imagination. Imagine it if you are not lazy! ;)
