import React, { useState} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import {useParams } from "react-router";
import LoadingBar from 'react-top-loading-bar';
import About from './components/AboutCuriet/About';
import JoinUs from './components/forms/JoinUs';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Speciality from './components/Specialities/Speciality'
import Center from './components/Center'
import Appointment from './components/forms/Appointment';


function App() {

  const [progress,setProgress]= useState(0);

  // baseurl is the base path for the api
  const baseurl='http://localhost:5000/'

  /*
    Logo's and image's used in this pages are taken from google and different websites
  */

const NEWS_URL=process.env.NEWS_URL;

    return (
      <BrowserRouter>
        <Navbar NEWS_URL={NEWS_URL}    />
        <LoadingBar
        height={5}
        color='red'
        progress={progress}
        />

        <Routes>
          <Route key="home" exact path="/" element={<Home setProgress={setProgress} baseurl={baseurl}/>} />

          <Route key="about" exact path="/about" element={<About />} />

          <Route key="appointment" exact path="/book-an-appointment" element={<Appointment/>}  />

          <Route key='centers' exact path="/posi/:id" baseurl={baseurl} element={<Center/>}/>

          {    // in the <Speciality/> commponent ":id " is the speciality type passed in page link url
          }


          <Route key="speciality" path="/speciality/:id" element={<Speciality  />}/>

          <Route key="join" path="/join/:id" element={<JoinUs/>} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
