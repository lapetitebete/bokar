import _sequelize from 'sequelize';
const { Model, DataTypes } = _sequelize;

import { Language } from './language.js';
import { Speaker } from './speaker.js';

import { sequelize } from '../../util/sequelize.js';

class SpeakerLanguage extends Model {}

const attributes = {
    id: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    speaker_id: {
        type: DataTypes.SMALLINT.UNSIGNED,
        allowNull: false,
        unique: 'uniqueKey_speaker_id_language_id',
        references: {
            model: Speaker,
            key: 'id',
        },
    },
    language_id: {
        type: DataTypes.TINYINT.UNSIGNED,
        allowNull: false,
        unique: 'uniqueKey_speaker_id_language_id',
        references: {
            model: Language,
            key: 'id',
        },
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
    modelName: 'speakerLanguage',
    tableName: 'speakers_languages',
    createdAt: true,
    updatedAt: true,
};

SpeakerLanguage.init(attributes, options);

export { SpeakerLanguage };