import SimpleSchema from 'simpl-schema';

// Creating time Schema

export const Time = new SimpleSchema(
  [
    hour :
    {
      type : Integer,
      min : 0,
      max : 24,
      label : "ساعت",
      optionl : true,
    },
    minute :
    {
      type : Integer,
      min : 0,
      max : 60,
      label : "دقیقه",
      optionl : true,
    },
  ]
)
