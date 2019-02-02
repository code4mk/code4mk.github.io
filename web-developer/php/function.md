---
description: function
keywords: php
title: function
---

### function

```php
function user() {
  echo("function name isn't case-sensitive");
}
user();
User();
# function name isn't case-sensitive
```

### argument

```php
function user($name,$status) {
  echo("${name} is a ${status}");
}
user("kamal","coder");
# kamal is a coder
```

### default argument

```php
function user($name,$status="artist") {
  echo("${name} is a ${status}");
}
user("kamal");
# kamal is a artist
```

### rest

```php
function user(...$users) {
  echo $users[1];
}
user(5,7,6);
# 7
```

### call function inside another function

```php

class Worker{
  public function user(){
    return "this is user";
  }
  public function employee(){
    //call coba function
    return $this->user();
  }

}

$klass = new Worker();
echo $klass->employee();
```

* [php.net function argument](http://us1.php.net/manual/en/functions.arguments.php)
* [function all types as filesystem](http://php.net/manual/en/funcref.php)
