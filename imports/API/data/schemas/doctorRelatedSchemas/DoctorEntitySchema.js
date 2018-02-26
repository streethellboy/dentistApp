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
      type : DoctorProfileSchema,
      label : "doctor profile",
      required : true
    },
    doctorFieldOfExpertiseAndSpecialty :
    {
      type : FieldOfExpertiseAndSpacialty,
      label : "field of expertise and spacialty",
      required : true
    },

    doctorEducationalBackgreounds :
    {
      type : EducationalBackground,
      label : "educational background",
      required : true
    },
    listOfServices :              //Here we assign an id from list of service Entity
    {
      type : Array,
      label : "List Of Service",
      allowedValues : ["ویزیت", "عصب کشی"],
      required : true
    },

    schedualList :                   //Here we assign an id from schedual entity
    {
      type : Array,
      minCount : 0,
      maxCount : 100,
      label : "reserve list",
      required : true
    },
    'schedualList.$' :
    {
      type : ReserveListSchema,
    },
    clinicTimes :
    {
      type : Array,
      label : "clinic times",
      required : true
    },
    'clinicTimes.$' :
    {
      type : ClinicTimesSchema
    },

    resume :
    {
      type : Array,
      label : "resume",
      optional : true
    },
    'resume.$' :
    {
      type : ResumeSchema
    },

    gallery :
    {
      type : Array,
      label : "gallery",
      optional : true
    },
    'gallery.$' :
    {
      type : GallerySchema
    }
  }
);
