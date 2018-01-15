---
description: coffeeScript is Fun with code4mk
keywords: coffeescript, js
title: coffeeScript is Fun with code4mk
toc_max: 4
---

# variable

```coffee
name = 'kamal'
```

## string

```coffee
 name = 'Mostafa kamal'
 career = "Developer | Designer"
```

```coffee
html = """
       <strong>
         cup of coffeescript
       </strong>
       """
```
## interpolation

`#{yo}`

```coffee
 name = 'Mostafa Kamal'
 age = 5
 users = 'users name is #{name} and age is #{age}'
```

## functions

`->` this is functions keywords.

```coffee
myfuntion = (x) -> //something
```

## objects & array

```coffee
lists = ['kamal', 'jamal', 5 , 'karim']


# objects


users = {name: "Mostafa", status: "Active"}

###
objects
###

users =
  infos:
    name: "Max"
    age:  11
  profile:
    status: "Developer"
    salary:  1000
```

## scoping

```coffee
salary = 50000

users = ->
  salary = 60000
  payment = salary + 100

```
##  conditions

```coffee
if conditon
  x = 'this is if condition'
else if condtionElse
  x = 'This is else if condition'
else
  x = 'This is default condition'
```

* `tenray ? .. : ..`

```coffee
 if conditionKamal then kamal else notKamal
```

## Loop

```coffee
items = ['toast', 'cheese', 'wine']
eat food for food in items

# [..] to <- from
countdown = (num for num in [10..1])

```

```coffee

if price == 500
  buy()  while supply > demand
  sell() until supply > demand
```

## switch / case

```coffee
switch day
  when "Mon" then {
    test: 'kamal'
  }
  when "Tue" then go relax
  when "Thu" then go iceFishing
  when "Fri", "Sat"
    if day is bingoDay
      go bingo
      go dancing
  when "Sun" then go church
  else go work

```

## Arrow function

```coffee
Account = (customer, cart) ->
 @customer = customer
 @cart = cart

 $('.shopping_cart').on 'click', (event) =>
   @customer.purchase @cart
```

## class

```coffee
class Animal
  constructor: (@name) ->

  move: (meters) ->
    alert @name + " moved #{meters}m."

class Snake extends Animal
  move: ->
    alert "Slithering..."
    super 5

class Horse extends Animal
  move: ->
    alert "Galloping..."
    super 45

sam = new Snake "Sammy the Python"
tom = new Horse "Tommy the Palomino"

sam.move()
tom.move()
```

## Modules

* es6

```coffee
import * as underscore from 'underscore'
export * from 'underscore'

```

## try / catch

```coffee
connection(
  try
    'done'
  catch error
    "username or password mismatch ! check again"
)
```

## operators

|  coffee |  JS |
|---|---|
| is  |  === |
|isnt| != |
|not|!|
|and|&&|
|or|`//` {or}|
|true, yes, on|true|
|false, no, off|false|
|@, this|this|
|a ** b|Math.pow(a, b)|
|a // b|Math.floor(a / b)|
|a %% b|(a % b + b) % b|
