import React from "react";
import HorizontalScroll from "../components/HorizontalScroll";

const HomePage = () => {
  return (
    <HorizontalScroll
      images={images}
      onImageClick={handleImageClick}
      imageWidth={150}
      imageHeight={150}
      gap={20}
    />
  );
};

export default HomePage;
