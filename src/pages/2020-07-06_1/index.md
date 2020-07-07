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

### <u>re.search</u>

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

<br />
<br />

### <u>Metacharacters</u>

[Metacharacters](https://docs.python.org/3/howto/regex.html#more-metacharacters) allow us to define more sophisticated search patterns.

Here's a list of all metacharacters

```

. ^ \$ \* + ? { } [ ] \ | ( )

```

Let's look at a few important ones - you can refer the [documentation](https://docs.python.org/3/library/re.html) for the ones not covered here.

#### **[ ]**

[ ] lets you match a class of characters - i.e. when you specify the pattern as [abc] (or equivalently, [a-c]) the search will stop when you find any of the characters in the [ ] (‘a', ‘b’ or ‘c’ in this case).

```python
>>> match = re.search("[abc]", r"xybz")
>>> print(match)
<re.Match object; span=(2, 3), match='b'>

>>> match = re.search("[a-c]", r"xbyz")
>>> print(match)
<re.Match object; span=(1, 2), match='b'>
```

If you specify ^ as the first character inside of [ ], you complement/invert the character class - i.e. if you specify [^abc], the pattern will match any character that is NOT ‘a' ‘b' or ‘c’.

```python
>>> match = re.search("[^abc]", r"abcxb")
>>> print(match)
<re.Match object; span=(3, 4), match='x’>
```

<br />

#### (?<...) and (?<!...)

This is a good example to show how all the metacharacters can be combined to match sophisticated pattern. `?<(...)` is used to look back to check a condition - it will only match the pattern if the condition is met.

- `(?<=abc)def` will only match pattern “def” in the string if it is preceded by “abc”
- `(?<!abc)def` will only match pattern “def” in the string if it is NOT preceded by “abc"

```python
>>> match = re.search(r'(?<=abc)def', 'abcdef')
>>> print(match)
<re.Match object; span=(3, 6), match='def'>
>>> match = re.search(r'(?<=abc)def', 'accdef')
>>> print(match)
None
```

<br />

#### **\\**

`\` is arguably the most important metacharacter. Here are a few examples:

- `\d` matches any digit

```python
match = re.search("\d", "abc") # print(match) returns None
match = re.search("\d", "a2c") # print(match) returns <re.Match object; span=(1, 2), match='2'>
```

- `\w` matches any alphanumeric character (non-empty letters or numbers)

```python
match = re.search("\w", "") # print(match) returns None
match = re.search("\w", "abc") # print(match) returns <re.Match object; span=(0, 1), match='a'>
match = re.search("\w", "a2c") # print(match) returns <re.Match object; span=(0, 1), match='a'>
```

Here's a complete list of patterns you can specify with \\, taken from the official <u>[documentation](https://docs.python.org/3/library/re.html)</u>.

```
\d
Matches any decimal digit; this is equivalent to the class [0-9].
\D
Matches any non-digit character; this is equivalent to the class [^0-9].
\s
Matches any whitespace character; this is equivalent to the class [ \t\n\r\f\v].
\S
Matches any non-whitespace character; this is equivalent to the class [^ \t\n\r\f\v].
\w
Matches any alphanumeric character; this is equivalent to the class [a-zA-Z0-9_].
\W
Matches any non-alphanumeric character; this is equivalent to the class [^a-za-z0-9_].
```

## <u>re.escape</u>

When I was first reading about re.escape, I struggled a bit because the word “escape” didn’t make sense to me — it just means **make a special character not special anymore.**

```python
s = “ab\tc”
print(s) # this will return “ab    c"
```

What happens under the hood is that whenever Python sees `\t` or other special characters, it will replace `\t` with a character that represents tab; however, sometimes we want the string to literally have `\t`, instead of the tab - this is when we need to "escape". The common strategy to “escape” a special character is to backslash \ it.

```python
s = “ab\\tc”
print(s) # this will return “ab\tc"
```

Notice here `\t` is “escaped” because `\` is placed in front of it. This is why the output is “ab\tc”

When we run <u>[`re.escape`](https://docs.python.org/3/library/re.html#re.escape)</u>, Re will automatically backslash/escape all the special characters so that weird things like "ab&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;c" don't happen. Example:

```python3
>>> print(re.escape('http://www.python.org'))
http://www\.python\.org
```

## <u>re.compile</u>

Re.compile converts a regular expression pattern (usually a string) into a regex object (an object), so that it can be re-used multiple times.

```python
#The sequence
prog = re.compile(pattern)
result = prog.match(string)

#is equivalent to
result = re.match(pattern, string)

#The sequence
prog = re.compile(pattern)
result = prog.search(string)

#is equivalent to
result = re.search(pattern, string)
```

An intuitive way to think about this syntax is that you essentially take the first argument (`pattern`) of `re.search` and `re.match` out of the parenthesis, and replaced it in front. Try it out and convince yourself that this is true. Meanwhile, here's another example with <u>[`re.sub`](https://docs.python.org/3/library/re.html#re.sub)</u>:

```python

# re.sub(pattern, repl, string) —> pattern.sub(repl, string)
# original syntax -> with re.compile object pattern

>>> pat = re.compile("y") # pat is the pattern object
>>> rep = pat.sub("a","xyz")
>>> print(rep)
xaz
```

<br />
Hopefully, by now you have a basic understanding of Re to delve further. Obviously this article chooses clarity over formality - to get more details, head to the official [documentation](https://docs.python.org/3/library/re.html#re.sub)!

Footnotes

1. Wikipedia contributors, "Regular expression," Wikipedia, The Free Encyclopedia, https://en.wikipedia.org/w/index.php?title=Regular_expression&oldid=963870282 (accessed July 7, 2020).
