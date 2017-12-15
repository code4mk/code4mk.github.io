---
description: class typescript
keywords: node.js, js, typescript, ts
title: class typescript
toc_max: 4
---

## what is class?

A class is a template which hold a lot of objects and methods .
* class is a blueprint or template or set of instructions

## general class

```ts
class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        return "Hi, " + this.greeting;
    }
}

let greeter = new Greeter("code4mk");
```

## inheritance class

```ts
class Animal {
    move(distanceInMeters: number = 0) {
        console.log(`Super Man  weight is  ${weight}kg. `);
    }
}

class Human extends Animal {
    run() {
        console.log('ok go!');
    }
}

const dog = new Human();
dog.run();
dog.move(10);
dog.run();
```
