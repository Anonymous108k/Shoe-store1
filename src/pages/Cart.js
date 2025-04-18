import React from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import "../styles/cart.css";

const CartItem = ({ item, onUpdateQuantity, onRemove }) => {
  return (
    <div className="card mb-3 border-0 shadow-sm">
      <div className="row g-0 align-items-center">
        <div className="col-md-3">
          <img src={item.image} className="img-fluid rounded-start" alt={item.name} />
        </div>
        <div className="col-md-9">
          <div className="card-body">
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <h5 className="card-title">{item.name}</h5>
                <p className="text-muted mb-1">{item.category}</p>
                <p className="fw-bold">₹{item.price.toLocaleString()}</p>
              </div>
              <div className="d-flex align-items-center">
                <button 
                  className="btn btn-outline-dark btn-sm me-2"
                  onClick={() => onUpdateQuantity(item.id, Math.max(1, item.quantity - 1))}
                >
                  <i className="fas fa-minus"></i>
                </button>
                <span className="mx-2">{item.quantity}</span>
                <button 
                  className="btn btn-outline-dark btn-sm ms-2"
                  onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                >
                  <i className="fas fa-plus"></i>
                </button>
              </div>
            </div>
            <div className="d-flex justify-content-between align-items-center mt-3">
              <button 
                className="btn btn-outline-danger btn-sm"
                onClick={() => onRemove(item.id)}
              >
                <i className="fas fa-trash-alt me-1"></i> Remove
              </button>
              <p className="mb-0 fw-bold">
                Total: ₹{(item.price * item.quantity).toLocaleString()}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const CartPage = () => {
  const { cartItems, updateQuantity, removeItem } = useContext(CartContext);

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-lg-8">
          <h2 className="mb-4">Your Cart</h2>
          {cartItems.length === 0 ? (
            <div className="alert alert-info text-center">Your cart is empty.</div>
          ) : (
            cartItems.map(item => <CartItem key={item.id} item={item} onUpdateQuantity={updateQuantity} onRemove={removeItem} />)
          )}
        </div>
        <div className="col-lg-4">
          <div className="card border-0 shadow-sm" style={{top: "64px"}}>
            <div className="card-body">
              <h4 className="card-title mb-4">Order Summary</h4>
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
              <Link to="/checkout" className="btn btn-dark w-100 py-2">Proceed to Checkout</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;