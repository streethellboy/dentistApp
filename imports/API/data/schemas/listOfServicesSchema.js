import SimpleSchema from 'simpl-schema';

//Creating the listOfServices schema

export const ListOfServices = new SimpleSchema(
  {
    serviceList :
    {
      type : String,
      label : "لیست سرویس ها"
      allowedValues : ["ویزیت", "عصب کشی"]
    }
  }
)
