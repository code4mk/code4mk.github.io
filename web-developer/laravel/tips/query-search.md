

* https://stackoverflow.com/questions/16995102/laravel-4-eloquent-query-using-where-with-or-and-or

```php
Model::where(function ($query) {
    $query->where('a', '=', 1)
          ->orWhere('b', '=', 1);
})->where(function ($query) {
    $query->where('c', '=', 1)
          ->orWhere('d', '=', 1);
});
```


# retrive all query param

* https://laravel.com/api/5.3/Illuminate/Http/Request.html
* https://stackoverflow.com/questions/31555494/laravel-request-getting-current-path-with-query-string

```php

$request->all();
```
## pivote where

* https://laravel.io/forum/08-27-2014-eloquent-has-with-where-on-pivot
* https://stackoverflow.com/questions/43105870/laravel-where-relationship-column-equals `nice`


## variable default value
