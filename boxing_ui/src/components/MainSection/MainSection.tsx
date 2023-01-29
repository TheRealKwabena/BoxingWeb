import React from 'react'
import {Section, PictureContainer} from './MainSectionElements'
import pic from '../../assets/girlfight.jpg'
import Button from '../Button'
const MainSection = () => {
  return (
  <Section>
    <div className='picture'>
    <img src={pic} height={300} width={400} alt='image'/>
    </div>
    <div className='main-text'>
      <p id='text'>How we got started in this business</p>
      <p>How we got started in this business</p>
      <button className='button'>Click to see more</button>
    </div>
    
  

  </Section>
  )
}

export default MainSection