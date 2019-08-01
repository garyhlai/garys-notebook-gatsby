---
path: "/20190801_1"
date: "2019-08-01"
title: "Binary Tree Level Order Traversal Python Solution"
author: "Gary Lai"
tags: ["Python", "Algorithms"]
---

This problem can be better solved iteratively rather than recusively.

The essential idea is that you can get all the next level nodes from the current level nodes, starting from the tree root is the current level node.

You use 4 arrays:

- One to keep the result <br>
- One to get the current level nodes <br>
- One to get the next level nodes <br>
- One to get the value of current level nodes to be added to result <br>

```python

class Solution:
    def levelOrder(self, root: TreeNode) -> List[List[int]]:
        if root == None:
            return []
        result, current_level = [], [root]

        # while there are nodes in the current_level, meaning while we haven't reached the end
        while current_level:
            next_level = []
            current_vals = []

            for node in current_level:
                # build the array of current level values to be appended to result
                if node != None:
                    current_vals.append(node.val)
                    # we get the next_level from each current_level
                    if node.left:
                        next_level.append(node.left)
                    if node.right:
                        next_level.append(node.right)
            result.append(current_vals)
            # and then set the current_level to next_level to move on
            current_level = next_level

        return result

```
