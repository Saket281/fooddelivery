import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./app.css";
import Menu from "./pages/menu/Menu";
import About from "./pages/About/About";
import Footer from "./components/Footer/Footer";
import Pay from "./pages/Pay/Pay";
import Cart from "./pages/Cart/Cart";
import { CartProvider } from "./CartContext";

const App = () => {
  return (
    <div className="container">
      <BrowserRouter>
        <CartProvider>
          <Navbar />
          <div className="appContainer">
            <Routes>
              <Route path="/" element={<Menu />} />
              <Route path="/about" element={<About />} />
              <Route path="/pay" element={<Pay />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </div>
          <Footer />
        </CartProvider>
      </BrowserRouter>
    </div>
  );
};

export default App;
