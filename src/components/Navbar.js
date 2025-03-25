import React from "react";
import '../styles/navbar.css'; 

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand fs-1 fw-bold" href="#">Stride</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <a className="nav-link fs-5" href="#">Home</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link fs-5 dropdown-toggle" href="#" id="menDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Men
              </a>
              <ul className="dropdown-menu" aria-labelledby="menDropdown">
                <li><h6 className="dropdown-header fs-6">Casual</h6></li>
                <li><a className="dropdown-item" href="#">Sneakers</a></li>
                <li><a className="dropdown-item" href="#">Loafers</a></li>
                <li><a className="dropdown-item" href="#">Slip-Ons</a></li>
                <li><hr className="dropdown-divider"/></li>
                <li><h6 className="dropdown-header fs-6">Formal</h6></li>
                <li><a className="dropdown-item" href="#">Oxfords</a></li>
                <li><a className="dropdown-item" href="#">Derbies</a></li>
                <li><a className="dropdown-item" href="#">Monk Straps</a></li>
                <li><hr className="dropdown-divider"/></li>
                <li><h6 className="dropdown-header fs-6">Sports</h6></li>
                <li><a className="dropdown-item" href="#">Running Shoes</a></li>
                <li><a className="dropdown-item" href="#">Training Shoes</a></li>
                <li><hr className="dropdown-divider"/></li>
                <li><h6 className="dropdown-header fs-6">Boots</h6></li>
                <li><a className="dropdown-item" href="#">Chelsea Boots</a></li>
                <li><a className="dropdown-item" href="#">Hiking Boots</a></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link fs-5 dropdown-toggle" href="#" id="womenDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Women
              </a>
              <ul className="dropdown-menu" aria-labelledby="womenDropdown">
                <li><h6 className="dropdown-header fs-6">Casual</h6></li>
                <li><a className="dropdown-item" href="#">Sneakers</a></li>
                <li><a className="dropdown-item" href="#">Slip-Ons</a></li>
                <li><a className="dropdown-item" href="#">Loafers</a></li>
                <li><hr className="dropdown-divider"/></li>
                <li><h6 className="dropdown-header fs-6">Sports</h6></li>
                <li><a className="dropdown-item" href="#">Running Shoes</a></li>
                <li><a className="dropdown-item" href="#">Training Shoes</a></li>
                <li><hr className="dropdown-divider"/></li>
                <li><h6 className="dropdown-header fs-6">Boots</h6></li>
                <li><a className="dropdown-item" href="#">Chelsea Boots</a></li>
                <li><a className="dropdown-item" href="#">Ankle Boots</a></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link fs-5 dropdown-toggle" href="#" id="kidsDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Kids
              </a>
              <ul className="dropdown-menu" aria-labelledby="kidsDropdown">
                <li><h6 className="dropdown-header fs-6">Everyday</h6></li>
                <li><a className="dropdown-item" href="#">Sneakers</a></li>
                <li><a className="dropdown-item" href="#">Slip-Ons</a></li>
                <li><hr className="dropdown-divider"/></li>
                <li><h6 className="dropdown-header fs-6">Sports</h6></li>
                <li><a className="dropdown-item" href="#">Running Shoes</a></li>
                <li><a className="dropdown-item" href="#">Trainers</a></li>
                <li><hr className="dropdown-divider"/></li>
                <li><h6 className="dropdown-header fs-6">Boots</h6></li>
                <li><a className="dropdown-item" href="#">Ankle Boots</a></li>
                <li><a className="dropdown-item" href="#">Rain Boots</a></li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link fs-5" href="#">Sale</a>
            </li>
            <li className="nav-item">
              <a className="nav-link fs-5" href="#">New Arrivals</a>
            </li>
          </ul>
          <div className="d-flex align-items-center">
            <form className="d-flex me-3">
              <input className="form-control me-2 fs-4" type="search" placeholder="Search shoes..."/>
              <button className="btn btn-outline-light fs-5" type="submit">
                <i className="fas fa-search"></i>
              </button>
            </form>
            <div className="text-light">  
              <a href="#" className="text-light me-3"><i className="fas fa-user fs-3"></i></a>
              <a href="#" className="text-light position-relative">
                <i className="fas fa-shopping-cart fs-3"></i>
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  3
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
