import React from 'react';
import {Link} from 'react-router-dom';

function NewsCard({id,url ,headline, description,publishedAt,image }) {

  return (
  
  <div className="card mx-3 my-3 news-card ">
  <header className="card-header " >
    <p className="card-header-title">
      {headline?headline.slice(0,50):"No Data Available"}...
    </p>
    <button className="card-header-icon" >
      
    </button>
  </header>
   <div className="card-content">
    <div className="content">
    <div className="container ">
    		<img src={image?image:"https://storage.needpix.com/rsynced_images/black-box-background.jpg"} alt="NO"  style={{width:"40rem",height:"10rem"}} />
    </div>
    <div className="conatiner mx-1 has-text-black   is-size-6" >{description?description.slice(0,150):"No Data Available"}...	</div>

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
