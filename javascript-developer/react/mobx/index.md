---
description: What is mobx?
keywords: react, react.js, js
title: What is mobx
toc_max: 4
---

## What is mobx?
mobX is a scalable state managemment system .

![Run nginx edge>](images/mobx.png)

## How use mobx

You can use mobx inside react project easily .

``` bash
# npm
npm install mobx --save
npm install mobx-react --save
npm install babel-plugin-transform-decorators-legacy --save

# yarn
yarn add mobx
yarn add mobx-react
yarn add babel-plugin-transform-decorators-legacy
```

* project `.babelrc` add `"plugins": ["transform-decorators-legacy"]`

## mobx import methods

```js
import {observable, action, computed, autorun, extendObservable, toJS} from 'mobx'
```
## mobx-react import methods

```js
import {inject, observer } from 'mobx-react'
```
