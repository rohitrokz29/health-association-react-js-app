const {mongoose,Schema}=require("mongoose");

const SubscribtionSchema= new Schema({
  email:{
    type:String,
    require:true
  },
  phone:{
    type:Number,
    require:true
  }

},{
  collection:'subscribtions'
});

const Subscribtions=mongoose.model('subscribtions',SubscribtionSchema);
module.exports=Subscribtions;
