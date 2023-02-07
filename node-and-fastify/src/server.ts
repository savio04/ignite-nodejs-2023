import fastify from "fastify";

const app = fastify({
  // logger: true
});

app.get("/hello", async (request, response) => {
  return response.send("ok");
});

(async () => {
  await app.listen({ port: 3001 });
  console.log(`Api is runing on port ${3001}`);
  // app.log.info(`Api is runing on port ${3001}`)
})();
