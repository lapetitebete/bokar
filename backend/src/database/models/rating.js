import _sequelize from 'sequelize';
const { Model, DataTypes } = _sequelize;

import { sequelize } from '../../util/sequelize.js';

class Rating extends Model {}

const attributes = {
  id: {
    type: DataTypes.TINYINT.UNSIGNED,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  rating: {
    type: DataTypes.TINYINT,
    allowNull: false,
    unique: 'uniqueKey_rating',
  },
  name_: {
    type: DataTypes.STRING(20),
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
  modelName: 'rating',
  tableName: 'ratings', // SQL name
  createdAt: true,
  updatedAt: true,
};

Rating.init(attributes, options);

export { Rating };