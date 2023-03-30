const express = require('express');
const cors =require('cors');
const { urlencoded } = require('express');
const {  ConnectToMongo } = require('./ConnectMongo');
const app =express();

require('dotenv').config();




const PORT=process.env.PORT || 5000;

app.use(cors())
app.use(express.urlencoded( {extended:false}));
app.use(express.json());

ConnectToMongo();

//declaring methods


app.use('/api/get-data',require('./routes/GetData'));
app.use('api/sendData',require('./routes/SendData'));

app.listen(PORT,(suc,err)=>{

    if(err){
        console.log(`\nError: ${err}`);
    }
    else{
        console.log(`\nServer running at http://localhost:${PORT}\n`);
    }
});
