import { PhoneticWO } from '../../../database/associations/v1-all.js';

const QueryPhoneticWO = {
    phoneticsWO: async (parent, args, context, info) => {
        const phoneticsWO_ = await PhoneticWO.findAll();
        if (!phoneticsWO_) {
            throw new Error('phoneticsWO not found');
        }
        phoneticsWO_.forEach((phonWO, index, phoneticsWO_) => {
            // console.log(phonWO.phonetic === null)
            phoneticsWO_[index] = {
                id: phonWO.id,
                phonetic: phonWO.phonetic,
            };
        });
        return phoneticsWO_;
    },

};


export { QueryPhoneticWO };