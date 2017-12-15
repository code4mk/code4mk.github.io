---
description: Jasmine
keywords: node.js, testing, unit testing, jasmine
title: Jasmine
toc_max: 4
---

## What is Jasmine ?
`Jasmine` is a BDD(behavior-driven development) framework for  `testing` of `JavaScript` code.


## Who develop Jasmine ?

* [Pivotal Lab](https://pivotal.io/labs)

## Install

```bash
npm install jasmine

# or globall install
npm install -g jasmine

jasmine init

```

## Jasmine Demo

```ts
describe('A jasmine testing', function() {
  it('Any test', function() {
    console.log('Jasmine is awesome.')
  });
});
```

## Jasmine Demo ES6

```ts
describe('A jasmine testing', () => {
  it('Any test', () => {
    console.log('Jasmine is awesome')
  });
});
```

## Official

* [Jasmine site](https://jasmine.github.io/)
* [jasmine doc 2.8](https://jasmine.github.io/2.8/introduction.html)
* [Jasmin github](https://github.com/jasmine/jasmine)
