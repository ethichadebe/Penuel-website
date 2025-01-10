import React from 'react'
import './Hero.css'
import Chevron_Down from '../../assets/Chevron-Down.svg'
import { Link } from 'react-scroll'


const Hero = () => {
  return (
    <div className='hero container'>
        <div className="hero-text">
            <h1>Ethic</h1>
            <Link to='about' smooth={true} offset={-260} duration={500}><img src={Chevron_Down} alt="" /></Link>
        </div>
    </div>
  )
}

export default Hero