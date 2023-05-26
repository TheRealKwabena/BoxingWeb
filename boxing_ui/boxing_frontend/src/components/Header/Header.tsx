import React from 'react'
import Logo from '../../assets/glovesicon.png'
import {Nav, LogoContainer, NavMenu, NavLink, SignInButton } from './HeaderElements'
import {Link} from 'react-router-dom'
import './Header.css'
import { ILogoutProps } from '../../pages/HomePage'
const Header:React.FC<ILogoutProps> = ({logoutUser}) => {
  return (
   <>
   <Nav>
    <LogoContainer> 
        <a><img src={Logo} className='logo' /></a>
    <h4 >BOXCHAMP</h4>
    </LogoContainer>
    <NavMenu>
        <ul id='navbar'>
            <li><Link to='/home'>HOME</Link></li>
            <li><Link to='/home'>ABOUT</Link></li>
            <li><Link to='/home'>LOCATION</Link></li>
            <li><Link to='/home'>CONTACT</Link></li>
            <li><Link to='/' onClick={
                logoutUser
            }><SignInButton className='btn'>SIGN OUT</SignInButton></Link></li>
        </ul>
    </NavMenu>
    
   </Nav>
   </>
  )
}

export default Header