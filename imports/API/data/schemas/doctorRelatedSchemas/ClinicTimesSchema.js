import SimpleSchema from 'simpl-schema';
import TimeRangeSchema from './TimeRangeSchema';

//Creating the clinicTimes schema

export const ClinicTimesSchema = new SimpleSchema(
  {
    clinic_Id :
    {
      type : Number
    },
    workDate :                   //This field is to indicate the date that doctor is working
    {
      type : Date
    },
    weekDay :
    {
      type : String,
      allowedValues : ["saturday", "sunday", "monday", "tuesday", "wednesday", "thursday", "friday"]
    },
    workingRange :
    {
      type: TimeRangeSchema
    }   //This field takes a range indicating the doctor working range
  }
);
