import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import AllItems from './Components/AllItems/AllItems';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';

function App() {
  return (
    <Router>
      <div>
        <Navbar /> {/* Navbar inside Router */}
        <Routes>
          <Route path="/" element={<Home />} /> {/* Define routes here */}
          <Route path="/AllItems" element={<AllItems/>}/>
          <Route path="/About" element={<About/>}/>
          <Route path="/Contact" element={<Contact/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
