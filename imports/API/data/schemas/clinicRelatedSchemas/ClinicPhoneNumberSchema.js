import SimpleSchema from 'simpl-schema';

export const ClinicPhoneNumberSchema = new SimpleSchema(
  {
    areaCode :
    {
      type : SimpleSchema.Integer,
      label : "area code",
      min : 000,
      max : 999,
      allowedValues : ["021", "041"],
      required : true
    },

    landLinePhoneNumber :
    {
      type : String,
      label : "landline phone",
      regEx : /^?[1-9]{1}-?[0-9]{7}$/,
      required : true
    },
  }
);
