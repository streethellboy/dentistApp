import SimpleSchema from 'simpl-schema';
import {TimeSchema} from './TimeSchema';


export const TypeOfServiceSchema = new SimpleSchema(
  {
    serviceName :
    {
      type : String,
      label : "service name",
      allowedValues : ["ویزیت", "عصب کشی"],
      required : true

    },
    approximateteTime :
    {
      type : TimeSchema,                //Here we take approximate time
      label : "approximate time",
      required : true
    },
    freeCost :
    {
      type : SimpleSchema.Integer,
      label : "Free Cost",
      min : 1000                 // min cost is 1000 toman
      required : true
    }
  }
);
