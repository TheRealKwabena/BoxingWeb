import React from 'react'
import { useState } from 'react'
import LoginForm from '../components/Forms/LoginForm'
import Logo from '../assets/glovesicon.png'
import FrontPage from '../assets/frontpage.jpg'
import { Link } from 'react-router-dom'
import {useForm} from 'react-hook-form'
import { ForgotPasswordEmail } from '../App'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export interface IForgotPassword{
  forgotPassword: (forgotPasswordEmail: ForgotPasswordEmail) => void
}

const ForgotPassword: React.FC<IForgotPassword> = ({forgotPassword}) => {
    const [email, setEmail] = useState<string>("")
    const {
      register,
      handleSubmit,
      formState: { errors }
    } = useForm();

    const sendEmail= (e: any) => {
      if(email.length <= 0 ) {
        toast.error("Fill all fields before saving", {
          position: "top-center"
        });
        return;

      }
      else {
        const emailFormat : ForgotPasswordEmail = {
          "email": email
        }
        
        forgotPassword(emailFormat);
        setEmail("");
      }
    }
   

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
        <input  type='email' id='email' className='input' value={email} autoComplete='off'  {...register("email", { required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i })} 
        onChange={(e) => setEmail(e.target.value)}></input>
        
        <button id='forgot-password-button' onClick={handleSubmit(sendEmail)}>Send</button>
        
       

      
        <span className='login-link'><Link className='login-link-a' to='/'>Already have an account?</Link></span>
  
        {errors.email && <span style={{color: "red", fontSize: "20px"}}>Invalid email format</span>}
    
        </form>
        <img src={FrontPage} className='front-image' />
        <ToastContainer/>
        </>
      )
}

export default ForgotPassword