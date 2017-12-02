---
description: Compositions VS Inheritence
keywords: react, react.js, js
title: Compositions vs Inheritence
---

## what is Compositions

* It's as like a props . Basically it is components props .

```js
//Test.js
Class Test extends Component {
  constructor(props){
    super(props)
  }
  render(
    <div>
      {this.props.top}
      {this.props.middle}
      {this.props.bottom}
    </div>
  )
}
```

```js
//Body.js
Class Test extends Component {
  render(
    <Test top={<TopComponent/>}
          middle={<MiddleComponent/>}
          bottom={<BottomComponent/>}
    />
  )
}
```

* https://www.youtube.com/watch?v=ldtBhHRltSg
