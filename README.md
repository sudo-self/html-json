# http request/200 ok.  respond with  /JSON  /HTML


[Try Live Version](#try-live-version)

## Try Live Version

https://json-html.deno.dev.

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

## Run Offline

You can run the example program on your machine using
[`deno`](https://github.com/denoland/deno):

```sh
deno run https://raw.githubusercontent.com/denoland/deploy_examples/main/json_html/mod.js
# Listening at http://localhost:8080
```
