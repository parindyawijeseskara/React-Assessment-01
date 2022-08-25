import React from "react";
import Home from "../views/Home";
import CustomerForm from "../views/CustomerForm";
import {Routes, Route} from "react-router-dom";




function App() {
  return (
    <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route exact path='customerForm' element={<CustomerForm/>}/>
    </Routes>
    
      
    
  );
}

export default App;
