import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/ordersuccesspage.css'; // Reuse the signup.css for consistent styling

const OrderSuccessPage = () => {
  const [orderNumber] = useState(`ORD-${Math.floor(100000 + Math.random() * 900000)}`);
  const navigate = useNavigate(); // ✅ Allows manual navigation

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card border-0 shadow-sm text-center">
            <div className="card-body py-5">
              <div className="success-icon mb-4">
                <i className="fas fa-check-circle text-success"></i>
              </div>
              <h2 className="mb-4">Order Successfully Placed!</h2>
              <p className="lead mb-2">Thank you for shopping with Stride!</p>
              <p className="mb-4">Your order <strong>#{orderNumber}</strong> has been confirmed.</p>

              <div className="order-details mb-4">
                <h5 className="mb-3">Order Details</h5>
                <div className="d-flex justify-content-between mb-2">
                  <span>Order Date:</span>
                  <span>{new Date().toLocaleDateString()}</span>
                </div>
                <div className="d-flex justify-content-between mb-2">
                  <span>Expected Delivery:</span>
                  <span>{new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toLocaleDateString()}</span>
                </div>
                <div className="d-flex justify-content-between mb-2">
                  <span>Payment Method:</span>
                  <span>Credit Card</span>
                </div>
              </div>

              <div className="alert alert-info mb-4">
                <i className="fas fa-envelope me-2"></i>
                A confirmation email has been sent to your registered email address.
              </div>

              <div className="d-flex gap-3 justify-content-center">
                <button 
                  className="btn btn-primary" 
                  onClick={() => navigate('/orders')} 
                >
                  <i className="fas fa-box me-2"></i> Track Order
                </button>
                <button 
                  className="btn btn-outline-dark" 
                  onClick={() => navigate('/')} 
                >
                  <i className="fas fa-home me-2"></i> Back to Home
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccessPage;