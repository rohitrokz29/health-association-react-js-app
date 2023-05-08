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
import News from './components/News';

function App() {

  const [progress,setProgress]= useState(0);

  // baseurl is the base path for the api
  const API_URL='http://localhost:5000/'

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
          <Route key="home" exact path="/" element={<Home setProgress={setProgress} baseurl={API_URL}/>} />

          <Route key="about" exact path="/about" element={<About />} />

          <Route key="appointment" exact path="/book-an-appointment" element={<Appointment baseurl={API_URL}/>}  />

          <Route key='centers' exact path="/posi/:id"  element={<Center baseurl={API_URL}/>}/>


          <Route key="speciality" path="/speciality/:id" element={<Speciality baseurl={API_URL} />}/>

          <Route key="join" path="/join/:id" element={<JoinUs baseurl={API_URL}/>} />
          <Route key="news" exact path="/news" element={<News baseurl={API_URL}/>} />
        </Routes>
      </BrowserRouter>
  );
}  	

export default App;
