---
description: Promises JavaScript
keywords: js
title: Promises javascript
toc_max: 4
---

### promises has 3 elements

* pending
* resolve
* reject

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
