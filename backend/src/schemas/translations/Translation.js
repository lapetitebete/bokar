const TranslationSchema = `
    type Translation {
        id: ID!
        glossaryFR: GlossaryFR!
        glossaryWO: GlossaryWO!
        images: [Image!]
        literalFR: LiteralFR
    }
`;

export { TranslationSchema }