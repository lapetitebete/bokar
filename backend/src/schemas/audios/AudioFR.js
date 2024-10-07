const AudioFRSchema = `
    type AudioFR implements Audio {
        id: ID!
        url: String!
        pronunciation: Int
        speaker: Speaker!
        rating: Rating
        glossaryFR: GlossaryFR!       
    }
`;

export { AudioFRSchema }