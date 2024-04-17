import React, { useContext } from "react";
import "./cart.css";
import CartItem from "../../components/CartItem/CartItem";
import { CartContext } from "../../CartContext";

const Cart = () => {
  const { cartItems, removeItem } = useContext(CartContext);

  const getTotalPrice = () => {
    return cartItems.reduce(
      (total, item) => total + parseFloat(item.price) * item.quantity,
      0
    );
  };

  return (
    <div className="cart">
      <div className="side-nav">
        <div className="cart-items">
          {cartItems.map((item, index) => (
            <CartItem
              key={index}
              title={item.title}
              img={item.img}
              price={item.price}
              itemQuantity={item.quantity}
              removeItem={removeItem}
            />
          ))}
        </div>
        <div className="final">
          <div className="total">
            <p className="sub-total">
              Sub-Total :{" "}
              <span className="sub-totalprice">
                ₹ {getTotalPrice().toFixed(2)}
              </span>
            </p>
            <p className="taxes">
              total: Taxes :{" "}
              <span className="taxes-price">
                ₹ {getTotalPrice().toFixed(2) * 0.15}
              </span>
            </p>
            <p className="total-final">
              Total :{" "}
              <span className="Total-price">
                ₹ {(getTotalPrice() + getTotalPrice() * 0.15).toFixed(2)}
              </span>
            </p>
          </div>
          <div className="action">
            <button className="btn copy">Copy Order</button>
            <button className="btn buy">Order via Whatsapp</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
