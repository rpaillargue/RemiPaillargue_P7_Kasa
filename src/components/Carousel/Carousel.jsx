import React, { useState } from "react";
import arrowLeft from "../../assets/arrow-left.png";
import arrowRight from "../../assets/arrow-right.png";
import "../Carousel/carousel.css";

function Carousel({ slides }) {
  const [current, setCurrent] = useState(0);

  const handleNext = () => {
    setCurrent(current === slides.length - 1 ? 0 : current + 1);
  };
  const handlePrevious = () => {
    setCurrent(current === 0 ? slides.length - 1 : current - 1);
  };

  return (
    <section className="carousel-container">
      <div className="carousel">
        {slides.map((slide, index) => (
          <div key={index}>
            {index === current && (
              <img
                src={slide}
                className="carousel-pic"
                alt="location appartement"
              />
            )}
            {index === current && (
              <span className="slider-number">
                {current + 1}/{slides.length}
              </span>
            )}
          </div>
        ))}
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
