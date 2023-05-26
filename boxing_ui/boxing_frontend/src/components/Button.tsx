import React, { ComponentProps } from 'react'

interface ButtonProps {
    text: string
  }
const Button: React.FC<ButtonProps> = (props) => {
  return (
    <button className='button'>
       {props.text}
    </button>
  )
}

export default Button