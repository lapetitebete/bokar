import { Country } from '../../../database/associations/v1-all.js';

const QueryTypeCountry = {
    continent: async (parent, args, context, info) => {
        const country = await Country.findByPk(parent.id);
        if (!country) {
            throw new Error('country not found');
        }
        const continent_ = await country.getContinent();
        if (!continent_) {
            throw new Error('continent not found');
        }
        
        return {
            id: continent_.id,
            code: continent_.code_,
            name: continent_.name_
        };
    },  
};

export { QueryTypeCountry };