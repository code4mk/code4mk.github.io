---
description: class
keywords: es,es6,js
title: class
toc_max:  4
---

A class is a template which hold a lot of objects and methods .
* class is a blueprint or template or set of instructions

## create class

```js
class User {
  constructor(name,age) {
    this.name = name;
    this.age = age;
  }

  employee() {
    return (`${this.name} is ${this.age} years old`);
  }
}

let UserCreate = new User('kamal',21)

UserCreate.employee();
// kamal is 21 years old
```

## extends
