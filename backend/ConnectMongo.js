const mongoose = require('mongoose');
const express=require('express');
require('dotenv').config()


//Get Database uri connection as env variable


/*
    Connecting to Database using ConnectToMongo function which always try to estab
    lish a connection on error also/
*/
const ConnectToMongo = async (MONGO_URI) => {
    mongoose.connect(MONGO_URI,{
      dbName: `health-association`,
            useNewUrlParser:true,
        // useCreateIndex:true,
        useunifiedTopology:true,
        // useFindAndModify:false
    }).then(()=>console.log("Connected to DB")).catch((err)=>{ConnectToMongo(MONGO_URI)});
}

module.exports = {
    ConnectToMongo
}
