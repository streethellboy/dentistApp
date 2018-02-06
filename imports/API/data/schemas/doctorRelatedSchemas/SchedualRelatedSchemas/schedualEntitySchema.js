import SimpleSchema from 'simple-schema';
import ClinicTimes from './clinicTimesSchema';
import ReserveList from './reserveListSchema';

//Creating schedualEntitySchema

export const SchedualEntitySchema = new SimpleSchema(
  {
    clinicTimes : ClinicTimes,
    reserveList : ReserveList,
  }
)
