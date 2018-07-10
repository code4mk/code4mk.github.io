---
description: Class
keywords: python
title: Class
toc_max: 4
---

# class

```py
class Post(object):
  name = " "
  def __init__(self,name):
    self.name = name
  def posts(self):
    print(self.name)
MyPost = Post("Kamal")
MyPost.posts()
# kamal
```


## inheritence

```py
class Blog(object):
  def content(self):
    print("this is blog content")
class Like(object):
  def love(self):
    print("1000 likes")
class Post(Blog,Like):
   def publish(self):
     Blog.content(self)
     Like.love(self)
     print("publishd")

test = Post()
test.publish()

"""
this is blog content
1000 likes
publish
"""

```
