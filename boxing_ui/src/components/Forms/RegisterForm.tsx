import React from 'react'
import {useState} from 'react'
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import googlelogo from '../../assets/googleicon.png'
import {Link} from 'react-router-dom'

const RegisterForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = React.useState(false);

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
       
    <div className='buttons'>
        <button id='main-register-button'>Create Account</button>
        <button id='google-register-button'>
        <div><img src={googlelogo} id='google-image'/>Continue With Google</div>
        </button>
    </div>

  
    <span className='login-link'><Link className='login-link-a' to='/login'>Already have an account?</Link></span>

  
  </form>



  )
}

export default RegisterForm