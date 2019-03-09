

```php
return[
  // default font lists
  // https://github.com/mpdf/mpdf/blob/development/src/Config/FontVariables.php
  'default_font' => 'serif',
  'fontDir' => [
    __DIR__ . '/custom/font/directory'
  ],
  'fontData' => [
    'font-name' => [
      'R' => 'Frutiger-Normal.ttf',
      'I' => 'FrutigerObl-Normal.ttf',
    ]
  ]
];
```

* [mpdf custom font](https://mpdf.github.io/fonts-languages/fonts-in-mpdf-7-x.html)
