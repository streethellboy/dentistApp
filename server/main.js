import { Meteor } from 'meteor/meteor';
import {Profile} from './../imports/API/data/generalEntities/Profile.js'
Meteor.startup(() => {
  // code to run on server at startup  // code to run on server at startup
Profile.insert({
  name :'hasan',
  age : 25,
});
let profile = Profile.find().fetch();

});
