import {Mongo} from 'meteor/mongo';
import ClinicEntitySchema from './../../schemas/clinicRelatedSchemas/ClinicEntitySchema';

//Creating clinic DoctorEntity

export const ClinicEntity = new Mongo.Collection('clinicEntity');

ClinicEntity.attachSchema(ClinicEntitySchema);      //Assigning ClinicEntitySchema
