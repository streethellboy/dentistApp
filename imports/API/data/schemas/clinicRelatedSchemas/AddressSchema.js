import SimpleSchema from 'simpl-schema';
import Coordinate from './Coordinate';

//Creating address Schema

export const AddressSchema = new SimpleSchema(
  {
    point :
    {
      type : Coordinate,
      label : "Coordinate On The Map",
      optional : true,
    },
    state :
    {
      type : String,
      label : "State",
      allowedValues : ["آذربایجان شرقی","تهران"],
      required : true
    },
    city :
    {
      type : String,
      label : "City",
      allowedValues : ["تبریز","تهران"],
      required : true
    },
    street :
    {
      type : String,
      label : "Street",
      required : true
    },
    alley :
    {
      type : String,
      label : "Alley",
      optional : true
    },
    tag :
    {
      type : Number,
      label : "Tag",
      optional : true
    },
    floor :
    {
      type : Number,
      label :"Floor",
      optional : true
    }

  }
);
