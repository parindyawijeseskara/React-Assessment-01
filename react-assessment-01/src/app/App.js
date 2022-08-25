import React from "react";
import Home from "../views/Home";
import CustomerForm from "../views/CustomerForm";
import {Routes, Route} from "react-router-dom";
import ItemForm from "../views/ItemForm";




function App() {
  return (
    <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route exact path='customerForm' element={<CustomerForm/>}/>
      <Route  path='itemForm' element={<ItemForm/>}/>
    </Routes>
    
      
    
  );
}

export default App;
