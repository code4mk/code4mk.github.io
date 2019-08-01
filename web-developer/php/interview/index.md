# Interview questions

<details>
<summary>what are php errors?</summary>

* notice
* warning
* parse/fatal error

</details>

<details>
<summary>How to show all errors and warning?</summary>

* inside `php.ini`

 ```php
 error_reporting(E_ALL);
 ini_set('display_errors', 1);
 ```
</details>

</details>

<details>
<summary>what the different between == vs === ?</summary>

* `==` is equal . it convert same type data before comparison.

```php
'121' == 121
# true
'0121' = 121
# false
```

* `===` identity. this don't convert same data type

```php
'121' == 121
# false
```

</details>

<details>
<summary>what is constant variable?</summary>

* constant variable can't mutation or change value.
* `define` * `constant` keyword for constant variable.

```php
define('version','1.0.1');
# outside of the class
constant VERSION = '1.0.1';
# inside class
```
</details>


<details>
<summary>what is static variable?</summary>

 * static variable call first time then next time return modified value.
</details>


<details>
<summary>what is static function?</summary>

* can access function without create class object.
* access with scope method `::`
</details>

<details>
<summary>what is  function?</summary>

* function or method is a way for perform specific task
```php
function name($param)
{
  return "something";
}
# access
name('php interview');
```

</details>

<details>
<summary>why use reference variable as parameter?</summary>

* `&$refVar`
* you can access variable outside of the block and that is modified value.
```php
function name(&$param)
{
  return $param;
}
# access
name('php interview');
echo $param;
# php interview
```

</details>

<details>
<summary> What is class? </summary>

* Class is a blueprint. It contains properties and methods.
* Class name's 1st letter will be Uppercase.
* Class access by creating class object with `new` keyword
</details>

<details>
<summary> What is final class or final method?</summary>

* `final` `class` can't able to inheritence/extends.
* `final` `method` can't override.

</details>

<details>
<summary> php function's visibility (public,private,protected)</summary>

```bash
————————————————+———————————————+———————————+———————————————+—————————————————
                +   This class  | subclass  | package       | extends class
————————————————+———————————————+———————————+———————————————+—————————————————
public          |       ✔      |     ✔     |       ✔       |   ✔   
————————————————+———————————————+———————————+———————————————+—————————————————
protected       |       ✔      |     ✔     |       ✔       |   ✘   
————————————————+———————————————+———————————+———————————————+—————————————————
private         |       ✔      |     ✘     |       ✘       |   ✘
————————————————+———————————————+———————————+———————————————+—————————————————
```


</details>

<details>
<summary>how to extend execution time?</summary>

* `php.ini`

 ```php
  set_time_limit(int seconds);
 ```

</details>

<details>
<summary>what is the difference between include vs require?</summary>

* include add a file . if file isn't exist that time return only a warning.
* require works as like include . if isn't exist file that time return fatal error.

</details>

<details>
<summary>what is the difference between GET and POST?</summary>

* Get displays all query as url . size max 2048
  * retrive data
* POST can't display query as url  and no limit for query
 * insert
 * update

</details>

<details>
<summary>what is the difference between SESSION and COOKIE?</summary>

* Get displays all query as url . size max 2048
  * retrive data
* POST can't display query as url  and no limit for query
 * insert
 * update

</details>
