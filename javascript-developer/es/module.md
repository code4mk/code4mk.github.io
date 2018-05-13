---
description: Module
keywords: es,es6,js
title: module
toc_max:  4
---

# module

module two elements

* export
* import

# export

## single default export

```js
export default class User{
  .........
}
```

## multiple export

```js
export add = () = {...}
export minus = () = {...}
```

```js
 add = () = {...}
 minus = () = {...}
 export {add, minus};
```

# import

## all

```js
import * from './react';
```

## default import

```js
import component from './react'
```

## alias / rename

```js
import component as comp from './react'
```

## Named import

```js
import {btn,badge} from './react'
```

## only load

```js
import './react'
```

# sourec

* [http://jsmodules.io/](http://jsmodules.io/)
* [exploringjs](http://exploringjs.com/es6/ch_modules.html)
* [sitepoint](https://www.sitepoint.com/understanding-es6-modules/)
* [sitepoint](https://www.sitepoint.com/understanding-module-exports-exports-node-js/)
* [coffescript just idea](http://coffeescript.org/#modules)
