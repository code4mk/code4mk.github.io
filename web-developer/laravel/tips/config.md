
## `Illuminate\Config`

* [laravel doc](https://laravel.com/docs/5.7/configuration)
* [Contracts github](https://github.com/laravel/framework/blob/5.7/src/Illuminate/Contracts/Config/Repository.php)
* [facades github](https://github.com/laravel/framework/blob/5.7/src/Illuminate/Support/Facades/Config.php)

* [Illuminate\config **](https://github.com/laravel/framework/blob/5.7/src/Illuminate/Config/Repository.php)

```php
use Config;
Config()['test']['test'];
```

```php
use Config;

Config::all();
Config::get('app.name');

```

```php

    /**
     * Determine if the given configuration value exists.
     *
     * @param  string  $key
     * @return bool
     */
    public function has($key);
    /**
     * Get the specified configuration value.
     *
     * @param  array|string  $key
     * @param  mixed   $default
     * @return mixed
     */
    public function get($key, $default = null);
    /**
     * Get all of the configuration items for the application.
     *
     * @return array
     */
    public function all();
    /**
     * Set a given configuration value.
     *
     * @param  array|string  $key
     * @param  mixed   $value
     * @return void
     */
    public function set($key, $value = null);
    /**
     * Prepend a value onto an array configuration value.
     *
     * @param  string  $key
     * @param  mixed  $value
     * @return void
     */
    public function prepend($key, $value);
    /**
     * Push a value onto an array configuration value.
     *
     * @param  string  $key
     * @param  mixed  $value
     * @return void
     */
    public function push($key, $value);
    ```
