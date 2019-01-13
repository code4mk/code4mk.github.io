

```js
const initialState = [
     {id:1 ,name: 'Product A', image: 'pic-001.jpg', tags: ['nature', 'camping', 'outdoor']},
     {id:2 ,name: 'Product B', image: 'pic-002.jpg', tags: ['winter', 'hiking', 'camping', 'snow']},
     {id:3 ,name: 'Product C', image: 'pic-003.jpg', tags: ['kamal','vacation', 'family', 'kids', 'river', 'lake', 'fishing']}
];

const filterByTags = [ 'kamal'];

const filterByTagSet = new Set(filterByTags);

const result = initialState.filter((o) =>
  o.tags.some((tag) => filterByTagSet.has(tag))
);

console.log(result);
```


# wait  keydown/keyup as like debounce

* https://schier.co/blog/2014/12/08/wait-for-user-to-stop-typing-using-javascript.html
