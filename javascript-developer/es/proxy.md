---
description: echmaScript proxy
keywords: es,es6,js,es6_proxy
title: echmaScript proxy
toc_max:  4
---

What is proxy?

In JavaScript, a proxy is an object that controls access to another object, called the target object. You can use a proxy to intercept and modify the behavior of operations performed on the target object, such as getting and setting properties, calling methods, and creating new objects.

~ courtesy chatgpt


# example

```js
let user = {name: 'kamal', age: 21}

let handler = {
  get(target, name){
    return target[name].toUpperCase()
  },
  set(target, name, value) {
    if(typeof value === 'string') {
      target[name] = value.trim().toUpperCase();
    }
  }
}

let userProxy = new Proxy(user,handler)

userProxy.name = 'mostafa'

console.log(userProxy.name)
```

# Resources
* [proxy - Nodecasts youtube](https://www.youtube.com/watch?v=KJ3uYyUp-yo)