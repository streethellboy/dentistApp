import {Mongo} from 'meteor/mongo';
import {DoctorEntitySchema} from './../../schemas/doctorRelatedSchemas/DoctorEntitySchema';

export const DoctorEntity = new Mongo.Collection('doctorEntity'); //doctorEntity is created

DoctorEntity.attachSchema(DoctorEntitySchema);      //Assigning the DoctorEntitySchema
