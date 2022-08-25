import React from "react";
import Home from "../views/Home";
import {Routes, Route} from "react-router-dom";



function App() {
  return (
    <Routes>
      <Route exact path='/' element={<Home/>}/>
    </Routes>
    
      
    
  );
}

export default App;
