import SimpleSchema from 'simpl-schema';
import {AddressSchema} from './../clinicRelatedSchemas/AddressSchema';
import {DurationDate} from './DurationDate'

//Creating resume Schema

export const ResumeSchema = new SimpleSchema(
  {
    activityTitle :
    {
      type : String,
      label : "activity title",
      required : true
    },
    occupation :
    {
      type : String,
      optional : true
    },
    typeOfActivity :
    {
      type : String,
      allowedValues : ["Official" ,"Contract"],
      optional : true
    },
    activityAddress :
    {
      type : AddressSchema,
      optional : true
    },
    activityDuration :
    {
      type : DurationDate,
      optional : true
    },

  }
);
