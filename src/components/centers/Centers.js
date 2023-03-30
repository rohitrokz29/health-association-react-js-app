import React from 'react';

const Centers = () => {
  return (
    <>
      <section className=' box mt-4 pd-2 mb-0 ' style={{
        backgroundColor: 'rgb(13, 252, 252,0.2)'
      }} >
        <div className="container has-text-centered mb-5">
        <strong className="  subtitle is-underlined is-size-4  has-text-black has-text-centered mt-4 has-text-weight-bold">
          Words from our Experts
        </strong>
        </div>

        {/*
        this vidoes are random picked video url just for project
        */}
        <div className="video is-flex is-justify-content-space-around mb-5">
        <iframe style={{width:"25vw",height:"35vh" }} className='expert-say'  src="https://www.youtube.com/embed/mrbti-orS7w" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
        <iframe style={{width:"25vw",height:"35vh" }} className='expert-say'  src="https://www.youtube.com/embed/x95X_umdOc8" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
        <iframe style={{width:"25vw",height:"35vh" }} className='expert-say'  src="https://www.youtube.com/embed/zQO5jxwqMMA" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
        </div>

        {/*
        random lines of some words showing what best of our experts advices
        */}

        <div className="container has-text-black is-size-6 has-text-weight-bold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa neque quisquam cupiditate quidem delectus quibusdam quas dignissimos quis amet ducimus, perspiciatis fugiat ad voluptatum commodi magni? Veritatis numquam distinctio quos.</div>
      </section>
    </>
  )
}

export default Centers;
