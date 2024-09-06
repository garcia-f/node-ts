import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';

const ProgressModel = sequelize.define('progress', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        unique: true,
        autoIncrement: true,
        allowNull: false
    }
});

export default ProgressModel;