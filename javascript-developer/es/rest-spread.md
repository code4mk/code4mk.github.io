


## default

default function parameter.

* dafult parameter will be last side.

```js
let users = (name,age=21) => {
  console.log(`${name} is ${age} years old`)
}
users('kamal');
// kamal is 21 years old
```

## rest

* rest represent by 3 dot (`...`) as (`...num`)

```js
result = (x,...num) => {
  let restNum = num // [2,4,6]
  let total = 0;
  restNum.forEach(number=> {
    total+=number
  })
  console.log(`total is ${total}`)
}
result(5,2,4,6)
// total is 12
```

## spread

```js
let spreadNum = [5,6,7];

result = (x,...num) => {
  let restNum = num
  let total = 0;
  restNum.forEach(me=>{
    total+=me
  })
  console.log(`total is ${total}`)
}

result(1,...spreadNum)
// 18
```

```js
let nums = [1,2,3];
let spreadNum = [...nums,4,5,6]

console.log(spreadNum);
// [1,2,3,4,5,6]
```
