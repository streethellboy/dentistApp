import SimpleSchema from 'simple-schema';

//Creating timeRange Schema

export const TimeRange = new SimpleSchema(
  {
    startRange :
    {
      type : Date,
      label : "Start Range",
    },
    endRange :
    {
      type : Date,
      label : "End Range",
    },
  }
);
