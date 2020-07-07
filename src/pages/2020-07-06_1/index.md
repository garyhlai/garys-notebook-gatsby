---
path: "/20200706_1"
date: "2020-07-06"
title: "Re Tutorial: A Quick Python Start"
author: "Gary Lai"
tags: ["Python", "MachineLearning"]
---

Re, or Regex, stands for regular expression means "a sequence of characters that define a search pattern." <sup>1</sup> It is particularly useful for text-processing tasks such as search and replace. Chances are you will need it at some point if you deal a lot with text-based datasets. In Python, regular expression is implemented in the library Re.

Now, Python has pretty good official [documentation](https://docs.python.org/3/library/re.html) and [tutorial](https://docs.python.org/3/howto/regex.html) on this topic, but I personally didn't find them to be pedagogical enough. Therefore, I introduce some of the most important concepts here, so that you can get started quickly with Re in Python.

You can then refer to the official documentation to learn what you need specifically for your use case down the line.

Now open your Terminal, type in `python3` to start Python, follow along and experiment for yourself to truly understand what each of these methods do.

## <u>re.search</u>

```python
import re
match = re.search(pattern, string)
```

You use this method if you want to find where a pattern is in a string (perhaps in order to replace it). This method returns None if pattern is not found in the string; otherwise, it will return an object that contains a bunch of information like where the pattern is in the string.

Here's how you use it.

```python
import re
match = re.search('c', 'abdef')
print(match) # return None
match = re.search('c', 'abcdef')
print(match) # return <re.Match object; span=(2, 3), match='c'>
```

In the second case, the match is found and `span` tells you where that match is in the string. If you run `print(match.group())`, it will print you the pattern matched, which in this case is 'c'. Note that re.search will search from the beginning of the string to the right, stopping after the first occurrence of the pattern. To find all of the pattern matches, you will need to use <u>[`re.findall`](https://docs.python.org/3/library/re.html#re.findall)</u>.

`re.match` is similar to `re.search` - the difference is that whereas `re.search` check if the pattern is _anywhere_ in the string, `re.match` will only check if the pattern is at the _beginning_ of the string.

```python
re.search('c', 'abcdef')   # <re.Match object; span=(2, 3), match='c'>
re.match('c', 'abcdef')    # None
re.match('c', 'cdef')    # <re.Match object; span=(0, 1), match='c'>
```

## Metacharacters

[Metacharacters](https://docs.python.org/3/howto/regex.html#more-metacharacters) allow us to define more sophisticated search patterns.

re.compile

raw strings
re.escape

Footnotes

1. Wikipedia contributors, "Regular expression," Wikipedia, The Free Encyclopedia, https://en.wikipedia.org/w/index.php?title=Regular_expression&oldid=963870282 (accessed July 7, 2020).
