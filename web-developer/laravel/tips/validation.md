
# `Illuminate/Validation`

* [Illuminate/Validation](https://github.com/laravel/framework/tree/5.7/src/Illuminate/Validation)

* https://www.youtube.com/watch?v=bsKOhgflCmI

* https://github.com/laravel/framework/tree/5.7/src/Illuminate/Validation

* https://laravel.com/docs/5.7/validation


# ajax validation

* https://laracasts.com/discuss/channels/laravel/how-to-send-validation-errors-as-json-to-view
* https://www.youtube.com/watch?v=o-HYSAXKQNk
* https://www.youtube.com/watch?v=cEOUoa2DAfQ

```php
$validator = \Validator::make($request->all(), [
  'name'          => 'required',
  'email'         => 'required',
  'password'      => 'required'
 ]);

 if ($validator->fails())
 {
     return response()->json(['errors'=>$validator->errors()->all()]);
     //return response()->json(['errors'=>$validator->errors()]);
 }
```

$error->has()
$error->all()
