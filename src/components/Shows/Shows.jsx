import React, { useState } from 'react'
import './Shows.css'
import tlm from "../../assets/shows/tlm.png"
import tlm_gif from "../../assets/shows/tlm.gif"
import bdme from "../../assets/shows/bdme.png"
import bdme_gif from "../../assets/shows/bdme.gif"
import eph from "../../assets/shows/eph.png"
import { Link } from 'react-router-dom'

const Shows = () => {
  const [isTlmHovered, setTlmIsHovered] = useState(false);
  const [isBdmeHovered, setBdmeIsHovered] = useState(false);
  
  return (
    <div className="programs">
      <div className="program"
        onMouseEnter={() => setTlmIsHovered(true)}
        onMouseLeave={() => setTlmIsHovered(false)}>
        <img id="tlm"
          src={isTlmHovered ?  tlm_gif : tlm}
          alt="tlm"/>
        <div className="caption">
          <Link to="https://www.youtube.com/@Penuelism/playlists" target='_blank' className='read-more'>
            <h2>The lazy makoti</h2>
            <p>DOPE CONVERSATIONS with Penuel is a YouTube show where Penuel The Black Pen hosts open, thought-provoking discussions on social issues, personal growth, and current affairs with diverse guests.</p>
          </Link>
        </div>
      </div>
      <div className="program">
        <img src={eph} alt="eph" />
        <div className='caption'>
          <Link to="https://www.youtube.com/@konvo_za" target='_blank' className='read-more'>
            <h2>EP Hotspot</h2>
            <p>The Konvo Show, hosted by God Penuel, covers current issues, finance, and relationships with guest insights, offering fresh perspectives,
            </p>
          </Link>
        </div>
      </div>
      <div className="program"
        onMouseEnter={() => setBdmeIsHovered(true)}
        onMouseLeave={() => setBdmeIsHovered(false)}>
        <img id="tlm"
          src={isBdmeHovered ?  bdme_gif : bdme}
          alt="tlm"/>
        <div className="caption">
        <Link to="https://www.youtube.com/@Penuelism/streams" target='_blank' className='read-more'>
          <h2>Youtube lives</h2>
          <p>Youtubbe live videos where Penuel The Black Pen dives into candid discussions on society, philosophy, and personal beliefs. These sessions often explore deep, sometimes controversial topics, encouraging open-minded dialogue and diverse perspectives.</p>
        </Link>
        </div>
      </div>
    </div>
  )
}

export default Shows