import React from "react";
import "./scss/_openingHours.scss";
import sundSunset from "../assets/sund-sunset.jpeg";
import TextSection from "../components/TextSection";

const OpeningHours = () => {
  return (
    <>
      <div className="open-container">
        <div className="open-pic-container">
          <picture>
            <source srcSet={sundSunset} type="image/webp" />
            <img src={sundSunset} alt="Sund Start Image" />
          </picture>

          <div className="open-header-container">
            <p className="open-header">Våra Öppetider!</p>
          </div>
        </div>
        <TextSection text="" />
      </div>
    </>
  );
};

export default OpeningHours;
