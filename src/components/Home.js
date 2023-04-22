import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import './launch.css';
import Card from './cards/Card';
import ExcelllCard from './cards/ExcelllCard';
import Specialist from './cards/Specialist';
import ExpertSay from './ExpertSay';
import Loader from './images/load.gif';
import Lower from './Lower'

const Home = (props) => {

    /*
    Ecellence state store the data of Association excellency fields and
    Specialistdata state stores the data of top specialists of associstion in the
    form of array which element are in json format
    */

    const [Excelldata, SetExcelldata] = useState([]);
    const [Specialistdata, SetSpecialistdata] = useState([]);
    const {loading,setLoading}=useState(true);
    /*
    useEffect hook used to fetch the data of specialists and excellence
    from the api = base path+"/api/get-data/home-data" using the homeData function
    which runs every time the page is updated

    the homeData function uses axios to fetch data from api and store it in the
    Excelldata and specialistData states. The function uses try and catch method
    and it tries until the data is not fetched from api.
    */
    /*
    destructuring the prop function to use in useEffect and avoid unnecessary loadings
    */
    const setProgress = props.setProgress;

    // const baseurl=props.baseurl;
// `${baseurl}api/get-data/home-data`||
    const url = "http://localhost:5000/api/get-data/home-data";

    useEffect(() => {
        const homeData = async (url) => {
            try {
                setProgress(10);
                // const data = await axios.get(url);
                const data={}
                setProgress(54);
                console.log(data);

                SetExcelldata(data.data.excellenceData);
                SetSpecialistdata(data.data.specialistData);

                setProgress(100);
                setLoading(false);
            }
            catch (err) {
                setProgress(0);
                console.log(err);
                // homeData(url);
            }
        }
        homeData(url)

        return () => {
            console.log('data recieved');
        }
    }, [url, setProgress,setLoading]);




    return (
        <>
            <div className="columns  m-0 p-0 is-vcentered  is-centered is-multiline">
                <div className="column has-text-dark is-size-3 has-text-weight-semibold p-5 has-text-centered mt-4 ">
                    <span>Helping</span> Someone in need without expecitng for the fruit can be <br /> the best act on the Earth.
                </div>


            </div>
            <div className="hero " style={{ flexWrap: 'wrap' }}>
                <div className="hero-body is-transperent is-flex is-justify-content-center  is-flex-wrap-wrap card-box	 ">
                    <Card key="appointment" query=' Book Doctor Appointment' icon has-text-grey-lighter is-hoverable='' image='https://img.freepik.com/premium-vector/personal-doctor-appointment-2d-vector-isolated-illustration-visit-professional-health-facility-flat-characters-cartoon-background-getting-treatment-plan-symptoms-conditions-colourful-scene_151150-5797.jpg?w=740' url="/book-an-appointment" />
                    <Card key='doctor' query='Get your Doctor ' icon has-text-grey-lighter is-hoverable='' image='https://www.shutterstock.com/image-vector/doctor-stethoscope-on-laptop-screen-260nw-1892457136.jpg' url="get-doctor" />
                    <Card key='health' query='Health Checkup' icon has-text-grey-lighter is-hoverable='' image='https://img.freepik.com/premium-vector/man-see-doctor-check-himself_134553-253.jpg?w=740' url='health-checkup'/>
                    <Card key='report' query=' Medical Reports ' icon has-text-grey-lighter is-hoverable='' image='https://media.istockphoto.com/id/497452643/vector/doctor-showing-a-medical-report.jpg?s=612x612&w=is&k=20&c=ZnB3evSrHk7tCM_BEBNNoxXTGkny1LS-MjpzbdlUWKA=' url='medical-reports' />

                </div>
            </div>

            {    /*
                Below is the map function distributing the Excelldata on screen through the ExcelllCard
                component taking the data as props
              */}

            <section className="hero ">
                <div className="hero-body mb-0 pb-0 mt-1 container ">
                    <strong className='subtitle is-size-4 has-text-weight-semibold is-underlined has-text-black '>Centers Of Excellence</strong>
                </div>
                <div className="hero-body mb-0 pb-0 is-flex is-justify-content-space-evenly is-flex-wrap-wrap ">

                    {!loading && <img className="image " alt="_blank" style={{ width: "10vw" }} src={Loader} />}
                    {

                        (loading) && Excelldata.map((ele) => {
                            return (
                                <ExcelllCard image={ele.imageUrl} url={ele.url} key={ele.description} speciality={ele.speciality} description={ele.description} />
                            )
                        })


                    }
                </div>
                <br /><hr className='is-centered ' style={{ width: '80vw', marginLeft: '8rem', marginRight: '8rem' }} />

            </section>

            {  /*
              similar to Excelldata card this is the cards for specialistData using map function
              */}
            <section className='hero is-flex is-flex-direction-column is-justify-content-center	'>
                <div className="hero-body container mt-4 pb-4 ">
                    <strong className="subtitle  is-underlined has-text-black is-size-4 has-text-weight-semibold">Our Specialists</strong>
                </div>


                <div className="hero-body mb-0  pt-1 pb-0 is-flex is-justify-content-space-evenly is-flex-wrap-wrap ">
                {!loading && <img className="image " alt="_blank" style={{ width: "10vw" }} src={Loader} />}

                    {

                        (loading) && Specialistdata.filter((ele, idx) => idx < 8).map((ele) => {
                            return (
                                <Specialist key={ele.name} gender={ele.gender} name={ele.name} qualification={ele.qualification} />
                            )
                        })}
                </div>


                {  /*
                  This button is to view all the specialist in the Association
                  */}

                <div className="container mt-4">
                    <Link to='/' target="_blank" className="box button is-hoverable  is-rounded">
                        View all
                    </Link>
                </div>
                <br /><hr className='is-centered ' style={{ width: '80vw', marginLeft: '8rem', marginRight: '8rem' }} />

            </section>


            {/*
                below component <ExpertSay/> shows vidoes of doctors

                (here are not the real assicoated doctors this are just for project )
              */}

            <ExpertSay />

            {/*
            <Lower/> component is the bottom part of home page showning
            all properties of association and projects in shorts.
            */}
            <Lower baseurl={props.baseurl} />

        </>
    )
}

export default Home;
