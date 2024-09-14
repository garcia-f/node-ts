import { DataTypes, Model } from "sequelize";
import { EvaluationResponses } from "../interfaces/evaluation_responses.interface";
import db from "../config/db";



class EvaluationResponsesTable extends Model<EvaluationResponses> implements EvaluationResponses {
    public id!: string;
}

EvaluationResponsesTable.init({
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
    }
}, { sequelize: db, tableName: "evaluation_responses"} );


export { EvaluationResponsesTable }