
## Guzzle http client

```php
use GuzzleHttp\Client;
$http = new Client([
    'base_uri' => '127.0.0.1:8000',
]);
 $response = $http->get('/kapi/oauth/token', [
     // 'form_params' => [
     //     // 'grant_type' => 'authorization_code',
     //     // 'client_id' => 'client-id',
     //     // 'client_secret' => 'client-secret',
     //     // 'redirect_uri' => 'http://example.com/callback',
     //     'token' => \Request::get('token'),
     // ],
     'query' => [
       'token' => \Request::get('token'),
       'osecret'      => '56d6107453c130e8eb71686c41bcd9kapi1'
     ],
     'headers' => [
         'osecret'      => '56d6107453c130e8eb71686c41bcd9kapi1'
     ]
 ]);
```

## resources

* [post](https://gist.github.com/juampynr/bfd5e8e38424618b3065b3f6a9713e69)
