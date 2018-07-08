---
description: Model django
keywords: django, python
title: Model django
toc_max: 4
---

[model and database official](https://docs.djangoproject.com/en/2.0/topics/db/)

* `django.db.models.Model`
* `database fields`
* `auto generates with api`



```py
class ModelName(**kwargs):
  # rest
```

# register models

```py
INSTALLED_APPS = [
    #...
    'myapp',
    #...
]
```

## command

* `manage.py makemigrations`
* `manage.py migrate`

# fields

## options

### null
### blank
### default
### unique
### verbose_name
### primary_key
### help_text
### choices

~

### db_column
### db_index
### db_tablespace
### editable
### error_message
### validator

## types

### AutoField
### BigAutoField
### BigIntegerField
### BinaryField
### BooleanField
### CharField
### DateField
### DateTimeField
### DecimalField
### DurationField
### EmailField
### FileField
### FileField and FieldFile
### FilePathField
### FloatField
### ImageField
### IntegerField
### GenericIPAddressField
### NullBooleanField
### PositiveIntegerField
### PositiveSmallIntegerField
### SlugField
### SmallIntegerField
### TextField
### TimeField
### URLField
### UUIDField

## relational

### ForeignKey
### ManyToManyField
### OneToOneField


~  [fields](https://docs.djangoproject.com/en/2.0/ref/models/fields/)



# resources

* [models](https://docs.djangoproject.com/en/2.0/topics/db/models/)
* [db topic](https://docs.djangoproject.com/en/2.0/topics/db/)
