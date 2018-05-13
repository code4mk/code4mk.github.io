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

```js
class User {
  constructor() {
    this.name = 'kamal';
    this.age = 21;
    this.post = 'coder'
  }

  employee() {
    console.log((`${this.name} is ${this.age} years old`));
  }
}

class Admin extends User {
  constructor(){
    super();
    // access User  all data
  }
  posting(){
    console.log(`${this.name} is a ${this.post}`);
  }
}
let d = new Admin();

d.employee();
d.posting();
// kamal is 21 years old
// kamal is a coder
```

```js
class User {
  constructor(name,age,post) {
    this.name = name;
    this.age = age;
    this.post = post
  }

  employee() {
    console.log((`${this.name} is ${this.age} years old`));
  }
}

class Admin extends User {
  constructor(name,age,post){
    super(name,age,post);
  }
  posting(){
    console.log(`${this.name} is a ${this.post}`);
  }
}
let d = new Admin('mostafa',21,'coder');

d.employee();
d.posting();
// kamal is 21 years old
// kamal is a coder
```
