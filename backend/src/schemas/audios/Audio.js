const AudioSchema = `
    interface Audio {
        id: ID!
        url: String!
        pronunciation: Int       
    }

    input AudiosInput {
        language: String!
    }
`;

export { AudioSchema }