import {Mongo} from 'meteor/Mongo';
import ClinicEntitySchema from './../../schemas/clinicRelatedChemas/clinicEntitySchema';

//Creating clinic DoctorEntity

export const ClinicEntity = new Mongo.Collection('clinicEntity');

ClinicEntity.attachSchema(ClinicEntitySchema);      //Assigning ClinicEntitySchema
