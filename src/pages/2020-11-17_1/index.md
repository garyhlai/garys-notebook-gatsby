---
path: "/20201117_1"
date: "2020-11-17"
title: "What does __getitems__ mean? Functions with Double Underscores in Python"
author: "Gary Lai"
tags: ["Machinelearning", "Python"]
---

While reading the PyTorch <u>[source code](https://github.com/pytorch/text/blob/master/torchtext/data/dataset.py)</u>, I started to notice that many classes have functions named <strong>\_\_xxx\_\_</strong> such as <strong>\_\_init\_\_</strong> , <strong>\_\_len\_\_</strong>, or <strong>\_\_getitems\_\_</strong>. I realized that these are called **magic methods** - they are NOT meant for you to call but for Python.

Essentially, these are functions with the same names as some built-in Python functions, and you define them explicitly in your objects in order to override the default built-in functions.

#### Example 1

```python

class CrazyNumber(object):

    def __init__(self, n):
        self.n = n

    def __add__(self, other):
        return self.n - other

    def __sub__(self, other):
        return self.n + other
num = CrazyNumber(10)
print(num + 3) # 7 instead of 13
print(num - 10) # 20 instead of 10
```

Do you see how the number goes crazy because the default `__add__ `and `__sub__` methods are overridden?

Now if we run `print(num)`, the default `__str__` method would get called, printing us "<main.CrazyNumber object at 0x10d4ef8d0>". But if we want to give a more informative print statement, we can override this by defining the `__str__` method explicitly:

```python

class CrazyNumber(object):

    def __init__(self, n):
        self.n = n

    def __add__(self, other):
        return self.n - other

    def __sub__(self, other):
        return self.n + other

    def __str__(self):
        return str(self.n)

num = CrazyNumber(10)
print(num) # prints 10
```

Let's look at another example.

The magic method that initially caught my attention in the PyTorch code was `__getitems__`, which is how you access lists/dictionaries via keys in Python. When you have a list and you call `my_list[8]`, under the hood, Python is calling the built-in `__getitems__` of lists.

Like the magic methods we saw above, you can also define `__getitems__` explicitly for your class - this would override the default method (like above with `__str__`), or supply it to Python if the class doesn't already have it (like you will soon see).

This snippet below would return error "TypeError: 'Person' object is not subscriptable", because unlike lists and dictionaries, regular objects don't have `__getitems__` defined.

#### Example 2

```python
class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

p = Person("Gary", 24)
print(p["age"])  # error because
```

Now we define it.

```python
class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def __getitem__(self, key):
        return getattr(self, key)

p = Person("Gary", 24)
print(p["age"])  # prints 24
```

We can now access values in Person objects via p[keys] because we have the `__getitem__` defined!

In conclusion, **double score functions teach Python what do to if they see things like `object[key]`, `print(object)` or `object_a + object_b`**!
