import SimpleSchema from 'simpl-schema';
import {PatientProfileSchema} from './PatientProfileSchema'

//Creating patientEntity schema

export const PatientEntitySchema = new SimpleSchema(
  {
    patientProfile :
    {
      type : PatientProfileSchema
    }
  }
);
