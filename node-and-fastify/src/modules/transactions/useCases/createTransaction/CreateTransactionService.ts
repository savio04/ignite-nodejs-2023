import { ITransactionRepository } from "../../respositories/ITransactionRepostory";
import { ITransaction } from "../../TransationModel";
import crypto from "node:crypto";

export interface IRequest {
  title: string;
  amount: number;
  type: "CREDIT" | "DEBIT";
}

export class CreateTransactionService {
  constructor(private transactionRepository: ITransactionRepository) {}

  async execute(transaction: IRequest) {
    try {
      const insertTransaction: ITransaction = {
        id: crypto.randomUUID(),
        ...transaction,
      };

      return await this.transactionRepository.create(insertTransaction);
    } catch (error) {
      throw Error("Falha");
    }
  }
}
