import { Image } from '../../../database/associations/v1-all.js';

const QueryImage = {
    images: async (parent, args, contecxt, info) => {
        const images = await Image.findAll();
        if (!images) {
            throw new Error('images not found');
        }
        images.forEach((image, index, images) => {
            images[index] = {
                id: image.id,
                has_faces: image.has_faces,
                url_storage: image.dirpath + image.filename,
                url_origin: image.url,
            };
        });
        return images;
    },

};

export { QueryImage };