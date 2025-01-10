import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import react from '../../assets/skill_icons/react.png'
import node from '../../assets/skill_icons/node.png'
import java from '../../assets/skill_icons/java.png'
import mysql from '../../assets/skill_icons/mysql.png'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div className='about'>
      <div className="about-left">
        <h2>Ethic Hadebe: <span className='highlight'>Software developer</span>, <span className='highlight'>tech innovator</span>, and architect of transformative digital solutions. His work reflects a passion for empowering users and businesses through intuitive web and mobile experiences, all designed to solve real-world challenges</h2>
        <Link to="https://www.penuelism.com/" target='_blank' className='skill'><img src={java} alt="" className='skill-icon'/>Java</Link>
        <Link to="https://www.penuelism.com/" target='_blank' className='skill'><img src={node} alt="" className='skill-icon'/>Node.js</Link>
        <Link to="https://www.penuelism.com/" target='_blank' className='skill'><img src={react} alt="" className='skill-icon'/> React</Link>
        <Link to="https://www.penuelism.com/" target='_blank' className='skill'><img src={mysql} alt="" className='skill-icon'/> MySql</Link>
     </div>
     <div className="about-right">
        <img src={about_img} className='about-img' alt="about image" />
      </div>
    </div>
  )
}

export default About