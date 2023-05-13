const {mongoose,Schema}=require("mongoose");
const specialistSchema=new Schema({
    name:String,
    education:String,
    speciality:String,
    dob: Date,
    gender:String
});

const Specialist=mongoose.model("specialists",specialistSchema);
module.exports= Specialist;

