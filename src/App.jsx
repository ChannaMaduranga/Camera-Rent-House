import React, { useEffect, useState } from 'react';
import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom';  // Import both routers
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

function AppContent() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return loading ? (
    <Loading />
  ) : (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AllItems" element={<AllItems />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Videos" element={<WatchVideoPage />} />
        <Route path="/Signin" element={<SignIn />} />
        <Route path="/Signup" element={<SignUp />} />
      </Routes>
      <Footer />
    </div>
  );
}

function App() {
  const Router = process.env.NODE_ENV === 'production' ? HashRouter : BrowserRouter;  // Switch router based on environment

  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
