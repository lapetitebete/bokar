import _sequelize from 'sequelize';
const { Model, DataTypes } = _sequelize;

import { GlossaryWO } from './glossaryWO.js';
import { Rating } from './rating.js';
import { Speaker } from './speaker.js';
import { sequelize } from '../../util/sequelize.js';

class AudioWO extends Model {}

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
    glossaryWO_id: {
        type: DataTypes.SMALLINT.UNSIGNED,
        allowNull: false,
        field: 'glossaryWO_id',
        references: {
            model: GlossaryWO,
            key: 'id',
        },
    },
    // created_at: {
    //     type: DataTypes.DATE,
    //     allowNull: false,
    //     defaultValue: sequelize.fn('CURRENT_TIMESTAMP'), // DataTypes.NOW, sequelize.fn('NOW'), sequelize.fn('NOW()'),
    //   },
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
    modelName: 'audioWO',
    tableName: 'audiosWO', // SQL name
    createdAt: true,
    updatedAt: true,
};

AudioWO.init(attributes, options);

export { AudioWO };