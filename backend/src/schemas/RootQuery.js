const RootQuerySchema = `
    type Query {
        audiosFR: [AudioFR!]!
        audiosWO: [AudioWO!]!
        categoriesFR: [CategoryFR!]!
        continents: [Continent!]!
        countries: [Country!]!
        glossaryFR: [GlossaryFR!]!
        glossaryWO: [GlossaryWO!]!
        images: [Image!]!
        languages: [Language!]!
        licences: [Licence!]!
        literalsFR: [LiteralFR!]!
        phoneticsWO: [PhoneticWO!]!
        photographers: [Photographer!]!
        ratings: [Rating!]!
        sources: [Source!]!
        speakers: [Speaker!]!
        subcategoriesFR: [SubcategoryFR!]!
        translations: [Translation!]!
    }
`;

// subcategories(ids: [Int!]!): [Translation!]!
export { RootQuerySchema }