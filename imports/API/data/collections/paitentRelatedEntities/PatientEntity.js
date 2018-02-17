import {Mongo} from 'meteor/mongo';
import PatientEntitySchema from './../../schemas/patientRelatedSchemas/PatientEntitySchema';
//Creating the patient Collection

export const PatientEntity = new Mongo.Collection('patientEntity');

PatientEntity.attachSchema(PatientEntitySchema);      //Assigning PatientEntitySchema
