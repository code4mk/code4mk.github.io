---
description: linux commands
keywords: linux, os, cli
title: linux commands
toc_max: 4
---

## mkdir

`mkdir` is `make directory` .

* `mkdir [option] directory_name(s)`

```bash
mkdir customer
# with permission flag
mkdir -m 777 customer
# create directory inside parent
mkdir -p company/customer
```

## touch

make a empty file with `touch command`

```bash
touch file1
```

## cd

cd means change directory  .

* `cd [option] [directory]`

* option
 * `-P`
 * `-L`

```bash
# current directory
cd .
# parents of current directory
cd ..
# home directory
cd ~
# change directory with forwars slash
cd /usr/sbin
```

## pwd

`pwd` is present work directory

## clear

`clear` command removes all previous commands.

## head

`head` commands display few lines from first of file

## tail

`tail` commands display few lines from last of file

## less

`less`display all content of file without scrolling

## cp

`cp` command is copy

* `cp [options] name new_name`
* `cp <option> from to(with rename)`

```bash
cp file1 /home/john/file1
```

## mv

`mv` = move

mv [options] source target

```bash 
mv file3 dir1/file3
```
## rmdir

## rm
