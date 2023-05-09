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
        useNewUrlParser:true,
        // useCreateIndex:true,
        useunifiedTopology:true,
        // useFindAndModify:false
    })
    .then(()=>{
        console.log("Connected to Database")
    })
    .catch((err)=>{
        console.log('trying to reconnect');
        ConnectToMongo(MONGO_URI);
        return {message:"CANNOT FETCH"};
    });

}

module.exports = {
    ConnectToMongo
}
