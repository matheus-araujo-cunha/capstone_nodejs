import "reflect-metadata";
import path from "path";
import { DataSource } from "typeorm";
import * as dotenv from "dotenv";

const { Pool } = require('pg');

dotenv.config();

const TestEnv = new DataSource({
  type: "sqlite",
  database: "../dbTest.sqlite",
  synchronize: true,
  entities: [path.join(__dirname, "./entities/**/*.{js,ts}")],
});




const DevEnv = new DataSource({
  type: "postgres",
  url: process.env.DATABASE_URL,
  ssl: process.env.NODE_ENV==="production"?{ rejectUnauthorized: false }: false,
  logging: false,
  entities: [path.join(__dirname, "./entities/**/*.{js,ts}")],
  migrations: [path.join(__dirname, "./migrations/**/*.{js,ts}")],
});



export default process.env.NODE_ENV === "test" ? TestEnv : DevEnv;
