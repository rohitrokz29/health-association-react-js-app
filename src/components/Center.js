import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import Loader from './images/load.gif';
import axios from "axios";

const Center =()=>{
const [loading,SetLoading]=useState(true);



const centers=[
  {
    location:"Mumbai",
    place:"Dhule"
  },
  {
    location:"Delhi",
    place:"NCR"
  }
];

  return (
      <section style={{
                  backgroundColor: 'rgb(0,0 , 0,0.1)'
              }} className="container is-centered mt-6 pb-6 ">

                  <div className="container subtitle has-text-centered is-centered mt- mb-5 pb-3 ">
                        <strong className='has-text-black is-size-3 is-underlined'>Group  </strong>
                        <strong className='has-text-black is-size-3 is-underlined'>Health </strong>
                        <strong className='has-text-black  is-size-3 is-underlined'>Centers</strong>
                    </div>
 {loading && <div className="is-flex is-justify-content-center is-align-items-center" style={{height:'100vh'}}>
            <img className="image" alt="Loading..." src={Loader}  style={{height:"12rem",width:"12rem" ,fontSize:"3rem",}}/>
            </div>}
                    {
                        
                      centers.map((ele)=>{
                        return(

                            <div key={ele.place} to={ele.url} className="container location-box box is-hoverable is-size-4 has-text-centered is-flex is-flex-direction-row is-align-items-center is-justify-content-center">
                                  <div className="has-text-grey-darker		has-text-weight-semibold	">
                                    {ele.location}
                                  </div>
                                  <div className="icon is-size-1 has-text-dark m-4">
                                  <i className="fa fa-angle-right"></i>
                                  <i className="fa fa-angle-right"></i>
                                </div>

                                <div className="has-text-grey-darker has-text-weight-semibold	">
                                  {ele.place}
                                </div>
                          </div>
                        )
                      })
                    }

</section>
  )
}

export default Center;
