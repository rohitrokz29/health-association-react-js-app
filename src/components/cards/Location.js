import React from 'react';
import {Link} from 'react-router-dom';

const Location=({url,location,place})=>{
    
    /*
     Location Component-
            It has url ,location name ,place name in props which are beinh used in component.
            It contains Link  to connect to location and showed in new tab when clicked
            It contain an right angle using font-awsome
     */

    return (
        <>
        <div to={url} className="container location-box box is-hoverable is-size-4 has-text-centered is-flex is-flex-direction-row is-align-items-center is-justify-content-center">
                            <Link to={url} target="_black" className="has-text-grey-darker		has-text-weight-semibold">
                                    {location}
                                  </Link>
                                  <div className="icon is-size-1 has-text-dark m-4">
                                  <i className="fa fa-angle-right"></i>
                                  <i className="fa fa-angle-right"></i>
                                </div>

                                <Link to={url} target="_black" className="has-text-grey-darker has-text-weight-semibold	">
                                  {place}
                                </Link>
                          </div>
        </>
    )
}
export default Location;