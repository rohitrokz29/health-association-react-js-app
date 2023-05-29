import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';


const NewsSec = () => {

    /*
      News state store the latest news fetched by using the NEWS API which is stored
      in the url=props.NEWS_URL passed from App->Navbar->NewsSec
    */

    const [News, setNews] = useState({ articles: [], loading: true });



    /*
    fetchData function is used to fetch the json file from news api and
     store the data in News state
    */

    useEffect(() => {

        const fetchData = async () => {

            const data = await axios.get(`${process.env.REACT_APP_NEWS_API}&pageSize=6`);
            setNews({ articles: data.data.articles, loading: false });

        }
        fetchData();
    }, [])



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
                        <Link key={ele.url} to={ele.url} target='_blank' className="dropdown-item has-text-weight-medium news-bar" >{
                            ele.title ? ele.title.slice(0, 50) : '......'
                        }</Link>
                    )
                })
            }

            {/*
            button to see more news
            */}
            <div className="dropdown-item is-centered is-flex is-justify-content-center">
                <Link to="/news">
                    <div className="button is-rounded is-centered  has-background-grey-lighter  ">See More</div>
                </Link>
            </div>
        </>
    )
}

export default NewsSec
