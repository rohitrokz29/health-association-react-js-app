import React from 'react';
import {Link} from 'react-router-dom';

function NewsCard({id,url ,headline, description,publishedAt,image }) {

  return (
  
  <div className="card mx-3 my-3 news-card ">
  <header className="card-header " >
    <p className="card-header-title">
      {headline.slice(0,50)}...
    </p>
    <button className="card-header-icon" >
      
    </button>
  </header>
   <div className="card-content">
    <div className="content">
    <div className="container ">
    	<figure className="image is-256x256">
    		<img src={image} alt="NO IMAGE AVAILABLE" className="image" />
    	</figure>
    </div>
    <div className="conatiner mx-1 has-text-black   is-size-6" >{description.slice(0,150)}...	</div>

			      <br/>
    </div>
  </div> 
  <footer className="card-footer is-flex is-justify-content-space-evenly py-2 is-flex-direction-row">
 		<span className="mx-2 has-text-black">{publishedAt}</span>
 		<Link to={url} target="_blank" className=" px-2 full-report has-text-left  has-text-weight-bold	" > See Full Report </Link>
  </footer>

</div>

  );
}

export default NewsCard;
