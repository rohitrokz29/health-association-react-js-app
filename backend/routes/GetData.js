const express =require('express');
const Excellence = require('../models/Excellence');
const Specialist =require('../models/Specialist');
const SpecialityModel =require('../models/speciality.model');

/*
 Declaring below thr express router for get requests to fectch data from database named "getRouter"
 */
const getRouter=express.Router();

/*
 get request to get some of the  home page data from database  and send it as json 
 successful sent - 200 code
 failed sent - 404 code
 */
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



/*
 get request to get data of specialities from database  and send it as json 
 successfully sent-200 code
 failed send - 404 code
 */

getRouter.get('/speciality-data/:speciality',async (req,res)=>{
  try{
    const data= await  SpecialityModel.findOne({"speciality":req.params.speciality});
      res.status(200).json(data);
      console.log(data);

  }
  catch(e){
    console.log(e);
  }

});

getRouter.get('/get-location',async (req,res)=>{

    try{
        const data= await 
    }
});





module.exports = getRouter;
