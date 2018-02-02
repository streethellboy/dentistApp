import SimpleSchema from 'simpl-schema';
import Date from './dateSchema'
import TimeRange from './timeRangeSchema'

//Creating the clinicTimes schema

export const ClinicTimes = new SimpleSchema(
  {
    clinic_Id :
    {
      type : Number,
      label : "شناسه کلینیک",
    },
    workDate : Date,      //This field is to indicate the date that doctor is working
    workingRange : TimeRange,   //This field takes a range indicating the doctor working range
  },
)
