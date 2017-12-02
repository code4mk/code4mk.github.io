---
description: computed mobx
keywords: react, mobx
title: computed mobx
toc_max: 4
---
## what is computed

computed is a calculation method but return result instance.

```js
// store/Index.js
import {observable, computed} from "mobx";

class OrderLine {
    @observable price = 20;
    @observable vat = 1;

    constructor(price) {
        this.price = price;
    }

    @computed get total() {
        return this.price + this.vat;
    }
}
```

## Access computed

```js
{this.props.store.total}
```
