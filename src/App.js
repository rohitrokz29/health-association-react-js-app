import React, { useState} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import {useParams } from "react-router";
import LoadingBar from 'react-top-loading-bar';
import About from './components/AboutCuriet/About';
import JoinUs from './components/forms/JoinUs';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Speciality from './components/Specialities/Speciality';
import Center from './components/Center'
import Appointment from './components/forms/Appointment';
import News from './components/News';
import Donate from './components/forms/Donate'

function App() {

  const [progress,setProgress]= useState(0);

  // baseurl is the base path for the api

  const API_URL=process.env.REACT_APP_API ;

  const NEWS_API=process.env.REACT_APP_NEWS_API;

  /*
    Logo's and image's used in this pages are taken from google and different websites
  */



    return (
      <BrowserRouter>
        <Navbar NEWS_API={NEWS_API}    />
        <LoadingBar
        height={5}
        color='red'
        progress={progress}
        />

        <Routes>
          <Route key="home" exact path="/" element={<Home setProgress={setProgress} API_URL={API_URL}/>} />

          <Route key="about" exact path="/about" element={<About />} />

          <Route key="appointment" exact path="/book-an-appointment" element={<Appointment API_URL={API_URL}/>}  />

          <Route key='centers' exact path="/posi/:id"  element={<Center API_URL={API_URL}/>}/>


          <Route key="speciality" path="/speciality/:id" element={<Speciality API_URL={API_URL} />}/>

          <Route key="join" path="/join/:id" element={<JoinUs API_URL={API_URL}/>} />

          <Route key="news" exact path="/news" element={<News NEWS_API={NEWS_API}/>} />
        
          <Route kry="donate" exatc path="/donate" element={<Donate API_URL={API_URL}/>} />
        </Routes>
      </BrowserRouter>
  );
}  	

export default App;
