import React from "react";
import "./scss/_horizontalScroll.scss";

type HorizontalScrollProps = {
  images: { id: string; src: string; alt: string; text: string }[];
  onImageClick?: (id: string) => void;
};

const HorizontalScroll = ({ images, onImageClick }: HorizontalScrollProps) => {
  return (
    <div className="scroll-container">
      {images.map((image) => (
        <div key={image.id} style={{ flex: "0 0 auto" }}>
          <img
            src={image.src}
            alt={image.alt}
            className="horizontal-img"
            onClick={() => onImageClick?.(image.id)}
          />
          <p className="overlay-text">{image.text}</p>
        </div>
      ))}
    </div>
  );
};

export default HorizontalScroll;
