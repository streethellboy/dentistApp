import SimpleSchema from 'simple-schema';
import Time from './timeRangeSchema',

//Creating the reserveList Schem

export const ReserveList = new SimpleSchema(
  {
    patientId :
    {
      type : String,
      label : "Patient Id",
    },
    clinicId :
    {
      type : String,
      label : "Clinic Id",
    },
    reserveDate :
    {
      type : Date,
      label : "Reserve Date",
    },
    reserveStartTime :
    {
      type : Date,
      label : "Reserve Start Time",
    },
    reserveEndTime :
    {
      type : Date,
      label : "Reserve End Time",
    },
    reserveDuration :
    {
      type : Time,
      label : "Reserve Duration",
    },
    typeOfService :
    {
      serviceId :
      {
        type : String,
        label : "Service Id",
      },
      approximateteTime :
      {
        type : Time,                //Here we take approximate time
        label : "Approximate Time",
      },
      freeCost :
      {
        type : Integer,
        label : "Free Cost",
        min : 1000,                 // min cost is 1000 toman
      },
      insuranceType :
      {
        insuranceName :
        {
          type : String,
          label : "Insurance Name",
        },
        insuranceCost :
        {
          type : Integer,
          label : "Insurance Cost",
          min : 1000,              // min cost is 1000 toman
        },
        insuranceDiscount :
        {
          type : Integer,
          label : "Insurance Discount",
          min : 0,
          max : 100,
        },
        insurancePaymentType :
        {
          type : String,
          label : "Insurance Payment Type",
          allowedValues : ["Cash"],
        },
      },
    },
  }
);
