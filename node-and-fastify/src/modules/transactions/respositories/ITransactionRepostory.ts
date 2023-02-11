import { ITransaction } from "../TransationModel";

export interface ITransactionRepository {
  create(transaction: ITransaction): Promise<ITransaction>;
  findById(id: string): Promise<ITransaction>;
}