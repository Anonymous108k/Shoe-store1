import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/signup.css";

const Signup = () => {
  const navigate = useNavigate();
  // State for form fields
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    newsletterSignup: false,
    termsAgree: false
  });

  // State for form validation errors
  const [errors, setErrors] = useState({});
  
  // State for success popup
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  
  // State for password visibility
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [id]: type === 'checkbox' ? checked : value
    }));
  };

  // Toggle password visibility
  const togglePasswordVisibility = (field) => {
    if (field === 'password') {
      setShowPassword(!showPassword);
    } else if (field === 'confirmPassword') {
      setShowConfirmPassword(!showConfirmPassword);
    }
  };

  // Validate form before submission
  const validateForm = () => {
    const newErrors = {};

    // First Name validation
    if (!formData.firstName.trim()) {
      newErrors.firstName = "First Name is required";
    }

    // Last Name validation
    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last Name is required";
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    // Phone validation (optional, but should be valid if provided)
    if (formData.phone.trim() && !/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Invalid phone number (10 digits required)";
    }

    // Password validation - Fixed to properly check requirements
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    } else if (!/\d/.test(formData.password)) {
      newErrors.password = "Password must include at least one number";
    } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(formData.password)) {
      newErrors.password = "Password must include at least one special character";
    }

    // Confirm Password validation
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    // Terms Agreement validation
    if (!formData.termsAgree) {
      newErrors.termsAgree = "You must agree to the Terms of Service";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (validateForm()) {
      try {
        const response = await axios.post("http://localhost:5000/api/signup", formData);
        console.log(response.data);
        setShowSuccessPopup(true);
        setTimeout(() => {
          navigate("/");
        }, 3000);
      } catch (error) {
        console.error(error);
        // Handle error (e.g., show an error message)
      }
    } else {
      console.log("Form has errors");
    }
  };

  // Social signup handlers (placeholder functions)
  const handleGoogleSignup = () => {
    console.log("Google Signup Clicked");
    // Implement Google OAuth signup
  };

  const handleFacebookSignup = () => {
    console.log("Facebook Signup Clicked");
    // Implement Facebook OAuth signup
  };

  return (
    <div className="container">
      {/* Success Popup */}
      {showSuccessPopup && (
        <div className="success-popup">
          <div className="success-popup-content">
            <div className="success-icon">
              <i className="fas fa-check-circle"></i>
            </div>
            <h3>Account Created Successfully!</h3>
            <p>Redirecting you to the home page...</p>
          </div>
        </div>
      )}
      
      <div className={`signup-container ${showSuccessPopup ? 'blur-background' : ''}`}>
        <div className="signup-header">
          <h2>Create Your Account</h2>
          <p className="mb-0">Join Stride for exclusive offers and faster checkout</p>
        </div>
        <div className="signup-form">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label htmlFor="firstName" className="form-label">First Name</label>
                <input
                  type="text"
                  className={`form-control ${errors.firstName ? 'is-invalid' : ''}`}
                  id="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
                {errors.firstName && <div className="invalid-feedback">{errors.firstName}</div>}
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="lastName" className="form-label">Last Name</label>
                <input
                  type="text"
                  className={`form-control ${errors.lastName ? 'is-invalid' : ''}`}
                  id="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
                {errors.lastName && <div className="invalid-feedback">{errors.lastName}</div>}
              </div>
            </div>
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
              <label htmlFor="phone" className="form-label">Phone Number (Optional)</label>
              <input
                type="tel"
                className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
                id="phone"
                value={formData.phone}
                onChange={handleChange}
              />
              {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
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
                  onClick={() => togglePasswordVisibility('password')}
                >
                  <i className={`fas ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`}></i>
                </button>
                {errors.password && <div className="invalid-feedback">{errors.password}</div>}
              </div>
              {!errors.password && (
                <small className="text-muted">Password must be at least 8 characters with a number and special character</small>
              )}
            </div>
            <div className="mb-3">
              <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
              <div className="input-group">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  className={`form-control ${errors.confirmPassword ? 'is-invalid' : ''}`}
                  id="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                />
                <button 
                  type="button" 
                  className="btn btn-outline-secondary" 
                  onClick={() => togglePasswordVisibility('confirmPassword')}
                >
                  <i className={`fas ${showConfirmPassword ? 'fa-eye-slash' : 'fa-eye'}`}></i>
                </button>
                {errors.confirmPassword && <div className="invalid-feedback">{errors.confirmPassword}</div>}
              </div>
            </div>
            <div className="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="newsletterSignup"
                checked={formData.newsletterSignup}
                onChange={handleChange}
              />
              <label className="form-check-label" htmlFor="newsletterSignup">
                Sign up for our newsletter for exclusive offers
              </label>
            </div>
            <div className="mb-3 form-check">
              <input
                type="checkbox"
                className={`form-check-input ${errors.termsAgree ? 'is-invalid' : ''}`}
                id="termsAgree"
                checked={formData.termsAgree}
                onChange={handleChange}
                required
              />
              <label className="form-check-label" htmlFor="termsAgree">
                I agree to the <a href="/terms">Terms of Service</a> and <a href="/privacy">Privacy Policy</a>
              </label>
              {errors.termsAgree && <div className="invalid-feedback d-block">{errors.termsAgree}</div>}
            </div>
            <button type="submit" className="submit-btn">Create Account</button>
          </form>

          <div className="social-signup text-center my-4">
            <span>Or sign up with</span>
          </div>

          <div className="d-flex justify-content-between">
            <button
              className="social-btn google-btn"
              onClick={handleGoogleSignup}
              type="button"
            >
              <i className="fab fa-google"></i> Google
            </button>
            <button
              className="social-btn facebook-btn"
              onClick={handleFacebookSignup}
              type="button"
            >
              <i className="fab fa-facebook-f"></i> Facebook
            </button>
          </div>

          <div className="login-link">
            <p>Already have an account? <Link to="/login">Log in here</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;