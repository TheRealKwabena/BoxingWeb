import React from 'react'
import Logo from '../assets/glovesicon.png'
import FrontPage from '../assets/frontpage.jpg'
import RegisterForm from '../components/Forms/RegisterForm'
import { Customer } from '../App'
export interface IRegisterProps {
  addUser: (customer: Customer) => void
}

const RegisterPage: React.FC<IRegisterProps> = ({addUser}) => {
    return (
        <>
        <div className='logo-container'>
          <img src={Logo} className='boxinglogo' />
          <p> BoxChamp</p>
        </div>
        <div className='welcome-text'>
        <p id='greetings'>Create an account</p>
        <p id='message'>Get Started with 10% off your first training</p>
        </div>
        <RegisterForm addUser={addUser}/>
        <img src={FrontPage} className='front-image' />
        </>
      )
}

export default RegisterPage