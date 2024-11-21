import React, { useState } from 'react'
import './Contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faYoutube, faXTwitter, faFacebookF, faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons'

const Episodes = () => {
  const [social_media] = useState([{icon: faYoutube,
                                  link:"https://www.youtube.com/@Penuelism"},
                                {icon: faInstagram,
                                link: "https://www.instagram.com/godpenuel/"},
                                {icon: faFacebookF,
                                link: "https://www.facebook.com/penuelism/"},
                                {icon: faXTwitter,
                                link: "https://x.com/godpenuel"},
                                {icon: faTiktok,
                                link: "https://www.tiktok.com/@godpenuel"},
                                {icon: faEnvelope,
                                link: "mailto:penuelism100@gmail.com"}])
  return (
    <div className='icons'>
      {social_media.map((social_media) =>(
        <a href={social_media.link} target="_blank"><FontAwesomeIcon icon={social_media.icon} className='icon'/></a>
      ))}
    </div>
  )
}

export default Episodes