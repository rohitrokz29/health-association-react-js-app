const express =require('express');
const Excellence = require('../models/Excellence');
const Specialist =require('../models/Specialist');
const SpecialityModel =require('../models/speciality.model');
const Centers=require("../models/Centers");

const mongoose=require("mongoose");
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
        res.status(200).json((JSON.stringify({specialistData,excellenceData})));
    }
    catch{
        res.status(404).json(JSON.stringify({message:"Not able to fetch"}));
    }
});



/*
 get request to get data of specialities from database  and send it as json 
 successfully sent-200 code
 failed send - 404 code
 */

getRouter.get('/speciality-data/:speciality', (req,res)=>{
  SpecialityModel.findOne({"speciality":req.params.speciality})
  .then(data=>res.status(200).json(JSON.stringify(data)))    
  .catch(e=>res.status(404).json(JSON.stringify({message:"Not able to fetch"})));

});


getRouter.get('/get-location',async (req,res)=>{
        Centers.
        find().
        then(data=>res.status(202).json(JSON.stringify(data))).
        catch(err=>res.status(404).json(JSON.stringify({message:"cannot find",data:err}))); 

});





module.exports = getRouter;
