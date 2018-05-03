---
description: callback
keywords: js
title: callback
toc_max: 4
---

 Callbacks are a way to make sure certain code doesn’t execute until other code has already finished execution.

 * callback is function which run inside a function
 * callback retrive data which data can use others function.


```js
users = (name) => {
  console.log(`this is ${name}`);
}
account = (callback) => {
  let name = 'kamal';
  callback(name);
}

account(users);

```

```js
account = (callback) => {
    let name = 'kamal';
    callback(name);
}
account(name => {
  console.log(name);
})
```


## resource

* [mdn](https://developer.mozilla.org/en-US/docs/Glossary/Callback_function)
* [js info](https://javascript.info/callbacks)
* [javascriptissexy](http://javascriptissexy.com/understand-javascript-callback-functions-and-use-them/)

## video

* https://www.youtube.com/watch?v=Nau-iEEgEoM
* https://www.youtube.com/watch?v=pTbSfCT42_M
