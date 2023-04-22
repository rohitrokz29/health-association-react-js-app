import React, { useEffect, useState } from 'react';

const Appointment = () => {

    return (
        <section style={{
            backgroundColor: 'rgb(0,0 , 0,0.1)',

        }} className="container is-centered mt-6 pb-6 mb-0 pt-6  ">

            <div className="container subtitle has-text-centered is-centered mb-2 pb-5 ">
                <strong className='has-text-black is-size-3 is-underlined'>Book   </strong>
                <strong className='has-text-black is-size-3 is-underlined'>For  </strong>
                <strong className='has-text-black  is-size-3 is-underlined'>An Appointment </strong>
            </div>
            <div className=" columns is-centered pb-6">
                <div className="column  is-one-third">

                    <div className="field mt-4 is-centered" style={{ width: "30vw" }}>
                        <div className="control has-icons-left has-icons-right">
                            <input className="input is-success   " type="text" placeholder="Patient's Name" />
                            <span className="icon is-small is-left">
                                <i className="fa fa-user"></i>
                            </span>
                        </div>
                    </div>
                    <div className="field mt-4 is-centered" style={{ width: "30vw" }}>
                        <div className="control has-icons-left has-icons-right">
                            <input className="input is-success   " type="text" placeholder="Contact Number" />
                            <span className="icon is-small is-left">
                                <i className="fa fa-phone"></i>
                            </span>
                        </div>
                    </div>

                    <div className="field mt-4 is-centered" style={{ width: "30vw" }}>
                        <div className="control has-icons-left has-icons-right">
                            <input className="input is-success   " type="text" placeholder="Email (Optional)" />
                            <span className="icon is-small is-left">
                                <i className="fa fa-envelope"></i>
                            </span>
                        </div>
                    </div>
                    <div className="field mt-4 is-centered" style={{ width: "30vw" }}>
                        <div className="control has-icons-left has-icons-right">
                            <input className="input is-success   " type="text" placeholder="Symptoms" />
                            <span className="icon is-small is-left">
                                <i className="fa fa-heart"></i>
                            </span>
                        </div>
                    </div>
                    <div className="field mt-4" style={{ width: "30vw" }}>
                        <div className="control">
                            <div className="select">

                                <select style={{ width: "30vw" }}>


                                    <option>Income Details</option>
                                    <option>Less Than 1 Lakh</option>
                                    <option>Between 2 to 8 Lakh </option>
                                    <option>Above Than 8 Lakh</option>

                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="field mt-4">
                        <div className="control is-size-6">
                            <label className="checkbox has-text-black ">
                                <input type="checkbox" />
                                &nbsp;I agree that details provided above are correct
                            </label>
                        </div>
                    </div>
                    <div className="field mt-4 pb-0 mt-0  is-centered">
                        <strong className="has-text-black ">You will be recieving appointment details after booking the appointment with in 6 hours </strong>
                    </div>


                    <div className="field mt-4 pb-0 mt-0 is-centered">
                        <div className="control is-flex is-justify-content-center">
                            <button className="button is-link is-dark">Book The Appointment</button>
                        </div>
                    </div>





                </div>
            </div>

        </section>
    )
}

export default Appointment;
