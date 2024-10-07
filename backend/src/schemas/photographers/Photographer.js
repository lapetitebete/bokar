const PhotographerSchema = `
    type Photographer {
        id: ID!
        pseudonym: String!
        url: String
        images: [Image!]
    }
`;

export { PhotographerSchema }