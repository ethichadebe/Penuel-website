import React, { useState } from 'react'
import './Contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faYoutube, faXTwitter, faFacebookF, faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons'

const Episodes = () => {
  const [social_media] = useState([{icon: faYoutube,
                                  link:"#"},
                                {icon: faInstagram,
                                link: "#"},
                                {icon: faFacebookF,
                                link: "#"},
                                {icon: faXTwitter,
                                link: "#"},
                                {icon: faTiktok,
                                link: "#"},
                                {icon: faEnvelope,
                                link: "#"}])
  return (
    <div className='icons'>
      {social_media.map((social_media) =>(
        <a href={social_media.link} target="_blank"><FontAwesomeIcon icon={social_media.icon} className='icon'/></a>
      ))}
    </div>
  )
}

export default Episodes