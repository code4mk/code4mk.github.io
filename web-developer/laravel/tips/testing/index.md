
## testing

# configure xml file

```bash
# bash cli
./vendor/bin/phpunit --configuration /path/to/laravel_project/phpunit.xml
```

# create command with cli

```bash
php artisan make:test AppTest --unit
```

# run

```bash
# all file
./vendor/bin/phpunit
# specific file
./vendor/bin/phpunit tests/Unit/AppTest.php
```

# optional

* global install

```bash
composer global require phpunit/phpunit
```

# resources

* [pusher](https://blog.pusher.com/tests-laravel-applications/)
* [laravel-guide](https://laravel-guide.readthedocs.io/en/latest/application-testing/)
* [phpunit api gist](https://gist.github.com/mostafa6765/2fe3765a74f51db4b53deb7c58139416)
* [dev.to](https://dev.to/edmilsonrobson/laravel-55-testing-and-you-8hl)
