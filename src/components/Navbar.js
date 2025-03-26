import React from "react";
import '../styles/navbar.css'; 

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
      <div className="container-fluid px-5">
        <a className="navbar-brand" href="#">STRIDE</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item"><a className="nav-link" href="#">Home</a></li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="menDropdown" data-bs-toggle="dropdown">Men</a>
              <ul className="dropdown-menu dropdown-menu-clean" aria-labelledby="menDropdown">
                <li><span className="dropdown-header">Categories</span></li>
                <li><a className="dropdown-item" href="#">Sneakers</a></li>
                <li><a className="dropdown-item" href="#">Formal</a></li>
                <li><a className="dropdown-item" href="#">Casual</a></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="womenDropdown" data-bs-toggle="dropdown">Women</a>
              <ul className="dropdown-menu dropdown-menu-clean" aria-labelledby="womenDropdown">
                <li><span className="dropdown-header">Categories</span></li>
                <li><a className="dropdown-item" href="#">Sneakers</a></li>
                <li><a className="dropdown-item" href="#">Running</a></li>
                <li><a className="dropdown-item" href="#">Casual</a></li>
              </ul>
            </li>
            <li className="nav-item"><a className="nav-link" href="#">Sale</a></li>
            <li className="nav-item"><a className="nav-link" href="#">New</a></li>
          </ul>
          <div className="navbar-tools d-flex align-items-center">
            <form className="d-flex me-3">
              <input 
                className="form-control form-control-sm search-input" 
                type="search" 
                placeholder="Search" 
                aria-label="Search"
              />
            </form>
            <div className="nav-icons">
              <a href="#" className="text-dark me-3"><i className="fas fa-user"></i></a>
              <a href="#" className="text-dark position-relative">
                <i className="fas fa-shopping-cart"></i>
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark">3</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;