const {mongoose,Schema}=require("mongoose");

const AppointmentSchema= new Schema({
 name:{
    type:String,
    require:true
 },
 phone:{
  type:String,
  require:true
 },
  email:{
    type:String,
    require:true
  },
  symptoms:{
    type:String,
    require:true
  },
  income:{
    type:String,
    require:true
  }

},{
  collection:'appointments'
});


const Appointment =mongoose.model('appontments',AppointmentSchema);
module.exports=Appointment;

