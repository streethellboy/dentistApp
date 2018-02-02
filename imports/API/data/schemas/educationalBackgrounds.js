import SimpleSchema from 'simpl-schema';
import DataSchema from './dataSchema';

//Creating educationalBackground Schema

export const EducationalBackground =new SimpleSchema(
  {
    university :
    {
      type : String,
      label : "دانشگاه"

    },
    subject :
    {
      type : String,
      label : "رشته تحصیلی"
    },
    thesis :
    {
      type : String,
      label : "پایان نامه"
    },
    dateOfGraduation :
    {
      type : DataSchema,
      label : "تاریخ فارغ التحصیلی"
    } ,
    description :
    {
      type : String,
      label : "توضیحات سوابق تحصیلی"
    },
  }
)
