import React from "react";
import "./scss/_horizontalScroll.scss";

type HorizontalScrollProps = {
  images: { id: number; src: string; alt: string; text: string; roomText: string; }[];
  onImageClick?: (image: { id: number; src: string; alt: string; text: string }) => void;
  imageHeight?: string;
  imageWidth?: string;
  backgroundCol?: string;
  enableHoverEffect?: boolean;
};

const HorizontalScroll = ({ images, onImageClick, imageHeight = "25rem", imageWidth = "12.5rem", backgroundCol = "#1C3620", enableHoverEffect = true,}: HorizontalScrollProps) => {
  return (
    <div className="scroll-container" style={{ background: backgroundCol}}>
      {images.map((image) => (
        <div key={image.id} className={`image-container ${enableHoverEffect ? "hover-enabled" : ""}`} style={{ flex: "0 0 auto", background: backgroundCol }}>
          <img
            src={image.src}
            alt={image.alt}
            className="horizontal-img"
            onClick={() => onImageClick?.(image)}
            style={{ height: imageHeight, width: imageWidth }}
          />
          <p className="overlay-text" onClick={() => onImageClick?.(image)}>{image.text}</p>
          <p className="room-text">{image.roomText}</p>
        </div>
      ))}
    </div>
  );
};

export default HorizontalScroll;
