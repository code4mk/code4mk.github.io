---
description: Conditions (React)
keywords: react, react.js, js
title: Conditions (React)
toc_max: 4
---
## inside render if/else

```js
import React, { Component } from 'react';
class  MyComponent extends Component {
  render (){
    let myStatus;
    if (2 == 2) {
      myStatus = (
        <span>
          <h2>Welcome To code4mk.org</h2>
        </span>
      )
    } else {
      myStatus = (
        <h2>Join with code4mk.org</h2>
      )
    }
    return(
      <div>
        <h1>Your status</h1>
        { myStatus }
      </div>
    )
  }
}
```

## clean render if/else

```js
import React, { Component } from 'react';
class  MyComponent extends Component {
  myStatusList() {
    if (2==2) {
      return (
        <span>
          <h2>Welcome To code4mk.org</h2>
        </span>
      );
    } else {
      return (
        <h2>Join with code4mk.org</h2>
      );
    }
  }
  render (){
    return(
      <div>
        <h1>Your status</h1>
        { this.myStatus() }
      </div>
    )
  }
}
```
## if/else es6

if/else condition inside render

```js
<div>
  {(() => {
    if (2==3) {
      return (
        <span>
          <h2>Welcome To code4mk.org</h2>
        </span>
        );
      } else {
        return (
          <h2>Join with code4mk.org</h2>
        );
      }
})()}
</div>
```
## switch inside render

```js
<div>
      {(() => {
          switch('test') {
              case 'info':
                  return (
                    <h1> info</h1>
                  )
              case 'warning':
                  return (
                    <h1> warning</h1>
                  )
              case 'error':
                  return (
                    <h1> error</h1>
                  )

              default:
              return (
                <h1> default</h1>
              )
          }
      })()}
  </div>
  ```

## ternary operator  inline
ternary condition `2==2 ? 'number is 2' : 'Number isn't 2`

```js
import React, { Component } from 'react';
class MyComponent extends Component {
  render (){
    return(
      <div>
        <h1>My Super React App</h1>
        { 2==2 ?
            <span>
              <h2>Welcome To code4mk.org</h2>
            </span>
            :
            <h2>Join with code4mk.org</h2>
        }
      </div>
    )
  }
}
```

* http://devnacho.com/2016/02/15/different-ways-to-add-if-else-statements-in-JSX/
