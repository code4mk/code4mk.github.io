---
description: Component
keywords: react, react.js, js
title: Component
toc_max: 2
---

## What is component ?

Component is a small piece of UI . `component+component+.....+ n = Full UI page`

## Type of component

Two types of component . one is `es6 type` another is `react functional type`

## structure of component (child)

* type-1 ES6

```js
// components/MyComponent.js
import React, { Component } from 'react'

 class MyComponent extends Component {
  render() {
    return (
      <h1> This is MyComponent </h1>
    );
  }
}
export default MyComponent
```
*  type 2 - ES6

```js
// components/MyComponent.js
import React, { Component } from 'react'

export default class MyComponent extends Component {
  render() {
    return (
      <h1> This is MyComponent </h1>
    );
  }
}
```

## how to use  component

Component connected parents components with `import`  

```js

import React, { Component } from 'react'
import MyComponent from './components/MyComponent'

class App extends Component {
  render() {
    return (
      <h2> Welcome to code4mk.org </h2>
      <MyComponent/>
    );
  }
}
export default App
```

## How import CSS/SASS file

* `import './assets/css/color.scss` custom

* `import 'bulma/bulma.sass'`  framework (node)
