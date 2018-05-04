---
description: Variable
keywords: js
title: variable
toc_max: 4
---

### naming

Limiation

* only letters,digits,symbols,`$`,`_`
* first character must not be a digit.
* case sensative
* camel case (optionalMatter)


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
```

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
```

### const

* `const` always fixed
* no change allow

```js
const price = 51;
// const price = 55 // error
console.log(price);
```
