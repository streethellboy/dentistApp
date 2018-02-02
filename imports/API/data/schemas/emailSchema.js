import SimpleSchema from 'simpl-schema';

//Creating the email Schema

export const Email = new SimpleSchema(
  {
    type : String,
    label : "ایمیل",
    max : 100,                        //only less than 100 character allowed
    regEx: SimpleSchema.RegEx.Email,  //this test if entered string is an email
  },
)
