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
      type : String
    },
    clinicId :
    {
      type : String
    },
    reserveDate :
    {
      type : Date
    },
    reserveStartTime :
    {
      type : Date
    },
    reserveEndTime :
    {
      type : Date
    },
    serviceInfo :
    {
    type : ServiceInfoSchema
    },
  }
);
