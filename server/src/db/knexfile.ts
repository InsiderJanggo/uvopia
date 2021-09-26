import { Knex } from "knex";
import * as dotenv from 'dotenv'
dotenv.config()

const config: Knex.Config = {
  client: 'pg',
  connection: { 
    host: process.env.POSTGRES_HOST,
    user: process.env.POSTGRES_uSER,
    password: process.env.POSTGRES_PASS,
    database: process.env.POSTGRES_DB
  },
  migrations: {
    directory: './src/db/migrations',
    extension: 'ts'
  },
  seeds: {
    directory: './src/db/seeds',
    extension: 'ts'
  }
}

export default config