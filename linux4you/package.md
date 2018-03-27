---
description: package management
keywords: linux, os
title: package management
toc_max: 4
---

## package management

* apt-get
* yum
* dpkg
* zypper
* pacman

## apt-get

`apt = advanced packaging tool` . it is most favourite packaging tool.

  ~ two tools

| name    | activity    |
| :------------- | :------------- |
|  `apt-get` | install, uninstall,update,upgrade|
|`apt-cache` | finding new package|


* inatsll

```bash
sudo apt-get update
sudo apt-get install package_name, package_name
sudo apt-get install vim
```

* remove

```bash
# store conf.
  sudo apt-get remove package_name
# all delete for-ever
  sudo apt-get purge package_name
# unuseable package remove
sudo apt-get autoremove
```

* upgrade

```bash
sudo apt-get update
sudo apt-get upgrade <package_name>
sudo apt-get upgrade
```




### apt-get vs apt

| apt-get    | apt     |
| :------------- | :------------- |
|apt-get update	|apt update|
|apt-get dist-upgrade	|apt full-upgrade|
|apt-cache search string	|apt search string|
|apt-get install package	|apt install package|
|apt-get remove package	|apt remove package|
|apt-get purge package	|apt purge package|


### yum

`yum - yellow dog updater/modified`


## resource

* [digitalocean](https://www.digitalocean.com/community/tutorials/package-management-basics-apt-yum-dnf-pkg)
