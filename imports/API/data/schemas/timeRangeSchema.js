import SimpleSchema from 'simpl-schema';
import Time from './timeSchema'

//Creating timeRange Schema

export const TimeRange = new SimpleSchema(
  {
    startRange :
    {
      type : Time,
      label : "شروع بازه",
    },
    endRange :
    {
      type : Time,
      label : "پایان بازه",
    },
    duration :
    {
      type : Time,
      label : "طول بازه",
      optionl : true,
    }
  }
)
