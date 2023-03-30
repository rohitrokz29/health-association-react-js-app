const {mongoose,Schema}=require('mongoose');

const excelSchema=new Schema({
    speciality:String,
    imageUrl:String,
    description:String,
    url:String
},{
    collection:'excellence'
});

const Excellence=mongoose.model('excellence',excelSchema);
module.exports=Excellence;
