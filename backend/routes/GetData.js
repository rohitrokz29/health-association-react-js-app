const express =require('express');
const Excellence = require('../models/Excellence');
const getRouter=express.Router();
const Specialist =require('../models/Specialist');
const SpecialityModel =require('../models/speciality.model')
getRouter.get('/home-data',async (req,res)=>{
    try{

        const specialistData = await Specialist.find();
        const excellenceData=await Excellence.find();
        response ={excellenceData,specialistData};
        res.status(200).json(response);
    }
    catch{
        res.status(404).json({message:"Not able to fetch"});
    }
});

getRouter.get('/speciality-data/:speciality',async (req,res)=>{
  // const {filt}=req.params.speciality;
  try{
    const data= await  SpecialityModel.findOne({"speciality":req.params.speciality});
      res.status(200).json(data);
      console.log(data);

  }
  catch(e){
    console.log(e);
  }

});





module.exports = getRouter;
