import React from 'react'
import './Contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faYoutube, faXTwitter, faFacebookF, faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons'

const Contact = () => {
  return (
    <div className='icons'>
      <FontAwesomeIcon icon={faYoutube} className='icon'/>
      <FontAwesomeIcon icon={faInstagram} className='icon'/>
      <FontAwesomeIcon icon={faFacebookF} className='icon'/>
      <FontAwesomeIcon icon={faXTwitter} className='icon'/>
      <FontAwesomeIcon icon={faTiktok} className='icon'/>
      <FontAwesomeIcon icon={faEnvelope} className='icon'/>
    </div>
  )
}

export default Contact