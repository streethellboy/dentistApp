import SimpleSchema from 'simpl-schema';

//Creating timeRange Schema

export const TimeRangeSchema = new SimpleSchema(
  {
    startRange :
    {
      type : Date,
      min: new Date(1930, 0, 1),
      max:new Date(),
      label : "Start Range",
      required : true
    },
    endRange :
    {
      type : Date,
      min: new Date(1930, 0, 1),
      max:new Date(),
      label : "End Range",
      required : true
    },
  }
);
