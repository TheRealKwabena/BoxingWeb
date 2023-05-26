import './App.css';
import { useState } from 'react';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import Protected from './auxiliaries/Protected';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export interface Customer {
  name: string
  email: string,
  password: string
  }
export interface CustomerResponse {
  id: string,
  name: string, 
  email: string,
  password: string
}
export interface LoginRequest{
  email: string,
  password: string
}
function App() {
  

  const [customers, setCustomers] = useState<CustomerResponse[]>([]);
  const [loggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [token, setToken] = useState<any>(null);

 


  const addUser = async(customer: Customer) => {
     axios.post("http://localhost:8080/api/auth/register", customer).then((response) => {
      if(response.status === 400) {
        toast.error(response.data, {
          position: "top-center"
        })
        

      }
      else {
        console.log(response.data);
        const data = response.data;
        setCustomers([...customers, data]);
       
        toast.success("User added succesfully", {
          position: "top-center"
        })
        window.location.replace("/login");
      }
      

     

     }
     
     ).catch((err) => {
      console.log(err)
     })
  }
  const loginUser = async(loginRequest: LoginRequest)  => {
   
    
    axios.post("http://localhost:8080/api/auth/login", loginRequest).then((response) => {
      if(response.status === 400) {
        toast.error("Email or password incorrect", {
          position: "top-center"
        })
        

      }
      else {
        console.log(response.data);
        const data = response.data;
        setToken(data.accessToken);
        console.log(token)
        setIsLoggedIn(true);
        window.location.replace("/home");
       
        toast.success("Logged in succesfully", {
          position: "top-center"
        })
      }
      

     

     }
     
     ).catch((err) => {
      console.log(err)
     })

  }


  
  return (
    <BrowserRouter>
    <div className='App'>
    <Routes>
     
      <Route path='/home' element={<HomePage/>}></Route>
      <Route path='/login' element={<LoginPage loginUser={loginUser}/>}></Route>
      <Route path='/register' element={<RegisterPage addUser={addUser}/>}></Route> 
      
    </Routes>
    <ToastContainer/>
    </div>
    </BrowserRouter>
  );
}

export default App;
