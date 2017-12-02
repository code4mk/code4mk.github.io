---
description: action mobx
keywords: react, mobx
title: action mobx
toc_max: 4
---

## what is action ?

Action is a calculation method . But action don't return result instance. Aftar javascript events then return result.

```js
// store/Index.js
import {observable,action} from 'mobx'
class MyComponent{
    @observable name = "Mr. Kamal"
    @observable title = "web developer"
    @observable age

    @action
      todos(text) {
        this.name =  text
      }
}
export default window.__STATE = new MyComponent(window.__STATE)
```

## Access action

action access as like react event

```js
<input  value={this.props.store.name} onChange={(e) => this.props.store.todos(e.target.value)} type="text" placeholder="Text input"/>
```
