import React, { useState } from 'react';
import "../styles/checkout.css";
import urbanrunners from '../image/urbanrunners.jpeg';
import oxfords from '../image/oxfords.jpeg';

const CheckoutPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    cardName: '',
    cardNumber: '',
    expiration: '',
    cvv: ''
  });

  const [cartItems] = useState([
    {
      id: 1,
      name: 'Urban Runners',
      category: 'Casual Sneakers',
      price: 6999,
      quantity: 1,
      image: urbanrunners
    },
    {
      id: 2,
      name: 'Classic Oxfords',
      category: 'Formal Shoes',
      price: 9499,
      quantity: 1,
      image: oxfords
    }
  ]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add checkout logic here
    alert('Order Placed Successfully!');
  };

  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-lg-8">
          <h2 className="mb-4">Checkout</h2>
          <form onSubmit={handleSubmit}>
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
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Phone Number</label>
                    <input 
                      type="tel" 
                      className="form-control" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required 
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
                    />
                  </div>
                  <div className="col-md-4 mb-3">
                    <label className="form-label">Zip Code</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      name="zipCode"
                      value={formData.zipCode}
                      onChange={handleInputChange}
                      required 
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="card border-0 shadow-sm">
              <div className="card-body">
                <h4 className="card-title mb-4">Payment Information</h4>
                <div className="mb-3">
                  <label className="form-label">Name on Card</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    name="cardName"
                    value={formData.cardName}
                    onChange={handleInputChange}
                    required 
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Card Number</label>
                  <div className="input-group">
                    <input 
                      type="text" 
                      className="form-control" 
                      name="cardNumber"
                      value={formData.cardNumber}
                      onChange={handleInputChange}
                      required 
                      placeholder="1234 5678 9012 3456"
                    />
                    <span className="input-group-text">
                      <i className="fab fa-cc-visa me-1"></i>
                      <i className="fab fa-cc-mastercard me-1"></i>
                      <i className="fab fa-cc-amex"></i>
                    </span>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Expiration</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      name="expiration"
                      value={formData.expiration}
                      onChange={handleInputChange}
                      required 
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
                      required 
                      placeholder="123"
                    />
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>

        <div className="col-lg-4">
          <div className="card border-0 shadow-sm">
            <div className="card-body">
              <h4 className="card-title mb-4">Order Summary</h4>
              {cartItems.map(item => (
                <div key={item.id} className="d-flex justify-content-between mb-3">
                  <div>
                    <span>{item.name}</span>
                    <small className="text-muted d-block">x {item.quantity}</small>
                  </div>
                  <span>₹{(item.price * item.quantity).toLocaleString()}</span>
                </div>
              ))}
              <hr />
              <div className="d-flex justify-content-between mb-3">
                <span>Subtotal</span>
                <span>₹{calculateTotal().toLocaleString()}</span>
              </div>
              <div className="d-flex justify-content-between mb-3">
                <span>Shipping</span>
                <span>Free</span>
              </div>
              <hr />
              <div className="d-flex justify-content-between mb-3 fw-bold">
                <span>Total</span>
                <span>₹{calculateTotal().toLocaleString()}</span>
              </div>
              <button 
                className="btn btn-dark w-100 py-2"
                onClick={handleSubmit}
              >
                Place Order
              </button>
            </div>
          </div>
          <div className="mt-4 text-center">
            <p className="text-muted">
              <i className="fas fa-shield-alt me-2 text-primary"></i>
              Secure Checkout
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;