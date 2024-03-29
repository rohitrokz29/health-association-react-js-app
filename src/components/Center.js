import React,{useState,useEffect} from 'react';
import Location from './cards/Location';
import Loader from './images/load.gif';
import axios from "axios";

const Center =()=>{
    
    /*
    -- variable loading  is being used to have a look wheather data is fetched or not from axios get request which is set true                     for default and set to false when data is fetched
    -- variable centers is being used to save the location data of centers fetched through axios get request 
     */


const [loading,setLoading]=useState(true);
const [centers, setCenters] = useState([]);

useEffect( () => {
            document.title="Centers - Curiet Health Association";

        const centerData= async ()=>{
            const result= await axios.get(`${process.env.REACT_APP_API}api/get-data/get-location`);
           console.log(result.data);

            setCenters(JSON.parse(result.data));
        } 

            centerData();

    return () => {    

            setLoading(false);
    };
}, [setLoading,setCenters])
// const centers=[{location:"Mumbai",place:"Dhule",url:"/posi/all"},{location:"Mumbai",place:"Dhule",url:"/posi/all"},{location:"Mumbai",place:"Dhule",url:"/posi/all"},{location:"Mumbai",place:"Dhule",url:"/posi/all"},{location:"Delhi",place:"NCR",url:"/posi/all"}];

  return (
      <section style={{
                  backgroundColor: 'rgb(0,0 , 0,0.15)'
              }} className="container is-centered mt-6 pb-6 ">

                  <div className="container subtitle has-text-centered is-centered mt- mb-5 pb-3 ">
                        <strong className='has-text-black is-size-3 is-underlined'>Group  </strong>
                        <strong className='has-text-black is-size-3 is-underlined'>Health </strong>
                        <strong className='has-text-black  is-size-3 is-underlined'>Centers</strong>
                    </div>
        {loading && <div className="is-flex is-justify-content-center is-align-items-center m-0 p-0" style={{height:'70vh'}}>
            <img className="image" alt="Loading..." src={Loader}  style={{height:"12rem",width:"12rem" ,fontSize:"3rem",}}/>
            </div>}
                    {
                        
                /*
                 Location Component shows the card of location- data of location is fetched from axios get request from database 
                 --which on click are directed to a url to see the location on google maps
                */
                        
                        
               !loading && centers.map((ele)=>{
                return(

                    <Location url={ele.url} center={ele.center} area={ele.area} key={ele.area} />
                        
                        )
                      })
                    }

</section>
  )
}

export default Center;
