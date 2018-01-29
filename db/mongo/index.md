

## Mongo

* http://mongoosejs.com/
* https://www.tutorialspoint.com/mongodb/mongodb_data_modeling.htm
* https://www.humongous.io/
* https://www.youtube.com/watch?v=w2BoKwUB75I&index=6&list=PLC3y8-rFHvwh11bWtwm3_qKvo46uDmaal
* https://docs.mongodb.com/manual/tutorial/query-documents/
* https://gist.github.com/aponxi/4380516
* https://blog.codecentric.de/files/2012/12/MongoDB-CheatSheet-v1_0.pdf

## web base gui

* https://www.mongodb.com/products/compass

* https://github.com/mrvautin/adminMongo
* https://github.com/mongo-express/mongo-express
* https://github.com/azat-co/mongoui

## create database

```sql
use database_name
```

### check loading database

```sql
db
```

### show database

```sql
show dbs
```

### delete / drop database

```sql
db.dropDatabase()
```

## create collections

```sql
db.createCollection(name, options)

db.my_collections_name.insert("name":"kamal")
```

### show collections

```sql
show collections
```

### delete / drop collections

```sql
db.collections_name.drop()
```

## query find

```sql
db.collections_name.find()
db.collections_name.find().pretty()
```

* operators

| operator as sql  | operator monqo    |
| :------------- | :------------- |
| =     | key: value|
| !=     | key: {$ne: value} |
| >    | key: {$gt: value} |
| >=    | key: {$gte: value} |
| <=    | key: {$lt: value} |
| <=    | key: {$lte: value} |

* `and` uses mongo with `$and` with multiple  `,`

```sql
db.my_collections_name.find(
  {
    $and: [
      {"salary": 5000}, {"status": "admin"}
    ]
  }
)

```

## update data

```sql
db.my_collections_name.update(selected, updated)
```

```sql
>db.mycol.update({id: 1},{$set:{'title':'MongoDB is awesome'}})
```

## remove data

```sql
db.my_collections_name.remove(selected)
```

## limit , skip , sort

```sql
db.my_collections_name.find(
  ......
).limit(value).skip(value).sort()
```

* asc sort / order `1`
* desc sort / order `-1`
