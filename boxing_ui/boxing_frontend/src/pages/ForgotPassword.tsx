import React from 'react'
import { useState } from 'react'
import LoginForm from '../components/Forms/LoginForm'
import Logo from '../assets/glovesicon.png'
import FrontPage from '../assets/frontpage.jpg'
import { Link } from 'react-router-dom'
const ForgotPassword = () => {
    const [email, setEmail] = useState<string>("")
    return (
        <>
        <div className='logo-container'>
          <img src={Logo} className='boxinglogo' />
          <p> BoxChamp</p>
        </div>
        <div className='welcome-text'>
        <p id='greetings'>Forgot Password?</p>
        <p id='message'>Please enter your email to receive a randomly generated password</p>
        </div>
        <form className='login-form'>
        <label htmlFor='email'>Your Email</label>
        <input  type='email' id='email' className='input' value={email} autoComplete='off'  onChange={(e) => setEmail(e.target.value)}></input>
        
        <button id='forgot-password-button'>Send</button>
        
       

      
        <span className='login-link'><Link className='login-link-a' to='/'>Already have an account?</Link></span>
  
    
        </form>
        <img src={FrontPage} className='front-image' />
        </>
      )
}

export default ForgotPassword