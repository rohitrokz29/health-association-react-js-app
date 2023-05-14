import React from 'react';
import {Link} from 'react-router-dom';

const Location=({url,center,area})=>{
    
    /*
     Location Component-
            It has url ,location name ,place name in props which are beinh used in component.
            It contains Link  to connect to location and showed in new tab when clicked
            It contain an right angle using font-awsome
     */

    return (
        <>
        <Link to={url}  target="_blank" className="container location-box box is-hoverable is-size-4 has-text-centered is-flex is-flex-direction-row is-align-items-center is-justify-content-center">
                            <div  className="has-text-black		has-text-weight-semibold">
                                    {center}
                                  </div>
                                  <div className="icon has-text-black is-size-1 has-text-dark m-4">
                                  <i className="fa fa-angle-right has-text-black"></i>
                                  <i className="fa fa-angle-right has-text-black"></i>
                                </div>

                                <div  className="has-text-black has-text-weight-semibold	">
                                  {area}
                                </div>
                          </Link>
        </>
    )
}
export default Location;


// here create a button on side and apply js such tjhate on click it opens  a box down and shows ainformation about it