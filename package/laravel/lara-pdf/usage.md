---
description: Lara pdf documentation
keywords: lara-pdf,code4mk,laravel,package
title: Lara pdf documentation & useage
toc_max: 4
---

### alias

Lara pdf alias is `LARAPDF`

```php
use LARAPDF;
```

### methods

#### load

#### loadView

```php
use LARAPDF;
LARAPDF::loadView($viewFile,$data=[],$mergeData=[])->show();
// LARAPDF::loadView('pdf.welcome',['data'=>$mydata])->show
```

#### loadFile

```php
LARAPDF::loadFile($file)
```

#### loadHtml

```php
LARAPDF::loadHtml($htmlCode)
```

### margin

```php
LARAPDF::loadHtml($htmlCode)
        ->margin($left,$top,$right,$bottom,$header,$footer)
        ->show()
```

### paper

```php
LARAPDF::loadFile($htmlCode)
        ->paper('a4')
        ->show()
```

### show

```php
LARAPDF::loadFile($htmlCode)
        ->show()
```

### download

```php
LARAPDF::loadFile($htmlCode)
        ->download($desiredFileName);
```

### save

```php
LARAPDF::loadFile($htmlCode)
        ->save(,$desiredFileName,$driverName);
```

### get

```php
$pdfString = LARAPDF::loadFile($htmlCode)
        ->get();
```

### watermark

#### textWatermark

```php
$pdfString = LARAPDF::loadFile($htmlCode)
        ->textWatermark($text,$opacity,$angle,$font_family)
        ->show();
```

#### imageWatermark

```php
$pdfString = LARAPDF::loadFile($htmlCode)
        ->imageWatermark($image,$opacity,$size)
        ->show();
```
