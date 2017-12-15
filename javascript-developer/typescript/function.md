---
description: Function Typescript
keywords: node.js, js, typescript, ts
title: Function Typescript
toc_max: 4
---

## Function


## default parameters

```ts
function myName(firstName: string, lastName: string) {
    return firstName + " " + lastName;
}
let result1 = myName("Mostafa", "Kamal"); // right >> when exact two parameters
```

## optional parameters

 typescript `?` optinal

```ts
function myName(firstName?: string, lastName?: string) {
    return firstName + " " + lastName;
}
let result1 = myName("Mostafa", "Kamal", "kawsar");
```

## rest parameters

 typescript `...` rest

```ts
function myName(firstName?: string, ...restOfName: string[]) {
    return firstName + " " + restOfName.join(" ");
}
let result1 = myName("Mostafa", "Kamal", "kawsar");
```
