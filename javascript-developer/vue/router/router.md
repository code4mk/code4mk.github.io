


# query

* https://stackoverflow.com/questions/40382388/how-to-set-url-query-params-in-vue-with-vue-router
* https://www.youtube.com/watch?v=Bbt3NWTZqbs

#  route active link color change

* https://youtu.be/e8vLk4aZBLM?list=PL1FWK-sgJ9eljz7Tm5SSUcCt5sxmwoFlC
* https://stackoverflow.com/questions/46083220/how-to-vuejs-router-link-active-style
* https://router.vuejs.org/api/#router-link

# tips

```bash
{{this.$route.path}}
{{this.$route.query}}
{{ $route.params.id }}
{{ $route.params }}
```

```js
this.$router.push({ query: { ...this.$route.query, c: 3 }})
```
* query remove

```js
let query = Object.assign({}, this.$route.query);
delete query.color;
this.$router.replace({ query });
```

* https://github.com/snipcart/vue-blog-demo/blob/master/src/components/BlogFeed.vue#L8 `link :to`

# router history

* https://github.com/vuejs/vue-router/issues/883

# router link

* https://github.com/sanity-io/example-ecommerce-snipcart-vue/blob/master/pages/product/_product.vue#L12

# source search router push

* https://github.com/algolia/vue-instantsearch-examples/blob/master/examples/vue-router/src/Search.vue#L59


# router meta field

* https://vueschool.io/lessons/global-navigation-guards-and-meta-fields
* https://github.com/juanwmedia/vue-firebase/blob/master/56-vue-router-meta-field/src/main.js
* https://markus.oberlehner.net/blog/implementing-a-simple-middleware-with-vue-router/

# issue

* https://stackoverflow.com/questions/48760261/how-to-export-router-instance-in-vue-js-2
* https://github.com/axios/axios/issues/638#issuecomment-271119591
