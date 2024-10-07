const CountrySchema = `
    type Country {
        id: ID!
        name_fr: String!
        name_en: String!
        code: String!
        continent: Continent!       
    }
`;
// images: [Image!]

export { CountrySchema }