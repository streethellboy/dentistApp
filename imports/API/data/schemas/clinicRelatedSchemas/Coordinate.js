import SimpleSchema from 'simpl-schema';

//Creating coordinate Schema

export const Coordinate = new SimpleSchema(
  {
    x :
    {
      type : Number,
      min : 0,
      max : 180,
      label :"longitude",
    },
    y :
    {
      type : Number,
      min : 0,
      max : 180,
      label : "latitude",
    },
    z :
    {
      type : Number,
      min : 0,
      max : 90,
      label : "altitude",
      optional : true,
    },
  }
);
