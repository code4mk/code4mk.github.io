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

* $viewFile = your desired blade file
* $data = you can pass data as like controller view data

```php
use LARAPDF;
LARAPDF::loadView($viewFile,$data=[],$mergeData=[])->show();
// LARAPDF::loadView('pdf.welcome',['data'=>$mydata])->show
```

#### loadFile

* you can load a file for converting pdf

```php
LARAPDF::loadFile($file)
```

#### loadHtml

* you can load core html code

```php
LARAPDF::loadHtml($htmlCode)
```

### margin

* you can set margin
* integer value
* $left, $top, $right , $bottom, $header, $footer `all are optinal`

```php
LARAPDF::loadHtml($htmlCode)
        ->margin($left,$top,$right,$bottom,$header,$footer)
        ->show()
```

### paper

* set  paper size
*  case-insensitive
* deafult is `a4`

```txt
'A0’ - 'A10', 'B0' - 'B10', 'C0' - 'C10'
'4A0', '2A0', 'RA0' - 'RA4', 'SRA0' - 'SRA4'
'Letter', 'Legal', 'Executive', 'Folio'
'A4','A4-L'
'Demy', 'Royal'
'A' (Type A paperback 111x178mm)
'B' (Type B paperback 128x198mm)
'Ledger', 'Tabloid'
```

~ [source format](https://mpdf.github.io/reference/mpdf-functions/construct.html#variables-with-defaults-from-constructor)

```php
LARAPDF::loadFile($htmlCode)
        ->paper('a4')
        ->show()
```

### show

* show pdf in web browser

```php
LARAPDF::loadFile($htmlCode)
        ->show()
```

### download

* download pdf
* $desiredFileName = set your file name
```php
LARAPDF::loadFile($htmlCode)
        ->download($desiredFileName);
```

### save

* save pdf file in your desired filesystem driver
* $desiredFileName = file name
* $driverName = filesystem driver name
* default driver is `local`

```php
LARAPDF::loadFile($htmlCode)
        ->save(,$desiredFileName,$driverName);
```

### get

* get pdf as string format
* you can sent pdf by mail  

```php
$pdfString = LARAPDF::loadFile($htmlCode)
        ->get();
```

### watermark

#### textWatermark

* $text = 'your text'
* other parameters are optional
* $opacity = 0.1
* $angle = 45
* $font-family = 'font'

~ [mpdf fonts](https://github.com/mpdf/mpdf/blob/development/src/Config/FontVariables.php)

```php
$pdfString = LARAPDF::loadFile($htmlCode)
        ->textWatermark($text,$opacity,$angle,$font_family)
        ->show();
```

#### imageWatermark

* $image = your image url
* $opacity = 0.2
* $size width and height array = [100,100]

```php
$pdfString = LARAPDF::loadFile($htmlCode)
        ->imageWatermark($image,$opacity,$size)
        ->show();
```
