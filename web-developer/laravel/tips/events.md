---
description: Event is a specific task and Listener listen a event then trigger one or many actions.
keywords: laravel, php, event, listener
title: Laravel Event Listener.
toc_max: 4
---


* `Event` is a specific `task`.
* `Listener` `listen` a `event` then `trigger` one or many `actions`.
*  `Actions<- Listener <- listen (event)`

```bash
# generate from kernel
php artisan event:generate
# manually create
php artisan make:listener ListenerName
php artisan make:event EventName
```

### event

* `EventName` class.

```php

namespace App\Events;

use Illuminate\Broadcasting\Channel;
use Illuminate\Queue\SerializesModels;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use App\User;

class EventName
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    public $user;

    /**
     * Create a new event instance.
     *
     * @return void
     */
    public function __construct(User $user)
    {
        $this->user = $user;
    }

    /**
     * Get the channels the event should broadcast on.
     *
     * @return \Illuminate\Broadcasting\Channel|array
     */
    public function broadcastOn()
    {
        return new PrivateChannel('channel-name');
    }
}
```

## listener

```php

namespace App\Listeners;

use App\Events\EventName;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;

class ListenName
{
    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     *
     * @param  EventName  $event
     * @return void
     */
    public function handle(EventName $event)
    {
        return $event;
    }
}
```

## register

* `app\Providers\EventServiceProvider.php`

```php
protected $listen = [
    'App\Events\EventName' => [
        'App\Listeners\ListenerName1',
        'App\Listeners\ListenerName2',
        'App\Listeners\ListenerNameALotOF',
    ],
];
```

## fire / dispatching

```php
use App\Events\OrderShipped;
event(new EventName($order));
```

## event with queue

* table create

    ```bash
    php artisan queue:table
    php artisan migrate
    ```
* update inside .env for (database)
  * `QUEUE_CONNECTION=database`

* `implements ShouldQueue ` in `ListenName` class

    ```php
        namespace App\Listeners;

        use App\Events\EventName;
        use Illuminate\Queue\InteractsWithQueue;
        use Illuminate\Contracts\Queue\ShouldQueue;

        class ListenName implements ShouldQueue
        {
            /**
             * Create the event listener.
             *
             * @return void
             */
            public function __construct()
            {
                //
            }

            /**
             * Handle the event.
             *
             * @param  EventName  $event
             * @return void
             */
            public function handle(EventName $event)
            {
                return $event;
            }
        }
    ```

* `php artisan queue::work`

## event with queue `2nd method`

* table create

    ```bash
    php artisan queue:table
    php artisan migrate
    ```

* `implements ShouldQueue ` in `ListenName` class

    ```php
        namespace App\Listeners;

        use App\Events\EventName;
        use Illuminate\Queue\InteractsWithQueue;
        use Illuminate\Contracts\Queue\ShouldQueue;

        class ListenName implements ShouldQueue
        {
            /**
             * The name of the connection the job should be sent to.
             *
             * @var string|null
             */
            public $connection = 'database';

            /**
             * The name of the queue the job should be sent to.
             *
             * @var string|null
             */
            public $queue = 'listeners';

            /**
             * The time (seconds) before the job should be processed.
             *
             * @var int
             */
            public $delay = 60;

            /**
             * Create the event listener.
             *
             * @return void
             */
            public function __construct()
            {
                //
            }

            /**
             * Handle the event.
             *
             * @param  EventName  $event
             * @return void
             */
            public function handle(EventName $event)
            {
                return $event;
            }
        }
    ```

* `php artisan queue::work database --queue=listeners`




# Resources

* [devlop video](https://www.youtube.com/watch?v=9oYtUEbT19I)
* [devlop queue event](https://www.youtube.com/watch?v=_SndYcQvIuQ)
* [laravel.com](https://laravel.com/docs/5.7/events)
