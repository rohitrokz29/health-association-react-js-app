import {React , useEffect,useState} from 'react';
import {useLocation} from 'react-router-dom';
import {useParams } from 'react-router';
import axios from 'axios';
import Loader from '../images/load.gif'
import Specialist from '../cards/Specialist.js'

const Speciality = ()=>{



const [data,setData]=useState([]);


/*
  loading define the state of page data
*/
const [loading,setLoading]=useState(true);

/*
here id is the speciality type and url to fetch data related to the speciality
*/
const {id}=useParams();
const url = `http://localhost:5000/api/get-data/speciality-data/${id}`;

useEffect(()=>{
  const specialityData = async (url) => {
         try { setLoading(true);
             console.log(url);
             const response = await axios.get(url);
             console.log(response);
             setData(response.data);

             setLoading(false);

         }
         catch (err) {
             console.log(err);

             specialityData(url);
         }
     }
      specialityData(url);
},[url])




return(
    <section style={{
        backgroundColor: 'rgb(0,0 , 0,0.4)'    }} className="container is-centered mt-3  pb-6 ">
            {loading && <div className="is-flex is-justify-content-center is-align-items-center" style={{height:'100vh'}}> <img className="image" alt="Loading..." src={Loader}  style={{height:"12rem",width:"12rem" ,fontSize:"3rem",}}/></div>}

{        !loading &&    <div className="container is-flex is-justify-content-center  is-centered is-size-3 has-text-white  is-underlined p-4 has-text-weight-semibold"> <div>{data.speciality.toUpperCase()}</div></div>
}
            { !loading && <div className="hero ">
                  <div className=" has-text-white mt-2 mb-3 pr-6 pl-6 has-text-centered ">
                  {data.description}
                  </div>


                      <div className="middle mt-6 ml-4 is-flex is-flex-direction-row ">
                          <div className="first">
                              <div className="symp">
                                  <span className="subtitle has-text-white is-underlined ">
                                  Symptoms:
                                  </span>
                                    <div className="subtitle list mt-3">
                                        {
                                          data.symptoms.map((ele,index)=>{
                                        return (
                                            <div key={index} className="list-item is-flex is-flex-direction-row mt-1">
                                              <span className="list-item-image">
                                                <figure className="image">
                                                  &nbsp; &nbsp;&nbsp; &nbsp;  <i className="fa fa-plus has-text-white"/>
                                                  </figure>
                                              </span>
                                              <span className="list-item-content is-size-6 has-text-white">
                                                &nbsp; &nbsp;{ele}
                                              </span>
                                            </div>
                                          )
                                          })
                                        }
                                    </div>
                              </div>
                              <div className="care mt-5">
                              <span className="subtitle has-text-white is-underlined  ">
                              Care During   Allergy :
                              </span>
                                <div className="subtitle list mt-3">
                                    {
                                      data.careTips.map((ele,index)=>{
                                    return (
                                        <div key={index} className="list-item is-flex is-flex-direction-row  mt-1">
                                          <span className="list-item-image">
                                            <figure className="image">
                                              &nbsp; &nbsp;&nbsp; &nbsp;  <i className="fa fa-plus has-text-white"/>
                                              </figure>
                                          </span>
                                          <span className="list-item-content is-size-6 has-text-white">
                                            &nbsp; &nbsp;{ele}
                                          </span>
                                        </div>
                                      )
                                      })
                                    }
                                    </div>
                              </div>


                          </div>

                            <div className="second mt-6 pt-4 ml-5">
                                <figure className="image">
                                    <img src={data.imageUrl} className="image" style={{width:"70vh"}}/>
                                </figure>
                            </div>

                      </div>

                        <div className="patient-review hero is-flex is-justify-content-space-evenly is-flex-wrap-wrap ">
                              <div className="vidoe patient-video p-5 mt-5 ml-3">
                                <iframe style={{width:"30vw",height:"40vh",borderRadius:'2rem' }}  src={data.patientsReview.videourl} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
                              </div>
                              <div className="text mt-6 p-6">
                                  <div className="subtitle has-text-white has-text-centered ">
                                  {data.patientsReview.title}
                                  </div>
                                  <div className="desc has-text-white  has-text-centered">
                                  {data.patientsReview.description}
                                  </div>

                              </div>
                        </div>

                        <div className="hero is-flex is-flex-wrap-wrap is-justify-content-space-evenly">
                          {data.topDoctors.map((element)=>{
                            <Specialist name={element.name} gender={element.gender} />
                          })

                          }
                        </div>


</div>}
  </section>
  )
}

export default Speciality;
