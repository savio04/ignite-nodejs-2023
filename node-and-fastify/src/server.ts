import fastify from "fastify";
import { config } from "./config/env";
import "./database";
import { TransactionRoutes } from "./routes/transactions";

const app = fastify({
  // logger: true
});

app.register(TransactionRoutes, { prefix: "transactions" });

(async () => {
  await app.listen({ port: config.PORT });
  console.log(`Api is runing on port ${config.PORT}`);
  // app.log.info(`Api is runing on port ${3001}`)
})();
