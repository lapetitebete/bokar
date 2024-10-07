import { CategoryFR } from '../../../database/associations/v1-all.js';

const QueryCategoryFR = {
    categoriesFR: async (parent, args, { models }, info) => {
        const categoriesFR_ = await CategoryFR.findAll();
        if (!categoriesFR_) {
            throw new Error('categoriesFR not found');
        }
        categoriesFR_.forEach((catFR, index, categoriesFR_) => {
            categoriesFR_[index] = {
                id: catFR.id,
                name: catFR.name_
            };
        });
        return categoriesFR_;
    },
};

export { QueryCategoryFR };