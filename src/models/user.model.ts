import { Model, DataTypes } from 'sequelize';
import { User, Level } from '../interfaces/user.interface';
import db from '../config/db';

class UserModel extends Model<User> implements User {
    public id!: number
    public username!: string
    public email!: string
    public password!: string
    public level!: Level
}

UserModel.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    level: {
        type: DataTypes.ENUM("LOW", "MEDIUM", "HIGH"),
        allowNull: false,
        defaultValue: "LOW"
    }


}, { sequelize: db, tableName: 'user' })

export { UserModel }