---
description: function
keywords: js
title: function
toc_max: 4
---

## what is function

`Function` is a block for getting a particular task

* particular task
* reuse

### function element

* function name
* function keyword
* parentheses  (parameter)
* curly brackets (`{}`) . where stay statement
  * return
  
#### ex-1
```js
function functionName (par1,par2) {
  return par1 + par2;
}
console.log(functionName(3,2));
// 5
```

#### ex-2

```js
functionName = function (var1,var2) {
  return var1 + var2;
}
let result =  functionName(3,2);
console.log(result);
// 5
```

#### es6

* See more details in `es6 tutorial` in code4mk.

```js
functionName =  (var1,var2) => {
  return var1 + var2;
}
let result =  functionName(3,2);
console.log(result);
// 5
```
