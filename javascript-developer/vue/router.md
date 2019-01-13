


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
