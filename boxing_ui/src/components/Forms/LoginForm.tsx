import React from 'react'
import {useState} from 'react'
import googlelogo from '../../assets/googleicon.png'

const LoginForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
   
      <form className='login-form'>
        <label htmlFor='email'>Email</label>
        <input type='email' id='email' value={email} autoComplete='none'  onChange={(e) => setEmail(e.target.value)}></input>
        <label>Password</label>
        <input type='password' value={password} autoComplete='none' onChange={(e) => setPassword(e.target.value)}></input>
        <div className='buttons'>
        <button id='main-login-button'>Login</button>
        <button id='google-login-button'>
          <div><img src={googlelogo} id='google-image'/>Login With Google</div>
        </button>
        </div>
      
      </form>

    
   
  )
}

export default LoginForm