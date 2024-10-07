import { GlossaryWO } from '../../../database/associations/v1-all.js';

const QueryGlossaryWO = {
    glossaryWO: async (parent, args, contecxt, info) => {
        const glossaryWO_ = await GlossaryWO.findAll();
        if (!glossaryWO_) {
            throw new Error('glossaryWO not found');
        }
        glossaryWO_.forEach((expressionWO, index, glossaryWO_) => {
            glossaryWO_[index] = {
                id: expressionWO.id,
                text: expressionWO.text_,
                is_voc: expressionWO.is_voc,
            };
        });
        return glossaryWO_;
    },

};


export { QueryGlossaryWO };