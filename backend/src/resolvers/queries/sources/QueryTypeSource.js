import { Source } from '../../../database/associations/v1-all.js';

const QueryTypeSource = {
    images: async (parent, args, context, info) => {
        const source = await Source.findByPk(parent.id);
        if (!source) {
            throw new Error('source not found');
        }
        const images_ = await source.getImages();
        if (!images_) {
            return null
        }
        
        images_.forEach((image, index, images_) => {
            images_[index] = {
                id: image.id,
                has_faces: image.has_faces,
                url_storage: image.dirpath + image.filename,
                url_origin: image.url,
            };
        });

        return images_;
    },  
};

export { QueryTypeSource };