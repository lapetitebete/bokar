const SpeakerSchema = `
    type Speaker {
        id: ID!
        firstname: String!
        lastname: String
        gender: Gender!
        age: Int
        languages: [Language!]!
    }

    enum Gender {
        M
        F
    }
`;

// audios: [Audio!]!

export { SpeakerSchema }