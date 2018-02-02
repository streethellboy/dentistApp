import SimpleSchema from 'simpl-schema';

//Creating coordinate Schema

export const Coordinate = new SimpleSchema(
  {
    x :
    {
      type : Number,
      min : 0,
      max : 180,
      label : "طول جغرافیایی",
    },
    y :
    {
      type : Number,
      min : 0,
      max : 180,
      label : "عرض جغرافیایی",
    },
    z :
    {
      type : Number,
      min : 0,
      max : 90,
      label : "ارتفاع جغرافیایی",
      optional : true,
    },
  }
)
