import React from "react";
import { useParams } from "react-router-dom";
const JoinUs = (props) => {
    const { id } = useParams();
    const join_as = ["Specialist", "Nurse", "Therapist", "Physician", "Technologist", "Pharmacist"];
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
                <div className="column  is-one-third">
                    <div className="field mt-4 is-centered" style={{ width: "30vw" }}>
                        <div className="control has-icons-left has-icons-right">
                            <input className="input is-success   " type="text" placeholder="Name" />
                            <span className="icon is-small is-left">
                                <i className="fa fa-user"></i>
                            </span>
                        </div>
                    </div>
                    <div className="field mt-4" style={{ width: "30vw" }}>
                        <div className="control has-icons-left has-icons-right">
                            <input className="input is-success   " type="email" placeholder="Email" />
                            <span className="icon is-small is-left">
                                <i className="fa fa-envelope"></i>
                            </span>
                        </div>
                    </div>
                    <div className="field mt-4" style={{ width: "30vw" }}>
                        <div className="control has-icons-left has-icons-right">
                            <input className="input is-success   " type="text" placeholder="ContactNumber" />
                            <span className="icon is-small is-left">
                                <i className="fa fa-phone"></i>
                            </span>
                        </div>
                    </div>
                    <div className="field mt-4" style={{ width: "30vw" }}>
                        <div className="control">
                            <div className="select">

                            <select style={{ width: "30vw" }}>
                            <span className="icon is-small is-left">
                                <i className="fa fa-handshake-o"></i>
                            </span>
                                    <option>{id}</option>
                                    {

                                        join_as.filter((ele) => {
                                            if (ele === id) {
                                                return null;
                                            }
                                            return ele;

                                        }).map((ele) => {
                                            return (
                                                <option>{ele}</option>
                                            )
                                        })
                                    }
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="field mt-4" style={{ width: "30vw" }}>
                        <div className="control has-icons-left has-icons-right">
                            <input className="input is-success   " type="text" placeholder="Speciality Type" />
                            <span className="icon is-small is-left">
                                <i className="fa fa-plus"></i>
                            </span>
                        </div>
                    </div>
                    <div className="field mt-4" style={{ width: "30vw" }}>
                        <div className="control has-icons-left has-icons-right has-text-black">
                            Educational Details in One File Below:
                            <input className="input is-success   " type="file"  />

                        </div>
                    </div>
                    <div className="field mt-4">
  <div className="control is-size-6">
    <label className="checkbox has-text-black ">
      <input type="checkbox" />
      &nbsp;I agree that details provided above are correct
    </label>

  </div>
  <div className="field mt-4 pb-0 mt-0 is-centered">
<strong className="has-text-black">We will be Contacting you within 48 hours on Email provided </strong>
  </div>

</div>
<div className="field mt-4 pb-0 mt-0 is-centered">
  <div className="control is-flex is-justify-content-center">
    <button className="button is-link is-dark">Submit Details</button>
  </div>
  </div>



                </div>
            </div>

        </section>
    )
}

export default JoinUs;
