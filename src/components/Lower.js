import {React,useState} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';





const Lower = (props) => {

    /*
    email and password are the states for the subscrib for in lowr columns
    */

const [email,setEmail]=useState('');
const [phone,setPhone]=useState('');


    /*
    Subscribe function posts or sends the subscription data to the database through axios and api
    */

  const Subscribe= async (e)=>{

// let resp=confirm('Are you sure to subscribe?');
e.preventDefault();
if(true){
  try {
    console.log({email,phone});

    const sendData =  axios.post('http:localhost:5000/api/sendData/subscribtion',{
                                  email:email,
                                  phone:phone
                                })
                        .then(res=>res.json())

  } catch (e) {
    alert(e)
  }
}
  }
    return (
        <>

            <div className="columns  has-background-grey-dark mt-0">
                <div className="column has-text-white container is-one-quarter">
                    <div className="box has-background-dark has-text-white">
                        <div className="subtitle is-size-5 has-text-warning">Subscribe to our Health Services </div>
                        <p className="is-size-6">
                            Be the first to recieve the latest and important health information.

                        </p>
                        <p>Start for free</p>


                        {/*
                          Form for subscribtion
                          taking email and phone nummber
                        */}

                        <form method='post'  className="form">
                            <label htmlFor="email" className="email" id="email">Email:
                                <input type="email" value={email} onChange={e=>setEmail(e.target.value)} name='email' placeholder='Email' className="input" />
                            </label>
                            <label htmlFor="phone" className="phone">Phone:
                                <input type="number" placeholder='Mobile Number' value={phone} onChange={e=>setPhone(e.target.value)} name="phone" className='input is-hoverable' id="phone  " /></label>
                            <p>   By Subscribing you accept to our terms and conditions.
                            </p>
                            <input type="button" onClick={Subscribe} className='input button has-background-danger has-text-white is-hoverable' value="Subscribe" />
                        </form></div>
                    <div className="box has-background-dark has-text-white">
                        <div className="subtitle has-text-warning">About Cureit</div>
                        <div className="container is-flex is-flex-direction-column">
                            <Link className='has-text-white is-hoverable' to="/" target="_blank">About Us</Link>
                            <Link className='has-text-white is-hoverable' to="/" target="_blank">Achievments</Link>
                            <Link className='has-text-white is-hoverable' to="/" target="_blank">Missions</Link>
                            <Link className='has-text-white is-hoverable' to="/" target="_blank">Contact Us</Link>
                            <Link className='has-text-white is-hoverable' to="/" target="_blank">Awards </Link>
                            <Link className='has-text-white is-hoverable' to="/" target="_blank">Corporate and Insurance Affilations</Link>
                        </div>
                    </div>
                </div>

                <div className="column has-text-white container is-one-quarter">


                {  // CENTERS OF EXCELLENCE
                }

                    <div className="box has-background-dark has-text-white">
                        <div className="subtitle has-text-warning">
                            Centeres of Excellence
                        </div>
                      </div>
                    <div className="box has-background-dark has-text-white">
                        <div className="subtitle has-text-warning">
                            Events
                        </div>
                        <div className="container is-flex is-flex-direction-column">
                            <Link to="/" className="has-text-white">Annual Health Camp..</Link>
                            <Link to="/" className="has-text-white">Safe and Sustainable World</Link>
                            <Link to="/" className="has-text-white">Best Support Awards</Link>
                        </div>
                    </div>


                </div>



                  {// DIVISIONAL HEAD LOCATIONS
                  }
                <div className="column has-text-white container is-one-quarter">
                    <div className="box has-background-dark has-text-white">
                        <div className="subtitle has-text-warning">
                            Our Division Heads
                        </div>
                        <div className="container is-flex is-flex-direction-column">
                            <Link to="/" className="has-text-white is-hoverable">Mumbai</Link>
                            <Link to="/" className="has-text-white is-hoverable">Indore</Link>
                            <Link to="/" className="has-text-white is-hoverable">Kolkata</Link>
                            <Link to="/" className="has-text-white is-hoverable">Jaipur</Link>
                            <Link to="/" className="has-text-white is-hoverable">Hyderabad</Link>
                            <Link to="/" className="has-text-white is-hoverable">Delhi</Link>
                            <Link to="/" className="has-text-white is-hoverable">Banglore</Link>
                            <Link to="/" className="has-text-white is-hoverable">Patna</Link>
                            <Link to="/" className="has-text-white is-hoverable">Chandigarh</Link>
                            <Link to="/" className="has-text-white is-hoverable">Manipur</Link>
                        </div>
                    </div>


                    {// MEDIA POPULARITY
                    }
                    <div className="box has-background-dark has-text-white">
                        <div className="subtitle has-text-warning">
                            News and Media
                        </div>
                        <div className="container is-flex is-flex-direction-column">
                            <Link to="/" className="has-text-white">News and Articles</Link>
                            <Link to="/" className="has-text-white">Association Highlights</Link>
                            <Link to="/" className="has-text-white">Testimonials</Link>
                        </div>
                    </div>

                </div>
                <div className="column has-text-white is-one-quarter is-flex is-flex-direction-column container">
                    <div className="box has-background-dark has-text-white">
                        <div className="subtitle has-text-warning">Important Links</div>
                        <div className="container is-flex has-text-white is-flex-direction-column">
                            <Link to="/" className="has-text-white">Contact Us</Link>
                            <Link to="/" className="has-text-white">International Supporters</Link>
                        </div>
                    </div>


                      {/*
                        Social mdial platforms of thr association
                        (here the home page of social media platform are used as no
                         such orgenisation / association exist)
                      */}

                    <div className="box has-background-dark has-text-white">

                        <div className="  subtitle is-size-5 has-text-warning">Connect to Cureit  </div>

                        <div className="container is-flex is-justify-content-space-around ">
                            <Link target="_blank" to='https://youtube.com' className="youtube icon has-text-grey-lighter is-hoverable is-size-2">
                                <i className="fa fa-youtube "></i>
                            </Link>
                            <Link target="_blank" to='https://twitter.com' className="icon has-text-grey-lighter is-hoverable twitter is-size-3">
                                <i className="fa fa-twitter "></i>
                            </Link>
                            <Link target="_blank" to='https://facebook.com' className="icon has-text-grey-lighter is-hoverable facebook is-size-3">
                                <i className="fa fa-facebook "></i>
                            </Link>

                            <Link target="_blank" to='https://instagram.com' className="icon has-text-grey-lighter is-hoverable instagram is-size-3">
                                <i className="fa fa-instagram "></i>
                            </Link>

                            <Link target="_blank" to='https://te.me' className="icon has-text-grey-lighter is-hoverable telegram is-size-3">
                                <i className="fa fa-telegram "></i>
                            </Link>

                            <Link target="_blank" to='https://linked.inf' className="icon has-text-grey-lighter is-hoverable linkedin is-size-3">
                                <i className="fa fa-linkedin "></i>
                            </Link>
                        </div>


                    </div>
                    <div className="box has-background-dark">
                        <div className="subtitle has-text-warning">Phone</div>
                        <div className="container is-size-4 has-text-white">
                            (+91) 76454423434
                        </div>
                    </div>


                    {/*
                      Below is the Github link of the project repository
                    */}

                    <div className="box has-background-dark">
                        <div className="container is-small has-text-white">
                            Github:&nbsp;
                            <Link to='https://github.com/rohitrokz29/health-association-react-js-app' target="_blank" className="icon is-size-5 has-text-white">
                                <i className="fa fa-github"></i>
                            </Link>
                        </div>
                    </div>
                </div>


            </div>

        </>
    )
}



export default Lower;
