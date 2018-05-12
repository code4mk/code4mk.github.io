---
description: variable
keywords: es,es6,js
title: variable
toc_max:  4
---

## es6 let & const

* let
* const


### var

* `var`
* access any where
* last value is current value

```js
var name = 'code4mk'
{
  var name = 'kamal';
  console.log(name);
}
console.log(name);
// kamal
// kamal
```

### let

* let is local variable
* don't access outside of block
* don't duplicate accept  same block

```js
let name = 'code4mk'
{
  let name = 'kamal';
  console.log(name);
}
console.log(name);
// kamal
// code4mk
```

### const

* `const` always fixed
* no change allow

```js
const price = 51;
// const price = 55 // error
console.log(price);
```

* [detail javascript basic in code4mk](https://code4mk.org/javascript-developer/js/basic/variable/)
