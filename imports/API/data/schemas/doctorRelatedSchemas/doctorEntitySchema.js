import SimpleSchema from 'simple-schema';
import DoctorProfile from './doctorProfileSchema';
import FieldOfExpertiseAndSpacialty from './fieldOfExpertiseAndSpecialtySchema';
import EducationalBackground from './educationalBackgroundsSchema';
import Resume from './resumeSchema';
import Gallery from './gallerySchema';


//Crteating the doctorEntity schema


export const DoctorEntitySchema = new SimpleSchema(
  {
    doctorProfile : DoctorProfile,

    doctorFieldOfExpertiseAndSpecialty : FieldOfExpertiseAndSpacialty,

    doctorEducationalBackgreounds : EducationalBackground,

    listOfServices_Id :              //Here we assign an id from list of service Entity
    {
      type : String,
      label : "List Of Services Id",
    },

    schedual_Id :                   //Here we assign an id from schedual entity
    {
      type : String,
      label : "Schedual _Id"
    },

    resume :
    {
      type : Resume,
      optional : true,
    },

    gallery :
    {
      type : Gallery,
      optional : true,
    },
  }
);
