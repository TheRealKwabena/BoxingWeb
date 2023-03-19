import './App.css';
import { useState } from 'react';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import axios from 'axios';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export interface Customer {
 name: string
  email: string,
  password: string
}
function App() {
  

  const [customers, setCustomers] = useState<Customer[]>([]);

 


  const addCustomer = async(customer: Customer) => {
     axios.post("http://localhost:8080/api/v1/customers", customer).then((response) => {
      if(response.data === "Email already taken") {
        toast.error("Email already taken", {
          position: "top-center"
        })
        

      }
      else {
        console.log(response.data);
        const data = response.data;
        setCustomers([...customers, data]);
       
        toast.success("Customer added succesfully", {
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
      <Route path='/' element={<HomePage/>}></Route>
      <Route path='/login' element={<LoginPage/>}></Route>
      <Route path='/register' element={<RegisterPage addCustomer={addCustomer}/>}></Route> 
      
    </Routes>
    <ToastContainer/>
    </div>
    </BrowserRouter>
  );
}

export default App;
