import { knex } from "knex";

declare module "knex/types/tables" {
  interface Tables {
    transactions: ITransaction;
  }
}
