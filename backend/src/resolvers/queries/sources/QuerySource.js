import { Source } from '../../../database/associations/v1-all.js';

const QuerySource = {
    sources: async (parent, args, contecxt, info) => {
        const sources = await Source.findAll();
        if (!sources) {
            throw new Error('sources not found');
        }
        sources.forEach((source, index, sources) => {
            sources[index] = {
                id: source.id,
                name: source.name_,
                url: source.url,
            };
        });
        return sources;
    },

};

export { QuerySource };