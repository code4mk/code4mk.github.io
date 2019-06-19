

# dynamic layout

```js
// index.vue
export default {
  layout () {
    return checkSomethingYouWant ? 'layout_a' : 'layout_b' ;
  }
}
```

```js
layout: (context) => context.isMobile ? 'mobile' : 'desktop'
```

* [issue 265](https://github.com/nuxt/nuxt.js/issues/265)
