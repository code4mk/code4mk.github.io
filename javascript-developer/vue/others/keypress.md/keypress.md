---
description: keypress
keywords: vue,vusjs
title: keypress
toc_max: 4
---

* https://forum.vuejs.org/t/capture-keypress-for-all-keys/14560/2

```js
 mounted() {
    window.addEventListener("keypress", function(e) {
      console.log(String.fromCharCode(e.keyCode));
    }.bind(this));
  }
```

Solution B: a closure

```js
 mounted() {
    const self = this
    window.addEventListener("keypress", function(e) {
      // use self instead of this in here
      console.log(String.fromCharCode(e.keyCode));
    });
  }
```
Solution C: Arrow function

```js
 mounted() {
    window.addEventListener("keypress", e => {
      console.log(String.fromCharCode(e.keyCode));
    });
  }
  ```
This is not a Vue-specific problem - understanding how this works in Javascript is fundamental, you should read up on it.
