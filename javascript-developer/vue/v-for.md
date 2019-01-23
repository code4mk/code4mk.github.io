

* https://github.com/algolia/vue-instantsearch/blob/v2/src/components/RatingMenu.vue#L31

```html
<li
          v-for="(item, key) in state.items"
          :key="key"
          :class="[suit('item'), item.isRefined && suit('item', 'selected')]"
></li>
```
