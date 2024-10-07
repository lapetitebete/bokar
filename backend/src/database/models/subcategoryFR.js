import _sequelize from 'sequelize';
const { Model, DataTypes } = _sequelize;

import { CategoryFR } from './categoryFR.js';

import { sequelize } from '../../util/sequelize.js';

class SubcategoryFR extends Model {}

const attributes = {
  id: {
    type: DataTypes.SMALLINT.UNSIGNED,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  name_: {
    type: DataTypes.STRING(100),
    allowNull: false,
    unique: true
  },
  categoryFR_id: {
    type: DataTypes.SMALLINT.UNSIGNED,
    allowNull: false,
    field: 'categoryFR_id',
    references: {
      model: CategoryFR,
      key: 'id',
    },
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
  modelName: 'subcategoryFR',
  tableName: 'subcategoriesFR',
  createdAt: true,
  updatedAt: true,
};

SubcategoryFR.init(attributes, options);

export { SubcategoryFR };