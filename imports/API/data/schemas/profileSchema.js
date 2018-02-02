import SimpleSchema from 'simpl-schema';
import Naming from './namingSchema';
import Date from './dateSchema';
import Phone from './PhoneSchema';
import Email from './emailSchema';


//Creating the profileSchema

export const Profile = new SimpleSchema(
  {
    fullName : Naming,
    birthDate : Date,

    age :
    {
      type : Integer,     //only decimal no float
      label : "سن"
      min : 2,            //Children above 2 years
      max : 90,           //Oldmen under 90
      optional : true,    //this field can be ignored not required
    },
    marritalStatus :
    {
      type : String,
      allowedValues : ["single", "married", "مجرد" ,"متاهل"],
    },
    phoneNumber : Phone,
    emailAddress : Email,

  }
)
