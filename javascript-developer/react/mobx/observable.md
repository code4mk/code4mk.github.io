---
description: observable
keywords: react, mobx
title: observable
toc_max: 4
---
---

## what is observable

`observable` is a kind of variable . mobx environment your all data binding with observable.

```js
import {observable} from 'mobx'
class MyComponent{
    @observable name = "Mr. Kamal"
    @observable title = "web developer"
    @observable age
}
export default window.__STATE = new MyComponent(window.__STATE)
```
