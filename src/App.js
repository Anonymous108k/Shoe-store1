import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import SaleBanner from "./components/SaleBanner";
import CategoriesSection from "./components/CategoriesSection";
import FeaturedProducts from "./components/FeaturedProducts";
import Benefits from "./components/Benefits";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login"; 
function App() {
  return (
    <Router>
      {/* Navbar is displayed on every page */}
      <Navbar />

      {/* Conditional rendering of pages */}
      <Routes>
        {/* Home Page */}
        <Route path="/" element={
          <>
            <HeroSection />
            <SaleBanner />
            <CategoriesSection />
            <FeaturedProducts />
            <Benefits />
            <Newsletter />
          </>
        } />

        {/* SignUp Page */}
        <Route path="/signup" element={<SignUp />} />

        {/* Login Page */}
        <Route path="/login" element={<Login />} />

      </Routes>

      {/* Footer is displayed on every page */}
      <Footer />
    </Router>
  );
}

export default App;