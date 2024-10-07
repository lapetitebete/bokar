const SubcategoryFRSchema = `
    type SubcategoryFR {
        id: ID!
        name: String!
        categoryFR: CategoryFR!
        translations: [Translation!]
    }
`;

export { SubcategoryFRSchema }