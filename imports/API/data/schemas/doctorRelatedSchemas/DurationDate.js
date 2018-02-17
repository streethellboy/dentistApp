import SimpleSchema from 'simpl-schema';

export const DurationDate = new SimpleSchema(
  {
    durationStartDate :
    {
      type : Date
    },
    durationEndDate :
    {
      type : Date
    },
  }
);
