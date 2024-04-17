import React, { useState,useEffect, useContext } from "react";
import "./itembox.css";
import { CartContext } from "../../CartContext";

const Itembox = ({ isveg, title, desc, price, img }) => {
  const { addToCart } = useContext(CartContext);

  const [showCounter, setShowCounter] = useState(false);
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    if (quantity > 0) {
      setShowCounter(true);
    }
  }, [quantity]);

  const handleIncrement = () => {
    const item = { isveg, title, desc, price, img };
    addToCart(item);
    setQuantity((prevQuantity) => prevQuantity + 1);
    setShowCounter(true);
  };

  const handleDecrement = () => {
    if (quantity > 0) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
    if (quantity === 1) {
      setShowCounter(false);
    }
  };

  const handleAddClick = () => {
    const item = { isveg, title, desc, price, img };
    addToCart(item);
    setQuantity(1);
    setShowCounter(true);
  };


  return (
    <div className="menuItem">
      <div className="itemDetails">
        <div className="itemType">
          <img src={isveg} alt="" className="sLogo" />
        </div>
        <p className="itemName">{title}</p>
        <p className="itemDescription">{desc}</p>
        <p className="itemPrice">{price}</p>
      </div>
      <div className="itemBuy">
        <img src={img} alt="" className="itemImage" />
        <span className="Btn">
          {showCounter ? (
            <div className="quantityControl">
              <button className="decrementBtn" onClick={handleDecrement}>
                –
              </button>
              <span className="quantity">{quantity}</span>
              <button className="incrementBtn" onClick={handleIncrement}>
                +
              </button>
            </div>
          ) : (
            <div className="addBtn">
              <button className="add-btn" onClick={handleAddClick}>
                ADD
              </button>
            </div>
          )}
        </span>
      </div>
    </div>
  );
};

export default Itembox;
