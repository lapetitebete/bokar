import { Licence } from '../../../database/associations/v1-all.js';

const QueryLicence = {
    licences: async (parent, args, contecxt, info) => {
        const licences = await Licence.findAll();
        if (!licences) {
            throw new Error('licences not found');
        }
        licences.forEach((licence, index, licences) => {
            licences[index] = {
                id: licence.id,
                name: licence.name_,
                shortname: licence.shortname,
                url_licence: licence.url,
                url_thumb: licence.thumbpath + licence.thumbname,
                commercial_use: licence.commercial_use,
            };
        });
        return licences;
    },

};

export { QueryLicence };