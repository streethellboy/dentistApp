import SimpleSchema from 'simpl-schema';



//Creating the profileSchema

export const DoctorProfileSchema = new SimpleSchema(
  {
    name :
    {
      type : String,
      label : "First Name",
      min : 1,              // at least one character must be entered
      max : 50,             // can't enter more than 50 character
      required : true
    },
    lastName :
    {
      type : String,
      label : "Last Name"
      min : 1,               // at least one character must be entered
      max : 100,             // can't enter more than 50 character
      required : true
    },
    gender :
    {
      type : String,
      label : "Gender",
      allowedValues : ["male", "female"],
      required : true
    },
    birthDate :
    {
      type: Date,
      label:"birth date",
      min: new Date(1930, 0, 1),
      max:new Date(),
      required: true
    },
    marritalStatus :
    {
      type : String,
      allowedValues : ["single", "married"],
      optional : true
    },
    cellphoneNumber :     //Here we take the doctor cellphone number
    {
      type : String,
      label : "Mobile contact",
      regEx:/^09(0[1-3]|1[0-9]|3[0-9]|2[0-1])-?[0-9]{3}-?[0-9]{4}}$/,
      required: true
    },
    clinic_Ids :     // Here we take the list of clinics
    {
      type : Array,
      label : "clinic array",
      required : true
    },
    emailAddress :
    {
      type : String,
      max : 100,                        //only less than 100 character allowed
      regEx: SimpleSchema.RegEx.Email   //this test if entered string is an email
    },
    medicalCouncilNumber :              //Code nezam pezeshki
    {
      type : SimpleSchema.Integer,
      label : "medical council number",
      required : true
    },
    nationalID :
    {
      type:String,
      regEX:/^[0-9]{10}$/,
      required: true
    },

  }
);
