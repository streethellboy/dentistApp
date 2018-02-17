import SimpleSchema from 'simpl-schema';

//Creating the listOfServices schema

export const ListOfServicesSchema = new SimpleSchema(
  {
    serviceList :
    {
      type : Array,
      label : "List Of Service",
      allowedValues : ["ویزیت", "عصب کشی"]
    },
  }
);
