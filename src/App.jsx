// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './component/Home';
import About from './component/About';
import Service from './component/Service';
import Contect from './component/Contect';
import Error from './component/404';
import service_image from "./Service.jpg";
import Navbar from './component/Navbar';
import Create from './component/Create';
import Footer from './component/Footer';
const App = () => {
  return (
    <>
  
    
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About img={service_image}/>} />
          <Route path="/service" element={<Service  />} />
          <Route path="/contect" element={<Contect />} />
          
          <Route path="*" element={<Error/>} />
          {/* <Route path="*" element={<Navigate to="/" />} /> */}
        </Routes>
        <Footer/>
      </Router>
    
    </>
  );
};

export default App;
