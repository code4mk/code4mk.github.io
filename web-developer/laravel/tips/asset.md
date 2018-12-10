* https://github.com/laravel/framework/issues/121
* https://github.com/laravel/framework/blob/5.7/src/Illuminate/Routing/UrlGenerator.php#L233
* https://stackoverflow.com/questions/32810231/add-public-to-asset-path-in-laravel

* https://github.com/laravel/framework/blob/5.7/src/Illuminate/Routing/UrlGenerator.php#L233
* https://stackoverflow.com/questions/36336103/laravel-5-multiple-public-folder-asset-function


* https://medium.com/teknomuslim/how-to-create-helper-functions-in-laravel-d769d12218d4

* https://github.com/LaravelCollective/html/blob/5.7/src/HtmlBuilder.php
* https://laracasts.com/discuss/channels/laravel/return-asset-from-route

* https://stackoverflow.com/questions/41799638/display-image-from-laravel-controller?rq=1

## package helpers

* https://github.com/rappasoft/laravel-helpers
* https://laravel.com/docs/5.7/helpers

```php
$this->registerHelpers();
Then my method looks like this:

/**
 * Register helpers file
 */
public function registerHelpers()
{
    // Load the helpers in app/Http/helpers.php
    if (file_exists($file = app_path('Http/helpers.php')))
    {
        require $file;
    }
}
```
