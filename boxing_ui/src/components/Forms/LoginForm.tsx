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

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return (
   
      <form className='login-form'>
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
        <button id='main-login-button'>Login</button>
        <button id='google-login-button'>
          <div><img src={googlelogo} id='google-image'/>Login With Google</div>
        </button>
        </div>

      
        <span className='links'><Link to='/register' className='links-a'>Don't have an account?</Link><Link to='/' className='links-a'>Forgot Password?</Link></span>
    
      
      </form>

    
   
  )
}

export default LoginForm