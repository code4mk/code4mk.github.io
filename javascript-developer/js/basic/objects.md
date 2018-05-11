---
description: Objects
keywords: js
title: Objects
toc_max: 4
---

* `objects` is a collections of data . objects represent by `{ ... }` or array objects `[{},{}]` . objects is `name value` pair base.


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

```js
let users = [
  {name: 'kamal', age: 21},
  {name: 'jamal', age: 23},
  {name: 'maruf', age: 6}
]
users.forEach((user) => {
  console.log(user.name);
})
// kamal , jamal , maruf
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

### assign

* `copy` / `clone`
* `target ... source`

```js
let users = {
  name: 'kamal',
  age: 21,
  phone: '0172'
}
let admin = Object.assign({},users);
console.log(admin);
// {name: "kamal", age: 21, phone: "0172"}
```



### entries

* return `key` and `value` array .

```js
let users = {
  name: 'kamal',
  age: 21,
  phone: '0172'
}
let result = Object.entries(users);
console.log(result);
result.forEach (([key,value]) => {
  console.log(`${key} is ${value}`);
})

// 0: ["name", "kamal"]
//1:["age", 21]
// 2: ["phone", "0172"]


// name is kamal
// age is 21
// phone is 0172
```

### freeze

* freeze method make objects constant , can't add or delete objects properties.

~ output same

```js
let users = {
  name: 'kamal',
  age: 21,
  phone: '0172'
}
let result = Object.freeze(users);
users['position'] = 'coder';
delete users['name'];
console.log(users);
// {name: "kamal", age: 21, phone: "0172"}
```

~ strict mode

```js
'use strict';
let users = {
  name: 'kamal',
  age: 21,
  phone: '0172'
}
let result = Object.freeze(users);
users['position'] = 'coder';
delete users['name'];
console.log(users);
// Cannot add property position, object is not extensible
```

### getOwnPropertyDescriptor

```js
let users = {
  name: 'kamal',
  age: 21,
  phone: `567`
}

let result = Object.getOwnPropertyDescriptor(users,name);
console.log(result.value)
// kamal
```

### getOwnPropertyDescriptors

```js
let users = {
  name: 'kamal',
  age: 21,
  phone: `567`
}

let result = Object.getOwnPropertyDescriptors(users);
console.log(result.name.value);
console.log(result.age.value);
// kamal
// 21
```

### getOwnPropertyNames

```js
let users = {
  name: 'kamal',
  age: 21,
  phone: `567`
}
let result = Object.getOwnPropertyNames(users);
console.log(result);
// ["name", "age", "phone"]
```

### getPrototypeOf

```js
let users = {
  name: 'kamal',
  age: 21,
  phone: `567`
}
let mk = Object.create(users);
console.log(Object.getPrototypeOf(mk) === users);
// true
```

### is

```js
let result = Object.is('kamal', 'kamal')
console.log(result)
//  true
```


### keys


```js
let users = {
  name: 'kamal',
  age: 21,
  phone: `567`
}
let result = Object.keys(users);
console.log(result);
// ["name", "age", "phone"]
```

### values

```js
let users = {
  name: 'kamal',
  age: 21,
  phone: `567`
}
let result = Object.values(users);
console.log(result);
// ["kamal", 21, "567"]
```

### resource

* [mdn](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
* [mdn basic obj](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Basics)
* [js info](https://javascript.info/object-basics)
* [sabe](https://sabe.io/classes/javascript/objects)
