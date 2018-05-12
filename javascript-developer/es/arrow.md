---
description: Arrow function
keywords: es,es6,js
title: Arrow function
toc_max:  4
---

.Arrow function is shorthand `=>` . Arrow function represent by arrow `=>` , before arrow declare parameter.

## js function

```js
let users = [
  {name: 'kamal', age: 21},
  {name: 'jamal', age: 23},
  {name: 'maruf', age: 7},
  {name: 'sadia', age: 4},
  {name: 'karim', age: 65},
]

users.forEach(function(user) {
  console.log(user.name);
})
// kamal
// jamal
// maruf
// sadia
// karim
```

## arrow function

```js
let users = [
  {name: 'kamal', age: 21},
  {name: 'jamal', age: 23},
  {name: 'maruf', age: 7},
  {name: 'sadia', age: 4},
  {name: 'karim', age: 65},
]

users.forEach((user) => {
  console.log(user.name);
})
// kamal
// jamal
// maruf
// sadia
// karim
```
