import { DataTypes, Model } from 'sequelize';
import { Exercise } from '../interfaces/exercise.interface';
import db from "../config/db";


class ExerciseModel extends Model<Exercise> implements Exercise {
    public id!: number;
    public name!: string;
    public description!: string;
    public code!: string
}


ExerciseModel.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    code: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, { sequelize: db, tableName: "exercise" })