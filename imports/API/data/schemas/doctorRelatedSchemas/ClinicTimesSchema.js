import SimpleSchema from 'simpl-schema';
import TimeRangeSchema from './TimeRangeSchema';

//Creating the clinicTimes schema

export const ClinicTimesSchema = new SimpleSchema(
  {
    clinic_Id :
    {
      type : Number,
      label : "clinic times",
      required : true
    },
    workDate :                   //This field is to indicate the date that doctor is working
    {
      type : Date,
      label : "work date",
      required : true
    },
    weekDay :
    {
      type : String,
      label : "weekday",
      allowedValues : ["saturday", "sunday", "monday", "tuesday", "wednesday", "thursday", "friday"],
      required : true
    },
    workingRange :
    {
      type: TimeRangeSchema,
      label : "time range",
      required : true
    }   //This field takes a range indicating the doctor working range
  }
);
