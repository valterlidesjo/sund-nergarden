import React, { useState, useEffect } from "react";
import "./scss/_slideShow.scss";

type SlideshowProps = {
  images: { id: string; src: string; alt: string }[];
  interval?: number; // Tid i millisekunder mellan bilder
  text: string;
};

const SlideShow = ({ images, interval = 3000, text }: SlideshowProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);
    return () => clearInterval(timer); // Rensa intervallet vid avmontering
  }, [images.length, interval]);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="slideshow-container">
      {/* Bild */}
      <div className="image-wrapper">
        <img
          src={images[currentIndex].src}
          alt={images[currentIndex].alt}
          className="slideshow-image"
        />
        <p className="page-text">{text}</p>
      </div>

      {/* Indikatorer */}
      <div className="dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default SlideShow;
