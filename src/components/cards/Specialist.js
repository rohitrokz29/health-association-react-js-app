import React from 'react';

const Specialist = ({gender,name,qualification}) => {
  const fimage='https://img.freepik.com/free-vector/doctor-background-design_1270-62.jpg?w=740&t=st=1677765123~exp=1677765723~hmac=57cc46b6b4df4514e3922cf163b768630ccc1de2f1544b71fa7c1b0649ec9cd6';
 const mimage="https://img.freepik.com/free-vector/doctor-character-background_1270-84.jpg?w=740&t=st=1677765287~exp=1677765887~hmac=bc7c0b5577ee0beadeb65e92dcb508f82c244ad59afcd8fc72d0f0aeae41c2fb";
  return (
    <div className='card has-background-warning my-2 mx-1 is-light'>
      <div className="card-header is-centered ">
        <div className="card-header-title  is-centered image ">
          <img src={gender==='male'?mimage:fimage} style={{height:'24vh'}} alt="" />

        </div>
      </div>
      <div className="card-header-title mb-0 pb-0 is-centered">
      <span className='subtitle has-text-black has-text-weight-semibold'>{name}</span>
      </div>
      <div className="card-header-title mt-0 pt-0 is-centered">
    <span className="has-text-black">{qualification?qualification:""} </span>
      </div>
    </div>
  )
}

export default Specialist;
