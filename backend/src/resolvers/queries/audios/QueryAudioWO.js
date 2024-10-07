import { AudioWO } from '../../../database/associations/v1-all.js';

const QueryAudioWO = {
    audiosWO: async (parent, args, contecxt, info) => {
        const audiosWO = await AudioWO.findAll();
        if (!audiosWO) {
            throw new Error('audiosWO not found');
        }
        audiosWO.forEach((audioWO, index, audiosWO) => {
            audiosWO[index] = {
                id: audioWO.id,
                url: audioWO.dirpath + audioWO.filename,
                pronunciation: audioWO.pronunciation,
            };
        });
        return audiosWO;
    },

};

export { QueryAudioWO };