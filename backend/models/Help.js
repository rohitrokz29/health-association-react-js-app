const {mongoose,Schema} =require("mongoose");

const HelpSchema=new Schema({
	name:{
		type:String,
		require:true
	},
	email:{
		type:String,
		require:true
	},
	phone:{
		type:String,
		require:true
	},
	type:{
		type:String,
		require:true
	}
},
{
	collection:"help"
});
const Help=new mongoose.model('help',HelpSchema);
module.exports=Help;