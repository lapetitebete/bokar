import { AudioWO } from '../../../database/associations/v1-all.js';

const QueryTypeAudioWO = {
    speaker: async (parent, args, context, info) => {
        const audioWO = await AudioWO.findByPk(parent.id);
        if (!audioWO) {
            throw new Error('audioWO not found');
        }
        const speaker_ = await audioWO.getSpeaker();
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
        const audioWO = await AudioWO.findByPk(parent.id);
        if (!audioWO) {
            throw new Error('audioWO not found');
        }
        const rating_ = await audioWO.getRating();
        if (!rating_) {
            return null;
        }
        
        return {
            id: rating_.id,
            rating: rating_.rating,
            name: rating_.name_,
        };
    },
    glossaryWO: async (parent, args, context, info) => {
        const audioWO = await AudioWO.findByPk(parent.id);
        if (!audioWO) {
            throw new Error('audioWO not found');
        }
        const glossaryWO_ = await audioWO.getGlossaryWO();
        if (!glossaryWO_) {
            throw new Error('glossaryWO not found');
        }
        
        return {
            id: glossaryWO_.id,
            is_voc: glossaryWO_.is_voc,
            text: glossaryWO_.text_,
        };
    },
    
};

export { QueryTypeAudioWO };