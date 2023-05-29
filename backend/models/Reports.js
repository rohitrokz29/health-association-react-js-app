const {mongoose,Schema}=require("mongoose");

const ReportsSchema= new Schema({
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
  patient_id:{
    type:String
  }

},{
  collection:'reports'
});


const Reports =mongoose.model('reports',ReportsSchema);
module.exports=Reports;

