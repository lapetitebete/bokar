import { AudioSchema } from './audios/Audio.js';
import { AudioFRSchema } from './audios/AudioFR.js';
import { AudioWOSchema } from './audios/AudioWO.js';
import { CategoryFRSchema } from './categories/CategoryFR.js';
import { ContinentSchema } from './continents/Continent.js';
import { CountrySchema } from './countries/Country.js';
import { GlossarySchema } from './glossary/Glossary.js';
import { GlossaryFRSchema } from './glossary/GlossaryFR.js';
import { GlossaryWOSchema } from './glossary/GlossaryWO.js';
import { ImageSchema } from './images/Image.js';
import { LanguageSchema } from './languages/Language.js';
import { LiteralFRSchema } from './literals/LiteralFR.js';
import { LicenceSchema } from './licences/Licence.js';
import { PhoneticWOSchema } from './phonetics/PhoneticWO.js';
import { PhotographerSchema } from './photographers/Photographer.js';
import { RatingSchema } from './ratings/Rating.js';
import { SourceSchema } from './sources/Source.js';
import { SpeakerSchema } from './speakers/Speaker.js';
import { SubcategoryFRSchema } from './subcategories/SubcategoryFR.js';
import { TranslationSchema } from './translations/Translation.js';

import { RootQuerySchema } from './RootQuery.js';

const typeDefs = [
    // RootMutationSchema,
    RootQuerySchema,
    // RootSubscriptionSchema,

    AudioSchema,
    AudioFRSchema,
    AudioWOSchema,
    CategoryFRSchema,
    ContinentSchema,
    CountrySchema,
    GlossaryFRSchema,
    GlossaryWOSchema,
    GlossarySchema,
    ImageSchema,
    LanguageSchema,
    LicenceSchema,
    LiteralFRSchema,
    PhoneticWOSchema,
    PhotographerSchema,
    RatingSchema,
    SourceSchema,
    SpeakerSchema,
    SubcategoryFRSchema,
    TranslationSchema,
];


export { typeDefs as default };