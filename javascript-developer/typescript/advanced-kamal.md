---
description: oop
keywords: node.js, js, typescript, ts
title: oop ad
toc_max: 4
---
## What is class?

A class is a template which hold a lot of objects and methods .
* class is a blueprint or template or set of instructions

## What is abstract class

`Abstract` classes are classes that contain one or more abstract methods .only `extends` this.

* at least one abstract method



## What diffrent this and super keyword

| this  | super  |
|---|---|
| `this` represent current instance of class (containing class) | `super` represent current instance of `parent` class.|
| access data from `own` class| access data from `parent / inherit` class|

### What diffrent public, private, and protected

| type  | Class (own) | Package  | Subclass (same-pkg)| Subclass (diff pkg) | World |
|---|---|---|---|---|
|public|✔|✔|✔|✔|✔|
|private| ✔ |✘|✘| ✘| ✘|
|protected| ✔ |✔|✔|✔| ✘|
