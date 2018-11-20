
# `Illuminate/auth`
# `Illuminate/Contracts/Auth`
# `Illuminate/Foundation/Auth`

# `basic auth `

* `Auth::login($user)`
* `Auth::login($user,true)` => remember(true)
* `Auth::loginUsingId(1)`
* `Auth::guard('admin')->login($user)`
* `Auth::user()`
* `Auth::id()`
* `Auth::check()`
* `Auth::attempt()`
* `Auth::guard('admin')->attempt($credentials)`
* `Auth::logout()`
* `Auth::logoutOtherDevices($password)`

~ [laravel framework auth methods](https://github.com/laravel/framework/blob/5.7/src/Illuminate/Auth/SessionGuard.php)

#  `illumininate/auth/Authenticatable`

* `getAuthIdentifierName()`
* `getAuthIdentifier()`
* `getAuthPassword()`
* `getRememberToken()`
* `setRememberToken()`
* `getRememberTokenName()`

# `auth:routes()`

* [auth:routes()](https://github.com/laravel/framework/blob/5.7/src/Illuminate/Routing/Router.php#L1147)

# doc

* [auth doc](https://laravel.com/docs/5.7/authentication)


# custom auth driver
* [github code](https://github.com/laravel/framework/blob/5.7/src/Illuminate/Auth/AuthManager.php#L262)
* [custom auth driver](https://code.tutsplus.com/tutorials/how-to-create-a-custom-authentication-guard-in-laravel--cms-29667)
