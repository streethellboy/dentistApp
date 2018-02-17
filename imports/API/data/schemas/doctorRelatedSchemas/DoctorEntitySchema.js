import SimpleSchema from 'simpl-schema';
import {DoctorProfile} from './DoctorProfileSchema';
import {FieldOfExpertiseAndSpacialty} from './FieldOfExpertiseAndSpecialtySchema';
import {EducationalBackground} from './EducationalBackgroundsSchema';
import {ResumeSchema} from './ResumeSchema';
import {GallerySchema} from './GallerySchema';
import {ReserveListSchema} from './ReserveListSchema';
import {ListOfServicesSchema} from './ListOfServicesSchema';
import {ClinicTimesSchema} from './ClinicTimesSchema';


//Crteating the doctorEntity schema


export const DoctorEntitySchema = new SimpleSchema(
  {
    doctorProfile :
    {
      type : DoctorProfile
    },
    doctorFieldOfExpertiseAndSpecialty :
    {
      type : FieldOfExpertiseAndSpacialty
    },

    doctorEducationalBackgreounds :
    {
      type : EducationalBackground
    },
    listOfServices :              //Here we assign an id from list of service Entity
    {
      type : ListOfServicesSchema
    },

    schedualList :                   //Here we assign an id from schedual entity
    {
      type : ReserveListSchema
    },
    clinicTimes :
    {
      type : ClinicTimesSchema
    },

    resume :
    {
      type : ResumeSchema,
      optional : true
    },

    gallery :
    {
      type : GallerySchema,
      optional : true
    }
  }
);
