import { Continent } from '../../../database/associations/v1-all.js';

const QueryTypeContinent = {
    countries: async (parent, args, context, info) => {
        const continent = await Continent.findByPk(parent.id);
        if (!continent) {
            throw new Error('continent not found');
        }
        const countries_ = await continent.getCountries();
        if (!countries_) {
            throw new Error('countries not found');
        }
        
        countries_.forEach((country, index, countries_) => {
            countries_[index] = {
                id: country.id,
                name_fr: country.name_fr,
                name_en: country.name_en,
                code: country.code_,
            };
        });

        return countries_;
    },  
};

export { QueryTypeContinent };