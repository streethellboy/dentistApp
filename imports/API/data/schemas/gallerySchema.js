import SimpleSchema from 'simpl-schema';

//Creating gallery schema

export const Gallery = new SimpleSchema(
  {
    photoName :
    {
      type : String,
      label : "نام عکس",
    },
    photoURL :
    {
      type : String,
      label : "آدرس عکس",
    },
  }
)
