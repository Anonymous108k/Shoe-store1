import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/signup.css";

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({});
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [showFailurePopup, setShowFailurePopup] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const popupRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setShowSuccessPopup(false);
        setShowFailurePopup(false);
      }
    };

    if (showSuccessPopup || showFailurePopup) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showSuccessPopup, showFailurePopup]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  const validateForm = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!emailRegex.test(formData.email)) newErrors.email = "Invalid email format";

    if (!formData.password.trim()) newErrors.password = "Password is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const response = await fetch('http://localhost:5000/api/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
        });
  
        // Removed: const result = await response.json();
        await response.json(); // still await to ensure it's handled
  
        if (response.ok) {
          setShowSuccessPopup(true);
          setShowFailurePopup(false);
          setTimeout(() => navigate('/'), 2000);
        } else {
          setShowFailurePopup(true);
          setShowSuccessPopup(false);
        }
      } catch (error) {
        console.error('Login error:', error);
        setShowFailurePopup(true);
      }
    }
  };
  
  

  const handleGoogleLogin = () => console.log("Google Login Clicked");
  const handleFacebookLogin = () => console.log("Facebook Login Clicked");

  return (
    <div className="container">
      {/* Success Popup */}
      {showSuccessPopup && (
        <div className="success-popup">
          <div className="success-popup-content" ref={popupRef}>
            <div className="success-icon"><i className="fas fa-check-circle"></i></div>
            <h3>Login Successful!</h3>
            <p>Redirecting to your dashboard...</p>
          </div>
        </div>
      )}

      {/* Failure Popup */}
      {showFailurePopup && (
        <div className="success-popup">
          <div className="success-popup-content" ref={popupRef}>
            <div className="success-icon" style={{ color: "red" }}>
              <i className="fas fa-times-circle"></i>
            </div>
            <h3>Account Not Found!</h3>
            <p>Please check your email and password or sign up.</p>
          </div>
        </div>
      )}

      <div className={`signup-container ${showSuccessPopup || showFailurePopup ? 'blur-background' : ''}`}>
        <div className="signup-header">
          <h2>Welcome Back!</h2>
          <p className="mb-0">Log in to continue to Stride</p>
        </div>
        <div className="signup-form">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email Address</label>
              <input
                type="email"
                className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              {errors.email && <div className="invalid-feedback">{errors.email}</div>}
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <div className="input-group">
                <input
                  type={showPassword ? "text" : "password"}
                  className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                  id="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
                <button
                  type="button"
                  className="btn btn-outline-secondary"
                  onClick={togglePasswordVisibility}
                >
                  <i className={`fas ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`}></i>
                </button>
                {errors.password && <div className="invalid-feedback">{errors.password}</div>}
              </div>
            </div>
            <div className="mb-3 d-flex justify-content-end">
              <Link to="/forgot-password" className="forgot-password-link">Forgot Password?</Link>
            </div>
            <button type="submit" className="submit-btn">Log In</button>
          </form>

          <div className="social-signup text-center my-4">
            <span>Or log in with</span>
          </div>

          <div className="d-flex justify-content-between">
            <button className="social-btn google-btn" onClick={handleGoogleLogin} type="button">
              <i className="fab fa-google"></i> Google
            </button>
            <button className="social-btn facebook-btn" onClick={handleFacebookLogin} type="button">
              <i className="fab fa-facebook-f"></i> Facebook
            </button>
          </div>

          <div className="login-link">
            <p>Don't have an account? <Link to="/signup">Sign up here</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
