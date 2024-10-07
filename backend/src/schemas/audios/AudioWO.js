const AudioWOSchema = `
    type AudioWO implements Audio {
        id: ID!
        url: String!
        pronunciation: Int
        speaker: Speaker!
        rating: Rating
        glossaryWO: GlossaryWO!       
    }
`;

export { AudioWOSchema }