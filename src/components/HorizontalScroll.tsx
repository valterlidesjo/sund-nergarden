import React from "react";
import "./scss/_horizontalScroll.scss";

type HorizontalScrollProps = {
  images: {
    id: number;
    src: string;
    webpSrc: string;
    alt: string;
    text: string;
    roomText: string;
  }[];
  onImageClick?: (image: {
    id: number;
    src: string;
    alt: string;
    text: string;
  }) => void;
  imageHeight?: string;
  imageWidth?: string;
  backgroundCol?: string;
  enableHoverEffect?: boolean;
  padding?: string;
};

const HorizontalScroll = ({
  images,
  onImageClick,
  imageHeight = "25rem",
  imageWidth = "12.5rem",
  backgroundCol = "#1C3620",
  enableHoverEffect = true,
  padding = "1rem",
}: HorizontalScrollProps) => {
  return (
    <div
      className="scroll-container"
      style={{ background: backgroundCol, padding: padding }}
    >
      {images.map((image) => (
        <div
          key={image.id}
          className={`image-container ${
            enableHoverEffect ? "hover-enabled" : ""
          }`}
          style={{ flex: "0 0 auto", background: backgroundCol }}
        >
          <picture>
            <source srcSet={image.webpSrc} type="image/webp" />
            <img
              src={image.src}
              alt={image.alt}
              className="horizontal-img"
              onClick={() => onImageClick?.(image)}
              style={{ height: imageHeight, width: imageWidth }}
              loading="lazy"
              decoding="async"
            />
          </picture>
          <p className="overlay-text" onClick={() => onImageClick?.(image)}>
            {image.text}
          </p>
          <p className="room-text">{image.roomText}</p>
        </div>
      ))}
    </div>
  );
};

export default HorizontalScroll;
