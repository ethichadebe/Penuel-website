import React from 'react'
import './KonvoHero.css'
import Chevron_Down from '../../assets/Chevron-Down.svg'
import { Link } from 'react-scroll'


const Hero = () => {
  return (
    <div className='konvo-hero container'>
        <div className="konvo-hero-text">
            <Link to='programs' smooth={true} offset={-260} duration={500}><img src={Chevron_Down} alt="" /></Link>
        </div>
    </div>
  )
}

export default Hero