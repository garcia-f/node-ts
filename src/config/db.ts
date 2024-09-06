import { Sequelize, Dialect } from "sequelize";
import "dotenv/config";
import * as env from "env-var";

export const envs = {
    PORT: env.get('PORT').required().asPortNumber(),
    DB_HOST: env.get('DB_HOST').required().asString(),
    DB_PORT: env.get('DB_PORT').required().asPortNumber(),
    DB_USER: env.get('DB_USER').required().asString(),
    DB_PASSWORD: env.get('DB_PASSWORD').asString(),
    DB_NAME: env.get('DB_NAME').required().asString(),
    // DB_DIALECT: env.get('DB_DIALECT').required().asString(),
    DB_DIALECT: process.env.DB_DIALECT as Dialect
}



const db = new Sequelize(envs.DB_NAME, envs.DB_USER, envs.DB_PASSWORD, {
    host: envs.DB_HOST,
    dialect: envs.DB_DIALECT,
    // logging: false
});

export default db;
