import React, { useState, useContext } from "react";
import "./menu.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Itembox from "../../components/itembox/Itembox";
import BeverageData from "../../Data/BeverageData";
import startersData from "../../Data/startersData";
import mainCourse from "../../Data/mainCourse";
import SoupsData from "../../Data/SoupsData";
import desertsData from "../../Data/desertsData";
import { CartContext } from "../../CartContext";

const Menu = () => {
  const [showBeverages, setShowBeverages] = useState(true);
  const [showStarters, setShowStarters] = useState(true);
  const [showMain, setShowMain] = useState(true);
  const [showDeserts, setShowDeserts] = useState(true);
  const [showSoups, setShowSoups] = useState(true);

  const { addToCart } = useContext(CartContext);

  const toggleBeverages = () => {
    setShowBeverages((prevShowBeverages) => !prevShowBeverages);
  };
  const toggleStarters = () => {
    setShowStarters((prevShowStarters) => !prevShowStarters);
  };
  const toggleMain = () => {
    setShowMain((prevShowMain) => !prevShowMain);
  };
  const toggleDeserts = () => {
    setShowDeserts((prevShowDeserts) => !prevShowDeserts);
  };
  const toggleSoups = () => {
    setShowSoups((prevShowSoups) => !prevShowSoups);
  };
  const [activeSlide, setActiveSlide] = useState(0);

  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    focusOnSelect: true,
    centerPadding: "60px",
    beforeChange: (current, next) => setActiveSlide(next),
  };
  const categories = [
    { id: 1, name: "Beverages", onClick: toggleBeverages },
    { id: 2, name: "Starters", onClick: toggleStarters },
    { id: 3, name: "Main course", onClick: toggleMain },
    { id: 4, name: "Soups", onClick: toggleSoups },
    { id: 5, name: "Deserts", onClick: toggleDeserts },
  ];

  return (
    <div className="menu-container">
      <div className="menu-categories">
        <Slider {...settings}>
          {categories.map((category) => (
            <div key={category.id}>
              <a
                href={`#${category.name.toLowerCase()}`}
                onClick={category.onClick}
                className={activeSlide === category.id - 1 ? "active" : ""}
              >
                {category.name}
              </a>
            </div>
          ))}
        </Slider>
      </div>
      <div className="menu">
        <div className="Beverages" id="beverages">
          <h3 className="categoryName" onClick={toggleBeverages}>
            Beverages{" "}
            <span className="arrow1">
              {showBeverages ? "\u25BC" : "\u25B2"}
            </span>
          </h3>
          {showBeverages &&
            BeverageData.map((item, index) => (
              <Itembox
                key={index}
                isveg={item.isveg}
                title={item.title}
                desc={item.desc}
                price={item.price}
                img={item.img}
                addToCart={addToCart}
              />
            ))}
        </div>
        <div className="Beverages" id="starters">
          <h3 className="categoryName" onClick={toggleStarters}>
            Starters{" "}
            <span className="arrow1">{showStarters ? "\u25BC" : "\u25B2"}</span>
          </h3>
          {showStarters &&
            startersData.map((item, index) => (
              <Itembox
                key={index}
                isveg={item.isveg}
                title={item.title}
                desc={item.desc}
                price={item.price}
                img={item.img}
                addToCart={addToCart}
              />
            ))}
        </div>
        <div className="Beverages" id="main course">
          <h3 className="categoryName" onClick={toggleMain}>
            Main Course{" "}
            <span className="arrow1">{showMain ? "\u25BC" : "\u25B2"}</span>
          </h3>
          {showMain &&
            mainCourse.map((item, index) => (
              <Itembox
                key={index}
                isveg={item.isveg}
                title={item.title}
                desc={item.desc}
                price={item.price}
                img={item.img}
                addToCart={addToCart}
              />
            ))}
        </div>
        <div className="Beverages" id="soups">
          <h3 className="categoryName" onClick={toggleSoups}>
            Soups{" "}
            <span className="arrow1">{showSoups ? "\u25BC" : "\u25B2"}</span>
          </h3>
          {showSoups &&
            SoupsData.map((item, index) => (
              <Itembox
                key={index}
                isveg={item.isveg}
                title={item.title}
                desc={item.desc}
                price={item.price}
                img={item.img}
                addToCart={addToCart}
              />
            ))}
        </div>
        <div className="Beverages" id="deserts">
          <h3 className="categoryName" onClick={toggleDeserts}>
            Deserts{" "}
            <span className="arrow1">{showDeserts ? "\u25BC" : "\u25B2"}</span>
          </h3>
          {showDeserts &&
            desertsData.map((item, index) => (
              <Itembox
                key={index}
                isveg={item.isveg}
                title={item.title}
                desc={item.desc}
                price={item.price}
                img={item.img}
                addToCart={addToCart}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
