import SimpleSchema from 'simpl-schema';
import {TimeSchema} from './TimeSchema';
import {TypeOfServiceSchema} from './TypeOfServiceSchema';
import {InsuranceTypeSchema} from './InsuranceTypeSchema';
import {ServiceInfoSchema} from './ServiceInfoSchema';

//Creating the reserveList Schem

export const ReserveListSchema = new SimpleSchema(
  {
    patientId :
    {
      type : String,
      label : "patient Id",
      required : true
    },
    clinicId :
    {
      type : String,
      label : "clinic Id",
      required : true
    },
    reserveDate :
    {
      type : Date,
      label : "reserve date",
      min : new Date(1930, 0, 1),
      max : new Date(),
      required : true
    },
    reserveStartTime :
    {
      type : Date,
      label : "reserve start time",
      required : true
    },
    reserveEndTime :
    {
      type : Date
      label : "reserve end time",
      required : true
    },
    serviceInfo :
    {
    type : ServiceInfoSchema,
    label : "service Information",
    required : true
    },
  }
);
