import React from 'react'
import Logo from '../../assets/glovesicon.png'
import {Nav, LogoContainer, NavMenu, NavLink, SignInButton } from './HeaderElements'
import {Link} from 'react-router-dom'
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
            <li><Link to='/'>HOME</Link></li>
            <li><Link to='/'>ABOUT</Link></li>
            <li><Link to='/'>LOCATION</Link></li>
            <li><Link to='/'>CONTACT</Link></li>
            <li><Link to='/register'><SignInButton className='btn'>SIGN UP</SignInButton></Link></li>
        </ul>
    </NavMenu>
    
   </Nav>
   </>
  )
}

export default Header