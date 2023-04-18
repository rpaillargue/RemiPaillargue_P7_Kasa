import React, { useState } from "react";
import arrowLeft from "../../assets/arrow-left.png";
import arrowRight from "../../assets/arrow-right.png";
import "../Carousel/carousel.css";

function Carousel({ slides }) {
  const [current, setCurrent] = useState(0); //je définie l'index du premier slide à 0
  const length = slides.length; // longueur du tableau de slides

  const handleNext = () => {
    setCurrent(current === length - 1 ? 0 : current + 1); // on repart au premier slide quand on arrive au dernier
  };
  const handlePrevious = () => {
    setCurrent(current === 0 ? length - 1 : current - 1); // on repart au dernier slide quand on est au premier
  };

  return (
    <section class="carousel-container">
      <div class="carousel">
        {slides.map((slide, index) => (
          <div key={index}>
            {index === current && (
              <img
                src={slide}
                class="carousel-pic"
                alt="location appartement"
              />
            )}
            {index === current && (
              <span class="slider-number">
                {current + 1}/{length}
              </span>
            )}
          </div>
        ))}
        <img
          src={arrowLeft}
          alt="gauche"
          class="left-arrow"
          onClick={handlePrevious}
        />
        <img
          src={arrowRight}
          alt="droite"
          class="right-arrow"
          onClick={handleNext}
        />
      </div>
    </section>
  );
}

export default Carousel;
