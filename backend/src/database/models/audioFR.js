import _sequelize from 'sequelize';
const { Model, DataTypes } = _sequelize;

import { GlossaryFR } from './glossaryFR.js';
import { Rating } from './rating.js';
import { Speaker } from './speaker.js';

import { sequelize } from '../../util/sequelize.js';

class AudioFR extends Model {}

const attributes = {
  id: {
    type: DataTypes.SMALLINT.UNSIGNED,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  dirpath: {
    type: DataTypes.STRING(300),
    allowNull: false,
  },
  filename: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  pronunciation: {
    type: DataTypes.BOOLEAN,
  },
  speaker_id: {
    type: DataTypes.SMALLINT.UNSIGNED,
    allowNull: false,
    references: {
      model: Speaker,
      key: 'id',
    },
  },
  rating_id: {
    type: DataTypes.TINYINT.UNSIGNED,
    references: {
      model: Rating,
      key: 'id',
    },
  },
  glossaryFR_id: {
    type: DataTypes.SMALLINT.UNSIGNED,
    allowNull: false,
    field: 'glossaryFR_id',
    references: {
      model: GlossaryFR,
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
  modelName: 'audioFR',
  tableName: 'audiosFR', // SQL name
  createdAt: true,
  updatedAt: true,
};

AudioFR.init(attributes, options);

export { AudioFR };