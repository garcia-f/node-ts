import { DataTypes, Model } from "sequelize";
import { Evaluation } from '../interfaces/evaluation.interface';
import db from "../config/db";



class EvaluationModel extends Model<Evaluation> implements Evaluation {
    public id!: string;
    public complete!: boolean;
    public corrects!: number;
    public incorrects!: number;
}

EvaluationModel.init({
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
    },
    complete: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    corrects: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
    },
    incorrects: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
    },
}, { sequelize: db, tableName: "evaluations" });

export { EvaluationModel }