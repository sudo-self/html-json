# http request/200 Ok. ---> .json .html <hr>

## json-html.deno.dev<a href="https://json-html.deno.dev/json">/JSON</a>

add /json endpoint 
<code>curl --dump-header - https://json-html.deno.dev/json</code>

```sh
# Response:
# HTTP/2 200
# content-type: application/json; charset=UTF-8
# content-length: 36
# date: Tue, 09 Mar 2021 15:11:57 GMT
# server: denosr
# x-dsr-id: asia-southeast1-a::runner-l4hc
# {"message":"Hello from Deno Deploy"}
```

## json-html.deno.dev <a href="https://json-html.deno.dev/html">/HTML</a>

add /html endpoint
<code>curl --dump-header - https://json-html.deno.dev/html</code>

```sh
# Response:
# HTTP/2 200
# content-type: text/html; charset=UTF-8
# content-length: 73
# date: Tue, 09 Mar 2021 15:15:56 GMT
# server: denosr
# x-dsr-id: asia-southeast1-a::runner-l4hc
# <html>
#   <p><b>Message:</b> Hello from Deno Deploy.</p>
# </html>
```
[/JSON /HTML](https://json-html.deno.dev) <endpoint>
