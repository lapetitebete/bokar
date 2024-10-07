import { SubcategoryFR } from '../../../database/associations/v1-all.js';

const QueryTypeSubcategoryFR = {
    categoryFR: async (parent, args, context, info) => {
        const subcategoryFR = await SubcategoryFR.findByPk(parent.id);
        if (!subcategoryFR) {
            throw new Error('subcategoryFR not found');
        }
        const categoryFR_ = await subcategoryFR.getCategoryFR();
        if (!categoryFR_) {
            throw new Error('categoryFR not found');
        }

        return {
            id: categoryFR_.id,
            name: categoryFR_.name_,
        };
    },
    translations: async (parent, args, context, info) => {
        const subcategoryFR = await SubcategoryFR.findByPk(parent.id);
        if (!subcategoryFR) {
            throw new Error('subcategoryFR not found');
        }
        const expressionsFR = await subcategoryFR.getExpressionsFR();
        if (!expressionsFR) {
            return null;
        }

        for (let i=0; i < expressionsFR.length; i++) {
            const translations_ = await expressionsFR[i].getTranslationsIds();
            translations_.forEach((trans, k, translations_) => {
                translations_[k] = {
                    id: trans.id,
                };
            });
            expressionsFR[i] = translations_;
        }
        // expressionsFR.forEach((exprFR, index, expressionsFR) => {
        //     const translations_ = await expFR.getTranslationsIds();
        //     translations_.forEach((trans, k, translations_) => {
        //         translations_[k] = {
        //             id: trans.id,
        //         };
        //     });
        //     expressionsFR[index] = translations_;
        // });

        return expressionsFR.flat();
    },
};

export { QueryTypeSubcategoryFR };