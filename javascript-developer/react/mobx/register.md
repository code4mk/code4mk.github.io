---
description: linked up mobx props
keywords: react, react.js, js
title: linked up  mobx props
toc_max: 4
---

## mobx props
mobx works with props . so first task is create a props. Best practise is global props.


```js
//main.js
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "mobx-react";
import store from "./store";
import post from "./store1/Post";

const stores = {
  store,
  post
};
ReactDOM.render(
  // store={store}
  <Provider {...stores}>
      <App/>
  </Provider>,
    document.getElementById('root')
)
```

## linked props with react component

```js
import React, { Component } from 'react'
import {inject, observer } from "mobx-react"

@inject("post","store")
@observer
class SelectForm extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <h1>{this.props.store.x}</h1>
      <h1>{this.props.post.x}</h1>
    );
  }
}
export default SelectForm
```

## mobx pettern

```js
//store/Index.js
//store/Post.js
import {observable,action} from 'mobx'
class MyComponent{
    @observable name = "tester is boss"
    @observable title = "ok boss"
    @observable ack

    @action
      todos(text) {
        this.name =  text
      }
      todo(text) {
        this.name =  "2nd todo"
      }
}


// var store = window.store = new MyComponent
//
// export default store
// window.__STATE = new State(window.__STATE)

export default window.__STATE = new MyComponent(window.__STATE)
```
