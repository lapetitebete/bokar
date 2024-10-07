import _sequelize from 'sequelize';
const { Model, DataTypes } = _sequelize;

import { Continent } from './continent.js';
import { sequelize } from '../../util/sequelize.js';

class Country extends Model {}

const attributes = {
  id: {
    type: DataTypes.SMALLINT.UNSIGNED,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  name_fr: {
    type: DataTypes.STRING(100),
    allowNull: false,
    unique: true,
  },
  name_en: {
    type: DataTypes.STRING(100),
    allowNull: false,
    unique: true
  },
  code_: {
    type: DataTypes.CHAR(2),
    allowNull: false,
    unique: true,
  },
  continent_id: {
    type: DataTypes.TINYINT.UNSIGNED,
    allowNull: false,
    references: {
      model: Continent,
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
  modelName: 'country',
  tableName: 'countries', // SQL name
  createdAt: true,
  updatedAt: true,
};

Country.init(attributes, options);

export { Country };