import SimpleSchema from 'simpl-schema';

export const ClinicPhoneNumberSchema = new SimpleSchema(
  {
    areaCode :
    {
      type : SimpleSchema.Integer,
      min : 000,
      max : 999,
      allowedValues : ["021", "041"],
    },

    landLinePhoneNumber :
    {
      type : SimpleSchema.Integer,
      min : 10000000,
      max : 99999999,
    },
  }
);
