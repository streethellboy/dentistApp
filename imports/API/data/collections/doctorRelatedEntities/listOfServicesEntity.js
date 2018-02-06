import {Mongo} from 'meteor/Mongo';
import ListOfServices from './../../schemas/doctorRelatedSchemas/listOfServicesSchema'


export const ListOfServicesEntity = new Mongo.Collection('listOfServicesEntity'); //ListOfServicesEntity is created

ListOfServicesEntity.attachSchema(ListOfServices);      //Assigning the list of services Schema
