import React,{useState} from 'react';
import axios from 'axios';

const Reports = ({API_URL}) => {
const [data, setData] = useState({name:"",patient_id:"",phone:"",email:""});
    const [check, setCheck] = useState(false)
    const changeData=(e)=>{
        setData({...data,[e.target.name]:e.target.value}); 
    }


    const getReports= async (e)=>{
        e.preventDefault();
        console.log(data);

       if(  data.patient_id =""){
        document.getElementById("message").innerHTML="Please fill Correct Details";
       }
       else {
        if(!check){
            document.getElementById("message").innerHTML="Please check the box";
        }
        else{

            axios.post(`${API_URL}api/sendData/get-reports`,JSON.stringify(data)).
            then(res=>res.json()).
            then(res=>console.log(res)).
            catch(err=>document.getElementById("message").innerHTML=err);
        }
       }

    }    


	return (

		  <section style={{
            backgroundColor: 'rgb(0,0 , 0,0.1)',
            height:"80vh"

        }} className="container is-centered mt-6 pb-6  ">

            <div className="container subtitle has-text-centered is-centered mb-2 pb-5 ">
                <strong className='has-text-black is-size-3 is-underlined'>Get    </strong>
                <strong className='has-text-black is-size-3 is-underlined'>Your </strong>
                <strong className='has-text-black  is-size-3 is-underlined'>Medical </strong>
                <strong className='has-text-black  is-size-3 is-underlined'>Reports </strong>
            </div>
            <div className=" columns is-centered pb-6">
                <form className="column  is-one-third" id="appointment" onSubmit={getReports}>
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
                            <input className="input is-success   " type="number" maxLength="14" minLength="8" name="patient_id"  onChange={changeData} value={data.patient_id} placeholder="Patient's ID" />
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
                    <div className="field mt-4">
                        <div className="control is-size-6">
                            <label className="checkbox has-text-black ">
                                <input name="check" type="checkbox"   onClick={()=>{setCheck(check?false:true)}} />
                                &nbsp;I agree that details provided above are correct
                            </label>
                        </div>
                    </div>
                    <div className="field mt-4 pb-0 mt-0  is-centered">
                        <strong className="has-text-black ">We will be sending  you the reports on email  with in 6 hours </strong>
                    </div>

                     <div className=" mt-4">
                        <div className=" is-size-6">
                            <div className=" has-text-danger-dark " id="message">
                            </div>
                        </div>
                        </div>


                    <div className="field mt-4 pb-0 mt-0 is-centered">
                        <div className="control is-flex is-justify-content-center">
                            <button className="button is-link is-dark" type="submit " >Get Reports</button>
                         </div>
                    </div>





                </form>
            </div>

        </section>
	)
}

export default Reports