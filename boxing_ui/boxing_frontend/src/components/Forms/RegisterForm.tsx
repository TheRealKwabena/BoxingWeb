import React from 'react'
import {useState} from 'react'
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import googlelogo from '../../assets/googleicon.png'
import {Link} from 'react-router-dom'
import { Customer } from '../../App';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export interface IRegisterProps {
  addUser: (customer: Customer) => void
}

const RegisterForm: React.FC<IRegisterProps> = ({addUser}) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = React.useState(false);


    const createUser = (e: any) => {
      e.preventDefault();
      if(name.length <= 0 || password.length <= 0 || email.length <= 0 ) {
      toast.error("Fill all fields before saving", {
        position: "top-center"
      });
      return;
    }
      else {
        const customer: Customer =  {
          "name" : name,
          "email": email,
          "password": password
        }
        addUser(customer);
        
        

        setName("");
        setEmail("");
        setPassword("")
      }
    }

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

  return (
    <form className='register-form'>
    <label htmlFor='name'>Name</label>
    <input type='text' className='input' id='name' value={name} onChange={(e) => setName(e.target.value)}/>
    <label htmlFor='email'>Email</label>
    <input  type='email' id='email' className='input' value={email} autoComplete='off'  onChange={(e) => setEmail(e.target.value)}></input>
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
        <button id='main-register-button' onClick={createUser}>Create Account</button>
        <button id='google-register-button'>
        <div><img src={googlelogo} id='google-image'/>Continue With Google</div>
        </button>
       
    <div className='buttons'>
      
    </div>

 
    <span className='login-link'><Link className='login-link-a' to='/'>Already have an account?</Link></span>
  
      <ToastContainer/>
  
  
  </form>
  )
}

export default RegisterForm