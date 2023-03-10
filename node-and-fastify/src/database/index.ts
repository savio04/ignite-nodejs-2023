import setupKnex from "knex";
import { config } from "../config/env";

export const knex = setupKnex({
  client: "pg",
  connection: `${config.PG_URL}`,
});


//connection
(async() => {
  try{
    const { rows } = await knex.raw('select version()')
    const version = rows[0].version
    console.log(`Database connected: ${version}`)
  }catch(error) {
    console.log("Error", error)
  }
})();
