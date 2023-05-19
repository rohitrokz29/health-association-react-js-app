const express=require('express');

const Subscribtions=require('../models/Subscribtions');
const Appointment=require('../models/Appointment') ;
const Members =require('../models/Member');
const Help=require('../models/Help');
/*
 Declaring below thr express router for post requests to put data into database named "sendRouter"
 */


const sendRouter=express.Router();

/*
 post request for adding subscription  
 */

sendRouter.post('/subscribtion',  (req,res)=>{
  const subscriber=new Subscribtions({
                    email:req.body.email,
                    phone:req.body.phone
                  });
     subscriber.save()
  .then(result=>res.status(200).json({message:"Success"}))
    .catch(err=>res.status(500).json({message:"Failed"}));

})

sendRouter.post('/appointment',(req,res)=>{
    const appointment=new Appointment({  
                name:req.body.name,
                email:req.body.email,
                phone:req.body.phone,
                symptoms:req.body.symptoms,
                income:req.body.income

            });
    appointment.save()
  .then(result=>res.status(200).json({message:"Success"}))
    .catch(err=>res.status(500).json({message:"Failed"}));
})

sendRouter.post('/joinus',(req,res)=>{
  const newMember=new Members({
      name:req.body.name,
      email:req.body.email,
      profession:req.body.profession,
      speciality:req.body.speciality,
      education:req.body.education,
      phone:req.body.phone 
  });


newMember.save()
  .then(result=>res.status(200).json({message:"Success"}))
    .catch(err=>res.status(500).json({message:"Failed"}));

})

sendRouter.post('/donate',(req,res)=>{
  const newHelp= new Help({
    name:req.body.name,
    email:req.body.email,
    phone:req.body.phone,
    type:req.body.type
  });
  newHelp.save()
  .then(result=>res.status(200).json({message:"Success"}))
    .catch(err=>res.status(500).json({message:"Failed"}));
})




module.exports=sendRouter;
