import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="left">
        <div className="heading">Demo Restaurant</div>
        <div className="para">
          Multi cuisine restaurant situated in the heart of the city
        </div>
      </div>
      <div className="right">
        <img
          src="https://yenu.menu/demo/images/logo.jpg"
          alt="logo"
          className="logo"
        />
      </div>
    </div>
  );
};

export default Navbar;
