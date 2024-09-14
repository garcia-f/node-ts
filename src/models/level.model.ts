import { DataTypes, Model } from "sequelize";
import { Level } from "../interfaces/level.interface";
import db from "../config/db";



class LevelModel extends Model<Level> implements Level {
    public id!: number;
    public description!: string;
}

LevelModel.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, { sequelize: db, tableName: "levels" });


export { LevelModel }