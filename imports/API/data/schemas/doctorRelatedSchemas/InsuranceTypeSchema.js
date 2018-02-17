import SimpleSchema from 'simpl-schema';

export const InsuranceTypeSchema = new SimpleSchema(
  {
    insuranceName :
    {
      type : String
    },
    insuranceCost :
    {
      type : SimpleSchema.Integer,
      min : 1000                 // min cost is 1000 toman
    },
    insuranceDiscount :
    {
      type : SimpleSchema.Integer,
      min : 0,
      max : 100
    },
    insurancePaymentType :
    {
      type : String,
      allowedValues : ["Cash"]
    },
  }
);
