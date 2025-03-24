import React from "react";
import '../styles/footer.css'; // Fixed the path using forward slashes

const Footer = () => {
  return (
    <footer className="footer py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 mb-4 mb-lg-0">
            <h5 className="fw-bold mb-4">Stride</h5>
            <p>The ultimate destination for footwear enthusiasts. Quality comfort and style in every step.</p>
            <div className="d-flex gap-3 mt-4">
              <a href="#" className="text-white"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="text-white"><i className="fab fa-instagram"></i></a>
              <a href="#" className="text-white"><i className="fab fa-twitter"></i></a>
              <a href="#" className="text-white"><i className="fab fa-pinterest"></i></a>
            </div>
          </div>
          <div className="col-lg-3 mb-4 mb-lg-0">
            <h5 className="mb-4">Shop</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><a href="#" className="text-white text-decoration-none">Men</a></li>
              <li className="mb-2"><a href="#" className="text-white text-decoration-none">Women</a></li>
              <li className="mb-2"><a href="#" className="text-white text-decoration-none">Kids</a></li>
              <li className="mb-2"><a href="#" className="text-white text-decoration-none">Sale</a></li>
              <li className="mb-2"><a href="#" className="text-white text-decoration-none">New Arrivals</a></li>
            </ul>
          </div>
          <div className="col-lg-3 mb-4 mb-lg-0">
            <h5 className="mb-4">Help</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><a href="#" className="text-white text-decoration-none">FAQs</a></li>
              <li className="mb-2"><a href="#" className="text-white text-decoration-none">Shipping & Returns</a></li>
              <li className="mb-2"><a href="#" className="text-white text-decoration-none">Size Guide</a></li>
              <li className="mb-2"><a href="#" className="text-white text-decoration-none">Track Order</a></li>
              <li className="mb-2"><a href="#" className="text-white text-decoration-none">Contact Us</a></li>
            </ul>
          </div>
          <div className="col-lg-3">
            <h5 className="mb-4">Contact</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><i className="fas fa-map-marker-alt me-2"></i> 123 Fashion St, Style City</li>
              <li className="mb-2"><i className="fas fa-phone me-2"></i> (123) 456-7890</li>
              <li className="mb-2"><i className="fas fa-envelope me-2"></i> info@stride.com</li>
            </ul>
            <div className="mt-4">
              <h6 className="mb-2">We Accept</h6>
              <div className="d-flex gap-2">
                <i className="fab fa-cc-visa fs-3"></i>
                <i className="fab fa-cc-mastercard fs-3"></i>
                <i className="fab fa-cc-amex fs-3"></i>
                <i className="fab fa-cc-paypal fs-3"></i>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-4 bg-light" />
        <div className="row">
          <div className="col-md-6 text-center text-md-start">
            <p className="mb-0">&copy; 2025 Stride. All rights reserved.</p>
          </div>
          <div className="col-md-6 text-center text-md-end">
            <a href="#" className="text-white text-decoration-none me-3">Privacy Policy</a>
            <a href="#" className="text-white text-decoration-none">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
