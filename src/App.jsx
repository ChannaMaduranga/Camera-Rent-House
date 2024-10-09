import React, { useEffect, useState } from 'react';
import { HashRouter as Router, Route, Routes, useLocation } from 'react-router-dom'; // Use only BrowserRouter
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
import ViewItem from './Components/Product/ViewItem';
import Admin from './Components/Admin/Admin';
import UpdateItem from './Components/Admin/UpdateItem';

function AppContent() {
  const [loading, setLoading] = useState(true);
  const location = useLocation(); // Get the current location

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

  const isAdminLoginRoute = location.pathname === '/Admin-login';

  

  return loading ? (
    <Loading />
  ) : (
    <div>
      {/* Conditionally render Navbar and Footer */}
      {!isAdminLoginRoute && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AllItems" element={<AllItems />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Videos" element={<WatchVideoPage />} />
        <Route path="/Signin" element={<SignIn />} />
        <Route path="/Signup" element={<SignUp />} />
        <Route path="/ViewItem/:id" element={<ViewItem />} />
        <Route path="/Admin-login" element={<Admin />} />
        <Route path="/Admin-login/update-item/:id" element={<UpdateItem />} />
      </Routes>
      {!isAdminLoginRoute && <Footer />}
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
