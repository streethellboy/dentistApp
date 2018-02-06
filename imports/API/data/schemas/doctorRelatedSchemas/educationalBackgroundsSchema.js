import SimpleSchema from 'simple-schema';

//Creating educationalBackground Schema

export const EducationalBackground =new SimpleSchema(
  {
    university :
    {
      type : String,
      label : "University",
    },
    subject :
    {
      type : String,
      label : "Subject",
    },
    thesis :
    {
      type : String,
      label : "Thesis",
    },
    dateOfGraduation :
    {
      type : Date,
      label : "Date Of Graduation",
    },
    description :
    {
      type : String,
      label : "Description",
      optional : true,
    },
  }
);
