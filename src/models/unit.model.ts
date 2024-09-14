import { DataType, DataTypes, Model } from "sequelize";
import { Unit } from '../interfaces/unit.interface';
import db from "../config/db";


class UnitModel extends Model<Unit> implements Unit {
    public id!: number;
    public name!: string;
    public description!: string;
    public title!: string;
    public icon!: string;
}

UnitModel.init({
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
    title: {
        type: DataTypes.STRING,
        allowNull:false
    },
    icon: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, { sequelize: db, tableName: "unit"});


export { UnitModel }
