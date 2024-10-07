import { Rating } from '../../../database/associations/v1-all.js';

const QueryRating = {
    ratings: async (parent, args, contecxt, info) => {
        const ratings = await Rating.findAll();
        if (!ratings) {
            throw new Error('ratings not found');
        }
        ratings.forEach((rating, index, ratings) => {
            ratings[index] = {
                id: rating.id,
                rating: rating.rating,
                name: rating.name_,
            };
        });
        return ratings;
    },

};

export { QueryRating };