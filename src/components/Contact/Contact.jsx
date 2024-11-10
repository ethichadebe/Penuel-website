import React from 'react'
import './Contact.css'
import Envelope from "../../assets/contact/Envelope.png"
import Facebook from "../../assets/contact/Facebook.png"
import Instagram_Circle from "../../assets/contact/Instagram Circle.png"
import TikTok from "../../assets/contact/TikTok.png"
import TwitterX from "../../assets/contact/TwitterX.png"
import YouTube from "../../assets/contact/YouTube.png"

const Contact = () => {
  return (
    <div className='icons'>
      <div className="icon">
        <img src={Facebook} alt="Facebook" />
      </div>
      <div className="icon">
        <img src={Envelope} alt="email" />
      </div>
      <div className="icon">
        <img src={Instagram_Circle} alt="Instagram" />
     </div>
     <div className="icon">
        <img src={TikTok} alt="TikTok" />
     </div>
     <div className="icon">
        <img src={TwitterX} alt="TwitterX" />
     </div>
     <div className="icon">
        <img src={YouTube} alt="YouTube" />
     </div>
    </div>
  )
}

export default Contact