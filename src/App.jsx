import React, { useEffect, useState } from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom'; // Change to HashRouter
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import AllItems from './Components/AllItems/AllItems';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import WatchVideoPage from './Components/LearnBanner/WatchVideoPage';
import SignIn from './Components/SignIn/SignIn';
import SignUp from './Components/SignUp/SignUp';
import Loading from './Components/Loading/Loading';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 2000,  // Duration of the animation in ms (optional)
    });
  }, []);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Simulate a loading delay

    return () => clearTimeout(timer);
  }, []);

  return loading ? (
    <Loading />
  ) : (
    <Router>
      <div>
        <Navbar /> {/* Navbar inside Router */}
        <Routes>
          <Route path="/" element={<Home />} /> {/* Define routes here */}
          <Route path="/AllItems" element={<AllItems/>}/>
          <Route path="/About" element={<About/>}/>
          <Route path="/Contact" element={<Contact/>}/>
          <Route path="/Videos" element={<WatchVideoPage/>}/>
          <Route path="/Signin" element={<SignIn/>}/>
          <Route path="/Signup" element={<SignUp/>}/>
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
