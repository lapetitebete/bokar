import { SubcategoryFR } from '../../../database/associations/v1-all.js';

const QuerySubcategoryFR = {
    subcategoriesFR: async (parent, args, contecxt, info) => {
        const subcategoriesFR_ = await SubcategoryFR.findAll();
        if (!subcategoriesFR_) {
            throw new Error('subcategoriesFR_ not found');
        }
        subcategoriesFR_.forEach((subFR, index, subcategoriesFR_) => {
            subcategoriesFR_[index] = {
                id: subFR.id,
                name: subFR.name_,
            };
        });
        return subcategoriesFR_;
    },

};

export { QuerySubcategoryFR };