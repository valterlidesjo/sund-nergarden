import React, { useEffect, useState } from "react";
import "./scss/_footer.scss";
import TextSection from "./TextSection";
import sundWineStarList from "../assets/sund-star-wine-list.jpg";
import sundTripAdvisor from "../assets/sund-trip-advisor.png";
import sundLogoWhite from "../assets/sund-logo-white.png";
import sundLogoBlack from "../assets/sund-logo1.png";
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
      return { backgroundColor: "#1C3620", color: "white", logo: sundLogoWhite }; // Startsidan
    } else if (location.pathname === "/rummen") {
      return { backgroundColor: "#1C3620", color: "white", logo: sundLogoWhite }; // Rummen
    } else if (location.pathname === "/mat-dryck") {
      return { backgroundColor: "#D3E2D5", color: "black", logo: sundLogoBlack }; // Mat & Dryck
    } else if (matchPath("/rummen/*", location.pathname)) {
      return { backgroundColor: "#D3E2D5", color: "black", logo: sundLogoBlack }; // Alla sidor under /rummen
    } else {
      return { backgroundColor, color, logo: sundLogoWhite }; // Standardvärden
    }
  };

  const { backgroundColor: dynamicBackground, color: dynamicColor, logo } = getFooterStyles();
    const [isDesktop, setIsDesktop] = useState(window.innerWidth > 600);
    useEffect(() => {
        const handleResize = () => {
          setIsDesktop(window.innerWidth > 768);
        };
    
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
      }, []);
  
  return (
    <>
      <div className="footer-container" style={{ backgroundColor: dynamicBackground }}>
        { isDesktop ? (
          <>
          <div className="footer-text-container" >
          <div className="sund-logo-container">
            <img src={logo} alt="Sund Nergården Logo" />
          </div>
          <div className="left-text">
            <TextSection text="Hantera Bokning" margin="1px 0" color={dynamicColor} />
            <TextSection text="Mat & Dryck" margin="1px 0" color={dynamicColor}/>
            <TextSection text="Kontakt" margin="1px 0" color={dynamicColor}/>
            <TextSection text="Villkor & Regler" margin="1px 0" color={dynamicColor}/>
            <TextSection text="Presentkort" margin="1px 0" color={dynamicColor}/>
          </div>


          <div className="contact-footer-container">
            <TextSection text="015 670 00 70" color={dynamicColor} margin="1px 0"/>
            <TextSection text="info@sundnergarden.se" color={dynamicColor} margin="1px 0"/>
            <TextSection text="Sund Nergården" color={dynamicColor} margin="1px 0"/>
            <TextSection text="619 94 Vagnhärad" color={dynamicColor} margin="1px 0"/>
            <TextSection text="Sverige" color={dynamicColor} margin="1px 0"/>
          </div>

          <div className="right-text">
            <TextSection text="Facebook" color={dynamicColor}  padding="0 2rem 0 0" margin="1px 0 1rem 0"/>
            <TextSection text="Instagram" color={dynamicColor} padding="0 2rem 0 0"/>
            <TextSection text="Youtube" color={dynamicColor}  padding="0 2rem 0 0"/>
          <div className="picture-container">
            <div className="recommend-pictures">
              <img src={sundWineStarList} alt="Wine Star List" />
              <img src={sundTripAdvisor} alt="Trip Advisor" />
            </div>
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
          </>
        ) : (
<>
        <div className="footer-text-container" >
          <div className="left-text">
            <TextSection text="Hantera Bokning" margin="1px 0" color={dynamicColor}/>
            <TextSection text="Mat & Dryck" margin="1px 0" color={dynamicColor}/>
            <TextSection text="Kontakt" margin="1px 0" color={dynamicColor}/>
            <TextSection text="Villkor & Regler" margin="1px 0" color={dynamicColor}/>
            <TextSection text="Presentkort" margin="1px 0" color={dynamicColor}/>
          </div>

          <div className="right-text">
            <TextSection text="Facebook" color={dynamicColor} textAlign="right" />
            <TextSection text="Instagram" color={dynamicColor} textAlign="right" />
            <TextSection text="Youtube" color={dynamicColor} textAlign="right" />
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
        </>
        )}
      </div>
    </>
  );
};

export default Footer;
