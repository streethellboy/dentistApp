import {Mongo} from 'meteor/Mongo';
import PatientEntitySchema from './../../schemas/patientRelatedSchemas/patientEntitySchema';
//Creating the patient Collection

export const PatientEntity = new Mongo.CollectionName('patientEntity');

PatientEntity.attachSchema(PatientEntitySchema);      //Assigning PatientEntitySchema
