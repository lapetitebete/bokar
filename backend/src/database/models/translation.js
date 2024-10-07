import _sequelize from 'sequelize';
const { Model, DataTypes } = _sequelize;

import { GlossaryFR } from './glossaryFR.js';
import { GlossaryWO } from './glossaryWO.js';

import { sequelize } from '../../util/sequelize.js';

class Translation extends Model {}

const attributes = {
    id: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    glossaryFR_id: {
        type: DataTypes.SMALLINT.UNSIGNED,
        allowNull: false,
        field: 'glossaryFR_id',
        unique: 'uniqueKey_glossaryFR_id_glossaryWO_id',
        references: {
            model: GlossaryFR,
            key: 'id',
        },
    },
    glossaryWO_id: {
        type: DataTypes.SMALLINT.UNSIGNED,
        allowNull: false,
        field: 'glossaryWO_id',
        unique: 'uniqueKey_glossaryFR_id_glossaryWO_id',
        references: {
            model: GlossaryWO,
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
    modelName: 'translation',
    tableName: 'translations', // SQL name
    createdAt: true,
    updatedAt: true,
};

Translation.init(attributes, options);

export { Translation };