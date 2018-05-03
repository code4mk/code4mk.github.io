---
description: Promises JavaScript
keywords: js
title: Promises javascript
toc_max: 4
---

`promise` is `alternative` of `callback` . Promise is Asynchronous.

### promise has 3 states

* `pending`
* `resolve` (fullfill / success)
* `reject` (not fullfill / error)

## create promise

```js
let promise = new Promise((resolve,reject)=>{
  let status = true;
  if(status){
    resolve('data is fetching now');
  }else{
    reject('failed , something missing / error');
  }
});
connectedStatus = (result) => {
  console.log(result)
}
promise.then(connectedStatus).catch(connectedStatus);
```

## chaining promise

```js
let promise = new Promise((resolve,reject)=>{
  let status = true;
  if(status){
    let result = 'database is connected';
    resolve(result);
  }else{
    reject('failed , something missing / error');
  }
});

connectedStatus = (result) => {
  console.log(result);
  return new Promise((resolve,reject)=> {
    let status = false;
    if(status){
      resolve('data is fetching now');
    }else{
      reject('fetching error');
    }
  })
}
fetchMe = (result) => {
  console.log(result);
}
promise.then(connectedStatus).then(fetchMe).catch(fetchMe);
```

## promise.all

* `wait for all function until resolve`
* `return an array`

```js
let promise1 = new Promise((resolve,reject) => {
  resolve('promise one');
});
let promise2 = new Promise((resolve,reject) => {
  resolve('promise two rejected');
});
let promise3 = new Promise((resolve,reject) => {
  resolve('promise three');
});
let out = (result) => {
  result.forEach((t,index) =>{
    console.log(`index ${index} is = ${t}`);
  })
}
console.log('this is bottom text,  right? aync issue')
Promise.all([promise1, promise2, promise3]).then(result => {out(result)}).catch(out);
```

## promise.race

* `wait for first function until resolve`
* `return only first function value`

```js
let promise1 = new Promise((resolve,reject) => {
  resolve('promise one');
});
let promise2 = new Promise((resolve,reject) => {
  resolve('promise two');
});
let promise3 = new Promise((resolve,reject) => {
  resolve('promise three');
});
let out = (result) => {
  console.log(result);
}
console.log('this is bottom text,  right? aync issue')
Promise.race([promise1, promise2, promise3]).then(result => {out(result)});
```

### resources

* https://rowanmanning.com/posts/javascript-for-beginners-async/
* https://www.pluralsight.com/guides/introduction-to-asynchronous-javascript
* https://scotch.io/tutorials/javascript-promises-for-dummies
* https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-promise-27fc71e77261
* https://www.sitepoint.com/overview-javascript-promises/
* https://spring.io/understanding/javascript-promises
* https://stackoverflow.com/questions/39004567/why-do-we-need-promise-in-js
* https://hackernoon.com/6-reasons-why-javascripts-async-await-blows-promises-away-tutorial-c7ec10518dd9
* https://www.quora.com/Whats-the-difference-between-a-promise-and-a-callback-in-Javascript
* https://flaviocopes.com/javascript-promises/
* https://github.com/wbinnssmith/awesome-promises
* https://github.com/mattdesl/promise-cookbook
* https://devhints.io/promise
* https://www.akshatsharma.com/posts/javascript%20promise%20cheat-sheet/index.html

* https://javascript.info/async ***

### package
* [caolan](https://github.com/caolan/async)

### video

* https://www.youtube.com/watch?v=s6SH72uAn3Q
