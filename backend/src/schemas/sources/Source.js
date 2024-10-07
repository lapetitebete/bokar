const SourceSchema = `
    type Source {
        id: ID!
        name: String!
        url: String
        images: [Image!]
    }
`;

export { SourceSchema }