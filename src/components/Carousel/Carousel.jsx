import React, { useState } from "react";
import arrowLeft from "../../assets/arrow-left.png";
import arrowRight from "../../assets/arrow-right.png";
import "../Carousel/carousel.css";

function Carousel({ slides }) {
  const [currentPic, setCurrentPic] = useState(0);
  const lengthPic = slides?.length;

  const handleNext = () => {
    setCurrentPic((currentPic + 1) % lengthPic);
  };

  const handlePrevious = () => {
    setCurrentPic((currentPic - 1 + lengthPic) % lengthPic);
  };

  return (
    <section className="carousel-container">
      <div className="carousel">
        <div className="carousel-wrapper">
          {slides?.map((slide, index) => (
            <div
              key={index}
              className={`item-carousel ${
                index === currentPic ? "active" : ""
              }`}
            >
              <img
                src={slide}
                className="carousel-pic"
                alt="location appartement"
              />
            </div>
          ))}
        </div>
        <span className="slider-number">
          {currentPic + 1}/{lengthPic}
        </span>
        <img
          src={arrowLeft}
          alt="gauche"
          className="left-arrow"
          onClick={handlePrevious}
        />
        <img
          src={arrowRight}
          alt="droite"
          className="right-arrow"
          onClick={handleNext}
        />
      </div>
    </section>
  );
}
export default Carousel;
