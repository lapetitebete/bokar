import { QueryAudioFR } from './audios/QueryAudioFR.js';
import { QueryAudioWO } from './audios/QueryAudioWO.js';
import { QueryCategoryFR } from './categories/QueryCategoryFR.js';
import { QueryContinent } from './continents/QueryContinent.js';
import { QueryCountry } from './countries/QueryCountry.js';
import { QueryGlossaryFR } from './glossary/QueryGlossaryFR.js';
import { QueryGlossaryWO } from './glossary/QueryGlossaryWO.js';
import { QueryImage } from './images/QueryImage.js';
import { QueryLanguage } from './languages/QueryLanguage.js';
import { QueryLicence } from './licences/QueryLicence.js';
import { QueryLiteralFR } from './literals/QueryLiteralFR.js';
import { QueryPhoneticWO } from './phonetics/QueryPhoneticWO.js';
import { QueryPhotographer } from './photographers/QueryPhotographer.js';
import { QueryRating } from './ratings/QueryRating.js';
import { QuerySource } from './sources/QuerySource.js';
import { QuerySpeaker } from './speakers/QuerySpeaker.js';
import { QuerySubcategoryFR } from './subcategories/QuerySubcategoryFR.js';
import { QueryTranslation } from './translations/QueryTranslation.js';


import { QueryTypeAudioFR } from './audios/QueryTypeAudioFR.js';
import { QueryTypeAudioWO } from './audios/QueryTypeAudioWO.js';
import { QueryTypeCategoryFR } from './categories/QueryTypeCategoryFR.js';
import { QueryTypeContinent } from './continents/QueryTypeContinent.js';
import { QueryTypeCountry } from './countries/QueryTypeCountry.js';
import { QueryTypeGlossaryFR } from './glossary/QueryTypeGlossaryFR.js';
import { QueryTypeGlossaryWO } from './glossary/QueryTypeGlossaryWO.js';
import { QueryTypeImage } from './images/QueryTypeImage.js';
import { QueryTypeLicence } from './licences/QueryTypeLicence.js';
import { QueryTypePhoneticWO } from './phonetics/QueryTypePhoneticWO.js';
import { QueryTypePhotographer } from './photographers/QueryTypePhotographer.js';
import { QueryTypeSource } from './sources/QueryTypeSource.js';
import { QueryTypeSpeaker } from './speakers/QueryTypeSpeaker.js';
import { QueryTypeSubcategoryFR } from './subcategories/QueryTypeSubcategoryFR.js';
import { QueryTypeTranslation } from './translations/QueryTypeTranslation.js';

// ------------------------------------------------------------------------------------
// |                               first level queries                                |
// ------------------------------------------------------------------------------------

const Query = Object.assign({}, 
    QueryAudioFR,
    QueryAudioWO,
    QueryCategoryFR,
    QueryContinent, 
    QueryCountry,
    QueryGlossaryFR,
    QueryGlossaryWO,
    QueryImage,
    QueryLanguage,
    QueryLicence,
    QueryLiteralFR,
    QueryPhoneticWO,
    QueryPhotographer,
    QueryRating,
    QuerySource,
    QuerySpeaker,
    QuerySubcategoryFR,
    QueryTranslation,
);

// ------------------------------------------------------------------------------------
// |                              second level queries                                |
// ------------------------------------------------------------------------------------

const SubQuery = {
    AudioFR: QueryTypeAudioFR,
    AudioWO: QueryTypeAudioWO,
    CategoryFR: QueryTypeCategoryFR,
    Continent: QueryTypeContinent,
    Country: QueryTypeCountry,
    GlossaryFR: QueryTypeGlossaryFR,
    GlossaryWO: QueryTypeGlossaryWO,
    Image: QueryTypeImage,
    PhoneticWO: QueryTypePhoneticWO,
    Photographer: QueryTypePhotographer,
    Licence: QueryTypeLicence,
    Source: QueryTypeSource,
    Speaker: QueryTypeSpeaker,
    SubcategoryFR: QueryTypeSubcategoryFR,
    Translation: QueryTypeTranslation,
};


// const queryResolvers = {
//     Query: Query,
//     AudioFR: QueryTypeAudioFR,
//     AudioWO: QueryTypeAudioWO,
//     CategoryFR: QueryTypeCategoryFR,
//     Continent: QueryTypeContinent,
//     Country: QueryTypeCountry,
//     GlossaryFR: QueryTypeGlossaryFR,
//     GlossaryWO: QueryTypeGlossaryWO,
//     Image: QueryTypeImage,
//     PhoneticWO: QueryTypePhoneticWO,
//     Photographer: QueryTypePhotographer,
//     Licence: QueryTypeLicence,
//     Source: QueryTypeSource,
//     Speaker: QueryTypeSpeaker,
//     SubcategoryFR: QueryTypeSubcategoryFR,
//     Translation: QueryTypeTranslation,
// }

const queryResolvers = {
    Query: Query,
    ...SubQuery,
};

export { queryResolvers as default }