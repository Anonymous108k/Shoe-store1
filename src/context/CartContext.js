import React, { createContext, useState } from "react";
import urbanrunners from '../image/urbanrunners.jpeg';
import oxfords from '../image/oxfords.jpeg';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Urban Runners",
      category: "Casual Sneakers",
      price: 6999,
      quantity: 1,
      image: urbanrunners
    },
    {
      id: 2,
      name: "Classic Oxfords",
      category: "Formal Shoes",
      price: 9499,
      quantity: 1,
      image: oxfords
    }
  ]);

  const updateQuantity = (id, newQuantity) => {
    setCartItems(prevCart =>
      prevCart.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems(prevCart => prevCart.filter(item => item.id !== id));
  };

  return (
    <CartContext.Provider value={{ cartItems, setCartItems, updateQuantity, removeItem }}>
      {children}
    </CartContext.Provider>
  );
};