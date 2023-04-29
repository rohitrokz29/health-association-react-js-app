import React, { useId, useState ,useEffect} from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
const JoinUs = (props) => {
    const [check, setCheck] = useState(false);
    const { id } = useParams();

  const [profession, setProfession] = useState(id);
  useEffect(() => {
      return () => {
          setProfession(id)
      };
  }, [useParams()])


    const join_as = ["Specialist", "Nurse", "Therapist", "Physician", "Technologist", "Pharmacist"];
    // const [new_data,setNew_data]=useState({name:"",email:"",phone:'',profession:"",education:"",speciality:'',check:true});
    const [new_data, setNew_data] = useState({ name: "", email: "", profession: profession, speciality: "", education: "", phone: "", });
    const joinUS =  (e) => {
        e.preventDefault();

        if (new_data.name === "" || new_data.email === "" || new_data.phone === "" || new_data.education === "", new_data.speciality === "") {
                document.querySelector("#message").innerHTML = "Please enter correct details"
            }
        else {
         
            if (!check) {
                document.querySelector("#message").innerHTML = "Please check in the box "
                }
            else {
                axios.post((props.baseurl + "location").toString(), JSON.stringify(new_data)).
                then(res => res.json()).
                catch(err =>{document.querySelector("#message").innerHTML = err;
                            console.log(err);});
                console.log((new_data));

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
                            <input className="input is-success   " type="text" name="name" value={new_data.name} onChange={(e) => { setNew_data({ ...new_data, name: e.target.value }) }} placeholder="Name" />
                            <span className="icon is-small is-left">
                                <i className="fa fa-user"></i>
                            </span>
                        </div>
                    </div>
                    <div className="field mt-4" style={{ width: "30vw" }}>
                        <div className="control has-icons-left has-icons-right">
                            <input className="input is-success   " type="email" name="email" value={new_data.email} onChange={(e) => { setNew_data({ ...new_data, email: e.target.value }) }} placeholder="Email" />
                            <span className="icon is-small is-left">
                                <i className="fa fa-envelope"></i>
                            </span>
                        </div>
                    </div>
                    <div className="field mt-4" style={{ width: "30vw" }}>
                        <div className="control has-icons-left has-icons-right">
                            <input className="input is-success   " type="number" name="phone" value={new_data.phone} onChange={(e) => { setNew_data({ ...new_data, phone: e.target.value }) }} placeholder="ContactNumber" />
                            <span className="icon is-small is-left">
                                <i className="fa fa-phone"></i>
                            </span>
                        </div>
                    </div>
                    <div className="field mt-4" style={{ width: "30vw" }}>
                        <div className="control">
                            <div className="select">

                                <select style={{ width: "30vw" }} value={new_data.profession} onChange={(e) => { setNew_data({ ...new_data, profession: e.target.value }) }} name="profession">
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
                            <input className="input is-success   " type="text" name="speciality" value={new_data.speciality} onChange={(e) => { setNew_data({ ...new_data, speciality: e.target.value }) }} placeholder="Speciality Type" />
                            <span className="icon is-small is-left">
                                <i className="fa fa-plus"></i>
                            </span>
                        </div>
                    </div>
                    <div className="field mt-4" style={{ width: "30vw" }}>
                        <div className="control has-icons-left has-icons-right has-text-black">
                            Educational Details in One File Below:
                            <input className="input is-success   " type="file" name="education" value={new_data.education} onChange={(e) => { setNew_data({ ...new_data, education: e.target.value }) }}  />

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
