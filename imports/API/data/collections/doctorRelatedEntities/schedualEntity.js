import {Mongo} from 'meteor/Mongo';
import SchedualEntitySchema from './../../schemas/doctorRelatedSchemas/SchedualRelatedSchemas/schedualEntitySchema';

export const SchedualEntity = Mongo.Collection("schedualEntity");

SchedualEntity.attachSchema(SchedualEntitySchema);      //Assigning SchedualEntitySchema
