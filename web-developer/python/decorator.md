---
description: decorator
keywords: python
title: decorator
toc_max: 4
---


## decorator

* `@decorator`

```py
def decor(t):
  return t

def posts():
  print("this is a post")

result = decor(posts)
```

```py
def decor(t):
  print("yoyo")
  return t

@decor
def posts():
  print("this is a post")
posts()
# yoyo
# this is a post
```

* [source](https://www.thecodeship.com/patterns/guide-to-python-function-decorators/)
