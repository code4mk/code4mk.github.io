---
description: function
keywords: python
title: function
toc_max: 4
---

## function

```py
def user():
  print("Mostafa Kamal is a dev")
user()
# Mostafa Kamal is a dev
```

### parameter

```py
def user(name,age):
  print(name +  "'s age is "+ str(age) )
user("mostafa",21)
# mostafa's age is 21
```
### default

```py
def user(name,age,status="dev"):
  print(name +  "'s age is "+ str(age) + " and status is" + " " + status)
user("mostafa",21)
# mostafa's age is 21 and status is dev
```
### rest

* `*parameter`

```py
def user(name,age,*contact):
  print(name +  "'s age is "+ str(age))
  for i in contact:
    print(i)
user("mostafa",21,"01751----","hire@hire.com")
# mostafa's age is 21
# 01751----
# hire@hire.com
```

## keyword argument

* `**kw`

* `*arg` is positional argument
* `**kw` is keyword argument

```py
def foo(*positional, **keywords):
    print "Positional:", positional
    print "Keywords:", keywords
foo("kamal","jamal");
```


## call function

```py
def add(x,y):
  print(x+y)
def test(a,b):
  add(a,b)
test(2,3)
# 5
```
