const mongoose = require('mongoose');
const express=require('express');
require('dotenv').config()


//Get Database uri connection as env variable
const uri = process.env.uri;


/*
    Connecting to Database using ConnectToMongo function which always try to estab
    lish a connection on error also/
*/
const ConnectToMongo = async () => {
    mongoose.connect(uri,{
        useNewUrlParser:true,
        // useCreateIndex:true,
        useunifiedTopology:true,
        // useFindAndModify:false
    }).then(()=>{
        console.log("Connected to Database")
    }).catch((err)=>{
        console.log('trying to reconnect');
        ConnectToMongo();
    });

}

module.exports = {
    ConnectToMongo
}