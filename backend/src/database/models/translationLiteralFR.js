import _sequelize from 'sequelize';
const { Model, DataTypes } = _sequelize;

import { Translation } from './translation.js';

import { sequelize } from '../../util/sequelize.js';

class TranslationLiteralFR extends Model {}

const attributes = {
    id: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,

    },
    literal: {
        type: DataTypes.STRING(750),
        allowNull: false,
    },
    translation_id: {
        type: DataTypes.SMALLINT.UNSIGNED,
        unique: true,
        references: {
            model: Translation,
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
    modelName: 'translationLiteralFR',
    tableName: 'translationsLiteralFR',
    createdAt: true,
    updatedAt: true,
};

TranslationLiteralFR.init(attributes, options);

export { TranslationLiteralFR };