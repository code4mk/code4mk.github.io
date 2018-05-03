---
description: async function
keywords: js
title: async function
toc_max: 4
---

`async` is short form of asynchronous. async behavioour is opposite of sync. `Promise` more comfort with `async`.

### synchronous  vs asynchronous

## synchronous

* excute  step by step gradually.

```js
console.log('one para');
console.log('two para');
console.log('three para');
// output:
// one para
// two para
// three para
```

## asynchronous

* don't excute step by step gradually.
* don't wait for excute

```js
setTimeout(() => {
  console.log('one');
})
console.log('two');
console.log('three');
// if gradually , output : one, two, three
// but asynchronous output : two,three ,one
// don't wait for one excute
```

### async function

```js
let users = async () => {
  return 1;
}
users().then(t => console.log(t));
```

## await

* await wait until promise settle.
* await use only inside async function;

```js
let users = async()=> {
  let promise = new Promise((resolve,reject)=> {
    let name = 'kamal';
    setTimeout(()=> {
      resolve(name);
    },5000);
  });
  let userName = await promise;
  console.log(userName);
}
users();
```

```js
users = async() => {
  let git = await fetch('https://api.github.com/users/mostafa6765');
  let gitUser = await git.json();
  return gitUser;
}
users().then(t => console.log(t));
```

## error

* try...catch
* then...catch (promise)

# try -> catch

```js
users = async() => {
  try{
    let git = await fetch('https://no-url');
    let gitUser = await git.json();
    return gitUser;
  }catch(e){
    alert(e)
  }
}
users().then(t => console.log(t));
```

# then -> catch

```js
users = async() => {
  let git = await fetch('https://no-url');
  let gitUser = await git.json();
  return gitUser;
}
users().then(t => console.log(t)).catch(t=> console.log(t));
```
