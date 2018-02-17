import SimpleSchema from 'simpl-schema';

//Creating timeRange Schema

export const TimeRangeSchema = new SimpleSchema(
  {
    startRange :
    {
      type : Date,
      label : "Start Range"
    },
    endRange :
    {
      type : Date,
      label : "End Range"
    },
  }
);
