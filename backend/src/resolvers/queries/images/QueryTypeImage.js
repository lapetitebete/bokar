import { Image } from '../../../database/associations/v1-all.js';

const QueryTypeImage = {
    photographer: async (parent, args, context, info) => {
        const image = await Image.findByPk(parent.id);
        if (!image) {
            throw new Error('image not found');
        }
        const photographer_ = await image.getPhotographer();
        if (!photographer_) {
            return null;
        }

        return {
            id: photographer_.id,
            pseudonym: photographer_.pseudonym,
            url: photographer_.url
        }; 
    },
    licence: async (parent, args, context, info) => {
        const image = await Image.findByPk(parent.id);
        if (!image) {
            throw new Error('image not found');
        }
        const licence_ = await image.getLicence();
        if (!licence_) {
            throw new Error('licence not found');
        }
        
        return {
            id: licence_.id,
            name: licence_.name_,
            shortname: licence_.shortname,
            url_licence: licence_.url,
            url_thumb: licence_.thumpath + licence_.thumbname,
            commercial_use: licence_.commercial_use,
        };
    },
    rating: async (parent, args, context, info) => {
        const image = await Image.findByPk(parent.id);
        if (!image) {
            throw new Error('image not found');
        }
        const rating_ = await image.getRating();
        if (!rating_) {
            throw new Error('rating not found');
        }
        
        return {
            id: rating_.id,
            rating: rating_.rating,
            name: rating_.name_,
        };
    },
    country: async (parent, args, context, info) => {
        const image = await Image.findByPk(parent.id);
        if (!image) {
            throw new Error('image not found');
        }
        const country_ = await image.getCountry();
        if (!country_) {
            return null;
        }
        
        return {
            id: country_.id,
            name_fr: country_.name_fr,
            name_en: country_.name_en,
            code: country_.code_,
        };
    },
    source: async (parent, args, context, info) => {
        const image = await Image.findByPk(parent.id);
        if (!image) {
            throw new Error('image not found');
        }
        const source_ = await image.getSource();
        if (!source_) {
            return null;
        }
        
        return {
            id: source_.id,
            name_fr: source_.name_fr,
            name_en: source_.name_en,
            code: source_.code_,
        };
    },

};

export { QueryTypeImage };