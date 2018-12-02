
* [controller+model console](https://github.com/laravel/framework/tree/5.7/src/Illuminate/Routing/Console/stubs)


# package how connect automatic

* https://github.com/laravel-zero/laravel-zero/issues/55

* `kernel.php`

  ```php
    /**
     * Get the artisan application instance.
     *
     * @return \Illuminate\Console\Application
     */
    protected function getArtisan()
    {
        if (!$this->artisan) {
            $this->artisan = new Application($this->app, $this->events, $this->app->version());

            // put any other commands in this array
            // in this case, the deploy command here is Bugsnag\BugsnagLaravel\Commands\DeployCommand
            $commands = [DeployCommand::class];

            foreach (glob(app_path('Console//Commands').'/*.php') as $file) {
                $commands[] = 'App\\Console\\Commands\\'.basename($file, '.php');
            }

            $this->artisan->resolveCommands($commands);
        }

        return $this->artisan;
    }
    ```
