import { AudioFR } from "../../../database/associations/v1-all.js";

const QueryAudioFR = {
    audiosFR: async (parent, args, contecxt, info) => {
        const audiosFR = await AudioFR.findAll();
        if (!audiosFR) {
            throw new Error('audiosFR not found');
        }
        audiosFR.forEach((audioFR, index, audiosFR) => {
            audiosFR[index] = {
                id: audioFR.id,
                url: audioFR.dirpath + audioFR.filename,
                pronunciation: audioFR.pronunciation,
            };
        });
        return audiosFR;
    },

};

export { QueryAudioFR };