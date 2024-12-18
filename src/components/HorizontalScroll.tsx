import React from "react";
import "./scss/_horizontalScroll.scss";

type HorizontalScrollProps = {
  images: { id: number; src: string; alt: string; text: string }[];
  onImageClick?: (image: { id: number; src: string; alt: string; text: string }) => void;
  imageHeight?: string;
  imageWidth?: string;
};

const HorizontalScroll = ({ images, onImageClick, imageHeight = "25rem", imageWidth = "12.5rem" }: HorizontalScrollProps) => {
  return (
    <div className="scroll-container">
      {images.map((image) => (
        <div key={image.id} style={{ flex: "0 0 auto" }}>
          <img
            src={image.src}
            alt={image.alt}
            className="horizontal-img"
            onClick={() => onImageClick?.(image)}
            style={{ height: imageHeight, width: imageWidth }}
          />
          <p className="overlay-text" onClick={() => onImageClick?.(image)}>{image.text}</p>
        </div>
      ))}
    </div>
  );
};

export default HorizontalScroll;
