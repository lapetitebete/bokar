import _sequelize from 'sequelize';
const { Model, DataTypes } = _sequelize;

import { sequelize } from '../../util/sequelize.js';

class CategoryFR extends Model {}

const attributes = {
  id: {
    type: DataTypes.SMALLINT.UNSIGNED,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  name_: {
    type: DataTypes.STRING(50),
    allowNull: false,
    unique: 'uniqueKey_name_',
  }
  // ,
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
  modelName: 'categoryFR',
  tableName: 'categoriesFR', // SQL name
  createdAt: true,
  updatedAt: true,
};

CategoryFR.init(attributes, options);

export { CategoryFR };