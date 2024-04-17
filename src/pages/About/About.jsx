import React from "react";
import Carousel from "../../components/Carousel/Carousel";
import slides from "../../Data/carouselData";
import "./about.css";
const About = () => {
  return (
    <div className="about">
      <div className="galleries">
        <Carousel slides={slides} />
      </div>
      <div className="about-1">
        <p className="about-title2">Timings</p>
        <p className="about-desc">07:00 - 20:00</p>
        <p className="about-title2">Address:</p>
        <p className="about-desc">
          2nd Floor, Arogya Soudha Opposite Kulshekar Post Office Kulshekar
          Mangaluru Karnataka India - 575001
        </p>
        <p className="about-title2">Phone:</p>
        <p className="about-desc3">
          <a href="tel:+918197628777">+918197628777</a>
        </p>
        <p className="about-title2">Whatsapp:</p>
        <p className="about-desc3">
          <a href="https://wa.me/918762582739">+918762582739</a>
        </p>
        <ul id="social" className="keen-slider horizontal_list social">
          <li className="facebook keen-slider__slide">
            <a href="https://www.facebook.com/MyYenuMenu/">Facebook</a>
          </li>
          <li className="instagram keen-slider__slide">
            <a href="https://www.instagram.com/yenumenu/">Instagram</a>
          </li>
          <li className="youtube keen-slider__slide">
            <a href="https://www.youtube.com/">YouTube</a>
          </li>
          <li className="twitter keen-slider__slide">
            <a href="https://twitter.com/">Twitter</a>
          </li>
        </ul>
        <div className="downfiles">
          <p className="about-title2">Services:</p>
          <p className="about-desc">
            <a href="https://wa.me/918762582739">Dine-in, Takeaway, Delivery</a>
          </p>
          <p className="about-title2">Cuisines:</p>
          <p className="about-desc">
            <a href="https://wa.me/918762582739">
              South Indian Vegetarian, North Indian Vegetarian
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
