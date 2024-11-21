import React, { useState } from 'react'
import { useParams, useLocation } from 'react-router-dom'
import './Episodes.css'
import penuel_bw from "../../assets/penuel_img.jpg"

const Episodes = () => {
  const [social_media] = useState([{thumbnail: "",
                                    title: "",
                                    description: "",
                                    link: ""}])


  return (
    <>
    <div className='episodes'>
      <div className="episodes-left">
        <img src={penuel_bw} className='episodes-img' alt={"episodes.title"} />
      </div>
      <div className="episodes-right">
        <h2>{"episodes.title"}</h2>
        <p>The mind thrives on perception, so take charge of your thoughts and live in the present. Embrace minimalism, foster community, 
          and respect money while keeping resources within trusted circles. Adopt helpful beliefs, reject harmful ones, and judge by character, 
          not traits.</p>
        <h3>Watch now</h3>
     </div>
    </div>
    <div className='episodes'>
      <div className="episodes-left">
        <img src={penuel_bw} className='episodes-img' alt={"episodes.title"} />
      </div>
      <div className="episodes-right">
        <h2>{"episodes.title"}</h2>
        <p>The mind thrives on perception, so take charge of your thoughts and live in the present. Embrace minimalism, foster community, 
          and respect money while keeping resources within trusted circles. Adopt helpful beliefs, reject harmful ones, and judge by character, 
          not traits.</p>
        <h3>Watch now</h3>
     </div>
    </div>
    
    </>
  )
}

export default Episodes