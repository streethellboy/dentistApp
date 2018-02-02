import {Mongo} from 'meteor/Mongo'
import Naming from './../../schemas/namingSchema'
import Address from './../../schemas/addressSchema'
import Phone from './../../schemas/phoneSchema'

//Creating clinic DoctorEntity

export const ClinicEntity = new Mongo.Collection('clinicEntity');

let clinicEntity =
[
  clinicName : Naming,
  clinicAddress : Address,
  clinicPhoneNumber : Phone,
  clinicListOfDoctors :
  [
    {
    doctor_Id : "",
    },
  ],
]
