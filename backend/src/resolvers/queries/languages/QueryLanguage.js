import { Language } from '../../../database/associations/v1-all.js';

const QueryLanguage = {
    languages: async (parent, args, contecxt, info) => {
        const languages = await Language.findAll();
        if (!languages) {
            throw new Error('languages not found');
        }
        languages.forEach((language, index, languages) => {
            languages[index] = {
                id: language.id,
                name: language.name_,
                code: language.code_,
            };
        });
        return languages;
    },

};

export { QueryLanguage };