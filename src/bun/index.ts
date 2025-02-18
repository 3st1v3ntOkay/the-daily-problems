import { serve } from "bun";
import { textSync } from "figlet";

const server = serve({
  port: 3000,
  fetch(_req: Request) {
    const body = textSync("Bun!");
    return new Response(body);
  },
});

console.log(`Listening on http://localhost:${server.port} ...`);
