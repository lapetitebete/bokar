import { Translation } from '../../../database/associations/v1-all.js';

const QueryTranslation = {
    translations: async (parent, args, { models }, info) => {
        const translations_ = await Translation.findAll();
        if (!translations_) {
            throw new Error('translations not found');
        }

        translations_.forEach((trans, index, translations_) => {
            translations_[index] = {
                id: trans.id,
            };
        });

        return translations_;
    },

};

export { QueryTranslation };