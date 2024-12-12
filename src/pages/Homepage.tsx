import React from "react";
import HorizontalScroll from "../components/HorizontalScroll";
import sundCharkImage from "../assets/sund-chark.jpeg";

const images = [
  { id: "1", src: sundCharkImage, alt: "Image 1", text: "test" },
  { id: "1", src: sundCharkImage, alt: "Image 1", text: "test" },
  { id: "1", src: sundCharkImage, alt: "Image 1", text: "test" },
  { id: "1", src: sundCharkImage, alt: "Image 1", text: "test" },
  { id: "1", src: sundCharkImage, alt: "Image 1", text: "test" },
  { id: "1", src: sundCharkImage, alt: "Image 1", text: "test" },
  { id: "1", src: sundCharkImage, alt: "Image 1", text: "test" },
  { id: "1", src: sundCharkImage, alt: "Image 1", text: "test" },
];

const HomePage = () => {
  const handleImageClick = (id: string) => {
    alert(`Image clicked: ${id}`);
  };

  return <HorizontalScroll images={images} onImageClick={handleImageClick} />;
};

export default HomePage;
