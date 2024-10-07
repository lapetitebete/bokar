import _sequelize from 'sequelize';
const { Model, DataTypes } = _sequelize;

import { sequelize } from '../../util/sequelize.js';

class Continent extends Model {}

const attributes = {
  id: {
    type: DataTypes.TINYINT.UNSIGNED,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  code_: {
    type: DataTypes.CHAR(2),
    allowNull: false,
  },
  name_: {
    type: DataTypes.STRING(20),
    allowNull: false,
  },
  // created_at: {
  //   type: DataTypes.DATE,
  //   allowNull: false,
  //   defaultValue: sequelize.fn('CURRENT_TIMESTAMP'), // DataTypes.NOW, sequelize.fn('NOW'), sequelize.fn('NOW()'),
  // },
  // updated_at: {
  //   type: DataTypes.DATE,
  //   allowNull: false,
  //   defaultValue: sequelize.fn('CURRENT_TIMESTAMP'),
  //   onUpdate: sequelize.fn('CURRENT_TIMESTAMP'),
  // },
};

const options = {
  sequelize,
  timestamps: true,
  underscored: true,
  // paranoid: true,
  modelName: 'continent',
  tableName: 'continents', // SQL name
  createdAt: true,
  updatedAt: true,
};


Continent.init(attributes, options);

export { Continent };