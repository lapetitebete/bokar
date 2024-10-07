const LicenceSchema = `
    type Licence {
        id: ID!
        name: String!
        shortname: String!
        url_licence: String!
        url_thumb: String!
        commercial_use: Boolean!
        images: [Image!]!
    }
`;

export { LicenceSchema }