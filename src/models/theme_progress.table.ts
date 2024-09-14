import { DataTypes, Model } from "sequelize";
import  db  from "../config/db";
import { Table } from '../interfaces/table.interface';
import { ThemeModel } from "../models/theme.model"
import { ProgressModel } from "./progress.model";


class ThemeProgressTable extends Model<Table> implements Table {
    public progressId!: number;
    public themeId!: number;
    public complete!: boolean;
}

ThemeProgressTable.init({
    progressId: {
        type: DataTypes.INTEGER,
        references: {
            model: ProgressModel,
            key: "id"
        }        
    },
    themeId: {
        type: DataTypes.INTEGER,
        references: {
            model: ThemeModel,
            key: "id"
        }
    },
    complete: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: false
    }
}, { sequelize: db, tableName: "theme_progress"});

export { ThemeProgressTable }