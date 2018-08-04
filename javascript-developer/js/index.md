---
description: mk
keywords: js
title: mk
toc_max: 4
---

## jasvascript

it is scripting language which alive  the html. it's first name was liveScript . that time java was more popular so named JavaScript. Now no relation with java . javascript - echmaScript age.


## Operators

* [mdn](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators)

## typeof

```js
typeof 54 //number
typeof 'kamal' //number
```
* [mdn](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof)

## use strict

This is echmascript 5 feature .

```js
'use strict';
```

## requre

```js
var collect = require(collect.js)
```

## call and apply

```js
// Call() takes comma-separated arguments, ex:
.call(scope, arg1, arg2, arg3)
// and apply() takes an array of arguments, ex:
.apply(scope, [arg1, arg2, arg3])
```

### call

```js
let name = (...t) => {
  console.log(t);
}
name.call(name, "kamal","jamal");
// [kamal,jamal]
```

### apply

```js
let name = (...t) => {
  console.log(t);
}
name.apply(name, ["kamal","jamal"]);
// [kamal,jamal]
```

## bind

```js


let name = (t,me,...other) => {
  console.log(`${t} ${me}`);
  console.log(other);
}

let bName = name.bind(name,"I am", "jamal");
bName("kamal","maruf","sadia")
// I am jamal
// [ 'kamal', 'maruf', 'sadia' ]
```
## resource


## video
