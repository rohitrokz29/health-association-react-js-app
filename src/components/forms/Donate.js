import React,{useState,useEffect} from 'react';
import axios from "axios";

const Donate = ({API_URL}) => {
	const [check, setCheck] = useState(false);
	const [data, setData] = useState({name:"",phone:"",email:"",type:"null"});
	useEffect(() => {
        return () => {
            document.title="Help The Association";
        };
    }, [])
	const changeData=(e)=>{
        setData({...data,[e.target.name]:e.target.value}); 
    }
    const donate =(e)=>{
    	e.preventDefault();


    	if(data.name===""  || data.email==="" || data.phone==="" || data.type==="null"){
    			document.getElementById("message").innerHTML="Enter Correct Details";
    	}
    	else {
    	
                if(!check){
                document.getElementById("message").innerHTML="Please check the box";
                }
                else{
                document.getElementById("message").innerHTML="";


                    axios.post(`${API_URL}api/sendData/donate`,data)
                    .then(res=>res.json()).then(res=>document.getElementById("message").innerHTML=res.status===200?"Successfully Submited Form":"Submission Failed")
                    .catch(res=>{document.getElementById("message").innerHTML="Error in Submission";})

                }

    	}

    }


	return (

		<>
		
       <section style={{
            backgroundColor: 'rgb(0,0 , 0,0.1)',
            height:"80vh"

        }} className="container is-centered mt-6 pb-6  ">

             <div className="container subtitle has-text-centered is-centered mb-2 pb-5 ">
                <strong className='has-text-black is-size-3 is-underlined'>Help    </strong>
                <strong className='has-text-black is-size-3 is-underlined'>The </strong>
                <strong className='has-text-black  is-size-3 is-underlined'>Association </strong>
            </div>
		     <div className=" columns is-centered pb-6">
					<form className="column  is-one-third" id="donate" onSubmit={donate}>
						 <div className="field mt-4 is-centered" style={{ width: "30vw" }}>
                        <div className="control has-icons-left has-icons-right">
                            <input className="input is-success   " type="text" name="name"  onChange={changeData} value={data.name} placeholder="Donar's Name" />
                            <span className="icon is-small is-left">
                                <i className="fa fa-user"></i>
                            </span>
                        </div>
                    	</div>

                    	<div className="field mt-4 is-centered" style={{ width: "30vw" }}>
                        <div className="control has-icons-left has-icons-right">
                            <input className="input is-success   "  name="phone"  value={data.phone} onChange={changeData} type="number" placeholder="Contact Number" />
                            <span className="icon is-small is-left">
                                <i className="fa fa-phone"></i>
                            </span>
                        </div>
                    </div>
                     <div className="field mt-4 is-centered" style={{ width: "30vw" }}>

                        <div className="control has-icons-left has-icons-right">

                            <input className="input is-success   " type="email" value={data.email} onChange={changeData} name="email" placeholder="Email (Optional)" />
                            <span className="icon is-small is-left">
                                <i className="fa fa-envelope"></i>
                            </span>
                        </div>
                    </div>

                     <div className="field mt-4" style={{ width: "30vw" }}>
                        <div className="control">
                            <div className="select">

                                <select  value={data.type} onChange={changeData} name ="type"style={{ width: "30vw" }}>


                                    <option value="null"> Help Type</option>
                                    <option value="bodyParts">Donate Body Parts</option>
                                    <option value="healthCamp">Help by organising Health camp </option>
                                    <option value="money">Donate Money</option>
                                    <option value="food">Organising Food to the Patients</option>
                                    <option value="others">Others</option>


                                </select>
                            </div>
                        </div>
                    </div>


 				<div className="field mt-4">
                        <div className="control is-size-6">
                            <label className="checkbox has-text-black ">
                                <input name="check" type="checkbox"  value={check}  onClick={()=>{setCheck(check?false:true)}}  />
                                &nbsp;I agree that details provided above are correct.
                            </label>
                        </div>
                    </div>
                    <div className="field mt-4 pb-0 mt-0  has-text-centered ">
                        <strong className="has-text-black  ">&nbsp;We will be contacting you within 6  hours.</strong>
                    </div>

                     <div className=" mt-4">
                        <div className=" is-size-6 ">
                            <div className=" has-text-danger-dark has-text-centered  " id="message">
                            </div>
                        </div>
                        </div>



                    <div className="field mt-4 pb-0 mt-0 is-centered">
                        <div className="control is-flex is-justify-content-center">
                            <button className="button is-link is-dark" type="submit " >Submit Details</button>
                         </div>
                    </div>



					</form>
			</div>

		</section>

		</>
	)
}

export default Donate