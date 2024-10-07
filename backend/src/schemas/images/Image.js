const ImageSchema = `
    type Image {
        id: ID!
        has_faces: Boolean!
        url_storage: String!
        url_origin: String
        photographer: Photographer
        licence: Licence!
        rating: Rating!
        country: Country
        source: Source
    }
`;

export { ImageSchema }