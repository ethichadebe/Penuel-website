import React, { useState } from 'react'
import './Contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faYoutube, faXTwitter, faFacebookF, faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons'

const Episodes = () => {
  const [social_media] = useState([{
                                    id: 'youtube',
                                    icon: faYoutube,
                                    link:"#"},{
                                    id: 'Instagram',
                                    icon: faInstagram,
                                    link: "#"},{
                                    id: 'Facebook',
                                    icon: faFacebookF,
                                    link: "#"},{
                                    id: 'Twitter',
                                    icon: faXTwitter,
                                    link: "#"},{
                                    id: 'Tiktok',
                                    icon: faTiktok,
                                    link: "#"},{
                                    id: 'Envelope',  
                                    icon: faEnvelope,
                                    link: "#"}])
  return (
    <div className='icons'>
      {social_media.map((social_media) =>(
        <a href={social_media.link} key={social_media.id} target="_blank"><FontAwesomeIcon icon={social_media.icon} className='icon'/></a>
      ))}
    </div>
  )
}

export default Episodes