---
description: Lists and key (React)
keywords: react, react.js, js
title: Lists and key (React)
toc_max: 4
---

## Lists and key  

It's a kind of loop system with es6 (`map`) .

```jsx
 const member = users.map(user =>
    <li key={user.id}>user.name</li>
   )
```

## Default List

```js
constructor(props) {
  super(props);
  this.state = {
    posts: [
      {id: 1, title: "This is your webpack"},
      {id: 2, title: "This is your vue"},
      {id: 3, title: "This is your react"},
      {id: 4, title: "This is your angular"},
      {id: 5, title: "This is your ionic"},
      {id: 6, title: "This is your native"}
    ]
  }
}

// render

{
  this.state.posts.map((post) =>
    <li key={post.id}> {post.title}</li>
  )
}
```
## axios list

```js
constructor(props) {
  super(props);
  this.state = {
    axiosposts: []
  }
}

componentDidMount() {
 const self = this;
 axios.get('https://jsonplaceholder.typicode.com/posts')
   .then(function (response){
    self.setState({ axiosposts: response.data })
   })
   .catch(function (error){
     console.log(error)
   });
}

// render

{
  this.state.axiosposts.map((post) =>
    <li key={post.id}> {post.title}</li>
  )
}
```
