import {Mongo} from 'meteor/Mongo';
import DoctorEntitySchema from './../../schemas/doctorRelatedSchemas/doctorEntitySchema';

export const DoctorEntity = new Mongo.Collection('doctorEntity'); //doctorEntity is created

DoctorEntity.attachSchema(DoctorEntitySchema);      //Assigning the DoctorEntitySchema
