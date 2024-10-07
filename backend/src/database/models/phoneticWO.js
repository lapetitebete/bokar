import _sequelize from 'sequelize';
const { Model, DataTypes } = _sequelize;

import { GlossaryWO } from './glossaryWO.js';

import { sequelize } from '../../util/sequelize.js';

class PhoneticWO extends Model {}

const attributes = {
    id: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,

    },
    phonetic: {
        type: DataTypes.STRING(750),
        allowNull: false,
    },
    glossaryWO_id: {
        type: DataTypes.SMALLINT.UNSIGNED,
        unique: true,
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
    modelName: 'phoneticWO',
    tableName: 'phoneticsWO',
    createdAt: true,
    updatedAt: true,
};

PhoneticWO.init(attributes, options);

export { PhoneticWO };