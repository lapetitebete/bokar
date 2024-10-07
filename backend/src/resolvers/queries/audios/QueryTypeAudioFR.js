import { AudioFR } from '../../../database/associations/v1-all.js';

const QueryTypeAudioFR = {
    speaker: async (parent, args, context, info) => {
        const audioFR = await AudioFR.findByPk(parent.id);
        if (!audioFR) {
            throw new Error('audioFR not found');
        }
        const speaker_ = await audioFR.getSpeaker();
        if (!speaker_) {
            throw new Error('speaker not found');
        }
        
        return {
            id: speaker_.id,
            firstname: speaker_.firstname,
            lastname: speaker_.lastname,
            gender: speaker_.gender,
            age: speaker_.age,         
        };
    },
    rating: async (parent, args, context, info) => {
        const audioFR = await AudioFR.findByPk(parent.id);
        if (!audioFR) {
            throw new Error('audioFR not found');
        }
        const rating_ = await audioFR.getRating();
        if (!rating_) {
            return null;
        }
        
        return {
            id: rating_.id,
            rating: rating_.rating,
            name: rating_.name_,
        };
    },
    glossaryFR: async (parent, args, context, info) => {
        const audioFR = await AudioFR.findByPk(parent.id);
        if (!audioFR) {
            throw new Error('audioFR not found');
        }
        const glossaryFR_ = await audioFR.getGlossaryFR();
        if (!glossaryFR_) {
            throw new Error('glossaryFR not found');
        }
        
        return {
            id: glossaryFR_.id,
            is_voc: glossaryFR_.is_voc,
            text: glossaryFR_.text_,
        };
    },
    
};

export { QueryTypeAudioFR };