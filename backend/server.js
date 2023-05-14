const express = require('express');
const cors =require('cors');
const { urlencoded } = require('express');
const mongoose = require('mongoose');

const app =express();

/*
 Using dotenv to some sensitive information safe like News Api , MongoDB Atlas databse uri
 */

require('dotenv').config();
var bodyParser = require('body-parser');
app.use(bodyParser.json({limit: "50mb"}));
app.use(bodyParser.urlencoded({limit: "50mb", extended: true, parameterLimit:50000}))
/*
  PORT represent the port on which server is running
  Mongouri represent the uri of MongoDB atlas Database
 */

const PORT=process.env.PORT||5000 ;

// const MONGO_URI= `mongodb+srv://${process.env.MONGO_DB_USER_NAME}:${process.env.MONGO_DB_USER_PSSWORD}@${process.env.MONGO_DB_CLUSTER}/?retryWrites=true&w=majority`
const MONGO_URI="mongodb+srv://kharcherohit2908:rohti%40123457%265432@cluster0.8ekb7mk.mongodb.net/?retryWrites=true&w=majority";
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


/*
 * Declaring Methods below
 */

app.use('/api/get-data',require('./routes/GetData'));
app.use('/api/sendData',require('./routes/SendData'));

/*
 Running the server on port=PORT 
 */
// async (MONGO_URI) => {
    mongoose.connect(MONGO_URI,{
      dbName: `health-association`,
            useNewUrlParser:true,
        // useCreateIndex:true,
        useunifiedTopology:true,
        // useFindAndModify:false
    }).then(()=>{
        console.log("Connected to DB")
        
        app.listen(PORT,(suc,err)=>{

        if(err){
         console.log(`\nError: ${err}`);
        }
        else{
            console.log(`\nServer running at http://localhost:${PORT}\n`);
        }
    });

    })
    // .catch((err)=>{ConnectToMongo(MONGO_URI)});
// }



