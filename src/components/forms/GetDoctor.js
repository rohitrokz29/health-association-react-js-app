import React,{useState,useEffect} from 'react';
import axios from 'axios';


const GetDoctor = ({API_URL}) => {

 const [data, setData] = useState({name:"",doctor_name:"",speciality:"",phone:"",email:"",symptoms:"",patient_type:""});
    const [check, setCheck] = useState(false)
    const changeData=(e)=>{
        setData({...data,[e.target.name]:e.target.value}); 
    }
useEffect(() => {
    return () => {
        document.title="Get Your Doctor";
    };
}, [])

    const getDoctor= async (e)=>{
        e.preventDefault();
        console.log(data);

       if(data.name===""|| data.phone===""|| data.symptoms==="" || data.patient_type===""){
        document.getElementById("message").innerHTML="Please fill Correct Details";
       }
       else {
        if(!check){
            document.getElementById("message").innerHTML="Please check the box";
        }
        else{

            axios.post(`${API_URL}api/sendData/get-doctor`,JSON.stringify(data))
            .then(res=>res.json())
            .then(res=>res.json()).then(res=>document.getElementById("message").innerHTML=res.status===200?"Successfully Submited Form\nDetails Will be sent on your mail":"Submission Failed")
            .catch(err=>document.getElementById("message").innerHTML=err);
        }
       }

    }    


	return (

		  <section style={{
            backgroundColor: 'rgb(0,0 , 0,0.1)',

        }} className="container is-centered mt-6 pb-6  ">

            <div className="container subtitle has-text-centered is-centered mb-2 pb-5 ">
                <strong className='has-text-black is-size-3 is-underlined'>Get    </strong>
                <strong className='has-text-black is-size-3 is-underlined'>Your </strong>
                <strong className='has-text-black  is-size-3 is-underlined'>Doctor </strong>
            </div>
            <div className=" columns is-centered pb-6">
                <form className="column  is-one-third" id="appointment" onSubmit={getDoctor}>
                    <div className="field mt-4 is-centered" style={{ width: "30vw" }}>
                        <div className="control has-icons-left has-icons-right">
                            <input className="input is-success   " type="text" name="name"  onChange={changeData} value={data.name} placeholder="Patient's Name" />
                            <span className="icon is-small is-left">
                                <i className="fa fa-user"></i>
                            </span>
                        </div>
                    </div>
                     <div className="field mt-4 is-centered" style={{ width: "30vw" }}>
                        <div className="control has-icons-left has-icons-right">
                            <input className="input is-success   " type="text" name="doctor_name"  onChange={changeData} value={data.doctor_name} placeholder="Doctor's Name (Optional)" />
                            <span className="icon is-small is-left">
                                <i className="fa fa-user"></i>
                            </span>
                        </div>
                    </div>
                     <div className="field mt-4 is-centered" style={{ width: "30vw" }}>
                        <div className="control has-icons-left has-icons-right">
                            <input className="input is-success   " type="text" name="speciality"  onChange={changeData} value={data.speciality} placeholder="Doctors Spectality" />
                            <span className="icon is-small is-left">
                                <i className="fa fa-user"></i>
                            </span>
                        </div>
                    </div>
                    <div className="field mt-4 is-centered" style={{ width: "30vw" }}>
                        <div className="control has-icons-left has-icons-right">
                            <input className="input is-success   "  name="phone" maxLength="13"  minLength="10" value={data.phone} onChange={changeData} type="tel" placeholder="Contact Number" />
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
                    <div className="field mt-4 is-centered" style={{ width: "30vw" }}>
                        <div className="control has-icons-left has-icons-right">
                            <input className="input is-success   " value={data.symptoms}  onChange={changeData} name="symptoms"type="text" placeholder="Symptoms" />
                            <span className="icon is-small is-left">
                                <i className="fa fa-heart"></i>
                            </span>
                        </div>
                    </div>
                    <div className="field mt-4" style={{ width: "30vw" }}>
                        <div className="control">
                            <div className="select">

                                <select  value={data.patient_type} onChange={changeData} name ="patient_type"style={{ width: "30vw" }}>


                                    <option value="null"> Patient Type</option>
                                    <option value="newPatient">New Patient</option>
                                    <option value="already">Already in contact with Association </option>
                                    

                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="field mt-4">
                        <div className="control is-size-6">
                            <label className="checkbox has-text-black ">
                                <input name="check" type="checkbox"   onClick={()=>{setCheck(check?false:true)}} />
                                &nbsp;I agree that details provided above are correct
                            </label>
                        </div>
                    </div>
                    <div className="field mt-4 pb-0 mt-0  is-centered">
                        <strong className="has-text-black ">We will be contacting you with in 6 hours </strong>
                    </div>

                     <div className=" mt-4">
                        <div className=" is-size-6">
                            <div className=" has-text-danger-dark " id="message">
                            </div>
                        </div>
                        </div>


                    <div className="field mt-4 pb-0 mt-0 is-centered">
                        <div className="control is-flex is-justify-content-center">
                            <button className="button is-link is-dark" type="submit " >Get My Doctor</button>
                         </div>
                    </div>





                </form>
            </div>

        </section>
	)
}

export default GetDoctor