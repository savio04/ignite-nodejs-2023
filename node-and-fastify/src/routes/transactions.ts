import { FastifyInstance } from "fastify";
import { CreateTransactionController } from "../modules/transactions/useCases/createTransaction/CreateTransactionController";

const createTransactionSchema = {
  type: "object",
  properties: {
    title: { type: "string" },
    amount: { type: "number" },
  },
};

export async function TransactionRoutes(app: FastifyInstance) {
  const createTransactionController = new CreateTransactionController();
  app.post("/", {
    schema: {
      body: createTransactionSchema,
    },
    handler: createTransactionController.handler,
  });

  app.get("/hello", async (request, response) => {
    return response.send("ok");
  });
}
