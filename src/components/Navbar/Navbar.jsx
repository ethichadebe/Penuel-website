import React, { useState } from 'react'
import './Navbar.css'
import logo from '../../assets/Logo.svg'
import menu from '../../assets/menu.png'
import { Link } from 'react-scroll'

const Navbar = () => {
  const [mobileMenu,setMobileMenu] = useState(false);
  const toggleMenu = () =>{
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  }

  return (
    <nav className='container'>
        <img src={logo} alt="" className='logo' />
        <ul className={mobileMenu ? '': 'hide-nav-menu'}>
            <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
            <li><Link to='programs' smooth={true} offset={-260} duration={500}>Shows</Link></li>
            <li><Link to='about' smooth={true} offset={-150} duration={500}>About</Link></li>
            <li><Link to='items' smooth={true} offset={-260} duration={500}>Shop</Link></li>
            <li><Link to='icons' smooth={true} offset={-260} duration={500}>Contact</Link></li>
        </ul>
        <img src={menu} alt="" className='menu-icon' onClick={toggleMenu}/>
    </nav>
  )
}

export default Navbar