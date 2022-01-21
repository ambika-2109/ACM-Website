import React from "react";
import Home from "./Home";
import { Routes ,Route } from 'react-router-dom';
import Contacts from "./pages/Contacts.js";
import Service from "./pages/Service";
import Activity from "./pages/Activity";

function App() {
  return (
    <>
    <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/features' element={<Service/>} />
    <Route path='contact' element={<Contacts/>} />
    <Route path='/activities' element={<Activity/>} />
    
    </Routes>
    </>
  );
}

export default App;
