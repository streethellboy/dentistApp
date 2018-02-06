import SimpleSchema from 'simple-schema';
import PatientProfile from './patientProfileSchema'

//Creating patientEntity schema

export const PatientEntitySchema = new SimpleSchema(
  {
    patientProfile : PatientProfile,
  }
);
