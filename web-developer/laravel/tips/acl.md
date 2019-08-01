# Acl / permission

```php
<input type="checkbox" name="permissions[]" value="{{$permission->id}}"
{{ @if($role->permissions->contains($permission->id)) checked=checked @endif }}
>
```
