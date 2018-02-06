import SimpleSchema from 'simple-schema';

// Creating time Schema

export const Time = new SimpleSchema(
  {
    hour :
    {
      type : Integer,
      min : 0,
      max : 24,
      label : "Hour",
      optionl : true,
    },
    minute :
    {
      type : Integer,
      min : 0,
      max : 60,
      label : "Minute",
      optionl : true,
    },
  }
);
