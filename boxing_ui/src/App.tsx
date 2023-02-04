import './App.css';

import RegisterPage from './pages/RegisterPage';

import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  
  return (
    <BrowserRouter>
    <div className='App'>
    <Routes>
      <Route path='/home' element={<HomePage/>}></Route>
      <Route path='/login' element={<LoginPage/>}></Route>
      <Route path='/register' element={<RegisterPage/>}></Route>   
    </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
