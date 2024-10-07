import { AudioFR } from '../models/audioFR.js';
import { AudioWO } from '../models/audioWO.js';
import { CategoryFR } from '../models/categoryFR.js';
import { Continent } from '../models/continent.js';
import { Country } from '../models/country.js';
import { GlossaryFR } from '../models/glossaryFR.js';
import { GlossaryFRSubcategoryFR } from '../models/glossaryFRsubcategoryFR.js';
import { GlossaryWO } from '../models/glossaryWO.js';
import { Image } from '../models/image.js';
import { ImageGlossaryFR } from '../models/imageGlossaryFR.js';
import { Language } from '../models/language.js';
import { Licence } from '../models/licence.js';
import { PhoneticWO } from '../models/phoneticWO.js';
import { Photographer } from '../models/photographer.js';
import { Rating } from '../models/rating.js';
import { Speaker } from '../models/speaker.js';
import { SpeakerLanguage } from '../models/speakerLanguage.js';
import { Source } from '../models/source.js';
import { SubcategoryFR } from '../models/subcategoryFR.js'
import { Translation } from '../models/translation.js';
import { TranslationLiteralFR } from '../models/translationLiteralFR.js';



// ---------------------------------------------------------------- //
//           (SQL) audiosFR fk | AudioFR associations (ORM)         //
// ---------------------------------------------------------------- //

AudioFR.speaker = AudioFR.belongsTo(Speaker, {
    onUpdate: 'CASCADE',
    onDelete: 'RESTRICT', // cannot delete a speaker
    as: 'speaker',
    foreignKey: 'speaker_id', // an audio cannot exist without a speaker.
}); // add speaker_id to AudioFR model

Speaker.audiosFR = Speaker.hasMany(AudioFR, {
    onUpdate: 'CASCADE',
    onDelete: 'RESTRICT', // cannot delete a speaker
    as: 'audiosFR',
    foreignKey: 'speaker_id', // an audio cannot exist without a speaker.
}); // also add speaker_id to AudioFR model

AudioFR.rating = AudioFR.belongsTo(Rating, {
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL',
    as: 'rating',
    foreignKey: 'rating_id',
}); // add rating_id to AudioFR model

Rating.audiosFR = Rating.hasMany(AudioFR, {
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL',
    as: 'audiosFR',
    foreignKey: 'rating_id',
}); // also add rating_id to AudioFR model

AudioFR.glossaryFR = AudioFR.belongsTo(GlossaryFR, {
    onUpdate: 'CASCADE', 
    onDelete: 'RESTRICT', // cannot delete an entity in glossaryFR table
    as: 'glossaryFR',
    foreignKey: 'glossaryFR_id',
}); // add glossaryFR_id to the AudioFR model. (We want to be able to associate an expression in the glossary from the AudioFR model)

GlossaryFR.audiosFR = GlossaryFR.hasMany(AudioFR, {
    onUpdate: 'CASCADE', 
    onDelete: 'RESTRICT', // cannot delete an delete in glossaryFR table
    as: 'audiosFR',
    foreignKey: 'glossaryFR_id',
}); // add glossaryFR_id to the AudioFR model.


// ---------------------------------------------------------------- //
//           (SQL) audiosWO fk | AudioWO associations (ORM)         //
// ---------------------------------------------------------------- //

AudioWO.speaker = AudioWO.belongsTo(Speaker, {
    onUpdate: 'CASCADE',
    onDelete: 'RESTRICT',
    as: 'speaker',
    foreignKey: 'speaker_id',
}); // add speaker_id to AudioWO model

Speaker.audiosWO = Speaker.hasMany(AudioWO, {
    onUpdate: 'CASCADE',
    onDelete: 'RESTRICT',
    as: 'audiosWO',
    foreignKey: 'speaker_id',
}); // also add speaker_id to AudioWO model

AudioWO.rating = AudioWO.belongsTo(Rating, {
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL',
    as: 'rating',
    foreignKey: 'rating_id',
}); // add rating_id to AudioWO model

Rating.audiosWO = Rating.hasMany(AudioWO, {
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL',
    as: 'audiosWO',
    foreignKey: 'rating_id',
}); // also add rating_id to AudioWO model

AudioWO.glossaryWO = AudioWO.belongsTo(GlossaryWO, {
    onUpdate: 'CASCADE',
    onDelete: 'RESTRICT',
    as: 'glossaryWO',
    foreignKey: 'glossaryWO_id',
}); // add glossaryWO_id to the AudiWO model. (We want to be able to associate a glossaryWO instance from the AudioWO model)

GlossaryWO.audiosWO = GlossaryWO.hasMany(AudioWO, {
    onUpdate: 'CASCADE', 
    onDelete: 'RESTRICT',
    as: 'audiosWO',
    foreignKey: 'glossaryWO_id',
}); // add glossaryWO_id to the AudioWO model.


// ---------------------------------------------------------------- //
//          (SQL) countries fk | Country associations (ORM)         //
// ---------------------------------------------------------------- //

Country.continent = Country.belongsTo(Continent, {
    onUpdate: 'CASCADE',
    onDelete: 'RESTRICT',
    as: 'continent',
    foreignKey: 'continent_id',
}); // add continent_id to the Country model.

Continent.countries = Continent.hasMany(Country, {
    onUpdate: 'CASCADE',
    onDelete: 'RESTRICT',
    as: 'countries',
    foreignKey: 'continent_id',
}); // also add continent_id to the Country model

// ---------------------------------------------------------------- //
//     (SQL) translations fk | Translation associations (ORM)       //
// ---------------------------------------------------------------- //

GlossaryFR.translationsWO = GlossaryFR.belongsToMany(GlossaryWO, {
    through: Translation,
    as: 'translationsWO',
    foreignKey: 'glossaryFR_id',
    otherKey: 'glossaryWO_id',
}); // add glossaryWO_id and glossaryFR_id to the Translation model

GlossaryWO.translationsFR = GlossaryWO.belongsToMany(GlossaryFR, {
    through: Translation,
    as: 'translationsFR',
    foreignKey: 'glossaryWO_id',
    otherKey: 'glossaryFR_id',
}); // add glossaryFR_id and glossaryWO_id to the Translation model

GlossaryFR.translationsIds = GlossaryFR.hasMany(Translation, {
    onUpdate: 'CASCADE',
    onDelete: 'RESTRICT',
    as: 'translationsIds',
    foreignKey: 'glossaryFR_id',
}); // add glossaryFR_id to the Translation model

Translation.glossaryFR = Translation.belongsTo(GlossaryFR, {
    onUpdate: 'CASCADE',
    onDelete: 'RESTRICT',
    as: 'glossaryFR',
    foreignKey: 'glossaryFR_id',
}); // add glossaryFR_id to the Translation model

GlossaryWO.translationsIds = GlossaryWO.hasMany(Translation, {
    onUpdate: 'CASCADE',
    onDelete: 'RESTRICT',
    as: 'translationsIds',
    foreignKey: 'glossaryWO_id',
}); // add glossaryWO_id to the Translation model

Translation.glossaryWO = Translation.belongsTo(GlossaryWO, {
    onUpdate: 'CASCADE',
    onDelete: 'RESTRICT',
    as: 'glossaryWO',
    foreignKey: 'glossaryWO_id',
}); // add glossaryWO_id to the Translation model


// ---------------------------------------------------------------- //
//   (SQL) subcategoriesFR fk | SubcategoryFR associations (ORM)    //
// ---------------------------------------------------------------- //

SubcategoryFR.categoryFR = SubcategoryFR.belongsTo(CategoryFR, {
    onUpdate: 'CASCADE',
    onDelete: 'RESTRICT', // maybe SET NULL
    as: 'categoryFR',
    foreignKey: 'categoryFR_id',
}); // add categoryFR_id to the SubCategoryFR  model

CategoryFR.subcategoriesFR = CategoryFR.hasMany(SubcategoryFR, {
    onUpdate: 'CASCADE',
    onDelete: 'RESTRICT', // maybe SET NULL
    as: 'subcategoriesFR',
    foreignKey: 'categoryFR_id',
}); // add categoryFR_id to the SubCategoryFR  model

// -------------------------------------------------------------------------------------------------------------------------------- //
//                  (SQL) glossaryFR_subcategoriesFR fk | GlossaryFRSubcategoryFR associations (ORM)                                //
// -------------------------------------------------------------------------------------------------------------------------------- //

GlossaryFR.subcategoriesFR = GlossaryFR.belongsToMany(SubcategoryFR, {
    through: GlossaryFRSubcategoryFR,
    as: 'subcategoriesFR',
    foreignKey: 'glossaryFR_id',
    otherKey: 'subcategoryFR_id',
}); // add subcategoryFR_id and glossaryFR_id to the GlossaryFRSubCategoryFR model

SubcategoryFR.expressionsFR = SubcategoryFR.belongsToMany(GlossaryFR, {
    through: GlossaryFRSubcategoryFR,
    as: 'expressionsFR',
    foreignKey: 'subcategoryFR_id',
    otherKey: 'glossaryFR_id',
}); // add subcategory_id and glossaryFR_id to the GlossaryFRSubCategoryFR model

GlossaryFR.subcategoriesIdsFR = GlossaryFR.hasMany(GlossaryFRSubcategoryFR, {
    onUpdate: 'CASCADE',
    onDelete: 'RESTRICT',
    as: 'subcategoriesIdsFR',
    foreignKey: 'glossaryFR_id',
}); // add glossaryFR_id to the GlossaryFRSubCategoryFR model

GlossaryFRSubcategoryFR.glossaryFR = GlossaryFRSubcategoryFR.belongsTo(GlossaryFR, {
    onUpdate: 'CASCADE',
    onDelete: 'RESTRICT',
    as: 'glossaryFR',
    foreignKey: 'glossaryFR_id',
}); // add glossaryFR_id to the GlossaryFRSubCategoryFR model

SubcategoryFR.expressionsIdsFR = SubcategoryFR.hasMany(GlossaryFRSubcategoryFR, {
    onUpdate: 'CASCADE',
    onDelete: 'RESTRICT',
    as: 'expressionsIdsFR',
    foreignKey: 'subcategoryFR_id',
}); // add subcategoryFR_id to the GlossaryFRSubCategoryFR model

GlossaryFRSubcategoryFR.subcategoryFR = GlossaryFRSubcategoryFR.belongsTo(SubcategoryFR, {
    onUpdate: 'CASCADE',
    onDelete: 'RESTRICT',
    as: 'subcategoryFR',
    foreignKey: 'subcategoryFR_id',
}); // add subcategoryFR_id to the GlossaryFRSubCategoryFR model


// -------------------------------------------------------------------------------------------------------------------------------- //
//                             (SQL) translationsLiteralFR fk | TranslationLiteralFR associations (ORM)                             //
// -------------------------------------------------------------------------------------------------------------------------------- //


TranslationLiteralFR.translation = TranslationLiteralFR.belongsTo(Translation, {
    onUpdate: 'CASCADE',
    onDelete: 'RESTRICT',
    as: 'translation',
    foreignKey: 'translation_id',
});

Translation.translationLiteralFR = Translation.hasOne(TranslationLiteralFR, {
    onUpdate: 'CASCADE',
    onDelete: 'RESTRICT',
    as: 'translationLiteralFR',
    foreignKey: 'translation_id',
});

// ---------------------------------------------------------------- //
//        (SQL) phoneticsWO fk | PhoneticWO associations (ORM)      //
// ---------------------------------------------------------------- //

PhoneticWO.glossaryWO = PhoneticWO.belongsTo(GlossaryWO, {
    onUpdate: 'CASCADE',
    onDelete: 'RESTRICT',
    as: 'glossaryWO',
    foreignKey: 'glossaryWO_id',
});

GlossaryWO.phoneticWO = GlossaryWO.hasOne(PhoneticWO, {
    onUpdate: 'CASCADE',
    onDelete: 'RESTRICT',
    as: 'phoneticWO',
    foreignKey: 'glossaryWO_id',
});

// -------------------------------------------------------------------------------------------------------------------------------- //
//                                 (SQL) speakers_languages fk | SpeakerLanguage associations (ORM)                                 //
// -------------------------------------------------------------------------------------------------------------------------------- //

Speaker.languages = Speaker.belongsToMany(Language, {
    through: SpeakerLanguage,
    as: 'languages',
    foreignKey: 'speaker_id',
    otherKey: 'language_id',
});

Language.speakers = Language.belongsToMany(Speaker, {
    through: SpeakerLanguage,
    as: 'speakers',
    foreignKey: 'language_id',
    otherKey: 'speaker_id',
});

SpeakerLanguage.speaker = SpeakerLanguage.belongsTo(Speaker, {
    onUpdate: 'CASCADE',
    onDelete: 'RESTRICT',
    as: 'speaker',
    foreignKey: 'speaker_id',
});

Speaker.languagesIds = Speaker.hasMany(SpeakerLanguage, {
    onUpdate: 'CASCADE',
    onDelete: 'RESTRICT',
    as: 'languagesIds',
    foreignKey: 'speaker_id',
});

SpeakerLanguage.language = SpeakerLanguage.belongsTo(Language, {
    onUpdate: 'CASCADE',
    onDelete: 'RESTRICT',
    as: 'language',
    foreignKey: 'language_id',
});

Language.speakersIds = Language.hasMany(SpeakerLanguage, {
    onUpdate: 'CASCADE',
    onDelete: 'RESTRICT',
    as: 'speakersIds',
    foreignKey: 'language_id',
});

// ---------------------------------------------------------------- //
//             (SQL) images fk | Image associations (ORM)           //
// ---------------------------------------------------------------- //

Image.photographer = Image.belongsTo(Photographer, {
    onUpdate: 'CASCADE',
    onDelete: 'RESTRICT',
    as: 'photographer',
    foreignKey: 'photographer_id',
});

Photographer.images = Photographer.hasMany(Image, {
    onUpdate: 'CASCADE',
    onDelete: 'RESTRICT',
    as: 'images',
    foreignKey: 'photographer_id',
});

Image.licence = Image.belongsTo(Licence, {
    onUpdate: 'CASCADE',
    onDelete: 'RESTRICT',
    as: 'licence',
    foreignKey: 'licence_id',
});

Licence.images = Licence.hasMany(Image, {
    onUpdate: 'CASCADE',
    onDelete: 'RESTRICT',
    as: 'images',
    foreignKey: 'licence_id'
});

Image.rating = Image.belongsTo(Rating, {
    onUpdate: 'CASCADE',
    onDelete: 'RESTRICT',
    as: 'rating',
    foreignKey: 'rating_id',
});

Rating.images = Rating.hasMany(Image, {
    onUpdate: 'CASCADE',
    onDelete: 'RESTRICT',
    as: 'images',
    foreignKey: 'rating_id',
});

Image.country = Image.belongsTo(Country, {
    onUpdate: 'CASCADE',
    onDelete: 'RESTRICT',
    as: 'country',
    foreignKey: 'country_id',
});

Country.images = Country.hasMany(Image, {
    onUpdate: 'CASCADE',
    onDelete: 'RESTRICT',
    as: 'images',
    foreignKey: 'country_id',
});

Image.source = Image.belongsTo(Source, {
    onUpdate: 'CASCADE',
    onDelete: 'RESTRICT',
    as: 'source',
    foreignKey: 'source_id',
});

Source.images = Source.hasMany(Image, {
    onUpdate: 'CASCADE',
    onDelete: 'RESTRICT',
    as: 'images',
    foreignKey: 'source_id',
});


// -------------------------------------------------------------------------------------------------------------------------------- //
//                                  (SQL) images_glossaryFR fk | ImageGlossaryFR associations (ORM)                                 //
// -------------------------------------------------------------------------------------------------------------------------------- //


Image.expressionsFR = Image.belongsToMany(GlossaryFR, {
    through: ImageGlossaryFR,
    as: 'expressionsFR',
    foreignKey: 'image_id',
    otherKey: 'glossaryFR_id',
});

GlossaryFR.images = GlossaryFR.belongsToMany(Image, {
    through: ImageGlossaryFR,
    as: 'images',
    foreignKey: 'glossaryFR_id',
    otherKey: 'image_id',
});

ImageGlossaryFR.image = ImageGlossaryFR.belongsTo(Image, {
    onUpdate: 'CASCADE',
    onDelete: 'RESTRICT',
    as: 'image',
    foreignKey: 'image_id',
});

Image.expressionsIdsFR = Image.hasMany(ImageGlossaryFR, {
    onUpdate: 'CASCADE',
    onDelete: 'RESTRICT',
    as: 'expressionsIdsFR',
    foreignKey: 'image_id',
});

ImageGlossaryFR.glossaryFR = ImageGlossaryFR.belongsTo(GlossaryFR, {
    onUpdate: 'CASCADE',
    onDelete: 'RESTRICT',
    as: 'glossaryFR',
    foreignKey: 'glossaryFR_id',
});

GlossaryFR.imagesIds = GlossaryFR.hasMany(ImageGlossaryFR, {
    onUpdate: 'CASCADE',
    onDelete: 'RESTRICT',
    as: 'imagesIds',
    foreignKey: 'glossaryFR_id',
});

export {
    AudioFR,
    AudioWO,
    CategoryFR,
    Continent,
    Country,
    GlossaryFR,
    GlossaryFRSubcategoryFR,
    GlossaryWO,
    Image,
    ImageGlossaryFR,
    Language,
    Licence,
    PhoneticWO,
    Photographer,
    Rating,
    Speaker,
    SpeakerLanguage,
    Source,
    SubcategoryFR,
    Translation,
    TranslationLiteralFR,
};