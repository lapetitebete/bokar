import { Licence } from '../../../database/associations/v1-all.js';

const QueryTypeLicence = {
    images: async (parent, args, context, info) => {
        const licence = await Licence.findByPk(parent.id);
        if (!licence) {
            throw new Error('licence not found');
        }
        const images_ = await licence.getImages();
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

export { QueryTypeLicence };