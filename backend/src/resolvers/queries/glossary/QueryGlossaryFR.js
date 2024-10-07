import { GlossaryFR } from '../../../database/associations/v1-all.js';

const QueryGlossaryFR = {
    glossaryFR: async (parent, args, contecxt, info) => {
        const glossaryFR_ = await GlossaryFR.findAll();
        if (!glossaryFR_) {
            throw new Error('glossaryFR not found');
        }
        glossaryFR_.forEach((expressionFR, index, glossaryFR_) => {
            glossaryFR_[index] = {
                id: expressionFR.id,
                text: expressionFR.text_,
                is_voc: expressionFR.is_voc,
            };
        });
        return glossaryFR_;
    },

};

export { QueryGlossaryFR };