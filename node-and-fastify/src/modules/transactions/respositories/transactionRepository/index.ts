import { knex } from "../../../../database";
import { ITransaction } from "../../TransationModel";
import { ITransactionRepository } from "../ITransactionRepostory";

export class TransactionRepository implements ITransactionRepository {
  async create(transaction: ITransaction): Promise<ITransaction> {
    const [result] = await knex("transactions").insert(transaction).returning("*");

    return result
  }

  async findById(id: string): Promise<ITransaction> {
    const result = await knex("transactions").where({ id }).select("*");

    return result[0];
  }
}
