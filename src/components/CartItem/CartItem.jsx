import React, { useState, useContext } from "react";
import "./Cartitem.css";
import { CartContext } from "../../CartContext";

const CartItem = ({ title, img, price, itemQuantity }) => {
  const { removeItem, addToCart } = useContext(CartContext);

  const [quantity, setQuantity] = useState(itemQuantity);

  const handleIncrement = () => {
    const item = { title, price, img };
    addToCart(item);
    setQuantity((quantity) => quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity === 1) {
      removeItem(title);
    } else {
      setQuantity((quantity) => quantity - 1);
    }
  };

  const deleteData = () => {
    removeItem(title);
  };

  return (
    <div className="cartitems">
      <div className="cartitem">
        <div className="cartImageBuy">
          <div>
            <img src={img} alt={title} className="cartImage" />
          </div>
          <span className="qty-change">
            <div className="QtyBtn">
              <button className="btn-qty" onClick={handleDecrement}>
                -
              </button>
              <span className="qty">{quantity}</span>
              <button className="btn-qty" onClick={handleIncrement}>
                +
              </button>
            </div>
          </span>
        </div>
        <div className="cartItemDetails">
          <strong className="cartName">{title}</strong>
          <p className="price small">{price}</p>
        </div>
        <button onClick={deleteData}>
          <i className="trash">
            <img src="https://yenu.menu/demo/images/trash.svg" alt="" />
          </i>
        </button>
      </div>
    </div>
  );
};

export default CartItem;
