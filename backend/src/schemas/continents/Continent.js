const ContinentSchema = `
    type Continent {
        id: ID!
        code: String!
        name: String!
        countries: [Country!]!
    }
`;

export { ContinentSchema }