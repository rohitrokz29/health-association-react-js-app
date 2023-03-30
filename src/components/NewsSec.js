import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';



const NewsSec = (props) => {

/*
  News state store the latest news fetched by using the NEWS API which is stored
  in the url=props.NEWS_URL passed from App->Navbar->NewsSec
*/

    const [News, setNews] = useState({ articles:[], loading: true });



        /*
        fetchData function is used to fetch the json file from news api and
         store the data in News state
        */

    useEffect(() => {

          const fetchData = async () => {
              // const    NEWS_URL="https://newsapi.org/v2/top-headlines?category=health&country=us&country=in&apiKey=29fb794937ba45b39ba01b6b9f24cb87&pagesize=5";
              const url = props.NEWS_URL;
              const data = await fetch(url);
              const parsedData = await data.json();
              setNews({ articles: parsedData.articles, loading: false });

          }
        fetchData();
    }, [props])



    return (
        <>

       {/*
        This is the button which shows the loading symbol when the
        news in getting fetched through api
        */}
            {News.loading && <div className="dropdown-item "> <button className=" button is-loading"></button></div>
            }

            {/*
            the articles i.e. nesws data stored in News state are mapped i.e. returned to the navbar dropdown
            */}
            {
                News.articles.map((ele) => {
                    return (
                        <Link key={ele.url} to={ele.url} target='_blank' className="dropdown-item has-text-weight-medium" >{
                            ele.title ? ele.title.slice(0, 50) : '......'
                        }</Link>
                    )
                })
            }

            {/*
            button to see more news
            */}
            <div className="dropdown-item is-centered ">
                <button className="button is-rounded is-centered  has-background-grey-lighter  ">See More</button>
            </div>
        </>
    )
}

export default NewsSec
