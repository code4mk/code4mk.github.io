---
description: Destructuring
keywords: es,es6,js
title: Destructuring
toc_max:  4
---

* Destructuring is a unpacking process

```js
let num = [2,4,5];
let [a,b] = num;
console.log(a);
// 2
```

```js
let num = [2,4,5];
let [a,b] = num;
[b,a] = [a,b]
console.log(a);
// 4
```

## object shorthand

```js
let admin = {
  user: 'kamal',
  age: 21,
  post: 'coder'
}
let {user,age,post} = admin;
console.log(user)
// kamal
```

```js
let admin = {
  user: 'kamal',
  age: 21,
  post: 'coder',
  phone: {
    office: 121,
    home: 222
  }
}
let {user,age,post,phone} = admin;
console.log(phone.office);
// 121
```

* alias

```js
let admin = {
  user: 'kamal',
  age: 21,
  post: 'coder',
  phone: {
    office: 121,
    home: 222
  }
}
let {user:u, age:a, post:p, phone:phn} = admin;
console.log(u)
// kamal
```

* default value

```js
let admin = {
  user: 'kamal',
  age: 21,
  post: 'coder',
  phone: {
    office: 121,
    home: 222
  }
}
let {user:u, age:a, post:p, phone:phn, salary:s=1000} = admin;
console.log(`${u}  paid   per month $${s}`)
// kamal  paid   per month $1000
```
