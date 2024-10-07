import { GlossaryFR } from '../../../database/associations/v1-all.js';

const QueryTypeGlossaryFR = {
    audiosFR: async (parent, args, context, info) => {
        const glossaryFR = await GlossaryFR.findByPk(parent.id);
        if (!glossaryFR) {
            throw new Error('glossaryFR not found');
        }
        const audiosFR_ = await glossaryFR.getAudiosFR();
        if (!audiosFR_) {
            throw new Error('audiosFR not found');
        }
        
        audiosFR_.forEach((audFR, index, audiosFR_) => {
            audiosFR_[index] = {
                id: audFR.id,
                url: audFR.dirpath + '/' + audFR.filename,
                pronunciation: audFR.pronunciation,
            };
        });
        return audiosFR_;
    },
    
};

export { QueryTypeGlossaryFR };