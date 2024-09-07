import { DataType, DataTypes, Model } from "sequelize";
import db from "../config/db";
import { Theme } from "../interfaces/theme.interface";


class ThemeModel extends Model<Theme> implements Theme {
    public id!: number;
    public name!: string;
    public description!: string;
}


ThemeModel.init({
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
        type: DataTypes.TEXT,
        allowNull: false
    }
},{ sequelize: db, tableName: "theme" });


export { ThemeModel }