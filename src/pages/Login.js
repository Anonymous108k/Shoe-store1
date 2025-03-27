import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/signup.css"; // Reuse the signup.css for consistent styling

const Login = () => {
  // State for form fields
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  // State for form validation errors
  const [errors, setErrors] = useState({});

  // Handle input changes
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [id]: value,
    }));
  };

  // Validate form before submission
  const validateForm = () => {
    const newErrors = {};

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    // Password validation
    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // If validation passes, proceed with login
      console.log("Form submitted", formData);
      // Here you would typically send the data to your backend for authentication
    } else {
      console.log("Form has errors");
    }
  };

  // Social login handlers (placeholder functions)
  const handleGoogleLogin = () => {
    console.log("Google Login Clicked");
    // Implement Google OAuth login
  };

  const handleFacebookLogin = () => {
    console.log("Facebook Login Clicked");
    // Implement Facebook OAuth login
  };

  return (
    <div className="container">
      <div className="signup-container">
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
              <input
                type="password"
                className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                id="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
              {errors.password && <div className="invalid-feedback">{errors.password}</div>}
            </div>
            <button type="submit" className="submit-btn">Log In</button>
          </form>

          <div className="social-signup text-center my-4">
            <span>Or log in with</span>
          </div>

          <div className="d-flex justify-content-between">
            <button
              className="social-btn google-btn"
              onClick={handleGoogleLogin}
              type="button"
            >
              <i className="fab fa-google"></i> Google
            </button>
            <button
              className="social-btn facebook-btn"
              onClick={handleFacebookLogin}
              type="button"
            >
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