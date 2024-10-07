import _sequelize from 'sequelize';
const { Model, DataTypes } = _sequelize;

import { sequelize } from '../../util/sequelize.js';

class Licence extends Model {}

const attributes = {
    id: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    name_: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: 'uniqueKey_name_',
    },
    shortname: {
        type: DataTypes.STRING(20),
    },
    url: {
        type: DataTypes.STRING(750),
        allowNull: false,
        unique: 'uniqueKey_url',
    },
    thumbpath: {
        type: DataTypes.STRING(500),
    },
    thumbname: {
        type: DataTypes.STRING(30),
    },
    commercial_use: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
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
    modelName: 'licence',
    tableName: 'licences', // SQL name
    createdAt: true,
    updatedAt: true,
};

Licence.init(attributes, options);

export { Licence };