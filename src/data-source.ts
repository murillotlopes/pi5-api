import { config } from 'dotenv';
import path from 'path';
import "reflect-metadata"
import { DataSource } from "typeorm"

config()

export const AppDataSource =
  new DataSource({
    type: "postgres",
    host: "localhost",
    port: process.env.PORT_DB as unknown as number,
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD as string,
    database: process.env.POSTGRES_DB,
    // url: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false },
    entities: [path.join(__dirname, "/entities/**/*.{ts,js}")],
    migrations: [path.join(__dirname, "/migration/**/*.{ts,js}")],
    synchronize: false
  })

// export const AppDataSource = new DataSource({
//   type: "postgres",
//   url: process.env.DATABASE_URL,
//   logging: false,
//   ssl: { rejectUnauthorized: false },
//   entities: [path.join(__dirname, "/entities/**/*.{ts,js}")],
//   migrations: [path.join(__dirname, "/migrations/**/*.{ts,js}")],
// });