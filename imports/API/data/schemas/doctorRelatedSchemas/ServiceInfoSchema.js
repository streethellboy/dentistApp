import SimpleSchema from 'simpl-schema';
import {TypeOfServiceSchema} from './TypeOfServiceSchema';
import {InsuranceTypeSchema} from './InsuranceTypeSchema';

export const ServiceInfoSchema = new SimpleSchema(
  {
    typeOfService :
    {
      type : TypeOfServiceSchema
    },
    insuranceType :
    {
      type : InsuranceTypeSchema
    }
  }
);
