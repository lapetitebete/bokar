import { Continent } from '../../../database/associations/v1-all.js';

const QueryContinent = {
    continents: async (parent, args, { models }, info) => {
        const continents = await Continent.findAll();
        if (!continents) {
            throw new Error('continents not found');
        }
        continents.forEach((continent, index, continents) => {
            continents[index] = {
                id: continent.id,
                code: continent.code_,
                name: continent.name_
            };
        });
        return continents;
    },
};

export { QueryContinent };