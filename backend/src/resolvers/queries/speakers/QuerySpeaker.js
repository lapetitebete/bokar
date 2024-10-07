import { Speaker } from '../../../database/associations/v1-all.js';

const QuerySpeaker = {
    speakers: async (parent, args, contecxt, info) => {
        const speakers = await Speaker.findAll();
        if (!speakers) {
            throw new Error('speakers not found');
        }
        speakers.forEach((speaker, index, speakers) => {
            speakers[index] = {
                id: speaker.id,
                firstname: speaker.firstname,
                lastname: speaker.lastname,
                gender: speaker.gender,
                age: speaker.age,         
            };
        });
        return speakers;
    },

};

export { QuerySpeaker };