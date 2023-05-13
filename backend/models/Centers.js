const {mongoose,Schema}=require("mongoose");

const centerSchema=new Schema({
	_id:String,
	center:String,
	area:String,
	url:String
});

const Centers=new mongoose.model("centers",centerSchema);
module.exports=Centers;