import React, { createContext, useState, useContext } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    const existingItemIndex = cartItems.findIndex(
      (cartItem) => cartItem.title === item.title
    );

    if (existingItemIndex !== -1) {
      const updatedCartItems = cartItems.map((cartItem, index) => {
        if (index === existingItemIndex) {
          return { ...cartItem, quantity: cartItem.quantity + 1 };
        }
        return cartItem;
      });
      setCartItems(updatedCartItems);
    } else {
      const newItem = { ...item, quantity: 1 };
      setCartItems((prevCartItems) => [...prevCartItems, newItem]);
    }
  };
  const removeItem = (itemTitle) => {
    const updatedCartItems = cartItems.filter(
      (cartItem) => cartItem.title !== itemTitle
    );
    setCartItems(updatedCartItems);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeItem }}>
      {children}
    </CartContext.Provider>
  );
};

// Export CartContext
export { CartContext };
