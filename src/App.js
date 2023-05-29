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
import Donate from './components/forms/Donate';
import GetDoctor from './components/forms/GetDoctor';
import Reports from './components/forms/Reports';
import Doctors from './components/Doctors';


function App() {

  const [progress,setProgress]= useState(0);

 /*
    Logo's and image's used in this pages are taken from google and different websites
  */


    return (
      <BrowserRouter >
        <Navbar     />
        <LoadingBar
        height={5}
        color='red'
        progress={progress}
        />

        <Routes>
          <Route key="home" exact path="/" element={<Home setProgress={setProgress} />} />

          <Route key="about" exact path="/about" element={<About />} />

          <Route key="appointment" exact path="/book-an-appointment" element={<Appointment />}  />

          <Route key='centers' exact path="/posi/:id"  element={<Center />}/>


          <Route key="speciality" path="/speciality/:id" element={<Speciality  />}/>

          <Route key="join" path="/join/:id" element={<JoinUs />} />

          <Route key="news" exact path="/news" element={<News />} />
        
          <Route key="donate" exact path="/donate" element={<Donate />} />

          <Route key="get-doctor" exact path="get-doctor" element={<GetDoctor />} />

          <Route key="health-checkup" exact path="health-checkup" element={<Appointment  />} />

          <Route key="medical-reports" exact path="medical-reports" element={<Reports  />} />

          <Route key='doctors' exact path="all-doctors" element={<Doctors  />} />
        </Routes>
      </BrowserRouter>
  );
}  	

export default App;
