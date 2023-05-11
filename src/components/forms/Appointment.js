import React, { useEffect, useState } from 'react';
import axios from "axios";
const Appointment = ({API_URL}) => {

    const [data, setData] = useState({name:"",phone:"",email:"",symptoms:"",income:""});
    const [check, setCheck] = useState(false)
    const changeData=(e)=>{
        setData({...data,[e.target.name]:e.target.value}); 
    }


    const bookAppointment= async (e)=>{
        e.preventDefault();
        console.log(data);

        if(data.name===""||data.phone===""|| data.email===""||data.symptoms==="" || data.income===""){
                document.querySelector("#message").innerHTML = "Please enter correct details";
        }
        else{
            if(!check){
                document.querySelector("#message").innerHTML = "Please check in the box";
            }
            else{
                    let res=await axios.post((API_URL+"location").toString(),JSON.stringify(data)).
                    then(res=>res.json()).
                    then(res=>console.log(res)).
                    catch(err=>document.querySelector("#message").innerHTML = err)

            }
        }

    }    




    return (
        <section style={{
            backgroundColor: 'rgb(0,0 , 0,0.1)',

        }} className="container is-centered mt-6 pb-6  ">

            <div className="container subtitle has-text-centered is-centered mb-2 pb-5 ">
                <strong className='has-text-black is-size-3 is-underlined'>Book   </strong>
                <strong className='has-text-black is-size-3 is-underlined'>For  </strong>
                <strong className='has-text-black  is-size-3 is-underlined'>An Appointment </strong>
            </div>
            <div className=" columns is-centered pb-6">
                <form className="column  is-one-third" id="appointment" onSubmit={bookAppointment}>
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
                            <input className="input is-success   "  name="phone" maxLength="13"  minLength="10" value={data.phone} onChange={changeData} type="number" placeholder="Contact Number" />
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

                                <select  value={data.income} onChange={changeData} name ="income"style={{ width: "30vw" }}>


                                    <option value="null"> Income Details</option>
                                    <option value="lessThan1">Less Than 1 Lakh</option>
                                    <option value="2to8">Between 2 to 8 Lakh </option>
                                    <option value="greaterThan8">Above Than 8 Lakh</option>

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
                        <strong className="has-text-black ">You will be recieving appointment details after booking the appointment with in 6 hours </strong>
                    </div>

                     <div className=" mt-4">
                        <div className=" is-size-6">
                            <div className=" has-text-danger-dark " id="message">
                            </div>
                        </div>
                        </div>


                    <div className="field mt-4 pb-0 mt-0 is-centered">
                        <div className="control is-flex is-justify-content-center">
                            <button className="button is-link is-dark" type="submit " >Book The Appointment</button>
                         </div>
                    </div>





                </form>
            </div>

        </section>
    )
}

export default Appointment;
