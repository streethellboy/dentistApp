import SimpleSchema from 'simpl-schema';
import {TypeOfServiceSchema} from './TypeOfServiceSchema';
import {InsuranceTypeSchema} from './InsuranceTypeSchema';

export const ServiceInfoSchema = new SimpleSchema(
  {
    typeOfService :
    {
      type : TypeOfServiceSchema,
      label : "type of service",
      required : true
    },
    insuranceType :
    {
      type : InsuranceTypeSchema,
      label : "insurance type",
      required : true
    }
  }
);
