---
description: types typescript
keywords: node.js, js, typescript, ts
title: types typescript
toc_max: 4
---
## type

```bash
# Boolean
let isDanger: boolean = true;

# number
let isDanger: number = 121;

# string
let isDanger: string = "code4mk org";

# template string
let isDanger: string = "code4mk.org";
let isResult: string = `welcome to ${isDanger}`;

# Array
let isDanger: number[] = [1, 3, 5, 7];
let isDanger: Array<number> = [1, 3, 5, 7];

# Array of objects
let employees: Array<{name: string, age: number, [key: string]: any}> = [
  { name: 'kamal', age: 26 },
  { name: 'mostafa', age: 21}
]

# Array of objects
let employees: {name: string, age: number}[] = [
  { name: 'kamal', age: 26 },
  { name: 'mostafa', age: 21}
]

# any
let isDanger: any = "this is kamal"
```

# resources 
* [typescripttutorial](https://www.typescripttutorial.net/typescript-tutorial/typescript-object-type/)
* [array of objects stackoverflow](https://stackoverflow.com/questions/35435042/how-can-i-define-an-array-of-objects)
* <a href="https://youtu.be/Q6pePpv-C-E" target="_blank">Video Tutorial</a>
