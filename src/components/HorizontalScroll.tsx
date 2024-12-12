import React from "react";

type HorizontalScrollProps = {
  images: { id: string; src: string; alt: string }[];
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
            // style={{ cursor: "pointer", width: "100px", height: "100px", objectFit: "cover" }}
            className="horizontal-img"
            onClick={() => onImageClick?.(image.id)}
          />
        </div>
      ))}
    </div>
  );
};

export default HorizontalScroll;
