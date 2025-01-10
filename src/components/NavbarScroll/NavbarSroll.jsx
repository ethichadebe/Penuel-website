import React, { useState } from 'react'
import './NavbarSroll.css'
import logo from '../../assets/Logo.png'
import mail from '../../assets/mail.png'
import menu from '../../assets/menu.png'
import { Link } from 'react-scroll'
//import { Link } from 'react-router-dom'

const Navbar = () => {
  const [mobileMenu,setMobileMenu] = useState(false);
  const toggleMenu = () =>{
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  }

  return (
    <nav className='container'>
        <Link to={`/home`}><img src={logo} alt="" className='logo' /></Link>
        <ul className={mobileMenu ? '': 'hide-nav-menu'}>
            <li><Link to={`/home`} >Home</Link></li>
            <li><Link to='about' smooth={true} offset={-150} duration={500}>About</Link></li>
            <li><Link to='icons' smooth={true} offset={-260} duration={500}>Projects</Link></li>
        </ul>
        <img src={menu} alt="" className='menu-icon' onClick={toggleMenu}/>
        <img src={mail} alt="" className='mail-icon' onClick={toggleMenu}/>
    </nav>
  )
}

export default Navbar