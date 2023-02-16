import { FastifyInstance } from "fastify";
import { CreateTransactionController } from "../modules/transactions/useCases/createTransaction/CreateTransactionController";
import { z } from "zod";
import { knex } from "../database";

const createTransactionSchema = z.object({
  title: z.string(),
  amount: z.number(),
  type: z.string().min(1),
})

export async function TransactionRoutes(app: FastifyInstance) {
  app.get("/", async (request, response) => {
    const transactions = await knex("transactions").select("*")
    
    return transactions
  })
  
  const createTransactionController = new CreateTransactionController();
  /**Seguindo padrão Controller > Service > Repository */
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
