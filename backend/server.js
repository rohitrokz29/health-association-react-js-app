const express = require('express');
const cors =require('cors');
const { urlencoded } = require('express');
const {  ConnectToMongo } = require('./ConnectMongo');
const app =express();

/*
 Using dotenv to some sensitive information safe like News Api , MongoDB Atlas databse uri
 */

require('dotenv').config();

/*
  PORT represent the port on which server is running
  Mongouri represent the uri of MongoDB atlas Database
 */

const PORT=process.env.PORT || 5000;
const MONGO_URI= process.env.MONGO_URI ;

/*
- Since we are using React.js and express cors helps to make requests for this external backend  server
- urlencoded is being used to parse the incoming requests
 */

app.use(cors())
app.use(express.urlencoded( {extended:false}));
app.use(express.json());


/*
 ConnectMongo Function takes the MongoDB uri and conects it to the MongoDB Database
 */

ConnectToMongo(MONGO_URI);

/*
 * Declaring Methods below
 */

app.use('/api/get-data',require('./routes/GetData'));
app.use('api/sendData',require('./routes/SendData'));

/*
 Running the server on port=PORT 
 */

app.listen(PORT,(suc,err)=>{

    if(err){
        console.log(`\nError: ${err}`);
    }
    else{
        console.log(`\nServer running at http://localhost:${PORT}\n`);
    }
});
