import React from "react";
import axios from "axios";

const baseUrl=process.env.baseUrl;

const getData =async  (path)=>{
    return await axios.get(baseUrl+path).then((res)=>{
        console.log(res);
        return res.data;
    })
        
}


export default {getData};