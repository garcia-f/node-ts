import { DataTypes, Model } from "sequelize";
import { Question } from "../interfaces/question.interface";
import db from "../config/db";



class QuestionModel extends Model<Question> implements Question {
    public id!: number;
    public description!: string;
}

QuestionModel.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, { sequelize: db, tableName: "questions" });


export { QuestionModel }