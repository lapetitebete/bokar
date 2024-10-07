import _sequelize from 'sequelize';
const { Model, DataTypes } = _sequelize;

import { GlossaryFR } from './glossaryFR.js';
import { SubcategoryFR } from './subcategoryFR.js';

import { sequelize } from '../../util/sequelize.js';

class GlossaryFRSubcategoryFR extends Model {}

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
        unique: 'uniqueKey_glossaryFR_id_subcategoryFR_id',
        references: {
            model: GlossaryFR,
            key: 'id', 
        },
    },
    subcategoryFR_id: {
        type: DataTypes.SMALLINT.UNSIGNED,
        allowNull: false,
        field: 'subcategoryFR_id',
        unique: 'uniqueKey_glossaryFR_id_subcategoryFR_id',
        references: {
            model: SubcategoryFR,
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
    //   },
};

const options = { 
    sequelize,
    timestamps: true,
    underscored: true,
    // paranoid: true,
    modelName: 'glossaryFRSubcategoryFR',
    tableName: 'glossaryFR_subcategoriesFR',
    createdAt: true,
    updatedAt: true,
};

GlossaryFRSubcategoryFR.init(attributes, options);

export { GlossaryFRSubcategoryFR };