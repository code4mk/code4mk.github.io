# different page Header

```php
<htmlpageheader name="firstpageheader" style="display:none">
    <div style="text-align:center"> first page header</div>
</htmlpageheader>

<htmlpagefooter name="firstpagefooter" style="display:none">
    <div style="text-align:center">first page footer</div>
</htmlpagefooter>

<htmlpageheader name="otherpageheader" style="display:none">
    <div style="text-align:center"> all page Header</div>
</htmlpageheader>

<htmlpagefooter name="otherpagesfooter" style="display:none">
    <div style="text-align:center">all page footer </div>
</htmlpagefooter>

```

```css
@page {  
    header: html_otherpageheader;
    footer: html_otherpagesfooter;
}

@page :first {    
    header: html_firstpageheader;
    footer: html_firstpagefooter;
}
```

# auto email send

* [mail](https://stackoverflow.com/questions/24377396/mpdf-auto-generated-pdf-mailer-sends-blank-email)
