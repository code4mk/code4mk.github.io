

## dictonary

* `{ }`
* `dict()`


```py
users = {
  "name": "kamal",
  "age": 21,
  "email": "hire@hire.com"
}
print (users["email"])
# hire@hire.com
```

### keys

### values

### update

```py
users = {
  "name": "kamal",
  "age": 21,
  "email": "hire@hire.com"
}
phone = {
  "sell": "01751"
}
users.update(phone)
print (users["sell"])
```
### delete

```py
users = {
  "name": "kamal",
  "age": 21,
  "email": "hire@hire.com"
}
del users["name"]
print (users)
# {'age': 21, 'email': 'hire@hire.com'}
```
