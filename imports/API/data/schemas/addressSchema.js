import SimpleSchema from 'simpl-schema';
import Coordinate from './coordinate'

//Creating address Schema

export const Address = new SimpleSchema(
  {
    point :
    {
      type : Coordinate,
      label : "نقطه روی نقشه",
      optional : true,
    },
    state :
    {
      type : String,
      label : "استان",
      allowedValues : ["آذربایجان شرقی","تهران"],
    },
    city :
    {
      type : String,
      label : "شهر",
      allowedValues : ["تبریز","تهران"],
    },
    street :
    {
      type : String,
      label : "خیابان",
      optional : true,
    },
    alley :
    {
      type : String,
      label : "کوچه",
      optional : true,
    },
    tag :
    {
      type : Number,
      label : "پلاک",
      optional : true,
    },
    floor :
    {
      type : Number,
      label : "طبقه",
      optional : true,
    },

  }
)
