const {mongoose,Schema}=require('mongoose');



const MemberSchema=new Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    profession:{
        type:String,
        require:true
    },
    speciality:{
        type:String,
        require:true
    },
    education:{
        type:String
    },
        phone:{
        type:String,
        require:true
    }
},{
    collection:'members'
});

const Members=mongoose.model('newMembers',MemberSchema);
module.exports=Members;

