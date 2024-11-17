import React from 'react'
import './Contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faYoutube, faXTwitter, faFacebookF, faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons'

const Contact = () => {
  return (
    <div className='icons'>
      <a href="https://www.youtube.com/@Penuelism"  target="_blank"><FontAwesomeIcon icon={faYoutube} className='icon'/></a>
      <a href="https://www.instagram.com/godpenuel/"  target="_blank"><FontAwesomeIcon icon={faInstagram} className='icon'/></a>
      <a href="https://www.facebook.com/penuelism/"  target="_blank"><FontAwesomeIcon icon={faFacebookF} className='icon'/></a>
      <a href="https://x.com/godpenuel"  target="_blank"><FontAwesomeIcon icon={faXTwitter} className='icon'/></a>
      <a href="https://www.tiktok.com/@godpenuel"  target="_blank"><FontAwesomeIcon icon={faTiktok} className='icon'/></a>
      <a href="mailto:penuelism100@gmail.com"  target="_blank"><FontAwesomeIcon icon={faEnvelope} className='icon'/></a>
    </div>
  )
}

export default Contact