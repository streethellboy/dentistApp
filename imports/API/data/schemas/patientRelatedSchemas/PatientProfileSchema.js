import SimpleSchema from 'simpl-schema';

//Creating patientProfile schema

export const PatientProfileSchema = new SimpleSchema(
  {
    firstName :
    {
      type : String,
      label : "first name",
      min:2,
      max:20,
      required: true
    },

    lastName :
    {
      type : String,
      label : "last name",
      min:2,
      max:40,
      required: true
    },
    birthDate :
    {
      type: Date,
      label:"birth date",
      min: new Date(1930, 0, 1),
      max:new Date(),
      required: true
    },
    marritalStatus :        //Optional
    {
      type : String,
      allowedValues : ["single", "married"],
      optional : true
    },
    cellphoneNumber :     //Here we take the patient cellphone number
    {
      type : String,
      label : "Mobile contact",
      regEX:/^09(0[1-3]|1[0-9]|3[0-9]|2[0-1])-?[0-9]{3}-?[0-9]{4}}$/,
      required: true
    },
    emailAddress :       //Email address is optional
    {
      type : String,
      max : 100,                        //only less than 100 character allowed
      regEx: SimpleSchema.RegEx.Email,  //this test if entered string is an email
      optional : true
    },

  }
);
