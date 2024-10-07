const GlossaryFRSchema = `
    type GlossaryFR implements Glossary {
        id: ID!
        text: String!
        is_voc: Boolean!
        audiosFR: [AudioFR!]! 
    }
`;

export { GlossaryFRSchema }