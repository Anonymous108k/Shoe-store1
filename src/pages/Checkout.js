import React, { useState, useContext, useEffect } from 'react';
import "../styles/checkout.css";
import { CartContext } from "../context/CartContext";
import { useNavigate } from 'react-router-dom';

const CheckoutPage = () => {
  // Initialize form state
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    paymentMethod: 'card',
    cardName: '',
    cardNumber: '',
    expiration: '',
    cvv: ''
  });

  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  // Load saved form data from localStorage for autocomplete suggestions
  useEffect(() => {
    // Clear any existing form data in localStorage to prevent persistence
    localStorage.removeItem('checkoutFormData');
    
    // No need to load data from localStorage on page load
    // This prevents the form from being pre-filled with previous data
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handlePaymentMethodChange = (e) => {
    setFormData(prevState => ({
      ...prevState,
      paymentMethod: e.target.value
    }));
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Manually validate the form
    const form = e.target.closest('form');
    if (!form.checkValidity()) {
      // Trigger browser's default validation UI
      form.reportValidity();
      return;
    }

    // We'll temporarily store the form data only during the submission process
    const dataToSave = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      phone: formData.phone,
      address: formData.address,
      city: formData.city,
      state: formData.state,
      zipCode: formData.zipCode,
      paymentMethod: formData.paymentMethod
    };
    
    // Store form data temporarily for this session
    sessionStorage.setItem('checkoutFormData', JSON.stringify(dataToSave));
    // Don't save to localStorage to avoid persistence between browser sessions

    try {
      const response = await fetch("http://localhost:5000/api/orders/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ formData, cartItems })
      });
      
      if (response.ok) {
        alert("Order Placed Successfully!");
        // Clear the sessionStorage after successful order
        sessionStorage.removeItem('checkoutFormData');
        navigate('/order-success');
      } else {
        alert("Failed to place order. Please try again.");
      }
    } catch (error) {
      console.error("Checkout error:", error);
      alert("An error occurred.");
    }
  };

  return (
    <div className="checkout-container">
      <div className="container py-5">
        <div className="row">
          {/* Main column - contains both form and order summary */}
          <div className="col-12">
            <h2 className="mb-4">Checkout</h2>
            <form id="checkoutForm" onSubmit={handleSubmit}>
              <div className="row">
                {/* Left column with form - Takes up 8/12 on md screens and larger */}
                <div className="col-md-8 mb-4">
                  {/* Shipping Information */}
                  <div className="card border-0 shadow-sm mb-4">
                    <div className="card-body">
                      <h4 className="card-title mb-4">Shipping Information</h4>
                      <div className="row">
                        <div className="col-md-6 mb-3">
                          <label className="form-label">First Name</label>
                          <input 
                            type="text" 
                            className="form-control" 
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            required 
                            autoComplete="given-name"
                          />
                        </div>
                        <div className="col-md-6 mb-3">
                          <label className="form-label">Last Name</label>
                          <input 
                            type="text" 
                            className="form-control" 
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleInputChange}
                            required 
                            autoComplete="family-name"
                          />
                        </div>
                      </div>
                      
                      <div className="row">
                        <div className="col-md-6 mb-3">
                          <label className="form-label">Email</label>
                          <input 
                            type="email" 
                            className="form-control" 
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required 
                            autoComplete="email"
                          />
                        </div>
                        <div className="col-md-6 mb-3">
                          <label className="form-label">Phone</label>
                          <input 
                            type="tel" 
                            className="form-control" 
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            required 
                            autoComplete="tel"
                          />
                        </div>
                      </div>
                      
                      <div className="mb-3">
                        <label className="form-label">Address</label>
                        <input 
                          type="text" 
                          className="form-control" 
                          name="address"
                          value={formData.address}
                          onChange={handleInputChange}
                          required 
                          autoComplete="street-address"
                        />
                      </div>
                      
                      <div className="row">
                        <div className="col-md-4 mb-3">
                          <label className="form-label">City</label>
                          <input 
                            type="text" 
                            className="form-control" 
                            name="city"
                            value={formData.city}
                            onChange={handleInputChange}
                            required 
                            autoComplete="address-level2"
                          />
                        </div>
                        <div className="col-md-4 mb-3">
                          <label className="form-label">State</label>
                          <input 
                            type="text" 
                            className="form-control" 
                            name="state"
                            value={formData.state}
                            onChange={handleInputChange}
                            required 
                            autoComplete="address-level1"
                          />
                        </div>
                        <div className="col-md-4 mb-3">
                          <label className="form-label">ZIP Code</label>
                          <input 
                            type="text" 
                            className="form-control" 
                            name="zipCode"
                            value={formData.zipCode}
                            onChange={handleInputChange}
                            required 
                            autoComplete="postal-code"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Payment Methods */}
                  <div className="card border-0 shadow-sm mb-4">
                    <div className="card-body">
                      <h4 className="card-title mb-4">Payment Method</h4>
                      <div className="payment-options mb-4">
                        {/* Credit/Debit Card */}
                        <div className="form-check payment-option mb-3 d-flex align-items-center">
                          <input 
                            type="radio" 
                            className="form-check-input" 
                            id="cardPayment" 
                            name="paymentMethod" 
                            value="card"
                            checked={formData.paymentMethod === 'card'}
                            onChange={handlePaymentMethodChange}
                          />
                          <div className="payment-logo ms-2 me-3">
                            <i className="fa fa-credit-card fa-lg text-primary"></i>
                          </div>
                          <label className="form-check-label" htmlFor="cardPayment">Credit/Debit Card</label>
                        </div>

                        {/* Card details - only show if card payment method is selected */}
                        {formData.paymentMethod === 'card' && (
                          <div className="card-details">
                            <div className="mb-3">
                              <label className="form-label">Name on Card</label>
                              <input 
                                type="text" 
                                className="form-control" 
                                name="cardName"
                                value={formData.cardName}
                                onChange={handleInputChange}
                                required={formData.paymentMethod === 'card'}
                                autoComplete="cc-name"
                              />
                            </div>
                            <div className="mb-3">
                              <label className="form-label">Card Number</label>
                              <input 
                                type="text" 
                                className="form-control" 
                                name="cardNumber"
                                value={formData.cardNumber}
                                onChange={handleInputChange}
                                required={formData.paymentMethod === 'card'}
                                autoComplete="cc-number"
                                placeholder="XXXX XXXX XXXX XXXX"
                              />
                            </div>
                            <div className="row">
                              <div className="col-md-6 mb-3">
                                <label className="form-label">Expiration Date</label>
                                <input 
                                  type="text" 
                                  className="form-control" 
                                  name="expiration"
                                  value={formData.expiration}
                                  onChange={handleInputChange}
                                  required={formData.paymentMethod === 'card'}
                                  autoComplete="cc-exp"
                                  placeholder="MM/YY"
                                />
                              </div>
                              <div className="col-md-6 mb-3">
                                <label className="form-label">CVV</label>
                                <input 
                                  type="text" 
                                  className="form-control" 
                                  name="cvv"
                                  value={formData.cvv}
                                  onChange={handleInputChange}
                                  required={formData.paymentMethod === 'card'}
                                  autoComplete="cc-csc"
                                  placeholder="XXX"
                                />
                              </div>
                            </div>
                          </div>
                        )}
                        
                        {/* Google Pay */}
                        <div className="form-check payment-option mb-3 d-flex align-items-center">
                          <input 
                            type="radio" 
                            className="form-check-input" 
                            id="gpayPayment" 
                            name="paymentMethod" 
                            value="gpay"
                            checked={formData.paymentMethod === 'gpay'}
                            onChange={handlePaymentMethodChange}
                          />
                          <div className="payment-logo ms-2 me-3">
                            <i className="fab fa-google-pay fa-lg text-info"></i>
                          </div>
                          <label className="form-check-label" htmlFor="gpayPayment">Google Pay</label>
                        </div>

                        {/* Display UPI ID field for GPay */}
                        {(formData.paymentMethod === 'gpay') && (
                          <div className="mb-3">
                            <label className="form-label">UPI ID</label>
                            <input 
                              type="text" 
                              className="form-control" 
                              placeholder="example@upi"
                              name="upiId"
                              required={formData.paymentMethod === 'gpay'}
                            />
                          </div>
                        )}
                        
                        {/* PhonePe */}
                        <div className="form-check payment-option mb-3 d-flex align-items-center">
                          <input 
                            type="radio" 
                            className="form-check-input" 
                            id="phonepayPayment" 
                            name="paymentMethod" 
                            value="phonepay"
                            checked={formData.paymentMethod === 'phonepay'}
                            onChange={handlePaymentMethodChange}
                          />
                          <div className="payment-logo ms-2 me-3">
                            <i className="fa fa-mobile-alt fa-lg text-indigo"></i>
                          </div>
                          <label className="form-check-label" htmlFor="phonepayPayment">PhonePe</label>
                        </div>
                        
                        {/* Display UPI ID field for PhonePe */}
                        {(formData.paymentMethod === 'phonepay') && (
                          <div className="mb-3">
                            <label className="form-label">UPI ID</label>
                            <input 
                              type="text" 
                              className="form-control" 
                              placeholder="example@upi"
                              name="upiId"
                              required={formData.paymentMethod === 'phonepay'}
                            />
                          </div>
                        )}
                        
                        {/* Amazon Pay */}
                        <div className="form-check payment-option mb-3 d-flex align-items-center">
                          <input 
                            type="radio" 
                            className="form-check-input" 
                            id="amazonpayPayment" 
                            name="paymentMethod" 
                            value="amazonpay"
                            checked={formData.paymentMethod === 'amazonpay'}
                            onChange={handlePaymentMethodChange}
                          />
                          <div className="payment-logo ms-2 me-3">
                            <i className="fab fa-amazon-pay fa-lg text-warning"></i>
                          </div>
                          <label className="form-check-label" htmlFor="amazonpayPayment">Amazon Pay</label>
                        </div>

                        {/* Display UPI ID field for Amazon Pay */}
                        {(formData.paymentMethod === 'amazonpay') && (
                          <div className="mb-3">
                            <label className="form-label">UPI ID</label>
                            <input 
                              type="text" 
                              className="form-control" 
                              placeholder="example@upi"
                              name="upiId"
                              required={formData.paymentMethod === 'amazonpay'}
                            />
                          </div>
                        )}
                        
                        {/* Net Banking */}
                        <div className="form-check payment-option mb-3 d-flex align-items-center">
                          <input 
                            type="radio" 
                            className="form-check-input" 
                            id="netbankingPayment" 
                            name="paymentMethod" 
                            value="netbanking"
                            checked={formData.paymentMethod === 'netbanking'}
                            onChange={handlePaymentMethodChange}
                          />
                          <div className="payment-logo ms-2 me-3">
                            <i className="fa fa-university fa-lg text-secondary"></i>
                          </div>
                          <label className="form-check-label" htmlFor="netbankingPayment">Net Banking</label>
                        </div>

                        {/* Display bank selection for Net Banking */}
                        {formData.paymentMethod === 'netbanking' && (
                          <div className="mb-3">
                            <label className="form-label">Select Bank</label>
                            <select 
                              className="form-select" 
                              name="selectedBank"
                              required={formData.paymentMethod === 'netbanking'}
                            >
                              <option value="">Select your bank</option>
                              <option value="sbi">State Bank of India</option>
                              <option value="hdfc">HDFC Bank</option>
                              <option value="icici">ICICI Bank</option>
                              <option value="axis">Axis Bank</option>
                              <option value="pnb">Punjab National Bank</option>
                            </select>
                          </div>
                        )}
                        
                        {/* Cash On Delivery */}
                        <div className="form-check payment-option mb-3 d-flex align-items-center">
                          <input 
                            type="radio" 
                            className="form-check-input" 
                            id="codPayment" 
                            name="paymentMethod" 
                            value="cod"
                            checked={formData.paymentMethod === 'cod'}
                            onChange={handlePaymentMethodChange}
                          />
                          <div className="payment-logo ms-2 me-3">
                            <i className="fa fa-money-bill fa-lg text-success"></i>
                          </div>
                          <label className="form-check-label" htmlFor="codPayment">Cash On Delivery</label>
                        </div>
                      </div>

                      {/* Note for COD */}
                      {formData.paymentMethod === 'cod' && (
                        <div className="alert alert-info">
                          <small>Cash on Delivery charges: ₹40 extra</small>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  {/* Submit button for the form - visible on mobile */}
                  <div className="d-md-none mb-4">
                    <button 
                      type="submit" 
                      className="place-order-btn btn w-100 py-2"
                      disabled={cartItems.length === 0}
                    >
                      Place Order
                    </button>
                  </div>
                </div>

                {/* Right column with order summary - Takes up 4/12 on md screens and larger */}
                <div className="col-md-4 mb-4">
                  <div className="card border-0 shadow-sm order-summary-card">
                    <div className="card-body">
                      <h4 className="card-title mb-4">Order Summary</h4>
                      {cartItems.length === 0 ? (
                        <p>Your cart is empty.</p>
                      ) : (
                        cartItems.map(item => (
                          <div key={item.id} className="d-flex justify-content-between mb-3">
                            <div>
                              <span>{item.name}</span>
                              <small className="text-muted d-block">x {item.quantity}</small>
                            </div>
                            <span>₹{(item.price * item.quantity).toLocaleString()}</span>
                          </div>
                        ))
                      )}
                      <hr />
                      <div className="d-flex justify-content-between mb-3">
                        <span>Subtotal</span>
                        <span>₹{calculateTotal().toLocaleString()}</span>
                      </div>
                      <div className="d-flex justify-content-between mb-3">
                        <span>Shipping</span>
                        <span>Free</span>
                      </div>
                      
                      {/* Add COD charges if applicable */}
                      {formData.paymentMethod === 'cod' && (
                        <div className="d-flex justify-content-between mb-3">
                          <span>COD Charge</span>
                          <span>₹40</span>
                        </div>
                      )}
                      
                      <hr />
                      <div className="d-flex justify-content-between mb-3 fw-bold">
                        <span>Total</span>
                        <span>₹{(calculateTotal() + (formData.paymentMethod === 'cod' ? 40 : 0)).toLocaleString()}</span>
                      </div>
                      
                      {/* Desktop submit button */}
                      <button 
                        type="submit" 
                        className="place-order-btn btn w-100 py-2 mt-3 d-none d-md-block"
                        disabled={cartItems.length === 0}
                      >
                        Place Order
                      </button>
                      
                      <div className="secure-checkout-indicator text-center mt-3">
                        <i className="fa fa-lock"></i> Secure Checkout
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;