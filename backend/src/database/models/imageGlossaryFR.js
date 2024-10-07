import _sequelize from 'sequelize';
const { Model, DataTypes } = _sequelize;

import { GlossaryFR } from './glossaryFR.js';
import { Image } from './image.js';

import { sequelize } from '../../util/sequelize.js';


class ImageGlossaryFR extends Model {}

const attributes = {
    id: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    image_id: {
        type: DataTypes.SMALLINT.UNSIGNED,
        allowNull: false,
        unique: 'uniqueKey_image_id_glossaryFr_id',
        references: {
            model: Image,
            key: 'id',
        },
    },
    glossaryFR_id: {
        type: DataTypes.SMALLINT.UNSIGNED,
        allowNull: false,
        field: 'glossaryFR_id',
        unique: 'uniqueKey_image_id_glossaryFr_id',
        references: {
            model: GlossaryFR,
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
    modelName: 'imageGlossaryFR',
    tableName: 'images_glossaryFR',
    createdAt: true,
    updatedAt: true,
};

ImageGlossaryFR.init(attributes, options);

export { ImageGlossaryFR };