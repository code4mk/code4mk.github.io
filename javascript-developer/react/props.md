---
description: Props (React)
keywords: react, react.js, js
title: Props (React)
toc_max: 4
---

## What is props ?
 `Props` is a way to communicate properties (data)  between parent and child component . Props is a parameter inside parent component . `myPropsPosts={this.state.posts}`


## Parent Component

```js
 //Parent Component
 import React, { Component } from 'react'
 import ChildComponent from './ChildComponent'
 class ParentComponent extends Component {
   constructor() {
     super();
     this.state = {
       posts: [
         {id: 1, title: "This is your webpack"},
         {id: 2, title: "This is your vue"},
         {id: 3, title: "This is your react"},
         {id: 4, title: "This is your angular"},
         {id: 5, title: "This is your ionic"},
         {id: 6, title: "This is your native"}
       ]
     };
   }
   render() {
     return (
           <ChildComponent myPropsPosts={this.state.posts}>
             <h2> <strong>This Child element inside parent</strong> </h2>
           </ChildComponent>
     );
   }
 }
 export default ParentComponent
 ```

## Child component

```js
import React, { Component } from 'react'

class ParentComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: props.myPropsPosts
    }
  }
  render() {
    return (
      <tbody>
      {
        this.state.posts.map((post) =>
          <tr key={post.id}>
            <td>{post.id}</td>
            <td key={post.id}> {post.title}</td>
          </tr>
        )
       }
      </tbody>
    );
  }
}
export default ParentComponent
```
