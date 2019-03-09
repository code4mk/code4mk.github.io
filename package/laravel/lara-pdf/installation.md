---
description: lara pdf installation
keywords: lara-pdf,code4mk,laravel,package
title: lara pdf installation
toc_max: 4
---

# install

```bash
composer require code4mk/lara-pdf
```

# vendor publish

```bash
php artisan vendor:publish --provider="Code4mk\LARAPDF\LARAPDFServiceProvider" --tag=config
```

setup successful. Lets make pdf.
