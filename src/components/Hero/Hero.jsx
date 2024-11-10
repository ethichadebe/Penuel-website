import React from 'react'
import './Hero.css'
import Chevron_Down from '../../assets/Chevron-Down.svg'
import { Link } from 'react-scroll'


const Hero = () => {
  return (
    <div className='hero container'>
        <div className="hero-text">
            <h1>God Penuel</h1>
            <p>Speaker, author, and founder of Penuelism. Through his books, social media, and The Mamsie Foundation, he inspires and uplifts 
                communities, sharing wisdom on finance, parenting, and life’s purpose.</p>
            <Link to='programs' smooth={true} offset={-260} duration={500}><img src={Chevron_Down} alt="" /></Link>
        </div>
    </div>
  )
}

export default Hero