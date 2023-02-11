import { FastifyReply, FastifyRequest } from "fastify";
import { TransactionRepository } from "../../respositories/transactionRepository";
import { CreateTransactionService, IRequest } from "./CreateTransactionService";

export class CreateTransactionController {
  async handler(request: FastifyRequest, response: FastifyReply) {
    const newTransaction = request.body;
  
    const transactionRepository = new TransactionRepository()
    const service = new CreateTransactionService(transactionRepository)

    const result = await service.execute(newTransaction as IRequest)

    return response.send({ result })
  }
}