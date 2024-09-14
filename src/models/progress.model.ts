import { DataTypes, Model, Sequelize } from 'sequelize';
import { Progress } from "../interfaces/progress.interface";
import db from '../config/db';



class ProgressModel extends Model<Progress> implements Progress{
    public id!: number
}

ProgressModel.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        unique: true,
        autoIncrement: true,
        allowNull: false
    }
}, { sequelize: db, tableName: "progress" });


export { ProgressModel }