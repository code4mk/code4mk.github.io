---
description: Event
keywords: react, react.js, js
title: Event
toc_max: 4
---

##  React Event Action

* `onClick`
* es6 system `onClick={(e) => this.makeOlder(15)}` you pass parameter
* react system `onclick = {this.makeOlder.bind(this)}` not accept parameter

## class change system

```js
constructor(props) {
  super(props);
 this.state = {
   age: props.users.age,
   btn: "is-danger"
 }
}
makeOlder() {
  this.setState((prevState, props) => ({
    age: prevState.age + 2,
    btn: "is-info is-loading"
  }));
}
```
* * `className={"button" + " " + this.state.btn}`

* https://appendto.com/2017/01/react-events-101/
* https://medium.com/@machnicki/handle-events-in-react-with-arrow-functions-ede88184bbb
