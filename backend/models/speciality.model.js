const {mongoose,Schema} = require('mongoose');

const specialitySchema = new Schema({
  speciality:String,
  description:String,
  imageUrl:String,
  symptoms:[{type:String}],
  careTips :[{type:String}],

  patientsReview:  {title:String,
    videourl:String,
      description:String}

},{collection:'speciality'});

const SpecialityModel = mongoose.model('speciality',specialitySchema);

module.exports=SpecialityModel;


