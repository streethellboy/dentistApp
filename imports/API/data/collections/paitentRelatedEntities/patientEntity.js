import {Mongo} from 'meteor/Mongo'
import Profile from './../../schemas/profileSchema'
import Date from './../../schemas/dateSchema'
import Phone from './../../schemas/PhoneSchema'

//Creating the patient Collection

export const PatientEntity = new Mongo.CollectionName('patientEntity');

let patientData =
[
  patientprofile : Profile,
  patientBirthDate : Date,
  patientCellNumber : Phone,
]
