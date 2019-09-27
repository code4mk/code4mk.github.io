
# header pass


```php
this->withHeaders([
    'Accept' => 'application/json',
    'Content-Type' => 'application/json',
    'Authorization' => 'Bearer ' . 'abc',
])->json('GET', 'kala',[
    'name' => 'kamal is here'
]);
$response
    ->assertStatus(200)
    ->assertJson([
        'name' => 'kamal is here',
        'Authorization' => 'Bearer ' . 'abc'
    ]);
```
