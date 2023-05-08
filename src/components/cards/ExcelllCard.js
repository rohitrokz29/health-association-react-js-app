import React from 'react';

const ExcelllCard = ({image,url,description,speciality}) => {

    /*
      return returns a card containing the information recieved in props
      */

    return (

        <div className='card has-background-grey-lighter is-hoverable my-2 mx-1'>
            <div className="card-header ">
                <div className="card-header-title  is-centered "  >
                    <figure className="image is-transparent " >
                        <img src={image} alt="" style={{height:'24vh'}}/>
                    </figure>

                </div>

            </div>
            <div className="card-header-title pb-0 mb-0 is-centered">
               <span className='subtitle has-text-black has-text-weight-semibold'>{speciality}</span>
            </div>
            <div className="card-content pt-1 mt-0 is-centered has-text-black">
                {description.length<60?description:(description.slice(0,60)+'....')}
                    <br/>
                    <a href={url} className="button is-rounded is-hoverable is-small is-centered has-text-dark is-grey-lighter">Read More</a>
            </div>
        </div>
    )
}

export default ExcelllCard
