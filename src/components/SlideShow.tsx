import { useState, useEffect } from "react";
import "./scss/_slideShow.scss";

type SlideshowProps = {
  images: { id: number; src: string; alt: string }[];
  interval?: number;
  text: string;
};

const SlideShow = ({ images, interval = 3000 }: SlideshowProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);
    return () => clearInterval(timer);
  }, [images.length, interval]);

  return (
    <div className="slideshow-container">
      
      {/* Bild */}
      <div className="image-wrapper">
        <img
          src={images[currentIndex].src}
          alt={images[currentIndex].alt}
          className="slideshow-image"
        />
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
