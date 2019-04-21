
![KAPI](https://user-images.githubusercontent.com/17185462/56354507-ba2e7780-61f5-11e9-8f7e-02b2c7a8cb11.png)

# installation

```bash
composer require code4mk/kapi
```

# vendor publish

```bash
php artisan vendor:publish --provider="Kapi\KapiServiceProvider" --tag=config
php artisan vendor:publish --provider="Kapi\KapiServiceProvider" --tag=migrations
```

# config

* `config/kapi.php`
* `config/cors.php`
* customise config as you need
