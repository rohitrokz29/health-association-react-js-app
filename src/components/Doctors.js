import React ,{useEffect,useState} from 'react';
import axios from 'axios';
import Loader from './images/load.gif';
import Specialist from './cards/Specialist';

const Doctors = () => {

const [doctors,setDoctors]=useState("");
const [loading,setLoading]=useState(true);
useEffect(()=>{
	document.title="Doctors- Cureit Health Association";
	const fetchData =async ()=>{
			const res= await axios.get(`${process.env.REACT_APP_API}api/get-data/all-doctors`);
			console.log(res);
			setDoctors(res.data);
			setLoading(false);
	}
	fetchData()
},[])

	return (
		<>

      <section style={{
                  backgroundColor: 'rgb(0,0 , 0,0.15)'
              }} className="container is-centered mt-6 pb-6 ">

                  <div className="container subtitle has-text-centered is-centered mt- mb-5 pb-3 ">
                        <strong className='has-text-black is-size-3 is-underlined'>Our  </strong>
                        <strong className='has-text-black  is-size-3 is-underlined'>Specialists</strong>
                    </div>
		{loading && <div className="is-flex is-justify-content-center is-align-items-center m-0 p-0" style={{height:'70vh'}}>
            <img className="image" alt="Loading..." src={Loader}  style={{height:"12rem",width:"12rem" ,fontSize:"3rem",}}/>
            </div>}
            {
            	!loading &&
            	       <div className=" news-box  is-flex is-justify-content-space-around is-flex-wrap-wrap">

            	       		{doctors.map((item,index)=>{
            	       		return	<Specialist key={index} name={item.name} gender={item.gender} education={item.education} />
            	       		})}

            	       </div>

            }
		


		</section>

		</>
	)
}

export default Doctors