import SimpleSchema from 'simpl-schema';

//Creating the phone schema
//We can only pass one of the following tags or enter none at all

export const Phone = new SimpleSchema(
  {
    areaCode :
    {
      type : Integer,
      min : 000,
      max : 999,
      allowedValues : ["021", "041"],
      optional : true,
    },

    landLinePhoneNumber :
    {
      type : Integer,
      min : 00000000,
      max : 99999999,
      optional : true,
    },
    cellphoneNumber :
    {
      type : Integer,
      min : 00000000000,
      max : 99999999999,
      regEx : [/09/],             //Only numbers starting with 09 are allowed
      optional : true,
    },
  }
)
