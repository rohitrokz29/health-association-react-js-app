import React from 'react';
import { Link } from 'react-router-dom';
import logo from './images/logo.png';
import NewsSec from './NewsSec';

const Navbar = (props) => {



return(
  <>

        {/* Below is the top most nav-bar of page*/}
    <nav className='navbar   ' style={{backgroundColor:'transparent'}}  >
      <div className=" navbar-brand mx-1 is-centered  ">
        <div className='navbar-item  image is-64x64 '>
          <img src={logo} alt="" />
        </div>
        <div className='mx-1 is-size-4 navbar-item  has-text-black '>Cureit Health Association</div>

        </div>
        <div className="navbar-end  " >

      {/* button to create an Appointment*/}
      <div className="navbar-item is-danger">
      <Link to="/book-an-appointment" className="is-danger n mx-3  button  mt-1   ">Book an Appointment</Link>

      </div>
        </div>

    </nav>



      {/* Below is the main navbar that navigates or helps the user to move throught the app
        */}
    <nav className="navbar is-info main-nav   " style={{ position: 'sticky',top:'0' }}>

      <div className="navbar-menu  ">

        <div className="navbar-start">
          <Link to="/" className="navbar-item  ">
            <figure className='icon  is-size-4'>
              <i className='fa fa-home '></i>
            </figure>
          </Link>

          <div className="navbar-item">
              <Link to='/about ' className="has-text-white is-hoverable">About Curiet</Link>
            </div>


              {/*
              dropdown menu for the multiple specialities of the association guided
              by links embeded in the dropdown elements to the specific speciality page
              */}


          <div className="navbar-item">
            <div className="dropdown is-hoverable">
              <div className="dropdown-trigger" >
                <span aria-controls='dropdown-menu'>Specialities</span>
              </div>
              <div className="dropdown-menu" id='dropdown-menu' role='menu'>
                <div className="dropdown-content">
                  <div className="dropdown-item  columns">
                    <div className="column menu ">

                      <div className='menu-list'><Link    to='/speciality/allergist' >Allergist</Link></div>
                      <div className='menu-list'><Link   to='/speciality/anesthesiologist' >Anesthesiologist</Link></div>
                      <div className='menu-list'><Link   to='/speciality/cardiologist' >Cardiologist</Link></div>
                      <div className='menu-list'><Link   to='/speciality/chiropractor' >Chiropractor</Link></div>
                      <div className='menu-list'><Link   to='/speciality/dentist' >Dentist</Link></div>
                      <div className='menu-list'><Link   to='/speciality/dermatologist' >Dermatologist</Link></div>
                      <div className='menu-list'><Link   to='/speciality/fertility' >Fertility Specialist</Link> </div>
                    </div>

                    <div className="column menu ">


                    <div className='menu-list'><Link   to='/speciality/gynecologist'>Gynecologist</Link></div>
                      <div className='menu-list'><Link   to='/speciality/massage'>Massage Therapist</Link></div>
                      <div className='menu-list'><Link   to='/speciality/midwife'>Midwife</Link></div>
                      <div className='menu-list'><Link   to='/speciality/naturopath'>Naturopath</Link></div>
                      <div className='menu-list'><Link   to='/speciality/neurologist'>Neurologist</Link></div>
                      <div className='menu-list'><Link   to='/speciality/obstetrician'>Obstetrician</Link></div>
                      <div className='menu-list'><Link   to='/speciality/occupational'>Occupational Therapist</Link> </div>

                    </div>
                    <div className="column menu ">
                      <div className='menu-list'><Link   to='/speciality/oncologist'>Oncologist</Link></div>
                      <div className='menu-list'><Link   to='/speciality/ophthalmologist'>Ophthalmologist</Link></div>
                      <div className='menu-list'><Link   to='/speciality/pediatrian'>Pediatrian</Link></div>
                      <div className='menu-list'><Link   to='/speciality/physical'>Physical Therapist</Link> </div>
                      <div className='menu-list'><Link   to='/speciality/podiatrist'>Podiatrist</Link></div>
                      <div className='menu-list'><Link   to='/speciality/psychiatrist'>Psychiatrist</Link></div>
                      <div className='menu-list'><Link   to='/speciality/radiologist'>Radiologist</Link></div>


                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

        {  /*
          dropdown menu for the locations of health centers of the association guided
          by links embeded in the dropdown elements to the specific location page.
          This locations are just for example and not the real centers
          */}


          <div className="navbar-item">

            <div className="dropdown is-hoverable">
              <div className="dropdown-trigger">
                <span aria-controls='dropdown-menu' >Group Health Centers</span>
              </div>
              <div className="dropdown-menu" id="dropdown-menu" role='menu'>
                <div className="dropdown-content">
                  <div className="dropdown-item columns">
                    <div className="column menu">
                      <div className="menu-list">
                        <Link to="/posi/Mumbai">Mumbai</Link>
                      </div>

                      <div className="menu-list">
                        <Link to="/posi/Indore">Indore</Link>
                      </div>
                      <div className="menu-list">
                        <Link to="/posi/Jaipur">Jaipur</Link>
                      </div>
                    </div>
                    <div className="column menu">
                      <div className="menu-list">
                        <Link to="/posi/Delhi">Delhi</Link>
                      </div>

                      <div className="menu-list">
                        <Link to="/posi/Kolkata">Kolkata</Link>
                      </div>
                      <div className="menu-list">
                        <Link to="/posi/Banglore">Banglore</Link>
                      </div>
                    </div>
                    <div className="column menu">
                      <div className="menu-list">
                        <Link to="/posi/Manipur">Manipur</Link>
                      </div>

                      <div className="menu-list">
                        <Link to="/posi/Hyderabad">Hyderabad</Link>
                      </div>
                      <div className="menu-list">
                        <Link to="/posi/GandhiNagar">GandhiNagar</Link>
                      </div>
                    </div>

                  </div>
                  <div className="dropdown-item is-flex is-flex-direction-row is-justify-content-center ">
                    <Link className=' button is-rounded has-background-grey-lighter  has-shadow' to="/posi/all">View All</Link>
                  </div>

                </div>
              </div>
            </div>
          </div>

          {/*
          Below dropdown provides the daily latest health related news guided to  their orignal page links
          and each news component in dropdown is givenn in the <NewsSec/> component.
          */}

          <div className="navbar-item">
            <div className="dropdown is-hoverable">
              <div className="dropdown-trigger">
                <span aria-controls='dropdown-menu' >Health News</span>
              </div>
              <div className="dropdown-menu " id="dropdown-menu">
                <div className="dropdown-content">
                  <NewsSec NEWS_URL={props.NEWS_URL} />

                </div>
              </div>
            </div>
          </div>

          <div className="navbar-item ">
            <div className="dropdown is-hoverable">

            {  /*
              Health tips are shown through below dropdown
                */}

              <div className="dropdown-trigger">
                <span aria-controls='dropdown-menu'>Health Tips</span>

              </div>
              <div className="dropdown-menu  " id='dropdown-menu'>
                <div className="dropdown-content ">


                  {/* //Remain to complete this */}

                </div>
              </div>
            </div>
          </div>


          {/*
          Below dropdown in Careers is if any student/worker want to for
           work in this association followed by a link to the application
          */}

          <div className="navbar-item">
            <div className="dropdown is-hoverable ">
              <div className="dropdown-trigger">
                <button className="button" aria-controls='dropdown-menu'>
                  <span>Careers</span>
                  <span className='icon'>
                    <i className="fa fa-angle-down"></i>
                  </span>
                </button>
              </div>

              <div className="dropdown-menu" id='dropdown-menu' role="menu">
                <div className="dropdown-content">
                  <Link to="/join/Specialist" className="dropdown-item">Sergeon and Specialist</Link>
                  <Link to="/join/Nurse" className="dropdown-item">Nurses</Link>
                  <Link to="/join/Therapist" className="dropdown-item">Therapist</Link>
                  <Link to="/join/Physician" className="dropdown-item">Physician</Link>
                  <Link to="/join/Technologist" className="dropdown-item">Medical Technologists</Link>
                  <Link to="/join/Pharmacist" className="dropdown-item">Pharmacist</Link>
                </div>
              </div>
            </div>
          </div>

        </div>

        {  /*
          Below is the link that guide to help the association page
            */}
        <div className="navbar-end mx-4 has-background-link">
          <Link to="/donate" className="navbar-item">Help the Association</Link>

        </div>
      </div>
    </nav>

  </>

  )
}

export default Navbar;
