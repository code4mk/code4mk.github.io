---
description: lets bash scripting
keywords: linux,shell,bash,sh
title: lets bash scripting
toc_max: 4
---

# bash

`bash` = `Bourne-Again SHell`

# comments

```bash
# this is single line comment
echo "kamal is a code artist" # this is comment
# output: kamal is a code artist
```

# variable

## local variable

```bash
name="kamal"
echo $name
# output: kamal
```
* `local keyword uses inside function`

```bash
name="kamal"
user(){
  local name="jamal"
  echo $name
}
echo $name
#output:
# jamal
# kamal
```

## global variable

```bash
export price=51
```

## default varibale

```bash
name="jamal"
echo ${name:="kamal"}
# jamal
```

```bash
echo ${name:="kamal"}
# kamal
```



# string

```bash
status="Mostafa Kamal   is    a     code artist"
echo $status
# Mostafa Kamal is a code artist
echo "$status"
# Mostafa Kamal   is    a     code artist
```


```bash
name="kamal"
echo 'this is $name'
# thi is $name
echo "this is $name"
# this is kamal
```



# arithmatic

* `$(( .. ))`

```bash
x=5
y=7
echo (( x + y ))
# 12
```


# array

```bash
users=("kamal" "jamal" "maruf" "sadia")
echo ${users[1]}
# output: jamal
users=("kamal" "jamal" "maruf" "sadia")
echo ${users[@]} # [@] or [*] retrive all
# output: kamal jamal maruf sadia
users=("kamal" "jamal" "maruf" "sadia")
echo ${#users[@]}
# output : 4
# retrive array size
```
## array add

```bash
users=("kamal" "jamal" "maruf" "sadia")
employee=("kamrul" "${users[@]}" "faruk")
echo ${employee[@]}
# output: kamrul kamal jamal maruf sadia faruk
```

## array slice

```bash
users=("kamal" "jamal" "maruf" "sadia")
echo ${users[@]:1:2}
# output: jamal maruf
```
## delete array ele

```bash
users=("kamal" "jamal" "maruf" "sadia")
unset users[1]
echo ${users[@]}
# output: kamal maruf sadia
```
# operator

| arithmatic operator     | description     |
| :------------- | :------------- |
| -eq       | equal        |
|-ne| not equal |
|-lt|less than|
|-le|less than or equal|
|-gt|greater than|
|-ge|greater than or equal|

# condition

* single squre bracket `[condition]` or double squre bracket `[[condtion]]`
* ubuntu system basicaly not support `[[ not support ]]`
  * access `[[ double]]` command `sudo bash myfile.sh`
  * On Ubuntu systems, `/bin/sh` is `dash`, not `bash`, and `dash` does `not support` the `double bracket`

## if

```bash
if [ 2 -eq 2 ]; then
  echo "the number is 2"
fi
# output : the number is 2
```

## if-else

```bash
number=2
if [ $number -eq 3 ]; then
  echo "the number is 2"
else
  echo "the number is not 2"
fi
# output : the number is 2
```

## elseif

```bash
number=2
if [ $number -eq 3 ]; then
  echo "the number is 3"
elif [ $number -eq 2 ]; then
  echo "the number is 2"
else
  echo "the number is not 2"
fi
# output : the number is 2
```

## case

```bash
number=5
case $number in
  2 )
    echo "the number is 2"
  ;;
  3 )
    echo "the number is 3"
  ;;
  * )
    echo "not 2 or 3"
  ;;
esac
# output: not 2 or 3
```

# loop

## for

```bash
users=("kamal" "jamal" "sadia" "maruf")
for i in ${users[@]}; do
  echo $i
done
# kamal jamal sadia maruf
```

```bash
for (( i=0; i < 10 ; i++)); do
  echo $i
done
# 0 1 2 3 4 5 6 7 8 9
```

### continue

```bash
for (( i=0; i < 10; i++)); do
  if [ $(( i % 2 )) -eq 0]; then
    continue
  fi
  echo $i
done
# 1 3 5 7 9
```

### break

```bash
for (( i=0; i < 10; i++)); do
  if [ $i -eq 5]; then
    break
  fi
  echo $i
done
# 0 1 2 3 4
```

## while

```bash
i=0
while [ $i -lt 10 ]; do
  echo $i
  i=$(( i + 1 ))
done
# 0 1 2 3 4 5 6 7 8 9
```

## until

* `until` is opposite of `while`

```bash
i=0
until [ $i -gt 10 ]; do
  echo $i
  i=$(( i + 1 ))
done
# 0 1 2 3 4 5 6 7 8 9
```


# command

## multiple command

```bash
uname
id -u
whoami
```

## and  comannd

```bash
# uname && id -u
```

## or  comannd

```bash
# unamed || id -u
# unamed is wrong command
# uname is actual command
```

# function

```bash
read name
create(){
  adduser $1
}
create $name
```
