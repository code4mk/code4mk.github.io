---
description: What is React?
keywords: react, react.js, js
title: What is React
toc_max: 4
---


## What is React ?

React is a popular JS library . It is a declarative, efficient, and flexible library for building UI .

## Who miantain React?

`React` is maintained by `Facebook Community` . Main author `Jordan Walke`, `Denis Popov`

## When first release React?

* React Initial release in `March 2013`

## Official React .

* [React Repo](https://github.com/facebook/react)

* [React.org](https://reactjs.org/)

## JSX data access
`{}` this is JSX system for all task

## props

```js
import Sidebar from './something'
var users = {
  name: 'kamal',
  age: 25,
  password: 1234
}
<Sidebar users={users}>
//or
<Sidebar users={this.state.users}>
```

## access props

```js
<h1>{this.props.users.name}</h1>
```

* props type package by react/facebook
   https://reactjs.org/docs/typechecking-with-proptypes.html


## props children
```css
<Sidebar>
  <h1> This is children props </h1>
</sidebar>
```

* access by `{this.props.children}` inside Sidebar component .

* css - js propertis https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Properties_Reference

## Reference  
* [https://medium.com/@pshrmn/a-simple-react-router-v4-tutorial-7f23ff27adf](https://medium.com/@pshrmn/a-simple-react-router-v4-tutorial-7f23ff27adf)
* [https://reactarmory.com](https://reactarmory.com)
* [https://reactjs.org](https://reactjs.org)
* [https://codesandbox.io/](https://codesandbox.io/)
* [https://www.reactenlightenment.com/](https://www.reactenlightenment.com/)
* [https://blog.andrewray.me/reactjs-for-stupid-people/](https://blog.andrewray.me/reactjs-for-stupid-people/)
* [https://frontendmasters.com/courses/react-intro/](https://frontendmasters.com/courses/react-intro/)
* [https://frontendmasters.com/books/front-end-handbook/2017/learning/react-redux.html](https://frontendmasters.com/books/front-end-handbook/2017/learning/react-redux.html)

## path active  

[https://www.youtube.com/watch?v=XVdwq8W2ZsM&list=PLoYCgNOIyGABj2GQSlDRjgvXtqfDxKm5b&index=8](https://www.youtube.com/watch?v=XVdwq8W2ZsM&list=PLoYCgNOIyGABj2GQSlDRjgvXtqfDxKm5b&index=8)

```js

const aboutActive = location.pathname.match(/^\/about)? "active" : "" ;

```
