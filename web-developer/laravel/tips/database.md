


* [facades db github](https://github.com/laravel/framework/blob/5.7/src/Illuminate/Support/Facades/DB.php)
* [database laravel doc](https://laravel.com/docs/5.7/database)

## `DB::__`

```php
 DB::connection($name=optional)
 DB::connection()->getDefaultConnection()
      ->setDefaultConnection()
      ->getPdo()
      ->getReadPdo()
      ->getConfig()
      ->getDriverName()
      ->getDatabaseName()
      ->getTablePrefix()
      ->getDoctrineConnection()
DB::table('')->select()
DB::raw()
DB::insert()
DB::update()
DB::delete()
DB::rollBack()
DB::commit()

```
## queries

* [queries laravel doc](https://laravel.com/docs/5.7/queries)
* [eloquet collection](https://laravel.com/docs/5.7/eloquent-collections)
* [collections](https://laravel.com/docs/5.7/collections)
* [Illuminate/Support/Collection github](https://github.com/laravel/framework/blob/5.7/src/Illuminate/Support/Collection.php)

## `schema`

* [Illuminate\support\facades\schema](https://github.com/laravel/framework/blob/5.7/src/Illuminate/Support/Facades/Schema.php)
* [Illuminate\database\schema](https://github.com/laravel/framework/blob/5.7/src/Illuminate/Database/Schema/Builder.php)

* [laravel doc](https://laravel.com/docs/5.7/migrations#tables)

```php
Schema::connection('name')
Schema::create($table,$callback)
Schema::drop($table)
Schema::dropIfExists($table)
Schema::dropAllTables()
Schema::dropAllViews()
Schema::hasTable($table)
Schema::hasCoumn($table,$column)
Schema::hasCoumns($table,array $column)
Schema::hasCoumnType($table,$column)
Schema::getColumnListing($table,$column)
Schema::defaultStringLength(191)
Schema::rename($from,$to)
```

# blueprint

* [blueprint github](https://github.com/laravel/framework/blob/5.7/src/Illuminate/Database/Schema/Blueprint.php)

# `composer require doctrine/dbal`

* install `composer require doctrine/dbal` for table any change

# `foreign`

```php
$table->foreign('user_id')
      ->references('id')->on('users')
      ->onDelete('cascade');
```
