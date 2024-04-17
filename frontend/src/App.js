import React, { useState, useEffect } from 'react';
import './App.css';
import { InfinitySpin} from 'react-loader-spinner'

import Landing from './components/Home/body/Landing';
import Voter from './components/Home/voter/Voter';
import Admin from './components/Home/admin/Admin';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import { Routes, Route, useLocation } from "react-router-dom";
import Votecount from './components/Home/voter/Votecount';
import RamMandir from './components/Home/body/info/RamMandir';
import Parliament from './components/Home/body/info/Parliament';
import Indianculture from './components/Home/body/info/Indianculture';
import BharatMandapam from './components/Home/body/info/BharatMandapam';
import AshokStambh from './components/Home/body/info/AshokStambh';
import Footer from './components/Home/Footer/Footer';
import CardInfo from './components/Home/body/manageNavigation/CardInfo';
import ProfilePage from './UserPRofile';
import Navbar from './components/Home/navbar/Navbar';
import PagenotFound from './PagenotFound';

function App() {
  const location = useLocation();
  const [loading, setLoading] = useState(true); // Setting initial state to true

  useEffect(() => {
    setTimeout(() => {
      setLoading(false); // Setting loading to false after 4 seconds
    }, 1000);
  }, []);

  const shouldShowFooter = () => {
    return !['/signup', '/login', '/admin','/*'].includes(location.pathname);
  };

  const shouldShowNavbar = () => {
    return !['/', '/signup', '/login', '/admin', '/user/profile', "/*"].includes(location.pathname);
  };

  return (
    <div className="App">
      
      {loading ? ( // Checking if loading state is true
        <div className='app-loading'><InfinitySpin
  visible={true}
  width="200"
  color="white"
  ariaLabel="infinity-spin-loading"
  /></div>
      ) : (
      <>
      {shouldShowNavbar() && <div style={{ padding: "10px" }} className='vote-navbar'><Navbar /></div>}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route exact path="/user/profile" element={<Voter />} />
        <Route exact path="/votes/count" element={<Votecount />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/ram-mandir" element={<RamMandir />} />
        <Route path="/parliament" element={<Parliament />} />
        <Route path="/culture" element={<Indianculture />} />
        <Route path="/bhart-mandapam" element={<BharatMandapam />} />
        <Route path="/ashok-stambh" element={<AshokStambh />} />
        <Route path="/eci/:id" element={<CardInfo />} />
        <Route path="/image" element={<ProfilePage />} />
        <Route path='*' element={<PagenotFound/>} />
      </Routes>
      {shouldShowFooter() && <Footer />}</>
    )}
    </div>
  );
}

export default App;
