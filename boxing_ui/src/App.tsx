import React from 'react';
import {useState} from 'react'
import './App.css';
import TopSection from './components/TopSection/TopSection';

import Footer from './components/Footer/Footer'
import MainSection from './components/MainSection/MainSection';
import LoginPage from './pages/LoginPage';
import {Card, Item} from './AccessoryElements'
import dumbbell from './assets/dumbbell-removebg-preview.png'
import kettlebell from './assets/kettlebell.png'
import running from './assets/running1-removebg-preview.png'
function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [items, setItems] = useState([{
    text: 'exercise',
    image: kettlebell
  },
  {
    text: 'weights', 
    image: dumbbell
  },
  {
    text:'crossfits',
    image: running
  }
])
  return (
    <div className='App'>
      {loggedIn ? <>
      <TopSection/>
      <MainSection/>

      <Card>
        {items.map((item) => <Item>
          <img className='item-img' src={item.image} width={40} height={40} alt='dumbbell'/>
          <span className='item-text'>{item.text}</span>
        </Item>)}
      </Card>
      <Footer/>
      </> : (<LoginPage/>) }
    </div>
  );
}

export default App;
