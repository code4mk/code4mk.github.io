---
description: input / output Angular
keywords: js, angular
title: input / output Angular
toc_max: 4
---

## input / output

input / output is aslike props if compare other js library .

* input = receive data (parent to child)
* output = return back data (child to parent)

## input task

```ts
// parent.html

// loacl variable from parent
<input type="text" #parentValue (keyup)="0">
<input-example [myValue]="parentValue.value"></input-example>

// or data from parent variable
<input-example [myValue]="parentValue"></input-example>
```

```ts
// children.ts
@Component({
  inputs: ['myValue'],
})
```

```html
 <!-- children.html -->
<h1>{'{myValue}}</h1>
```

## output task

```ts
//child.ts
import { EventEmitter } from '@angular/core';
@Component({
  outputs: ['myValue'],
})
myValue = new new EventEmitter<string>();
```

```html
<!-- child.html -->
<input type="text" #childInput (keyup)="onChange(childInput.value)">
```

```html
<!-- parent.html -->
<input-example (onChange)="childData = $event"></input-example>
<h1>{'{childData}}</h1>
```
