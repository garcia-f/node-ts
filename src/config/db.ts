import { Sequelize, Dialect } from "sequelize";
import { envs } from '../environments/environments';


const {
    DB_NAME,
    DB_USER,
    DB_PASSWORD,
    DB_HOST,
    DB_DIALECT

} = envs;


const db = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
    host: DB_HOST,
    dialect: DB_DIALECT,
});

export default db;
