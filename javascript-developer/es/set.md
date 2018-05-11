---
description: set
keywords: es,es6,js
title: set
toc_max:  4
---

## entries & add

```js
'use strict';
let users = new Set();
users.add({
  name: 'kamal',
  age: 21
});
users.add({
  name: 'jamal',
  age: 23
})
for(let [user] of users.entries()){
  console.log((user.name));
}
```

## forEach

```js
'use strict';
let users = new Set();
users.add({
  name: 'kamal',
  age: 21
});
users.add({
  name: 'jamal',
  age: 23
})
users.forEach ((user) => {
  console.log(user.name);
})
```

## size

```js
'use strict';
let users = new Set();
users.add({
  name: 'kamal',
  age: 21
});
users.add({
  name: 'jamal',
  age: 23
});
console.log(users.size);
```

## clear

```js
'use strict';
let users = new Set();
users.add({
  name: 'kamal',
  age: 21
});
users.add({
  name: 'jamal',
  age: 23
})
users.clear();
users.forEach ((user) => {
  console.log(user.name);
})
```

## delete

```js
'use strict';
let users = new Set();
users.add({
  name: 'kamal',
  age: 21
});
users.add({
  name: 'jamal',
  age: 23
})
users.forEach ((user) => {
  if(user.name === 'kamal') {
    users.delete(user);
  }
})

users.forEach((user) => {
  console.log(user.name);
})
```
