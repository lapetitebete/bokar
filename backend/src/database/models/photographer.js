import _sequelize from 'sequelize';
const { Model, DataTypes } = _sequelize;

import { sequelize } from '../../util/sequelize.js';

class Photographer extends Model {}

const attributes = {
  id: {
    type: DataTypes.SMALLINT.UNSIGNED,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  pseudonym: {
    type: DataTypes.STRING(100),
  },
  url: {
    type: DataTypes.STRING(750),
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
  modelName: 'photographer',
  tableName: 'photographers', // SQL name
  createdAt: true,
  updatedAt: true,
};

Photographer.init(attributes, options);

export { Photographer };