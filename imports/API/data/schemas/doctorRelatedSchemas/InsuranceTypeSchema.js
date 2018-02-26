import SimpleSchema from 'simpl-schema';

export const InsuranceTypeSchema = new SimpleSchema(
  {
    insuranceName :
    {
      type : String,
      label : "insurance name",
      allowedValues : ["تامین اجتماعی"],
      required : true
    },
    insuranceCost :
    {
      type : SimpleSchema.Integer,
      label : "insurance cost",
      min : 1000,                 // min cost is 1000 toman
      required : true
    },
    insuranceDiscount :
    {
      type : SimpleSchema.Integer,
      label : "insurance discount",
      min : 0,
      max : 100,
      optional : true
    },
    insurancePaymentType :
    {
      type : String,
      label : "insurance payment type",
      allowedValues : ["Cash"],
      optional : true
    },
  }
);
