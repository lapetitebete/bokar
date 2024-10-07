import { Photographer } from '../../../database/associations/v1-all.js';

const QueryTypePhotographer = {
    images: async (parent, args, context, info) => {
        const photographer = await Photographer.findByPk(parent.id);
        if (!photographer) {
            throw new Error('photographer not found');
        }
        const images_ = await photographer.getImages();
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

export { QueryTypePhotographer };