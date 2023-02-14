export interface ITransaction {
  id: string;
  title: string;
  amount: number
  type: "CREDIT" | "DEBIT";
  created_at?: Date
}