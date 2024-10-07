import { PhoneticWO } from '../../../database/associations/v1-all.js';

const QueryTypePhoneticWO = {
    glossaryWO: async (parent, args, context, info) => {
        const phoneticWO = await PhoneticWO.findByPk(parent.id);
        if (!phoneticWO) {
            throw new Error('phoneticWO not found');
        }
        const glossaryWO_ = await phoneticWO.getGlossaryWO();
        if (!glossaryWO_) {
            throw new Error('glossaryWO not found');
        }

        return {
            id: glossaryWO_.id,
            text: glossaryWO_.text_,
            is_voc: glossaryWO_.is_voc,
        };
    },  
};

export { QueryTypePhoneticWO };