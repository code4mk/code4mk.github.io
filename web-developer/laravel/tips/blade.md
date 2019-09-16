

## conditional extends

```php
@extends((( Request::ajax()) ? 'layouts.ajax' : 'layouts.default' ))
```
