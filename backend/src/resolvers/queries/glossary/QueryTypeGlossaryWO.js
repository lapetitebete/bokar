import { GlossaryWO } from '../../../database/associations/v1-all.js';

const QueryTypeGlossaryWO = {
    phoneticWO: async(parent, args, context, info) => {
        const glossaryWO = await GlossaryWO.findByPk(parent.id);
        if (!glossaryWO) {
            throw new Error('glossaryWO not found');
        }

        const phoneticWO_ = await glossaryWO.getPhoneticWO();
        
        if (!phoneticWO_) {
            return null;
        }
        
        return {
            id: phoneticWO_.id,
            phonetic: phoneticWO_.phonetic,
        };
    },
    audiosWO: async (parent, args, context, info) => {
        const glossaryWO = await GlossaryWO.findByPk(parent.id);
        if (!glossaryWO) {
            throw new Error('glossaryWO not found');
        }
        const audiosWO_ = await glossaryWO.getAudiosWO();
        if (!audiosWO_) {
            throw new Error('audiosWO not found');
        }

        audiosWO_.forEach((audWO, index, audiosWO_) => {
            audiosWO_[index] = {
                id: audWO.id,
                url: audWO.dirpath + '/' + audWO.filename,
                pronunciation: audWO.pronunciation,
            };
        });

        return audiosWO_;
    },
    
};


export { QueryTypeGlossaryWO };