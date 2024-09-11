import { Dialect } from "sequelize";
import "dotenv/config";
import * as env from "env-var";


export const envs = {
    PORT: env.get('PORT').required().asPortNumber(),
    DB_HOST: env.get('DB_HOST').required().asString(),
    DB_PORT: env.get('DB_PORT').required().asPortNumber(),
    DB_USER: env.get('DB_USER').required().asString(),
    DB_PASSWORD: env.get('DB_PASSWORD').asString(),
    DB_NAME: env.get('DB_NAME').required().asString(),
    DB_SECRET: env.get('DB_SECRET').required().asString(),
    DB_DIALECT: process.env.DB_DIALECT as Dialect
}