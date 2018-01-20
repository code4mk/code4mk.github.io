---
description: sql fundamentals
keywords: sql , dbms , database
title: sql fundamentals
toc_max: 4
---

## select

`select` command uses for accessing specific columns from table.

```sql
/* All data  */
select * from table_name;
/* specific columns data  */
select col_1, col_2, col_3 from table_name;

/* distinct / unique data */
select distinct col_1, col_2, col_3 from table_name;
```

## where

`where` keyword with select for filtering records.

```sql

select col_1, col_2, col_3 from table_name
  where condition;

```

* operators

|  operators | intro  |
|---|---|
|  = |  equal |
|<>|not equal|
|>|greater than|
|<|less than|
|>=|greater than or equal|
|<=|less than or equal|
|between|mid point result|
|like|searching purpose|
|in|multiple possible value|
|and|&&|
|or|`//`|

## and / or / not

and / or / not use for sorting purpose

```sql
/* return where all condition is truty */
select col_1,col_2 from table_name
  where condition_1 and condtion_2;

/* return where any condition is truty */
select col_1,col_2 from table_name
  where condition_1 or condtion_2;

/* return all data without that condition */
select col_1,col_2 from table_name
  where not condition_1;
/* you can mixed and , or , not */
```

## in + where

* in
* between
* not between

```sql
select col_1,col_2,... from table_name
  where col_name in (values.....)
  /* between */
  where col_name between value_1 and value_2;
```

## order by

`order by` key is so cool. By `default` data ordering by `asc order`.

 * asc (small from big)
 * desc (big from small)

```sql
select * from table_name
  where condition
  order by col_name desc , col_name desc, .... ;
 ```

## searching tips

### like / not like / wildcards

* `%a` = `end` with `a`
* `a%` = `start` with `a`
* `%a%` = `start` or `end` with `a`
* `_a` = find `a` at `2nd position`
* `a_%_%` = `start` with `a` and `length` is `three`
* `a%o` = `start` with` a` and end with `o`

```sql
select col_1,col_2 from table_name
  where condition
  like '%sql';
  /* not like '%a' */
```

## join
`join` keywords use for combining two or more tables.
* join (inner)
* left join
* right join
* full join

### inner join

* ignore data which left(joining table) any column is empty.

```sql
select table_1_or_2.any_coulmn,.... from table_1
  inner join table_2 on table_1.col_name = table_2.col_name;
```
* hints

```bash
suppose,
 left = table_1
 right = table_2
```
### left join

* If left(joining table) any column is empty that time also shown data with null value.

```sql
select table_1_or_2.any_coulmn,.... from table_1
  left join table_2 on table_1.col_name = table_2.col_name;
```
### Right join

* If Right table has any  empty column  that time also shown data with null value.

```sql
select table_1_or_2.any_coulmn,.... from table_1
  right join table_2 on table_1.col_name = table_2.col_name;
```

### Full join

* Full join = left join + right join
* Return all records although left or right table's column has empty value .

```sql
select table_1_or_2.any_coulmn,.... from table_1
  full outer join table_2 on table_1.col_name = table_2.col_name;
```
