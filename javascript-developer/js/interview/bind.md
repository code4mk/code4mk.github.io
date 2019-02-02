

# bind

~ create a function by bind

```js
let user = {
  firstName: "John"
};

function func() {
  console.log(this.firstName);
}

let funcUser = func.bind(user);
funcUser(); // John
```

* [mdn](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind)
* [smashingmagazine](https://www.smashingmagazine.com/2014/01/understanding-javascript-function-prototype-bind/)
* [stackoverflow](https://stackoverflow.com/questions/2236747/use-of-the-javascript-bind-method)
* [jsinfo](https://javascript.info/bind)

# call/apply/bind

* [codementor](https://www.codementor.io/niladrisekhardutta/how-to-call-apply-and-bind-in-javascript-8i1jca6jp)

# call vs apply

```js
let info = 'kamal'
let user = (pro,age) => {
  return `${this.info}\'s ${pro} is ${age} `
}
console.log(user.call(info,'age',21))
// kamal's age is 21
```
## apply

* same as call
* but 2nd argument must be an array

```js
let info = 'kamal'
let datas = ['age',21]
let user = (pro,age) => {
  return `${this.info}\'s ${pro} is ${age} `
}
console.log(user.apply(info,datas))
// kamal's age is 21
```
