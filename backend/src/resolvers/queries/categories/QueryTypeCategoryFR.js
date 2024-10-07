import { CategoryFR } from '../../../database/associations/v1-all.js';

const QueryTypeCategoryFR = {
    subcategoriesFR: async (parent, args, context, info) => {
        const categoryFR = await CategoryFR.findByPk(parent.id);
        if (!categoryFR) {
            throw new Error('categoryFR not found');
        }
        const subcategoriesFR_ = await categoryFR.getSubcategoriesFR();
        if (!subcategoriesFR_) {
            return null;
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

export { QueryTypeCategoryFR };