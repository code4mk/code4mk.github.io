---
description: getter & setter
keywords: es,es6,js
title: getter & setter
toc_max:  4
---

## objects set get

```js
let user = {
    firstName: 'Mostafa',
    lastName: 'Kamal',
    get fullName() {
        return this.firstName + ' ' + this.lastName;
    },
    set fullName (name) {
        var words = name.toString().split(' ');
        this.firstName = words[0] || '';
        this.lastName = words[1] || '';
    }
}

user.fullName = 'Maruf Fakir';
console.log(`firstName is ${user.firstName}`);
```


## class get set

```js
class User {
  constructor (first, last) {
    this.firstName = first;
    this.lastName = last;
  }

  get name() {
    return `${this.firstName} ${this.lastName}`
  }
  set name(name) {
    let split = name.split(' ');
    this.firstName = split[0];
    this.lastName = split[1];
  }
}

let user = new User('code4mk', 'tester');
console.log(user.name);

user.name = "Mostafa Kamal";
console.log(user.name);

// code4mk tester
// Mostafa Kamal
```

* https://javascriptplayground.com/es5-getters-setters/
