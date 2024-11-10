import React from 'react'
import './About.css'
import about_img from '../../assets/penuel_img.jpg'

const About = () => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={about_img} className='about-img' alt="about image" />
      </div>
      <div className="about-right">
        <h3>About Penuel</h3>
        <h2>The God behind Penuelism</h2>
        <p>God Penuel, born in Newcastle, is a podcaster, speaker, author, and entrepreneur. He holds a BCom in Accounting & Economics from Rhodes University and an Honours degree from the University of Johannesburg. His ventures include podcasting, book retail, fast food, and financial services. He runs The Mamsie Foundation, a non-profit focused on community upliftment. A prolific content creator on YouTube, Facebook, and TikTok, his videos on finance, parenting, and current affairs regularly reach large audiences.  He has authored 13 books and founded his own spiritual philosophy, Penuelism, which he shares through his book and social media.</p>
      </div>
    </div>
  )
}

export default About