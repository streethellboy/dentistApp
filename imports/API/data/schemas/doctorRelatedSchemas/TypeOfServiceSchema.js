import SimpleSchema from 'simpl-schema';
import {TimeSchema} from './TimeSchema';


export const TypeOfServiceSchema = new SimpleSchema(
  {
    serviceName :
    {
      type : String,
      allowedValues : ["ویزیت", "عصب کشی"]

    },
    approximateteTime :
    {
      type : TimeSchema                //Here we take approximate time
    },
    freeCost :
    {
      type : SimpleSchema.Integer,
      label : "Free Cost",
      min : 1000                 // min cost is 1000 toman
    }
  }
);
