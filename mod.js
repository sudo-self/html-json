import { listenAndServe } from "https://deno.land/std@0.111.0/http/server.ts";

function handleRequest(request) {
  const { pathname } = new URL(request.url);

  // Respond with HTML
  if (pathname.startsWith("/html")) {
    const html = `
      <html>
        <p><b>Message:</b> Hello from Deno Deploy.</p>
      </html>
    `;

    return new Response(html, {
      headers: {
        "content-type": "text/html; charset=UTF-8",
      },
    });
  }

  // Respond with JSON
  if (pathname.startsWith("/json")) {
    const json = JSON.stringify({
      message: "Hello from Deno Deploy",
    });

    return new Response(json, {
      headers: {
        "content-type": "application/json; charset=UTF-8",
      },
    });
  }

  // Respond with instructions
  return new Response(
    `
      <html>
        <body align="center" style="font-family: Avenir, Helvetica, Arial, sans-serif; font-size: 1.5rem;">
          <h1>Return JSON and/or HTML Example</h1>
          <p><a href="/html">/html</a> - responds with HTML to the request.</p>
          <p><a href="/json">/json</a> - responds with JSON to the request.</p>
        </body>
      </html>
    `,
    {
      headers: {
        "content-type": "text/html; charset=UTF-8",
      },
    },
  );
}

// Start the server
listenAndServe(":8000", handleRequest);

