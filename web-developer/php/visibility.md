
### public  

* can access from anywhere

```php
class Test {
  public $name = "public access ";

  public function user(){
    echo $this->name."=> self function"."\n";
  }
}

class Test2 extends Test{
  public function r(){
    echo $this->name . "=>child function (extends)" . "\n";
  }
}

$t = new Test2();
$t->user();
$t->r();
echo $t->name . "=>outside of class";
//public access => self function
// public access =>child function (extends)
// public access =>outside of class   
```

### proteced

* access by self class
* access by extends class
* can't access outside of class

```js
class Test {
  protected $pro = "i am protected";

  public function user(){
    echo $this->pro."=> self function"."\n";
  }
}

class Test2 extends Test{
  public function r(){
    echo $this->pro . "=>child function" . "\n";
  }
}

$t = new Test2();
$t->user();
$t->r();
echo $t->pro . "=>outside of class";
// i am protected=> self function
// i am protected=>child function
// Cannot access protected property Test2::$pro
```


### private

* access only inside self class
* can't access from child (extends class)
* can't access outside of class

```php
class Test {
  public $pub = "public access by child";
  protected $pro = "proteced access by child";
  private $pri = "private not access by child";
}

class Test2 extends Test{
  public function r(){
    echo $this->pub . "\n";
    echo $this->pro . "\n";
    echo $this->pri;
  }
}

$t = new Test2();
$t->r();
//public access by child
//proteced access by child
// Undefined property: Test2::$pri
```
