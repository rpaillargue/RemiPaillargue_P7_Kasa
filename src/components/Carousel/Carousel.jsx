import React, { useState } from "react";
import "../Carousel/carousel.css";

function Carousel() {
  const [index, setIndex] = useState(0);
  const images = [
    "https://via.placeholder.com/800x400?text=Slide+1",
    "https://via.placeholder.com/800x400?text=Slide+2",
    "https://via.placeholder.com/800x400?text=Slide+3",
  ];
  const length = images.length;

  const handlePrevious = () => {
    const newIndex = index - 1;
    setIndex(newIndex < 0 ? length - 1 : newIndex);
  };

  const handleNext = () => {
    const newIndex = index + 1;
    setIndex(newIndex >= length ? 0 : newIndex);
  };

  return (
    <section className="carousel">
      <button onClick={handlePrevious} className="arrow-left">
        Previous
      </button>
      <button onClick={handleNext} className="arrow-right">
        Next
      </button>
      <img src={images[index]} alt={`Slide ${index}`} />
    </section>
  );
}

export default Carousel;
