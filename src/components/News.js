import React,{useState,useEffect} from 'react';
import Loader from './images/load.gif';
import NewsCard from "./cards/NewsCard.js";
import axios from 'axios'
const News =()=>{
    
    /*
    -- variable loading  is being used to have a look wheather data is fetched or not from axios get request which is set true                     for default and set to false when data is fetched
    -- variable centers is being used to save the location data of centers fetched through axios get request 
     */


/*
REMAINING TO ADD INFINITE LOADER 
*/

const [loading,setLoading]=useState(true);


const [news, setNews] = useState({});
useEffect(() => {
    document.title="Health News- Cureit Health Association";
    const fetchData= async ()=>{
        const res=await axios.get(process.env.REACT_APP_NEWS_API);
        console.log(res);

    setNews(res.data.articles);
    setLoading(false);
    }
    fetchData();
}, [])


  return (
      <section style={{
                  backgroundColor: 'rgb(0,0 , 0,0.15)'
              }} className="container is-centered mt-6 pb-6 ">

                  <div className="container subtitle has-text-centered is-centered mt- mb-5 pb-3 ">
                        <strong className='has-text-black is-size-3 is-underlined'>Health </strong>
                        <strong className='has-text-black  is-size-3 is-underlined'>News</strong>
                    </div>
        {loading && <div className="is-flex is-justify-content-center is-align-items-center m-0 p-0" style={{height:'70vh'}}>
            <img className="image" alt="Loading..." src={Loader}  style={{height:"12rem",width:"12rem" ,fontSize:"3rem",}}/>
            </div>
        }
            
                {
                    !loading && 
              <div className=" news-box  is-flex is-justify-content-space-around is-flex-wrap-wrap">
                     {   news.map((ele,index)=>{
                            return(
                        <NewsCard key={index} image={ele.urlToImage} headline={ele.title} publishedAt={ele.publishedAt} description={ele.description} url={ele.url}   />
                            )
                        })
                    }
                 </div>
                }

        


</section>
  )
}

export default News;
