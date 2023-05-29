import React, { useState } from "react";
import arrowLeft from "../../assets/arrow-left.png";
import arrowRight from "../../assets/arrow-right.png";
import "../Carousel/carousel.css";

function Carousel({ slides }) {
  // State pour suivre l'index de la photo actuelle
  const [currentPic, setCurrentPic] = useState(0);
  const lengthPic = slides?.length; // Nombre total de photos

  // Fonction pour passer à la photo suivante
  const handleNext = () => {
    setCurrentPic((currentPic + 1) % lengthPic);
  };

  // Fonction pour revenir à la photo précédente
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
              {/* Affiche la photo */}
              <img
                src={slide}
                className="carousel-pic"
                alt="location appartement"
              />
            </div>
          ))}
        </div>
        {/* Affiche le numéro de la photo actuelle */}
        {lengthPic > 1 && (
          <span className="slider-number">
            {currentPic + 1}/{lengthPic}
          </span>
        )}
        {lengthPic > 1 && (
          <>
            {/* Flèche gauche pour passer à la photo précédente */}
            <img
              src={arrowLeft}
              alt="gauche"
              className="left-arrow"
              onClick={handlePrevious}
            />
            {/* Flèche droite pour passer à la photo suivante */}
            <img
              src={arrowRight}
              alt="droite"
              className="right-arrow"
              onClick={handleNext}
            />
          </>
        )}
      </div>
    </section>
  );
}
export default Carousel;
