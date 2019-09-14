
## `Illuminate/Routing`

* `$verbs = ['GET', 'HEAD', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'];`

* https://laravel.com/docs/5.7/routing
* https://laravel.com/docs/5.7/middleware#assigning-middleware-to-routes

* [router github](https://github.com/laravel/framework/blob/5.7/src/Illuminate/Routing/Router.php)
* [facades github](https://github.com/laravel/framework/blob/5.7/src/Illuminate/Support/Facades/Route.php)

## framework

* [Illuminate\Routing](https://github.com/laravel/framework/tree/5.7/src/Illuminate/Routing)
* [Support\Facades\Route.php](https://github.com/laravel/framework/blob/5.7/src/Illuminate/Support/Facades/Route.php)
* [Illuminate\Contracts\Routing](https://github.com/laravel/framework/tree/5.7/src/Illuminate/Contracts/Routing)


```php
// router
use Illuminate\Routing\Router;

class(Router $router){
  dd($router)
}
```

## basic route

```php
Route::get($uri,$callback);
Route::post($uri,$callback);
Route::patch($uri,$callback);
Route::put($uri,$callback);
Route::delete($uri,$callback);
Route::options($uri,$callback);
--->
Route::match($uri,function{})
Route::any($uri,function(){})
--->
Route::namespace('Admin')->group(function () {
    // Controllers Within The "App\Http\Controllers\Admin" Namespace
});
--->
Route::domain('{account}.myapp.com')->group(function () {
    Route::get('user/{id}', function ($account, $id) {
        //
    });
});
--->
Route::prefix('admin')->group(function () {
    Route::get('users', function () {
        // Matches The "/admin/users" URL
    });
});
---> 404 error
Route::fallback(function () {
    //
});
---> group middleware
Route::middleware('auth:api', 'throttle:60,1')->group(function () {
    Route::get('/user', function () {
        //
    });
});

---> current route

$route = Route::current();

$name = Route::currentRouteName();

$action = Route::currentRouteAction();
```

* `Route::get()->where()->name()->middleware()`

~ tips

* `** tips ** nameRoute [(name())] -> route('nameRoute')`


## `Ridrect`

```php
return redirect()->back()
                 ->intended()
                 ->to('externalLink')
                 ->away('externalLink')
                 ->route('routeName')
                 ->action('actionName')
```

* return back()->withInput()

## Resource

`~ resource actions` =
`['index', 'create', 'store', 'show', 'edit', 'update', 'destroy'];`

## response

* [response doc](https://laravel.com/docs/5.7/responses)

* [response github](https://github.com/laravel/framework/blob/5.7/src/Illuminate/Routing/ResponseFactory.php)

```php
return response()->json($users[]);
return response()->download('file',$saveName)
return response()->file('file')
return response()->redirectTo('path')
return response()->redirectToRoute('path')
return response()->redirectToAction('path')
return response()->redirectToIntended($path= 'homeAutomatic')

```

## commands

```bash
php artisan route:cache
php artisan route:clear
```


## sub-domain routing

* [likegeeks](https://likegeeks.com/dynamic-laravel-subdomain-routing/)
* [point cname with custome domain](https://stackoverflow.com/questions/24327868/php-laravel-allow-users-to-use-a-custom-domain-name)
