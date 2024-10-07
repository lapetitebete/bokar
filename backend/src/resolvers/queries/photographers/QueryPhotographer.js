import { Photographer } from '../../../database/associations/v1-all.js';

const QueryPhotographer = {
    photographers: async (parent, args, context, info) => {
        const photographers = await Photographer.findAll();
        if (!photographers) {
            throw new Error('photographers not found');
        }
        photographers.forEach((photographer, index, photographers) => {
            console.log(photographer.id === null)
            photographers[index] = {
                id: photographer.id,
                pseudonym: photographer.pseudonym,
                url: photographer.url,
            };
        });
        return photographers;
    },

};

export { QueryPhotographer };