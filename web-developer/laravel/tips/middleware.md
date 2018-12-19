
* https://stackoverflow.com/questions/30165312/dynamic-middleware-for-laravel-5

```php
$this->app['router']->pushMiddlewareToGroup('web', Vendor\Some\Middleware::class);
```

* [provider tips middleware package](https://github.com/REBELinBLUE/deployer/blob/master/app/Providers/AppServiceProvider.php)

* https://laracasts.com/discuss/channels/laravel/dynamic-middleware-groups

* https://github.com/laravel/framework/issues/8917


* https://github.com/laravel/framework/blob/5.7/src/Illuminate/Routing/Router.php#L898
