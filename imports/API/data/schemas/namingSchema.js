import SimpleSchema from 'simpl-schema';

/*
Here we define the namingSchema
*/

export const Naming = new SimpleSchema(

  {
    name :
    {
      type : String,
      label : "نام "
      min : 1,              // at least one character must be entered
      max : 50,             // can't enter more than 50 character

    },
    lastName :
    {
      type : String,
      label : " نام خانوادگی "
      min : 1,               // at least one character must be entered
      max : 100,             // can't enter more than 50 character
      optional : true,
    },
  }
)
