import setupKnex from "knex";

declare module 'knex/types/tables' {
  interface Test {
    name: string;
  }
  
  interface Tables {
    test: Test;
  }
}

export const knex = setupKnex({
  client: "pg",
  connection: `${process.env.PG_URL}`,
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