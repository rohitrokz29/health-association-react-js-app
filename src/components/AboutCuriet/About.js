import React from 'react';
import about from '../images/about.png';

const About = () => {

  /*
        The Informations in this page does not have any real existance in world
        No  such Services and Awards exist in rel (if exist I don't know)


  */
    return (
        <>
            <section style={{
                backgroundColor: 'rgb(0,0 , 0,0.1)'
            }} className="container is-centered mt-6 pb-6 ">

                <div className="container subtitle has-text-centered is-centered mb-2 pb-3 ">
                    <strong className='has-text-black is-size-3 is-underlined'>Cureit  </strong>
                    <strong className='has-text-black is-size-3 is-underlined'>Asociation</strong>
                    <strong className='has-text-black  is-size-3 is-underlined'>About </strong>
                </div>

                <div className="container is-flex is-justify-content-space-between is-fullwidth">
                    <div className="content p-6 container has-text-dark  has-text-centered">
                        <strong className="is-size-5  has-text-black has-text-weight-bold mb-6"><span>Cureit -Non Governmental Organisation (NGO)</span> </strong>
                        <br />
                        <p className='mt-4'>Cureit is Non Governmental Organisation that targets to help people to get best health servies.
                            To all the people of country the health association is open and services can be provided to everyone in the country.
                        </p>
                        <p>
                            The best services to the people who can not afford can be provided to make the country more healthy.

                            Our Association organises four health camps every year for the people who can not afford to have healt services from private health centers.

                        </p>
                    </div>
                    <figure className="image m-4 mb-0 pb-0 ">'
                        <img style={{ width: "35vw",border:"4px solid black",borderRadius:"1rem" }} alt='LOGO NOT ABLE TO LOAD' src={about}  ></img>
                    </figure>
                </div>
                <div className="container is-flex is-justify-content-space-around is-flexwrap-wrap mt-0 pt-0 pb-0  ">

                    <div className="container  mb-0 pl-2">
                        <strong className="has-text-black has-text-weight-bold is-size-5 mt-2 mb-2  has-text-centered">Services Provided By Cureit</strong> <br />
                        <div className="column menu">
                            <div className="menu-list has-text-dark has-text-left">Online Health CheckUp</div>
                            <div className="menu-list has-text-dark has-text-left">Home Health Checkup</div>
                            <div className="menu-list has-text-dark has-text-left">Low cost Surgeries for BPL People</div>
                            <div className="menu-list has-text-dark has-text-left">Home delivery of Medicines</div>
                            <div className="menu-list has-text-dark has-text-left">Free Health checkups for BPL people </div>
                            <div className="menu-list has-text-dark has-text-left">Careers for Freshers (doctors and Nurses both)</div>
                            <div className="menu-list has-text-dark has-text-left">Mega Health Camp once in a year </div>

                        </div>
                    </div>
                    <div className="container mb-0 pl-2">
                    <strong className="has-text-black has-text-weight-bold is-size-5 mt-2 mb-2  has-text-centered">Achievments</strong> <br />
                      <div className='column menu'>
                        <div className="menu-list has-text-dark has-text-left"> Among top 10 of the world's NGO's </div>
                        <div className="menu-list has-text-dark has-text-left"> OSH India Award Winner 2050 </div>
                        <div className="menu-list has-text-dark has-text-left">1000+ health camps organised </div>
                        <div className="menu-list has-text-dark has-text-left">Award Winner for best Health NGO </div>
                        <div className="menu-list has-text-dark has-text-left">1L+ donators every year </div>
                      </div>
                     </div>
                    <div className="container">
                        <strong className="has-text-black has-text-weight-bold is-size-5 mt-2 mb-2  has-text-centered">Associates of Cureit</strong> <br />
                        <div className="menu-list has-text-dark has-text-left">NOGC Healh Services</div>
                        <div className="menu-list has-text-dark has-text-left">The Great Medical University of Banhjpw</div>
                        <div className="menu-list has-text-dark has-text-left">BK Medical Robotics Pvt. Ltd. </div>
                        <div className="menu-list has-text-dark has-text-left">Pghjsgf4h h4ij jjo</div>

                    </div>
                </div>


            </section>

        </>
    )
}

export default About;
