import SimpleSchema from 'simple-schema';
import Address from './addressSchema';

//Creating resume Schema

export const Resume = new SimpleSchema(
  {
    activityTitle :
    {
      type : String,
      label : "ActivityTitle",
    },
    occupation :
    {
      type : String,
      label : "Occupation",
      optional : true,
    },
    typeOfActivity :
    {
      type : String,
      label : "Type Of Activity",
      allowedValues : ["Official" ,"Contract"],
      optional : true,
    },
    activityAddress :
    {
      type : Address,
      label : "Activity Address",
      optional : true,
    },
    activityDuration :
    {
      startDate :
      {
        type : Date,
        label : "Activity Start Date",
      }
      endDate :
      {
        type : Date,
        label : "Activity End Date",
      }
      optional : true,
    },

  }
);
