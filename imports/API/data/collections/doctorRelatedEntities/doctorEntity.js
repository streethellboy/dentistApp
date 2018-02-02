import {Mongo} from 'meteor/Mongo'
import Profile from './../../schemas/profileSchema'
import FieldOfExpertise from './../../schemas/fieldOfExpertiseAndSpecialty'
import EducationalBackground from './../../schemas/educationalBackgrounds'
import ListOfServices from './../../schemas/listOfServices'
import Resume from './../../schemas/resumeSchema'
import Gallery from './../../schemas/gallerySchema'

export const DoctorEntity = new Mongo.Collection('doctorEntity');    //doctorEntity is created

  let doctorData =
  [
    doctorProfile : Profile,
    doctorFieldOfExpertiseAndSpecialty : FieldOfExpertiseAndSpacialty,
    doctorEducationalBackgreounds : EducationalBackground,

    listOfServices : ListOfServices,
    schedualId :
    [
      {
        schedual_Id : "",
      },
    ],
    resume : Resume,
    gallery : Gallery,
  ]
