import SimpleSchema from 'simple-schema';

//Creating the listOfServices schema

export const ListOfServices = new SimpleSchema(
  {
    serviceList :
    {
      type : String,
      label : "List Of Service",
      allowedValues : ["ویزیت", "عصب کشی"],
    },
  }
);
