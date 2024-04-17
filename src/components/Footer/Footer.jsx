import React, { useState, useContext } from "react";
import { Link } from "react-router-dom"; 
import "./footer.css";
import { CartContext } from "../../CartContext";
const Footer = () => {
  const [activeItem, setActiveItem] = useState(null);
  const { cartItems } = useContext(CartContext);

  const handleItemClick = (itemName) => {
    setActiveItem(itemName);
  };
  const getTotalPrice = () => {
    return cartItems.reduce(
      (total, item) => total + parseFloat(item.price) * item.quantity,
      0
    );
  };

  return (
    <div className="footer">
      <Link
        to="/"
        className={`option ${activeItem === "menu" ? "active" : ""}`}
        onClick={() => handleItemClick("menu")}
      >
        <img src="https://yenu.menu/demo/images/menu.svg" alt="" />
        <span className="small">Menu</span>
      </Link>

      <Link
        to="/about"
        className={`option ${activeItem === "about" ? "active" : ""}`}
        onClick={() => handleItemClick("about")}
      >
        <img src="https://yenu.menu/demo/images/about.svg" alt="" />
        <span className="small">About</span>
      </Link>

      <Link
        to="/pay"
        className={`option ${activeItem === "pay" ? "active" : ""}`}
        onClick={() => handleItemClick("pay")}
      >
        <img src="https://yenu.menu/demo/images/pay.svg" alt="" />
        <span className="small">Pay Us</span>
      </Link>

      <Link
        to="/cart"
        className={`option ${activeItem === "cart" ? "active" : ""}`}
        onClick={() => handleItemClick("cart")}
      >
        <img src="https://yenu.menu/demo/images/cart_active.svg" alt="" />
        <span className="small">₹ {(getTotalPrice() + getTotalPrice() * 0.15).toFixed(2)}</span>
      </Link>
    </div>
  );
};

export default Footer;
