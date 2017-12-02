---
description: Constructor and state (React)
keywords: react, react.js, js
title: Constructor and state (React)
toc_max: 4
---

## What is constructor
The constructor method is a special method for creating and initializing an object created with a class .

```js
constructor() {
    //
  }
```

## What is super method

The `super` keyword is used to access and call functions on an object's parent.

## What is state

State is a initial store room for initial objects or data . All data access from `state` .

```js
this.state = {
  posts: [],
  comments: []
};
```

## props inside constructor

```js
constructor(props) {
    super(props);
    this.state = {
      posts: [],
      comments: []
    };
  }
```
