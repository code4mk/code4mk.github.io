
# meta middleware


```js
router.beforeEach((to, from, next) => {

  if (to.matched.some(record => record.meta.requiresAuth)) {
    axios.get(`/site/check`)
      .then(function (response) {
        if (response.data !== true) {
          next({
            path: '/spa/login',
            // name: 'name',
            query: { redirect: to.fullPath }
          })
        } else {
          next()
        }
      }.bind(this))
  } else {
    next() // make sure to always call next()!
  }

})
