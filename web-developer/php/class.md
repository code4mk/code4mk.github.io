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
# this is user info
```

### extends

```php
class User{
  public function me(){
    echo "kamal";
  }
}

class Emp extends User{

}

$j = new Emp();
$j->me();
// kamal
```

* call system

```php
class User{
  public function me(){
    echo "kamal";
  }
}

class Emp extends User{
  public function me(){
    echo "parent is here";
  }
  public function selfMe(){
    self::me();
  }
  public function parentMe(){
    self::me();
  }
}

$j = new Emp();
$j->selfMe();
// output : kamal
$j->parentMe();
// output: parent is here
```

* [class php.net](http://sg2.php.net/manual/en/oop5.intro.php)

### properties

* `variables` are called `properties` which `live` in `class`

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
# this is user info
```

➲(`laravel` ) : `static` live in `facades` folder


### abstract class

`abstract class me{} → extends me `

~ resources

* [javatpoint](https://www.javatpoint.com/abstract-class-in-java)
* [developer](https://www.developer.com/lang/php/article.php/3604111/PHP-5-OOP-Interfaces-Abstract-Classes-and-the-Adapter-Pattern.htm)

### interface

`interface me{} → implements me `

➲(`laravel` ) : `intreface` live in `contract` folder

### trait

trait is a process that reuse methods . if you are Vue developer or SASS(css), you know about `mixins` . `trait` as like `mixins`

`trait me{} → use me `

### constructor

```php
class A {

 function __construct() {
  echo "constructor automaticaly return when class call";
 }
}

$obj= new A();
 # constructor automaticaly return when class call
?>
```

~ resource

* [phptpoint](https://www.phptpoint.com/php-constructor/)
* [classobj](http://php.net/manual/en/book.classobj.php)
