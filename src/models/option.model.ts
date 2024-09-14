import { DataTypes, Model } from "sequelize";
import { Option } from "../interfaces/option.interface";
import db from "../config/db";


class OptionModel extends Model<Option> implements Option {
    public id!: string;
    public description!: string;
    public correct!: boolean;
}

OptionModel.init({
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    correct: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
}, { sequelize: db, tableName: "options" });


export { OptionModel }