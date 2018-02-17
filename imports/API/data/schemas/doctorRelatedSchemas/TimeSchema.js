import SimpleSchema from 'simpl-schema';

// Creating time Schema

export const TimeSchema = new SimpleSchema(
  {
    hour :
    {
      type : SimpleSchema.Integer,
      min : 0,
      max : 24
    },
    minute :
    {
      type : SimpleSchema.Integer,
      min : 0,
      max : 60
    }
  }
);
