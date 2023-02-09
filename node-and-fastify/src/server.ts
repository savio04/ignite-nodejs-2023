import fastify from "fastify";
import { config } from "./config/env";
import "./database";

const app = fastify({
  // logger: true
});

app.get("/hello", async (request, response) => {
  return response.send("ok");
});

(async () => {
  await app.listen({ port: config.PORT });
  console.log(`Api is runing on port ${config.PORT}`);
  // app.log.info(`Api is runing on port ${3001}`)
})();
