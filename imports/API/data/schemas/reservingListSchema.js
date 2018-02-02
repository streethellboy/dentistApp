import SimpleSchema from 'simpl-schema';
import Date from 'dateSchema';
import TimeRange from 'timeRangeSchema';

//Creating reservingList Schema

export const ReservingList = new SimpleSchema(
  {
    clinic_Id :
    {
      type : Number,
      label : "شناسه کلینیک",
    },
    patient_Id :
    {
      type : Number,
      label : "شناسه بیمار",
    },
    reserveDate : Date,
    visitDuration : TimeRange,
    service : 
  },
);
