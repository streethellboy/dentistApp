import SimpleSchema from 'simpl-schema';

//Creating educationalBackground Schema

export const EducationalBackground =new SimpleSchema(
  {
    university :
    {
      type : String
    },
    subject :
    {
      type : String
    },
    thesis :
    {
      type : String
    },
    dateOfGraduation :
    {
      type : Date
    },
    description :
    {
      type : String,
      optional : true
    }
  }
);
