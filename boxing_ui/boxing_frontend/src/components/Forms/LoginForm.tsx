import React from 'react'
import {useState} from 'react'
import googlelogo from '../../assets/googleicon.png'
import {Link} from 'react-router-dom'
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import { LoginRequest } from '../../App';
import { ToastContainer, toast } from 'react-toastify';
import { useEffect } from 'react';
import { useForm } from "react-hook-form";
export interface ILoginProps {
  loginUser: (loginRequest: LoginRequest) => void
}
const LoginForm: React.FC<ILoginProps>= ({loginUser}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
 
  
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };
  const authenticateUser = (e: any) => {
    
    if(password.length <= 0 || email.length <= 0 ) {
    toast.error("Fill all fields before saving", {
      position: "top-center"
    });
    return;
  }
    else {
      const loginRequest: LoginRequest =  {
        "email": email,
        "password": password
      }
      loginUser(loginRequest);
      
      

      setEmail("");
      setPassword("")
    }
  }

  return (
   
      <form className='login-form'>
        <label htmlFor='email'>Email</label>
        <input  type='email' id='email' className='input' value={email} autoComplete='off' 
        {...register("email", { required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i })} onChange={(e) => setEmail(e.target.value)} ></input>
        <label htmlFor="password">Password</label>
          <OutlinedInput 
            className="input"
            id='password'
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            value={password} autoComplete='off' 
            onChange={(e) => setPassword(e.target.value)}
          />
           
        <div className='buttons'>
        <button id='main-login-button' onClick={handleSubmit(authenticateUser)}>Login</button>
        <button id='google-login-button'>
          <div><img src={googlelogo} id='google-image'/>Login With Google</div>
        </button>
        </div>

      
        <span className='links'><Link to='/register' className='links-a'>Don't have an account?</Link>
        <Link to='/forgot-password' className='links-a'>Forgot Password?</Link>
        </span>
        {errors.email && <span style={{color: "red", fontSize: "20px"}}>Invalid email format</span>}
    
      
      </form>

    
   
  )
}

export default LoginForm