import SimpleSchema from 'simple-schema';

//Creating patientProfile schema

export const PatientProfile = new SimpleSchema(
  {
    name :
    {
      type : String,
      label : "Name",
      min : 1,              // at least one character must be entered
      max : 50,             // can't enter more than 50 character

    },
    lastName :
    {
      type : String,
      label : "Last Name",
      min : 1,               // at least one character must be entered
      max : 100,             // can't enter more than 50 character
    },
    birthDate :              //Here we take the birthdate which is necessary
    {
      type : Date,
      label : "Birth Date",
    },
    marritalStatus :        //Optional
    {
      type : String,
      allowedValues : ["single", "married"],
      optional : true,
    },
    cellphoneNumber :     //Here we take the patient cellphone number
    {
        type : Integer,
        min : 09010000000,
        max : 09399999999,
    },
    emailAddress :       //Email address is optional
    {
      type : String,
      label : "Email Address",
      max : 100,                        //only less than 100 character allowed
      regEx: SimpleSchema.RegEx.Email,  //this test if entered string is an email
      optional : true,
    },

  }
);
