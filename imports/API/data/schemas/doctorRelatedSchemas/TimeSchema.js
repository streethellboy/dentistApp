import SimpleSchema from 'simpl-schema';

// Creating time Schema

export const TimeSchema = new SimpleSchema(
  {
    hour :
    {
      type : SimpleSchema.Integer,
      label : "hour",
      min : 0,
      max : 24
      required : true
    },
    minute :
    {
      type : SimpleSchema.Integer,
      label : "minute",
      min : 0,
      max : 60
      required : true
    }
  }
);
