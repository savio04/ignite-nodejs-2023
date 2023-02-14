import { FastifyInstance } from "fastify";
import { CreateTransactionController } from "../modules/transactions/useCases/createTransaction/CreateTransactionController";
import { z } from "zod";

const createTransactionSchema = z.object({
  title: z.string(),
  amount: z.number(),
  type: z.string().min(1),
})

export async function TransactionRoutes(app: FastifyInstance) {
  const createTransactionController = new CreateTransactionController();
  app.post("/", {
    schema: {
      body: createTransactionSchema,
    },
    validatorCompiler: ({ schema }) => {
      const schemaZod = schema as z.ZodObject<any>;
      return (data) => schemaZod.parse(data)
    },
    handler: createTransactionController.handler,
  });

  app.get("/hello", async (request, response) => {
    return response.send("ok");
  });
}
