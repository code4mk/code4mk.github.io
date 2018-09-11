---
description: Class
keywords: php
title: Class
toc_max: 4
---

### class

```php
class Me {
  function info(){
    echo "this is user info";
  }
}
$t = new Me();
$t->info();
### this is user info
```

### static

* `no need to declare of class objects (new)`
* `scope :: operator`

```php
class Me {
  static function info(){
    echo "this is user info\n";
  }
}
Me::info();
### this is user info
```

### abstract class

`abstract class me{} → extends me `

~ resources

* [javatpoint](https://www.javatpoint.com/abstract-class-in-java)
* [developer](https://www.developer.com/lang/php/article.php/3604111/PHP-5-OOP-Interfaces-Abstract-Classes-and-the-Adapter-Pattern.htm)

### interface

`interface me{} → implements me `

➲(`laravel` ) : `intreface` live in ` contract`

### trait

trait is a process that re use methods . if you are Vue developer or SASS(css), you know about `mixins` . `trait` as like `mixins`

`trait me{} → use me `

### constructor

```php
class A {

 function __construct() {
  echo "constructor automaticaly return when class call";
 }
}

$obj= new A();
 ### constructor automaticaly return when class call
?>
```

~ resource

* [phptpoint](https://www.phptpoint.com/php-constructor/)
