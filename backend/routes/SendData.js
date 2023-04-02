const express=require('express');

const Subscribtions=require('../models/Subscribtions');

/*
 Declaring below thr express router for post requests to put data into database named "sendRouter"
 */

const sendRouter=express.Router();

/*
 post request for adding subscription  
 */

sendRouter.post('/subscribtion',(req,res)=>{
  const subscriber={name:req.body.name,
                    phone:req.body.phone};
  try{
    const result = subscriber.save();
    console.log(result);
    res.status(200).json(JSON.stringify({message:"Subscribtion Successful",data:result}));
  }
  catch(e){
    res.status(404).json(JSON.stringify({message:"Cannot add subscribtions"}))
  }
})




module.exports=sendRouter;
