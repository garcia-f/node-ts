import { DataType, DataTypes, Model } from "sequelize";
import { Observation } from '../interfaces/observation.interface';
import db from "../config/db";


class ObservationModel extends Model<Observation> implements Observation {
    public id!: number;
    public attempts!: number;
    public errors!: string;
    public code_quality!: number;
}

ObservationModel.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    attempts: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
        allowNull: false
    },
    errors: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    code_quality: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
        allowNull: false
    }
}, {sequelize: db, tableName: "observation" });


export { ObservationModel }