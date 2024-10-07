import { TranslationLiteralFR } from '../../../database/associations/v1-all.js';

const QueryLiteralFR = {
    literalsFR: async (parent, args, contecxt, info) => {
        const literalsFR_ = await TranslationLiteralFR.findAll();
        if (!literalsFR_) {
            throw new Error('literalsFR_ not found');
        }
        literalsFR_.forEach((litFR, index, literalsFR_) => {
            literalsFR_[index] = {
                id: litFR.id,
                literal: litFR.literal,
            };
        });
        return literalsFR_;
    },

};

export { QueryLiteralFR };