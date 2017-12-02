---
description: Forms
keywords: react, react.js, js
title: Forms
toc_max: 2
---


## value (input)

* `value={this.state.inputVal} onChange={(e) => {this.setState({inputVal: e.target.value})}}`

```js
constructor(props) {
      super(props);
      this.state = {
        inputVal: "usern name",
        suggestions: []
      }
  }
```

## Form system react

React form system is diffrent from core html form system for value system . `value` comes from `state properties` of react form system . `<input type="text" value={this.state.something} />`


## 3 steps

```js
//step 1
constructor(props) {
  super(props);
 this.state = {
   value: ""
 }
 //step 2
 valueChange(event) {
   this.setState(
     value: event.target.value
   )
 }
 //step 3
 render() {
   return(
     <input type="text" value={this.state.value} onChange={this.valueChange} />
   )
 }
 ```

## refs

 Refs is as like a id . you can use refs inside form . you can access value with refs

 ```js
<input ref="myText"/>
// or
<input
        type="text"
        ref={(input) => { myText = input; }} />
 ```

 * Access ref


 ```js
 var val = this.refs.myText.value ;
 ```

## m
