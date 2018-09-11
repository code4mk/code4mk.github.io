---
description: array
keywords: php
title: array
toc_max: 4
---
### array

```php
$amount = [1,2,3,4];
echo "${amount[1]}";
# two
```

### Associative  array

```php
$users = [
  "name" => "kamal",
  "age" => 21,
  "phone" => [
    "office" => 017,
    "home" => 016
  ]
];
echo "${users["name"]}";
# kamal
```


### resources

* [array](http://php.net/manual/en/language.types.array.php)
* [array functions](http://php.net/manual/en/function.array.php)
