import { serve } from "bun"

const server = serve({
  port: 3000,
  fetch(_req: Request) {
    return new Response("Bun!");
  },
});

console.log(`Listening on http://localhost:${server.port} ...`);
