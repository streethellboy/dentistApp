import SimpleSchema from 'simple-schema';



//Creating the profileSchema

export const DoctorProfile = new SimpleSchema(
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
    age :
    {
      type : Integer,     //only decimal no float
      label : "Age",
      min : 2,            //Children above 2 years
      max : 90,           //Oldmen under 90
      optional : true,    //this field can be ignored not required
    },
    marritalStatus :
    {
      type : String,
      allowedValues : ["single", "married"],
      optional : true,
    },
    cellphoneNumber :     //Here we take the doctor cellphone number
    {
        type : Integer,
        min : 09010000000,
        max : 09399999999,
    },
    clinicPhoneNumber :     // Here we take area code, clinic number and clinic id for each landline clinic number
    {
      areaCode :
      {
        type : Integer,
        min : 000,
        max : 999,
        allowedValues : ["021", "041"],
      },

      landLinePhoneNumber :
      {
        type : Integer,
        min : 10000000,
        max : 99999999,
      },

      clinic_Id :
      {
        type : String,
        label : "Clinic Id",
      },
    },
    emailAddress :
    {
      type : String,
      label : "Email Address",
      max : 100,                        //only less than 100 character allowed
      regEx: SimpleSchema.RegEx.Email,  //this test if entered string is an email
    },
    medicalCouncilNumber :              //Code nezam pezeshki
    {
      type : Integer,
      label : "Medical Council Number",
    },

  }
);
