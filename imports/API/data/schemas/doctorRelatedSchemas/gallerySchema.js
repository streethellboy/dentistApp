import SimpleSchema from 'simple-schema';

//Creating gallery schema

export const Gallery = new SimpleSchema(
  {

    photoURL :
    {
      type : String,
      label : "Photo URL",
      regEx : SimpleSchema.RegEx.Url,
    },
  }
);
