import SimpleSchema from 'simpl-schema';
import AddressSchema from './AddressSchema';
import ClinicPhoneNumberSchema from './ClinicPhoneNumberSchema';

//Creatig the clinicEntity schema

export const ClinicEntitySchema = new SimpleSchema(
  {
    clinicName :
    {
      type : String,
      label : "Name",
      min : 1,              // at least one character must be entered
      max : 50,              // can't enter more than 50 character
      required : true
    },

    clinicAddress :
    {
      type: AddressSchema,
      label : "clinic address",
      required : true
    },
    clinicPhoneNumber :
    {
      type: Array,
      label : "clinic phone number",
      required : true,
    },
    'clinicPhoneNumber.$' :
    {
      type : ClinicPhoneNumberSchema
    },

    clinicListOfDoctors :       //here this tag holds the doctors Id
    {
      type : Array,
      label : "Doctor Ids",
      required : true
    }

  }
);
