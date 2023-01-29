import React from 'react'
import {Body, SocialMediaContainer, FooterText} from './Elements'
import {FaLinkedin, FaFacebook, FaInstagram} from 'react-icons/fa'
import {BsFillEnvelopeFill} from 'react-icons/bs'

import './Footer.css'
const Footer = () => {
  return (
    <Body>
      <div className='text-container'>
        <p id='text'>Ready for your <span style={{color: '#C90B0B'}}>next </span>lesson?</p>
        <SocialMediaContainer>
        <ul id='icons'>
          <li> <a href='linkedin.com'> <FaLinkedin/></a></li>
          <li> <a href='facebook.com'> <FaFacebook/></a></li>
          <li> <a href='instagram.com'> <FaInstagram/></a></li>
        </ul>   
      </SocialMediaContainer>
      </div>
      <div className='footer'>
        <div className='left-text'>
        <BsFillEnvelopeFill/>
        <p style={{color: '#FFFFFF'}}>info@boxchampy.com</p>
        </div>
        <div className='right-text'>
        <p style={{color: '#FFFFFF'}}> Terms and Conditions</p>
        <p style={{color: '#FFFFFF'}}> Privacy Policy</p>
        </div>
     
      
      </div>
    
    </Body>
  )
}

export default Footer