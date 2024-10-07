import { Speaker } from '../../../database/associations/v1-all.js';

const QueryTypeSpeaker = {
    languages: async (parent, args, context, info) => {
        const source = await Speaker.findByPk(parent.id);
        if (!source) {
            throw new Error('source not found');
        }
        const languages_ = await source.getLanguages();
        if (!languages_) {
            throw new Error('languages not found');
        }
        
        languages_.forEach((language, index, languages_) => {
            languages_[index] = {
                id: language.id,
                name: language.name_,
                code: language.code_,
            };
        });

        return languages_;
    },  
};

export { QueryTypeSpeaker };