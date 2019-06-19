
# how to use sass ?

```bash
# npm
npm i --save-dev node-sass sass-loader
# or yarn
yarn add node-sass sass-loader -D
```

# assets directory sass

```js
<style lang="scss">
@import "~/assets/scss/main.scss";
.navbar {
  background-color: $background-color;
}
</style>
```

# style-resources-module

* [style-resources-module](https://github.com/nuxt-community/style-resources-module)

```js
export default {
  modules: [
    '@nuxtjs/style-resources',
  ],

  styleResources: {
   // your settings here
   sass: [], // alternative: scss
   less: [],
   stylus: []
  }
}
```
