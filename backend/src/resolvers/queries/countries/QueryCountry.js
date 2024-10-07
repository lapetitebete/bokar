import { Country } from '../../../database/associations/v1-all.js';

const QueryCountry = {
    countries: async (parent, args, { models }, info) => {
        const countries = await Country.findAll();
        if (!countries) {
            throw new Error('countries not found');
        }
        countries.forEach((country, index, countries) => {
            countries[index] = {
                id: country.id,
                name_fr: country.name_fr,
                name_en: country.name_en,
                code: country.code_,
            };
        });
        return countries;
    },

};

export { QueryCountry };