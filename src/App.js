import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home"; // Import the new Home.js file
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";

function App() {
  return (
    <Router>
      {/* Navbar is displayed on every page */}
      <Navbar />

      {/* Conditional rendering of pages */}
      <Routes>
        {/* Home Page */}
        <Route path="/" element={<Home />} />

        {/* SignUp Page */}
        <Route path="/signup" element={<SignUp />} />

        {/* Login Page */}
        <Route path="/login" element={<Login />} />

        {/* Cart Page */}
        <Route path="/cart" element={<Cart />} />

        {/* Checkout Page */}
        <Route path="/checkout" element={<Checkout />} />
        
      </Routes>

      {/* Footer is displayed on every page */}
      <Footer />
    </Router>
  );
}

export default App;