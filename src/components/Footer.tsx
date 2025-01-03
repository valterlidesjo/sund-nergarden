import React from "react";
import "./scss/_footer.scss";
import TextSection from "./TextSection";
import sundWineStarList from "../assets/sund-star-wine-list.jpg";
import sundTripAdvisor from "../assets/sund-trip-advisor.png";
import { matchPath, useLocation } from "react-router-dom";

interface FooterProps{
    backgroundColor?: string;
    color?: string;
}

const Footer: React.FC<FooterProps> = ({
  backgroundColor = "#1C3620",
  color = "white",
}) => {
  const location = useLocation();

  // Dynamiska stilar baserat på URL
  const getFooterStyles = () => {
    if (location.pathname === "/") {
      return { backgroundColor: "#1C3620", color: "white" }; // Startsidan
    } else if (location.pathname === "/rummen") {
      return { backgroundColor: "#D3E2D5", color: "black" }; // Rummen
    } else if (location.pathname === "/mat-dryck") {
      return { backgroundColor: "#D3E2D5", color: "black" }; // Mat & Dryck
    } else if (matchPath("/rummen/*", location.pathname)) {
      return { backgroundColor: "#D3E2D5", color: "black" }; // Alla sidor under /rummen
    } else {
      return { backgroundColor, color }; // Standardvärden
    }
  };

  const { backgroundColor: dynamicBackground, color: dynamicColor } = getFooterStyles();
  return (
    <>
      <div className="footer-container" style={{ backgroundColor: dynamicBackground }}>
        <div className="footer-text-container" >
          <div className="left-text">
            <TextSection text="Hantera Bokning" margin="1px 0" color={dynamicColor}/>
            <TextSection text="Mat & Dryck" margin="1px 0" color={dynamicColor}/>
            <TextSection text="Kontakt" margin="1px 0" color={dynamicColor}/>
            <TextSection text="Villkor & Regler" margin="1px 0" color={dynamicColor}/>
            <TextSection text="Presentkort" margin="1px 0" color={dynamicColor}/>
          </div>

          <div className="right-text">
            <TextSection text="Facebook" color={dynamicColor}/>
            <TextSection text="Instagram" color={dynamicColor}/>
            <TextSection text="Youtube" color={dynamicColor}/>
          </div>

          <div className="contact-container">
            <TextSection text="015 670 00 70" color={dynamicColor}/>
            <TextSection text="info@sundnergarden.se" color={dynamicColor}/>
            <TextSection text="619 94 Vagnhärad Sweden" color={dynamicColor}/>
          </div>

          <div className="picture-container">
            <TextSection text="Rekommenderas av" color={dynamicColor}/>
            <div className="recommend-pictures">
              <img src={sundWineStarList} alt="Wine Star List" />
              <img src={sundTripAdvisor} alt="Trip Advisor" />
            </div>
          </div>
        </div>
        <TextSection
          text="Copyright © 2024 Sund Nergården"
          textAlign="center"
          fontSize="1rem"
          margin="1rem 0 0 0"
          padding="0 0 2rem 0"
          color={dynamicColor}
        />
      </div>
    </>
  );
};

export default Footer;
