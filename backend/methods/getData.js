const { default: specialistSchema } = require("../models/Specialist");
const mongoose =require('mongoose');
const db=mongoose.connection;
const getSpecialist= async ()=>{
    const specialists_data= await specialistSchema.find 
}