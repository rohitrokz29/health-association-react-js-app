import React,{useState} from 'react';
import Loader from './images/load.gif';
import NewsCard from "./cards/NewsCard.js";

const News =({baseurl})=>{
    
    /*
    -- variable loading  is being used to have a look wheather data is fetched or not from axios get request which is set true                     for default and set to false when data is fetched
    -- variable centers is being used to save the location data of centers fetched through axios get request 
     */


/*
REMAINING TO ADD INFINITE LOADER 
*/

const [loading,setLoading]=useState(false);


const news=[
    {
      "id":"3873h3739gub393",
      "headline":" eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem",
      "description":"w Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? gdckcbke d efk kbfed,l flkdn lkef nd f fn",
      "url":"htdcbrib jdmfr",
      "publishedAt":"25 Jan 2023"
      },
{
      "id":"387hd3739gub393",
      "headline":"THIS eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem IS HEATLINE JKDBKJBKCJB",
      "description":"wg Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? dckcbke d efk kbfed,l flkdn lkef nd f fn",
      "url":"htdcbrib jdmfr",
      "publishedAt":"25 Jan 2023"
      },
{
      "id":"373hd3739gub393",
      "headline":"THIS I eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatemS HEATLINE JKDBKJBKCJB",
      "description":"wgdckcbke d Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? efk kbfed,l flkdn lkef nd f fn",
      "url":"htdcbrib jdmfr",
      "publishedAt":"25 Jan 2023"
      },
{
      "id":"3873hd3739gub33",
      "headline":"THIS IS HE eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatemATLINE JKDBKJBKCJB",
      "description":"wgdckcbke d Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? efk kbfed,l flkdn lkef nd f fn",
      "url":"htdcbrib jdmfr",
      "publishedAt":"25 Jan 2023"
      },
{
      "id":"3873hd339gub393",
      "headline":"THIS IS H eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatemEATLINE JKDBKJBKCJB",
      "description":"wgdckcbke d Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? efk kbfed,l flkdn lkef nd f fn",
      "url":"htdcbrib jdmfr",
      "publishedAt":"25 Jan 2023"
      },
{
      "id":"3873hd373gub393",
      "headline":"THIS IS HEATLINE JKD eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatemBKJBKCJB",
      "description":"wgdckcbke d Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?s efk kbfed,l flkdn lkef nd f fn",
      "url":"htdcbrib jdmfr",
      "publishedAt":"25 Jan 2023"
      }


  ]
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
                      {          
               !loading && news.map((ele)=>{
                return(

                        <NewsCard key={ele.id} headline={ele.headline} publishedAt={ele.publishedAt} description={ele.description} url={ele.url}   />
                        )
                      })
                    }
                 </div>


</section>
  )
}

export default News;
