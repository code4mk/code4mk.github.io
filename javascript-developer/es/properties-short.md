---
description: shorthand properties
keywords: es,es6,js
title: shorthand properties
toc_max:  4
---

# default properties

```js
let users = {
  name: 'kamal',
  age: 21
}
let phone = {
  home: 121,
  office: 999
}

let employee = {
  users: users,
  phone: phone
}
console.log(employee)
/*{
  users: {
    name: 'kamal',
    age: 21
  },
  phone: {
    home: 121,
    office: 999
  }
}
*/
```

# shorthand properties

```js
let users = {
  name: 'kamal',
  age: 21
}
let phone = {
  home: 121,
  office: 999
}

let employee = {
  users,
  phone
}
console.log(employee)
/*{
  users: {
    name: 'kamal',
    age: 21
  },
  phone: {
    home: 121,
    office: 999
  }
}
*/
```
