import SimpleSchema from 'simpl-schema';



//Creating the profileSchema

export const DoctorProfile = new SimpleSchema(
  {
    name :
    {
      type : String,
      min : 1,              // at least one character must be entered
      max : 50              // can't enter more than 50 character
    },
    lastName :
    {
      type : String,
      min : 1,               // at least one character must be entered
      max : 100              // can't enter more than 50 character
    },
    gender :
    {
      type : String,
      allowedValues : ["male", "female"]
    },
    age :
    {
      type : SimpleSchema.Integer,     //only decimal no float
      min : 2,            //Children above 2 years
      max : 90,           //Oldmen under 90
      optional : true     //this field can be ignored not required
    },
    marritalStatus :
    {
      type : String,
      allowedValues : ["single", "married"],
      optional : true
    },
    cellphoneNumber :     //Here we take the doctor cellphone number
    {
        type : SimpleSchema.Integer,
        min : 09010000000,
        max : 09399999999
    },
    clinic_Ids :     // Here we take the list of clinics
    {
      type : Array
    },
    emailAddress :
    {
      type : String,
      max : 100,                        //only less than 100 character allowed
      regEx: SimpleSchema.RegEx.Email   //this test if entered string is an email
    },
    medicalCouncilNumber :              //Code nezam pezeshki
    {
      type : SimpleSchema.Integer
    },

  }
);
