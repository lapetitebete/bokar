import _sequelize from 'sequelize';
const { Model, DataTypes } = _sequelize;

import { Country } from './country.js';
import { Licence } from './licence.js';
import { Photographer } from './photographer.js';
import { Rating } from './rating.js';
import { Source } from './source.js';

import { sequelize } from '../../util/sequelize.js';

class Image extends Model {}

const attributes = {
    id: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    has_faces: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    dirpath: {
        type: DataTypes.STRING(300),
        allowNull: false,
    },
    filename: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    url: {
        type: DataTypes.STRING(750),
    },
    photographer_id: {
        type: DataTypes.SMALLINT.UNSIGNED,
        references: {
            model: Photographer,
            key: 'id',
        },
    },
    licence_id: {
        type: DataTypes.TINYINT.UNSIGNED,
        allowNull: false,
        references: {
            model: Licence,
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
    country_id: {
        type: DataTypes.SMALLINT.UNSIGNED,
        references: {
            model: Country,
            key: 'id',
        },
    },
    source_id: {
        type: DataTypes.TINYINT.UNSIGNED,
        references: {
            model: Source,
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
    modelName: 'image',
    tableName: 'images',
    createdAt: true,
    updatedAt: true,
};

Image.init(attributes, options);

export { Image };