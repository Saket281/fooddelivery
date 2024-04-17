import React from "react";
import "./pay.css";

const Pay = () => {
  return (
    <div className="pay">
      <img
        src="https://yenu.menu/demo/images/qr.jpg"
        alt=""
        className="qr-img"
      />
      <p className="qr-text">Scan the QR code to pay</p>
      <div className="payment-option boxes">
        <div className="box">
          <img
            src="https://yenu.menu/demo/images/payment_processors/googlepay.png"
            alt=""
          />
          <h3 className="font">googlepay</h3>
          <p>yenumenu@icici</p>
        </div>
        <div className="box">
          <img
            src="https://yenu.menu/demo/images/payment_processors/phonepe.png"
            alt=""
          />
          <h3 className="font">phonepe</h3>
          <p>yenumenu@icici</p>
        </div>
        <div className="box">
          <img
            src="https://yenu.menu/demo/images/payment_processors/amazonpay.png"
            alt=""
          />
          <h3 className="font">amazonpay</h3>
          <p>yenumenu@icici</p>
        </div>
        <div className="box">
          <img
            src="https://yenu.menu/demo/images/payment_processors/paytm.png"
            alt=""
          />
          <h3 className="font">paytm</h3>
          <p>yenumenu@icici</p>
        </div>
      </div>
    </div>
  );
};

export default Pay;
