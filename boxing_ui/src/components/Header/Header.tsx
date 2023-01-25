import React from 'react'
import Logo from '../../assets/boxingicon.png'
import {Nav, LogoContainer, NavMenu, NavLink, SignInButton } from './HeaderElements'

import './Header.css'
const Header = () => {
  return (
   <>
   <Nav>
    <LogoContainer> 
        <a><img src={Logo} className='logo' /></a>
    <h4 >BOXCHAMP</h4>
    </LogoContainer>
    <NavMenu>
        <ul id='navbar'>
            <li><a href='index.html'>HOME</a></li>
            <li><a href='index.html'>ABOUT</a></li>
            <li><a href='index.html'>LOCATION</a></li>
            <li><a href='index.html'>CONTACT</a></li>
            <li><SignInButton className='btn'>SIGN UP</SignInButton></li>
        </ul>
    </NavMenu>
    
   </Nav>
   </>
  )
}

export default Header