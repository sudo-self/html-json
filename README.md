# http request/200 Ok.  /JSON  /HTML

![Screenshot 2024-03-10 at 3 02 26 AM](https://github.com/sudo-self/html-json/assets/119916323/6aa594cb-0f0b-42b1-add5-b3a3c2ebad10)

## json-html.deno.dev<a href="https://json-html.deno.dev/json">/JSON</a>

add /json endpoint 

```sh
curl --dump-header - https://json-html.deno.dev/json
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

```sh
curl --dump-header - https://json-html.deno.dev/html
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
[SAME STARTING ORIGIN](https://json-html.deno.dev)
