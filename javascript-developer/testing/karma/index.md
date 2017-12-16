---
description: Karma Runner
keywords: node.js, testing, karma
title: Karma Runner
toc_max: 4
---

## What is karma ?

Karma is not a testing framework, nor an assertion library. Karma just launches an HTTP server, and generates the test runner.


## install

```bash
# karma cli
npm install -g karma-cli
 ```
## karma configuration


```bash
 $ karma init karma.conf.js

Which testing framework do you want to use?
Press tab to list possible options. Enter to move to the next question.
> jasmine

Do you want to use Require.js?
This will add Require.js plugin.
Press tab to list possible options. Enter to move to the next question.
> no

Do you want to capture a browser automatically?
Press tab to list possible options. Enter empty string to move to the next question.
> Chrome
> Firefox
>

What is the location of your source and test files?
You can use glob patterns, eg. "js/*.js" or "test/**/*Spec.js".
Press Enter to move to the next question.
> *.js
> test/**/*.js
>

Should any of the files included by the previous patterns be excluded?
You can use glob patterns, eg. "**/*.swp".
Press Enter to move to the next question.
>

Do you want Karma to watch all the files and run the tests on change?
Press tab to list possible options.
> yes

Config file generated at "/Users/vojta/Code/karma/my.conf.js".
```
