import React from 'react'
import LoginForm from '../components/Forms/LoginForm'
import Logo from '../assets/glovesicon.png'
import FrontPage from '../assets/frontpage.jpg'
const LoginPage = () => {
  return (
    <>
    <div className='logo-container'>
      <img src={Logo} className='boxinglogo' />
      <p> BoxChamp</p>
    </div>
    <div className='welcome-text'>
    <p id='greetings'>Welcome back!!</p>
    <p id='message'>Enter your credentials to continue your journey</p>
    </div>
    <LoginForm/>
    <img src={FrontPage} className='front-image' />
    </>
  )
}

export default LoginPage