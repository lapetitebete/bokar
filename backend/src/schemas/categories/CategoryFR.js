const CategoryFRSchema = `
    type CategoryFR {
        id: ID!
        name: String!
        subcategoriesFR: [SubcategoryFR!]
    }
`;

export { CategoryFRSchema }