import { DataType, DataTypes, Model } from "sequelize";
import db from "../config/db";
import { Table } from '../interfaces/table.interface';
import { ProgressModel } from "./progress.model";
import { UnitModel } from "./unit.model";



class UnitProgressTable extends Model<Table> implements Table {
    public progressId!: number;
    public unitId!: number;
    public complete!: boolean;
}

UnitProgressTable.init({
    progressId: {
        type: DataTypes.INTEGER,
        references: {
            model: ProgressModel,
            key: "id"
        }
    },
    unitId: {
        type: DataTypes.INTEGER,
        references: {
            model: UnitModel,
            key: "id"
        }
    },
    complete: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: false
    }
}, { sequelize: db, tableName: "unit_progress"});

export { UnitProgressTable }