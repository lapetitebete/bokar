import _sequelize from 'sequelize';
const { Model, DataTypes } = _sequelize;

import { sequelize } from '../../util/sequelize.js';

class Speaker extends Model {}

const attributes = {
    id: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    firstname: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    lastname: {
        type: DataTypes.STRING(50),
    },
    gender: {
        type: DataTypes.ENUM('M', 'F'),
    },
    age: {
        type: DataTypes.TINYINT.UNSIGNED,
    },
    // created_at: {
    //     type: DataTypes.DATE,
    //     allowNull: false,
    //     defaultValue: sequelize.fn('CURRENT_TIMESTAMP'), // DataTypes.NOW, sequelize.fn('NOW'), sequelize.fn('NOW()'),
    // },
    // updated_at: {
    //     type: DataTypes.DATE,
    //     allowNull: false,
    //     defaultValue: sequelize.fn('CURRENT_TIMESTAMP'),
    //     onUpdate: sequelize.fn('CURRENT_TIMESTAMP'),
    // },
};

const options = { 
    sequelize,
    timestamps: true,
    underscored: true,
    // paranoid: true,
    modelName: 'speaker',
    tableName: 'speakers', // SQL name
    createdAt: true,
    updatedAt: true,
};

Speaker.init(attributes, options);

export { Speaker };