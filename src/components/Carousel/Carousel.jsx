import React, { useState } from "react";
import arrowLeft from "../../assets/arrow-left.png";
import arrowRight from "../../assets/arrow-right.png";
import "../Carousel/carousel.css";

function Carousel({ slides }) {
  const [currentPic, setCurrentPic] = useState(0);
  const lenghtPic = slides?.length;

  const handleNext = () => {
    setCurrentPic(currentPic === lenghtPic - 1 ? 0 : currentPic + 1);
  };
  const handlePrevious = () => {
    setCurrentPic(currentPic === 0 ? lenghtPic - 1 : currentPic - 1);
  };

  return (
    <section className="carousel-container">
      <div className="carousel">
        {slides?.map((slide, index) => (
          <div key={index} className="item-carousel">
            {index === currentPic && (
              <img
                src={slide}
                className="carousel-pic"
                alt="location appartement"
              />
            )}
            {index === currentPic && (
              <span className="slider-number">
                {currentPic + 1}/{lenghtPic}
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
