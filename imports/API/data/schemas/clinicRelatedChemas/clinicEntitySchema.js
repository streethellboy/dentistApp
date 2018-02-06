import SimpleSchema from 'simple-schema';
import Address from './addressSchema';

//Creatig the clinicEntity schema

export const ClinicEntitySchema = new SimpleSchema(
  {
    clinicName :
    {
      type : String,
      label : "Name"
      min : 1,              // at least one character must be entered
      max : 50,             // can't enter more than 50 character
    },

    clinicAddress : Address,

    clinicPhoneNumber :
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
    },

    clinicListOfDoctors :       //here this tag holds the doctors Id
    {
      doctor_Id :
      {
        type : String,
        label : "Doctor Id"
      },
    },

  }
);
