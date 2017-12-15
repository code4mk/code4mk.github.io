---
description: expect Jasmine
keywords: node.js, testing, unit testing, jasmine
title: expect Jasmine
toc_max: 4
---
* [Jasmine-Matchers third party package](https://github.com/JamieMason/Jasmine-Matchers)

## Default matcher

```ts
expect(instance).toBe(instance);
expect(number).toBeCloseTo(number, decimalPlaces);
expect(mixed).toBeDefined();
expect(mixed).toBeFalsy();
expect(number).toBeGreaterThan(number);
expect(number).toBeLessThan(number);
expect(number).toBeNaN();
expect(mixed).toBeNull();
expect(mixed).toBeTruthy();
expect(mixed).toBeUndefined();
expect(array).toContain(member);
expect(mixed).toEqual(mixed);
expect(spy).toHaveBeenCalled();
expect(spy).toHaveBeenCalledTimes(number);
expect(spy).toHaveBeenCalledWith(...arguments);
expect(mixed).toMatch(pattern);
expect(fn).toThrow(string);
expect(fn).toThrowError(string);
```

## asymmetric matchers

```ts
jasmine.any(Constructor);
jasmine.anything(mixed);
jasmine.arrayContaining(mixed);
jasmine.objectContaining(mixed);
jasmine.stringMatching(pattern);
```
