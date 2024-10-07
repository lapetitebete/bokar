import { Translation } from '../../../database/associations/v1-all.js';

const QueryTypeTranslation = {
    glossaryFR: async (parent, args, context, info) => {
        const translation = await Translation.findByPk(parent.id);
        if (!translation) {
            throw new Error('translation not found');
        }
        const glossaryFR_ = await translation.getGlossaryFR();
        if (!glossaryFR_) {
            throw new Error('glossaryFR not found');
        }

        return {
            id: glossaryFR_.id,
            text: glossaryFR_.text_,
            is_voc: glossaryFR_.is_voc,
        };
    }, 
    glossaryWO: async (parent, args, context, info) => {
        const translation = await Translation.findByPk(parent.id);
        if (!translation) {
            throw new Error('translation not found');
        }
        const glossaryWO_ = await translation.getGlossaryWO();
        if (!glossaryWO_) {
            throw new Error('glossaryWO not found');
        }

        return {
            id: glossaryWO_.id,
            text: glossaryWO_.text_,
            is_voc: glossaryWO_.is_voc,
        };
    },
    images: async (parent, args, context, info) => {
        const translation = await Translation.findByPk(parent.id);
        if (!translation) {
            throw new Error('translation not found');
        }
        const glossaryFR_ = await translation.getGlossaryFR();
        if (!glossaryFR_) {
            throw new Error('glossaryFR not found');
        }
        const images_ = await glossaryFR_.getImages();
        if (!images_) {
            return null;
        }

        images_.forEach((img, index, images_) => {
            images_[index] = {
                id: img.id,
                has_faces: img.has_faces,
                url_storage: img.dirpath + '/' + img.filename,
                url_origin: img.url,
            }
        });

        return images_;
    },
    literalFR: async (parent, args, context, info) => {
        const translation = await Translation.findByPk(parent.id);
        if (!translation) {
            throw new Error('translation not found');
        }
        const literalFR_ = await translation.getTranslationLiteralFR();
        if (!literalFR_) {
            return null;
        }

        return {
            id: literalFR_.id,
            literal: literalFR_.literal,
        }
    },
};

export { QueryTypeTranslation };