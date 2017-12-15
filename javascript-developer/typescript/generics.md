---
description: Generics typescript
keywords: node.js, js, typescript, ts
title: Generics typescript
toc_max: 4
---

## Generics

Generics use for `reuseable / desired type ` .

```ts
function identity<T>(arg: T): T {
    return arg;
}
 identity:<string>("Mostafa Kamal");
 identity:<number>(21);
 ```
