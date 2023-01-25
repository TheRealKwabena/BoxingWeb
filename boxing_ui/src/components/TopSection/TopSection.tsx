import React from 'react'
import Header from '../Header/Header'
import {Section, TextSection} from './TopSectionElements'
import './TopSection.css'
const TopSection = () => {
  return (
    <Section className='section'>
     <Header/>
     <TextSection>
      <h3 >Fight Like a <span style={{color: '#C90B0B'}}>Champion</span></h3>
     </TextSection>
    </Section>
  )
}

export default TopSection