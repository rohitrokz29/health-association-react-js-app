const {mongoose,Schema}=require("mongoose");
const specialistSchema=new Schema({
    name:String,
    education:String,
    dob: Date
},{
    collection:'specialists'
});

const Specialist=mongoose.model("specialists",specialistSchema);
module.exports= Specialist;