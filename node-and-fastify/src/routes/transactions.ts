import { FastifyInstance } from "fastify";

export async function TransactionRoutes(app: FastifyInstance) {

  // app.post("/", )

  app.get("/hello", async (request, response) => {
    return response.send("ok");
  });
}
