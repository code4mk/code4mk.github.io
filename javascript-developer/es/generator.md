---
description: generator
keywords: es,es6,js
title: generator
toc_max:  4
---

```js
function* users(){
  yield 'kamal';
  yield 'jamal';
  yield 'maruf';
}
let mk = users();
console.log(mk.next().value);
console.log(mk.next().value);
console.log(mk.next().value);
// kamal,jamal,maruf
```

```js
function* users(){
  yield 'kamal';
  yield 'jamal';
  yield 'maruf';
}
let mk = users();
for (let t of mk){
  console.log(t)
}
// kamal,jamal,maruf
```

## loop break & resume

* break and resume (yield,next())

```js
function* users(){
  for (let i=0; i<=10; i++){
  yield i;
  }
}
let us = users();
console.log(us.next().value)
console.log(us.next().value)
```

* https://codeburst.io/what-are-javascript-generators-and-how-to-use-them-c6f2713fd12e

# package

* [co](https://github.com/tj/co)
