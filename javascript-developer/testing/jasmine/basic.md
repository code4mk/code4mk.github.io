---
description: Basic Jasmine
keywords: node.js, testing, unit testing, jasmine
title: Basic Jasmine
toc_max: 4
---

## Jasmine main terms
* Global method (Setup and Teardown (method))
* describe  (method)
* it (method)
* expect (expectation)


## Describe
'describe' is a `function or method ` . It has two parameters: a `string` and a `function` . The string is a name or title for a spec suite - usually what is being tested. The function is a block of code that implements the suite.

```ts
describe('Describe about your test', () => {
  ...
});
```
## it

`it` is also a `function or method` . It has two parameters: a `string` and a `function`

```ts
describe('Describe about your test', () => {
  it('Your specefic test', () => {
    ...
  });
  it('Your specefic test two', () => {
    ...
  });
})
```

## expect

`expect` or `Expectations` that mean your testing process what you expect.

[see details](https://code4mk.github.io/javascript-developer/testing/jasmine/expect)

* `matcher`

```ts
describe('Describe about your test', () => {
  it('Your specefic test', () => {
    expect(true).toBe(true);
  });
})
```

## Setup and Teardown
Global method

* beforeEach
* afterEach
* beforeAll
* afterAll


```ts
describe('Describe about your test', () => {
  afterAll(() => {
    ...
  });
  beforeAll(() => {
    ...
  });
  afterEach(() => {
    ...
  });
  beforeEach(() => {
    ...
  });
  it('Your specefic test', () => {
    expect(true).toBe(true);
  });
})
```

## cheatsheet

* [cheatsheet devhint](https://devhints.io/jasmine)
* [cheatsheet daveceddia](https://daveceddia.com/freebies/jasmine-2-cheat-sheet.html)
