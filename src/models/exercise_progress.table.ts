import { DataTypes, Model } from "sequelize";
import db from "../config/db";
import { Table } from "../interfaces/table.interface";
import { ExerciseModel } from "./exercise.model";
import { ProgressModel } from "./progress.model";



class ExerciseProgressTable extends Model<Table> implements Table {
    public progressId!: number;
    public exerciseId!: number;
    public complete!: boolean;
}

ExerciseProgressTable.init({
    progressId: {
        type: DataTypes.INTEGER,
        references: {
            model: ProgressModel,
            key: "id"
        }
    },
    exerciseId: {
        type: DataTypes.INTEGER,
        references: {
            model: ExerciseModel,
            key: "id"
        }
    },
    complete: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: false
    }
}, { sequelize: db, tableName: "exercise_progress" });

export { ExerciseProgressTable }