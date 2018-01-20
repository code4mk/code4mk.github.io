---
description: sql intro
keywords: sql , dbms , database
title: sql intro
toc_max: 4
---
## fun part

### create / drop database

```sql
/* create database */
create database users;
/* drop / delete database */
drop database users;
```

### create / drop table

```sql
create table table_name (
  col_1 datatype,
  col_2 datatype
  ....
)
/* drop / delete table */
drop table table_name
/* alter coulmn / adding new column */
alter table table_name
  add column_name datatype;
/* drop column */
alter table table_name
  drop column col_name;
```

## Most uses command

* select
* update
* delete
* insert
* where

## important

* is null
* is not null
* min(col_name)
* max(col_name)
* count(col_name)
* avg(col_name)
* sum(col_name)
* alias = as
## insert

```sql
/* adding row */
insert into table_name (col_1,col_2,......)
  values (value_1,value_2,....);
```

## update

```sql
/* updating  row data  */
update table_name
  set col_name = value , col_name = value .....
  where condition;
```

## delete

```sql
delete from table_name
  where condition;
```

## resource

* [https://www.w3schools.com/sql/](https://www.w3schools.com/sql/)
* [https://www.tutorialspoint.com/sql/](https://www.tutorialspoint.com/sql/)
* [http://www.sqlcourse.com](http://www.sqlcourse.com)
* [http://www.dofactory.com/sql/](http://www.dofactory.com/sql/)
* [http://www.sqltutorial.org/sql-cheat-sheet/](http://www.sqltutorial.org/sql-cheat-sheet/)
* [wiki book pdf](https://upload.wikimedia.org/wikipedia/commons/6/6d/Structured_Query_Language.pdf)
* [wikibook](https://en.wikibooks.org/wiki/Structured_Query_Language)
