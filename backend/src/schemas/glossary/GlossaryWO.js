const GlossaryWOSchema = `
    type GlossaryWO implements Glossary {
        id: ID!
        text: String!
        is_voc: Boolean!
        phoneticWO: PhoneticWO
        audiosWO: [AudioWO!]! 
    }
`;


export { GlossaryWOSchema }