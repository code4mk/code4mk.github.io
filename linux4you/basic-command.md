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

remove empty directories .

* `rmdir [option] directory_names`

```bash
rmdir dir1 dir2
# parents
rmdir -p dir1/dir/dir
```

## rm

remove commands use for delete files and directory.

* `rm [options] [-r directories] filenames`

```bash
rm file1
#recursively
rm -r file1
#force
rm -f file1
#recursively force
rm -rf file1
```

## search

### find


### locate

locate is faster , database system.

* install locate

```bash
sudo apt-get update
sudo apt-get install mlocate
sudo updatedb
```

* `locate [options] name(s)`

```bash
locate desired_file
```

## users

* `who <option>`

```bash
# currently log in user
who
#log in user
whoami
```

every user has unique user id (uid) that is greather than 1000.
