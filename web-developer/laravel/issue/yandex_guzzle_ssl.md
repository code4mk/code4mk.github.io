
* https://stackoverflow.com/questions/24611640/curl-60-ssl-certificate-unable-to-get-local-issuer-certificate

# `vendor\yandex\translate-api\src\Translator.php`
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);

* `curl_setopt($this->handler, CURLOPT_SSL_VERIFYPEER, false);`

* api => 'trnsl.1.1.20130922T110455Z.4a9208e68c61a760.f819c1db302ba637c2bea1befa4db9f784e9fbb8'
