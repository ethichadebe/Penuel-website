import React, { useState } from 'react'
import './Shows.css'
import tlm from "../../assets/shows/tlm.png"
import tlm_vid from "../../assets/shows/tlm.mp4"
import bdme from "../../assets/shows/bdme.png"
import bdme_vid from "../../assets/shows/bdme.mp4"
import eph from "../../assets/shows/eph.png"
import { Link } from 'react-router-dom'

const Shows = () => {
  const [isTlmHovered, setTlmIsHovered] = useState(false);
  const [isBdmeHovered, setBdmeIsHovered] = useState(false);
  
  return (
    <div className="grid-wrapper">
      <div className="grid-slide">
        <img src={tlm} alt="Default Background" className="slide-image"/>
        <video src={tlm_vid} autoPlay loop muted className="slide-video"/>
        <div className="grid-slide-content">
          <h3>Empowering Conversations</h3>
          <p>Discover ideas from world-class leaders.</p>
        </div>
      </div>

      <div className="grid-slide">
        <img src={bdme} alt="Default Background" className="slide-image"/>
        <video src={bdme_vid} autoPlay loop muted className="slide-video"/>
        <div className="grid-slide-content">
          <h3>Life-Changing Insights</h3>
          <p>Learn, grow, and transform through powerful content.</p>
        </div>
      </div>
      <div className="grid-slide">
        <img src="https://via.placeholder.com/300x400" alt="Default Background" className="slide-image"/>
        <video src="https://www.w3schools.com/html/mov_bbb.mp4" autoPlay loop muted className="slide-video"/>
        <div className="grid-slide-content">
          <h3>Inspiring Stories</h3>
          <p>Immerse yourself in engaging visuals and narratives.</p>
        </div>
      </div>
  </div>
)
}

export default Shows