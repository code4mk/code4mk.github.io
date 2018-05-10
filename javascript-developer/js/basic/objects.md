---
description: Objects
keywords: js
title: Objects
toc_max: 4
---

* `objects` is a collections of data . objects represent by `{ ... }` or array objects `[{},{}]` . objects is `name value` psir base.


## create objects

* constructor

```js
let users = new Object()
```

* literal object with  square bracket `{..}`

```js
let users = {
  ......
}
```

```js
let users = {
  name: 'kamal',
  age: 21,
  phone: 8123
}
console.log(users.name);
// kamal
```

```js
let users = {
  name: 'kamal',
  age: 21,
  phone: {
    home: 88012,
    office: 121
  }
}
console.log(users.phone.office);
// 121
```

## multiword property

### set

```js
let users = {
  name: 'kamal',
  age: 21,
  phone: 017
}
users['salary rate'] = 2000;
console.log(users);
// {name: "kamal", age: 21, phone: 15, salary rate: 2000}
```

### get

```js
let users = {
  name: 'kamal',
  age: 21,
  phone: 017
}
users['salary rate'] = 2000;
console.log(users['salary rate']);
// 2000
```

### delete

```js
let users = {
  name: 'kamal',
  age: 21,
  phone: 017
}
users['salary rate'] = 2000;
delete users['salary rate'];
console.log(users['salary rate']);
// undefined
// deleted
```
## method lists

| methods | methods     | methods     |
| :------------- | :------------- |:------------- |
| Object.assign() | Object.create()| Object.defineProperty() |
| Object.defineProperties()|Object.entries()|Object.freeze()|
|Object.getOwnPropertyDescriptor()|Object.getOwnPropertyDescriptors()|.|
|Object.getOwnPropertyNames()|Object.getOwnPropertySymbols()|Object.values()|
|Object.getPrototypeOf()|Object.is()|Object.isExtensible()|
|Object.isFrozen()|Object.isSealed()|Object.keys()|
|Object.preventExtensions()|Object.seal()|Object.setPrototypeOf()|
