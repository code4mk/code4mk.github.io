

# `Schedule`

* call()
* command()
* job()
* exec()


* [doc](https://laravel.com/docs/5.7/scheduling)
* [Illuminate/Console/Scheduling/Schedule](https://github.com/laravel/framework/blob/5.7/src/Illuminate/Console/Scheduling/Schedule.php)


* https://stackoverflow.com/questions/30456737/how-to-schedule-artisan-commands-in-a-package


```php
use Illuminate\Support\ServiceProvider;
use Illuminate\Console\Scheduling\Schedule;

class ScheduleServiceProvider extends ServiceProvider
{
    public function boot()
    {
        $this->app->booted(function () {
            $schedule = $this->app->make(Schedule::class);
            $schedule->command('some:command')->everyMinute();
        });
    }

    public function register()
    {
    }
}
```

* https://stackoverflow.com/questions/35834681/laravel-5-package-scheduled-tasks

* https://github.com/codestudiohq/laravel-totem
