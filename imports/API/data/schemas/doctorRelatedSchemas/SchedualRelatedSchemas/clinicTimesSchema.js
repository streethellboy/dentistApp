import SimpleSchema from 'simple-schema';
import TimeRange from './timeRangeSchema';

//Creating the clinicTimes schema

export const ClinicTimes = new SimpleSchema(
  {
    clinic_Id :
    {
      type : Number,
      label : "Clinic ID",
    },
    workDate :                   //This field is to indicate the date that doctor is working
    {
      type : Date,
      label : "Working Date",
    },
    weekDay :
    {
      type : String,
      label : "weekDay"
      allowedValues : ["saturday", "sunday", "monday", "tuesday", "wednesday", "thursday", "friday"],
    },
    workingRange : TimeRange,   //This field takes a range indicating the doctor working range
  },
);
