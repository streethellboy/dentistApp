import SimpleSchema from 'simpl-schema';

//Creatig expertise schema

export const FieldOfExpertiseAndSpacialty = new SimpleSchema(
  {
    expertise:
    {
      type : String,
      label : "تخصص"
      max : 100,
      allowedValues : ["	تشخیص بیماریهای دهان و دندان", "	آسیب شناسی دهان", "	تصویر برداری دهان و فک و صورت",
                      "دندانپزشکی ترمیمی", "	معالجه ریشه دندان", "	پروتزهای دهان و فک و صورت", "دندانپزشکی کودکان",
                      "ارتودنسی", "جراحی لثه", "جراحی دهان و فک و صورت"],
    },

    specialty :
    {
      type : String,
      label : "تخصص"
      max : 100,
      allowedValues : []
      optional : true;
    },
  }
)
