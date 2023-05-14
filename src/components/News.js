import React,{useState,useEffect} from 'react';
import Loader from './images/load.gif';
import NewsCard from "./cards/NewsCard.js";
import axios from 'axios'
const News =({NEWS_API})=>{
    
    /*
    -- variable loading  is being used to have a look wheather data is fetched or not from axios get request which is set true                     for default and set to false when data is fetched
    -- variable centers is being used to save the location data of centers fetched through axios get request 
     */


/*
REMAINING TO ADD INFINITE LOADER 
*/

const [loading,setLoading]=useState(true);
const [page, setPage] = useState(1)


const [news, setNews] = useState({});
useEffect(() => {
        axios.get(NEWS_API).then((res)=>{
            setNews({articles:res.data.articles});
            console.log(res.data.articles);
        }).catch((err)=>{
            console.log(err);
        })

    return () => {
        setLoading(false)
    };
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
            </div>}
                 <div className=" news-box  is-flex is-justify-content-space-around is-flex-wrap-wrap">
                     {/* {          
               !loading && news.articles.map((ele)=>{
                return(

                        <NewsCard key={ele.url} headline={ele.title} publishedAt={ele.publishedAt} description={ele.description} url={ele.url}   />
                        )
                      })
                    }*/}
                 </div>


</section>
  )
}

export default News;
