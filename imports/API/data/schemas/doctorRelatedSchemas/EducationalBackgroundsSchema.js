import SimpleSchema from 'simpl-schema';

//Creating educationalBackground Schema

export const EducationalBackground =new SimpleSchema(
  {
    university :
    {
      type : String,
      label : "university"
    },
    subject :
    {
      type : String,
      label : "subject"
    },
    thesis :
    {
      type : String,
      label : "thesis"
    },
    dateOfGraduation :
    {
      type : Date,
      label : "graduation date"
    },
    description :
    {
      type : String,
      label : "description",
      optional : true
    }
  }
);
