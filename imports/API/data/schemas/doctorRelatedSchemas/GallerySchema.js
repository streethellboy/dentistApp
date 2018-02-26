import SimpleSchema from 'simpl-schema';

//Creating gallery schema

export const GallerySchema = new SimpleSchema(
  {
    photoURL :
    {
      type : Array,
      label : "Photo URL",
      regEx : SimpleSchema.RegEx.Url
    },
    'photoURL.$' :
    {
      type : String
    }
  }
);
