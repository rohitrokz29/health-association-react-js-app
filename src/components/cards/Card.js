import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({url,image,query}) => {
  return (
        <div className="card service-card  has-background-warning  is-hoverable mx-4 my-2 mt-2" >
            <div className="card-header" style={{height:'12vh'}}>
                <Link to={url} className="card-header-title has-text-black is-centered">{query}</Link>
            </div>
            <div className="card-content is-centered p-2">
                    <div className="image ">
                        <img src={image} alt="" style={{width:'100%',height:'25vh'}} />
                    </div>
            </div>
        </div>
    )
}

export default Card
