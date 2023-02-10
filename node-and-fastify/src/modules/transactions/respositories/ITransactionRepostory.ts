import { ITransaction } from "../TransationModel";

export interface ITransactionRepository {
  create(transaction: ITransaction): Promise<void>;
  findById(id: string): Promise<ITransaction>;
}