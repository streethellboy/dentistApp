import SimpleSchema from 'simpl-schema';
import Address from './addressSchema';

//Creating resume Schema

export const Resume = new SimpleSchema(
  {
    activityTitle :
    {
      type : String,
      label : "عنوان فعالیت"
    },
    occupation :
    {
      type : String,
      label : "سمت",
      optional : true,
    },
    typeOfActivity :
    {
      type : String,
      label : "نوع فعالیت"
      allowedValues : ["رسمی", "قراردادی", "پیمانی"],
      optional : true,
    },
    activityAddress :
    {
      type : Address,
      label : "آدرس محل فعالیت",
      optional : true,
    },
    activityDuration :
    {
      type : Integer,
      label : "مدت فعالیت"
      min : 1,
      max : 30,
      optional : true,
      //Activity duration must be entered in year
    },

  }
)
