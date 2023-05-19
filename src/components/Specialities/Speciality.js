import {React , useEffect,useState} from 'react';
import {useParams } from 'react-router';
import axios from 'axios';
import Loader from '../images/load.gif'
import Specialist from '../cards/Specialist.js'

const Speciality = ({API_URL})=>{

/*
here id is the speciality type and url to fetch data related to the speciality
*/

const {id}=useParams();
const [data,setData]=useState();


/*
  loading define the state of page data
*/
const [loading,setLoading]=useState(true);



/*
USE THE BELOW FUNCTION IN NAVBAR COMPONENT AND LOA
USE THE BELOW FUNCTION IN NAVBAR COMPONENT AND LOAD IT AND SHOW LOADING BAR WHILE USING FETCH REQUEST 
*/

useEffect(  ()=>{
  document.title=`${id.toUpperCase()}-Cureit Health Association`;

  const FETCH_URL =`${API_URL}api/get-data/speciality-data/${id}`;
 
    const fetchData=async (API_URL)=>{
      setLoading(true)
      const res = await axios.get(FETCH_URL);
      console.log(res.data);
      setData(res.data)
    setLoading(false);
    
    }
    fetchData(API_URL);
   
},[id,API_URL])




return( 
    <section style={{
        backgroundColor: 'rgb(0,0 , 0,0.4)'    }} className="container is-centered mt-3  pb-6 ">
         <div className="container is-flex is-justify-content-center  is-centered is-size-3 has-text-white  is-underlined p-4 has-text-weight-semibold"> <div>{id.toUpperCase()}</div></div>
            {loading && <div className="is-flex is-justify-content-center is-align-items-center" style={{height:'100vh'}}> <img className="image" alt="Loading..." src={Loader}  style={{height:"12rem",width:"12rem" ,fontSize:"3rem",}}/></div>}


            
         {  !loading &&<div>    
          <div className="hero ">
                  <div className=" has-text-white mt-2 mb-3 pr-6 pl-6 has-text-centered ">
                    {data.description}
                  <hr/>
                  </div>
                     
                  <div className="columns my-4 mx-4">
                      <div className="column is-two-third is-flex is-flex-direction-column ">
                      <div className="subtitle has-text-centered has-text-white is-underlined"> Symptoms: </div>
                         {data.symptoms.map((symptom, index) => (
                <div key={index} className=" mx-3 my-1 has-text-white is-flex is-flex-direction-row">
                                <div className="icon ">
                                  <i className="fa fa-plus"></i>
                                </div>
                                <div className="has-text-white">
                                  {symptom}
                                </div>

                              </div>             ))}
                          
                      </div>
                      <div className="column is-one-third">
                        <div className="image mx-3 ">
                          <img src={data.imageUrl} alt="NO DATA"/>
                        </div>
                        </div>

                  </div>


  <div className="columns myt-5 myb-3 mx-3">
                     
                      <div className="column is-one-third mx-3">
                        <div className="image mx-3 my-3">
                          <img src={data.imageUrl} alt="NO DATA"/>
                         </div>
                        </div>

                <div className="column is-two-third is-flex is-flex-direction-column ">
                      <div className="subtitle has-text-centered has-text-white is-underlined"> Care Tips:</div>
                              {data.careTips.map((tip, index) => (
            <div key={index} className=" mx-2 my-1 has-text-white is-flex is-flex-direction-row">
                                <div className="icon ">
                                  <i className="fa fa-plus"></i>
                                </div>
                                <div className="has-text-white">
                                  {tip}
                                </div>

                              </div>        ))}
                      </div>
                  </div>
<hr className="mx-6 "/>

                      <div className="subtitle has-text-centered has-text-white my-3 is-underlined"> Patient's Review
                      </div>

                    <div className="container px-3  columns">
                     <div className="column  mx-4 is-two-third is-flex is-flex-direction-column ">
                      
                        <div className="has-text-white  is-size-5 has-text-weight-bold mx-3 my-2">
                          {data.patientsReview.title}
                        </div>
                         <div className="has-text-white mx-3 px-3 my-2">
                          {data.patientsReview.description}
                        </div>
                        
                    </div>

                         <div className="column image is-one-third">
                          <iframe style={{width:"25vw",height:"35vh" }} className=''  src={data.patientsReview.videourl} title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>

                        </div>
                    <hr/>
                    </div>
<hr className="mx-6 "/>


                      <div className="subtitle has-text-centered has-text-white is-underlined my-5"> Our Top Doctors </div>

                <div className="hero-body myt-3  pt-1 pb-0 is-flex is-justify-content-space-evenly is-flex-wrap-wrap ">

                           {data.topDoctors.map((item, index) => (
                    <Specialist key={index} name={item.name} gender={item.gender} />
              ))}

                          

                        </div>
<div className=" has-text-white has-text-centered has-text-weight-bold my-6 is-size-3 ">
                    Come Join Us in the Betterment of Human Life.
                  
                  </div>
                  



</div>

</div>}

  </section>
  )
}

export default Speciality;
