import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/signup.css"; // Import the provided CSS file for styling

const Signup = () => {
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

  // Handle input changes
  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [id]: type === 'checkbox' ? checked : value
    }));
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

    // Password validation
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (!passwordRegex.test(formData.password)) {
      newErrors.password = "Password must be at least 8 characters, include a number and special character";
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
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // If validation passes, proceed with signup
      console.log("Form submitted", formData);
      // Here you would typically send the data to your backend
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
      <div className="signup-container">
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
              <input
                type="password"
                className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                id="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
              {errors.password ? (
                <div className="invalid-feedback">{errors.password}</div>
              ) : (
                <small className="text-muted">Password must be at least 8 characters with a number and special character</small>
              )}
            </div>
            <div className="mb-3">
              <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
              <input
                type="password"
                className={`form-control ${errors.confirmPassword ? 'is-invalid' : ''}`}
                id="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
              {errors.confirmPassword && <div className="invalid-feedback">{errors.confirmPassword}</div>}
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
                I agree to the <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>
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