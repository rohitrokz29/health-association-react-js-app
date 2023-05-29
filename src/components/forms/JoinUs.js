import React, {  useState ,useEffect} from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const JoinUs = () => {
        const join_as = ["Specialist", "Nurse", "Therapist", "Physician", "Technologist", "Pharmacist"];

    const [check, setCheck] = useState(false);
    const [new_data, setNew_data] = useState({ name: "", email: "", profession: "", speciality: "", education: "", phone: "", });
        const { id } = useParams();
useEffect(() => {
    return () => {
        document.title="Join The Association";
    };
}, [])




const handleChange=(e)=>{
    const {name,value}=e.target;
    setNew_data({ ...new_data,[name]:value});
}

 const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file)
      fileReader.onload = () => {
        resolve(fileReader.result);
      }
      fileReader.onerror = (error) => {
        reject(error);
      }
    })
  }

const handleFileRead = async (event) => {
    const file = event.target.files[0]
    const base64 = await convertBase64(file)
    console.log(base64);
    setNew_data({...new_data,[event.target.name]:base64})
  }


    const joinUS =  (e) => {
   

        e.preventDefault();

        if (new_data.name === "" || new_data.email === "" || new_data.phone === "" || new_data.education === ""||new_data.speciality === "") {
                document.querySelector("#message").innerHTML = "Please enter correct details"
            }
        else {
         
            if (!check) {
                document.querySelector("#message").innerHTML = "Please check in the box "
                }
            else {
                axios.post(`${process.env.REACT_APP_API}api/sendData/joinus`, (new_data))
                .then(res=>document.getElementById("message").innerHTML=res.status===200?"Successfully Submited Form Please Cheeck Your Email":"Submission Failed")                
                .catch(err =>{document.querySelector("#message").innerHTML = err;});


            }
        }

    }

    return (
        <section style={{
            backgroundColor: 'rgb(0,0 , 0,0.1)',

        }} className="container is-centered mt-6 pb-6  ">

            <div className="container subtitle has-text-centered is-centered mb-2 pb-5 ">
                <strong className='has-text-black is-size-3 is-underlined'>Join   </strong>
                <strong className='has-text-black is-size-3 is-underlined'>Our </strong>
                <strong className='has-text-black  is-size-3 is-underlined'>Association </strong>
            </div>
            <div className=" columns is-centered pb-6">
                <form onSubmit={joinUS} className="column  is-one-third">
                    <div className="field mt-4 is-centered" style={{ width: "30vw" }}>
                        <div className="control has-icons-left has-icons-right">
                            <input className="input is-success   " type="text" name="name" value={new_data.name} onChange={handleChange} placeholder="Name" />
                            <span className="icon is-small is-left">
                                <i className="fa fa-user"></i>
                            </span>
                        </div>
                    </div>
                    <div className="field mt-4" style={{ width: "30vw" }}>
                        <div className="control has-icons-left has-icons-right">
                            <input className="input is-success   " type="email" name="email" value={new_data.email} onChange={handleChange} placeholder="Email" />
                            <span className="icon is-small is-left">
                                <i className="fa fa-envelope"></i>
                            </span>
                        </div>
                    </div>
                    <div className="field mt-4" style={{ width: "30vw" }}>
                        <div className="control has-icons-left has-icons-right">
                            <input className="input is-success   " type="number" maxLength="13" minLength="10" name="phone" value={new_data.phone} onChange={handleChange} placeholder="ContactNumber" />
                            <span className="icon is-small is-left">
                                <i className="fa fa-phone"></i>
                            </span>
                        </div>
                    </div>
                    <div className="field mt-4" style={{ width: "30vw" }}>
                        <div className="control">
                            <div className="select">

                                <select style={{ width: "30vw" }} value={new_data.profession} onChange={handleChange} name="profession">
                                    {/* <figure className="icon is-small is-left">
                                        <i className="fa fa-handshake-o"></i>
                                    </figure> */}
                                    <option value={id}>{id}</option>
                                    {

                                        join_as.filter((ele) => {
                                            if (ele === id) {
                                                return null;
                                            }
                                            return ele;

                                        }).map((ele) => {
                                            return (
                                                <option key={ele} value={ele}>{ele}</option>
                                            )
                                        })
                                    }
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="field mt-4" style={{ width: "30vw" }}>
                        <div className="control has-icons-left has-icons-right">
                            <input className="input is-success   " type="text" name="speciality" value={new_data.speciality} onChange={handleChange} placeholder="Speciality Type" />
                            <span className="icon is-small is-left">
                                <i className="fa fa-plus"></i>
                            </span>
                        </div>
                    </div>
                    <div className="field mt-4" style={{ width: "30vw" }}>
                        <div className="control has-icons-left has-icons-right has-text-black">
                            Educational Details in One File Below:
                            <input className="input is-success   " type="file" name="education"   
                                 required
                                label="Document"
                                
                                onChange={e => handleFileRead(e)}
                                size="small"
                                variant="standard"/>

                        </div>
                    </div>
                    <div className="field mt-4">
                        <div className="control is-size-6">
                            <label className="checkbox has-text-black ">
                                <input type="checkbox" name="check" onClick={() => { setCheck(check ? false : true) }} />
                                &nbsp;I agree that details provided above are correct
                            </label>

                        </div>
                        <div className="field mt-4 pb-0 mt-0 is-centered">
                            <strong className="has-text-black">We will be Contacting you within 48 hours on Email provided </strong>
                        </div>

                    </div>

                    <div className=" mt-4">
                        <div className=" is-size-6">
                            <div className=" has-text-danger-dark " id="message">
                            </div>

                        </div>


                    </div>
                    <div className="field mt-4 pb-0 mt-0 is-centered">
                        <div className="control is-flex is-justify-content-center">
                            <button className="button is-link is-dark" type="submit">Submit Details</button>
                        </div>
                    </div>



                </form>
            </div>

        </section>
    )
}

export default JoinUs;
