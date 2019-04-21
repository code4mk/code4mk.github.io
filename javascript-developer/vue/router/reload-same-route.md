
# Reload / same route


# way 1

```js
<router-link @click.native="reload()" to="/">/home</router-link>
```

```js
<router-link  :to="`?t=${Date.now()}`">Reload</router-link>
```

# way  2

```js
<router-view :key="$route.fullPath"></router-view>
```


# method for 1
```js

methods: {
  reload: function(){
    this.$router.replace('?reload=true')
  }
  reload: function(){
    window.scrollTo(0,0)
  }
}
```


# issue

* [1155](https://github.com/vuejs/vue-router/issues/1155)
